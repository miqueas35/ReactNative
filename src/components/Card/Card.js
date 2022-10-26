import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const RNCard = ({ name, species, image, id }) => {

  const navigation = useNavigation();
  const onGoinTo = () => {
    navigation.navigate('Cart', {
      name,
      id,
      image,
      species
    })
  }

  return (
    <>
    <Card style={styles.card}>
      <Card.Title title={name} subtitle={species} />
      <Card.Cover source={{ uri: image }} />
      <Card.Content>
        <Paragraph>Precio: ${Math.floor(Math.random() * 1000 )}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={onGoinTo}>Agregar al carrito</Button>
        <Button onPress={() => navigation.navigate('Product detail')}>Comprar</Button>
      </Card.Actions>
    </Card>
      {/* <View style={styles.card}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleCard}>{name}</Text>
        <Text style={styles.speciesCard}>{species}</Text>
      </View>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.priceCard}>Precio: ${id * 1003}</Text>
    </View> */}
    </>
    
  );
};

/* const styles = StyleSheet.create({
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
}); */

const styles = StyleSheet.create({
  card: {
    marginBottom: 25
  }
})

export default RNCard;
