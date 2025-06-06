import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DetailsScreen() {
  const [mensaje, setMensaje] = useState('');
  function alertaMarap (){
    alert(mensaje);
  }
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <TextInput placeholder='Ingrese texto' onChangeText={setMensaje}/>
      <TouchableOpacity style={styles.boton} onPress={() => alertaMarap()}><Text>Marapode</Text></TouchableOpacity>
      <Image source={require('../assets/fotoPerfil.jpg')} />
    </View>



  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
},
});
