module.exports = {
    port: process.env.PORT || 8085,
    db: {
        database: process.env.DB_NAME || 'fullstack_vue',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'root',
        options: {
            //dialect - refers to the type of database you are connecting to
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './fullstack_vue.sqlite',
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}