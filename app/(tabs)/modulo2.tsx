/* 
Importações:
- Importa diversos componentes do React Native.
- SafeAreaView: evita que o conteúdo fique sob barras do sistema (como o notch do iPhone).
- ScrollView: permite rolagem vertical do conteúdo.
- Text: componente de texto.
- Pressable: botão sensível ao toque.
- ActivityIndicator: spinner de carregamento.
- Modal: janela flutuante (popup).
- View: container genérico para layout.
- StyleSheet: permite definir estilos CSS via JavaScript (CSS-in-JS).
- useState: hook para controlar estados locais como abrir/fechar o modal.
- router: usado para navegar entre páginas, como `router.push('/')`.
*/

import React, { useState } from "react";
import {
  ActivityIndicator,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Importa conteúdo reutilizável dentro da modal (lista, texto, etc.)
import DetalhesContent from "@/components/ui/DetalhesContent";

// Permite navegação entre páginas
import { router } from "expo-router";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false); // estado do modal (aberto/fechado)

  return (
    <SafeAreaView style={styles.container}>
      {/* ScrollView para permitir rolagem vertical */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Título da tela */}
        <Text style={styles.title}>Bem-vindo ao App do Módulo 2!</Text>

        {/* Botão para abrir o modal */}
        <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
          <Text style={styles.buttonText}>Abrir Detalhes no Modal</Text>
        </Pressable>

        {/* Botão para navegar para a Home */}
        <Pressable onPress={() => router.push('/')} style={styles.button}>
          <Text style={styles.buttonText}>Ir para Home</Text>
        </Pressable>

        {/* Modal flutuante com fundo escurecido */}
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {/* Conteúdo da modal vindo de outro componente */}
              <DetalhesContent />

              {/* Botões dentro da modal */}
              <View style={styles.actions}>
                <Pressable
                  style={styles.close}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={{ color: "white" }}>Fechar</Text>
                </Pressable>
                <Pressable
                  style={styles.confirm}
                  onPress={() => alert("Confirmado!")}
                >
                  <Text style={{ color: "white" }}>Confirmar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        {/* Indicador de carregamento */}
        <ActivityIndicator size="large" color="green" style={{ marginTop: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// Estilos CSS-in-JS
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a altura da tela
  },
  content: {
    padding: 20, // espaçamento interno
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF", // azul
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // fundo escuro com transparência
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "85%",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  confirm: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  close: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
});