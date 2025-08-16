import Navbar from "../navbar"
import HeroCarousel from "../components/hero-carousel"
import ServicesCarousel from "../components/services-carousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Ana içerik - navbar'ın altında başlaması için pt-32 olarak güncellendi */}
      <main className="pt-32">
        <HeroCarousel />

        {/* MAGEM Hizmetleri Bölümü */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">MAGEM Hizmetleri</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sanat, teknoloji ve kişisel gelişim alanlarında sunduğumuz programlarımızla tanışın.
            </p>
          </div>

          {/* Services Carousel */}
          <ServicesCarousel />
        </section>
      </main>
    </div>
  )
}
