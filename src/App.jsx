
import { useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Cards from './components/cards/Cards'
import DigitalTools from './components/digitalTools/DigitalTools'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Transform from './components/readytotransform/Transfrom'
import State from './components/state/State'


const fetchedCardInfo = async () => {
  const res = await fetch('/Features.json');
  return res.json();
}
const promiseCardInfo = fetchedCardInfo();


function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  
  const [carts, setCarts] = useState("products");

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
