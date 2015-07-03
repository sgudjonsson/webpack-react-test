var path = require('path');
module.exports = {
    entry: './app/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          { test: /\.js$/, loader: 'babel' },
          { test: /\.jsx$/, loader: 'babel' },
          { test: /\.css$/, loader: 'style!css' }
        ]
    }
};
