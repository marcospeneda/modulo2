import React, { useState } from 'react';
import {
    ActivityIndicator,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

type Usuario = {
    id: number;
    firstName: string;
    lastName: string;
};

export default function Modulo3() {
    const [carregando, setCarregando] = useState(false);
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [visivel, setVisivel] = useState(false);

    const carregarUsuarios = async () => {
        if (visivel) {
            setVisivel(false); // Colapsa a lista se já estiver visível
            return;
        }

        setCarregando(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsuarios(data.users);
            setVisivel(true);
        } catch (error) {
            console.error('Erro ao carregar usuários:', error);
        } finally {
            setCarregando(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Lista de Usuários</Text>

            <Pressable style={styles.button} onPress={carregarUsuarios}>
                <Text style={styles.buttonText}>
                    {visivel ? 'Ocultar Usuários' : 'Carregar Usuários'}
                </Text>
            </Pressable>

            {carregando && <ActivityIndicator size="large" color="#0a5ca8" />}

            {visivel && usuarios.map(usuario => (
                <Text key={usuario.id}>{usuario.firstName}</Text>
            ))}
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
    item: {
        backgroundColor: '#e9ecef',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 6,

    },
    itemText: {
        fontSize: 16,
    },
    
    footer: {
        marginTop: 40,
    },
    footerText: {
        color: '#777',
        fontSize: 14,
    },
});