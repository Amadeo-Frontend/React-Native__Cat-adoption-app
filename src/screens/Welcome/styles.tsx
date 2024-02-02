import { StyleSheet } from "react-native";
import colors from "../../constants/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    backgroundColor: colors.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    position: "relative",
    width: wp("100%"),
    height: "auto",
    marginBottom: hp(3),
    overflow: "hidden",
  },
  title: {
    color: colors.primary,
    fontSize: hp(3),
    textAlign: "center",
    marginBottom: hp(2),
  },
  subTitle: {
    color: colors.secundary,
    fontSize: hp(2.5),
  },
});
