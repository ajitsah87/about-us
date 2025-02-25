import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroPage() {
  return (
    <main className="w-full h-screen bg-white">
      <section className="mx-auto flex max-w-7xl h-full items-center px-8">
        <div className="flex-1 space-y-10">
          <p className="text-sm font-semibold uppercase text-gray-500">ABOUT US</p>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Shaping the Next Generation of HR <span className="bg-gradient-1 bg-clip-text text-transparent">Tech Recruitment.</span>
          </h1>
          <p className="max-w-lg text-gray-600 text-lg font-light">
            At Everything Talent, we help you launch your recruitment into a new dimension.
          </p>
          <Button className="flex items-center gap-2 text-md px-4 py-5 relative ">
            Start For Free Today
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="bg-gradient-2 flex-1  flex justify-center  aspect-square relative rounded-2xl">
        <div className="absolute inset-1  ">
          <Image
            src="/team.png"
            alt="Hero Image"
            className="rounded-2xl"
            fill
            />
        </div>
            </div>
      </section>
    </main>
  )
}
