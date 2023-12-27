import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import ItemListCategorias from '../Screens/ItemListCategorias'
import ItemDetail from '../Screens/ItemDetail'
import Header from '../Components/Header'
const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title={
                                        route.name === "Home" ? "categorias" :
                                        route.name === "categoria" ? route.params.categoria :
                                        "Detalle"
                    }               />
                }
            }
        }
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="categoria" component={ItemListCategorias} />
      <Stack.Screen name="pedido" component={ItemDetail} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigator

