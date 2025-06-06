import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
            <Text>Paris Saint-Germain, con Luis Enrique como conductor, se consagró este sábado como el nuevo campeón de la Champions League. Lo consiguió tras aplastar por 5-0 a Inter de Milán, con Lautaro Martínez como capitán, en una final histórica jugada en el estadio Allianz Arena de Múnich gracias a los goles de Achraf Hakimi, Désiré Doué, por duplicado, Khvicha Kvaratskhelia, y Senny Mayulu. Ningún equipo había ganado por tanta diferencia en una definición del torneo más importante de clubes de Europa. Se trata de la primera coronación del equipo de capitales qataríes en el máximo torneo continental -había quedado a las puertas en 2020- y la segunda de la historia del fútbol galo luego de aquella lejana conquista de Olympique de Marsella, en 1993 y también en Múnich, ante el Milan.</Text>
            <TouchableOpacity style={styles.boton} onPress={enviarComentario}>
                <Text style={styles.botonTexto}>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    imagen:{
        height:200,
        marginBottom:10
    },
    container:{
        padding:20
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10
    }
});
  