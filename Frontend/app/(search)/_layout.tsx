import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MenuSvgComponent from "@/Components/MenuSvg";

export default function SearchLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "",
        headerTitleStyle: {
          fontSize: 24,
          fontFamily: "UbuntuBold",
        },
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#f4ecec",
        },
        headerLeft: () => {
          return <Ionicons name="backspace-outline" />;
        },
      }}
    />
  );
}
