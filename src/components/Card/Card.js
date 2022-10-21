import React from 'react'
import { StyleSheet, View, Text, Image} from 'react-native'

const Card = (props) => {
    return(
        <View style={styles.card}>
            <Text style={styles.titleCard}>{props.name}</Text>
            <Image source={{ uri: props.uri }} style={styles.image}/>
            <Text style={styles.priceCard}>Precio: ${props.price * 1003}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    card: {
        width: '100%',
        height: 350,
        border: '1px solid black',
        borderWidth: 1,
        marginBottom: 20
      },
      titleCard: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginVertical: 15,
        textAlign: 'center'
      },
      image: {
        height: '70%',
        maxWidth: '100%',
        maxHeight: '100%',
        marginHorizontal: 15
      },
      priceCard: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '900',
        marginTop: 15
      }
  })

export default Card