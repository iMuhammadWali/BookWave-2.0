import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import { TextInput, ToastAndroid } from 'react-native';
import COLORS from 'constants/colors';
import Book from 'components/Book';
import BookList from 'components/BookList'

const Home = () => {
    const books = ["Art of War", "Atomic Habits", "Sapiens", "Art of War", "Atomic Habits", "Sapiens", "Art of War", "Atomic Habits", "Sapiens","Art of War", "Atomic Habits", "Sapiens","Art of War", "Atomic Habits", "Sapiens"]

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Popular Books
            </Text>
            <BookList books={books}/>
        </View>
    )
} 
// parent is linear layout
const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    backgroundColor:COLORS.black
  },
  text:{
    fontSize:15,
    color:COLORS.white
  }
});

export default Home;