import { Artifika } from "next/font/google";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import  "app/sass/globals.sass"; //se importan los estilos globales

const artifika = Artifika({
  weight: ["400"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={artifika.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
