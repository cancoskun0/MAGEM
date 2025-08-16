"use client"

import { Phone, Mail, Facebook, Instagram } from "lucide-react"
// import Link from "next/link" // Link importunu ekleyin

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Sol Bölüm: İletişime Geçin Metni ve Sosyal Medya (Ortalanmış kalacak) */}
        <div className="flex flex-col items-center text-center md:w-1/2">
          {" "}
          {/* cursor-pointer kaldırıldı */}
          {/* <Link href="/iletisim" className="text-white hover:text-orange-400 transition-colors duration-200"> */}
          <h3 className="text-2xl font-bold mb-4 text-white">Bizimle İletişime Geçin</h3>
          {/* </Link> */}
          <p className="text-gray-300 text-base mb-6 max-w-md">
            MAGEM'de sunduğumuz programlar hakkında daha fazla bilgi almak için bizimle iletişime geçin.
          </p>
          {/* Sosyal Medya İkonları */}
          <div className="flex space-x-4 justify-center">
            <a
              href="https://www.facebook.com/gelisimmerkezimagusa/?locale=tr_TR"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Sayfamız"
              className="flex items-center justify-center h-9 w-9 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/gelisimmerkezimagusa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Sayfamız"
              className="flex items-center justify-center h-9 w-9 rounded-md bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 text-white hover:scale-105 transition-transform duration-200"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        {/* Sağ Bölüm: İletişim Bilgileri (Sola hizalandı) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
          <h3 className="text-xl font-semibold mb-4 text-orange-500">İletişim Bilgileri</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="h-5 w-5 text-orange-400" />
              <span className="font-medium">MAGEM Maraş:</span>
              <a href="tel:+905488166022" className="text-gray-300 hover:text-orange-400 transition-colors">
                +90 548 816 60 22
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="h-5 w-5 text-orange-400" />
              <span className="font-medium">MAGEM Sakarya:</span>
              <a href="tel:+903923652760" className="text-gray-300 hover:text-orange-400 transition-colors">
                +90 392 365 27 60
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="h-5 w-5 text-orange-400" />
              <a href="tel:+905488166046" className="text-gray-300 hover:text-orange-400 transition-colors">
                +90 548 816 60 46
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="h-5 w-5 text-orange-400" />
              <a href="mailto:magem@magusa.org" className="text-gray-300 hover:text-orange-400 transition-colors">
                magem@magusa.org
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Telif Hakkı */}
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} MAGEM. Tüm Hakları Saklıdır.
      </div>
    </footer>
  )
}
