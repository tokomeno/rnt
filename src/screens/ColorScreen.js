import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";

const ColorScreen = ({ navigation }) => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        onPress={() => {
          setColors(items => [...items, randomRgb()]);
        }}
        title="add Color"
      />

      <FlatList
        keyExtractor={item => item.toString()}
        data={colors}
        renderItem={({ item }) => {
          return <View style={{ height: 100, withd: 100, color: item }}></View>;
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  console.log(`rgb(${red}, ${green}, ${blue})`);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  text: {}
});

export default ColorScreen;
