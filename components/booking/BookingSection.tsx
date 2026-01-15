"use client"

import { useState } from "react"
import { CalendarCheck, Users, BedDouble } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const ROOMS = [
  { id: "any", label: "Any Room" },
  { id: "vanilla", label: "Vanilla Double Room" },
  { id: "chocolate", label: "Chocolate Double Room" },
  { id: "canelle", label: "Canelle Double Room" },
  { id: "muscade", label: "Muscade Double Room" },
  { id: "safran", label: "Safran Double Room" },
  { id: "paprika", label: "Paprika Double Room" },
]

export function BookingSection() {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(2)
  const [room, setRoom] = useState("any")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [specialRequests, setSpecialRequests] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log({
      checkIn,
      checkOut,
      guests,
      room,
      name,
      email,
      phone,
      specialRequests,
    })
  }

  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-desert-sand/40 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-2">
                Check Availability
              </h2>
              <p className="font-sans text-gray-600">
                Choose your dates and we&apos;ll show you the best options for
                your stay.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-sans text-gray-600">
              <CalendarCheck className="text-terracotta" size={18} />
              <span>Instant request · No payment required yet</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="checkIn"
                className="block font-sans text-sm font-medium text-gray-800"
              >
                Check-in
              </label>
              <div className="relative">
                <input
                  id="checkIn"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-sans text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="checkOut"
                className="block font-sans text-sm font-medium text-gray-800"
              >
                Check-out
              </label>
              <div className="relative">
                <input
                  id="checkOut"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-sans text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="guests"
                className="block font-sans text-sm font-medium text-gray-800"
              >
                Guests
              </label>
              <div className="relative flex items-center">
                <Users className="absolute left-3 text-gray-400" size={18} />
                <input
                  id="guests"
                  type="number"
                  min={1}
                  max={6}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value) || 1)}
                  className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-3 font-sans text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="room"
                className="block font-sans text-sm font-medium text-gray-800"
              >
                Preferred Room
              </label>
              <div className="relative flex items-center">
                <BedDouble
                  className="absolute left-3 text-gray-400"
                  size={18}
                />
                <select
                  id="room"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-white pl-10 pr-8 py-3 font-sans text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                >
                  {ROOMS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block font-sans text-sm font-medium text-gray-800"
              >
                Name<span className="text-terracotta">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-sans text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block font-sans text-sm font-medium text-gray-800"
              >
                Email<span className="text-terracotta">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-sans text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label
                htmlFor="phone"
                className="block font-sans text-sm font-medium text-gray-800"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-sans text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                placeholder="+212 ..."
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label
                htmlFor="specialRequests"
                className="block font-sans text-sm font-medium text-gray-800"
              >
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-sans text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent min-h-[120px] resize-vertical"
                placeholder="Tell us about your preferences, arrival time, or any occasion."
              />
            </div>

            <div className="md:col-span-2 flex items-start gap-3 pt-1">
              <Checkbox
                id="policies"
                required
                className="mt-1 h-4 w-4 rounded border-gray-300 text-primary checked:bg-primary checked:border-primary checked:ring-primary"
              />
              <label
                htmlFor="policies"
                className="font-sans text-sm text-gray-700"
              >
                I agree to the booking policies and house rules.
              </label>
            </div>

            <div className="md:col-span-2 pt-2 md:flex md:justify-end">
              <Button
                type="submit"
                className="w-full md:w-auto px-10 py-6 h-auto font-sans text-sm md:text-base tracking-wide bg-primary text-white hover:bg-primary/90"
              >
                Check Availability
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
