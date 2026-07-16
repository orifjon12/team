import Banner from '../../components/home/banner/Banner'
import Ceramic from '../../components/home/ceramic/Ceramic'
import Makes from '../../components/home/makes/Makes'
import Navbar from '../../components/home/navbar/Navbar'
import Product from '../../components/home/product/Product'

function Home(){
  return (
    <div className="home">
      <Navbar/>
      <Banner/>
      <Makes/>
      <Ceramic/>
      <Product/>
    </div>
  )
}

export default Home