import { Card, CardContent } from "@/components/ui/card"
import { div } from "framer-motion/client"
import { Users2, Lightbulb, Rocket, TrendingUp, Star, Award } from "lucide-react"
import Image from "next/image"

export default function Thrive() {
  return (
    <div className="flex  items-center justify-center  mx-auto  max-w-7xl gap-6 mb-10">

   
    <div className="flex-1 ">
               <Image
                 src="/thive.webp"
                 alt="Team collaboration"
                 width={526}
                 height={500}
                 className="rounded-lg shadow-lg hover:scale-105 transform transition duration-500 ease-in-out"
               />   
               </div>
    <div className=" px-4 py-12 flex-1">
      <h1 className="text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-[#E535AB] via-[#4B9CD3] to-[#99B898] bg-clip-text text-transparent">
          How We Thrive
        </span>
      </h1>

      <p className="text-lg text-gray-600 mb-8 max-w-3xl">
        At Everything Talent, we break the norm. Driven by community, we empower individuals to innovate, learn, and
        push boundaries—fostering shared growth and a relentless pursuit of excellence.
      </p>

      <div className="grid grid-cols-2 gap-5">
        <Card className="p-6 shadow-lg bg-gradient-4 hover:bg-gradient-5 relative  text-black 
          before:absolute before:-inset-[2px] before:rounded-lg before:bg-gradient-to-r 
          before:from-purple-500 before:to-orange-500 before:opacity-0 before:transition-opacity
          hover:before:opacity-100 before:-z-10
          after:absolute after:-inset-[2.5px] after:rounded-lg after:bg-gradient-to-r 
          after:from-purple-500 after:to-orange-500 after:opacity-0 after:blur-sm after:transition-opacity
          hover:after:opacity-50 after:-z-20">
          <CardContent className="p-0">
            <Users2 className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Community-Driven</h3>
            <p className="text-gray-600 text-md">We build strong connections and foster collaboration within our team.</p>
          </CardContent>
        </Card>

        <Card className="p-6 shadow-lg bg-gradient-4 hover:bg-gradient-5 relative  text-black 
          before:absolute before:-inset-[2px] before:rounded-lg before:bg-gradient-to-r 
          before:from-purple-500 before:to-orange-500 before:opacity-0 before:transition-opacity
          hover:before:opacity-100 before:-z-10
          after:absolute after:-inset-[2.5px] after:rounded-lg after:bg-gradient-to-r 
          after:from-purple-500 after:to-orange-500 after:opacity-0 after:blur-sm after:transition-opacity
          hover:after:opacity-50 after:-z-20">
          <CardContent className="p-0">
            <Lightbulb className="h-7 w-7 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Innovation First</h3>
            <p className="text-gray-600 text-md">We encourage creative thinking and novel approaches to challenges.</p>
          </CardContent>
        </Card>

        <Card className="p-6 shadow-lg bg-gradient-4 hover:bg-gradient-5 relative  text-black 
          before:absolute before:-inset-[2px] before:rounded-lg before:bg-gradient-to-r 
          before:from-purple-500 before:to-orange-500 before:opacity-0 before:transition-opacity
          hover:before:opacity-100 before:-z-10
          after:absolute after:-inset-[2.5px] after:rounded-lg after:bg-gradient-to-r 
          after:from-purple-500 after:to-orange-500 after:opacity-0 after:blur-sm after:transition-opacity
          hover:after:opacity-50 after:-z-20">
          <CardContent className="p-0">
            <Rocket className="h-7 w-7 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Action Oriented</h3>
            <p className="text-gray-600 text-md">We transform ideas into tangible results through decisive action.</p>
          </CardContent>
        </Card>

        <Card className="p-6 shadow-lg bg-gradient-4 hover:bg-gradient-5 relative  text-black 
          before:absolute before:-inset-[2px] before:rounded-lg before:bg-gradient-to-r 
          before:from-purple-500 before:to-orange-500 before:opacity-0 before:transition-opacity
          hover:before:opacity-100 before:-z-10
          after:absolute after:-inset-[2.5px] after:rounded-lg after:bg-gradient-to-r 
          after:from-purple-500 after:to-orange-500 after:opacity-0 after:blur-sm after:transition-opacity
          hover:after:opacity-50 after:-z-20">
          <CardContent className="p-0">
            <TrendingUp className="h-7 w-7 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Continuous Growth</h3>
            <p className="text-gray-600 text-md">We embrace learning and development as core principles.</p>
          </CardContent>
        </Card>

        <Card className="p-6 shadow-lg bg-gradient-4 hover:bg-gradient-5 relative  text-black 
          before:absolute before:-inset-[2px] before:rounded-lg before:bg-gradient-to-r 
          before:from-purple-500 before:to-orange-500 before:opacity-0 before:transition-opacity
          hover:before:opacity-100 before:-z-10
          after:absolute after:-inset-[2.5px] after:rounded-lg after:bg-gradient-to-r 
          after:from-purple-500 after:to-orange-500 after:opacity-0 after:blur-sm after:transition-opacity
          hover:after:opacity-50 after:-z-20">
          <CardContent className="p-0">
            <Star className="h-7 w-7 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Excellence Pursuit</h3>
            <p className="text-gray-600 text-md">We strive for exceptional quality in everything we do.</p>
          </CardContent>
        </Card>

        <Card className="p-6 shadow-lg bg-gradient-4 hover:bg-gradient-5 relative  text-black 
          before:absolute before:-inset-[2px] before:rounded-lg before:bg-gradient-to-r 
          before:from-purple-500 before:to-orange-500 before:opacity-0 before:transition-opacity
          hover:before:opacity-100 before:-z-10
          after:absolute after:-inset-[2.5px] after:rounded-lg after:bg-gradient-to-r 
          after:from-purple-500 after:to-orange-500 after:opacity-0 after:blur-sm after:transition-opacity
          hover:after:opacity-50 after:-z-20">
          <CardContent className="p-0">
            <Award className="h-7 w-7 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Shared Success</h3>
            <p className="text-gray-600 text-md">We celebrate achievements and grow together as one team.</p>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  )
}

