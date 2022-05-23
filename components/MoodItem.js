import { View, Text, Image, StyleSheet } from "react-native";
import GoodMood from "../assets/moods/good.svg";
import GoodMoodActive from "../assets/moods/good-active.svg";
import NormalMood from "../assets/moods/normal.svg";
import NormalMoodActive from "../assets/moods/normal-active.svg";
import UnknownMood from "../assets/moods/unknown.svg";
import Bar from "./Bar";

export default function MoodItem({ id, value, day, activeId, setActiveId }) {
  function getMoodIcon() {
    const style = {
      width: 36,
      height: 36,
      borderRadius: 18,
    };
    if (value === null) return <UnknownMood style={style} />;
    if (id === activeId) {
      if (value > 90) return <GoodMoodActive style={style} />;
      return <NormalMoodActive style={style} />;
    }
    if (value > 90) return <GoodMood style={style} />;
    return <NormalMood style={style} />;
  }

  return (
    <View
      style={styles.item}
      onTouchStart={() => setActiveId(id === activeId ? null : id)}
    >
      <Bar value={value} isActive={id === activeId}>
        <Text style={[styles.value, { fontSize: id === activeId ? 24 : 20 }]}>
          {value}
        </Text>
        {getMoodIcon()}
      </Bar>
      <Text
        style={[
          styles.day,
          day === "五" && { backgroundColor: "#2D2F33", color: "white" },
          activeId === id && {
            backgroundColor: "white",
            color: value > 90 ? "#F36A1B" : "#52C873",
          },
        ]}
      >
        {day}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    fontSize: 20,
    textAlign: "center",
  },
  day: {
    marginTop: 12,
    width: 36,
    height: 36,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 8,
    color: "#2D2F33",
    fontSize: 18,
  },
});
