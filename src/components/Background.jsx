import React from "react";
import { View,ImageBackground, StyleSheet } from "react-native";
import MiFondo from '../../img/fondo.jpg'

export const Background = ({url, children})=>{
    return(
        <ImageBackground style={styles.fondo} source={MiFondo} resizeMode="stretch">
         <View style={styles.overlay}>
         {children}
         </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        resizeMode: 'cover', // Ajusta la imagen para cubrir toda la pantalla
      },
      overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Puedes ajustar la opacidad según tus necesidades
        justifyContent: 'center',
        alignItems: 'center',
      }
})