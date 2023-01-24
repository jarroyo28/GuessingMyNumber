import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

const generateRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
};

const GameScreen = (props) => {
  const intialGuess = generateRandomNumber(1, 100);
  const [guessedNumber, setGuessedNumber] = useState(intialGuess);

  return (
    <View style={styles.gameScreenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guessedNumber}</NumberContainer>
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
