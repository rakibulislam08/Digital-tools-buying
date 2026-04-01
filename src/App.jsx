
import './App.css'
import Banner from './components/banner/Banner'
import DigitalTools from './components/digitalTools/DigitalTools'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Transform from './components/readytotransform/Transfrom'
import State from './components/state/State'



function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <State />
      <DigitalTools promiseCardInfo={promiseCardInfo} selectedCards={selectedCards} setSelectedCards={setSelectedCards} carts={carts} setCarts={setCarts} />
      <Transform />
      <Footer />
    </>
  )
}

export default App
