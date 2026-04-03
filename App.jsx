import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import { TextInput, ToastAndroid } from 'react-native';
import COLORS from 'constants/colors';
import Book from './components/Book'
import Header from './components/Header'
import Home from './pages/Home'
export default function App() {
  return (
    <View style={{marginTop:30}}>
      <Header/>
      <Home/>
    </View>  
);
}

