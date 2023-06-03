import { View, Text} from "react-native";
import AppButton  from "./components/button_one.js";
import  AppButton2  from "./components/button_two.js";
import styles from "./components/styles-buttons.js";

//Setando a URL
const url = "https://google.com";

const App = () => {
  return (
    <View style={styles.screenContainer}>
      <View>
      <Text style={styles.textStyle}>{"Ola mundo do Jung!"}</Text>
      </View>
      <AppButton title="Fala comigo :)"/>
      <View style={styles.space}></View>
      <AppButton2 url={url} style={styles.appButtonContainer2}>{"Tchau"}</AppButton2>
    </View>
  );
};

export default App;
