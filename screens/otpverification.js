import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function OTPVerificationScreen({navigation}) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setErrorMessage("OTP expired. Request a new code.");
    }
  }, [timer]);

  const handleChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  const handleResend = () => {
    setTimer(60);
    setErrorMessage("");
    setOtp(["", "", "", ""]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.heading}>Verify Code</Text>
      <Text style={styles.subheading}>Please enter the code we just sent to email</Text>
      <Text style={styles.email}>example@email.com</Text>
      
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>
      
      {timer > 0 ? (
        <Text style={styles.timerText}>Time left: {timer}s</Text>
      ) : (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
      
      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn't receive OTP?</Text>
        <TouchableOpacity onPress={handleResend} style={styles.refreshButton}>
          <Icon name="refresh-cw" size={18} color="#2B74FF" />
          <Text style={styles.resendLink}>Resend code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F8F8F8",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subheading: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "#2B74FF",
    textAlign: "center",
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
    marginBottom: 20,
  },
  otpInput: {
    width: 55,
    height: 55,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  timerText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  errorText: {
    fontSize: 14,
    color: "red",
    marginBottom: 10,
  },
  resendContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  resendText: {
    fontSize: 14,
    color: "#666",
    marginRight: 5,
  },
  refreshButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  resendLink: {
    fontSize: 14,
    color: "#2B74FF",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
});