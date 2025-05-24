// Importação de libs necessárias para configuração
const path = require("path"); // Lida com caminhos de arquivos de forma cross-platform
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Injeta o bundle no HTML
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin"); // HMR para React (só em dev)

// Checa se estamos em modo de desenvolvimento ou produção
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  // Define o modo de build (dev ou prod)
  mode: isDevelopment ? "development" : "production",

  // Source maps para ajudar no debug (em dev usa mais leve, em prod usa completo)
  devtool: isDevelopment ? "eval-source-map" : "source-map",

  // Arquivo inicial da aplicação
  entry: path.resolve(__dirname, "src", "index.tsx"),

  // Onde e como o Webpack vai salvar o bundle gerado
  output: {
    path: path.resolve(__dirname, "dist"), // pasta de saída
    filename: "bundle.js", // nome do bundle gerado
  },

  // Resolve arquivos sem precisar especificar extensões
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // entende .js .jsx .ts e .tsx
  },

  // Configuração do servidor de desenvolvimento (webpack-dev-server)
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // pasta servida pelo dev server
    },
    hot: true, // habilita HMR (Hot Module Replacement)
  },

  // Plugins usados no processo de build
  plugins: [
    // Ativa o plugin de hot reload do React somente em modo dev
    isDevelopment && new ReactRefreshWebpackPlugin(),

    // Gera um HTML com o bundle já injetado automaticamente no <body>
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      inject: "body",
    }),
  ].filter(Boolean), // remove falsos (ex: o plugin de HMR quando não for dev)

  // Loaders são responsáveis por interpretar tipos de arquivos diferentes
  module: {
    rules: [
      {
        // Transpila arquivos .jsx usando Babel
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // Ativa o plugin de HMR para React (só em dev)
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
        },
      },
      {
        // Permite importar arquivos .scss (Sass)
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader", // injeta o CSS na DOM
          "css-loader", // interpreta imports de CSS no JS
          "sass-loader", // compila Sass para CSS
        ],
      },
    ],
  },
};
