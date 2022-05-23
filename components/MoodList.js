import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import MoodItem from "./MoodItem";

const data = [
  { id: 1, value: 86, day: "六" },
  { id: 2, value: 80, day: "日" },
  { id: 3, value: null, day: "一" },
  { id: 4, value: 90, day: "二" },
  { id: 5, value: 92, day: "三" },
  { id: 6, value: 97, day: "四" },
  { id: 7, value: 81, day: "五" },
];

export default function MoodList() {
  const [activeId, setActiveId] = useState(2);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.moodList}
        data={data}
        renderItem={({ item }) => (
          <MoodItem {...item} activeId={activeId} setActiveId={setActiveId} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 340,
    marginTop: 34,
  },
  moodList: {
    flexDirection: "row",
  },
  contentContainerStyle: {
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  separator: {
    width: 6,
  },
});
