@echo off
TITLE Inicializar TrilhaBase
echo ==================================================
echo         INICIANDO TRILHABASE (NEXT.JS)
echo ==================================================

:: Muda o diretório atual para a pasta onde o arquivo .bat está
cd /d "%~dp0"

echo Instalando dependencias do Node (npm install)...
call npm install

echo.
echo === Concluido. Iniciando o servidor local... ===
echo A plataforma estara disponivel em: http://localhost:3000
echo.

:: Abre o navegador padrao no link local
start http://localhost:3000

:: Roda o Next.js
call npm run dev

pause
