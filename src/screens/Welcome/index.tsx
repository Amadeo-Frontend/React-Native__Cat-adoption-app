import React from "react";
import { View, Text, Button, Image } from "react-native";
import { styles } from "./styles";
import catImg from "../../../assets/img/logo (2).png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomButton from "../../components/button";
import colors from "../../constants/Colors";

const WelcomeScreen = ({ navigation }: any) => {
  const navigateToChoice = () => {
    navigation.navigate("Choice");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={catImg} style={{ height: wp(80), width: hp(45) }} />
      </View>
      <Text style={styles.title}>Bem-vindo ao Cat Adoption!</Text>
      <Text style={styles.subTitle}>Escolha seu novo amigo felino 🐱</Text>

      <CustomButton
        onPress={navigateToChoice}
        title="Escolher seu gato"
        buttonStyle={{ backgroundColor: colors.bg }}
        textStyle={{ color: colors.accent }}
      />
    </View>
  );
};

export default WelcomeScreen;
