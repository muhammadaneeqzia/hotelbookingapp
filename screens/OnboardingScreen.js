import React ,{useEffect} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions ,Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Circular Image with Overlay */}
      <View style={styles.imageContainer}>
        <Image source={require("../assets/starterimg.jpeg")} style={styles.image} />
      
      </View>

      {/* Text Section */}
      <Text style={styles.title}>
        Planning Your <Text style={styles.highlight}>Hotel</Text> Experience
      </Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod tempor incididunt.
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.replace("SignUp")}>
        <Text style={styles.getStartedText}>Let's Get Started</Text>
      </TouchableOpacity>

      {/* Sign In Option */}
      <Pressable onPress={()=>{
        navigation.navigate("Login")
      }}>
      <Text style={styles.signInText}>
        Already have an account? <Text style={styles.signInLink}>Sign In</Text>
      </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: width * 0.75,
    height: width * 0.98,
    borderRadius: width * 0.95 / 2,
    overflow: "hidden",
    // borderWidth: 5,
    // borderColor: "#007AFF",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
//   arrowButton: {
//     position: "absolute",
//     bottom: 10,
//     right: 10,
//     backgroundColor: "#007AFF",
//     borderRadius: 20,
//     width: 40,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//   },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginTop: 30,
  },
  highlight: {
    color: "#007AFF",
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  getStartedButton: {
    marginTop: 20,
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    shadowColor: "#007AFF",
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  getStartedText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  signInText: {
    marginTop: 15,
    fontSize: 14,
    color: "#666",
  },
  signInLink: {
    color: "#007AFF",
    fontWeight: "bold",
  },
});
