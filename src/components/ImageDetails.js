import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetails = () => {
  return (
    <View>
      <Image source={require("../../assets/mountain.jpg")}></Image>
      <Text>Image Detail</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetails;
