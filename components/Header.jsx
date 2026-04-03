import COLORS from "constants/colors";
import { View, StyleSheet, Text } from "react-native";

const Header = () =>{
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            BookWAVE
        </Text>
    </View>
)}

const styles = StyleSheet.create({
    container:{
        flexDirection : 'column',
        height:70,
        width:'100%',
        justifyContent:'center',
        backgroundColor:COLORS.grey,
        padding:10
    },
    text:{
        fontSize:20, fontStyle:'italic',
        color:COLORS.white
    }
})

export default Header;