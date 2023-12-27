import { StyleSheet, Text, useWindowDimensions,Pressable } from "react-native"


const PedidoItem = ({item, navigation}) =>{

    const {width} = useWindowDimensions()

    return (
        <Pressable style={styles.container} onPress={()=>navigation.navigate("pedido",{id:item.id})}>
            <Text style={width > 350 ? styles.text : styles.textMin}>Identificacion: {item.identificacion}</Text>
            <Text style={width > 350 ? styles.text : styles.textMin}>Vencimiento: {item.vencimiento}</Text>
        </Pressable>
    )
}

export default PedidoItem

const styles = StyleSheet.create({
    container: {
        width: "95%",
        height: 100,
        backgroundColor: "lightblue",
        marginHorizontal: "2%",
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 30,
      },
      text: {
        width: "50%",
        textAlign: "center",
        fontSize: 20,
        color: "black", // Texto negro
      },
      textMin: {
        width: "60%",
        textAlign: "center",
        fontSize: 15,
        color: "black", // Texto negro
      }


})