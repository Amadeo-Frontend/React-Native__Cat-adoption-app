import React from "react";
import { View, Text, Image, Button } from "react-native";
import { styles } from "./styles";
import CustomButton from "../../components/button";

const CongratulationsScreen = ({ route, navigation }: any) => {
  const { catImage } = route.params;

  const handleBackToMenu = () => {
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <Text>Parabéns pela sua escolha!</Text>
      {/* Exibe a imagem do gato escolhido */}
      {catImage && (
        <Image source={{ uri: catImage }} style={{ width: 200, height: 200 }} />
      )}
      {/* Botão para voltar ao menu */}
      <CustomButton title="Obigado pela escolha" onPress={handleBackToMenu} />
    </View>
  );
};

export default CongratulationsScreen;
