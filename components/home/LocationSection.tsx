import { MapPin, Car, Footprints, Building2 } from "lucide-react";

const distanceMarkers = [
  {
    label: "Jemaâ El Fna Square",
    time: "5 min walk",
    icon: Footprints,
  },
  {
    label: "The Souks",
    time: "Direct access",
    icon: MapPin,
  },
  {
    label: "Major Attractions",
    time: "Walking distance",
    icon: Building2,
  },
  {
    label: "Palm Groves",
    time: "30 min drive",
    icon: Car,
  },
];

export function LocationSection() {
  return (
    <section className="py-24 bg-desert-sand/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <span className="text-sm font-sans font-bold uppercase tracking-widest text-terracotta mb-4 block">
              Location & Proximity
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
              In the Medina, Yet a World Apart
            </h2>
            <p className="font-sans text-lg text-muted-foreground mb-12 leading-relaxed">
              Located in the heart of the Medina, Riad Dar Ten offers a peaceful sanctuary just steps away from the vibrant energy of Marrakech. Experience the best of both worlds.
            </p>

            <div className="space-y-6">
              {distanceMarkers.map((marker, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-white border border-terracotta/20 flex items-center justify-center mr-4 group-hover:bg-terracotta group-hover:text-white transition-colors duration-300 text-terracotta">
                    <marker.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary">{marker.label}</h4>
                    <p className="font-sans text-sm text-muted-foreground">{marker.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="order-1 lg:order-2 h-[450px] w-full rounded-lg overflow-hidden shadow-xl border-4 border-white animate-fade-in-up delay-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.2133549842956!2d-7.9932132238420035!3d31.628008241815227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee428df5384f%3A0xa47e07166af7acc9!2sRiad%20Dar%20Ten!5e0!3m2!1sen!2s!4v1768066932953!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Riad Dar Ten Location Map"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
