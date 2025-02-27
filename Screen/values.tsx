import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bot } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { people } from "@/components/demo";
const Values = () => {
  return (
    <>
      <div className="text-center leading-loose mb-4">
        <span className="text-md font-semibold bg-gradient-3 bg-clip-text text-transparent border-[1px]  rounded-2xl px-3 py-2">
          Our Values
        </span>
        <h1 className="mt-2 text-5xl font-bold text-gray-900">
          Our Philosophy in{" "}
          <span className="bg-gradient-2 bg-clip-text text-transparent">
            Action
          </span>
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          At Everything Talent, Bringing Our Values to Life Through Meaningful
          Actions
        </p>
      </div>
      <div className="p-8  mb-10">
        <div className="grid grid-cols-12 max-sm:grid-cols-1 max-md:grid gap-4 max-w-7xl mx-auto">
          <Card className="col-span-3 max-sm:col-span-1 bg-yellow-200 border-none ">
            <CardContent className="p-6">
              <span className="text-sm text-gray-700">01</span>
              <h3 className="text-xl font-bold mt-2 mb-4 text-[#655a1c]">
                With us, there are no surprises—just straight talk and genuine
                commitment.
              </h3>
              <span className="text-sm text-gray-700">#HONESTY</span>
            </CardContent>
          </Card>

          <Card className="col-span-6 max-sm:col-span-1 bg-purple-500 text-white border-none">
            <CardContent className="p-6">
              <span className="text-sm">03</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">
                We act with urgency to ensure progress and deliver results
                efficiently. Every moment matters.
              </h3>
              <div className="">
                <span className="text-sm">#URGENCY</span>
                <div className="flex -space-x-2 mt-2">
                  <AnimatedTooltip items={people} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3 max-sm:col-span-1 bg-orange-200 border-none">
            <CardContent className="p-6">
              <div className="">
                <Bot className="w-10 h-10" />
                <span className="text-md text-gray-900 font-medium">02</span>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-4">Embrace hard work</h3>
              <span className="text-sm text-gray-700">#HARDWORK</span>
            </CardContent>
          </Card>

          <Card className="col-span-6 max-sm:col-span-1 bg-lime-300 border-none">
            <CardContent className="p-6">
              <span className="text-sm text-gray-700">05</span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-[#3f6212]">
                We're here to help you aim higher, break limits, and achieve
                what others might think impossible.
              </h3>
              <span className="text-sm text-gray-700">#ASPIRATION</span>
            </CardContent>
          </Card>

          <Card className="col-span-6 max-sm:col-span-1 bg-gray-200 border-none">
            <CardContent className="p-6">
              <span className="text-sm text-gray-700">06</span>
              <h2 className="text-4xl font-bold mt-2 mb-4 ">
                <span className="text-gray-300">D</span>
                DO HARD THINGS
                <span className="text-gray-300">S</span>
              </h2>
              <span className="text-sm text-gray-700">#RESILIENT</span>
            </CardContent>
          </Card>

          <Card className="col-span-3 max-sm:col-span-1 bg-green-100 border-none">
            <CardContent className="p-6">
              <span className="text-sm text-gray-700">04</span>
              <h3 className="text-xl font-bold mt-2 mb-4">Grow 1% every day</h3>
              <span className="text-sm text-gray-700">#GROWTHMINDSET</span>
            </CardContent>
          </Card>

          <Card className="col-span-3 max-sm:col-span-1 bg-pink-200 border-none">
            <CardContent className="p-6">
              <span className="text-sm text-[#fda4af]">07</span>
              <h3 className="text-xl font-bold mt-2 mb-4 text-white">
                We value fresh ideas, bold solutions, and the freedom to imagine
                what's next.
              </h3>
              <span className="text-sm text-gray-700">#CREATIVITY</span>
            </CardContent>
          </Card>

          <Card className="col-span-6 max-sm:col-span-1 bg-blue-100 border-none">
            <CardContent className="p-6">
              <span className="text-sm text-gray-700">08</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">
                Commit to continuous learning and improvement
              </h3>
              <span className="text-sm text-gray-700">#LEARNING</span>
            </CardContent>
          </Card>

          <Card className="col-span-6 max-sm:col-span-1 bg-yellow-200 border-none">
            <CardContent className="p-6">
              <span className="text-sm text-gray-700">10</span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-[#625c26]">
                Every project, every solution we create is aimed at contributing
                to something greater.
              </h3>
              <span className="text-sm text-gray-700">#CONTRIBUTION</span>
            </CardContent>
          </Card>

          <Card className="col-span-6 max-sm:col-span-1 bg-[#f77c73] border-none">
            <CardContent className="p-6">
              <span className="text-sm text-gray-700">09</span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-white">
                Build trust through actions, not just words.
              </h3>
              <span className="text-sm text-gray-700">#TRUST</span>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Values;
