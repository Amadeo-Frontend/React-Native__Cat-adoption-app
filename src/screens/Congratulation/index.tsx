import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import CustomButton from "../../components/button";
import Toast from "react-native-toast-message";
import { styles } from "./styles";
import colors from "../../constants/Colors";

const CongratulationsScreen = ({ route, navigation }: any) => {
  const { catImage } = route.params;
  const [email, setEmail] = useState("");

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Obrigado pela escolha 😍",
      visibilityTime: 3000,
      autoHide: true,
    });
  };

  const handleBackToMenu = () => {
    if (!validateEmail(email)) {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Por favor, insira um email válido.",
      });
      return;
    }

    showToast();
    setTimeout(() => {
      // Adicione o envio do email ou outras ações aqui
      navigation.navigate("Welcome");
    }, 3000);
  };

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parabéns pela sua escolha!</Text>
      {catImage && <Image source={{ uri: catImage }} style={styles.catImage} />}
      <Text style={styles.emailText}>
        Insira seu email para receber mais informações da adoção.
      </Text>
      <TextInput
        style={styles.emailInput}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor={colors.secundary}
      />
      <CustomButton
        buttonStyle={{ backgroundColor: colors.bg }}
        textStyle={{ color: colors.accent }}
        title="Enviar Pedido de Adoção"
        onPress={handleBackToMenu}
      />
    </View>
  );
};

export default CongratulationsScreen;
