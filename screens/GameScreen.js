import { Text, StyleSheet, View } from "react-native";

const GameScreen = () => {
  return (
    <View style={styles.gameScreenContainer}>
      <Text style={{ fontSize: 24, color: "white" }}>Game Screen</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
