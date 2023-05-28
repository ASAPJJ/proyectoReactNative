import { FlatList, View, Image, Text } from 'react-native';
import React from 'react';
import { Background } from '../components/Background';
import ButtonTitle from '../components/ButtonTitle';
import { ScaledSheet } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';

const HomeView = ({ navigation }) => {
  // Array de vistas con los títulos y las rutas
  const views = [
    { title: 'Lista de juegos', path: 'Lista Juegos' },
  ];

  // Función para renderizar cada elemento del FlatList
  const renderItem = ({ item }) => (
    <ButtonTitle
      title={item.title}
      action={() => navigation.navigate(item.path)}
      icon={<Ionicons name="ios-list" size={20} color="white" style={styles.listIcon} />}
    />
  );

  return (
    <Background url={require('../img/FondoPrincipal.jpg')}>
      <View style={styles.container}>
        {/* Título */}
        <Text style={styles.title}>Bienvenido!!1!</Text>
        {/* Imagen */}
        <View style={styles.imageContainer}>
          <Image source={require('../img/LibreriaMc.jpg')} style={styles.squareImage} />
        </View>
        {/* FlatList */}
        <FlatList data={views} renderItem={renderItem} />
      </View>
    </Background>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '24@s',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '20@s',
  },
  imageContainer: {
    width: '200@s',
    height: '200@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareImage: {
    width: '150@s',
    height: '150@s',
    borderRadius: '10@s',
  },
  listIcon: {
    marginRight: '10@s',
  },
});

export default HomeView;
