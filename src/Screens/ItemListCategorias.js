import {  FlatList, StyleSheet } from 'react-native'
import Search from '../Components/Search'
import allPedidos from "../Data/pedidos.json"

import { useEffect, useState } from 'react'
import PedidoItem from '../Components/PedidoItem'



const ItemListCategorias = ({navigation,route}) => {
  const {categoria} = route.params
  const [keyword,setKeyword] = useState("")
  const [pedidos,setPedidos] = useState(allPedidos)

  useEffect(()=>{

    if(categoria){
      const pedidosCategoria = allPedidos.filter(pedido => pedido.categoria.toLowerCase() === categoria.toLowerCase())
      const pedidosFiltered = pedidosCategoria.filter(pedido => pedido.identificacion.includes(keyword))
      setPedidos(pedidosFiltered)
    }else{
      const pedidosFiltered = allPedidos.filter(pedido => pedido.identificacion.includes(keyword))
      setPedidos(pedidosFiltered)
    }


  },[keyword])

  return (
    <>
      <Search setKeyword={setKeyword}/>
      <FlatList
        style={styles.container}
        data={pedidos}
        keyExtractor={item => item.id}
        renderItem={({item})=> <PedidoItem item={item} navigation={navigation} route={route} />}
      />
    </>
  )
}

export default ItemListCategorias

const styles = StyleSheet.create({
 container:{
  width:"100%",

 
 },
 goBack:{
  width:"100%",
  backgroundColor:"lightblue",
  padding:10,
  paddingStart:40
 },

})