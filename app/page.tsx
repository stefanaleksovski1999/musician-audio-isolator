import AudioUploader from "./components/AudioUploader"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to MusicIsolator</h1>
      <AudioUploader />
    </div>
  )
}

