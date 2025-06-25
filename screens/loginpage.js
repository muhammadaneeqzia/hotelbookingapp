import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import { 
  StyleSheet, Text, TextInput, View, TouchableOpacity, 
  Pressable, Alert 
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { db } from "../config";
import { doc,getDoc } from "firebase/firestore";

export default function LoginPage({ navigation }) {
  const [secureText, setSecureText] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("+1 234 567 890");
  const [profileImage, setProfileImage] = useState(null);
  const handleLogin =()=>{
    if(email==="" || password===""){
      Alert.alert("Error","Please fill all the fields")
      return;}
      getDoc(doc(db,"users",email)).then(docData=>{
        if(docData.exists()){
          global.phone1=docData.data().phone;
          global.username1=docData.data().username;
          global.profileImage1=docData.data().profileImage;

        

          if(docData.data().password!==password){
            Alert.alert("Error","Incorrect Password")
            return;
          }
          else{
           

            navigation.navigate("MainTabs")
          }
        }
        else{
          Alert.alert("No User Exists with this email")
          return;
        }
      })
  }


 useEffect(()=>{
  global.email1=email;
  //  getDoc(doc(db,"users",email)).then(docData=>{
  //   if(docData.exists()){
     
  //   }
 },[email])

  return (
    <View style={styles.container}>
      <View> 
        <Text style={styles.headingtxt}>Sign In</Text>
        <Text style={styles.subheadingtxt}>Hi! Welcome back, you've been missed</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formtxt}>Email</Text>
        <TextInput style={styles.formInput} placeholder="example@gmail.com" onChangeText={setEmail} />

        <Text style={styles.formtxt}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="**************"
            secureTextEntry={secureText}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Icon name={secureText ? "eye-off" : "eye"} size={20} color="gray" />
          </TouchableOpacity>
        </View>

        <Pressable onPress={() => navigation.navigate("CreatePassword")}>
          <Text style={styles.passforgettxt}>Forgot Password?</Text>
        </Pressable>

        <TouchableOpacity 
          style={styles.btn} 
          onPress={handleLogin}
        >
          <Text style={styles.btntxt}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.optionContainer}>
          <View style={styles.line} />
          <Text style={styles.optionstxt}>Or sign in with</Text>
          <View style={styles.line} />
        </View>

        {/* Social Media Buttons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialmedia}>
            <FontAwesome name="facebook" size={30} color="#1877F2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialmedia}>
            <FontAwesome name="google" size={30} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialmedia}>
            <FontAwesome name="apple" size={30} color="#000" />
          </TouchableOpacity>
        </View>

        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <View style={styles.optionContainer}>
            <Text>Don't have an account? </Text>
            <Text style={{ color: "#2B74FF", textDecorationLine: "underline" }}>Sign Up</Text>
          </View>
        </Pressable>
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headingtxt: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 18,
    textAlign: "center",
  },
  subheadingtxt: {
    fontSize: 16,
    color: "#989898",
    marginBottom: 18,
    textAlign: "center",
  },
  formContainer: {
    width: "90%",
    marginTop: 50,
  },
  formtxt: {
    fontSize: 16,
    color: "black",
    marginBottom: 8,
    marginLeft: 5,
  },
  formInput: {
    height: 50,
    backgroundColor: "#F0F0F0",
    padding: 15,
    marginBottom: 18,
    borderRadius: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 18,
  },
  passwordInput: {
    flex: 1,
    height: 50,
  },
  passforgettxt: {
    color: "#2B74FF",
    textAlign: "right",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#2B74FF",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  btntxt: {
    color: "white",
    fontSize: 18,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  optionstxt: {
    color: "#989898",
    textAlign: "center",
    marginHorizontal: 10,
  },
  line: {
    height: 2,
    width: 100,
    backgroundColor: "#F0F0F0",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  socialmedia: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#D1D1D1", 
    marginHorizontal: 10,
  },
});
