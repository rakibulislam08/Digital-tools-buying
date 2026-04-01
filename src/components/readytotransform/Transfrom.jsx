import React from 'react';

const Transform = () => {
      return (
            /* Full-width gradient background */
            <section className="w-full bg-linear-to-r from-[#7c3aed] to-[#a855f7] py-20 px-6 text-white">

                  {/* Centered content wrapper */}
                  <div className="max-w-[1450px] mx-auto text-center">

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                              Ready To Transform Your Workflow?
                        </h2>

                        {/* Description */}
                        <p className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
                              Join thousands of professionals who are already using Digitools to work smarter.
                              Start your free trial today.
                        </p>

                        {/* Buttons Group */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">

                              {/* White Filled Button */}
                              <button className="bg-white text-[#7c3aed] px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-lg w-full sm:w-auto">
                                    Explore Products
                              </button>

                              {/* Transparent Border Button */}
                              <button className="bg-transparent border border-white/40 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all w-full sm:w-auto">
                                    View Pricing
                              </button>

                        </div>

                        {/* Footer Notes */}
                        <p className="text-indigo-200 text-sm md:text-base opacity-80">
                              14-day free trial • No credit card required • Cancel anytime
                        </p>

                  </div>
            </section>
      );
};

export default Transform;