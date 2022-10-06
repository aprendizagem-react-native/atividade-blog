import React from 'react'

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Artigo = ( {artigo, abreModal} ) => {
    return (
        <View>
            <TouchableOpacity style={e.botao} onPress={()=>abreModal()}>
                <Text>Fechar</Text>
            </TouchableOpacity>
            <View style={e.container}>
                <Text style={e.titulo} > {artigo.titulo} </Text>
                <Text> {artigo.texto} </Text>
            </View>
        </View>
    );
}

const e = StyleSheet.create({
    container:{
        padding: 20
    },
    botao: {
        backgroundColor: "#F5F5F5",
        padding: 20
    },
    titulo: {
        fontSize: 25,
        textAlign: "center",
        marginBottom: 20
    }
})
 
export default Artigo;