var path = require('path');
module.exports = {
    entry: './app/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' },
          { test: /\.jsx$/, loader: 'babel-loader' },
          { test: /\.css$/, loader: 'style-loader!css' }
        ]
    }
};
