import Navbar from "../../navbar"
import { Mail, Phone, MapPin } from "lucide-react"

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Ana içerik - navbar'ın altında başlaması için pt-36 eklendi */}
      <main className="pt-36">
        {/* Sayfa Başlığı */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">İletişim</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MAGEM ile iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz. Size en kısa sürede geri döneceğiz!
            </p>
          </div>

          {/* İletişim Kutucukları */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Sol Kutucuk - E-Posta */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 px-8 py-6 text-center">
                <Mail className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">Bize E-Posta Gönderin</h3>
              </div>
              <div className="p-8 text-center">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Sorularınız veya talepleriniz için bize e-posta gönderebilirsiniz. En kısa sürede size geri döneceğiz!
                </p>
                <a
                  href="mailto:magem@magusa.org"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  magem@magusa.org
                </a>
              </div>
            </div>

            {/* Sağ Kutucuk - Telefon */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-green-600 to-green-500 px-8 py-6 text-center">
                <Phone className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">Bizi Arayın</h3>
              </div>
              <div className="p-8 text-center">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Bize telefonla ulaşarak hizmetlerimiz hakkında detaylı bilgi alabilir, sorularınızı sorabilirsiniz!
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">MAGEM Sakarya</h4>
                    <a
                      href="tel:+903923652760"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4" />
                      +90 392 365 27 60
                    </a>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">MAGEM Maraş</h4>
                    <a
                      href="tel:+905488166022"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4" />
                      +90 548 816 60 22
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Harita Bölümü */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Konumlarımız</h2>
              <p className="text-xl text-gray-600">MAGEM şubelerimizin konumları</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* MAGEM Sakarya Haritası */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-bold text-white">MAGEM Sakarya</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156.09999999999997!2d33.9221876!3d35.1316287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f12!3m3!1m2!1s0x14dfc9ce0a657f8d%3A0x920028acf8b9a521!2sMAGEM!5e0!3m2!1str!2str!4v1721644800000!5m2!1s-tr!2str"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="MAGEM Sakarya Konumu"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* MAGEM Maraş Haritası */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-bold text-white">MAGEM Maraş</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156.09999999999997!2d33.9320195!3d35.1093064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f12!3m3!1m2!1s0x14dfc9437726fc21%3A0x1cb5d930f85abbe7!2sMARA%C5%9E%20MAGEM!5e0!3m2!1str!2str!4v1721644800000!5m2!1s-tr!2str"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="MAGEM Maraş Konumu"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}
