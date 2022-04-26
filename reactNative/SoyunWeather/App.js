import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <View style={styles.city}>
        <Text style={styles.cityName}>서울은</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.whether}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>맑음</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>맑음</Text>
        </View>
        {/* <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>맑음</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>맑음</Text>
        </View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "teal",
  },
  city: {
    flex: 1,
    margin: "100",

    justifyContent: "center",
    alignItems: "center",
  },

  cityName: {
    // fontSize: 68,
    fontStyle: "italic",
    // color: "white",
    fontWeight: "500",
  },
  whether: {
    backgroundColor: "orange",
  },
  day: {
    alignItems: "center",
  },
  temp: {
    // color: "white",
    // marginTop: 18,
    // fontSize: 180,
  },
  description: {
    // color: "teal",
    // marginTop: -20,
    // fontSize: 60,
  },
});
