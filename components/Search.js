import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function Search({executeSearch}) {
  const [search, setSearch] = useState("");
  

  return (
    <View style={styles.searchBox}>
      <TextInput style={styles.text}
        onChangeText={(text) => setSearch(text)}
        placeholder ="Search..."
        placeholderTextColor={"white"}
        value={search}
        returnKeyType="search"
        onSubmitEditing={() => executeSearch(search)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    width: 250,
    marginTop: 50,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
