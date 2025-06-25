import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native"; // ✅ Navigation Hook

const SplashScreen = () => {
  const navigation = useNavigation(); // ✅ Navigation کو use کرو

  const scaleAnim = new Animated.Value(0.8);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      navigation.replace("Slider"); 
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/icon1.png")}
        style={[styles.logo, { transform: [{ scale: scaleAnim }], opacity: fadeAnim }]}
      />
      <Text style={styles.text}>Hotel Booking</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    marginTop: 10,
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
});

export default SplashScreen;
