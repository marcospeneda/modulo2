// Importa o objeto 'router' do expo-router para navegação entre telas
import { router } from 'expo-router';
// Importa o hook useState para gerenciar estado no componente
import { useState } from 'react';
// Importa componentes de UI do React Native
import {
    ActivityIndicator, // Spinner de carregamento
    Pressable, // Botão com efeito “press”
    ScrollView, // Container com scroll vertical
    StyleSheet, // Utilitário de estilos em JS
    Text, // Exibe textos
    View, // Container genérico
} from 'react-native';

// 2) TIPAGEM --------------------------------------------------------

// Define o formato que cada objeto usuário deve ter
type Usuario = {
    id: number;        // Identificador único
    firstName: string; // Primeiro nome
    lastName: string;  // Sobrenome (não usado na lista, mas disponível)
};

// 3) COMPONENTE PRINCIPAL ------------------------------------------

export default function Modulo3() {
    // Estado que armazena a lista de usuários retornada da API
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    // Estado booleano que controla o spinner de carregamento
    const [carregando, setCarregando] = useState(false);
    // Estado que indica se a lista deve ser renderizada
    const [visivel, setVisivel] = useState(false);
    // Estado que guarda o número da página atual (começa em 1)
    const [pagina, setPagina] = useState(1);
    // Constante fixa com quantos itens por página queremos exibir
    const limite = 5;

    // ----------------------------------------------------------------
    // Função assíncrona responsável por buscar os usuários na API
    // Recebe 'paginaAtual' para saber qual parte dos dados buscar
    // ----------------------------------------------------------------
    const carregarUsuarios = async (paginaAtual: number) => {
        // Calcula quantos registros devem ser pulados (skip) na API
        const skip = (paginaAtual - 1) * limite;

        // Mostra o spinner
        setCarregando(true);

        try {
            // Faz a requisição HTTP usando limit e skip para paginação
            const response = await fetch(
                `https://dummyjson.com/users?limit=${limite}&skip=${skip}`
            );
            // Converte a resposta para JSON
            const data = await response.json();

            // Atualiza o estado com a nova lista de usuários
            setUsuarios(data.users);
            // Torna a lista visível na UI
            setVisivel(true);
            // Atualiza a página atual para refletir no cabeçalho e botões
            setPagina(paginaAtual);
        } catch (error) {
            // Em caso de erro loga no console
            console.error('Erro ao carregar usuários:', error);
        } finally {
            // Esconde o spinner
            setCarregando(false);
        }
    };

    // 4) RENDERIZAÇÃO ------------------------------------------------
    return (
        // ScrollView permite rolar o conteúdo se ficar longo
        <ScrollView contentContainerStyle={styles.container}>
            {/* Título da tela */}
            <Text style={styles.title}>Lista de Usuários</Text>

            {/* Botão principal que carrega (ou recarrega) a página atual */}
            <Pressable
                onPress={() => carregarUsuarios(pagina)}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Carregar Usuários</Text>
            </Pressable>

            {/* Spinner de carregamento – aparece enquanto 'carregando' for true */}
            {carregando && (
                <ActivityIndicator
                    size="large"
                    color="#0a5ca8"
                    style={{ marginVertical: 10 }}
                />
            )}

            {/* Lista gerada dinamicamente – só rende se 'visivel' for true */}
            {visivel && (
                <>
                    <Text style={styles.subtitle}>Página atual: {pagina}</Text>

                    {usuarios.map((usuario) => (
                        <View key={usuario.id} style={styles.item}>
                            <Text style={styles.itemText}>{usuario.firstName}</Text>
                        </View>
                    ))}
                </>
            )}

            {/* Botões de paginação: Anterior / Próxima */}
            {visivel && (
                <View style={styles.paginationContainer}>
                    {/* Botão “Página Anterior” */}
                    <Pressable
                        // Diminui 1 da página atual
                        onPress={() => carregarUsuarios(pagina - 1)}
                        // Aplica estilos condicionais
                        style={[
                            styles.button,
                            { width: '40%' },
                            pagina === 1 && styles.buttonDisabled, // cinza se for página 1
                        ]}
                        // Desativa o clique na primeira página
                        disabled={pagina === 1}
                    >
                        <Text
                            style={[
                                styles.buttonText,
                                pagina === 1 && styles.buttonTextDisabled,
                            ]}
                        >
                            Página Anterior
                        </Text>
                    </Pressable>

                    {/* Botão “Próxima Página” */}
                    <Pressable
                        // Soma 1 à página atual
                        onPress={() => carregarUsuarios(pagina + 1)}
                        style={[styles.button, { width: '40%' }]}
                    >
                        <Text style={styles.buttonText}>Próxima Página</Text>
                    </Pressable>
                </View>
            )}

            {/* Botão para voltar à Home usando o router do Expo */}
            <Pressable onPress={() => router.push('/')} style={styles.button}>
                <Text style={styles.buttonText}>Voltar para Home</Text>
            </Pressable>
        </ScrollView>
    );
}

// 5) ESTILOS --------------------------------------------------------
const styles = StyleSheet.create({
    // Container geral centralizado
    container: {
        flexGrow: 1, // Ocupa todo o espaço disponível
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center',     // Centraliza horizontalmente
        padding: 20,
        backgroundColor: '#f9f9f9',
        maxWidth: 600,            // Largura máxima para telas grandes
    },
    // Estilo do título principal
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    // Subtítulo que mostra a página atual
    subtitle: {
        fontSize: 18,
        marginBottom: 10,
        color: '#555',
        fontWeight: '600',
    },
    // Estilo base para botões azuis
    button: {
        backgroundColor: '#0a5ca8',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
        width: '70%',
    },
    // Texto dentro dos botões
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    // Estilo de cada item de usuário na lista
    item: {
        backgroundColor: '#e9ecef',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 6,
    },
    // Texto do item
    itemText: {
        fontSize: 16,
    },
    // Botão desabilitado (cor de fundo cinza)
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    // Texto do botão desabilitado (cinza escuro)
    buttonTextDisabled: {
        color: '#666',
    },
    // Container dos botões de paginação, lado a lado e centralizados
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,          // Espaço entre os botões
        marginBottom: 16,
    },
});
