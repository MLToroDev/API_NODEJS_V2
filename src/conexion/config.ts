export const sqlConfig = {
    user: 'sa',
    password: '12345678',
    database: "ProyectoPPI",
    server: 'localhost',
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
  }