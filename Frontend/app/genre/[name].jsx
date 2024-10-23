import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

// Dummy data for news articles
const newsData = {
  Entertainment: [
    {
      id: "1",
      title: "Celebrity News",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      title: "Movie Releases",
      image: "https://via.placeholder.com/150",
    },
  ],
  Sports: [
    {
      id: "3",
      title: "Match Highlights",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "4",
      title: "Player Transfers",
      image: "https://via.placeholder.com/150",
    },
  ],
  Politics: [
    {
      id: "5",
      title: "Election Updates",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "6",
      title: "Policy Changes",
      image: "https://via.placeholder.com/150",
    },
  ],
};

export default function GenreScreen() {
  const { name } = useLocalSearchParams(); // Get the genre name from the URL

  const data = newsData[name] || []; // Get the relevant news data for the genre

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name} News</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.newsCard}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.overlayTitle}>{item.title}</Text>
            <View style={styles.cardFooter}>
              <Ionicons name="eye-outline" size={20} />
              <Ionicons name="thumbs-up-outline" size={20} />
              <Ionicons name="chatbubble-outline" size={20} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  newsCard: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  image: { width: "100%", height: 150, borderRadius: 10 },
  overlayTitle: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});
