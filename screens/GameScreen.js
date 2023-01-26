import { useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const generateRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = (props) => {
  const intialGuess = generateRandomNumber(minBoundary, maxBoundary);
  const [guessedNumber, setGuessedNumber] = useState(intialGuess);

  useEffect(() => {
    if (guessedNumber === props.userNumber) {
      props.onGameOver();
    }
  }, [guessedNumber, props.userNumber, props.onGameOver]); // whenever any of these variables change, the useEffect will be executed

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
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handleNewGuess("higher")}>
              +
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handleNewGuess("lower")}>
              -
            </PrimaryButton>
          </View>
        </View>
      </Card>
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
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
});
