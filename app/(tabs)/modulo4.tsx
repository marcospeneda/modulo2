// Importa o hook useState para gerenciar estado no componente.
// O que é estado? É, por exemplo, se algo está aberto ou fechado, visível ou oculto, etc.
import React from 'react';
import { useState } from 'react';
import {
    ActivityIndicator,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput
} from 'react-native';

// Importa componentes de UI do React Native.
// UI significa "interface do usuário".

export default function Modulo4() {
    // Controla o valor digitado no campo "nome"//
    const [nome, setNome] = useState('');
    
    // Controla o valor digitado no campo email//
    const [email, setEmail] = useState('');
    
    // Controla o texto da mensagem  //
    const [mensagem, setMensagem] = useState('');
    
    // Indica se a simulação de envio está em andamento //
    const [enviando, setEnviando] = useState(false);
    
    // Indica se a mensagem já foi enviada (caso a simulação tenha sido feita) //
    const [enviado, setEnviado] = useState(false);

    // Função chamada ao tocar em enviar a mensagem. //
    const handleEnviar = () => {
        // Validação: garante que todos os campos foram preenchidos. //
        if (!nome || !email || !mensagem) {
            alert('Preencha todos os campos');
            return;
        }

        setEnviando(true); // Mostra o spinner. //
        setEnviado(false); // Esconde a mensagem de sucesso. // 
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Fale conosco</Text>

            <TextInput
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={setNome} // Limpa o campo nome. //
                style={styles.input}
            />

            <TextInput
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType='email-address'// Abre o teclado otimizado para email. //
            />

            <TextInput
                placeholder="Digite sua mensagem"
                value={mensagem}
                onChangeText={setMensagem}
                style={styles.input}
                multiline // Permite várias linhas de texto. //
            />

            <Pressable onPress={handleEnviar} style={styles.button}>
                <Text style={styles.buttonText}>Enviar mensagem</Text>
            </Pressable>

            {/*mostra o spiner enquanto enviando === true*/}
            {enviando && (<ActivityIndicator size="large" color="#0A5CA8"  style={{ marginVertical: 10 }}/>)}
            {/*mostra o texto de sucessso quando o enviado foir igual a === true */}

            {enviado && (
                <Text style={styles.success} >Mensagem enviada com sucesso ! </Text>
            )}
            
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Home</Text>
            </Pressable>
        </ScrollView>
    );
}

// Estilos da interface
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#e9ecef',
        borderRadius: 6,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
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
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    success: {
        color: 'green',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        width: '70%',
        borderWidth: 4,
        borderColor: '#CCC',
        padding: 10,
        borderRadius: 6,
        marginBottom: 10,

    },
});