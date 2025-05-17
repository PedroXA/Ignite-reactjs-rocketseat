// Por algumas diferenças de SO, o meio que os caminhos são feitos é diferente.
// Para não rolar nenhum problema
// Vai ser utilizado a lib path
const path = require("path");

module.exports = {
  mode: "development", // Alterando o modo entre development e production
  entry: path.resolve(__dirname, "src", "index.jsx"), // Arquivo inicial da minha aplicação
  output: {
    path: path.resolve(__dirname, "dist"), // Caminho o caminho de output
    filename: "bundle.js", // Filename do arquivo de output
  },
  resolve: {
    extensions: [".js", ".jsx"], // ler os formatos js e jsx
  },
  module: {
    rules: [
      {
        test: /\.jsx$/, // Identificando o arquivo jsx
        exclude: /node_modules/,
        use: "babel-loader", // convertendo o arquivo para o browser
      },
    ],
  },
};
