import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";


export const DATA = [
    
    {
        id: "27",
        lastname: "Juntunen",
        firstname: "Jussi",
    },
    {
        id: "28",
        lastname: "Korhonen",
        firstname: "Matti",
    },
    {
        id: "29",
        lastname: "Leskinen",
        firstname: "Mikko",
    },
    {
        id: "4",
        lastname: "Mäkinen",
        firstname: "Pekka",
    },
    {
        id: "5",
        lastname: "Nieminen",
        firstname: "Jari",
    },
    {
        id: "6",
        lastname: "Ojala",
        firstname: "Joona",
    },
    {
        id: "7",
        lastname: "Peltola",
        firstname: "Johanna",
    },
    {
        id: "8",
        lastname: "Rantanen",
        firstname: "Kalle",
    },
    {
        id: "9",
        lastname: "Savolainen",
        firstname: "Lauri",
    },
    {
        id: "10",
        lastname: "Tikkanen",
        firstname: "Mikael",
    },
    {
        id: "11",
        lastname: "Uusitalo",
        firstname: "Niko",
    },
    {
        id: "12",
        lastname: "Virtanen",
        firstname: "Olli",
    },
    {
        id: "13",
        lastname: "Ylitalo",
        firstname: "Pasi",
    },
    {
        id: "14",
        lastname: "Äijälä",
        firstname: "Riikka",
    },
    {
        id: "15",
        lastname: "Österberg",
        firstname: "Sari",
    },
    {
        id: "16",
        lastname: "Åström",
        firstname: "Timo",
    },
    {
        id: "17",
        lastname: "Åkerman",
        firstname: "Ulla",
    },
    {
        id: "18",
        lastname: "Ämmälä",
        firstname: "Ville",
    },
    {
        id: "19",
        lastname: "Öhman",
        firstname: "Wille",
    },
    {
        id: "20",
        lastname: "Keinänen",
        firstname: "Xena",
    },
    {
        id: "21",
        lastname: "Ylitalo",
        firstname: "Yrjö",
    },
    {
        id: "22",
        lastname: "Virtanen",
        firstname: "Zorro",
    },
    {
        id: "23",
        lastname: "Uusitalo",
        firstname: "Åke",
    },
    {
        id: "24",
        lastname: "Tikkanen",
        firstname: "Esa",
    },
    {  
        id: "25",
        lastname: "Björk",
        firstname: "Eero",
    },
    {
        id: "26",
        lastname: "Aaltonen",
        firstname: "Eila",
    },
    {
        id: "1",
        lastname: "Aaltonen",
        firstname: "Aapo",
    },
    {
        id: "2",
        lastname: "Björk",
        firstname: "Birgitta",
    },
    {
        id: "3",
        lastname: "Ceder",
        firstname: "Cecilia",
    }
];


 