import React from 'react';
import {StyleSheet, Text, Image, Dimensions, View} from 'react-native';

const {width} = Dimensions.get('window')

const Card = ({thumbnail,genre, title, platform}) =>{

    return(
        <View style={styles.card}>
            <Image style={styles.image} source={thumbnail}>
            </Image>
            <Text style={styles.text}>
                {title}
            </Text>
            <Text style={styles.text}>{genre}</Text>
            <Text style={styles.text}>{platform}</Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: (width -40 )/2,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        alignItems: 'center'
      },
      image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    }
        ,
        text:{
            color: 'blue',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 10,
            textAlign: 'center'
          }
})