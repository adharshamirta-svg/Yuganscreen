import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setSubmitted(false);

    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);

    const endpoint = `${import.meta.env.VITE_API_BASE_URL}/api/contact`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formProps),
      });

      let data = null;
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        data = await response.json();
      }

      setLoading(false);

      if (response.ok && (data ? data.success : true)) {
        setSubmitted(true);
        event.target.reset();
        return;
      }

      const errMsg = (data && data.message) || `Request failed with status ${response.status}`;
      alert(`Failed to send message: ${errMsg}`);
    } catch (err) {
      setLoading(false);
      console.error('Network error sending contact form', err);
      alert('Network error: could not send message');
    }
  };

  return (
    <main className="w-full bg-slate-50 min-h-screen overflow-x-hidden">

      {/* ================= HERO SECTION (Removed pt-28) ================= */}
      <section
        className="w-full relative pb-20 pt-20 px-6 md:px-12 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>

        <div className="relative z-10 text-center w-full max-w-5xl mx-auto">
          <span className="inline-block bg-teal-500/20 border border-teal-400/30 text-teal-300 px-6 py-2 rounded-full font-semibold uppercase tracking-[3px] text-sm mb-6 backdrop-blur-sm">
            Get In Touch
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            Let's Protect Your Home
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mt-6 max-w-3xl mx-auto leading-relaxed">
            Have questions or need an instant quotation? Reach out to our architectural screen specialists today.
          </p>
        </div>
      </section>

      {/* ================= MAIN FULL-WIDTH CONTACT CONTAINER ================= */}
      <section className="w-full py-12 md:py-16 px-4 md:px-8 lg:px-12">
        <div className="w-full bg-white rounded-[32px] shadow-2xl overflow-hidden border border-slate-100">

          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">

            {/* LEFT COLUMN: Contact Info */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 sm:p-12 lg:p-16 text-white flex flex-col justify-between">
              <div>
                <span className="text-teal-400 uppercase tracking-[4px] font-bold text-sm">
                  Contact Us
                </span>

                <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-6 leading-tight">
                  Let's Build a <br />
                  <span className="text-teal-400">Safer Home</span>
                </h2>

                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-10">
                  Contact Yugan Screens for premium mosquito screens, pleated mesh doors, invisible grills, and balcony safety solutions. Our experts will get back to you within 24 hours.
                </p>

                {/* Details List */}
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-2xl group-hover:bg-teal-500 group-hover:text-white transition duration-300 flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                        Phone
                      </h4>
                      <a href="tel:+917904288504" className="text-lg md:text-xl font-bold hover:text-teal-400 transition">
                        +91 79042 88504
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-2xl group-hover:bg-teal-500 group-hover:text-white transition duration-300 flex-shrink-0">
                      📧
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                        Email
                      </h4>
                      <a href="mailto:adharshkannan1809@gmail.com" className="text-lg md:text-xl font-bold hover:text-teal-400 transition break-all">
                        adharshkannan1809@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-2xl group-hover:bg-teal-500 group-hover:text-white transition duration-300 flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                        Location
                      </h4>
                      <p className="text-lg md:text-xl font-bold text-white">
                        Chennai, Tamil Nadu
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours Badge */}
              <div className="mt-12 pt-8 border-t border-slate-700/60">
                <p className="text-sm text-slate-400 flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400 mr-2.5 animate-pulse"></span>
                  Mon – Sat: 9:00 AM – 7:00 PM IST
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 bg-white">
              <h3 className="text-3xl font-bold text-slate-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-slate-500 mb-8">
                Fill out the details below for a quick response and custom estimate.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Location / Area *
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="City, Area"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition"
                  >
                    <option>Mosquito Mesh Installation</option>
                    <option>Bird Netting Solutions</option>
                    <option>Pleated Mesh Door</option>
                    <option>Invisible Grill</option>
                    <option>Other / General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us about your requirements..."
                    required
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-teal-600/30 transition-all duration-300 disabled:opacity-60 text-lg"
                >
                  {loading ? "Sending Message..." : "Submit Request →"}
                </button>

                {submitted && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-center font-medium rounded-xl">
                    ✅ Your message has been sent successfully. We will contact you shortly!
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}