import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const SearchScreen = () => {
  const router = useRouter();

  // Example search results
  const searchResults = [
    {
      id: "1",
      title: "Search Result 1",
      image: "https://via.placeholder.com/150",
      description: "Description for search result 1",
      likes: 10,
      views: 100,
    },
    {
      id: "2",
      title: "Search Result 2",
      image: "https://via.placeholder.com/150",
      description: "Description for search result 2",
      likes: 20,
      views: 200,
    },
    {
      id: "3",
      title: "Search Result 3",
      image: "https://via.placeholder.com/150",
      description: "Description for search result 3",
      likes: 30,
      views: 300,
    },
  ];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="#888"
      />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultItem}>
            <Image source={{ uri: item.image }} style={styles.resultImage} />
            <View style={styles.resultContent}>
              <Text style={styles.resultTitle}>{item.title}</Text>
              <Text style={styles.resultDescription}>{item.description}</Text>
              <Text style={styles.resultStats}>
                Likes: {item.likes} | Views: {item.views}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        style={styles.resultsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  resultsList: {
    flex: 1,
  },
  resultItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  resultImage: {
    width: 80,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  resultContent: {
    flex: 1,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  resultDescription: {
    fontSize: 14,
    color: "#555",
  },
  resultStats: {
    fontSize: 12,
    color: "#888",
  },
});

export default SearchScreen;
