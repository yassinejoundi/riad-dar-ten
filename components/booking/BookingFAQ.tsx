"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQ_GROUPS = [
  {
    id: "booking",
    title: "Booking & Policies",
    items: [
      {
        id: "how-to-book",
        question: "How do I make a reservation?",
        answer:
          "You can send us a booking request directly on this page or contact us via email or WhatsApp with your preferred dates and room. We will confirm availability and rates before finalizing your stay.",
      },
      {
        id: "cancellation",
        question: "What is your cancellation policy?",
        answer:
          "Our standard policy allows free cancellation up to a certain number of days before arrival. Closer to your stay, cancellation fees may apply. We will always share the exact terms with your booking confirmation.",
      },
      {
        id: "payments",
        question: "Do you accept credit cards?",
        answer:
          "Yes, we accept major credit cards as well as cash payments at the riad. For some stays, a deposit or pre-authorization may be required to secure the booking.",
      },
      {
        id: "breakfast",
        question: "Is breakfast included?",
        answer:
          "A generous Moroccan-style breakfast is included in most rates and is served in the courtyard or on the rooftop terrace, depending on the season and weather.",
      },
    ],
  },
  {
    id: "facilities",
    title: "Facilities & Services",
    items: [
      {
        id: "wifi",
        question: "Is there WiFi in the riad?",
        answer:
          "Yes, complimentary WiFi is available throughout the riad, including the rooms, courtyard, and rooftop terrace.",
      },
      {
        id: "transfers",
        question: "Do you offer airport transfers?",
        answer:
          "We can arrange private airport transfers at an additional cost. Share your flight details with us and a driver will meet you on arrival.",
      },
      {
        id: "tours",
        question: "Can you help us organize tours and experiences?",
        answer:
          "Absolutely. We partner with trusted local guides for day trips, desert tours, cooking classes, and curated experiences in and around Marrakech.",
      },
      {
        id: "pool",
        question: "Is the pool heated?",
        answer:
          "Our plunge pool is designed for refreshing dips and is not heated. Temperature varies naturally with the season and time of day.",
      },
    ],
  },
  {
    id: "location",
    title: "Location & Access",
    items: [
      {
        id: "distance-square",
        question: "How far is the riad from the main square?",
        answer:
          "We are located within walking distance of Jemaa el-Fna, usually around 8–12 minutes on foot, depending on your pace and the souk traffic.",
      },
      {
        id: "finding-riad",
        question: "Is the riad easy to find?",
        answer:
          "Like most traditional riads, we are tucked inside the medina. We will provide step-by-step walking directions and can arrange a luggage escort or transfer to meet you nearby.",
      },
      {
        id: "parking",
        question: "Is parking available nearby?",
        answer:
          "There is public parking available near the medina entrances. From there, it is a short walk to the riad. We can recommend the most convenient parking areas based on your arrival route.",
      },
      {
        id: "nearby",
        question: "What is nearby the riad?",
        answer:
          "We are close to key souks, historical sites, and popular cafes and restaurants. Once your booking is confirmed, we will share our personal neighborhood recommendations.",
      },
    ],
  },
  {
    id: "rooms",
    title: "Rooms",
    items: [
      {
        id: "room-differences",
        question: "What is the difference between your rooms?",
        answer:
          "Each room has its own personality inspired by Moroccan spices, with variations in size, layout, and views. All rooms share the same level of comfort and amenities.",
      },
      {
        id: "specific-room",
        question: "Can we request a specific room?",
        answer:
          "You are welcome to share your preferred room or style when booking. We will do our best to accommodate your request, subject to availability.",
      },
      {
        id: "children",
        question: "Are the rooms suitable for children?",
        answer:
          "We can welcome families; some rooms are better suited to accommodate children than others. Let us know your family details and we will propose the best options.",
      },
      {
        id: "extra-beds",
        question: "Can you add an extra bed or baby cot?",
        answer:
          "An extra bed or baby cot can be added to certain rooms on request, usually at an additional nightly fee. Please mention this when sending your booking details.",
      },
    ],
  },
]

export function BookingFAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto">
            Find quick answers about booking, services, and staying at Riad Dar
            Ten. If you cannot find what you need, feel free to contact us.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {FAQ_GROUPS.map((group) => (
            <div key={group.id} className="space-y-4">
              <h3 className="font-serif text-xl text-primary">
                {group.title}
              </h3>
              <div className="space-y-3">
                {group.items.map((item) => {
                  const isOpen = openId === item.id
                  return (
                    <div
                      key={item.id}
                      className="border border-desert-sand/50 rounded-xl bg-white/80"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenId(isOpen ? null : item.id)
                        }
                        className="w-full flex items-center justify-between px-4 py-3 md:px-5 md:py-4 text-left"
                        aria-expanded={isOpen}
                        aria-controls={`${item.id}-content`}
                      >
                        <span className="font-sans text-sm md:text-base text-primary">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`ml-3 h-4 w-4 text-terracotta transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div
                          id={`${item.id}-content`}
                          className="px-4 pb-4 md:px-5 md:pb-5 font-sans text-sm text-gray-700"
                        >
                          {item.answer}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

