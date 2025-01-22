import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MusicIsolator
        </Link>
        <div className="space-x-4">
          <Link href="/login" className="hover:underline">
            Login
          </Link>
          <Link href="/signup" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}

