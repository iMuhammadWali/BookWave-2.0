import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import { TextInput, ToastAndroid } from 'react-native';
import COLORS from 'constants/colors';
import Book from 'components/Book';

const BookList = ({books}) =>{
    return (
        <FlatList
            data={books}
            renderItem={({item})=> {
                return <Book item={item}/>
            }}
        />  
    )
}

export default BookList;