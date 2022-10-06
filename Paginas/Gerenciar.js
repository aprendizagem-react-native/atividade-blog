import React from 'react'

import { useNavigate } from 'react-router-native';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';

const Gerenciar = ( {artigos, alteraArtigos} ) => {

    const [titulo, alteraTitulo] = React.useState("");
    const [texto, alteraTexto] = React.useState("");

    const navigate = useNavigate();

    const salvar = () => {
        const id = artigos.length + 1;
        const artigo = {
            id: id,
            titulo: titulo,
            texto: texto
        }
        alteraArtigos([...artigos, artigo]);

        // Funciona apenas no Android
        // ToastAndroid.show("E ae man", ToastAndroid.SHORT);
        alert("Cadastrado com sucesso!")
        
        navigate("/leitura");

    }

    return (
        <View style={e.container} >

            <Text>Artigos cadastrados: {artigos.length} </Text>

            <View>
                <Text style={e.tituloNovo} >Adicionar novo </Text>
                <TextInput style={e.input} placeholder='Digite o título' onChangeText={ e => alteraTitulo(e) } />
                <TextInput style={{...e.input, ...e.inputTexto}} placeholder='Escreva o texto' multiline={true}  onChangeText={ e => alteraTexto(e) } />
                <TouchableOpacity style={e.botao} onPress={()=>salvar()}> 
                    <Text>Salvar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
 
const e = StyleSheet.create({
    container:{
        padding: 20
    },
    tituloNovo: {
        fontSize: 15
    },
    input: {
        borderWidth: 1,
        borderColor: "#CCC",
        height: 35,
        padding: 30,
        marginBottom: 20
    },
    inputTexto: {
        height: 200
    },
    botao: {
        backgroundColor: "#CCC",
        padding: 10,
        textAlign: "center"
    }
})

export default Gerenciar;