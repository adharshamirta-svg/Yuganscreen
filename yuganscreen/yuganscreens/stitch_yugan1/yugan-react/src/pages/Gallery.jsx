import { useState } from "react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      title: "Modern Window Mosquito Screen",
      category: "Window Screens",
      image:
        "https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_12_12_09_PM_opnrpo",
    },
    {
      title: "Premium Door Mosquito Screen",
      category: "Pleated Doors",
      image:
        "https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_12_17_05_PM_krktxg",
    },
    {
      title: "Luxury Pleated Mesh Door",
      category: "Pleated Doors",
      image:
        "https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_12_08_19_PM_kkhuay",
    },
    {
      title: "Sliding Screen Installation",
      category: "Window Screens",
      image:
        "https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_12_20_42_PM_ifsgmc",
    },
    {
      title: "Invisible Grill Balcony",
      category: "Balcony Nets",
      image:
        "https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_12_40_01_PM_k8qdkm",
    },
    {
      title: "Balcony Safety Net",
      category: "Balcony Nets",
      image:
        "https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_12_04_46_PM_invtfg",
    },
    {
      title: "Commercial Office Screen",
      category: "Commercial",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600",
    },
    {
      title: "Villa Window Protection",
      category: "Window Screens",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600",
    },
  ];

  const filteredGallery =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <main className="bg-white w-full overflow-x-hidden font-sans antialiased text-slate-900 selection:bg-teal-500 selection:text-white">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=2200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/80 backdrop-blur-[1px]"></div>

        <div className="relative z-10 text-center px-6 sm:px-12 max-w-5xl mx-auto py-24">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-teal-300 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-8 shadow-xl">
            Our Portfolio
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-[-0.03em] mb-6">
            Premium Gallery
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal tracking-wide">
            Explore our completed projects featuring premium mosquito screens, pleated mesh doors, invisible grills, and balcony safety solutions designed for modern homes.
          </p>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="w-full px-6 sm:px-12 lg:px-24 xl:px-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              ["500+", "Projects Completed"],
              ["600+", "Happy Customers"],
              ["5+", "Years Experience"],
              ["4.7★", "Customer Rating"],
            ].map(([number, title]) => (
              <div
                key={title}
                className="bg-slate-50/70 rounded-[24px] p-8 text-center border border-slate-100/80 hover:shadow-xl hover:shadow-slate-100 hover:bg-white hover:-translate-y-1 transition duration-300"
              >
                <h2 className="text-3xl sm:text-5xl font-black text-teal-600 tracking-tight">
                  {number}
                </h2>

                <p className="text-xs sm:text-sm uppercase tracking-[0.15em] font-bold text-slate-500 mt-3">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FILTERS & GALLERY GRID ================= */}
      <section className="py-24 sm:py-32 bg-slate-50/80">
        <div className="w-full px-6 sm:px-12 lg:px-24 xl:px-32">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 w-full max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-teal-600 block mb-3">
              Browse Gallery
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              Our Recent Installations
            </h2>

            <p className="text-base sm:text-xl text-slate-600 mt-4 font-normal leading-relaxed">
              Browse our architectural screen installations filtered by category.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16 sm:mb-20 w-full">
            {[
              "All",
              "Window Screens",
              "Pleated Doors",
              "Balcony Nets",
              "Commercial",
            ].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 tracking-wide ${
                  selectedCategory === category
                    ? "bg-teal-600 text-white shadow-xl shadow-teal-600/20 scale-105"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:bg-teal-50 hover:text-teal-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 w-full">
            {filteredGallery.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="group cursor-pointer rounded-[28px] overflow-hidden bg-white shadow-sm border border-slate-200/60 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div className="overflow-hidden h-[360px] sm:h-[420px] relative">
                  <img
                    src={item.image}
                    alt={`${item.title} - Yugan Screens`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full tracking-wider uppercase">
                    {item.category}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-[-0.01em] group-hover:text-teal-600 transition">
                    {item.title}
                  </h3>

                  <span className="text-teal-600 text-sm font-bold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    <span>View Image</span>
                    <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX MODAL ================= */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-8 text-white/80 text-4xl font-light hover:text-white transition z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md"
          >
            ×
          </button>

          {/* Prev Button */}
          <button
            onClick={() =>
              setSelectedImage(
                selectedImage === 0
                  ? filteredGallery.length - 1
                  : selectedImage - 1
              )
            }
            className="absolute left-4 sm:left-8 text-white/80 text-4xl hover:text-white transition z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={() =>
              setSelectedImage(
                selectedImage === filteredGallery.length - 1
                  ? 0
                  : selectedImage + 1
              )
            }
            className="absolute right-4 sm:right-8 text-white/80 text-4xl hover:text-white transition z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md"
          >
            ›
          </button>

          {/* Modal Container */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl max-w-6xl w-full max-h-[90vh] grid lg:grid-cols-[1.2fr_0.8fr] relative border border-slate-100">
            <div className="bg-slate-950 flex items-center justify-center min-h-[300px] lg:min-h-full">
              <img
                src={filteredGallery[selectedImage].image}
                alt={`${filteredGallery[selectedImage].title} - Yugan Screens`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 sm:p-12 overflow-y-auto flex flex-col justify-between bg-white">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 block mb-2">
                  {filteredGallery[selectedImage].category}
                </span>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-[-0.02em] mb-4">
                  {filteredGallery[selectedImage].title}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
                  Our premium installation delivers exceptional durability, elegant aesthetics, and superior insect protection. Every project is customized to your exact window and door dimensions using architectural-grade materials.
                </p>

                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-4">
                  Project Highlights
                </h3>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Premium Materials",
                    "Custom Fitting",
                    "Weather Resistant",
                    "Elegant Finish",
                    "5 Year Warranty",
                    "Easy Maintenance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700"
                    >
                      <span className="w-4 h-4 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-full border border-slate-200 py-3.5 px-8 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  Close Lightbox
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= FEATURED PROJECT ================= */}
      <section className="py-24 sm:py-32 bg-white border-t border-slate-100">
        <div className="w-full px-6 sm:px-12 lg:px-24 xl:px-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/60 border border-slate-100">
              <img
                src="https://res.cloudinary.com/dbj5qibeg/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_12_20_42_PM_ifsgmc"
                alt="Luxury villa mosquito screen installation"
                className="w-full h-[450px] sm:h-[600px] object-cover hover:scale-105 transition duration-700 ease-out"
              />
            </div>

            <div>
              <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-teal-600 font-bold block mb-3">
                Featured Project
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
                Luxury Villa Installation
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-6 font-normal">
                This premium villa installation features sleek mosquito screens, pleated mesh doors, and invisible balcony grills engineered to blend seamlessly with contemporary architecture while offering full pest protection.
              </p>

              <div className="grid grid-cols-2 gap-6 sm:gap-8 mt-10 border-t border-slate-100 pt-8">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-teal-600 tracking-tight">28</h3>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 mt-1">Windows Protected</p>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-teal-600 tracking-tight">4</h3>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 mt-1">Pleated Doors</p>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-teal-600 tracking-tight">2 Days</h3>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 mt-1">Installation Time</p>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-teal-600 tracking-tight">100%</h3>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 mt-1">Satisfaction</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BEFORE & AFTER SECTION ================= */}
      <section className="py-24 sm:py-32 bg-slate-50 border-t border-slate-100">
        <div className="w-full px-6 sm:px-12 lg:px-24 xl:px-32">
          
          <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-teal-600 font-bold block mb-3">
              Before & After
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              See The Transformation
            </h2>

            <p className="text-base sm:text-xl text-slate-600 mt-4 font-normal leading-relaxed">
              Compare living spaces before and after installing Yugan Screens' architectural protection systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 sm:gap-14">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center tracking-tight">
                Before Installation
              </h3>

              <div className="rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-200/80">
                <img
                  src="https://res.cloudinary.com/dwjtwnypy/image/upload/v1784960023/ChatGPT_Image_Jul_25_2026_11_42_29_AM_cw5io5.png"
                  alt="Home before mosquito screen installation"
                  className="w-full h-[400px] sm:h-[550px] object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center tracking-tight">
                After Installation
              </h3>

              <div className="rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-200/80">
                <img
                  src="https://res.cloudinary.com/dwjtwnypy/image/upload/v1784960263/ChatGPT_Image_Jul_25_2026_11_46_54_AM_dc9zqc.png"
                  alt="Home after mosquito screen installation"
                  className="w-full h-[400px] sm:h-[550px] object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}