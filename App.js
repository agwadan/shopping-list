import { useState } from 'react';
import { StyleSheet, Text,Image,  View, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

export default function App() {

  const [items, setItems] = useState([
    {id:1, text: 'Milk' },
    {id:2, text: 'Eggs' },
    {id:3, text: 'Bread' },
    {id:4, text: 'Juice' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    })
  }

  const addItem = (text) => {
    if(!text){
      Alert.alert('Error', "Please Enter sometext",[{text: 'Okay'}])
    } else {
      setItems(prevItems => {
        return[{id: 6, text: text},...prevItems];
      })
    }
  }

  return (
    <View style={styles.container}>
     <Header/>
     <AddItem
      addItem={addItem}
     />
     <FlatList
      data={items}
      renderItem={({item})=> (
        <ListItem 
          item={item}
          deleteItem={deleteItem}
        />
      )}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop: 60
  },
});
