import React from "react"; //Vai importar a biblioteca React
import { View, Text} from "react-native"; // Vai importar os componentes View e Text da biblioteca

// Define os estilos utilizados no componente
export default function DrawerScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Drawer</Text>
        </View>
    );
}

// Define os estilos utilizados no componente
const styles = {
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center", 
        backgroundColor: "lightgreen",
    },
    title: {
        fontSize: 30,
    },
};