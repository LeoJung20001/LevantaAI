import React, { useCallback } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Linking } from "react-native";
import styles from "./styles-buttons.js";


export const AppButton2 = ({ url, onPress}) => {
    const handlepress = useCallback(async() => {
      await Linking.openURL(url);
    })
    return(
    <TouchableOpacity onPress={handlepress} style={styles.appButtonContainer2}>
      <Text style={styles.appButtonText}>{"Tchau"}</Text>
    </TouchableOpacity>
    );
  }

export default AppButton2