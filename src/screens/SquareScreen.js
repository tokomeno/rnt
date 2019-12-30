import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

const setColor = color => {
  switch (color) {
    case "red":
      return;
  }
};

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + COLOR_INCREMENT)}
        onDecrease={() => setRed(red - COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setGreen(red + COLOR_INCREMENT)}
        onDecrease={() => setGreen(red - COLOR_INCREMENT)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setBlue(red + COLOR_INCREMENT)}
        onDecrease={() => setBlue(red - COLOR_INCREMENT)}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red} ${green} ${blue})`
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  styles: {}
});

export default SquareScreen;
