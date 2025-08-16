import Navbar from "../../navbar"
import { Target, Eye, Heart, Users, Award, Lightbulb } from "lucide-react"

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Ana içerik - navbar'ın altında başlaması için pt-36 eklendi */}
      <main className="pt-36">
        {/* Sayfa Başlığı */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Hakkımızda</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gazimağusa Belediyesi'ne bağlı MAGEM olarak, toplumun her kesiminden bireylere kaliteli eğitim ve gelişim
              hizmetleri sunuyoruz.
            </p>
          </div>

          {/* Hakkımızda Bölümü */}
          <section className="mb-20">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-6">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-white" />
                  <h2 className="text-3xl font-bold text-white">MAGEM Kimdir?</h2>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="text-lg mb-6">
                    Mağusa Gençlik Merkezi (MAGEM), 2007 yılında Mağusa Belediyesi'nin öncülüğünde kurulmuştur.
                    Başlangıçta bir dernek olarak kurulan MAGEM, daha sonra dernekleşerek özerk bir yapıya kavuşmuştur.
                  </p>
                  <p className="mb-6">
                    MAGEM'in kuruluş amacı, gençlere yönelik çeşitli faaliyetler ve projeler aracılığıyla gençlerin
                    gelişimine katkıda bulunmaktır. Bu kapsamda spor, sanat, eğitim ve sosyal etkinlikler gibi farklı
                    alanlarda çalışmalar yürütmektedir.
                  </p>
                  <p>
                    MAGEM, Gazimağusa'nın önemli bir gençlik merkezi olarak bilinir ve gençlerin aktif katılımını teşvik
                    ederek onların sosyal hayata daha fazla dahil olmalarını hedeflemektedir.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Misyon, Vizyon ve Hedefimiz - Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Misyon */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-8 text-center">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">Misyonumuz</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Toplumun her kesiminden bireylere, yaş ve ilgi alanlarına uygun kaliteli eğitim programları sunarak,
                  onların kişisel ve sosyal gelişimlerine katkı sağlamak. Modern eğitim yöntemleriyle donatılmış,
                  güvenli ve destekleyici bir öğrenme ortamı oluşturmak.
                </p>
              </div>
            </div>

            {/* Vizyon */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-green-600 to-green-500 px-6 py-8 text-center">
                <Eye className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">Vizyonumuz</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Kuzey Kıbrıs'ta eğitim ve gelişim alanında öncü bir kurum olmak. Yenilikçi yaklaşımlarımız ve kaliteli
                  hizmetlerimizle, bölgemizin sosyal ve kültürel gelişimine önemli katkılar sağlayan, örnek bir eğitim
                  merkezi olmak.
                </p>
              </div>
            </div>

            {/* Hedefimiz */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-purple-600 to-purple-500 px-6 py-8 text-center">
                <Target className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">Hedefimiz</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Katılımcılarımızın yaratıcılıklarını keşfetmelerine, özgüvenlerini geliştirmelerine ve toplumsal
                  farkındalık kazanmalarına yardımcı olmak. Sürdürülebilir ve kapsayıcı eğitim programlarıyla toplumsal
                  kalkınmaya destek olmak.
                </p>
              </div>
            </div>
          </div>

          {/* Değerlerimiz Bölümü */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
              <p className="text-xl text-gray-600">MAGEM olarak benimsediğimiz temel değerler</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Award className="w-10 h-10 text-orange-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Kalite</h4>
                <p className="text-gray-600 text-sm">En yüksek standartlarda eğitim hizmeti sunmak</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Users className="w-10 h-10 text-orange-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Kapsayıcılık</h4>
                <p className="text-gray-600 text-sm">Herkesi kucaklayan, ayrım yapmayan yaklaşım</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Lightbulb className="w-10 h-10 text-orange-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Yenilikçilik</h4>
                <p className="text-gray-600 text-sm">Sürekli gelişim ve yenilikçi eğitim yöntemleri</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Heart className="w-10 h-10 text-orange-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Sevgi</h4>
                <p className="text-gray-600 text-sm">Sevgi dolu, destekleyici öğrenme ortamı</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Target className="w-10 h-10 text-orange-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Hedef Odaklılık</h4>
                <p className="text-gray-600 text-sm">Belirlenen hedeflere ulaşmada kararlılık</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Eye className="w-10 h-10 text-orange-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Şeffaflık</h4>
                <p className="text-gray-600 text-sm">Açık, dürüst ve güvenilir iletişim</p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}
