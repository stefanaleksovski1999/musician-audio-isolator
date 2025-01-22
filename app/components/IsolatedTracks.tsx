import Image from "next/image"

interface IsolatedTracksProps {
  tracks: string[]
}

export default function IsolatedTracks({ tracks }: IsolatedTracksProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Isolated Tracks</h2>
      <div className="space-y-4">
        {tracks.map((track, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded">
            <Image
              src={track || "/placeholder.svg"}
              alt={`Isolated Track ${index + 1}`}
              width={300}
              height={50}
              className="w-full"
            />
            <p className="mt-2 text-center">Track {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

