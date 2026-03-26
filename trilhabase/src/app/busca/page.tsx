import Link from 'next/link';
import { Filter, SlidersHorizontal, MapPin, TrendingDown } from 'lucide-react';

export default function SearchPage() {
  const dummyResults = [
    { id: 1, name: 'Honda CRF 250F', year: 2022, price: 21500, fipe: 20300, location: 'São Paulo, SP', state: 'Seminovo', opportunity: true },
    { id: 2, name: 'Yamaha TT-R 230', year: 2021, price: 18000, fipe: 18500, location: 'Belo Horizonte, MG', state: 'Usado', opportunity: true },
    { id: 3, name: 'KTM 300 EXC', year: 2023, price: 75000, fipe: null, location: 'Curitiba, PR', state: 'Novo', opportunity: false },
    { id: 4, name: 'Polaris RZR Pro XP', year: 2022, price: 185000, fipe: null, location: 'Goiânia, GO', state: 'Seminovo', opportunity: false },
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar / Filters */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="glass p-6 rounded-xl border border-border sticky top-24">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/50">
            <Filter className="w-5 h-5 text-primary" />
            <h2 className="font-heading font-bold text-lg">Filtros Inteligentes</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="text-sm font-semibold text-foreground/80 mb-2 block">Categoria</label>
              <select className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none">
                <option>Todas</option>
                <option>Motocross</option>
                <option>Trilha</option>
                <option>UTV</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-semibold text-foreground/80 mb-2 block">Marca</label>
              <select className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none">
                <option>Qualquer marca</option>
                <option>Honda</option>
                <option>Yamaha</option>
                <option>KTM</option>
                <option>Polaris</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-foreground/80 mb-2 block">Ano Mín - Máx</label>
              <div className="flex gap-2">
                <input type="number" placeholder="2015" className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm" />
                <input type="number" placeholder="2024" className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm" />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-foreground/80 mb-2 block">Faixa de Preço</label>
              <input type="range" className="w-full accent-primary" />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>R$ 0</span>
                <span>R$ 300k+</span>
              </div>
            </div>

            <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-md transition-colors">
              Aplicar Filtros
            </button>
          </div>
        </div>
      </aside>

      {/* Results */}
      <main className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h1 className="text-2xl font-heading font-bold mb-4 md:mb-0">
            5.432 anúncios encontrados
          </h1>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
            <select className="bg-transparent border-none text-sm font-medium outline-none cursor-pointer text-foreground/80 hover:text-foreground">
              <option>Relevância TrilhaBase</option>
              <option>Menor Preço Real</option>
              <option>Maior Desconto FIPE</option>
              <option>Mais Recentes</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {dummyResults.map((item) => (
            <Link href={`/modelo/${item.id}`} key={item.id} className="glass p-5 rounded-xl border border-border hover:border-primary/50 transition-all flex flex-col group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-heading font-bold text-lg group-hover:text-primary transition-colors">{item.name}</h3>
                  <span className="text-xs text-muted-foreground">{item.year} • {item.state}</span>
                </div>
                {item.opportunity && (
                  <span className="bg-secondary/10 text-secondary border border-secondary/20 text-xs px-2 py-1 rounded-full flex items-center gap-1 font-semibold">
                    <TrendingDown className="w-3 h-3" /> Abaixo da FIPE
                  </span>
                )}
              </div>
              
              <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
                  </span>
                  {item.fipe && (
                    <span className="text-xs text-muted-foreground line-through">
                      FIPE: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.fipe)}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs text-foreground/60">
                  <MapPin className="w-3 h-3" /> {item.location}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
