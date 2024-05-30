import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Image, Text} from "react-native";



const SplashScreen = () => {
  const navigation = useNavigation();
   useEffect(() => {
     // Simuler une attente de 3 secondes avant de passer à l'écran principal
     const timer = setTimeout(() => {
      navigation.navigate("bottom") // Remplace l'écran actuel par l'écran principal
     }, 3000);

     return () => clearTimeout(timer);
   }, [navigation]);
  return (
    <View className='flex-1  flex-col justify-center items-center bg-black'>
      <Text className="text-white py-5 text-5xl font-bold">Uber</Text>
    </View>
  );
};

export default SplashScreen;
