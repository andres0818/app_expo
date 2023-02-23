// esta configuracion se crea para solucionar un problema de compilacion  react-router formato JSX
// en react-native WEB y lo compile a JS

const path=require('path')
const createExpoWebpackConfigAsync= require('@expo/webpack-config')

module.exports = async function (env,argv){
    const config = await createExpoWebpackConfigAsync(env,argv)

    config.module.rules.pusht({
        test: /\.js$/,
        loader: 'babel-loader',
        include:[
            path.join(__dirname,'node_modules/react-router-native')
        ]
    })
    return config
}

