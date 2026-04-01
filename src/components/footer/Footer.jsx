import React from 'react';

const Footer = () => {
      return (
            <footer className="bg-[#0a0f1a] pt-20 pb-10 text-white">
                  <div className="max-w-[1450px] mx-auto px-6">

                        {/* Main Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

                              {/* Logo & Description */}
                              <div className="md:col-span-4 lg:col-span-4">
                                    <h2 className="text-4xl font-bold tracking-tight mb-6">
                                          DigiTools
                                    </h2>
                                    <p className="text-zinc-400 text-lg max-w-sm leading-relaxed">
                                          Premium digital tools for creators, professionals, and businesses.
                                          Work smarter with our suite of powerful tools.
                                    </p>
                              </div>

                              {/* Product Column */}
                              <div className="md:col-span-2">
                                    <h3 className="font-semibold mb-6 text-lg">Product</h3>
                                    <ul className="space-y-4 text-zinc-400">
                                          <li><a href="#" className="hover:text-white transition">Features</a></li>
                                          <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                                          <li><a href="#" className="hover:text-white transition">Templates</a></li>
                                          <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                                    </ul>
                              </div>

                              {/* Company Column */}
                              <div className="md:col-span-2">
                                    <h3 className="font-semibold mb-6 text-lg">Company</h3>
                                    <ul className="space-y-4 text-zinc-400">
                                          <li><a href="#" className="hover:text-white transition">About</a></li>
                                          <li><a href="#" className="hover:text-white transition">Blog</a></li>
                                          <li><a href="#" className="hover:text-white transition">Careers</a></li>
                                          <li><a href="#" className="hover:text-white transition">Press</a></li>
                                    </ul>
                              </div>

                              {/* Resources Column (Added this back) */}
                              <div className="md:col-span-2">
                                    <h3 className="font-semibold mb-6 text-lg">Resources</h3>
                                    <ul className="space-y-4 text-zinc-400">
                                          <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                                          <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                                          <li><a href="#" className="hover:text-white transition">Community</a></li>
                                          <li><a href="#" className="hover:text-white transition">Contact</a></li>
                                    </ul>
                              </div>

                              {/* Social Links Column */}
                              <div className="md:col-span-2">
                                    <h3 className="font-semibold mb-6 text-lg whitespace-nowrap">Social Links</h3>
                                    <div className="flex gap-4">
                                          <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0a0f1a] hover:bg-indigo-400 transition-all">
                                                <i className="fa-brands fa-instagram text-xl"></i>
                                          </a>
                                          <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0a0f1a] hover:bg-indigo-400 transition-all">
                                                <i className="fa-brands fa-facebook-f text-xl"></i>
                                          </a>
                                          <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0a0f1a] hover:bg-indigo-400 transition-all">
                                                <i className="fa-brands fa-x-twitter text-xl"></i>
                                          </a>
                                    </div>
                              </div>
                        </div>

                        {/* Bottom Copyright Bar - Now a proper Row */}
                        <div className="mt-20 pt-8 border-t border-zinc-800/50 flex flex-row items-center justify-between text-sm text-zinc-500">
                              <div>© 2026 Digitools. All rights reserved.</div>

                              <div className="flex gap-8">
                                    <a href="#" className="hover:text-white transition">Privacy Policy</a>
                                    <a href="#" className="hover:text-white transition">Terms of Service</a>
                                    <a href="#" className="hover:text-white transition">Cookies</a>
                              </div>
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;