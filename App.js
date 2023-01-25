import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const handlePickedNumber = (number) => {
    setUserNumber(number);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {userNumber ? (
          <SafeAreaView style={styles.rootScreen}>
            {gameIsOver && userNumber ? (
              <GameOverScreen />
            ) : (
              <GameScreen
                userNumber={userNumber}
                onGameOver={gameOverHandler}
              />
            )}
          </SafeAreaView>
        ) : (
          <SafeAreaView style={styles.rootScreen}>
            <StartGameScreen handlePickedNumber={handlePickedNumber} />
          </SafeAreaView>
        )}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
