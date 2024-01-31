import React from "react";
// Import the necessary components.
import {
  View,
  Text,
  // ---,
  // ___,
  StyleSheet,
} from "react-native";

const InteractiveItemList = () => {
  // Resorts data
  const itemList = [
    {
      id: "1",
      resortName: "Crystal Cove Retreat 🌿",
      resortDescription:
        "Escape to serenity at Crystal Cove Retreat, nestled between lush mountains and pristine beaches. Indulge in luxurious accommodations, rejuvenate at our world-class spa , and savor exquisite cuisine at our gourmet restaurants.",
    },
    {
      id: "2",
      resortName: "Azure Haven Resort 🏖️",
      resortDescription:
        "Experience ultimate relaxation at Azure Haven Resort, where the crystal-clear waters meet the azure sky. Unwind in modern, beachfront villas, take a dip in our infinity pools, and enjoy a taste of paradise with our diverse culinary delights.",
    },
    {
      id: "3",
      resortName: "Whispering Pines Lodge 🌲",
      resortDescription:
        "Discover tranquility at Whispering Pines Lodge, a hidden gem in the heart of a dense forest. Cozy cabins offer a rustic charm, while nature trails invite exploration. Unplug, unwind, and immerse yourself in the soothing melodies of nature.",
    },
  ];

  const handleItemPress = (description) => {
    alert(`Resort description: ${description}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Plan your vacation:</Text>
      {/* Display the list of resorts */}
    </View>
  );
};

export default InteractiveItemList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dfbac9",
    paddingTop: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 20,
    marginBottom: 40,
  },
  itemContainer: {
    padding: 16,
    backgroundColor: "#ffe3c0",
    borderRadius: 8,
    margin: 8,
  },
  itemContent: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
