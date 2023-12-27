import { Pressable, StyleSheet, Text } from "react-native"
import CardShadow from "../Wrappers/CardShadow"

const CategoriaItem = ({categoria, navigation}) => {
    return (
        <Pressable onPress={() => navigation.navigate("categoria", {categoria})}>
            <CardShadow style={StyleSheet.container}>
                <Text style={styles.text}>{categoria}</Text>
            </CardShadow>
        </Pressable>
    )
}
export default CategoriaItem

const styles = StyleSheet.create({
    container: {
        width: "80%",
        marginHorizontal: "10%",
        backgroundColor: "lightblue",
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
      },
      text: {
        fontSize: 30,
        fontStyle: "italic",
        color: "black", // Texto negro
      }
})
