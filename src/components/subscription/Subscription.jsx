import React from 'react';

const Subscription = () => {
      return (
            <section className="w-full bg-white py-20 px-4">
                  <div className="max-w-[1450px] mx-auto">

                        <div className="text-center mb-16">
                              <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4">
                                    Simple, Transparent Pricing
                              </h2>
                              <p className="text-zinc-500 text-lg">
                                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                              </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full">
                                    <h3 className="text-2xl font-bold text-zinc-900">Starter</h3>
                                    <p className="text-zinc-500 mb-6">Perfect for getting started</p>
                                    <div className="mb-8">
                                          <span className="text-4xl font-bold text-zinc-900">$0</span>
                                          <span className="text-zinc-500">/Month</span>
                                    </div>
                                    <ul className="space-y-4 mb-10 flex-grow text-zinc-600">
                                          <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Access to 10 free tools</li>
                                          <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Basic templates</li>
                                          <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Community support</li>
                                          <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 1 project per month</li>
                                    </ul>
                                    <button className="w-full py-4 bg-[#7c3aed] text-white font-bold rounded-2xl hover:opacity-90 transition-all">
                                          Get Started Free
                                    </button>
                              </div>

                              <div className="relative bg-[#7c3aed] p-8 rounded-3xl shadow-2xl flex flex-col h-[105%] z-10 text-white">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                                          Most Popular
                                    </div>

                                    <h3 className="text-2xl font-bold">Pro</h3>
                                    <p className="text-indigo-100 mb-6 opacity-90">Best for professionals</p>
                                    <div className="mb-8">
                                          <span className="text-4xl font-bold">$29</span>
                                          <span className="text-indigo-100">/Month</span>
                                    </div>
                                    <ul className="space-y-4 mb-10 flex-grow">
                                          <li className="flex items-center gap-2"><span>✓</span> Access to all premium tools</li>
                                          <li className="flex items-center gap-2"><span>✓</span> Unlimited templates</li>
                                          <li className="flex items-center gap-2"><span>✓</span> Priority support</li>
                                          <li className="flex items-center gap-2"><span>✓</span> Unlimited projects</li>
                                          <li className="flex items-center gap-2"><span>✓</span> Cloud sync</li>
                                          <li className="flex items-center gap-2"><span>✓</span> Advanced analytics</li>
                                    </ul>
                                    <button className="w-full py-4 bg-white text-[#7c3aed] font-bold rounded-2xl hover:bg-indigo-50 transition-all">
                                          Start Pro Trial
                                    </button>
                              </div>

                              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full">
                                    <h3 className="text-2xl font-bold text-zinc-900">Enterprise</h3>
                                    <p className="text-zinc-500 mb-6">For teams and businesses</p>
                                    <div className="mb-8">
                                          <span className="text-4xl font-bold text-zinc-900">$99</span>
                                          <span className="text-zinc-500">/Month</span>
                                    </div>
                                    <ul className="space-y-4 mb-10 flex-grow text-zinc-600">
                                          <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Everything in Pro</li>
                                          <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Team collaboration</li>
                                          <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Custom integrations</li>
                                          <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Dedicated support</li>
                                          <li className="flex items-center gap-2"><span className="text-green-500">✓</span> SLA guarantee</li>
                                          <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Custom branding</li>
                                    </ul>
                                    <button className="w-full py-4 bg-[#7c3aed] text-white font-bold rounded-2xl hover:opacity-90 transition-all">
                                          Contact Sales
                                    </button>
                              </div>

                        </div>
                  </div>
            </section>
      );
};

export default Subscription;