import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import * as ImagePicker from "expo-image-picker";
import {db} from "../config";
import { doc, setDoc,getDoc, updateDoc } from "firebase/firestore";
export default function ProfileScreen({ navigation }) {
    const [name, setName] = useState(global.username1);
    const [email, setEmail] = useState(global.email1);
    const [phone, setPhone] = useState(global.phone1);
    const [profileImage, setProfileImage] = useState(global.profileImage1);
    useEffect(()=>{
        setEmail(global.email1);
        // print(global.email1);
        // print(email);
        // getDoc(doc(db,"users",email)).then(docData=>{
        //     if(docData.exists()){
        //         setEmail(docData.data().email);
        //         setName(docData.data().username);
        //         setPhone(docData.data().phone);
        //         setProfileImage(docData.data().profileImage);
        //     }
        // })
    },[])
    // ✅ Permission Request on Component Mount
    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== "granted") {
                Alert.alert("Permission Required", "You need to allow access to your gallery.");
            }
        })();
    }, []);


  

    const handleProfileUpdate = () => {
        if(email==="" || name==="" || phone===""){
            Alert.alert("Error","Please fill all the fields")
            return;
        }
        getDoc(doc(db,"users",email)).then(docData=>{
            if(docData.exists()){
                updateDoc(doc(db,"users",email),{
                    username:name,
                    phone:phone,
                    profileImage:profileImage
                }).then(()=>{
                    Alert.alert("data updated successfully");
                }).catch((error)=>{
                    console.log("Error updating data: ", error);
                    Alert.alert("Error", "Failed to update profile. Please try again.");
                })
            }else{
                Alert.alert("Error","No User Exists with this email")
                return;
            }
        })
    }
  
    // ✅ Image Picker Function (Fixed Version)
    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            if (!result.canceled) {
                setProfileImage(result.assets[0].uri);
            }
        } catch (error) {
            Alert.alert("Error", "Something went wrong while picking the image.");
        }
    };

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Icon name="arrow-left" size={24} color="black" />
            </TouchableOpacity>

            {/* Profile Heading */}
            <Text style={styles.title}>Complete Your Profile</Text>
            <Text style={styles.subtitle}>Don't worry, only you can see your personal data.</Text>

            {/* Profile Image Section */}
            <View style={styles.profileContainer}>
                <TouchableOpacity onPress={pickImage}>
                    <Image
                        source={profileImage ? { uri: profileImage } : require("../assets/bed1.png")}
                        style={styles.profileImage}
                    />
                    <View style={styles.editIcon}>
                        <Icon name="edit-2" size={14} color="white" />
                    </View>
                </TouchableOpacity>
            </View>

            {/* Input Fields */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput style={styles.input} value={name} onChangeText={setName} />

                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} value={email} 
                // onChangeText={setEmail} keyboardType="email-address" 
                editable={false} />

                <Text style={styles.label}>Phone</Text>
                <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
            </View>

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton} onPress={handleProfileUpdate}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    backButton: {
        position: "absolute",
        top: 50,
        left: 10,
        padding: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black",
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
        marginBottom: 20,
    },
    profileContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#ddd",
    },
    editIcon: {
        position: "absolute",
        bottom: 5,
        right: 5,
        backgroundColor: "#2B74FF",
        borderRadius: 15,
        padding: 5,
    },
    inputContainer: {
        width: "100%",
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
        marginBottom: 5,
    },
    input: {
        width: "100%",
        padding: 10,
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        marginBottom: 15,
    },
    saveButton: {
        marginTop: 20,
        backgroundColor: "#2B74FF",
        width: "90%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    saveButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});
