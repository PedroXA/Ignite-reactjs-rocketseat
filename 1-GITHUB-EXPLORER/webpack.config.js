// Por algumas diferenças de SO, o meio que os caminhos são feitos é diferente.
// Para não rolar nenhum problema 
// Vai ser utilizado a lib path
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // Arquivo inicial da minha aplicação
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js','.jsx'],
    },
    module: {
        rules: {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        }
    }
}