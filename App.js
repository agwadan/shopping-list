import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image,  View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Uganda</Text>
      <Image 
        source={{uri: 'https://www.freedigitalphotos.net/images/img/homepage/394230.jpg'}} 
        style={styles.img}
      />
      <StatusBar style="auto " />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdb58',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 100,
    height: 100
  }
});
