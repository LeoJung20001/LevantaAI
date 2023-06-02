import { View, Text} from "react-native";
import AppButton  from "./components/button_one.jsx";
import  AppButton2  from "./components/button_two.jsx";
import styles from "./components/styles-buttons.jsx";

//Setando a URL
const url = "https://google.com";

const App = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.textStyle}>{"Ola mundo do Jung!"}</Text>
      <AppButton title="Fala comigo :)"/>
      <View style={styles.space}></View>
      <AppButton2 url={url} style={styles.appButtonContainer2}>{"Tchau"}</AppButton2>
    </View>
  );
};

export default App;
