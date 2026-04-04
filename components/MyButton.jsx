import { TouchableOpacity, Text } from "react-native"

const MyButton = ({buttonBackgroundColor, textColor, text, borderRadius}) =>{
    return (
        <TouchableOpacity
            style={{backgroundColor:buttonBackgroundColor, borderRadius:borderRadius, flex:1, height:40,
                justifyContent: 'center',
                alignItems: 'center', 
            }}>
            <Text style={{color:textColor, fontWeight:'bold'}}>{text}</Text>
        </TouchableOpacity>
    );
}
export default MyButton;