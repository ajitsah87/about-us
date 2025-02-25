import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, GraduationCap, Rocket } from "lucide-react";
import Image from "next/image";

export default function BehindUs() {
  return (
    <div className="px-8 py-12 mb-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-24">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-3">
              The{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 text-transparent bg-clip-text">
                Story
              </span>{" "}
              Behind Us
            </h1>
            <p className="text-gray-600 text-md mb-6">
              It all started with one question: What if hiring didn't have to
              feel like gambling on a hunch?
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-3 shadow-sm bg-gradient-4 hover:bg-gradient-5 relative  text-black 
          before:absolute before:-inset-[2px] before:rounded-lg before:bg-gradient-to-r 
          before:from-purple-500 before:to-orange-500 before:opacity-0 before:transition-opacity
          hover:before:opacity-100 before:-z-10
          after:absolute after:-inset-[2.5px] after:rounded-lg after:bg-gradient-to-r 
          after:from-purple-500 after:to-orange-500 after:opacity-0 after:blur-sm after:transition-opacity
          hover:after:opacity-50 after:-z-20">
                <CardContent className="p-0">
                  <Brain className="w-6 h-6 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
                  <p className="text-gray-500 text-base">
                    Advanced AI/ML algorithms for precise matching
                  </p>
                </CardContent>
              </Card>
              <Card className="p-3 shadow-sm bg-gradient-4 hover:bg-gradient-5 relative  text-black 
          before:absolute before:-inset-[2px] before:rounded-lg before:bg-gradient-to-r 
          before:from-purple-500 before:to-orange-500 before:opacity-0 before:transition-opacity
          hover:before:opacity-100 before:-z-10
          after:absolute after:-inset-[2.5px] after:rounded-lg after:bg-gradient-to-r 
          after:from-purple-500 after:to-orange-500 after:opacity-0 after:blur-sm after:transition-opacity
          hover:after:opacity-50 after:-z-20">
                <CardContent className="p-0">
                  <Users className="w-6 h-6 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Human-Centric</h3>
                  <p className="text-gray-500 text-base">
                    Built by recruiters, for recruiters
                  </p>
                </CardContent>
              </Card>

              <Card className="p-3 shadow-sm bg-gradient-4 hover:bg-gradient-5 relative  text-black 
          before:absolute before:-inset-[2px] before:rounded-lg before:bg-gradient-to-r 
          before:from-purple-500 before:to-orange-500 before:opacity-0 before:transition-opacity
          hover:before:opacity-100 before:-z-10
          after:absolute after:-inset-[2.5px] after:rounded-lg after:bg-gradient-to-r 
          after:from-purple-500 after:to-orange-500 after:opacity-0 after:blur-sm after:transition-opacity
          hover:after:opacity-50 after:-z-20">
                <CardContent className="p-0">
                  <GraduationCap className="w-6 h-6 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Skill Assessment
                  </h3>
                  <p className="text-gray-500 text-base">
                    Comprehensive skill evaluation system
                  </p>
                </CardContent>
              </Card>

              <Card className="p-3 shadow-sm bg-gradient-4 hover:bg-gradient-5 relative  text-black 
          before:absolute before:-inset-[2px] before:rounded-lg before:bg-gradient-to-r 
          before:from-purple-500 before:to-orange-500 before:opacity-0 before:transition-opacity
          hover:before:opacity-100 before:-z-10
          after:absolute after:-inset-[2.5px] after:rounded-lg after:bg-gradient-to-r 
          after:from-purple-500 after:to-orange-500 after:opacity-0 after:blur-sm after:transition-opacity
          hover:after:opacity-50 after:-z-20">
                <CardContent className="p-0">
                  <Rocket className="w-6 h-6 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Future-Ready</h3>
                  <p className="text-gray-500 text-base">
                    Constantly evolving with industry needs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex-1">
            <Image
              src="/our-story.svg"
              alt="Team collaboration"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
