"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StrapiImage {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  url: string
}

interface StrapiAnnouncement {
  id: number
  documentId: string
  title: string
  content: Array<{
    type: string
    children: Array<{
      type: string
      text: string
    }>
  }>
  date: string | null
  location: string | null
  category: string | null
  isActive: boolean
  createdAt: string
  updatedAt: string
  publishedAt: string
  images: StrapiImage[]
}

interface AnnouncementCarouselProps {
  announcement: StrapiAnnouncement
}

export default function AnnouncementCarouselStrapi({ announcement }: AnnouncementCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const images = announcement.images || []

  // Otomatik geçiş - 10 saniye
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 30000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 30000)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 30000)
  }

  if (images.length === 0) {
    return (
      <div className="relative w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
        <p className="text-gray-500">Görsel bulunamadı</p>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      {/* Carousel Container */}
      <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={image.id} className="w-full h-full flex-shrink-0 relative">
              <Image
                src={`https://magem-strapi-backend.onrender.com${image.url}`}
                alt={image.alternativeText || `${announcement.title} - Görsel ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 hover:text-orange-600 shadow-lg w-10 h-10 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 hover:text-orange-600 shadow-lg w-10 h-10 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-orange-600 w-6" : "bg-white bg-opacity-70 hover:bg-opacity-100"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
