import { Text, StyleSheet } from "react-native";

const InstructionText = (props) => {
  return (
    <Text style={[styles.instructionText, props.style]}>{props.children}</Text>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: "white",
  },
});
