import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import CustomButton from "../../components/button";
import { fetchCatImage } from "../../api/api";
import colors from "../../constants/Colors";

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
      <Text style={styles.title}>Adote o seu gato:</Text>
      {/* Exibe a imagem do gato se estiver disponível */}
      {catImage && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: catImage }} style={styles.catImage} />
        </View>
      )}
      {/* Botão para escolher outro */}
      <CustomButton
        title="PROXIMO GATO"
        onPress={handleChooseAnother}
        textStyle={{ color: colors.accent }}
      />
      {/* Botão para escolher e ir para a página de Congratulations */}
      <CustomButton
        title="ADOTAR 🥰"
        onPress={handleChoose}
        textStyle={{ color: colors.accent }}
      />
    </View>
  );
};

export default ChoiceScreen;
