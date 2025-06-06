import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import DetailsScreen from './screens/DetailsScreen';
import EditSettingsScreen from './screens/EditSettingsScreen';
import PreviewNoticiaScreen from './screens/PreviewNoticiaScreen';
import NoticiaEnteraScreen from './screens/NoticiaEnteraScreen';
import PerfilScreen from './screens/PerfilScreen';
import EditPerfilScreen from './screens/EditPerfilScreen';


const HomeStack = createNativeStackNavigator();
function HomeStackScreen(){
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  )
}

const SettingsStack = createNativeStackNavigator();
function SettingsStackScreen(){
  return(
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="EditSettings" component={EditSettingsScreen} />
    </SettingsStack.Navigator>
  )
}

const NoticiasStack= createNativeStackNavigator();
const NoticiaStackScreen=()=>{
  return(
    <NoticiasStack.Navigator>
      <NoticiasStack.Screen name="PreviewNoticia" component={PreviewNoticiaScreen}/>
      <NoticiasStack.Screen name="NoticiaEntera" component={NoticiaEnteraScreen}/>
    </NoticiasStack.Navigator>
  )
}

const PerfilStack = createNativeStackNavigator();
const PerfilStackScreen = () => {
  return (
    <PerfilStack.Navigator>
      <PerfilStack.Screen name="Perfil" component={PerfilScreen} />
      <PerfilStack.Screen name="EditPerfil" component={EditPerfilScreen} />
    </PerfilStack.Navigator>
  );
}





const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={HomeStackScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
           ),
        }}/>
        <Tab.Screen name="Noticias" component={NoticiaStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper" size={24} color={color} />
           ),
        }}/>
        <Tab.Screen name="Perfil" component={PerfilStackScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
           ),
        }}/>
        <Tab.Screen name="Settings" component={SettingsStackScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
           ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
