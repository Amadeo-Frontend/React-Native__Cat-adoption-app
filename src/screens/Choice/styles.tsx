import { StyleSheet } from "react-native";
import colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.bg,
  },
  catImage: {
    width: 250,
    height: 300,
    marginVertical: 40,
    borderRadius: 5,
  },
});
