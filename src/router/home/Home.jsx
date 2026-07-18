import Ceramic from '../../components/home/ceramic/Ceramic'
import Makes from '../../components/home/makes/Makes'
import Product from '../../components/home/product/Product'

function Home(){
  return (
    <div className="home">
      <Makes/>
      <Ceramic/>
      <Product/>
    </div>
  )
}

export default Home