import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Navigation(props) {

  return (
    <>
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Go to Setting"
          onPress={() => {
            props.navigation.navigate("Setting", {
              itemId: 86,
              otherParam: "anything you want here"
            });
          }}
        ></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
