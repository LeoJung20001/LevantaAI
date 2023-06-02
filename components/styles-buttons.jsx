import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
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
  
export default styles