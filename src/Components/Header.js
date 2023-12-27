import { StyleSheet, Text, View } from "react-native"

const Header = ({identificacion = "pedido"}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{identificacion}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor: "lightblue",
        width: "100%",
        height: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        fontSize:20,
    }
})