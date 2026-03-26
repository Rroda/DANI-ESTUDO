import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Search, MapPin, TrendingUp, Menu } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "TrilhaBase | Inteligência de Mercado Off-Road",
  description: "Consulta e comparação de preços reais de motos de trilha, motocross e UTVs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} dark`}>
      <body className="min-h-screen flex flex-col antialiased bg-background text-foreground font-sans selection:bg-primary selection:text-white">
        
        {/* Navbar */}
        <header className="fixed top-0 w-full z-50 glass border-b border-border/50">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-primary w-6 h-6" />
              <Link href="/" className="font-heading font-bold text-xl tracking-tight">
                Trilha<span className="text-primary">Base</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/80">
              <Link href="/busca" className="hover:text-primary transition-colors">Comprar</Link>
              <Link href="/busca?type=utv" className="hover:text-primary transition-colors">UTVs</Link>
              <Link href="/admin" className="hover:text-primary transition-colors">Vender</Link>
              <span className="w-px h-4 bg-border"></span>
              <button className="text-sm hover:text-white">Entrar</button>
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-all font-semibold">
                Anunciar
              </button>
            </nav>
            
            <button className="md:hidden text-foreground">
              <Menu />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 pt-16">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="border-t border-border/50 bg-[#0c0c0e] py-12 mt-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-2xl mb-4">
              Nossa paixão é a <span className="text-primary">Trilha</span>. Nosso negócio é o <span className="text-primary">Dado</span>.
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              A inteligência definitiva de mercado para compradores, vendedores e lojistas de veículos off-road.
            </p>
            <div className="flex justify-center gap-6 text-sm text-foreground/60">
              <Link href="#" className="hover:text-primary">Sobre</Link>
              <Link href="#" className="hover:text-primary">Privacidade</Link>
              <Link href="#" className="hover:text-primary">Termos</Link>
              <Link href="#" className="hover:text-primary">Contato</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
