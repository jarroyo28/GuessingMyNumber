import { Text, StyleSheet, View } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.gameScreenContainer}>
      <Title>Opponent's Guess</Title>
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
  },
});
