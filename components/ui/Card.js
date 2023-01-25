import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = (props) => {
  return <View style={styles.card}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary700,
    marginHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
});
