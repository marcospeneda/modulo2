import { ThemedText } from '@/components/ThemedText';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
export default function HomeScreen() {
return(
  <ScrollView contentContainerStyle={styles.container}>
  <Image source={require('@/assets/images/partial-react-logo.png')}
  style={styles.banner}
  />
  <ThemedText type = 'title' style = {styles.title}> Home </ThemedText>
  <Pressable onPress= {() => router.push('/modulo2')}
  style={styles.banner}>
      <Text style={styles.buttonText}> Ir para o modulo2</Text>
    </Pressable>
  <Pressable onPress= {() => router.push('/modulo3')}
  style={styles.banner}>
      <Text style={styles.buttonText}> Ir para o modulo3</Text>
    </Pressable>
    <Pressable onPress = {()=>router.push('/explore')}
  style={styles.banner}>
      <Text style={styles.buttonText}> Ir para o explorar</Text>
    </Pressable>
    </ScrollView>
);
}
const styles = StyleSheet.create({
  container:{
        flexGrow: 1, //Centraliza o conteúdo em relação a altura
        justifyContent: 'center', //Centraliza verticalmente o conteúdo
        alignItems: 'center', //Centraliza horizontalmente o conteúdo
        padding: 20,
        backgroundColor: '#f9f9f9',
      },
      banner:{
        width: 200, //Largura fixa da imagem
        height: 150, //Altura fixa da imagem
        resizeMode: 'contain',
        marginBottom: 20, //Distancia para baixo relacionado a margem
      },
      buttonText:{
        fontSize: 16,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    }
})