export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-24 text-center px-4 bg-cream">
        <h1 className="text-5xl md:text-7xl font-serif font-semibold text-primary mb-4">
          RIAD DAR TEN
        </h1>
        <p className="text-xl md:text-2xl font-accent italic text-secondary mb-8">
          "Where Tradition Meets Tranquility"
        </p>
        <p className="max-w-2xl text-lg text-muted-foreground mb-8">
          An intimate Moroccan sanctuary in the heart of Marrakech, where
          contemporary comfort meets timeless tradition.
        </p>
        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
          Book Your Stay
        </button>
      </section>

      {/* Colors Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-primary mb-8 text-center">
          Brand Colors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-terracotta text-white">
            <p className="font-bold">Terracotta Warmth</p>
            <p className="text-sm">#D4A574</p>
          </div>
          <div className="p-4 rounded-lg bg-desert-sand text-deep-spice">
            <p className="font-bold">Desert Sand</p>
            <p className="text-sm">#E8D5C4</p>
          </div>
          <div className="p-4 rounded-lg bg-deep-spice text-white">
            <p className="font-bold">Deep Spice</p>
            <p className="text-sm">#8B4513</p>
          </div>
          <div className="p-4 rounded-lg bg-tadelakt-green text-white">
            <p className="font-bold">Tadelakt Green</p>
            <p className="text-sm">#7FB8A5</p>
          </div>
          <div className="p-4 rounded-lg bg-midnight-blue text-white">
            <p className="font-bold">Midnight Blue</p>
            <p className="text-sm">#1A2942</p>
          </div>
          <div className="p-4 rounded-lg bg-cream text-midnight-blue border border-gray-200">
            <p className="font-bold">Cream</p>
            <p className="text-sm">#F5F1E8</p>
          </div>
          <div className="p-4 rounded-lg bg-saffron-gold text-midnight-blue">
            <p className="font-bold">Saffron Gold</p>
            <p className="text-sm">#F4C430</p>
          </div>
          <div className="p-4 rounded-lg bg-paprika-red text-white">
            <p className="font-bold">Paprika Red</p>
            <p className="text-sm">#C64B3C</p>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-white/50 rounded-xl my-8">
        <h2 className="text-3xl font-serif font-semibold text-primary mb-8 text-center">
          Typography
        </h2>

        <div className="space-y-8">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Primary Typeface: Cormorant Garamond
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-light mb-2">
              Heading Light (300)
            </h1>
            <h1 className="text-4xl md:text-6xl font-serif font-regular mb-2">
              Heading Regular (400)
            </h1>
            <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-2">
              Heading SemiBold (600)
            </h1>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Secondary Typeface: Montserrat
            </p>
            <p className="font-sans font-light text-lg mb-2">
              Body Light (300) - Clean, modern sans-serif for excellent
              readability.
            </p>
            <p className="font-sans font-regular text-lg mb-2">
              Body Regular (400) - Room descriptions, amenities lists, booking
              details.
            </p>
            <p className="font-sans font-medium text-lg mb-2">
              Body Medium (500) - Navigation, buttons, practical information.
            </p>
            <p className="font-sans font-semibold text-lg mb-2">
              Body SemiBold (600) - Important details.
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Accent Typeface: Playfair Display
            </p>
            <p className="font-accent text-3xl italic text-primary">
              "Escape to the Heart of Marrakech"
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
