import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DATA } from "../Data";


export default function Add({ items, setItems, storeData }) {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");

  const generateNewId = () => {
    const allItems = [...DATA, ...items];
    const maxId = Math.max(...allItems.map((item) => item.id), 0);
    return maxId + 1;
  };

  const save = () => {
    const newPerson = {
      id: generateNewId(),
      lastname: lastname,
      firstname: firstname,
    };
  
    // Check if the new person matches the search criteria
    const isMatchingSearch = newPerson.lastname
      .toLowerCase()
      .startsWith(lastname.toLowerCase());
  
    if (isMatchingSearch) {
      // If the new person matches the search, store it
      const tempItems = [...items, newPerson];
      storeData(tempItems);
      setItems(tempItems);
    }
  
    // Reset input fields
    setFirstname("");
    setLastname("");
  };
  

  return (
    <View style={styles.add}>
      <TextInput
        style={styles.text}
        onChangeText={(text) => setLastname(text)}
        placeholder="Lastname..."
        placeholderTextColor={"white"}
        value={lastname}
      />
      <TextInput
        style={styles.text}
        onChangeText={(text) => setFirstname(text)}
        placeholder="Firstname..."
        placeholderTextColor={"white"}
        value={firstname}
      />
      <TouchableOpacity onPress={save}>
        <Text style={styles.button}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  add: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    width: 250,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  button: {
    marginTop: 4,
    color: "#49515f",
  },
});
