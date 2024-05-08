import { Inter } from "next/font/google";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import  "app/sass/globals.sass"; //se importan los estilos globales

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Header></Header>
      <Footer></Footer>
      </body>
      
    </html>

    
  );
}
