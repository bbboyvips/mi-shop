module.exports = {
    productionSourceMap: false,
    publicPath: './',
    assetsDir: 'static',
    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap((args) => {
                args[0].title = '小米商城';
                return args;
            });
    }
}