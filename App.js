import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Alert } from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => Alert.alert("Eu falo ctg ent", "Oi, tudo bem?")} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const AppButton2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer2}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.textStyle}>{"Ola mundo do Jung!"}</Text>
      <AppButton title="Fala comigo :)"/>
      <View style={styles.space}></View>
      <AppButton2 title="Mehh" />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 16
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#fcba03",
    borderRadius: 10,
    paddingVertical: 12,
    alignSelf: "center",
    height: 45,
    width: 150
  },
  appButtonContainer2: {
    elevation: 8,
    backgroundColor: "#91eaed",
    borderRadius: 10,
    paddingVertical: 12,
    alignSelf: "center",
    height: 45,
    width: 150
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  textStyle:{
    fontSize: 20,
    color: "#eb4034",
    textAlign: "center",
    marginBottom: 20,
  },
  
    space:{
      width:20,
      height:20
  }
});

export default App;

//Fim..../
