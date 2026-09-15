"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight, faCalendarDays, faCheck, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { rooms } from "@/lib/rooms"

type RequestData = {
  checkIn: string
  checkOut: string
  guests: string
  room: string
  name: string
  email: string
  phone: string
  message: string
}

const initialData: RequestData = { checkIn: "", checkOut: "", guests: "2", room: "any", name: "", email: "", phone: "", message: "" }
const inputClass = "min-h-12 w-full border-b border-midnight-blue/30 bg-transparent px-0 py-3 font-sans text-base text-midnight-blue placeholder:text-midnight-blue/45 focus:border-terracotta focus:outline-none"

export function BookingRequestForm() {
  const [data, setData] = useState(initialData)
  const [reviewing, setReviewing] = useState(false)
  const today = new Date().toISOString().split("T")[0]
  const selectedRoom = rooms.find((room) => room.slug === data.room)?.name ?? "Any available room"

  function update(field: keyof RequestData, value: string) {
    setData((current) => ({ ...current, [field]: value }))
  }

  if (reviewing) {
    return (
      <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
        <div><p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[.24em] text-terracotta">Step 02 · Review</p><h3 className="text-balance font-serif text-5xl font-light leading-[1.02]">Your stay at a glance.</h3><p className="mt-6 text-pretty font-sans text-base leading-7 text-midnight-blue/75">Check the details before request delivery is connected.</p></div>
        <div><dl className="grid border-t border-midnight-blue/15 sm:grid-cols-2">{[["Arrival", data.checkIn], ["Departure", data.checkOut], ["Guests", data.guests], ["Room", selectedRoom], ["Name", data.name], ["Email", data.email]].map(([label, value]) => <div key={label} className="border-b border-midnight-blue/15 py-5 sm:odd:pr-8 sm:even:border-l sm:even:pl-8"><dt className="font-sans text-xs font-semibold uppercase tracking-[.16em] text-midnight-blue/65">{label}</dt><dd className="mt-2 font-serif text-2xl font-light">{value}</dd></div>)}</dl>{data.message && <div className="border-b border-midnight-blue/15 py-5"><p className="font-sans text-xs font-semibold uppercase tracking-[.16em] text-midnight-blue/65">Notes</p><p className="mt-2 text-pretty font-sans text-base leading-7">{data.message}</p></div>}<div className="mt-8 flex flex-col gap-4 sm:flex-row"><button type="button" onClick={() => setReviewing(false)} className="inline-flex min-h-12 items-center justify-center gap-3 border border-midnight-blue/30 px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[.16em] hover:border-midnight-blue"><FontAwesomeIcon icon={faArrowLeft} className="size-3" />Edit details</button><button type="button" disabled className="inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-3 bg-midnight-blue/45 px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[.16em] text-white"><FontAwesomeIcon icon={faCheck} className="size-3" />Submit request</button></div><p className="mt-4 font-sans text-sm leading-6 text-midnight-blue/70">UI preview only: request delivery is not connected yet.</p></div>
      </div>
    )
  }

  return (
    <form onSubmit={(event) => { event.preventDefault(); setReviewing(true) }}>
      <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:items-end"><div><p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[.24em] text-terracotta">Step 01 · Your stay</p><h2 className="text-balance font-serif text-5xl font-light leading-[1.02] md:text-7xl">Tell us your plans.</h2></div><p className="max-w-lg text-pretty font-sans text-base leading-7 text-midnight-blue/75 lg:justify-self-end">Choose preferred dates and a room. Availability and rates will be confirmed personally.</p></div>
      <div className="grid gap-x-10 gap-y-8 lg:grid-cols-2">
        <div><label htmlFor="request-check-in" className="font-sans text-sm font-semibold">Check-in <span aria-hidden="true" className="text-terracotta">*</span></label><div className="relative"><input id="request-check-in" type="date" required min={today} value={data.checkIn} onChange={(e) => update("checkIn", e.target.value)} className={inputClass} /><FontAwesomeIcon icon={faCalendarDays} className="pointer-events-none absolute right-1 top-4 size-4 text-terracotta" /></div></div>
        <div><label htmlFor="request-check-out" className="font-sans text-sm font-semibold">Check-out <span aria-hidden="true" className="text-terracotta">*</span></label><div className="relative"><input id="request-check-out" type="date" required min={data.checkIn || today} value={data.checkOut} onChange={(e) => update("checkOut", e.target.value)} className={inputClass} /><FontAwesomeIcon icon={faCalendarDays} className="pointer-events-none absolute right-1 top-4 size-4 text-terracotta" /></div></div>
        <div><label htmlFor="request-guests" className="font-sans text-sm font-semibold">Guests <span aria-hidden="true" className="text-terracotta">*</span></label><div className="relative"><select id="request-guests" required value={data.guests} onChange={(e) => update("guests", e.target.value)} className={`${inputClass} appearance-none`}><option value="1">1 guest</option><option value="2">2 guests</option></select><FontAwesomeIcon icon={faUserGroup} className="pointer-events-none absolute right-1 top-4 size-4 text-terracotta" /></div></div>
        <div><label htmlFor="request-room" className="font-sans text-sm font-semibold">Preferred room</label><select id="request-room" value={data.room} onChange={(e) => update("room", e.target.value)} className={`${inputClass} appearance-none`}><option value="any">Any available room</option>{rooms.map((room) => <option key={room.slug} value={room.slug}>{room.name}</option>)}</select></div>
        <div><label htmlFor="request-name" className="font-sans text-sm font-semibold">Name <span aria-hidden="true" className="text-terracotta">*</span></label><input id="request-name" type="text" required autoComplete="name" value={data.name} onChange={(e) => update("name", e.target.value)} className={inputClass} placeholder="Your full name" /></div>
        <div><label htmlFor="request-email" className="font-sans text-sm font-semibold">Email <span aria-hidden="true" className="text-terracotta">*</span></label><input id="request-email" type="email" required autoComplete="email" value={data.email} onChange={(e) => update("email", e.target.value)} className={inputClass} placeholder="you@example.com" /></div>
        <div><label htmlFor="request-phone" className="font-sans text-sm font-semibold">Phone</label><input id="request-phone" type="tel" autoComplete="tel" inputMode="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} placeholder="Country code and number" /></div>
        <div><label htmlFor="request-message" className="font-sans text-sm font-semibold">Anything we should know?</label><textarea id="request-message" value={data.message} onChange={(e) => update("message", e.target.value)} className={`${inputClass} min-h-28 resize-y`} placeholder="Arrival details or special requests" /></div>
      </div>
      <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"><button type="submit" className="group inline-flex min-h-12 items-center gap-3 bg-terracotta px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[.18em] text-white hover:bg-deep-spice">Review request <FontAwesomeIcon icon={faArrowRight} className="size-3 transition-transform group-hover:translate-x-1" /></button><p className="font-sans text-sm text-midnight-blue/70">No payment is taken at this stage.</p></div>
    </form>
  )
}
