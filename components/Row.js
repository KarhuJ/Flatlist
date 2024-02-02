import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function Row({ person, selectedId, select }) {
  const backgroundColor = person.id === selectedId ? "#3e4451" : "#282c34";
  
  return (
    <Pressable onPress={() => select(person.id)}>
      <Text style={[styles.text, { backgroundColor }]}>
        {person.lastname}, {person.firstname}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 16,
  },
});
