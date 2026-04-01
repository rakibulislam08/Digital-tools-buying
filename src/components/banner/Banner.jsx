import { ArrowBigRight } from "lucide-react";
import BannerImage from "../../assets/products/banner.png";

const Banner = () => {
      return (
            <div className="w-full bg-white">
                  <div className="max-w-[1450px] mx-auto relative min-h-162.5 flex items-center overflow-hidden px-6 lg:px-10 py-10 lg:py-0">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 w-full">

                              <div className="space-y-6">

                                    <div className="inline-flex items-center gap-3 bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full">
                                          <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
                                          </span>
                                          New: AI-Powered Tools Available
                                    </div>

                                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-zinc-900">
                                          Supercharge Your Digital Workflow
                                    </h1>

                                    <p className="text-xl text-zinc-600 max-w-xl">
                                          Access premium AI tools, design assets, templates, and productivity
                                          software—all in one place. Start creating faster today.
                                    </p>

                                    <div className="flex flex-wrap gap-4 pt-6">

                                          <button className="bg-[#7c3aed] hover:cursor-pointer transition-all px-8 py-4 rounded-full font-semibold text-lg text-white shadow-lg">
                                                Explore Products
                                          </button>

                                          <button className="bg-transparent border border-gray-300 hover:cursor-pointer transition-all px-8 py-4 rounded-full font-semibold text-lg text-indigo-700 flex items-center gap-2 group">
                                                Watch Demo <ArrowBigRight/>
                                          </button>
                                    </div>
                              </div>

                              <div className="relative flex justify-center lg:justify-end">
                                    <div className="relative">
                                          <img
                                                className="relative h-auto lg:h-[600px] w-auto object-contain drop-shadow-2xl rounded-3xl"
                                                src={BannerImage}
                                                alt="AI Interaction Banner"
                                          />
                                    </div>
                              </div>

                        </div>
                  </div>
            </div>
      );
};

export default Banner;