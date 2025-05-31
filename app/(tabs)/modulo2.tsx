//Importa diversos componentes nativos do react native://
//SafeAreaView: evita que o conteudo fique em baixo de barras do sistema (notch do iphone)//
//ScrollView: ele permite rolar o conteudo verticalmente//
//Text: exibe o texto na tela//
//Pressable: botão que responde ao toque//
//ActivityIndicador: componente de carregamento "loading spinner"//
//Modal: janela flutuante "popup"//
//View: container genérico//
//StyleSheet: define os estilos de CSS-WIN-JS//
//useState: importação do hook useState do react para controlar estados locais (como abrir/fechar modal)//

import { SafeAreaView, ScrollView, Pressable, Text, ActivityIndicator, Modal, View, StyleSheet } from "react-native";
import { useState } from "react";
//container: ocupa toda a tela//
//content: adicona espaçamento interno ao conteúdo rolável//
//title: com fonte maior e espaçamento//
//button: botão com margem inferior para separação//
//buttonText: cor vermelha do botão//
//modalOverlay: fundo escuro semi transparente para o modal//
//modalContent: caixa branca com cantos arredondados do modal//
//modalButton: botão de fechar com margem acima//
const styles = StyleSheet.create({
    container: { flex:1 }, content: { padding:20 }, button: { marginBottom: 20 }, buttonText: { color: 'blue' }, title: { fontSize: 24, marginBottom: 20}, modalOverlay:{ flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000099'}, modalContent: { backgroundColor: 'white', padding: 20, borderRadius: 15 }, modalButton: { marginTop: 15}
})

export default function modulo2 () {
    const [modalVisible, setModalVisible] = useState (false);
    return (
         <SafeAreaView style = {styles.container}>
            <ScrollView contentContainerStyle = {styles.content}>
                <text style = {styles.title}>Bem Vindo</text>
                <Pressable onPress={() => setModalVisible(true)} style = {styles.button}>
                    <text style = {styles.buttonText}>Abrir Modal</text>
                </Pressable>
                <Modal>
                    <view>
                        <view>
                            <text></text>
                            <Pressable>
                                <text></text>
                            </Pressable>
                        </view>
                    </view>
                </Modal>
                    <ActivityIndicator/>
            </ScrollView>
        </SafeAreaView>
    )


}