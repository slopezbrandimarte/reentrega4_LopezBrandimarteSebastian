import { FlatList, StyleSheet } from 'react-native'
import categorias from "../Data/categorias.json"
import CategoriaItem from './CategoriaItem'

const Categorias = ({navigation}) => {
  return (
    <FlatList
        style={styles.container}
        data={categorias}
        keyExtractor={item => item}
        renderItem={({item}) => <CategoriaItem  categoria={item} navigation={navigation} />}
    />
  )
}

export default Categorias

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flexDirection: "column",
        alignContent: "center",
        
    }
})