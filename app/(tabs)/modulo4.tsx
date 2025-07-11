import { router } from 'expo-router';
import { useState } from 'react';
import {
    ActivityIndicator,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
} from 'react-native';

export default function Modulo4() {
    // controla o valor digitado no campo “nome”
    const [nome, setNome] = useState('');
    // controla o valor digitado no campo “e-mail”
    const [email, setEmail] = useState('');
    // controla o texto da mensagem
    const [mensagem, setMensagem] = useState('');
    // indica se a simulação de envio está em andamento
    const [enviando, setEnviando] = useState(false);
    // indica se a mensagem já foi “enviada” (simulação concluída)
    const [enviado, setEnviado] = useState(false);
    
    // função chamada ao tocar em “Enviar Mensagem”
    const handleEnviar = () => {
        // validação: garante que todos os campos foram preenchidos
        if (!nome || !email || !mensagem) {
            alert('Preencha todos os campos!');
            return;
        }

        setEnviando(true);   // mostra o spinner
        setEnviado(false);   // esconde a mensagem de sucesso

        // simula requisição de 2 s para “enviar” a mensagem
        // setTimeout(() => {
        //     setEnviando(false); // oculta o spinner
        //     setEnviado(true);   // exibe a confirmação
        //     // limpa os campos do formulário
        //     setNome('');
        //     setEmail('');
        //     setMensagem('');
        // }, 2000);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Fale Conosco</Text>

            <TextInput
                placeholder="Seu nome"
                value={nome} // Atualiza a variável nome com o texto digitado
                onChangeText={
                    setNome
                } // Limpa o campo nome
                style={styles.input}
            />

            <TextInput
                placeholder="Seu e-mail"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address" // abre o teclado otimizado para e-mail
            // ------ keyboardType	---- Descrição:
            // "default"	Teclado padrão, com letras, números e símbolos.
            // "email-address"	Mostra o @ e . para facilitar digitação de e-mail.
            // "numeric"	Apenas números (0–9). Pode impedir uso de ponto/coma.
            // "number-pad"	Apenas números, similar ao de calculadora.
            // "decimal-pad"	Números com ponto decimal. Ideal para preços, medidas etc.
            // "phone-pad"	Teclado de telefone com números e símbolos +, #, *.
            // "url"	Teclado com /, .com, útil para digitar links.
            // "ascii-capable"	Apenas caracteres ASCII. Em iOS força letras minúsculas por padrão.
            // "twitter"	Teclado adaptado com @ e #, voltado para inputs sociais.
            // "web-search"	Teclado adaptado para buscas na web.
            // "visible-password"	Mostra o teclado com foco em entrada de senhas visíveis (Android).
            // "name-phone-pad"	Mistura de nome e número. Recomendado para campos como "Contato".
            />

            <TextInput
                placeholder="Sua mensagem"
                value={mensagem}
                onChangeText={setMensagem}
                style={[styles.input, { height: 100 }]}
                multiline // permite várias linhas de texto
            />

            <Pressable onPress={handleEnviar} style={styles.button}>
                <Text style={styles.buttonText}>Enviar Mensagem</Text>
            </Pressable>

            {/* mostra o spinner enquanto enviando === true */}
            {enviando && (
                <ActivityIndicator
                    size="large"
                    color="#0a5ca8"
                    style={{ marginVertical: 10 }}
                />
            )}

            {/* mostra o texto de sucesso quando enviado === true */}
            {enviado && <Text style={styles.success}>Mensagem enviada com sucesso!</Text>}

            <Pressable onPress={() => router.push('/')} style={styles.button}>
                <Text style={styles.buttonText}>Voltar para Home</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
        maxWidth: 600, // limita a largura em telas muito grandes (web)
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        width: '70%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 6,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#0a5ca8',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
        width: '70%',
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
});
