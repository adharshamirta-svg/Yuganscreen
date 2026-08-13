export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-white mt-20">

      {/* Main Footer */}
      <div className="w-full px-10 md:px-20 lg:px-28 py-20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* Company */}
          <div>
            <h2 className="text-4xl font-bold text-teal-400 mb-6">
              Yugan Screens
            </h2>

            <p className="text-lg text-gray-300 leading-8">
              Leading providers of premium mosquito screens,
              bird netting and structural protection solutions
              for homes and commercial spaces.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-4xl font-semibold mb-6 text-white">
              Solutions
            </h3>

            <ul className="space-y-4 text-lg text-gray-300">

              <li className="hover:text-teal-400 cursor-pointer transition duration-300">
                Mosquito Screens
              </li>

              <li className="hover:text-teal-400 cursor-pointer transition duration-300">
                Bird Netting
              </li>

              <li className="hover:text-teal-400 cursor-pointer transition duration-300">
                Security Grills
              </li>

              <li className="hover:text-teal-400 cursor-pointer transition duration-300">
                Maintenance
              </li>

            </ul>
          </div>

          {/* Resources */}
          <div>

            <h3 className="text-4xl font-semibold mb-6 text-white">
              Resources
            </h3>

            <ul className="space-y-4 text-xl text-gray-300">

              <li className="hover:text-teal-400 cursor-pointer transition duration-300">
                Installation Guide
              </li>

              <li className="hover:text-teal-400 cursor-pointer transition duration-300">
                Sitemap
              </li>

              <li className="hover:text-teal-400 cursor-pointer transition duration-300">
                Terms of Service
              </li>

              <li className="hover:text-teal-400 cursor-pointer transition duration-300">
                Privacy Policy
              </li>

            </ul>

          </div>

          {/* Newsletter */}
          <div>

            <h3 className="text-2xl font-semibold mb-6 text-white">
              Stay Connected
            </h3>

            <p className="text-lg text-gray-300 mb-8 leading-8">
              Subscribe to receive product updates,
              installation tips and exclusive offers.
            </p>

            <div className="flex">

              <input
                type="email"
                placeholder="Enter your Email Address"
                className="flex-1 bg-slate-900 border border-slate-700 rounded-l-xl px-5 py-4 text-lg text-white placeholder-gray-500 outline-none focus:border-teal-400"
              />

              <button className="bg-teal-500 hover:bg-teal-600 px-8 rounded-r-xl text-lg font-semibold transition duration-300">
                Join
              </button>

            </div>

            <div className="flex gap-5 mt-8 text-3xl">

              <span className="material-symbols-outlined hover:text-teal-400 cursor-pointer transition">
                share
              </span>

              <span className="material-symbols-outlined hover:text-teal-400 cursor-pointer transition">
                group
              </span>

              <span className="material-symbols-outlined hover:text-teal-400 cursor-pointer transition">
                language
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">

        <div className="w-full px-10 md:px-20 lg:px-28 py-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-base text-gray-400">
            © 2026 Yugan Screens. All Rights Reserved.
          </p>

          <div className="flex gap-10 mt-6 md:mt-0">

            <span className="text-gray-400 hover:text-teal-400 cursor-pointer transition">
              Privacy Policy
            </span>

            <span className="text-gray-400 hover:text-teal-400 cursor-pointer transition">
              Terms of Service
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}