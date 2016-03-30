module.exports = function(){
    var source = './src/';

    var server = './';


    var config = {
        appjs:[
            source+'**/*.module.js',
            source+'**/*.js'
        ],
        client:source,
        index:source+'index.html',
        bower:{
            json: require('./bower.json'),
            directory: './bower_components',
            ignorePath:'../..'
        },
        html:source+ '**/*.html',
        defaultPort: 8083,

        server: server,
        source:source,
        nodeServer: './manonrestaurant.js'
    };

    config.getWiredepDefaultOptions = function(){
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        }
        return options;
    }

    return config;
};