import React, { useState, useRef } from "react";
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, FlatList,Pressable } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native"; // ✅ Navigation Hook

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Explore, Compare, and Find ",
    titleHighlight: "the Perfect Hotel",
    description: "Discover top-rated hotels with ease and book the best stay for you.",
    image: require("../assets/image1.png"),
  },
  {
    id: "2",
    title: "Schedule Your Hotel Stays ",
    titleHighlight: "in Advance",
    description: "Plan ahead and secure the best deals for your upcoming trips.",
    image: require("../assets/image2.png"),
  },
  {
    id: "3",
    title: "Book with Confidence and ",
    titleHighlight: "Enjoy Your Stay",
    description: "Verified reviews and secure payments ensure a worry-free booking experience.",
    image: require("../assets/image3.png"),
  },
];

export default function HotelBookingSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const navigation = useNavigation(); // ✅ Navigation Hook

  const goNextSlide = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.replace("onBoarding"); // ✅ Last Slide کے بعد HomeScreen پر جاؤ
    }
  };

  const goPrevSlide = () => {
    if (currentIndex > 0) {
      flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
      setCurrentIndex(currentIndex - 1);
    }
  };

  const skipToEnd = () => {
    navigation.navigate("onBoarding"); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={()=>{skipToEnd}}>
        <Text style={styles.skipText}>{currentIndex === slides.length - 1 ? "Done" : "Skip"}</Text>
      </TouchableOpacity>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>
              {item.title}
              <Text style={styles.titleHighlight}>{item.titleHighlight}</Text>
            </Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
      <View style={styles.navigation}>
        <TouchableOpacity onPress={goPrevSlide} disabled={currentIndex === 0} style={styles.navButton}>
          <Icon name="chevron-left" size={28} color="white" />
        </TouchableOpacity>
        <View style={styles.dots}>
          {slides.map((_, index) => (
            <View key={index} style={[styles.dot, currentIndex === index && styles.activeDot]} />
          ))}
        </View>
        <TouchableOpacity onPress={goNextSlide} style={styles.navButton}>
          <Icon name="chevron-right" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  skipButton: {
    position: "absolute",
    top: 50,
    right: 20,
  },
  skipText: {
    fontSize: 16,
    color: "#007AFF",
  },
  slide: {
    width,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.85,
    height: height * 0.5,
    resizeMode: "contain",
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 8,
  },
  titleHighlight: {
    color: "#007AFF",
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  navButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
  dots: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#007AFF",
    width: 12,
    height: 12,
  },
});
