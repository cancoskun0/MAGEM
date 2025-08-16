"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Strapi'den gelen veri tipi
interface StrapiService {
  id: number
  documentId: string
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  image: {
    id: number
    documentId: string
    name: string
    alternativeText: string | null
    caption: string | null
    width: number
    height: number
    formats: any
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

interface StrapiResponse {
  data: StrapiService[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export default function ServicesGalleryStrapi() {
  const [services, setServices] = useState<StrapiService[]>([])
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Strapi'den veri çekme
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://magem-strapi-backend.onrender.com/api/services?populate=*")
        if (!response.ok) {
          throw new Error("Hizmetler yüklenemedi")
        }
        const data: StrapiResponse = await response.json()
        setServices(data.data)
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bir hata oluştu")
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

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
      setSelectedImage((selectedImage + 1) % services.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + services.length) % services.length)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-lg text-gray-600">Hizmetler yükleniyor...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-lg text-red-600">Hata: {error}</div>
      </div>
    )
  }

  if (services.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-lg text-gray-600">Henüz hizmet eklenmemiş.</div>
      </div>
    )
  }

  return (
    <>
      {/* Services Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => openLightbox(index)}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
              <div className="aspect-[4/5] relative">
                <Image
                  src={`https://magem-strapi-backend.onrender.com${service.image.url}`}
                  alt={service.image.alternativeText || service.title}
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
                src={`https://magem-strapi-backend.onrender.com${services[selectedImage].image.url}`}
                alt={services[selectedImage].image.alternativeText || services[selectedImage].title}
                width={800}
                height={1000}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
            {selectedImage + 1} / {services.length}
          </div>
        </div>
      )}
    </>
  )
}
