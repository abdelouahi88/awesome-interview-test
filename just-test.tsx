import { StatusBar } from 'expo-status-bar';
import React , { useState }  from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
//import { Button } from 'react-native-elements/dist/buttons/Button';
//import { renderNode } from 'react-native-elements/dist/helpers';

export default function App() {
  const[name ,setName] = useState('Abdelouahid duieb');
  const[person , setPerson] = useState({name: 'solaymane', age: 30});
  const clickHandler = () =>{
    setName('Karim bakali');
    setPerson({name :'hicham' , age: 45});
  }
  const clickHandler1 = () =>{
    setName('Karim bakali');
    setPerson({name :'hicham' , age: 45});
  }
  return (
    <View style={styles.container}>
      <Text>My mane is {name}</Text>
      <Text>His mane is {person.name} and his age is {person.age}</Text>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
   marginTop:20,
   backgroundColor:'red',
  }
 
});
