import Link from "next/link"

export default function BrandIdentity() {
  return (
    <main className="min-h-screen bg-cream text-foreground font-sans pb-8">
      <section className="relative flex flex-col items-center justify-center py-24 text-center px-4 bg-cream">
        <p className="text-xs md:text-sm font-sans tracking-[0.2em] uppercase text-terracotta mb-4">
          Brand Identity Guide
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-semibold text-primary mb-4">
          RIAD DAR TEN
        </h1>
        <p className="text-xl md:text-2xl font-accent italic text-secondary mb-8">
          &ldquo;Where Tradition Meets Tranquility&rdquo;
        </p>
        <p className="max-w-2xl text-lg text-muted-foreground mb-8">
          An intimate Moroccan sanctuary in the heart of Marrakech, where
          contemporary comfort meets timeless tradition.
        </p>
        <Link
          href="/book"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
        >
          Book Your Stay
        </Link>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-primary mb-8 text-center">
          Brand Colors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-terracotta text-white">
            <p className="font-bold">Terracotta Warmth</p>
            <p className="text-xs uppercase tracking-[0.16em] opacity-80">
              Primary
            </p>
            <p className="text-sm mt-1">#D4A574</p>
          </div>
          <div className="p-4 rounded-lg bg-desert-sand text-deep-spice">
            <p className="font-bold">Desert Sand</p>
            <p className="text-xs uppercase tracking-[0.16em] opacity-80">
              Neutral
            </p>
            <p className="text-sm mt-1">#E8D5C4</p>
          </div>
          <div className="p-4 rounded-lg bg-deep-spice text-white">
            <p className="font-bold">Deep Spice</p>
            <p className="text-xs uppercase tracking-[0.16em] opacity-80">
              Deep Neutral
            </p>
            <p className="text-sm mt-1">#8B4513</p>
          </div>
          <div className="p-4 rounded-lg bg-tadelakt-green text-white">
            <p className="font-bold">Tadelakt Green</p>
            <p className="text-xs uppercase tracking-[0.16em] opacity-80">
              Secondary
            </p>
            <p className="text-sm mt-1">#7FB8A5</p>
          </div>
          <div className="p-4 rounded-lg bg-midnight-blue text-white">
            <p className="font-bold">Midnight Blue</p>
            <p className="text-xs uppercase tracking-[0.16em] opacity-80">
              Foreground
            </p>
            <p className="text-sm mt-1">#1A2942</p>
          </div>
          <div className="p-4 rounded-lg bg-cream text-midnight-blue border border-gray-200">
            <p className="font-bold">Cream</p>
            <p className="text-xs uppercase tracking-[0.16em] opacity-80">
              Background
            </p>
            <p className="text-sm mt-1">#F5F1E8</p>
          </div>
          <div className="p-4 rounded-lg bg-saffron-gold text-midnight-blue">
            <p className="font-bold">Saffron Gold</p>
            <p className="text-xs uppercase tracking-[0.16em] opacity-80">
              Accent
            </p>
            <p className="text-sm mt-1">#F4C430</p>
          </div>
          <div className="p-4 rounded-lg bg-paprika-red text-white">
            <p className="font-bold">Paprika Red</p>
            <p className="text-xs uppercase tracking-[0.16em] opacity-80">
              Highlight Accent
            </p>
            <p className="text-sm mt-1">#C64B3C</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-white/50 rounded-xl">
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
            <p className="font-accent text-3xl italic text-primary mb-2">
              &ldquo;Escape to the Heart of Marrakech&rdquo;
            </p>
            <p className="text-sm text-muted-foreground">
              Used sparingly for accent phrases, pull quotes, and special
              headings.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
