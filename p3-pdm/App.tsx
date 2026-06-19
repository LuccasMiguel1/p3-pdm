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

      <StatusBar style="auto" />

      <Pressable
        style={styles.button}
        onPress={buscarGatos}
      >
        <Text style={styles.buttonText}>
          Buscar gatos
        </Text>
      </Pressable>

      <FlatList
        data={gatos}

        renderItem={({item}) => (
          <Image
            source={{ uri: item.url }}
            style={{
              width:300,
              height:300,
              margin:10
            }}
          />
        )}

        keyExtractor={(item)=> item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#494c4e'
  },


  button:{
    backgroundColor:'#007AFF',
    padding:10,
    margin:20,
    borderRadius:5
  },


  buttonText:{
    color:'white'
  }


});