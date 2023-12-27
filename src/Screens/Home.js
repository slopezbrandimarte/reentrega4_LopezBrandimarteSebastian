import Categorias from '../Components/Categorias'

const Home = ({navigation,route}) => {
  
  return (
        <>
            <Categorias navigation={navigation} route={route}/>
        </>
  )
}

export default Home

