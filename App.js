import { useEffect, useState } from 'react';
import { StyleSheet, View,} from 'react-native';
import { Card } from './src/components/Card';
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
          <View key={product.id}>
            <Card name={product.name} uri={product.image} price={product.id}/>
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
  }
});

export default App;
