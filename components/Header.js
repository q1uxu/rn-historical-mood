import { StyleSheet, Text, View } from "react-native";
import BackIcon from "../assets/back.svg";
import Constants from "expo-constants";

export default function Header() {
  return (
    <View style={styles.container}>
      <BackIcon style={styles.backIcon} width={36} height={36} />
      <Text style={styles.title}>历史心情指数</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 88 - Constants.statusBarHeight,
  },
  backIcon: {
    position: "absolute",
    left: 12,
    top: 12,
    width: 36,
    height: 36,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
  },
});
