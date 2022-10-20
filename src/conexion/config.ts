export const sqlConfig = {
    user: 'sa',
    password: '1234',
    database: "PPI",
    server: 'localhost',
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
  }