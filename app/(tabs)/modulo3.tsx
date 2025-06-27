import { useState } from 'react';
import {
    StyleSheet
} from 'react-native';

type Usuario = {
    id: number;
    name: string;
};

export default function Modulo3() {
    const [carregando, setCarregando] =useState (false);
    const [usuarios, setUsuarios] = useState <Usuario[]>([]);
    const [visivel, setVisivel] = useState(false);


    const carregarUsuarios = async () => {
        // se já esta visível, colapsa a lista
    if(visivel) {
        setVisivel (false);
        return;
    }
    setCarregando(true);
    try {
        const response = await fetch ('https://jsonplaseholder.typicode.com/users');
        const data = await response.json();
    setUsuarios (data);
    setVisivel(true); //torna a lista visivel apos carregar
    } catch (error){
        console.error('erro ao carregar usuarios',error);
    } finally {
        setCarregando(false)
    }
}
   
const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor:'#f9f9f9',
    },
    title: {
        fontSize:24,
        marginBottom:20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#0a5ca8',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
        width: '100%',
},
     buttonText: {
        color: 'white',             // Cor do texto: branco
        fontWeight: 'bold',         // Texto em negrito
        fontSize: 16,               // Tamanho médio-grande da fonte
    },
        footer: {
        marginTop: 40,              // Espaço acima do rodapé
    },
footerText: {
        color: '#777',              // Cor do texto: cinza médio
        fontSize: 14,               // Tamanho pequeno da fonte
    },
}
)}