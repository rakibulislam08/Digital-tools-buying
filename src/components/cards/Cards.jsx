import React, { use } from 'react';
import ModelCart from '../modelCart/ModelCart';


const Cards = ({ promiseCardInfo, selectedCards, setSelectedCards, carts, setCarts }) => {
      const cards = use(promiseCardInfo);


      return (
            <section className="max-w-[1450px] mx-auto px-6 py-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cards.map((card, index) => (
                              <ModelCart key={card.id} card={card} index={index} setSelectedCards={setSelectedCards} selectedCards={selectedCards} carts={carts} setCarts ={setCarts}/>
                        ))}
                  </div>

            </section>
      );
};

export default Cards;