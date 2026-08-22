import React from 'react'

const WhatsAppButton = () => {

  // Replace this with your actual WhatsApp number
  const phoneNumber = '919876543210'

  const message = encodeURIComponent(
    'Hi Yugan Screens, I am interested in your mosquito and insect screens. I would like to get a free quote.'
  )

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Yugan Screens on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        rounded-full
        bg-green-600
        px-5
        py-3
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:scale-105
        hover:bg-green-700
      "
    >

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
        <span className="text-xl">
          💬
        </span>
      </div>

      <div className="hidden sm:block">
        <p className="text-xs opacity-80">
          Need help?
        </p>

        <p className="font-semibold">
          Chat with us
        </p>
      </div>

    </a>
  )
}

export default WhatsAppButton