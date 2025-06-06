import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function PerfilScreen({ route, navigation }) {
    const { nombre, telefono } = route.params || {};

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Perfil</Text>
            <Image
                source={{uri: 'https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg'}}
                style={styles.imagen}
            />
            <Text style={styles.texto}>Nombre: {nombre ? nombre : 'No definido'}</Text>
            <Text style={styles.texto}>Teléfono: {telefono ? telefono : 'No definido'}</Text>
            <TouchableOpacity
                style={styles.boton}
                onPress={() => navigation.navigate('EditPerfil')}
            >
                <Text style={styles.botonTexto}>Editar Perfil</Text>
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
    texto: {
        fontSize: 18,
        color: '#222',
        marginBottom: 10,
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