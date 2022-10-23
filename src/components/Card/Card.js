import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Card = ({ name, species, image, id }) => {
  return (
    <View style={styles.card}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleCard}>{name}</Text>
        <Text style={styles.speciesCard}>{species}</Text>
      </View>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.priceCard}>Precio: ${id * 1003}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 350,
    border: '1px solid black',
    marginBottom: 20,
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleCard: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  speciesCard: {
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  image: {
    height: '70%',
  },
  priceCard: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '900',
    marginTop: 15,
  },
});

export default Card;
