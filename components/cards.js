import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function HotelCard({image1,price,headingtext}) {
  return (
    <View style={styles.card}>
      {/* Hotel Image */}
      <View style={styles.imageContainer}>
        <Image
          source={image1} // Replace with your image
          style={styles.image}
        />
        <TouchableOpacity style={styles.heartIcon}>
          <Icon name="heart-o" size={20} color="#2B74FF" />
        </TouchableOpacity>
      </View>

      {/* Discount Badge */}
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>10% Off</Text>
      </View>

      {/* Hotel Info */}
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.hotelName}>{headingtext}</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={14} color="#FFA500" />
            <Text style={styles.rating}>4.5</Text>
          </View>
        </View>

        <View style={styles.locationContainer}>
          <MaterialIcons name="location-on" size={16} color="#777" />
          <Text style={styles.location}>New York, USA</Text>
        </View>

        <Text style={styles.price}>
          <Text style={{ color: "#2B74FF", fontWeight: "bold" }}>{price}</Text> /night
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
    marginRight:
      20, // Add margin right to the last card in the row to match the margin left of the first card
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 140,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 5,
    elevation: 3,
  },
  discountBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#2B74FF",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  discountText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  infoContainer: {
    padding: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hotelName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    color: "#000",
    marginLeft: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  location: {
    color: "#777",
    fontSize: 14,
    marginLeft: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#777",
  },
});
