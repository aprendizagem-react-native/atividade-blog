import React from 'react'

// npm install react-router-NATIVE <- native invés do DOM
// o dom também pode ser usado, mas por questões de desenvolvimento nativo, é melhor este
// Importar o NativeRouter invés do BrowserRouter
import { NativeRouter, Link, Routes, Route } from 'react-router-native'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Menu from './Componentes/Menu';
import Inicio from './Paginas/Inicio';
import Gerenciar from './Paginas/Gerenciar';
import Leitura from './Paginas/Leitura';

export default function App() {

    const [ artigos, alteraArtigos ] = React.useState([
        { id: 1, titulo: "HTML", texto: "Tecnologia para criar sites e elementos para internet" },
        { id: 2, titulo: "CSS", texto: "Usado em conjunto do HTML para tornar o site mais bonito e estilizado" },
        { id: 3, titulo: "JavaScript", texto: "Linguagem de programação para a internet" }
    ]);

    return (
        <View>

            <NativeRouter>

                <Menu/>

                <Routes>
                    <Route path="/" element={<Inicio/>} />
                    <Route path="/gerenciar" element={<Gerenciar artigos={artigos} alteraArtigos={alteraArtigos} />} />

                    {/* Deixar os alunos tentarem fazer a rota para leitura sozinhos */}
                    <Route path="/leitura" element={<Leitura artigos={artigos} />} />
                </Routes>

            </NativeRouter>

        </View>
    );
}