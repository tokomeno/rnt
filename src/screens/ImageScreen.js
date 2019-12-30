import React from "react";
import {
  Text,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Image Screen</Text>
      <ImageDetails />
      <ImageDetails />
      <ImageDetails />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImageScreen;
