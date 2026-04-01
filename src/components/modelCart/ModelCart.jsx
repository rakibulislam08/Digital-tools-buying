import React, { useState } from 'react';
import designTool from '../../assets/products/design-tool.png';
import operationTool from '../../assets/products/operation.png';
import portFolio from '../../assets/products/portfolio.png';
import socialMedia from '../../assets/products/social-media.png';
import writing from '../../assets/products/writing_2327400 1.png';
import camera from '../../assets/products/camera.png';
import { toast } from 'react-toastify';
const ModelCart = ({ card, index, selectedCards, setSelectedCards}) => {
      const iconList = [writing, designTool, camera, operationTool, portFolio, socialMedia];

      const [buyNow, setBuyNow] = useState(false)
      const handleBuyNow = () => {
            setBuyNow(true);
            setSelectedCards([...selectedCards,card])
            toast.success("Item Added To Card")
      }

      return (
            <div
                  key={card.id}
                  className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
                  <div className="flex justify-between items-start mb-6">
                        <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-100">
                              <img
                                    src={iconList[index % iconList.length]}
                                    alt=""
                                    className="w-8 h-8 object-contain"
                              />
                        </div>
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold 
                                ${card.badge === 'Best Seller' ? 'bg-orange-50 text-orange-600' :
                                    card.badge === 'Popular' ? 'bg-purple-50 text-purple-600' :
                                          'bg-green-50 text-green-600'}`}>
                              {card.badge}
                        </span>
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">{card.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">
                        {card.description}
                  </p>

                  <div className="mb-6">
                        <span className="text-3xl font-extrabold text-zinc-900">${card.price}</span>
                        <span className="text-zinc-400 font-medium ml-1">
                              /{card.billing === 'mo' ? 'Mo' : 'One-Time'}
                        </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                        {card.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-3 text-zinc-600 text-sm font-medium">
                                    <i className="fa-solid fa-check text-green-500 text-xs"></i>
                                    {feature}
                              </li>
                        ))}
                  </ul>

                  <button onClick={handleBuyNow} className="w-full py-4 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold rounded-2xl transition-all shadow-lg shadow-purple-100 hover:cursor-pointer">
                        {buyNow ? "Added To Cart" : "Buy Now"}
                  </button>
            </div>
      );
};

export default ModelCart;