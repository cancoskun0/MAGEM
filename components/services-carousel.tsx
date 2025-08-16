"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const servicesImages = [
  {
    src: "/images/services/a8.jpg",
    alt: "Sanat Atölyesi - Resim ve Boyama",
    title: "Sanat Atölyesi",
  },
  {
    src: "/images/services/a6.jpg",
    alt: "Halk Oyunları ve Dans",
    title: "Halk Oyunları",
  },
  {
    src: "/images/services/a4.jpg",
    alt: "El Sanatları - Örgü ve Dokuma",
    title: "El Sanatları",
  },
  {
    src: "/images/services/a2.jpg",
    alt: "Teknoloji - Programlama",
    title: "Programlama",
  },
  {
    src: "/images/services/a7-1.jpg",
    alt: "Geleneksel El Sanatları - Sepet Örme",
    title: "Sepet Örme",
  },
  {
    src: "/images/services/a1.jpg",
    alt: "Teknoloji - Robotik ve Elektronik",
    title: "Robotik",
  },
  {
    src: "/images/services/a3.jpg",
    alt: "Kişisel Gelişim - Yoga ve Meditasyon",
    title: "Yoga",
  },
  {
    src: "/images/services/a5.jpg",
    alt: "Zihinsel Gelişim - Satranç",
    title: "Satranç",
  },
]

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Client-side window size detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Mobilde 3, masaüstünde 4 görsel göster
  const itemsPerView = 4
  const mobileItemsPerView = 3
  const maxIndex = servicesImages.length - itemsPerView
  const maxMobileIndex = servicesImages.length - mobileItemsPerView

  // Otomatik geçiş - 15 saniye
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const max = isMobile ? maxMobileIndex : maxIndex
        return (prev + 1) % (max + 1)
      })
    }, 15000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex, maxMobileIndex, isMobile])

  const nextSlide = () => {
    const max = isMobile ? maxMobileIndex : maxIndex
    setCurrentIndex((prev) => (prev + 1) % (max + 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 30000)
  }

  const prevSlide = () => {
    const max = isMobile ? maxMobileIndex : maxIndex
    setCurrentIndex((prev) => (prev - 1 + (max + 1)) % (max + 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 30000)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / (isMobile ? mobileItemsPerView : itemsPerView))}%)`,
          }}
        >
          {servicesImages.map((image, index) => (
            <div key={index} className="w-1/3 md:w-1/4 flex-shrink-0 px-2">
              <div className="relative group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                    <div className="p-2 md:p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-xs md:text-sm">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 hover:text-orange-600 shadow-lg w-8 h-8 md:w-10 md:h-10 rounded-full"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 hover:text-orange-600 shadow-lg w-8 h-8 md:w-10 md:h-10 rounded-full"
        onClick={nextSlide}
        disabled={currentIndex === (isMobile ? maxMobileIndex : maxIndex)}
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 md:mt-6 space-x-1 md:space-x-2">
        {Array.from({ length: (isMobile ? maxMobileIndex : maxIndex) + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-orange-600 w-4 md:w-6" : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoPlaying(false)
              setTimeout(() => setIsAutoPlaying(true), 30000)
            }}
          />
        ))}
      </div>
    </div>
  )
}
