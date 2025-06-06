import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PreviewNoticiaScreen() {
  const [comentario, setComentario] = useState('');
  const navigation = useNavigation();

  const enviarComentario = () => {
    if (comentario !== '') {
      alert(`Enviado el mensaje: ${comentario}`);
    } else {
      alert('No escribiste nada');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.noticia}>
        <Image
          source={{ uri: 'https://static.eldiario.es/clip/bf3e8304-ac61-4ba4-97e6-1d250f607af3_16-9-discover-aspect-ratio_default_0.jpg' }}
          style={styles.imagen}
        />
        <Text style={styles.titulo}>PSG campeón de la Champions League</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NoticiaEntera')}><Text style={styles.link}>Ver la noticia entera</Text></TouchableOpacity>
      </View>
      <View style={styles.comentarioContainer}>
        <Text>Escriba un comentario sobre este servicio de noticias:</Text>
        <TextInput
          style={styles.input}
          placeholder='Escriba un comentario...'
          onChangeText={setComentario}
          value={comentario}
        />
        <TouchableOpacity style={styles.boton} onPress={enviarComentario}>
          <Text style={styles.botonTexto}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  noticia: {
    marginBottom: 20,
    alignItems: 'center',
    borderColor:'#000',
    borderWidth:1,
    padding:20,
    borderRadius:20
  },
  imagen: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
    padding:7,
    backgroundColor:'blue',
    borderRadius:5,
    marginVertical:5
  },
  comentarioContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  botonTexto: {
    color: '#fff',
    textAlign: 'center',
  },
});
