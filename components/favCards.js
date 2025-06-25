import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, Feather } from "react-native-vector-icons";

export default function FavCards({ image, price }) {
  return (
    <View style={styles.card}>
      {/* Left Side Image with Favorite Icon */}
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <TouchableOpacity style={styles.favIcon}>
          <FontAwesome name="heart" size={22} color="#2B74FF" />
        </TouchableOpacity>
      </View>

      {/* Right Side Content */}
      <View style={styles.content}>
        {/* Discount & Rating Row */}
        <View style={styles.topRow}>
          <View style={styles.discountTag}>
            <Text style={styles.discountText}>10% Off</Text>
          </View>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={14} color="#FFA500" />
            <Text style={styles.ratingText}>4.9</Text>
          </View>
        </View>

        {/* Hotel Name */}
        <Text style={styles.hotelName}>GoldenValley</Text>

        {/* Location Row */}
        <View style={styles.locationContainer}>
          <Feather name="map-pin" size={14} color="#757575" />
          <Text style={styles.locationText}>New York, USA</Text>
        </View>

        {/* Price */}
        <Text style={styles.priceText}>
          {price}
          <Text style={styles.nightText}>/night</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  favIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "white",
    borderRadius: 50,
    opacity: 0.8,
    padding: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  content: {
    flex: 1,
    paddingLeft: 12,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  discountTag: {
    height: 20,
    width: 50,
    backgroundColor: "#2B74FF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  discountText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 3,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  locationText: {
    fontSize: 14,
    color: "#757575",
    marginLeft: 5,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2B74FF",
  },
  nightText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#757575",
  },
});
