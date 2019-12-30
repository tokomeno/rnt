import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button onPress={() => navigation.navigate("List")} title="List" />
      <Button onPress={() => navigation.navigate("Image")} title="Image" />
      <Button onPress={() => navigation.navigate("Color")} title="Color" />
      <Button onPress={() => navigation.navigate("Square")} title="Square" />

      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
