import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EditSettingsScreen() {
  const navigation = useNavigation();
  const [dato1, setDato1] = useState('');
  const [dato2, setDato2] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Editar Ajustes</Text>
      <Text style={styles.texto}>Dato 1:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese un dato"
        value={dato1}
        onChangeText={setDato1}
      />
      <Text style={styles.texto}>Dato 2:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese otro dato"
        value={dato2}
        onChangeText={setDato2}
      />
      <TouchableOpacity style={styles.boton} onPress={() => navigation.goBack()}>
        <Text style={styles.botonTexto}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce4ec',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  texto: {
    fontSize: 18,
    color: '#222',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 250,
    backgroundColor: '#fff',
  },
  boton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    width: 250,
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
