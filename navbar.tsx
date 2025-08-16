"use client"

import { Menu, X, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const menuItems = [
  { name: "Anasayfa", href: "/" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Duyurular", href: "/duyurular" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "İletişim", href: "/iletisim" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white shadow-md border-b border-gray-100 max-w-8xl mx-auto">
      <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-32">
        {/* Logo - Masaüstünde sağa kaydırıldı */}
        <div className="flex-shrink-0 md:ml-16">
          {" "}
          {/* md:ml-16 eklendi */}
          <Link
            href="/"
            onClick={scrollToTop}
            className="flex items-center hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          >
            <Image src="/logo.jpg" alt="MAGEM Logo" width={150} height={150} className="h-20 w-auto md:h-24" priority />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={scrollToTop}
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-lg font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md flex items-center"
              >
                {item.name}
              </Link>
            ))}
            {/* Sosyal Medya İkonları */}
            <div className="flex items-center space-x-4 ml-8">
              <a
                href="https://www.facebook.com/gelisimmerkezimagusa/?locale=tr_TR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Sayfamız"
                className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/gelisimmerkezimagusa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Sayfamız"
                className="flex items-center justify-center h-8 w-8 rounded-md bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 text-white hover:scale-105 transition-transform duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-700">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menüyü aç</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-white text-gray-700 p-0 [&>button]:hidden">
              {/* Header - Logo ve kapatma butonu */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                {/* MAGEM Logosu */}
                <Link
                  href="/"
                  onClick={() => {
                    setIsOpen(false)
                    scrollToTop()
                  }}
                  className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                >
                  <Image src="/logo.jpg" alt="MAGEM Logo" width={100} height={100} className="h-14 w-auto" />
                </Link>

                {/* Kapatma Butonu */}
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-gray-700">
                  <X className="h-6 w-6" />
                  <span className="sr-only">Menüyü kapat</span>
                </Button>
              </div>

              {/* Menu Items - Sola hizalandı */}
              <div className="flex flex-col p-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false)
                      scrollToTop()
                    }}
                    className="text-gray-700 hover:text-orange-600 py-4 text-xl font-medium transition-colors duration-200 text-left border-b border-gray-100 last:border-b-0"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Sosyal Medya İkonları - Sol alt köşe */}
                <div className="flex justify-start space-x-4 mt-8 pt-6 border-t border-gray-100">
                  <a
                    href="https://www.facebook.com/gelisimmerkezimagusa/?locale=tr_TR"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Sayfamız"
                    className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/gelisimmerkezimagusa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Sayfamız"
                    className="flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 text-white hover:scale-105 transition-transform duration-200"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
