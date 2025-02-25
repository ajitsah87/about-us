import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container py-12">
        <div className="grid  gap-8 lg:grid-cols-4 max-w-6xl mx-auto">
          <div className="space-y-4">
            <Image src="/logo.png" alt="Logo" width={48} height={48} className="mb-4" />
            <h3 className="text-xl font-bold">Everything Talent</h3>
            <p className="text-sm text-gray-400">
              Enhancing Hiring with AI-powered assessment and tracking for accurate recruitment
            </p>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">RESOURCES</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Hiring Guides
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">GET STARTED</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Hiring Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Funded Startups
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Free Trial
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Request Demo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Trust
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">LEGAL</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  CCPA Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <div className="relative h-32">
          <p className="mt-2 text-right mx-auto text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            EVERYTHINGTALENT.AI
          </p>
            <Image src="/City.png" alt="City Skyline" fill className="object-contain" />
          </div>
          <p className="mt-8 text-sm text-gray-400">© 2025 Everything Talent Labs, LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

