import React, { useEffect, useState } from 'react';
import { Text, FlatList, View, TextInput } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { ApiFetch } from '../services/ApiFetch';
import Card from '../components/Card';
import { Background } from '../components/Background';
import { Ionicons } from '@expo/vector-icons';

function ListGamesView() {
  // Estado para almacenar los datos de los juegos
  const [datos, setDatos] = useState([]);
  // Estado para almacenar el valor del filtro de búsqueda
  const [filtro, setFiltro] = useState('');

  // Función para obtener los datos de los juegos mediante la API
  const traerDatos = async () => {
    const data = await ApiFetch();
    setDatos(data);
  };

  // Función para eliminar un juego de la lista
  const handleDelete = (title) => {
    setDatos((prevDatos) => prevDatos.filter((juego) => juego.title !== title));
  };

  // Función para manejar el cambio en el valor del filtro de búsqueda
  const handleFiltroChange = (text) => {
    setFiltro(text);
  };

  // Filtrar los datos de los juegos en función del filtro de búsqueda
  const filteredDatos = datos.filter((juego) =>
    juego.title.toLowerCase().includes(filtro.trim().toLowerCase())
  );

  // Obtener los datos de los juegos al cargar el componente
  useEffect(() => {
    traerDatos();
  }, []);

  return (
    <Background url={require('../img/MiFondo.jpg')}>
      <View style={styles.container}>
        {/* Barra de búsqueda */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="Buscar juego..."
            placeholderTextColor="#888"
            value={filtro}
            onChangeText={handleFiltroChange}
          />
        </View>
        {/* Verificar si no se encontraron resultados */}
        {filteredDatos.length === 0 ? (
          <Text style={styles.noResultsText}>No se encontraron resultados</Text>
        ) : (
          /* Renderizar la lista de juegos */
          <FlatList
            data={filteredDatos}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: juego }) => (
              <View key={juego.id}>
                <Card
                  title={juego.title}
                  thumbnail={juego.thumbnail}
                  genre={juego.genre}
                  platform={juego.platform}
                  onDelete={handleDelete}
                />
              </View>
            )}
          />
        )}
      </View>
    </Background>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: '10@s',
    paddingHorizontal: '10@s',
    backgroundColor: '#f0f0f0',
    borderRadius: '5@s',
  },
  searchIcon: {
    marginRight: '10@s',
  },
  textInput: {
    flex: 1,
    height: '40@s',
    color: '#333',
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: '20@s',
    fontSize: '16@s',
    color: '#888',
  },
});

export default ListGamesView;