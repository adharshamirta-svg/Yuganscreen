import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <main className="bg-white pt-20">
   <section
   
  className="relative min-h-[90vh] flex items-center overflow-hidden"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/dwjtwnypy/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_04_01_43_PM_tsup9l')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

  
 <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent"></div>

  <div className="relative z-10 w-full flex justify-start px-8 lg:px-24 xl:px-362">
       <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white px-7 py-3 text-base font-semibold tracking-[0.25em] uppercase mb-8">
              About Yugan Screens
            </span>
            <h1 className="text-7xl lg:text-8xl font-black text-white leading-[1] tracking-tight mb-10 text-left">
              Protecting Homes, Enhancing Comfort
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 leading-9 max-w-2xl text-left">
              Engineering clarity and security for modern living spaces. We redefine the boundary between your home and the outdoors.
            </p>
            
          </div>
        </div>
      </section>

     <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white">

  <div className="w-full px-8 lg:px-24 xl:px-32 grid lg:grid-cols-2 gap-24 items-center">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl w-full">
            <img
              src="https://res.cloudinary.com/dwjtwnypy/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_25_2026_01_08_18_PM_gvenw9"
              alt="Professional installation of premium mosquito screens by Yugan Screens in a modern home"
             className="w-full h-[720px] object-cover"
            />
          </div>

          <div className="space-y-10 w-full">
            <div className="space-y-4">
              <p className="text-lg uppercase tracking-[0.35em] text-teal-700 font-bold">
                Trusted Provider of Premium Screen Solutions
              </p>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                At Yugan Screens, your home should be a sanctuary.
              </h2>
              <p className="text-2xl leading-10 text-slate-700">
                Enjoy fresh air and natural light without the intrusion of pests. We deliver architectural-grade mosquito screens, bird netting, and safety systems that protect your family while preserving your view.
              </p>
            </div>

           <div className="grid grid-cols-2 gap-8">
              <div className="rounded-[28px] bg-white p-10 shadow-xl border border-slate-100 hover:-translate-y-2 transition duration-500">
                <h3 className="text-3xl font-bold text-slate-900 mb-5">Expert Installation</h3>
                <p className="text-xl lg:text-2xl leading-10 text-slate-600">

                  Professional fitting with precision measurement, neat finishes, and durable frames designed to last.
                </p>
              </div>
              <div className="rounded-[28px] bg-white p-10 shadow-xl border border-slate-100 hover:-translate-y-2 transition duration-500">
                <h3 className="text-3xl font-bold text-slate-900 mb-5">Premium Materials</h3>
                <p className="text-xl lg:text-2xl leading-10 text-slate-600">
                  High-quality mesh and hardware built for airflow, visibility, and structural strength.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-lg">
              <p className="text-2xl leading-[2.3rem] text-slate-700 font-medium">
                Our journey began with a simple mission: replace clunky traditional screens with elegant protection systems that complement modern architecture. Today we serve homeowners and property managers who want safety without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50">
       <div className="w-full px-8 lg:px-24 xl:px-32 py-16">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
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
  className="rounded-[32px] bg-white p-12 shadow-2xl border border-slate-100 hover:-translate-y-3 hover:shadow-3xl transition-all duration-500"
>
  <h3 className="text-4xl font-bold text-slate-900 mb-6">
    {item.title}
  </h3>

  <p className="text-2xl leading-[2.2rem] text-slate-700 font-medium">
    {item.description}
  </p>
</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
