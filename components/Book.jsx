import COLORS from 'constants/colors';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import { TextInput, ToastAndroid } from 'react-native';


export default function Book({item}){
    return <View style={bookStyles.container}>
            <Text style={bookStyles.text}>{item}</Text>
          </View>
}

const bookStyles = StyleSheet.create({
  container:{
    // width:'100%',
    height:'auto',
    padding: 20,
    borderColor:'black',
    backgroundColor: COLORS.grey,
    marginBottom:5,
    borderRadius:20,
    marginLeft:10,
    marginRight:10
  },
  text:{
    color:'white'
  }
});