import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { RoomDetail } from "@/components/rooms/RoomDetail"
import { getRoom, rooms } from "@/lib/rooms"

type RoomPageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }))
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const room = getRoom((await params).slug)
  if (!room) return {}

  return {
    title: `${room.name} Room | Riad Dar Ten`,
    description: `${room.tone}. Discover the ${room.name} double room at Riad Dar Ten in the Marrakech medina.`,
    openGraph: { images: [room.image] },
  }
}

export default async function RoomPage({ params }: RoomPageProps) {
  const room = getRoom((await params).slug)
  if (!room) notFound()

  return <RoomDetail room={room} />
}
