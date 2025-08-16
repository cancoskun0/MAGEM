"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const servicesData = [
  {
    id: 1,
    src: "/images/services/steam-robotik.png",
    alt: "STEAM & Robotik Kodlama Atölyeleri",
    title: "STEAM & Robotik Kodlama",
    instructor: "Eğitmen Mustafa Kemal Ambar",
    location: "MAGEM Maraş",
    schedule: "Her Salı 14:00-16:00",
    age: "6-12 Yaş",
    price: "2500 TL",
  },
  {
    id: 2,
    src: "/images/services/tango-dersleri.png",
    alt: "Tango Dersleri",
    title: "Tango Dersleri",
    instructor: "Eğitmen Hasan Soner Özsen",
    location: "MAGEM Maraş",
    schedule: "Her Pazartesi 18:00-19:00",
    age: "15+ Yaş",
    price: "1500 TL",
  },
  {
    id: 3,
    src: "/images/services/gorsel-sanatlar.png",
    alt: "Görsel Sanatlar Programı",
    title: "Görsel Sanatlar Programı",
    instructor: "Çelen Alibeyoğlu",
    location: "MAGEM Sakarya",
    schedule: "Her Çarşamba 16:00-17:00",
    age: "4-8 Yaş",
    price: "1250 TL",
  },
  {
    id: 4,
    src: "/images/services/temel-tiyatro.jpg",
    alt: "Temel Tiyatro Eğitimi",
    title: "Temel Tiyatro Eğitimi",
    instructor: "Şenay Karaaslan",
    location: "MAGEM Sakarya",
    schedule: "Her Cumartesi 15:30",
    age: "16+ Yaş",
    price: "2000 TL",
  },
  {
    id: 5,
    src: "/images/services/yaratici-drama.png",
    alt: "Yaratıcı Drama ve Tiyatro Eğitimleri",
    title: "Yaratıcı Drama ve Tiyatro",
    instructor: "Eğitmen Hanife Tayyareci",
    location: "MAGEM Maraş",
    schedule: "Her Cuma 15:30",
    age: "4+ Yaş",
    price: "2000 TL",
  },
  {
    id: 6,
    src: "/images/services/bilardo-egitimleri.jpg",
    alt: "Bilardo Eğitimleri",
    title: "Bilardo Eğitimleri",
    instructor: "Eğitmen Mehmet Şanlışoy",
    location: "MAGEM Maraş",
    schedule: "Her Cumartesi 09:00-11:00",
    age: "8+ Yaş",
    price: "2000 TL",
  },
  {
    id: 7,
    src: "/images/services/robotik-kodlama.jpg",
    alt: "AVDESO Academy Robotik Kodlama Workshop",
    title: "Robotik Kodlama Workshop",
    instructor: "Eğitmen Berk Akgüç",
    location: "MAGEM Sakarya",
    schedule: "1-10 Temmuz",
    age: "Ortaokul-Lise-Yetişkin",
    price: "4000 TL",
  },
  {
    id: 8,
    src: "/images/services/suluboya-atolyesi.jpg",
    alt: "Suluboya Atölyesi",
    title: "Suluboya Atölyesi",
    instructor: "Gülşen Şafaklı Öztüren",
    location: "MAGEM Sakarya",
    schedule: "17 Haziran Salı 13:00-14:00",
    age: "3-5 Yaş",
    price: "400 TL",
  },
]

export default function ServicesGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % servicesData.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + servicesData.length) % servicesData.length)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
  }

  return (
    <>
      {/* Services Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => openLightbox(index)}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
              <div className="aspect-[4/5] relative">
                <Image
                  src={service.src || "/placeholder.svg"}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <p className="text-sm font-medium">Detayları görmek için tıklayın</p>
                  </div>
                </div>
              </div>

              {/* Service Info */}
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{service.title}</h3>
                {/* Diğer bilgiler kaldırıldı */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20 z-10"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20 z-10"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          {/* Image Container */}
          <div
            className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={servicesData[selectedImage].src || "/placeholder.svg"}
                alt={servicesData[selectedImage].alt}
                width={800}
                height={1000}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
            {selectedImage + 1} / {servicesData.length}
          </div>
        </div>
      )}
    </>
  )
}
