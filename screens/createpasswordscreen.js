import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Pressable } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function CreatePasswordScreen({navigation}) {
  const [secureText, setSecureText] = useState(true);
  const [confirmSecureText, setConfirmSecureText] = useState(true);
  
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
      <Text style={styles.heading}>Create New Password</Text>
      <Text style={styles.subheading}>Your new password must be different from previous passwords.</Text>
      
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="****************" secureTextEntry={secureText} />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Icon name={secureText ? "eye-off" : "eye"} size={20} color="gray" />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="****************" secureTextEntry={confirmSecureText} />
        <TouchableOpacity onPress={() => setConfirmSecureText(!confirmSecureText)}>
          <Icon name={confirmSecureText ? "eye-off" : "eye"} size={20} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={()=>{
        navigation.navigate("OTP")
      }}>
        <Text style={styles.buttonText}>Create New Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F8F8F8",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  button: {
    backgroundColor: "#2B74FF",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});