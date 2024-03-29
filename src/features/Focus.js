import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState("test");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The Focus Club</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  button: {
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    color: colors.white,
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.xxl,
    justifyContent: "center",
    flexDirection: "row",
  },
});
