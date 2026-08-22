import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "7904288504"; // Replace with your WhatsApp number

  const message = encodeURIComponent(
    "Hi Yugan Screens, I am interested in your mosquito and insect screens. I would like to get a free quote."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Yugan Screens on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-600 px-5 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <span className="text-2xl">💬</span>

      <span className="hidden font-semibold sm:block">
        WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;