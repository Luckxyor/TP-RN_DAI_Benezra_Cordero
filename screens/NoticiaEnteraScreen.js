import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

export default function NoticiaEnteraScreen(){
    const [comentario, setComentario] = useState('');
    const enviarComentario = () => {
        if (comentario !== '') {
            alert(`Enviado el mensaje: ${comentario}`);
        } else {
            alert('No escribiste nada');
        }
    };
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>PSG campeón de la Champions League</Text>
            <Image
                source={{ uri: 'https://static.eldiario.es/clip/bf3e8304-ac61-4ba4-97e6-1d250f607af3_16-9-discover-aspect-ratio_default_0.jpg' }}
                style={styles.imagen}
            />
            <Text style={styles.texto}>
                Paris Saint-Germain, con Luis Enrique como conductor, se consagró este sábado como el nuevo campeón de la Champions League. Lo consiguió tras aplastar por 5-0 a Inter de Milán, con Lautaro Martínez como capitán, en una final histórica jugada en el estadio Allianz Arena de Múnich gracias a los goles de Achraf Hakimi, Désiré Doué, por duplicado, Khvicha Kvaratskhelia, y Senny Mayulu. Ningún equipo había ganado por tanta diferencia en una definición del torneo más importante de clubes de Europa. Se trata de la primera coronación del equipo de capitales qataríes en el máximo torneo continental -había quedado a las puertas en 2020- y la segunda de la historia del fútbol galo luego de aquella lejana conquista de Olympique de Marsella, en 1993 y también en Múnich, ante el Milan.
            </Text>
            <Text style={styles.texto}>Escriba un comentario sobre esta noticia:</Text>
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
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e0f7fa',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
        color: '#222',
        textAlign: 'center',
    },
    imagen:{
        width: 250,
        height: 150,
        borderRadius: 10,
        marginBottom: 20,
    },
    texto:{
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
    }
});