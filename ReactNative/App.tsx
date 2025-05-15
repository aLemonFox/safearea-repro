import React, { useRef } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import AssetExample from "./components/AssetExample";

export default function App() {
  const prevY = useRef(-999);

  const onLayout = (event) => {
    console.log(event.nativeEvent);
    const newTop = event.nativeEvent.layout.y;

    if (newTop !== prevY.current && prevY.current !== -999) {
      Alert.alert("Top changed!", `prev: ${prevY.current}, new: ${newTop}`);
    }

    prevY.current = newTop;
  };

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container} onLayout={onLayout}>
          <Text style={styles.paragraph}>
            Change code in the editor and watch it change on your phone! Save to
            get a shareable url..
          </Text>
          <AssetExample />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
