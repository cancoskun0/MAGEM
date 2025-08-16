import Navbar from "../../navbar"
import ServicesGalleryStrapi from "../../components/services-gallery-strapi"

export default function HizmetlerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Ana içerik - navbar'ın altında başlaması için pt-36 eklendi */}
      <main className="pt-36">
        {/* Sayfa Başlığı */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">MAGEM Hizmetleri</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Güncel hizmetlerimiz ile tanışın.</p>
          </div>

          {/* Strapi Services Gallery */}
          <ServicesGalleryStrapi />
        </section>

        {/* İletişim Çağrısı */}
        <section className="bg-orange-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Hemen Başlayın!</h2>
            <p className="text-xl mb-8">
              İlginizi çeken bir program var mı? Hemen bizimle iletişime geçin ve kayıt olun.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
