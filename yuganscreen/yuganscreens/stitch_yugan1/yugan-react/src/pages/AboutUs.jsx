import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <main className="bg-white w-full overflow-x-hidden font-sans antialiased text-slate-900 selection:bg-teal-500 selection:text-white">

      {/* ================= HERO SECTION (2-COLUMN BALANCED LAYOUT) ================= */}
      <section
        className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwjtwnypy/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_04_01_43_PM_tsup9l')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50 backdrop-blur-[1px]"></div>

        {/* Hero Content Grid Container */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 xl:px-32 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
            
            {/* LEFT COLUMN: Glassmorphic Floating Content Box */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 backdrop-blur-xl p-8 sm:p-12 lg:p-14 rounded-[36px] shadow-2xl shadow-black/50">
              
              {/* Glassmorphic Badge */}
              <div className="inline-flex items-center gap-2.5 bg-teal-500/10 border border-teal-400/30 backdrop-blur-md text-teal-300 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-8 shadow-inner">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
                <span>About Yugan Screens</span>
              </div>

              {/* Editorial Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-[-0.03em] mb-8 text-left">
                Protecting Homes, <br />
                <span className="bg-gradient-to-r from-white via-slate-100 to-teal-300 bg-clip-text text-transparent">
                  Enhancing Comfort
                </span>
              </h1>

              {/* Refined Paragraph */}
              <p className="text-base sm:text-xl text-slate-300 leading-relaxed text-left font-normal tracking-wide">
                Engineering clarity and security for modern living spaces. We redefine the boundary between your home and the outdoors.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a
                  href="/contact"
                  className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-2xl text-base sm:text-lg font-bold shadow-xl shadow-teal-950/50 transition-all duration-300 text-center inline-flex items-center justify-center gap-3 tracking-wide hover:-translate-y-0.5"
                >
                  <span>Get Free Quote</span>
                  <span className="text-xl">→</span>
                </a>

                <a
                  href="/products"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md px-8 py-4 rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 text-center inline-block tracking-wide hover:-translate-y-0.5"
                >
                  Explore Products
                </a>
              </div>

            </div>

            {/* RIGHT COLUMN: Feature Highlight Cards (Fills Empty Space) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              
              <div className="bg-white/10 border border-white/15 backdrop-blur-xl p-6 rounded-[28px] text-white flex items-center gap-5 hover:border-teal-400/50 transition-all duration-300 group hover:-translate-x-1">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 text-2xl group-hover:scale-110 transition duration-300 flex-shrink-0">
                  🛡️
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-1">5-Year Guarantee</h3>
                  <p className="text-sm text-slate-300 leading-normal">Premium durability on frames, mesh, and mechanics.</p>
                </div>
              </div>

              <div className="bg-white/10 border border-white/15 backdrop-blur-xl p-6 rounded-[28px] text-white flex items-center gap-5 hover:border-teal-400/50 transition-all duration-300 group hover:-translate-x-1">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 text-2xl group-hover:scale-110 transition duration-300 flex-shrink-0">
                  📐
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-1">100% Custom Fitting</h3>
                  <p className="text-sm text-slate-300 leading-normal">Tailored to exact architectural dimensions.</p>
                </div>
              </div>

              <div className="bg-white/10 border border-white/15 backdrop-blur-xl p-6 rounded-[28px] text-white flex items-center gap-5 hover:border-teal-400/50 transition-all duration-300 group hover:-translate-x-1 sm:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 text-2xl group-hover:scale-110 transition duration-300 flex-shrink-0">
                  ✨
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-1">Invisible Protection</h3>
                  <p className="text-sm text-slate-300 leading-normal">High transparency mesh preserves your exterior view.</p>
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
              ["600+", "Happy Customers"],
              ["5+ Yrs", "Industry Experience"],
              ["4.9★", "Customer Rating"],
            ].map(([stat, label]) => (
              <div key={label} className="p-2">
                <p className="text-2xl sm:text-4xl font-black text-teal-400 tracking-tight">{stat}</p>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 font-semibold mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPANY NARRATIVE ================= */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="w-full px-6 sm:px-12 lg:px-24 xl:px-32 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Featured Image Container */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/60 border border-slate-100 w-full relative group">
            <img
              src="https://res.cloudinary.com/dwjtwnypy/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_01_08_18_PM_gvenw9"
              alt="Professional installation of premium mosquito screens by Yugan Screens in a modern home"
              className="w-full h-[500px] sm:h-[650px] lg:h-[720px] object-cover group-hover:scale-105 transition duration-700 ease-out"
            />
            <div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full tracking-wider uppercase">
              Architectural Standard
            </div>
          </div>

          {/* Narrative Content */}
          <div className="space-y-8 sm:space-y-10 w-full">
            <div className="space-y-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-teal-600 block">
                Trusted Provider of Premium Screen Solutions
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.03em] leading-[1.1]">
                A Yugan Screens, your home should be a sanctuary.
              </h2>

              <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal pt-2">
                Enjoy fresh air and natural light without the intrusion of pests. We deliver architectural-grade mosquito screens, bird netting, and safety systems that protect your family while preserving your view.
              </p>
            </div>

            {/* Feature Mini Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="rounded-[24px] bg-white p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1.5 transition duration-500">
                <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-base mb-4">
                  🛠
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight">
                  Expert Installation
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                  Professional fitting with precision measurement, neat finishes, and durable frames designed to last.
                </p>
              </div>

              <div className="rounded-[24px] bg-white p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1.5 transition duration-500">
                <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-base mb-4">
                  🛡
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight">
                  Premium Materials
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                  High-quality mesh and hardware built for airflow, visibility, and structural strength.
                </p>
              </div>
            </div>

            {/* Mission Quote Highlight */}
            <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-8 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-600"></div>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-700 font-medium italic">
                "Our journey began with a simple mission: replace clunky traditional screens with elegant protection systems that complement modern architecture. Today we serve homeowners and property managers who want safety without compromise."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= VALUE PILLARS ================= */}
      <section className="py-24 sm:py-32 bg-slate-50/80 border-y border-slate-100">
        <div className="w-full px-6 sm:px-12 lg:px-24 xl:px-32">
          
          <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-teal-600 font-bold block mb-3">
              Our Core Strengths
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              Designed For Modern Living
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 w-full">
            {[
              {
                title: 'Design-led Solutions',
                description: 'Custom screens that match your windows, doors, and design language with a polished aesthetic.',
              },
              {
                title: 'Durable Protection',
                description: 'Built for long-term performance with corrosion-resistant frames and premium mesh.',
              },
              {
                title: 'Customer-first Service',
                description: 'From consultation to installation and follow-up, we make the process effortless.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] bg-white p-8 sm:p-10 shadow-xl shadow-slate-200/40 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-lg mb-6">
                    ✓
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUSTOMER REVIEWS ================= */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="w-full px-6 sm:px-12 lg:px-24 xl:px-32">
          
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24 max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-teal-600 font-bold block mb-3">
              Customer Reviews
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              What Our Customers Say
            </h2>

            <p className="text-base sm:text-xl text-slate-600 mt-5 font-normal leading-relaxed">
              We are proud to have earned the trust of hundreds of homeowners through quality products, professional installation, and exceptional service.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                name: "Arun Kumar",
                location: "Chennai",
                review:
                  "Excellent service from consultation to installation. The mosquito screens look premium and perfectly match our home.",
              },
              {
                name: "Priya S",
                location: "Coimbatore",
                review:
                  "Very professional team. Installation was completed on time and the quality exceeded our expectations.",
              },
              {
                name: "Santhosh R",
                location: "Bangalore",
                review:
                  "Highly recommended. Our balcony safety net and pleated mesh door look amazing and provide excellent protection.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-slate-50/80 rounded-[28px] p-8 sm:p-10 shadow-sm border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="text-amber-400 text-lg sm:text-xl mb-6 tracking-widest">
                    ★★★★★
                  </div>

                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed italic mb-8 font-normal">
                    "{item.review}"
                  </p>
                </div>

                <div className="border-t border-slate-200/60 pt-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1 font-medium">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= INSTALLATION PROCESS ================= */}
      <section className="py-24 sm:py-32 bg-slate-900 text-white relative overflow-hidden">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 xl:px-32">
          
          {/* Process Header */}
          <div className="text-center mb-16 sm:mb-24 max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-teal-400 font-bold block mb-3">
              Installation Process
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-white leading-tight">
              Simple & Seamless Execution
            </h2>

            <p className="text-base sm:text-xl text-slate-300 mt-5 font-normal leading-relaxed">
              From your first enquiry to the final installation, our streamlined process ensures a smooth and professional experience.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Inspection",
                desc: "Our experts visit your home and take accurate measurements.",
              },
              {
                step: "02",
                title: "Custom Manufacturing",
                desc: "Every screen is manufactured according to your exact dimensions.",
              },
              {
                step: "03",
                title: "Professional Fitting",
                desc: "Our experienced technicians install everything with precision.",
              },
              {
                step: "04",
                title: "Enjoy Protection",
                desc: "Relax with fresh air, uninterrupted views, and complete protection.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm rounded-[28px] p-8 sm:p-10 text-left hover:border-teal-500/50 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-black text-teal-400 mb-6 tracking-tight">
                  {item.step}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
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
  )
}