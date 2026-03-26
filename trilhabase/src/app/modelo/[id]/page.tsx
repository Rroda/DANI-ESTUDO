import { ArrowLeft, TrendingUp, Info, Activity, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function ModelDetails({ params }: { params: { id: string } }) {
  // Simulating fetched data
  const modelo = {
    name: 'Honda CRF 250F',
    year: 2022,
    category: 'Trilha / Enduro',
    avgPrice: 21250,
    fipe: 20300,
    minPrice: 18000,
    maxPrice: 26000,
    liquidity: 'Alta',
    insights: [
      "Modelo vendido 4.6% acima da tabela FIPE na média nacional.",
      "Maior concentração de anúncios com preço atrativo em São Paulo (capital).",
      "Modelos com escape esportivo e guidão oxxy elevam o preço real em ~R$ 1.500."
    ]
  };

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/busca" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Voltar para busca
      </Link>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Col: Overview */}
        <div className="flex-1 space-y-8">
          <div>
            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-muted-foreground mb-4">
              {modelo.category} • Ano {modelo.year}
            </div>
            <h1 className="text-4xl font-heading font-bold mb-2">{modelo.name}</h1>
            <p className="text-foreground/70">Análise agregada de 342 anúncios ativos no Brasil.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass p-4 rounded-xl border border-border">
              <span className="text-xs text-muted-foreground mb-1 block">Preço Médio Anunciado</span>
              <span className="text-xl font-bold block">{formatCurrency(modelo.avgPrice)}</span>
              <span className="text-xs text-red-400 mt-2 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +4.6% vs FIPE
              </span>
            </div>
            <div className="glass p-4 rounded-xl border border-border">
              <span className="text-xs text-muted-foreground mb-1 flex items-center gap-1">Preço FIPE <Info className="w-3 h-3" /></span>
              <span className="text-xl font-bold">{formatCurrency(modelo.fipe)}</span>
            </div>
            <div className="glass p-4 rounded-xl border border-border">
              <span className="text-xs text-muted-foreground mb-1 block">Mínimo Encontrado</span>
              <span className="text-xl font-bold text-secondary">{formatCurrency(modelo.minPrice)}</span>
            </div>
            <div className="glass p-4 rounded-xl border border-border">
              <span className="text-xs text-muted-foreground mb-1 block">Liquidez de Venda</span>
              <span className="text-xl font-bold text-primary">{modelo.liquidity}</span>
            </div>
          </div>

          {/* Gráfico (Simulado CSS) */}
          <div className="glass p-6 rounded-xl border border-border mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading font-bold">Distribuição de Preços (Brasil)</h2>
              <Activity className="text-primary w-5 h-5" />
            </div>
            
            <div className="h-48 flex items-end justify-center gap-2 pb-6 border-b border-border/50 relative">
               <div className="absolute top-24 left-0 w-full border-t border-dashed border-secondary/50 flex items-center justify-end px-2">
                 <span className="text-xs text-secondary bg-background px-1 absolute -top-3">FIPE: {formatCurrency(modelo.fipe)}</span>
               </div>
               <div className="w-12 bg-white/10 rounded-t-md h-[20%] group relative hover:bg-white/20 transition-colors"><span className="hidden group-hover:block absolute -top-8 text-xs text-center w-full">18k</span></div>
               <div className="w-12 bg-white/10 rounded-t-md h-[40%] group relative hover:bg-white/20 transition-colors"><span className="hidden group-hover:block absolute -top-8 text-xs text-center w-full">19k</span></div>
               <div className="w-12 bg-primary/70 rounded-t-md h-[85%] group relative hover:bg-primary transition-colors"><span className="hidden group-hover:block absolute -top-8 text-xs text-center w-full font-bold">21k</span></div>
               <div className="w-12 bg-white/10 rounded-t-md h-[60%] group relative hover:bg-white/20 transition-colors"><span className="hidden group-hover:block absolute -top-8 text-xs text-center w-full">23k</span></div>
               <div className="w-12 bg-white/10 rounded-t-md h-[20%] group relative hover:bg-white/20 transition-colors"><span className="hidden group-hover:block absolute -top-8 text-xs text-center w-full">25k</span></div>
            </div>
            <p className="text-xs text-center mt-4 text-muted-foreground">Volume de anúncios vs Faixa de Preço</p>
          </div>
        </div>

        {/* Right Col: AI Insights & Action */}
        <aside className="w-full lg:w-80 shrink-0 space-y-6">
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
            <h3 className="font-heading font-bold text-primary mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" /> Insights do Motor
            </h3>
            <ul className="space-y-4 text-sm text-foreground/80">
              {modelo.insights.map((insight, i) => (
                 <li key={i} className="flex items-start gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                   {insight}
                 </li>
              ))}
            </ul>
          </div>

          <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-primary/20">
            Criar Alerta de Queda de Preço
          </button>
          
          <button className="w-full glass hover:bg-white/5 border border-border font-bold py-3 rounded-xl transition-all">
            Ver 342 Anúncios Ativos
          </button>
        </aside>
      </div>
    </div>
  );
}
