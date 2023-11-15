import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image,  View, FlatList } from 'react-native';
import Header from './components/header';
import ListItem from './components/ListItem';
import { useState } from 'react';

export default function App() {

  const [items, setItems] = useState([
    {id:1, text: 'Milk' },
    {id:2, text: 'Eggs' },
    {id:3, text: 'Bread' },
    {id:4, text: 'Juice' },
  ]);

  return (
    <View style={styles.container}>
     <Header/>
     <FlatList
      data={items}
      renderItem={({item})=> (<ListItem item={item}/>)}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop: 60
  },
});
