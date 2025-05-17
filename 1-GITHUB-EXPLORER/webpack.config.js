// Por algumas diferenças de SO, o meio que os caminhos são feitos é diferente.
// Para não rolar nenhum problema
// Vai ser utilizado a lib path
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// process.ev - Localização de onde as variáveis ambiente são criadas
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production", // Alterando o modo entre development e production com condicionais
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  entry: path.resolve(__dirname, "src", "index.jsx"), // Arquivo inicial da minha aplicação
  output: {
    path: path.resolve(__dirname, "dist"), // Caminho o caminho de output
    filename: "bundle.js", // Filename do arquivo de output
  },
  resolve: {
    extensions: [".js", ".jsx"], // ler os formatos js e jsx
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/, // Identificando o arquivo jsx
        exclude: /node_modules/,
        use: "babel-loader", // convertendo o arquivo para o browser
      },
      {
        test: /\.scss$/, // Identificando o arquivo jsx
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"], // convertendo o arquivo para o browser
      },
    ],
  },
};
