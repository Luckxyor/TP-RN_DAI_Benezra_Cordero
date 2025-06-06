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
        <Text style={styles.titulo}>PSG campeón de la Champions League</Text>
        <Image
          source={{ uri: 'https://static.eldiario.es/clip/bf3e8304-ac61-4ba4-97e6-1d250f607af3_16-9-discover-aspect-ratio_default_0.jpg' }}
          style={styles.imagen}
        />
        <TouchableOpacity
          style={styles.botonSecundario}
          onPress={() => navigation.navigate('NoticiaEntera')}
        >
          <Text style={styles.botonTextoSecundario}>Ver la noticia entera</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.texto}>Escriba un comentario sobre este servicio de noticias:</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
  },
  imagen: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
    color: '#222',
    marginBottom: 10,
    textAlign: 'center',
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
  botonSecundario: {
    backgroundColor: '#fff',
    borderColor: '#007BFF',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 250,
  },
  botonTextoSecundario: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  noticia: {
    marginBottom: 20,
    alignItems: 'center',
    borderColor:'#fff',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
