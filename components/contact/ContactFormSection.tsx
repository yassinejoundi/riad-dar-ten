import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ContactFormSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-stretch">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-2">
              Send Us a Message
            </h2>
            <p className="font-sans text-gray-600 mb-8">
              Share your plans, questions, or special requests and we&apos;ll
              respond personally.
            </p>

            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block font-sans text-sm font-medium text-gray-800"
                >
                  Name<span className="text-terracotta">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white/80 px-4 py-3 font-sans text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block font-sans text-sm font-medium text-gray-800"
                  >
                    Email<span className="text-terracotta">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white/80 px-4 py-3 font-sans text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block font-sans text-sm font-medium text-gray-800"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-lg border border-gray-300 bg-white/80 px-4 py-3 font-sans text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                    placeholder="+212 ..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block font-sans text-sm font-medium text-gray-800"
                >
                  Special Requests/Message
                  <span className="text-terracotta">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white/80 px-4 py-3 font-sans text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent min-h-[140px] resize-vertical"
                  placeholder="Tell us about your dates, preferences, or any questions."
                />
              </div>

              <div className="pt-2">
                <Button className="px-8 py-6 h-auto font-sans text-sm md:text-base tracking-wide bg-primary text-white hover:bg-primary/90">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl min-h-[260px] md:min-h-[360px]">
            <Image
              src="/assets/images/contact/contact-form-side-image.png"
              alt="Welcoming staff at Riad Dar Ten"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  )
}
