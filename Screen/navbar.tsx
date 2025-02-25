import Link from "next/link";
import { ChevronDown, ArrowRight, Sun,  ChevronRight } from "lucide-react";
import {Button} from "@/components/ui/button"

const Navbar = () => {
  return (
    <nav className="flex justify-between mx-auto my-1 px-3 z-50 max-w-[1400px] fixed top-0 left-0 right-0">
      <div className="flex items-center space-x-1  h-10 backdrop-blur-[30px] shadow-sm border-gray-300 border-[2px] rounded-lg   ">
        
       
          <Link href="/" className="px-4 py-2" >
            <img src="/logo.png" alt="Logo" className="h
            -8 w-8" />
          </Link>
       <div className="w-[1px] h-6 mx-3 border-[1px]"></div>
        
        <div className="flex">
          <Link href="/" className="px-4 py-2 text-sm  text-black ">
            Home
          </Link>
          <Link href="/" className="px-4 py-2 text-sm  text-black ">
            Products
          </Link>
          <div className="px-4 py-2">
            <span className="flex items-center  text-sm  text-black">
              Solutions <ChevronDown className="ml-1 h-4 w-4" />
            </span>
          </div>
          <Link href="/" className=" px-4 py-2 text-sm  text-black ">
            Pricing
          </Link>
          <Link href="/" className="px-4 py-2 text-sm  text-black ">
            Blog
          </Link>
          <Link href="/" className="px-4 py-2 text-sm  text-black ">
            Support
          </Link>
          <Link href="/" className="px-4 py-2 text-sm  text-purple-600 ">
            About
          </Link>
        </div>
      </div>
        
     
        <div className="flex items-center gap-2 h-10 backdrop-blur-[30px] shadow-sm border-gray-300 border-[2px] rounded-lg">
          <Button variant="outline" className=" py-2 px-3 bg-white relative  text-black 
          before:absolute before:-inset-[2px] before:rounded-lg before:bg-gradient-to-r 
          before:from-purple-500 before:to-orange-500 before:opacity-0 before:transition-opacity
          hover:before:opacity-100 before:-z-10
          after:absolute after:-inset-[2.5px] after:rounded-lg after:bg-gradient-to-r 
          after:from-purple-500 after:to-orange-500 after:opacity-0 after:blur-md after:transition-opacity
          hover:after:opacity-50 after:-z-20">
            Request a Demo <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full text-gray-600">
            <Sun className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="py-2 px-3 bg-white  relative  text-black 
          before:absolute before:-inset-[2px] before:rounded-lg before:bg-gradient-to-r 
          before:from-purple-500 before:to-orange-500 before:opacity-0 before:transition-opacity
          hover:before:opacity-100 before:-z-10
          after:absolute after:-inset-[2.5px] after:rounded-lg after:bg-gradient-to-r 
          after:from-purple-500 after:to-orange-500 after:opacity-0 after:blur-md after:transition-opacity
          hover:after:opacity-50 after:-z-20">
            Login <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
    </nav>
  );
};

export default Navbar;