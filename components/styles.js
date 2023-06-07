import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#fff",
      alignItems: "center"
    },
    header_bar: {
      flex:1,
      flex: 1,
      justifyContent: "flex-start",
      padding: 16,
      headerStyle:{
        backgroundColor: "#3266a8"
      },
    set_timer_butn_text_sty:{
      fontSize: 18,
      color: "#3266a8",
      alignSelf: "center",
      textTransform: "uppercase"
      
    },
    set_timer_button_cont: {
      elevation: 8,
      backgroundColor: "#3266a8",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    }
  }
    
  });
  
export default styles