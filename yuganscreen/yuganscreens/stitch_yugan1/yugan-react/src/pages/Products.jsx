import { useState, useEffect } from "react";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <main className="bg-white w-full overflow-x-hidden font-sans antialiased text-slate-900 selection:bg-teal-500 selection:text-white">

      {/* ================= HERO SECTION (2-COLUMN BALANCED LAYOUT) ================= */}
      <section
        className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_12_31_37_PM_vfypm8')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50 backdrop-blur-[1px]"></div>

        {/* Hero Content Grid Wrapper */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 xl:px-32 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">

            {/* LEFT COLUMN: Glassmorphic Floating Box */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 backdrop-blur-xl p-8 sm:p-12 lg:p-14 rounded-[36px] shadow-2xl shadow-black/50">
              
              {/* Glassmorphic Badge */}
              <div className="inline-flex items-center gap-2.5 bg-teal-500/10 border border-teal-400/30 backdrop-blur-md text-teal-300 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-8 shadow-inner">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
                <span>Premium Protection</span>
              </div>

              {/* Editorial Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-[-0.03em] mb-6">
                Products Built <br />
                <span className="bg-gradient-to-r from-white via-slate-100 to-teal-300 bg-clip-text text-transparent">
                  For Modern Homes
                </span>
              </h1>

              {/* Paragraph Text */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal tracking-wide">
                Discover our complete range of mosquito screens, invisible grills, and premium protection systems crafted for comfort, safety, and elegance.
              </p>

              {/* Action Button */}
              <div className="mt-8">
                <a
                  href="/contact"
                  className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-2xl text-base sm:text-lg font-bold shadow-xl shadow-teal-950/50 transition-all duration-300 text-center inline-flex items-center gap-3 tracking-wide hover:-translate-y-0.5"
                >
                  <span>Request Custom Quote</span>
                  <span className="text-xl">→</span>
                </a>
              </div>

            </div>

            {/* RIGHT COLUMN: Feature Highlight Cards (Fills Empty Space) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              
              <div className="bg-white/10 border border-white/15 backdrop-blur-xl p-6 rounded-[28px] text-white flex items-center gap-5 hover:border-teal-400/50 transition-all duration-300 group hover:-translate-x-1">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 text-2xl group-hover:scale-110 transition duration-300 flex-shrink-0">
                  📐
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-1">Custom Dimensions</h3>
                  <p className="text-sm text-slate-300 leading-normal">Precision engineered to fit any window or door opening.</p>
                </div>
              </div>

              <div className="bg-white/10 border border-white/15 backdrop-blur-xl p-6 rounded-[28px] text-white flex items-center gap-5 hover:border-teal-400/50 transition-all duration-300 group hover:-translate-x-1">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 text-2xl group-hover:scale-110 transition duration-300 flex-shrink-0">
                  🏆
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-1">Architectural Mesh</h3>
                  <p className="text-sm text-slate-300 leading-normal">High-durability fiberglass & 316 stainless steel alloys.</p>
                </div>
              </div>

              <div className="bg-white/10 border border-white/15 backdrop-blur-xl p-6 rounded-[28px] text-white flex items-center gap-5 hover:border-teal-400/50 transition-all duration-300 group hover:-translate-x-1 sm:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 text-2xl group-hover:scale-110 transition duration-300 flex-shrink-0">
                  ✨
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-1">Uninterrupted View</h3>
                  <p className="text-sm text-slate-300 leading-normal">High transparency weave maintains natural light & airflow.</p>
                </div>
              </div>

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
              ["5 Years", "Warranty Guarantee"],
              ["4.9★", "Client Rating"],
            ].map(([stat, label]) => (
              <div key={label} className="p-2">
                <p className="text-2xl sm:text-4xl font-black text-teal-400 tracking-tight">{stat}</p>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 font-semibold mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS COLLECTION ================= */}
      <section className="py-24 sm:py-32 bg-slate-50/80 border-b border-slate-100">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
          
          {/* Section Heading */}
          <div className="text-center mb-16 sm:mb-24 w-full max-w-3xl mx-auto">
            <span className="text-teal-600 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm inline-block mb-3">
              Our Collection
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.03em] leading-tight mb-4">
              Premium Protection Solutions
            </h2>

            <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed">
              Designed to protect your home while seamlessly enhancing its aesthetic beauty.
            </p>
          </div>

          {/* Product Detail Modal */}
          {selectedProduct && (
            <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8">
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
                      Product Overview
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-[-0.02em] mb-3">
                      {selectedProduct.title}
                    </h2>

                    <p className="text-2xl sm:text-3xl font-extrabold text-teal-600 mb-6 tracking-tight">
                      {selectedProduct.price}
                    </p>

                    <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed font-normal">
                      {selectedProduct.desc}
                    </p>

                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-4">
                      Key Specifications
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
                      className="bg-teal-600 hover:bg-teal-700 transition text-white py-4 px-8 rounded-xl text-lg font-bold shadow-lg shadow-teal-600/20 text-center tracking-wide w-fit"
                    >
                      Get Free Quote
                    </a>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 w-full">
            {loading ? (
              <div className="col-span-full text-center py-16 text-slate-400 font-semibold tracking-wide">
                Loading our collection...
              </div>
            ) : (
              products.map((product) => (
                <div
                  key={product.title}
                  className="bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group hover:-translate-y-1.5 border border-slate-200/60 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="h-64 sm:h-72 lg:h-80 overflow-hidden relative cursor-pointer"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <img
                        src={product.img}
                        alt={`${product.title} - Yugan Screens`}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                      />
                      <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full tracking-wider uppercase">
                        Architectural
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-[-0.01em]">
                        {product.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6 line-clamp-2">
                        {product.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-8 pb-8 pt-0">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full py-3.5 px-6 rounded-xl bg-slate-50 hover:bg-teal-600 hover:text-white text-teal-600 text-sm font-bold transition-all duration-300 flex items-center justify-between group/btn border border-slate-100"
                    >
                      <span>View Product →</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </section>

      {/* ================= PRODUCT FEATURES ================= */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="w-full px-6 sm:px-12 lg:px-24 xl:px-32">
          
          <div className="text-center mb-16 sm:mb-24 max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-teal-600 font-bold block mb-3">
              Why Choose Our Products
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              Premium Features
            </h2>

            <p className="text-base sm:text-xl text-slate-600 mt-4 font-normal leading-relaxed">
              Every Yugan Screens product is built using premium materials, modern engineering, and elegant finishes for long-lasting protection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: "🛡", title: "Invisible Protection", desc: "Blocks mosquitoes while maintaining outside visibility." },
              { icon: "🌬", title: "Maximum Airflow", desc: "Fresh natural air enters while insects stay outside." },
              { icon: "🏠", title: "Elegant Design", desc: "Premium finish perfectly blends with modern interiors." },
              { icon: "🔧", title: "Low Maintenance", desc: "Easy to clean with durable aluminium construction." },
              { icon: "☔", title: "Weather Resistant", desc: "Designed for harsh weather conditions." },
              { icon: "⭐", title: "5 Year Warranty", desc: "Long-lasting quality with complete warranty support." },
              { icon: "🔒", title: "Child Safe", desc: "Provides extra safety for children and pets." },
              { icon: "♻", title: "Eco Friendly", desc: "Reduces insects naturally without harmful chemicals." }
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50/70 rounded-[24px] p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition duration-300 border border-slate-100"
              >
                <div className="text-4xl sm:text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PRODUCT COMPARISON ================= */}
      <section className="py-24 sm:py-32 bg-slate-50/80 border-t border-slate-100">
        <div className="w-full px-6 sm:px-12 lg:px-24 xl:px-32">
          
          <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-teal-600 font-bold block mb-3">
              Compare Products
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              Find The Perfect Solution
            </h2>

            <p className="text-base sm:text-xl text-slate-600 mt-4 font-normal leading-relaxed">
              Compare our premium products and choose the one that best suits your needs.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[28px] shadow-xl shadow-slate-200/50 border border-slate-200/80 bg-white">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-6 sm:p-8 text-base sm:text-xl font-extrabold tracking-wide">Features</th>
                  <th className="p-6 sm:p-8 text-center text-base sm:text-xl font-extrabold tracking-wide">Window Screen</th>
                  <th className="p-6 sm:p-8 text-center text-base sm:text-xl font-extrabold tracking-wide">Door Screen</th>
                  <th className="p-6 sm:p-8 text-center text-base sm:text-xl font-extrabold tracking-wide">Pleated Door</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Air Flow", "★★★★★", "★★★★★", "★★★★★"],
                  ["Mosquito Protection", "★★★★★", "★★★★★", "★★★★★"],
                  ["Elegant Design", "★★★★☆", "★★★★☆", "★★★★★"],
                  ["Easy Cleaning", "★★★★★", "★★★★★", "★★★★☆"],
                  ["Large Openings", "★★★☆☆", "★★★★☆", "★★★★★"],
                  ["Durability", "★★★★★", "★★★★★", "★★★★★"],
                  ["Warranty", "5 Years", "5 Years", "5 Years"]
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/80 transition duration-150">
                    <td className="p-6 sm:p-8 text-sm sm:text-lg font-bold text-slate-900">{row[0]}</td>
                    <td className="p-6 sm:p-8 text-center text-sm sm:text-lg text-amber-500 font-bold">{row[1]}</td>
                    <td className="p-6 sm:p-8 text-center text-sm sm:text-lg text-amber-500 font-bold">{row[2]}</td>
                    <td className="p-6 sm:p-8 text-center text-sm sm:text-lg text-amber-500 font-bold">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

    </main>
  );
}