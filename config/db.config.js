// Gustavo Olgiati

const sqlConfig = {
    server: "sqlservercentralpublic.database.windows.net",
    user: process.env.DBUSERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,

    pool: {
        idleTimeoutMillis: 60000
    },

    options: {
        encrypted: true, // for Azure
        trustedServerCertificate: false,
        useUTC: true
    }
}

module.exports = sqlConfig;