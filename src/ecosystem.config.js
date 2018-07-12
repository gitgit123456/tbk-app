module.exports = {
    apps: [ //数组，可以指定多个服务
        {
            name: 'movies-be',
            script: 'bin/www',
            watch: true,
            env: {
                PORT: 5000, //node服务端口
                NODE_ENV: 'development'
            },
            env_production: {
                PORT:5000,
                NODE_ENV: 'production'
            }
        }
    ]
};
