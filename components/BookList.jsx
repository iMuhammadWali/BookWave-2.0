import { Button, FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Book from '../components/Book';

const BookList = ({books}) =>{
    return (
        <FlatList style={styles.container}
            data={books}
            renderItem={({item})=> {
                return <Book book={item}/>
            }}
        />  
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10
    }
})

export default BookList;