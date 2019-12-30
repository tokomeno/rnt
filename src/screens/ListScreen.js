import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
  const friends = [
    { name: Math.random() + " toko " },
    { name: Math.random() + " gio " },
    { name: Math.random() + " some " },
    { name: Math.random() + " non one " },
    { name: Math.random() + " toko " },
    { name: Math.random() + " gio " },
    { name: Math.random() + " some " },
    { name: Math.random() + " non one " },
    { name: Math.random() + " toko " },
    { name: Math.random() + " gio " },
    { name: Math.random() + " some " },
    { name: Math.random() + " non one " },
    { name: Math.random() + " toko " },
    { name: Math.random() + " gio " },
    { name: Math.random() + " some " },
    { name: Math.random() + " non one " },
    { name: Math.random() + " toko " },
    { name: Math.random() + " gio " },
    { name: Math.random() + " some " },
    { name: Math.random() + " non one " },
    { name: Math.random() + " toko " },
    { name: Math.random() + " gio " },
    { name: Math.random() + " some " },
    { name: Math.random() + " non one " }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.name}
        data={friends}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );

  return <Text>List Screen</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginVertical: 50
  }
});

export default ListScreen;
