import React from 'react'
import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Button } from 'react-native';
import { Card } from '../../components/Card';
import { Title } from '../../components/Title';


const Home = ({ navigation }) => {

    const [products, setProducts] = useState([]);

    const getProduct = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const { results } = await response.json();
        setProducts(results);
  };

  const handleNavigate = () => {
    navigation.navigate('Product Detail')
  };

  useEffect(() => {
    getProduct();
  }, []);
  
    return (
    <ScrollView style={styles.container}>
      <Title title='React Avanzado' />
      <Button
        onPress={handleNavigate}
        title="Learn More"
        color="#841584"
      />
      {products.map((product) => (
        <Card {...product} key={product.id} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: 20,
    },
  });

export default Home
