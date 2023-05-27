import React from 'react';
import {View, Text, Image} from 'react-native';
import StyledText from '../../styles/MyStyles';

const ApiItem = (props) =>(
    <View key={props.id}>
    <StyledText fontSize='subheading'fontWeight='bold'>{props.title}</StyledText>
    <StyledText>Genero: {props.genre}</StyledText>
    <StyledText>Plataforma: {props.platform}</StyledText>
    <Image source={{ uri: props.thumbnail }} style={{ width: 200, height: 200 }} />
  </View>
)

export default ApiItem;