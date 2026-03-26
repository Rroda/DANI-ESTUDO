import Link from 'next/link';
import { Search, ChevronRight, BarChart3, TrendingDown, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative py-24 lg:py-32 flex flex-col items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container px-4 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            O mercado off-road em tempo real
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight max-w-4xl">
            O preço real da sua <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              próxima aventura.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10">
            Esqueça a tabela FIPE geral. Consulte milhares de anúncios estruturados de Motocross, Trilha, Enduro e UTVs para encontrar a melhor oportunidade do mercado.
          </p>
          
          {/* Quick Search Box */}
          <div className="w-full max-w-3xl glass rounded-2xl p-2 flex flex-col md:flex-row gap-2 shadow-2xl shadow-black relative z-20">
            <div className="flex-1 flex items-center bg-background/50 rounded-xl px-4 py-3 border border-border/50 focus-within:border-primary/50 transition-colors">
              <Search className="w-5 h-5 text-muted-foreground mr-3" />
              <input 
                type="text" 
                placeholder="Busque por marca, modelo ou ano..." 
                className="bg-transparent border-none outline-none w-full text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Link href="/busca" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-xl transition-all flex items-center justify-center shrink-0">
              Buscar o mercado
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-16 bg-[#0c0c0e]">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold">Navegue por Categorias</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Motocross', 'Trilha / Enduro', 'UTVs', 'Quadriciclos'].map((cat, i) => (
              <Link key={i} href={`/busca?category=${cat.toLowerCase().replace(' / ', '-')}`} className="group relative h-40 rounded-2xl overflow-hidden glass border border-border hover:border-primary/50 transition-all flex flex-col justify-end p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <h3 className="relative z-20 font-heading font-bold text-lg group-hover:text-primary transition-colors">{cat}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Market Indicators */}
      <section className="w-full py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Inteligência que gera lucro</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">Nossas ferramentas analisam milhares de anúncios diários para que você saiba exatamente quando comprar ou vender.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl border border-border hover:border-primary/30 transition-all">
              <Target className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold font-heading mb-3">Oportunidades</h3>
              <p className="text-foreground/70">Identificamos veículos anunciados com preços significativamente abaixo da média real de mercado da sua região.</p>
            </div>
            <div className="glass p-8 rounded-2xl border border-border hover:border-primary/30 transition-all">
              <BarChart3 className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold font-heading mb-3">Preço Real (Não FIPE)</h3>
              <p className="text-foreground/70">Motos de trilha frequentemente não seguem a tabela FIPE. Mostramos o preço pelo qual o negócio realmente acontece.</p>
            </div>
            <div className="glass p-8 rounded-2xl border border-border hover:border-primary/30 transition-all">
              <TrendingDown className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold font-heading mb-3">Tendência de Desvalorização</h3>
              <p className="text-foreground/70">Acompanhe a curva de preço histórico do modelo antes de fechar negócio e evite comprar na alta do mercado.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
