import { View, Text} from "react-native";
import AppButton  from "./components/button_one.js";
import  AppButton2  from "./components/button_two.js";
import Button_color_one from "./components/button_color_one.js";
import styles from "./components/styles-buttons.js";


//Setando a URL
const url = "https://google.com";

const App = () => {
  return (
    <View style={styles.screenContainer}>
      <View>
      <Text style={styles.textStyle}>{"Ola mundo do Jung!"}</Text>
      </View>
      <AppButton  title="Fala comigo :)"/>
      <View style={styles.space}></View>
      <AppButton2 url={url}>{"Tchau"}</AppButton2>
      <View style={styles.space}></View>
      <Button_color_one title={"MUDA DE COR!"}></Button_color_one>
    </View>
  );
}


export default App;
