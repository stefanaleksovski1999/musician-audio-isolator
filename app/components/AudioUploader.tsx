"use client"

import { useState } from "react"
import IsolatedTracks from "./IsolatedTracks"

export default function AudioUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [isolatedTracks, setIsolatedTracks] = useState<string[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return

    // This is a placeholder for the actual file upload and processing
    // In a real application, you would send the file to a server for processing
    console.log("Uploading file:", file.name)

    // Simulating the isolation process
    setTimeout(() => {
      setIsolatedTracks([
        "/placeholder.svg?height=50&width=300",
        "/placeholder.svg?height=50&width=300",
        "/placeholder.svg?height=50&width=300",
      ])
    }, 2000)
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="audio-file" className="block text-sm font-medium text-gray-700 mb-2">
          Choose an audio file
        </label>
        <input
          type="file"
          id="audio-file"
          accept="audio/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>
      <button
        onClick={handleUpload}
        disabled={!file}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Upload and Isolate Tracks
      </button>
      {isolatedTracks.length > 0 && <IsolatedTracks tracks={isolatedTracks} />}
    </div>
  )
}

