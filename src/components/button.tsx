import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../constants/Colors";

export default function CustomButton({
  onPress,
  title,
  buttonStyle,
  textStyle,
}: any) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: colors.bg,
    borderColor: colors.accent,
    padding: 10,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: colors.primary,
  },
});
