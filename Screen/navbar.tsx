import Link from "next/link";
import { ChevronDown, ArrowRight, Sun,  ChevronRight, AlignJustify } from "lucide-react";
import {Button} from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="flex justify-between mx-auto py-1 px-3 z-50 max-w-[1400px] fixed top-0 left-0 right-0 max-lg:bg-gray-200 max-lg:w-full">
      <div className="flex items-center space-x-1  h-10 backdrop-blur-[30px] max-lg:backdrop-blur-none max-lg:bg-white shadow-sm border-gray-300 border-[2px] rounded-lg  max-lg:hidden ">
        
       
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
      <div className="shadow-sm bg-white border-gray-300 border-[2px] rounded-lg flex items-center space-x-2 px-4 max-lg:flex lg:hidden">
  <Link href="/" className="">
    <img src="/logo.png" alt="Logo" className="h-8 w-8" />
  </Link>
  <h2 className="font-medium">Everything Talent</h2>
</div>
      <div className="flex items-center gap-2 h-10 backdrop-blur-[30px] max-lg:backdrop-blur-none shadow-sm max-md:shadow-none border-gray-300 max-md:border-none border-[2px] rounded-lg ml-auto max-md:bg-gray-200 ">
  <Button variant="outline" className=" py-2 px-3 bg-white relative text-black 
    before:absolute before:-inset-[2px] before:rounded-lg before:bg-gradient-to-r 
    before:from-purple-500 before:to-orange-500 before:opacity-0 before:transition-opacity
    hover:before:opacity-100 before:-z-10
    after:absolute after:-inset-[2.5px] after:rounded-lg after:bg-gradient-to-r 
    after:from-purple-500 after:to-orange-500 after:opacity-0 after:blur-md after:transition-opacity
    hover:after:opacity-50 after:-z-20 max-md:hidden ">
    Request a Demo <ChevronRight className="ml-2 h-4 w-4" />
  </Button>
  <Button variant="ghost" size="icon" className="rounded-full text-gray-600 max-md:rounded-none max-md:text-black max-md:hover:text-black max-md:hover:bg-gray-200">
    <Sun className="h-6 w-6" />
  </Button>
  <Button variant="outline" className="py-2 px-3 bg-white  relative text-black 
    before:absolute before:-inset-[2px] before:rounded-lg before:bg-gradient-to-r 
    before:from-purple-500 before:to-orange-500 before:opacity-0 before:transition-opacity
    hover:before:opacity-100 before:-z-10
    after:absolute after:-inset-[2.5px] after:rounded-lg after:bg-gradient-to-r 
    after:from-purple-500 after:to-orange-500 after:opacity-0 after:blur-md after:transition-opacity
    hover:after:opacity-50 after:-z-20 max-lg:hidden">
    Login <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
 
</div>
<div>
      <Sheet>
        <SheetTrigger asChild>
          <div className="text-black rounded-lg mt-2 ml-2  max-lg:block hidden cursor-pointer">
            <AlignJustify className="w-6 h-6" />
          </div>
        </SheetTrigger>
        <SheetContent side="top" className="text-black">
          <div className="flex items-center space-x-3 border-[2px] border-gray-200 rounded-lg shadow-sm py-1 px-2 w-60 bg-[#edf1f6]">
            <span>
              <img src="/logo.png" alt="Logo" className="h-8 w-8 " />
            </span>
          <span className="text-xl font-bold ">Everything Talent</span>
          </div>
          <ul className="mt-4 space-y-2 mb-2">
            <li><a href="#" className="block text-lg font-normal ">Home</a></li>
            <li><a href="#" className="block text-lg font-normal ">Product</a></li>
            <li><a href="#" className="block text-lg font-normal ">Pricing</a></li>
            <li><a href="#" className="block text-lg font-normal ">Blog</a></li>
            <li><a href="#" className="block text-lg font-normal ">Support</a></li>
            <li><a href="#" className="block text-lg font-normal ">About</a></li>
          </ul>
          <Button variant="outline" className="py-2 px-3 w-full  bg-white  relative text-black 
    before:absolute before:-inset-[2px] before:rounded-lg before:bg-gradient-to-r 
    before:from-purple-500 before:to-orange-500 before:opacity-0 before:transition-opacity
    hover:before:opacity-100 before:-z-10
    after:absolute after:-inset-[2.5px] after:rounded-lg after:bg-gradient-to-r 
    after:from-purple-500 after:to-orange-500 after:opacity-0 after:blur-md after:transition-opacity
    hover:after:opacity-50 after:-z-20 ">
    Login <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
        </SheetContent>
      </Sheet>
    </div>
    </nav>
  );
};

export default Navbar;