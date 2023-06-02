import { TouchableOpacity, Text } from "react-native";
import { Alert } from "react-native";
import styles from "/components/styles-buttons.jsx";


TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export const AppButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={() => Alert.alert("Eu falo ctg ent", "Oi, tudo bem?")} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}


export default AppButton