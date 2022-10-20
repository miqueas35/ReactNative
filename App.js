import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { Title } from './src/components/Title';

const App = () => {

  const [products, setProducts] = useState([])

  const getProduct = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const { results } = await response.json()
    setProducts(results)
  }

  useEffect(() => {
    getProduct()
  }, [])
  
  return (
    <View style={styles.container}>
      <Title title='React Avanzado'/>
      {
        products.map(product => (
      <View style={styles.card}>
      <Text style={styles.titleCard}>{product.name}</Text>
      <Image source={{ uri: product.image }} style={styles.image}/>
      <Text style={styles.priceCard}>Precio: ${product.id * 1003}</Text>
      </View>
        ))
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20
  },
  card: {
    width: '100%',
    height: 350,
    border: '1px solid black',
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
    maxHeight: '70%',
    marginHorizontal: 15
  },
  priceCard: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 900,
    marginTop: 15
  }
});

export default App;
