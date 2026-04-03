import COLORS from 'constants/colors';
import { Button, StyleSheet, Text, Image, View, ToastAndroid, TouchableOpacity } from 'react-native';
import MyButton from './MyButton';

export default function Book({book}){
  const showToast = () =>{
    ToastAndroid.show("Clicked", ToastAndroid.SHORT);
  }

  return (
  <View style={styles.container}>

        <Image source={{uri:'https://img.freepik.com/free-vector/red-text-book-closed-icon_18591-82397.jpg?semt=ais_incoming&w=740&q=80'}}
          style={styles.image}
        />

        <View style={styles.infoContainer}>

          <Text style={styles.title}>{book.title}</Text>

          <Text style={styles.author}>{book.author}</Text>

            <View style={{flexDirection:'row', gap:8
           }}>
              <MyButton buttonBackgroundColor={COLORS.red} textColor={COLORS.white} text={"Read"} borderRadius={20}/>
              <MyButton buttonBackgroundColor={COLORS.white} textColor={COLORS.black} text={"Download"} borderRadius={20}/>
            </View>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:'130',
    alignItems:'center',
    padding: 10,
    borderColor:'black',
    backgroundColor: COLORS.grey,
    marginBottom:5,
    borderRadius:15,
    flexDirection:'row'
  },
  image: {
    width: 80,
    height: 100,
  },
  infoContainer:{
    marginLeft:10, flexDirection:'column', flex:1, height:'100%', gap:8
  },
  title:{
    color:'white',
    fontSize:16
  },
  author:{
    color:'white',
    fontSize:10
  },
  text:{
  },

});