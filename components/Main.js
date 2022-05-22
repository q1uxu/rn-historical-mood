import { StyleSheet, Text, View } from "react-native";
import Avatar from '../assets/avatar.svg'

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Avatar style={styles.userAvatar} />
        <Text style={styles.userName}>李强</Text>
      </View>
      <Text style={styles.average}>88</Text>
      <Text>周平均心情指数</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 390,
    height: 399,
  },
});
