import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useUser, useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const UserProfile = () => {
  const { isLoaded: userLoaded, user , isSignedIn } = useUser();
  const { signOut, isLoaded, userId, sessionId } = useAuth();
  const router = useRouter();
  console.log(user,isLoaded,userId,sessionId);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace("/sign-in");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  console.log(userLoaded, isSignedIn);

  if (!userLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#5910ec" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* <Image
          source={
            user.imageUrl
          }
          style={styles.profileImage}
        /> */}
        <Text style={styles.name}>{user?.fullName || "User"}</Text>
        <Text style={styles.email}>
          {user?.primaryEmailAddress?.emailAddress}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>

        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="person-outline" size={24} color="#333" />
          <Text style={styles.menuText}>Edit Profile</Text>
          <MaterialIcons name="chevron-right" size={24} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="notifications-none" size={24} color="#333" />
          <Text style={styles.menuText}>Notifications</Text>
          <MaterialIcons name="chevron-right" size={24} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="security" size={24} color="#333" />
          <Text style={styles.menuText}>Privacy & Security</Text>
          <MaterialIcons name="chevron-right" size={24} color="#999" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Settings</Text>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="language-outline" size={24} color="#333" />
          <Text style={styles.menuText}>Language</Text>
          <MaterialIcons name="chevron-right" size={24} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="help-outline" size={24} color="#333" />
          <Text style={styles.menuText}>Help & Support</Text>
          <MaterialIcons name="chevron-right" size={24} color="#999" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <MaterialIcons name="logout" size={24} color="#fff" />
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "#666",
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginLeft: 15,
  },
  signOutButton: {
    margin: 20,
    backgroundColor: "#5910ec",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signOutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default UserProfile;
