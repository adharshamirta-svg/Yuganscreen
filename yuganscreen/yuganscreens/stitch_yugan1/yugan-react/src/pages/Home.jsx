import { useState, useEffect } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
        const response = await fetch(`${baseUrl}/products`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        }
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = ["All", "Mosquito Nets", "Invisible Grills", "Pleated Doors"];

  const filteredProducts = activeTab === "All" 
    ? products 
    : products.filter(p => p.category?.toLowerCase() === activeTab.toLowerCase() || p.title?.toLowerCase().includes(activeTab.toLowerCase().slice(0, -1)));

  return (
    <main className="bg-white w-full overflow-x-hidden font-sans antialiased text-slate-900 selection:bg-teal-500 selection:text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[100vh] sm:min-h-[100svh] w-full flex items-center justify-center lg:justify-start overflow-hidden">

        {/* Background Image with Slow Zoom Animation */}
        <img
          src="https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_24_2026_11_24_25_AM_ebub6m"
          alt="Premium Mosquito net installation in a modern home by Yugan Screens"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-pulse-subtle"
        />

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40 backdrop-blur-[1px]"></div>

        {/* Hero Glassmorphic Card Container */}
        <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-28 sm:py-36">
          <div className="max-w-2xl lg:max-w-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 sm:p-12 lg:p-14 rounded-[36px] shadow-2xl shadow-black/50">

            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2.5 bg-teal-500/10 border border-teal-400/30 backdrop-blur-md text-teal-300 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-8 shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
              <span>🛡 ISO Certified Protection</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-[-0.03em] mb-6 sm:mb-8">
              Premium Mosquito Net <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-white via-slate-100 to-teal-300 bg-clip-text text-transparent">
                Solutions For Every Home
              </span>
            </h1>

            {/* Paragraph Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-10 font-normal tracking-wide">
              Keep insects out while enjoying fresh air and natural comfort. Our architectural-grade screens offer invisible protection without compromising your view.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a
                href="/contact"
                className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 sm:px-9 sm:py-4 rounded-2xl text-base sm:text-lg font-bold shadow-xl shadow-teal-950/50 transition-all duration-300 text-center inline-flex items-center justify-center gap-3 tracking-wide hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get Free Quote</span>
                <span className="text-xl">→</span>
              </a>

              <a
                href="/products"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md px-8 py-4 sm:px-9 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 text-center inline-block tracking-wide hover:-translate-y-0.5 active:translate-y-0"
              >
                View Products
              </a>
            </div>

          </div>
        </div>

      </section>

      {/* ================= STATS HIGHLIGHT BAND ================= */}
      <section className="bg-slate-900 border-y border-slate-800 py-10 w-full relative z-20">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["500+", "Completed Projects"],
              ["100%", "Custom Fitting"],
              ["5 Years", "Warranty Coverage"],
              ["4.9★", "Customer Satisfaction"],
            ].map(([stat, label]) => (
              <div key={label} className="p-2">
                <p className="text-2xl sm:text-4xl font-black text-teal-400 tracking-tight">{stat}</p>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 font-semibold mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS SECTION ================= */}
      <section className="py-24 sm:py-32 bg-slate-50/80 w-full border-b border-slate-100">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">

          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 w-full max-w-3xl mx-auto">
            <span className="text-teal-600 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm inline-block mb-3">
              Our Products
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.03em] leading-tight mb-6">
              Signature Protection Solutions
            </h2>

            <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed">
              Premium mosquito screens and safety solutions engineered for modern residential and commercial spaces.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-teal-500 hover:text-teal-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product Detail Modal */}
          {selectedProduct && (
            <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex justify-center items-center p-4 sm:p-8">
              <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative border border-slate-100">

                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-5 right-6 w-10 h-10 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition flex items-center justify-center text-2xl font-light z-10"
                >
                  ×
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-72 sm:h-96 lg:h-full min-h-[360px]">
                    <img
                      src={selectedProduct.img}
                      alt={`${selectedProduct.title} - Yugan Screens`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 mb-2">
                      Product Detail
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-[-0.02em] mb-3">
                      {selectedProduct.title}
                    </h2>

                    <p className="text-2xl sm:text-3xl font-extrabold text-teal-600 mb-6 tracking-tight">
                      {selectedProduct.price}
                    </p>

                    <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed font-normal">
                      {selectedProduct.description}
                    </p>

                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-4">
                      Key Highlights
                    </h3>

                    <ul className="space-y-3 mb-10">
                      {selectedProduct.features && selectedProduct.features.map((feature) => (
                        <li key={feature} className="text-base text-slate-700 font-medium flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/contact"
                      className="bg-teal-600 hover:bg-teal-700 transition text-white py-4 rounded-xl text-lg font-bold shadow-lg shadow-teal-600/20 text-center tracking-wide"
                    >
                      Get Free Quote
                    </a>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full">
            {loading ? (
              <div className="col-span-full text-center py-16 text-slate-400 font-semibold tracking-wide">
                Loading products...
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="col-span-full text-center py-16 text-slate-500 font-medium">
                No products found in this category.
              </div>
            ) : (
              filteredProducts.slice(0, 6).map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 group hover:-translate-y-1.5 border border-slate-200/60 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-64 sm:h-72 lg:h-80 overflow-hidden relative">
                      <img
                        src={item.img}
                        alt={`${item.title} - Yugan Screens`}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                      />
                      <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1.5 rounded-full tracking-wider uppercase">
                        Architectural
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-[-0.01em] group-hover:text-teal-600 transition">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6 line-clamp-2">
                        {item.description || "Custom architectural-grade mesh protection designed for seamless installation."}
                      </p>
                    </div>
                  </div>

                  <div className="px-8 pb-8 pt-0">
                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="w-full py-3.5 px-6 rounded-xl bg-slate-50 group-hover:bg-teal-600 group-hover:text-white text-teal-600 text-sm font-bold transition-all duration-300 flex items-center justify-between border border-slate-100"
                    >
                      <span>View details</span>
                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US SECTION ================= */}
      <section className="py-24 sm:py-32 bg-white w-full">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">

          <div className="text-center mb-16 sm:mb-24 w-full max-w-3xl mx-auto">
            <span className="text-teal-600 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm inline-block mb-3">
              Why Choose Us
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.03em]">
              Why Homeowners Trust Yugan Screens
            </h2>

            <p className="text-base sm:text-xl text-slate-600 mt-5 font-normal leading-relaxed">
              Uncompromising material quality, precision craftsmanship, and dedicated lifetime customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Premium Quality",
                icon: "🏆",
                desc: "Imported fiberglass mesh with architectural aluminum frames."
              },
              {
                title: "Professional Fitting",
                icon: "🛠",
                desc: "Certified technicians ensure millimetre-accurate installation."
              },
              {
                title: "5 Year Warranty",
                icon: "🛡",
                desc: "Comprehensive multi-year guarantee on materials and mechanism."
              },
              {
                title: "Affordable Pricing",
                icon: "💰",
                desc: "Direct-from-manufacturer rates without hidden surcharges."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50/70 rounded-[28px] p-8 hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition duration-300 border border-slate-100/80 flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl sm:text-5xl mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-[-0.01em]">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= OUR PROCESS SECTION ================= */}
      <section className="py-24 sm:py-32 bg-slate-900 text-white w-full relative overflow-hidden">

        {/* Background Mesh Accent */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">

          <div className="text-center mb-16 sm:mb-24 w-full max-w-3xl mx-auto">
            <span className="text-teal-400 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm inline-block mb-3">
              Our Process
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-white">
              Simple & Seamless Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
            {[
              {
                step: "01",
                title: "Free Inspection",
                desc: "Our specialists visit your property to evaluate openings and take measurements."
              },
              {
                step: "02",
                title: "Custom Fabrication",
                desc: "Screens are custom engineered to your exact window/door dimensions."
              },
              {
                step: "03",
                title: "Clean Fitting",
                desc: "Trained installers fit everything precisely with minimal interruption."
              },
              {
                step: "04",
                title: "Guaranteed Comfort",
                desc: "Relax in a pest-free home with uninterrupted natural airflow."
              }
            ].map((item) => (
              <div
                key={item.step}
                className="bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm rounded-[28px] p-8 text-left hover:border-teal-500/50 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-black text-teal-400 mb-6 tracking-tight">
                  {item.step}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-[-0.01em]">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}