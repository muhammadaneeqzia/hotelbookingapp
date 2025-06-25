import { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { db } from "../config";
import { doc, setDoc, getDoc, updateDoc,deleteDoc } from "firebase/firestore";

export default function DetailsScreen({ navigation, route }) {
  const [email, setEmail] = useState(global.email1);
  const { image1, price, headingtext } = route.params;
  const [activeheart, setActiveHeart] = useState(false);
  const handlefavoritePress = () => {
    const email = global.email1;
    getDoc(doc(db, "users", email)).then((docData) => {
      if (docData.exists()) {
        if (activeheart) {

          deleteDoc(doc(db, "favorite", email)).then(() => {
            console.log("Data deleted from favorites successfully!");
          } ).catch((error) => {
            console.error("Error deleting data from favorites: ", error);
          }
          );



        
        }
        else{
          setDoc(doc(db, "favorite", email), {
            image: image1,
            headingtext: headingtext,
            price: price,
            location: "New York, USA",
            rating: "4.5",
            off: "20% Off",
          })
            .then(() => {
              console.log("Data added to favorites successfully!");
            })
            .catch((error) => {
              console.error("Error adding data to favorites: ", error);
            });
        }

      }
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Image with Buttons */}
        <View style={styles.imageContainer}>
          <Image style={styles.img} source={image1} />

          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color="black" />
          </TouchableOpacity>

          {/* Share Button */}
          <TouchableOpacity style={styles.shareButton}>
            <Icon name="share-2" size={22} color="black" />
          </TouchableOpacity>

          {/* Favorite Button */}
          <TouchableOpacity style={styles.favoriteButton} onPress={() => {
            setActiveHeart(!activeheart);
            handlefavoritePress();

          }}>
            <FontAwesome name="heart" size={22} color={activeheart ? "red" : "black"} />
          </TouchableOpacity>
        </View>

        {/* Hotel Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.discountText}>20% Off</Text>
          <Text style={styles.hotelName}>{headingtext}</Text>
          <Text style={styles.location}>1012 Ocean Avenue, New York, USA</Text>

          {/* Rating & Reviews */}
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={16} color="#FFC107" />
            <Text style={styles.ratingText}> 4.5 (365 reviews)</Text>
          </View>

          {/* Tabs Section */}
          <View style={styles.tabsContainer}>
            <Text style={styles.activeTab}>Gallery</Text>
            <Text style={styles.inactiveTab}>About</Text>
            <Text style={styles.inactiveTab}>Review</Text>
          </View>

          {/* Gallery Section */}
          <View style={styles.galleryContainer}>
            <Image style={styles.galleryImg} source={require("../assets/bed7.jpeg")} />
            <Image style={styles.galleryImg} source={require("../assets/bed5.jpeg")} />
          </View>

          {/* Price & Button */}
          <View style={styles.footer}>
            <Text style={styles.priceText}>Total Price</Text>
            <Text style={styles.priceAmount}>{price} <Text style={{ color: "gray" }}>/ night</Text></Text>
            <TouchableOpacity style={styles.bookNowButton} onPress={() => navigation.navigate("payment")}>
              <Text style={styles.bookNowText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: "100%",
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
    position: "relative",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    elevation: 5,
  },
  shareButton: {
    position: "absolute",
    top: 40,
    right: 70,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    elevation: 5,
  },
  favoriteButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    elevation: 5,
  },
  infoContainer: {
    padding: 20,
  },
  discountText: {
    color: "#007bff",
    fontWeight: "bold",
    marginBottom: 5,
  },
  hotelName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  location: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 14,
    color: "black",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 10,
    marginTop: 20,
  },
  activeTab: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
    borderBottomWidth: 2,
    borderBottomColor: "#007bff",
    paddingBottom: 5,
  },
  inactiveTab: {
    fontSize: 16,
    color: "gray",
    paddingBottom: 5,
  },
  galleryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  galleryImg: {
    width: "48%",
    height: 160,
    borderRadius: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  priceText: {
    fontSize: 14,
    color: "gray",
  },
  priceAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  bookNowButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
  },
  bookNowText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
