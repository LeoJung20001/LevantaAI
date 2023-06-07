import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";


export const Set_timer_button = ({onPress, title}) =>  {
    
        <TouchableOpacity onPress={onPress} style={styles.set_timer_button_cont}>
            <Text style={styles.set_timer_butn_text_sty}/>
        </TouchableOpacity>
    
};


export default Set_timer_button