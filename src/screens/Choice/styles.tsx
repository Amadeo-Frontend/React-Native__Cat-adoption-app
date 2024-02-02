import { StyleSheet } from "react-native";
import colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.bg,
  },
  imageContainer: {
    borderRadius: 10,
  },
  catImage: {
    width: 250,
    height: 300,
    marginVertical: 40,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    color: colors.primary,
    textAlign: "center",
  },
});
