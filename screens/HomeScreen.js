import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
   const navigation = useNavigation();
   return ( 
         <View style={styles.container}>
            <Text>HomeScreen</Text>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Details')}><Text>Ir a detalles de la Home</Text></TouchableOpacity>
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
         marginTop: 20,
   },
});
