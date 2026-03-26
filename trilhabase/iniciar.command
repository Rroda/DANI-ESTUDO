#!/bin/bash
clear
echo "=================================================="
echo "        INICIANDO TRILHABASE (NEXT.JS)"
echo "=================================================="

# Muda o diretorio atual para a pasta onde o arquivo .command está
cd "$(dirname "$0")"

echo "Instalando dependencias do Node (npm install)..."
npm install

echo ""
echo "=== Concluido. Iniciando o servidor local... ==="
echo "A plataforma estara disponivel em: http://localhost:3000"
echo ""

# Abre o navegador padrao no Mac
open http://localhost:3000

# Roda o Next.js
npm run dev
