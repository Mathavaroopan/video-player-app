// components/HomeScreen.jsx
import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video Player App</Text>
      <Button
        title="Go to Video Player"
        onPress={() => navigation.navigate("VideoPreview")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
