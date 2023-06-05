import { StatusBar } from 'expo-status-bar';
import { View, Text} from "react-native";
import styles from "./styles.js";
import timer from "./timer.js";



function HomeScreen(){
    return(
      <View style={styles.screenContainer}>
        <StatusBar style="auto"/>
        <timer></timer>
      </View>
  
    );
}
export default HomeScreen


//https://www.npmjs.com/package/react-native-countdown-circle-timer