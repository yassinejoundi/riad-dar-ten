import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPinOff } from "lucide-react"

export default function NotFound() {
  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/not-found/not-found-background.png"
          alt="Lost in Medina"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-terracotta mb-8 border border-white/20">
          <MapPinOff size={48} />
        </div>

        <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 drop-shadow-md">
          Lost in the Medina?
        </h1>

        <div className="w-24 h-1 bg-terracotta mx-auto mb-8" />

        <p className="text-gray-100 font-sans text-lg md:text-xl max-w-md mx-auto mb-10 leading-relaxed drop-shadow-sm">
          The page you are looking for seems to have wandered off. Let’s get you
          back to the comfort of our riad.
        </p>

        <Button
          asChild
          className="bg-terracotta text-white hover:bg-terracotta/90 px-8 py-6 text-lg font-sans tracking-wide border-none"
        >
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}
