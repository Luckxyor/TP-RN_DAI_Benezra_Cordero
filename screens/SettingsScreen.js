import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Settings Screen</Text>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('EditSettings')}>
                <Text style={styles.botonTexto}>Editar los Ajustes</Text>
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
  boton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});

