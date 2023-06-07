import { StatusBar } from 'expo-status-bar';
import { View, Text} from "react-native";
import styles from "./styles.js";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import Set_timer_button from './set_timer_button.js';


export function HomeScreen(){
    return(
      <View style={styles.screenContainer}>
        
        <StatusBar style="auto"/>
        
        <CountdownCircleTimer
        isPlaying
        duration={30}
        colors={["#3266a8"]}>
        {({ remainingTime }) => <Text>{remainingTime}</Text>}
       </CountdownCircleTimer>

       <Set_timer_button title={"Texte"}></Set_timer_button>
      
      </View>
  
    );
}
export default HomeScreen
