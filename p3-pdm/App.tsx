import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useState } from 'react';
import { FlatList } from 'react-native';

interface Gato {
  id: string;
  url: string;
}

export default function App() {
    const [gatos, setGatos] = useState<Gato[]>([]);


  const buscarGatos = async () => {

    const resposta = await fetch(
      'https://api.thecatapi.com/v1/images/search?limit=5'
    );


    const dados: Gato[] = await resposta.json();


    setGatos(dados);

  };


  return (

    <View style={styles.container}>

      

    </View>

  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#494c4e'
  },

});