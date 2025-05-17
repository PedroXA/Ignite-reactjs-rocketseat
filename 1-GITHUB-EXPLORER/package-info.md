"dependencies": {
"@babel/cli": "^7.27.2", // 👨‍🔧 Ferramenta de linha de comando do Babel. Serve pra rodar Babel direto do terminal, tipo: `npx babel src --out-dir dist`
"@babel/core": "^7.27.1", // 🧠 O cérebro do Babel — ele transforma o código. Todas as outras ferramentas giram em torno desse cara.
"@babel/preset-env": "^7.27.2", // 🌍 Transpila JS moderno (ES6+) pra versões mais antigas, baseado nos browsers que você quer suportar.
"@babel/preset-react": "^7.27.1", // ⚛️ Faz o Babel entender e transpilar JSX.
"babel-loader": "^10.0.0", // 🔄 Liga o Babel no Webpack. Sem ele, o Webpack nem sabe que Babel existe.
"html-webpack-plugin": "^5.6.3", // 🧙‍♂️ Gera um index.html na sua pasta final (`dist/`) e injeta seu script automaticamente. Menos trabalho manual.
"webpack": "^5.99.8", // 📦 O coração. Empacota todos os arquivos (JS, CSS, imagens, etc) num bundle só.
"webpack-cli": "^6.0.1", // 💻 Interface de linha de comando do Webpack. Permite tu rodar `npx webpack`, `npx webpack serve` e afins.
"webpack-dev-server": "^5.2.1" // 🚀 Servidor local que recarrega tua página automaticamente quando tu salva um arquivo.
}
