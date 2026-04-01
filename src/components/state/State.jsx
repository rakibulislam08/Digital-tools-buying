import React from 'react';

const State = () => {
      return (
            /* Full-width background wrapper */
            <section className="w-full bg-[#7c3aed] py-12 md:py-20 text-white">

                  {/* Centered content limited to 1450px */}
                  <div className="max-w-[1450px] mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center justify-around gap-12 md:gap-0 text-center">

                              {/* Stat 1 */}
                              <div className="flex-1">
                                    <h2 className="text-5xl md:text-6xl font-bold mb-2">50K+</h2>
                                    <p className="text-indigo-100 text-lg md:text-xl opacity-90">Active Users</p>
                              </div>

                              {/* Vertical Divider 1 */}
                              <div className="hidden md:block h-20 w-[1px] bg-white/30"></div>

                              {/* Stat 2 */}
                              <div className="flex-1">
                                    <h2 className="text-5xl md:text-6xl font-bold mb-2">200+</h2>
                                    <p className="text-indigo-100 text-lg md:text-xl opacity-90">Premium Tools</p>
                              </div>

                              {/* Vertical Divider 2 */}
                              <div className="hidden md:block h-20 w-[1px] bg-white/30"></div>

                              {/* Stat 3 */}
                              <div className="flex-1">
                                    <h2 className="text-5xl md:text-6xl font-bold mb-2">4.9</h2>
                                    <p className="text-indigo-100 text-lg md:text-xl opacity-90">Rating</p>
                              </div>

                        </div>
                  </div>
            </section>
      );
};

export default State;