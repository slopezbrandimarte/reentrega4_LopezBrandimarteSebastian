import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'

import allPedidos from "../Data/pedidos.json"


const ItemDetail = ({route}) => {
  const {id} = route.params

  const [pedido,setPedido] = useState({})
  

  useEffect(()=>{

    const pedidoFinded = allPedidos.find(pedido => pedido.id === id)
    setPedido(pedidoFinded)

  },[id])

  return (
    <View style={styles.container}>
      <View style={styles.content} >
          
          <View style={styles.containerText}>
            <Text style={styles.identificacion}>{pedido.identificacion}</Text>
            <Text>{pedido.buque}</Text>
          </View>
          <View style={styles.containerExportador}>
            <Text style={styles.exportador}>{pedido.exportador}</Text>
            
          </View>
        </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        justifyContent:"start",
        alignItems:"center",
    },
    content:{
      width:"100%"
    },

    goBack:{
      width:"100%",
      backgroundColor:"lightblue",
      padding:10,
      paddingStart:40
     },
     containerText:{
      gap:25,
      paddingHorizontal:5,
      paddingVertical:25
     },
     containerExportador:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginVertical:10
     },
     identificacion:{
      fontSize:20,
      fontWeight:"bold"
     },
     exportador:{
      fontSize:30
     },
     entregado:{
      backgroundColor:"lightblue",
      paddingVertical:5,
      paddingHorizontal:10,
      borderRadius:5
     },
     entregadoText:{
      color:"white"
     }
})