import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Journey = () => {
  return (
    <div className="text-center leading-loose mb-4">
      <span className="text-md bg-[#dfe0e1] font-semibold bg-gradient-3 bg-clip-text text-transparent border-[1px]  rounded-2xl px-3 py-2 ">
        Our Values & Milestones
      </span>
      <h1 className="my-6 text-5xl font-bold text-gray-900">
        Our{" "}
        <span className="bg-gradient-2 bg-clip-text text-transparent">{" "} Journey
        </span>
      </h1>
      <p className="mt-2 text-lg text-gray-600 text-center">
        Explore the milestones that have shaped our path to innovation, where
        every <br/> step brings us closer to transforming the future.
      </p>
      <Button
        className=" my-6 py-5 px-6 text-md
          relative bg-black text-white hover:bg-black
          before:absolute before:-inset-[2px] before:rounded-lg before:bg-gradient-to-r 
          before:from-purple-500 before:to-orange-500 before:opacity-0 before:transition-opacity
          hover:before:opacity-100 before:-z-10
          after:absolute after:-inset-[2.5px] after:rounded-lg after:bg-gradient-to-r 
          after:from-purple-500 after:to-orange-500 after:opacity-0 after:blur-md after:transition-opacity
          hover:after:opacity-50 after:-z-20
        "
      >
        Subscribe to Updates <Mail className="ml-2 h-4 w-4" />
      </Button>
    </div>
    
  );
};

export default Journey;
