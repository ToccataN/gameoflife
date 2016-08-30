module.exports={
    entry: './main.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true
    },
    module: {
        loaders: [
        {
           test: /\.js$/,
           loader: 'babel-loader',
           query:{
               presets: ['es2015', 'react']
           }
        },
        {
            test:/\.scss$/,
            loader: 'style!css!sass?sourceMap'
          }
        ]
    }
};