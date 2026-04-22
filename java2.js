import React from 'react';
import { View, StyleSheet, Alert, SafeAreaView } from 'react-native';
import CustomButton from './CustomButton'; // Importando o componente que criamos

export default function App() {
  const handlePress = (name) => {
    Alert.alert("Botão Clicado", `Você pressionou o botão ${name}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        {/* Uso 1: Azul */}
        <CustomButton 
          title="Salvar" 
          color="#2196F3" 
          onPress={() => handlePress('Azul')} 
        />

        {/* Uso 2: Verde */}
        <CustomButton 
          title="Confirmar" 
          color="#4CAF50" 
          onPress={() => handlePress('Verde')} 
        />

        {/* Uso 3: Vermelho */}
        <CustomButton 
          title="Deletar" 
          color="#F44336" 
          onPress={() => handlePress('Vermelho')} 
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});