import { View, Text} from "react-native";
import styles from "./components/styles.js";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen  from "./components/home_screen.js";
import Set_timer_button from './components/set_timer_button.js';

const Stack = createNativeStackNavigator();


export default function App  ()  {
  
  //Setando o painel superior
  return (
      <NavigationContainer>
        <Set_timer_button styles={styles.Set_timer_button_cont}></Set_timer_button>
      <Stack.Navigator>
      <Stack.Screen name={"LevantaAI"} component={HomeScreen} 
      options={{
        title: "LevantaAI",
        headerStyle:{
          backgroundColor:"#3266a8",
        },
        headerTintColor: "white",
        headerTitleStyle:{
          fontWeight: "bold",
        },
      }
    }/>
      </Stack.Navigator>
      </NavigationContainer>
 
  );
}
