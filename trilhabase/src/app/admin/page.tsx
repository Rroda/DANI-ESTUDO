import { Database, Activity, RefreshCcw, AlertOctagon } from 'lucide-react';

export default function AdminDashboard() {
  const spiders = [
    { source: 'Webmotors', status: 'Rodando', adsParsed: 1245, errors: 2 },
    { source: 'Mercado Livre', status: 'Ocioso', adsParsed: 8392, errors: 0 },
    { source: 'OLX', status: 'Erro de Captcha', adsParsed: 430, errors: 12 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-heading font-bold mb-2">Painel de Ingestão e ETL</h1>
      <p className="text-foreground/70 mb-8">Gerenciamento das fontes de dados, normalização de catálogo e saúde da plataforma.</p>
      
      <div className="grid md:grid-cols-4 gap-4 mb-10">
         <div className="glass p-6 rounded-xl border border-border">
            <div className="flex items-center gap-3 mb-2">
              <Database className="text-primary w-5 h-5" />
              <h3 className="font-semibold text-sm">Volume Total</h3>
            </div>
            <p className="text-3xl font-bold">142.304</p>
            <p className="text-xs text-muted-foreground mt-1">anúncios catalogados</p>
         </div>
         <div className="glass p-6 rounded-xl border border-border">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="text-secondary w-5 h-5" />
              <h3 className="font-semibold text-sm">Ingeridos Hoje</h3>
            </div>
            <p className="text-3xl font-bold">+2.314</p>
            <p className="text-xs text-secondary mt-1">Normalizados com sucesso</p>
         </div>
         <div className="glass p-6 rounded-xl border border-border">
            <div className="flex items-center gap-3 mb-2">
              <AlertOctagon className="text-red-400 w-5 h-5" />
              <h3 className="font-semibold text-sm">Anomalias de Preço</h3>
            </div>
            <p className="text-3xl font-bold">42</p>
            <p className="text-xs text-muted-foreground mt-1">Aguardando revisão manual</p>
         </div>
      </div>

      <h2 className="text-xl font-heading font-bold mb-4">Status dos Agentes (Spiders)</h2>
      <div className="glass rounded-xl border border-border overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-white/5 border-b border-border text-foreground/70">
            <tr>
              <th className="px-6 py-4 font-semibold">Fonte</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Anúncios Processados</th>
              <th className="px-6 py-4 font-semibold">Erros</th>
              <th className="px-6 py-4 text-right">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
             {spiders.map((spider, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium">{spider.source}</td>
                  <td className="px-6 py-4">
                     <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        spider.status === 'Rodando' ? 'bg-secondary/20 text-secondary' : 
                        spider.status === 'Erro de Captcha' ? 'bg-red-500/20 text-red-400' : 
                        'bg-white/10 text-muted-foreground'
                     }`}>
                        {spider.status}
                     </span>
                  </td>
                  <td className="px-6 py-4">{spider.adsParsed}</td>
                  <td className="px-6 py-4 text-red-400">{spider.errors}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-muted-foreground hover:text-primary transition-colors" title="Reiniciar Coleta">
                      <RefreshCcw className="w-4 h-4 ml-auto" />
                    </button>
                  </td>
                </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
