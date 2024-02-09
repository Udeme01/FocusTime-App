import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return null;
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;
  return (
    <View>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    color: colors.red,
    paddingLeft: spacing.lg,
    marginTop: spacing.xsm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingLeft: spacing.xxl,
    fontWeight: "bold",
  },
});
