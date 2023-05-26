import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { peticionApi } from "../service/peticionApi";

function Api() {
  const [datos, setDatos] = useState([]);

  const traerDatos = async () => {
    const data = await peticionApi();
    console.log(data);
    setDatos(data);
  };

  useEffect(() => {
    traerDatos();
  }, []);

  return (
    <FlatList
      data={datos}
      renderItem={({ item: juego }) => (
        <View key={juego.id}>
          <Text>Titulo: {juego.title}</Text>
          <Text>Genero: {juego.genre}</Text>
          <Text>Plataforma: {juego.platform}</Text>
        </View>
      )}
    />
  );
}
export default Api;
