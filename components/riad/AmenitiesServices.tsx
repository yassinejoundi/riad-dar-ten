import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBroom, faCar, faPlane, faUtensils, faWaterLadder, faWifi } from "@fortawesome/free-solid-svg-icons"

const amenities = [[faWifi, "Wi-Fi throughout"], [faWaterLadder, "Courtyard pool"], [faUtensils, "Breakfast & dining"], [faBroom, "Daily housekeeping"], [faPlane, "Airport transfers on request"], [faCar, "Arrival assistance"]] as const

export function AmenitiesServices() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><div><p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[.24em] text-terracotta">Your stay</p><h2 className="text-balance font-serif text-5xl font-light leading-[1.02] md:text-7xl">Comfort, quietly considered.</h2></div><div className="grid border-t border-midnight-blue/15 sm:grid-cols-2">{amenities.map(([icon, label]) => <div key={label} className="flex min-h-24 items-center gap-5 border-b border-midnight-blue/15 py-6 sm:odd:pr-8 sm:even:border-l sm:even:pl-8"><FontAwesomeIcon icon={icon} className="size-5 text-terracotta" /><span className="font-sans text-base text-midnight-blue/80">{label}</span></div>)}</div></div>
      </div>
    </section>
  )
}
