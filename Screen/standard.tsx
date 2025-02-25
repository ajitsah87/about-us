import { Tiles } from "@/lib/tiles"
import {  Sparkle  } from "lucide-react"
import Image from "next/image"

export default function Standard() {
  return (
    <main className=" w-full h-screen  mb-24 relative isolate">
      <div className="absolute inset-0 -z-10">
      <Tiles 
        rows={20} 
        cols={8}
        tileSize="md"
        className="size-full"
      />
      </div>
     
      <section className="mx-auto max-w-7xl px-8 py-12">
       
        <div className="text-center leading-loose">
          <span className="text-md font-semibold bg-gradient-3 bg-clip-text text-transparent border-[1px]  rounded-2xl px-3 py-2">Our Standards</span>
          <h1 className="mt-2 text-5xl font-bold text-gray-900">
            The Fuel for <span className="bg-gradient-2 bg-clip-text text-transparent">Our  Vision</span>
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Driven by vision, we provide comprehensive solutions to meet all your hiring needs.
          </p>
          
          <div className="mt-4 w-5/12 flex items-center justify-center text-center gap-9 gap-9border-[1px] rounded-full p-1 pl-11 bg-[#e9ecf5] mx-auto ">
            <span className="text-md text-gray-500">Ambition</span>
            <span className="text-md text-gray-500">Satisfaction</span>
            <span className="text-md text-gray-500">Integrity</span>
            <span className="text-md text-gray-500 bg-white px-10 py-2 rounded-3xl">Vigilance</span>
          </div>
        </div>

       
        <div className="mt-10 flex gap-8 rounded-lg bg-[#e9ecf5] p-10 py-20 shadow h-3/4">
      
          <div className="flex-1 leading-loose ">
            <h2 className="text-4xl font-semibold text-gray-900">Security-Driven Solutions</h2>
            <h3 className="mt-2 text-xl text-gray-700">Vigilance</h3>
            <p className="mt-4 text-md leading-snug text-gray-600">
              Confidence starts with security, and we are committed to strengthening your
              experience. Your security is woven into every part of our platform so you can
              drive forward without a second thought.
            </p>
            <ul className="mt-4 space-y-2 text-md text-gray-800">
  <li className="flex items-center space-x-2">
    <Sparkle className="h-4 w-4 text-[#a855f7]" />
    <span>Prioritize end-to-end platform security</span>
  </li>
  <li className="flex items-center space-x-2">
    <Sparkle className="h-4 w-4 text-[#a855f7]" />
    <span>Ensure protected recruitment experience</span>
  </li>
  <li className="flex items-center space-x-2">
    <Sparkle className="h-4 w-4 text-[#a855f7]" />
    <span>Build confidence through data protection</span>
  </li>
</ul>


          </div>

         
          <div className="flex-1 flex items-center justify-center">
           
            <Image
              src="/stand.png"
              alt="Security"
              width={600}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
