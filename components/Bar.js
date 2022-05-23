import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Bar({ value, isActive, children }) {
  const barStyles = {
    justifyContent: "space-between",
    alignItems: "center",
    height: value ? (value / 100) * 300 : 100,
    width: 50,
    paddingTop: 12,
    paddingBottom: 4,
    textAlign: "center",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "transparent",
    borderStyle: "solid",
  };

  if (value === null)
    return (
      <View style={[barStyles, { backgroundColor: "#cfcfcf" }]}>
        {children}
      </View>
    );
  if (!isActive) {
    if (value > 90)
      return (
        <View style={[barStyles, { backgroundColor: "#FF823C" }]}>
          {children}
        </View>
      );
    return (
      <View style={[barStyles, { backgroundColor: "#52C873" }]}>
        {children}
      </View>
    );
  }
  if (value > 90) {
    return (
      <LinearGradient
        colors={["#FFA14A", "#FFCC4A"]}
        style={[barStyles, { borderColor: "#FFE9D5" }]}
      >
        {children}
      </LinearGradient>
    );
  }
  return (
    <LinearGradient
      colors={["#42F373", "#A1FD44"]}
      style={[barStyles, { borderColor: "#DCFFD6" }]}
    >
      {children}
    </LinearGradient>
  );
}
