import React from 'react';
import cart from '../../assets/products/shopping-cart.png';

const Navbar = ({selectedCards}) => {
      return (
            <nav className="w-full bg-base-100 shadow-sm sticky top-0 z-50">
                  <div className="navbar max-w-[1450px] mx-auto px-2 sm:px-6">

                        <div className="navbar-start">
                              {/* Mobile Hamburger Menu */}
                              <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-2">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                          </svg>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                                          <li><a>Products</a></li>
                                          <li><a>Features</a></li>
                                          <li><a>Pricing</a></li>
                                          <li><a>Testimonial</a></li>
                                          <li><a>FAQ</a></li>
                                    </ul>
                              </div>

                              {/* Logo */}
                              <div className="flex items-center gap-1 font-bold text-lg md:text-2xl bg-gradient-to-tr from-indigo-500 to-purple-400 bg-clip-text text-transparent cursor-pointer whitespace-nowrap">
                                    DiGiTools
                              </div>
                        </div>


                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal gap-4 xl:gap-8 px-1 text-base font-medium">
                                    <li><a className="hover:text-indigo-500 transition-colors">Products</a></li>
                                    <li><a className="hover:text-indigo-500 transition-colors">Features</a></li>
                                    <li><a className="hover:text-indigo-500 transition-colors">Pricing</a></li>
                                    <li><a className="hover:text-indigo-500 transition-colors">Testimonial</a></li>
                                    <li><a className="hover:text-indigo-500 transition-colors">FAQ</a></li>
                              </ul>
                        </div>


                        <div className="navbar-end gap-2 sm:gap-4 md:gap-6">

                              <div className="indicator">
                                    <span className="indicator-item badge badge-secondary badge-xs bg-pink-500 border-none text-white scale-75 md:scale-100 font-bold text-xs">
                                          {`${selectedCards ?. length || 0} `}
                                    </span>
                                    <button className='rounded-full border p-1.5 md:p-2 hover:bg-gray-50 transition-all cursor-pointer'>
                                          <img src={cart} alt="cart" className="w-4 h-4 md:w-4 md:h-4" />
                                    </button>
                              </div>

                              <div className="flex items-center bg-gray-100 p-0.5 md:p-1 rounded-full">
                                    <a className='btn btn-ghost btn-xs sm:btn-sm md:btn-md rounded-full px-2 sm:px-4 md:px-6 font-semibold hover:bg-white text-[10px] sm:text-sm'>
                                          LogIn
                                    </a>
                                    <a className="btn btn-xs sm:btn-sm md:btn-md bg-linear-65 from-purple-500 to-pink-500 rounded-full text-white border-none shadow-sm hover:opacity-90 px-3 sm:px-4 md:px-6 text-[10px] sm:text-sm">
                                          Get in Touch
                                    </a>
                              </div>
                        </div>

                  </div>
            </nav>
      );
};

export default Navbar;