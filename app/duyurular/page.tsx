"use client"

import { useState, useEffect } from "react"
import Navbar from "../../navbar"
import AnnouncementCarouselStrapi from "../../components/announcement-carousel-strapi"
import { Calendar, MapPin, Users } from "lucide-react"

// Strapi'den gelen veri tipi
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

interface StrapiResponse {
  data: StrapiAnnouncement[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

// Rich text content'i düz metne çeviren fonksiyon
function extractTextFromContent(content: any[]): string {
  if (!content || !Array.isArray(content)) return ""

  return content
    .map((block) => {
      if (block.children && Array.isArray(block.children)) {
        return block.children.map((child: any) => child.text || "").join("")
      }
      return ""
    })
    .join("\n\n")
}

export default function DuyurularPage() {
  const [announcements, setAnnouncements] = useState<StrapiAnnouncement[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Client-side data fetching
  useEffect(() => {
    const getAnnouncements = async () => {
      try {
        const response = await fetch(
          "https://magem-strapi-backend.onrender.com/api/announcements?populate=*&filters[isActive][$eq]=true",
          {
            cache: "no-store",
          },
        )

        if (!response.ok) {
          throw new Error("Duyurular yüklenemedi")
        }

        const data: StrapiResponse = await response.json()
        setAnnouncements(data.data)
        setLoading(false)
      } catch (error) {
        console.error("Duyurular yüklenirken hata:", error)
        setError("Duyurular yüklenirken bir hata oluştu")
        setLoading(false)
      }
    }

    getAnnouncements()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Ana içerik - navbar'ın altında başlaması için pt-36 eklendi */}
      <main className="pt-36">
        {/* Sayfa Başlığı */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">MAGEM Duyuruları</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MAGEM'den en güncel haberler, etkinlikler ve duyurular
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Duyurular yükleniyor...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-xl text-red-600">{error}</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && announcements.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Henüz duyuru bulunmuyor.</p>
            </div>
          )}

          {/* Duyuru İçerikleri */}
          {!loading && !error && announcements.length > 0 && (
            <div className="space-y-16">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Sol Taraf - Fotoğraf Carousel */}
                    <div className="relative h-96 lg:h-[600px]">
                      <AnnouncementCarouselStrapi announcement={announcement} />
                    </div>

                    {/* Sağ Taraf - Duyuru Metni */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      {/* Duyuru Başlığı */}
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                        {announcement.title}
                      </h2>

                      {/* Duyuru Bilgileri */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                        {announcement.date && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-orange-600" />
                            <span>{announcement.date}</span>
                          </div>
                        )}
                        {announcement.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-orange-600" />
                            <span>{announcement.location}</span>
                          </div>
                        )}
                        {announcement.category && (
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-orange-600" />
                            <span>{announcement.category}</span>
                          </div>
                        )}
                      </div>

                      {/* Duyuru İçeriği */}
                      <div className="text-gray-700 leading-relaxed space-y-4">
                        {extractTextFromContent(announcement.content)
                          .split("\n\n")
                          .map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
