import { useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Cards from './components/cards/Cards'
import DigitalTools from './components/digitalTools/DigitalTools'
import Footer from './components/footer/Footer'
import GetStarted from './components/getstarted/Getstarted'
import Navbar from './components/navbar/Navbar'

import State from './components/state/State'
import Subscription from './components/subscription/Subscription'
import Transform from './components/readytotransform/Transfrom'


const fetchedCardInfo = async () => {
  const res = await fetch('/Features.json');
  return res.json();
}
const promiseCardInfo = fetchedCardInfo();


function App() {

  const [selectedCards, setSelectedCards] = useState([]);
  // console.log(selectedCards)

  const [carts, setCarts] = useState("products");
  return (
    <>
      <Navbar selectedCards={selectedCards} />
      <Banner />
      <State />
      <DigitalTools promiseCardInfo={promiseCardInfo} selectedCards={selectedCards} setSelectedCards={setSelectedCards} carts={carts} setCarts={setCarts}/>
      <GetStarted />
      <Subscription />
      <Transform/>
      <Footer />
    </>
  )
}

export default App