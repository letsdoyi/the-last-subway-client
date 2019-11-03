import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Navigation() {
  return (
    <>
      <View style={styles.container}>
        <Text>Cancel</Text>
      </View>
      <View style={styles.container}>
        <Text>Set Alarm</Text>
      </View>
      <View style={styles.container}>
        <Text onPress={()=>{}}>Save</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
