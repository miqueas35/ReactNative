import React from 'react'
import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card } from '../../components/Card';
import { Title } from '../../components/Title';


const Home = () => {

    const [products, setProducts] = useState([]);

    const getProduct = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const { results } = await response.json();
        setProducts(results);
  };

  useEffect(() => {
    getProduct();
  }, []);
  
    return (
    <ScrollView style={styles.container}>
      <Title title='React Avanzado' />
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
