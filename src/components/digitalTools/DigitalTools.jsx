import { Suspense } from 'react';
import Cards from '../cards/Cards';
import SelectedAi from '../selectedai/SelectedAi';

const DigitalTools = ({ promiseCardInfo, selectedCards, setSelectedCards, carts, setCarts }) => {
      
      return (
            <section className="w-full bg-white py-20">

                  <div className="max-w-[1450px] mx-auto px-6 text-center">

                        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4">
                              Premium Digital Tools
                        </h2>

                        <p className="text-zinc-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                              Choose from our curated collection of premium digital products designed
                              to boost your productivity and creativity.
                        </p>

                        <div className="inline-flex items-center bg-white border border-gray-100 p-1.5 rounded-full shadow-xl shadow-indigo-100/50">

                              <button onClick={() => setCarts("products")} className={`${carts === "products" ? "bg-[#7c3aed]" : "bg-white"}  text-black px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all hover:bg-[#6d28d9]`}>
                                    Products
                              </button>

                              <button onClick={() => setCarts("cart")} className={`${carts === "cart" ? "bg-[#7c3aed]" : "bg-white"}  text-black px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all hover:bg-[#6d28d9]`}>
                                    {`Carts( ${selectedCards.length})`}
                              </button>

                        </div>

                        <div className="mt-10">
                              <Suspense fallback={
                                    <div className="py-20 flex justify-center">
                                          <span className="loading loading-spinner loading-lg text-[#7c3aed]"></span>
                                    </div>
                              }>
                              </Suspense>
                              {carts === "products" ? (
                                    <Cards promiseCardInfo={promiseCardInfo} selectedCards={selectedCards} setSelectedCards={setSelectedCards} setCarts={setCarts} carts={carts} />
                              ) : (
                                    <SelectedAi selectedCards={selectedCards} setCarts={setCarts} carts={carts} setSelectedCards={setSelectedCards} />
                              )}
                        </div>
                  </div>
            </section>
      );
};

export default DigitalTools;