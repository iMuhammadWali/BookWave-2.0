import { Button, FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import COLORS from 'constants/colors';
import BookList from 'components/BookList'

const Home = () => {
    const books = [
        {title:"Model for writers", author:"John Doe"},
        {title:"Atomic Habits", author:"James Clear"},
        {title:"48 laws of Power", author:"Robert Green"}
    ]

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
    backgroundColor:COLORS.black,
    paddingHorizontal:10,
    height:'100%'
  },
  text:{
    fontSize:15,
    color:COLORS.white
  }
});

export default Home;