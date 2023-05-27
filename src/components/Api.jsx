import React, { useEffect, useState } from "react";
import {Text, FlatList, Image } from "react-native";
import { peticionApi } from "../service/peticionApi";
import ApiItem from "./ApiItem.jsx";

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
      ItemSeparatorComponent={()=><Text> </Text>}
      renderItem={({ item: juego }) => (
        <ApiItem {... juego}/>
      )}
    />
  );
}
export default Api;
