import React from "react"; //Vai importar a biblioteca React
import { View, Text} from "react-native"; // Vai importar os componentes View e Text da biblioteca

// A função principal que define o componente Drawer2
export default function Drawer2() {
    return (
        <View style={StyleSheet.container}></View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
    },
    title: {
        fontSize: 30, 
    },
};