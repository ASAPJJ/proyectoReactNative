import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '/src/components/Main.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackActions.Navigator>
        <Stack.Screen name='Listado' component ={Main}/>
      </StackActions.Navigator>
    </NavigationContainer>
  );
}

