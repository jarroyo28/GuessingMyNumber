import { useState } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

const generateRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = (props) => {
  const intialGuess = generateRandomNumber(minBoundary, maxBoundary);
  const [guessedNumber, setGuessedNumber] = useState(intialGuess);

  const handleNewGuess = (direction) => {
    if (
      (direction === "lower" && guessedNumber < props.userNumber) ||
      (direction === "higher" && guessedNumber > props.userNumber)
    ) {
      Alert.alert("Don't lie now...", "You and I both know you are...", [
        { text: "Okay", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = guessedNumber;
    } else {
      minBoundary = guessedNumber + 1;
    }
    const newRandomNumber = generateRandomNumber(minBoundary, maxBoundary);
    setGuessedNumber(newRandomNumber);
  };

  return (
    <View style={styles.gameScreenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guessedNumber}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={() => handleNewGuess("higher")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={() => handleNewGuess("lower")}>
            -
          </PrimaryButton>
        </View>
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
