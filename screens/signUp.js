import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { db } from "../config";
import { auth } from '../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { doc, setDoc, getDoc } from "firebase/firestore";
export default function SignUpPage({ navigation }) {
  const [secureText, setSecureText] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");


  const handleSignUp = () => {

    if (email == "" || password == "" || username == "") {
      Alert.alert("Please fill all fields");
      return;
    }
    if (getDoc(doc(db, "users", email)).then(docData => {
      if (docData.exists()) {
        Alert.alert("Email already exists")
        return;
      }
      else {
        setDoc(doc(db, "users", email), {
          username: username,
          email: email,
          password: password,
          phone: "+1 234 567 890",
          profileImage: null,
        })
          .then(() => {
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                console.log("User registered successfully");
                const user = userCredential.user;
                console.log("User ID: ", userCredential.user.uid);
                // add navigation here, for example using React Navigation
              })
              .catch((error) => {
                //  Alert.alert("Error", error.message);
                console.log(error.message);
              });


            navigation.navigate("MainTabs");
          })
          .catch((error) => {
            console.log("Error adding user: ", error);
            Alert.alert("Error", "Failed to create account. Please try again.");
          });
      }
    }));


  }
  useEffect(() => {
    global.email1 = email;
    global.username1 = username;
    global.password1 = password;
    global.phone1 = "+1 234 567 890";
  }, [email])
  return (

    <View style={styles.container}>
      <View style={{ textAlign: "center", justifyContent: "center", alignItems: "center", position: "relative", bottom: -30 }}>
        <Text style={styles.headingtxt}>Create Account</Text>
        <Text style={styles.subheadingtxt}>Fill your information below or register

        </Text>
        <Text style={styles.subheadingtxt}>with social media</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formtxt}>Full Name</Text>
        <TextInput style={styles.formInput} placeholder="John Doe"
          onChangeText={setUsername}
        />

        <Text style={styles.formtxt}>Email</Text>
        <TextInput style={styles.formInput} placeholder="example@gmail.com"
          onChangeText={setEmail} />

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

        <TouchableOpacity style={styles.btn}
          onPress={handleSignUp}
        // onPress={()=>{
        //   if(email=="" || password=="" || username==""){
        //     Alert.alert("Please fill all fields");}
        //   else{
        //   navigation.navigate("MainTabs")
        //           }          }}
        >
          <Text style={styles.btntxt}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.optionContainer}>
          <View style={styles.line} />
          <Text style={styles.optionstxt}>Or sign up with</Text>
          <View style={styles.line} />
        </View>

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
        <Pressable onPress={() => {
          navigation.navigate("Login")
        }}>
          <View style={styles.optionContainer}>
            <Text>Already have an account?</Text>
            <Text style={{ color: "#2B74FF", textDecorationLine: "underline" }}> Sign In</Text>
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
    marginBottom: 15,
    textAlign: "center",
  },
  subheadingtxt: {
    fontSize: 16,
    color: "#989898",
    marginBottom: 10,
  },
  formContainer: {
    width: "90%",
    marginTop: 40,
    position: "relative",
    bottom: -20,

  },
  formtxt: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
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
