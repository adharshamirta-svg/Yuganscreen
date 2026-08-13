import { useState } from "react";

export default function Contact() {

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
  event.preventDefault();

  setLoading(true);
  setSubmitted(false);

  const formData = new FormData(event.target);

  formData.append(
    "access_key",
    process.env.CONTACT_FORM
  );

  const response = await fetch(
     + process.env.WEBSITE_URL,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  setLoading(false);

  if (data.success) {
    setSubmitted(true);
    event.target.reset();
  } else {
    alert("Failed to send message");
  }
};


  return (
    <main className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
      <label className="block text-sm font-medium mb-2">
        Name
      </label>
      <input
        type="text"
        name="name"
        placeholder="John Doe"
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none"
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">
        Phone Number
      </label>
      <input
        type="tel"
        name="phone"
        placeholder="+91 79042 88504"
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none"
      />
    </div>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div>
      <label className="block text-sm font-medium mb-2">
        Email Address
      </label>
      <input
        type="email"
        name="email"
        placeholder="john@example.com"
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none"
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">
        Location
      </label>
      <input
        type="text"
        name="location"
        placeholder="City, Area"
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none"
      />
    </div>

  </div>

  <div>
    <label className="block text-sm font-medium mb-2">
      Service Required
    </label>

    <select
      name="service"
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none"
    >
      <option>Mosquito Mesh Installation</option>
      <option>Bird Netting Solutions</option>
      <option>Pleated Mesh Door</option>
      <option>Invisible Grill</option>
      <option>Other</option>
    </select>
  </div>

  <div>
    <label className="block text-sm font-medium mb-2">
      Message
    </label>

    <textarea
      name="message"
      rows="5"
      placeholder="How can we help you?"
      required
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none resize-none"
    ></textarea>
  </div>

  <button
    type="submit"
    disabled={loading}
    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all disabled:opacity-60"
  >
    {loading ? "Sending..." : "Submit Request"}
  </button>

      {submitted && (
    <div className="mt-4 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg">
      ✅ Your message has been sent successfully.
    </div>
  )}

</form>

      </div>
    </main>
  );
}
