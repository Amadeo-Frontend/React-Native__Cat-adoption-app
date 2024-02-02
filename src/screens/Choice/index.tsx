import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import CustomButton from "../../components/button";
import { fetchCatImage } from "../../api/api";

const ChoiceScreen = ({ navigation }: any) => {
  const [catImage, setCatImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewCatImage = async () => {
      try {
        const imageUrl = await fetchCatImage();
        setCatImage(imageUrl);
      } catch (error) {
        console.error("Erro ao buscar imagem de gato:", error);
      }
    };
    fetchNewCatImage();
  }, []);

  const handleChooseAnother = async () => {
    try {
      const imageUrl = await fetchCatImage();
      setCatImage(imageUrl);
    } catch (error) {
      console.error("Erro ao buscar imagem de gato:", error);
    }
  };

  const handleChoose = () => {
    navigation.navigate("Congratulations", { catImage });
  };

  return (
    <View style={styles.container}>
      <Text>Adote o seu gato:</Text>
      {/* Exibe a imagem do gato se estiver disponível */}
      {catImage && <Image source={{ uri: catImage }} style={styles.catImage} />}
      {/* Botão para escolher outro */}
      <CustomButton title="Escolher Outro" onPress={handleChooseAnother} />
      {/* Botão para escolher e ir para a página de Congratulations */}
      <CustomButton title="Escolher" onPress={handleChoose} />
    </View>
  );
};

export default ChoiceScreen;
