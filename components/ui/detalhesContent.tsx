//importa os componentes basicos da interface do React Native//
import {View, Text, StyleSheet, FlatList} from "react-native";
//lista de dados ficticios a serem exibidos no componente//
const dados = [
    { id:'1', descrição: 'transferencia recebida -R$120,00'},
    { id:'2', descrição: 'pagamento de boleto -R$60,00'},
    { id:'3', descrição: 'PIX enviado R$200,00'},
    { id:'4', descrição: 'deposito R$500,00'}
];
//componente funcional que exibe os detalhes (titulo e lista de dados)//
export default function detalhesContent() {
    return (
        // container principal do conteudo //
        <View style = {styles.container}></View>
        {/*titulo centralizado*/};
        
        <text style ={styles.title}>Detalhes do módulo 2</text>
        {/*lista que renderiza os dados definidos acima*/}

        <FlatList
        data = {dados} //fonte de dados//
        keyExtractor={(item) => item.id} //define a chave unica para cada item//
        renderItem={({item})=>(){ //cada item da lista é renderizado com uma view estilizada//
        <View style = {styles.item}>
            <Text>{item.descricao}</Text>
        </View>
        }}
        />

    )

    // estilizacao dos componentes//
    const styles = StyleSheet.create ({
        //estilo do container principal//
        container:{paddingBottom: 10, },
        //estilo do titulo// 
        title: {fontWeight: 'bold', fontSize: 18, marginBottom: 10, alignSelf: 'center'},
        //estilo de cada item da lista//
        item: {backgroundColor: 'grey', padding: 10, marginVertical: 5, borderRadius: 6}
    })
   
    

}