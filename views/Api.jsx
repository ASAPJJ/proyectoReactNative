import React, { useEffect, useState } from "react";
import {Text, FlatList, View } from "react-native";
import { peticionApi } from "../src/service/peticionApi";
import Card from "../src/components/Card";
import { Background } from "../src/components/Background";

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
    <Background>
    <FlatList
      data={datos}
      ItemSeparatorComponent={()=><Text> </Text>}
      renderItem={({ item: juego }) => ( 
       
      <View key={juego.id}>
         <Card 
         title={juego.title}
         thumbnail={juego.thumbnail}
         genre={juego.genre}
         platform={juego.platform}
         />
      </View>
      )}
    />
    </Background>
  );
}
export default Api;
