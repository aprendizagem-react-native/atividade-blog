import React from 'react'

import { Link } from 'react-router-native'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

const Menu = () => {
    return ( 
        <View style={e.container} >

            <BotaoMenu texto="Início" caminho="/" />
            <BotaoMenu texto="Leitura" caminho="/leitura" />
            <BotaoMenu texto="Gerenciar" caminho="/gerenciar" />

        </View>
    );
}

const BotaoMenu = ( {texto, caminho} ) => {

    const componente = 
        <TouchableOpacity style={e.botao} >
            <Link to={caminho}>
                <Text> {texto} </Text>
            </Link>
        </TouchableOpacity>

    return componente;

}
 
const e = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30
    },
    botao: {
        backgroundColor: "#EEE",
        paddingVertical: 10,
        flex: 1,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#CCC"
    }
});

export default Menu;