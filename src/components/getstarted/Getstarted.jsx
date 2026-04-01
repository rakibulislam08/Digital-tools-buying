import React from 'react';
import userIcon from '../../assets/products/user.png';
import packageIcon from '../../assets/products/package.png';
import rocket from '../../assets/products/rocket.png';

const GetStarted = () => {
      return (
            <section className="w-full bg-[#f8fafc] py-20 px-4">
                  <div className="max-w-[1450px] mx-auto">
                        <div className="text-center mb-16">
                              <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4 tracking-tight">
                                    Get Started In 3 Steps
                              </h2>
                              <p className="text-zinc-500 text-lg">
                                    Start using premium digital tools in minutes, not hours.
                              </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                              {/* STEP 01 */}
                              <div className="relative bg-white p-12 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-lg">
                                    <div className="absolute top-6 right-6 bg-[#7c3aed] text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full">
                                          01
                                    </div>
                                    <div className="w-24 h-24 bg-indigo-50/50 rounded-full flex items-center justify-center mx-auto mb-8">
                                          <img src={userIcon} alt="" className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-zinc-900 mb-4 text-center">Create Account</h3>
                                    <p className="text-zinc-500 leading-relaxed text-center">
                                          Sign up for free in seconds. No credit card required to get started.
                                    </p>
                              </div>

                              {/* STEP 02 */}
                              <div className="relative bg-white p-12 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-lg">
                                    <div className="absolute top-6 right-6 bg-[#7c3aed] text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full">
                                          02
                                    </div>
                                    <div className="w-24 h-24 bg-indigo-50/50 rounded-full flex items-center justify-center mx-auto mb-8">
                                          <img src={packageIcon} alt="" className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-zinc-900 mb-4 text-center">Choose Products</h3>
                                    <p className="text-zinc-500 leading-relaxed text-center">
                                          Browse our catalog and select the tools that fit your needs.
                                    </p>
                              </div>

                              {/* STEP 03 */}
                              <div className="relative bg-white p-12 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-lg">
                                    <div className="absolute top-6 right-6 bg-[#7c3aed] text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full">
                                          03
                                    </div>
                                    <div className="w-24 h-24 bg-indigo-50/50 rounded-full flex items-center justify-center mx-auto mb-8">
                                          <img src={rocket} alt="" className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-zinc-900 mb-4 text-center">Start Creating</h3>
                                    <p className="text-zinc-500 leading-relaxed text-center">
                                          Download and start using your premium tools immediately.
                                    </p>
                              </div>

                        </div>
                  </div>
            </section>
      );
};

export default GetStarted;