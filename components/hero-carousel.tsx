"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "/images/mga-maras.jpg",
    alt: "MGA Maraş Binası",
  },
  {
    src: "/images/magem-sakarya.jpg",
    alt: "MAGEM Sakarya Binası",
  },
]

const titleWords = ["Gelişimin", "ve", "Yaratıcılığın", "Merkezi"]

export default function HeroCarousel() {
  const [currentImage, setCurrentImage] = useState(0)
  const [visibleWords, setVisibleWords] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) // Bileşen istemcide yüklendiğinde true yap
  }, [])

  // Otomatik geçiş - 15 saniye
  useEffect(() => {
    if (!isClient) return // Sadece istemcide ve hydration sonrası çalıştır
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
      setVisibleWords(0) // Yeni resim geldiğinde yazıları sıfırla
    }, 15000)

    return () => clearInterval(interval)
  }, [isClient])

  // Kelime animasyonu
  useEffect(() => {
    if (!isClient) return // Sadece istemcide ve hydration sonrası çalıştır
    setVisibleWords(0)
    const wordInterval = setInterval(() => {
      setVisibleWords((prev) => {
        if (prev < titleWords.length) {
          return prev + 1
        }
        clearInterval(wordInterval)
        return prev
      })
    }, 500)

    return () => clearInterval(wordInterval)
  }, [currentImage, isClient])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
    setVisibleWords(0)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
    setVisibleWords(0)
  }

  const goToImage = (index: number) => {
    setCurrentImage(index)
    setVisibleWords(0)
  }

  return (
    <div className="relative w-full h-[60vh] md:h-screen overflow-hidden">
      {/* Resim Carousel */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* İçerik */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          {/* Ana Başlık - Kelime kelime animasyon */}
          <h1 className="text-3xl md:text-6xl font-bold mb-4 min-h-[80px] md:min-h-[120px] flex flex-wrap justify-center items-center gap-2 md:gap-4">
            {titleWords.map((word, index) => (
              <span
                key={index}
                className={`transition-all duration-500 transform ${
                  isClient && index < visibleWords ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Alt Metin */}
          <p
            className={`text-base md:text-xl mb-6 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-2000 ${
              isClient && visibleWords === titleWords.length ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Gazimağusa Belediyesi'ne bağlı MAGEM'de her yaşa uygun atölyeler, sanat programları ve gelişim
            etkinlikleriyle siz de geleceğe bir adım atın!
          </p>
        </div>
      </div>

      {/* Navigasyon Okları */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20 w-8 h-8 md:w-12 md:h-12"
        onClick={prevImage}
      >
        <ChevronLeft className="w-4 h-4 md:w-8 md:h-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20 w-8 h-8 md:w-12 md:h-12"
        onClick={nextImage}
      >
        <ChevronRight className="w-4 h-4 md:w-8 md:h-8" />
      </Button>

      {/* Nokta İndikatörleri */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-white scale-125" : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  )
}
