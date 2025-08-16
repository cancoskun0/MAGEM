import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer" // Footer'ı import ettik

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MAGEM - Mağusa Gelişim Merkezi",
  description: "Mağusa Gelişim Merkezi, sanat, teknoloji ve kişisel gelişim alanlarında programlar sunar.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
        <Footer /> {/* Footer'ı buraya ekledik */}
      </body>
    </html>
  )
}
