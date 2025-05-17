import { SafeAreaView, ScrollView, Pressable, Text, ActivityIndicator, Modal, View, StyleSheet } from "react-native";
import { useState } from "react";
const styles = StyleSheet.create({
    container: {}, button: {}, buttonText: {}, title: {}, modalOverlay:{}, modalContent: {}, modalButton: {}
})

export default function modulo2 () {
    const [modalVisible, setModalVisible] = useState (false);
    return (
         <SafeAreaView>
            <ScrollView>
                <text>Bem Vindo</text>
                    <Pressable>
                        <text></text>
                    </Pressable>
                    <Modal>
                        <view>
                            <text></text>
                            <Pressable>
                                <text></text>
                            </Pressable>
                        </view>
                    </Modal>
                    <ActivityIndicator></ActivityIndicator>
            </ScrollView>
        </SafeAreaView>
    )


}
