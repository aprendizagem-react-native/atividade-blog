import React from 'react'

import { StyleSheet, Modal, View, Text, TouchableOpacity } from 'react-native';

import Artigo from '../Componentes/Artigo';

const Leitura = ( {artigos} ) => {

    const [ exibeModal, alteraExibeModal ] = React.useState(false);
    const [ artigoSelecionado, alteraArtigoSelecionado ] = React.useState(null);

    const abreModal = ( artigo ) => {

        alteraExibeModal(!exibeModal);

        if(artigo){
            alteraArtigoSelecionado( artigo );
        }

    }

    return (
        <View>

            {/* <Text>Tela de leitura dos artigos</Text> */}

            {
                artigos.map( artigo =>
                    <TouchableOpacity key={artigo.id} style={e.linha} onPress={()=> abreModal(artigo) } >
                        <Text style={e.titulo} > {artigo.titulo} </Text>
                        <TouchableOpacity>
                            <Text style={e.botao} > Ver mais </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )
            }

            <Modal animationType='slide' visible={exibeModal} >
                <Artigo artigo={artigoSelecionado} abreModal={abreModal}  />
            </Modal>

        </View>
    );
}

const e = StyleSheet.create({
    linha: {
        zIndex: 1, // Necessário para que possa se tocar em qualquer lugar do componente
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FEFEFE",
        padding: 20,
        borderWidth: 1,
        borderColor: "#CCC",
        marginBottom: 15
    },
    titulo: {
        fontWeight: "bold",
        zIndex: -1
    },
    botao: {
        textDecorationLine: "underline"
    }
})
 
export default Leitura;