import { Text, StyleSheet, View } from "react-native";

const GameScreen = () => {
  return (
    <View style={styles.gameScreenContainer}>
      <Text style={{ fontSize: 24, color: "white" }}>Opponent's Guess</Text>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <View></View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 24,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
