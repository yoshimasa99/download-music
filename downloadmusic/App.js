import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Pressable>Button</Pressable>
      <Button title="Download Music" onPress={() => alert("Downloading...")} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "#333",
    height: 80,
    paddingTop: 38,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
