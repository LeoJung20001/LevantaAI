import { TouchableOpacity, Text, View } from "react-native";
import styles from "./styles-buttons.js";



TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export const Button_color_one = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={changeBack} style={styles.appButtonContainer3}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

function changeBack(){

  console.log("Teste")

}

export default Button_color_one