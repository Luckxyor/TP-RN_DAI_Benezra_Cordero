import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function DetailsScreen() {
  const route = useRoute();
  const { nombre, telefono } = route.params || {};
  const [mensaje, setMensaje] = useState('');

  const enviarMensaje = () => {
    if (mensaje !== '') {
        alert(`Enviado el mensaje: ${mensaje}`);
    } else {
        alert('No escribiste nada');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Detalles de la Home</Text>
      <Image source={{uri: 'https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg'}} style={styles.imagen} />
      <Text style={styles.texto}>Nombre: {nombre ? nombre : 'No definido'}</Text>
      <Text style={styles.texto}>Teléfono: {telefono ? telefono : 'No definido'}</Text>
      <Text style={styles.texto}>Mensaje:</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese texto'
        value={mensaje}
        onChangeText={setMensaje}
      />
      <TouchableOpacity style={styles.boton} onPress={enviarMensaje}>
        <Text style={styles.botonTexto}>Mostrar Mensaje</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
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
  },
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});
