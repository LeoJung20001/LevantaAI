import { StatusBar } from 'expo-status-bar';
import { View, Text} from "react-native";
import styles from "./styles.js";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";



function HomeScreen(){
    return(
      <View style={styles.screenContainer}>
        
        <StatusBar style="auto"/>
        
        <CountdownCircleTimer
        isPlaying
        duration={30}
        colors={["#3266a8"]}>
        {({ remainingTime }) => <Text>{remainingTime}</Text>}
       </CountdownCircleTimer>
      
      </View>
  
    );
}
export default HomeScreen
