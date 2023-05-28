import React from 'react';
import { StyleSheet, Text, Image, Dimensions, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const Card = ({ thumbnail, genre, title, platform, onDelete }) => {
  const handleDelete = () => {
    onDelete(title);
  };

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: thumbnail }} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{genre}</Text>
      <Text style={styles.text}>{platform}</Text>
      <TouchableOpacity style={styles.button} onPress={handleDelete}>
        <Ionicons name="trash" size={24} color="white" />
        <Text style={styles.buttonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: (width - 40) / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems: 'center',
    // Agregar color de fondo para solucionar la advertencia
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  text: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'red',
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 5,
  },
});
