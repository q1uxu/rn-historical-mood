import { StyleSheet, Text, View, Image } from "react-native";
import MoodList from './MoodList'

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image style={styles.userAvatar} source={require('../assets/avatar.png')} />
        <Text style={styles.userName}>李强</Text>
      </View>
      <Text style={styles.averageValue}>88</Text>
      <Text style={styles.avarageText}>周平均心情指数</Text>
      <MoodList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 390,
    height: 399,
    paddingTop: 43,
   
    borderRadius: 24,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  userName: {
    marginLeft: 12,
  },
  averageValue: {
    fontSize: 72,
  },
  avarageText: {
    fontSize: 18,
    color: "#929292",
  },
});
