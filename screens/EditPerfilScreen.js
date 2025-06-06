import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function EditPerfilScreen({ navigation }) {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Editar Perfil</Text>
            <Image
                source={{uri: 'https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg'}}
                style={styles.imagen}
            />
            <Text style={styles.texto}>Nombre:</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese su nombre"
                value={nombre}
                onChangeText={setNombre}
            />
            <Text style={styles.texto}>Teléfono:</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese su teléfono"
                value={telefono}
                onChangeText={setTelefono}
                keyboardType="phone-pad"
            />
            <TouchableOpacity
                style={styles.boton}
                onPress={() => navigation.navigate('Perfil', { nombre, telefono })}
            >
                <Text style={styles.botonTexto}>Guardar</Text>
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