import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import {Button} from 'react-native-paper'
const Cart = () => {

  const navigation = useNavigation();
  const { name, id, species} = useRoute().params;

  return (
    <View>
      <Text>{name}, {id}, {species}</Text>
      <Button onPress={() => navigation.goBack()}>Volver al Home</Button>
    </View>
  )
}

export default Cart
