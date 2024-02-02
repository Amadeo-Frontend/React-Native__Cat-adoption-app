import { StyleSheet } from "react-native";
import colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: colors.primary,
  },
  catImage: {
    width: 250,
    height: 300,
    marginVertical: 40,
    borderRadius: 10,
  },
  emailText: {
    width: "90%",
    textAlign: "center",
    fontWeight: "bold",
    paddingHorizontal: 40,
    fontSize: 16,
    lineHeight: 28,
    letterSpacing: -0.2,
    color: colors.secundary,
    marginBottom: 5,
  },
  emailInput: {
    width: "70%",
    color: colors.primary,
    borderWidth: 1,
    borderColor: colors.secundary,
    padding: 10,
    borderRadius: 4,
  },
});
