import Link from "next/link"

export default function NotFound() {
    return (
        <div className="bg-black text-white w-screen h-screen flex flex-col items-center justify-center">
            <div className="bg-white h-20 w-20 rounded-full mb-4 animate-bounce"></div>
            <h1 className="text-3xl font-bold">404 Page not found</h1>
            <Link href={"/"} className="mt-6 py-2 px-8 rounded-xl bg-white opacity-50 hover:opacity-80 text-black font-semibold transition-all">Home</ Link>
        </div>
    )
}