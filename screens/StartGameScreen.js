import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleNumberInput = (text) => {
    setEnteredNumber(text);
  };

  const handleConfirm = () => {
    const chosenNumber = parseInt(enteredNumber, 10);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Input",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: handleReset }]
      );
      return;
    } else {
      console.log("VALID NUMBER");
    }
  };

  const handleReset = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.header}>Please enter a number between 1 and 99</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={(text) => handleNumberInput(text)}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: "#4e0329",
    marginHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    color: "white",
  },
});
