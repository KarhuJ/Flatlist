import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Row from "./components/Row";
import Search from "./components/Search";
import Add from "./components/Add";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DATA } from "./Data";

const STORAGE_KEY = "@persons_key";

export default function App() {
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (ex) {
      console.log("Error storing data", ex);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      const storedData = JSON.parse(value) || [];
      const combinedData = [...DATA, ...storedData];
      const sortedData = combinedData
        .slice()
        .sort((a, b) => a.lastname.localeCompare(b.lastname));
      setItems(sortedData);
    } catch (ex) {
      console.log("Error getting data", ex);
    }
  };

  useEffect(() => {
    //AsyncStorage.clear();
    getData();
  }, []);

  const executeSearch = (search) => {
    if (search === "") {
      // If the search bar is empty, show all items
      getData(); // Refresh the list with all items
    } else {
      const filteredArray = DATA.filter((item) =>
        item.lastname.toLowerCase().startsWith(search.toLowerCase())
      );
      const sortedArray = filteredArray
        .slice()
        .sort((a, b) => a.lastname.localeCompare(b.lastname));
      setItems(sortedArray);
    }
    setSelectedId(null); // Clear the selected ID when performing a new search
  };

  const renderItem = ({ item }) => (
    <Row person={item} selectedId={selectedId} select={select} />
  );

  const select = (id) => {
    setSelectedId(id);
  };

  return (
    <View style={styles.container}>
      <Search executeSearch={executeSearch} />
      <Add items={items} setItems={setItems} storeData={storeData} />
      <View style={styles.flatListContainer}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          extraData={selectedId}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c34",
    alignItems: "center",
  },
  flatListContainer: {
    flex: 1,
    width: "100%",
    marginLeft: 100,
  },
});
