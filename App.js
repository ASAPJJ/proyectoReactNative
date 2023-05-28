import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ListGamesView from './src/views/ListGamesView';
import HomeView from './src/views/HomeView';

export default function App() {
  // Instanciamos nuestro Stack Navigator que nos ayudará a crear la navegación y las pantallas
  const Stack = createNativeStackNavigator();

  return (
    <>
      {/* Contenedor de navegación */}
      <NavigationContainer>
        {/* Nuestro Stack Navigator */}
        <Stack.Navigator initialRouteName="Home">
          {/* Definición de las vistas/páginas de nuestra aplicación */}
          {/* Cada Screen representa una pantalla que se puede navegar */}
          {/* El nombre es el identificador de la pantalla y el componente es la vista que se mostrará */}
          <Stack.Screen name="Inicio" component={HomeView} />
          <Stack.Screen name="Lista Juegos" component={ListGamesView} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* Barra de estado */}
      <StatusBar style="auto" />
    </>
  );
}
