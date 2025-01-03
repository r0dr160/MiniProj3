const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';
const express = require('express');
const app = express();
const sponsorsRoutes = require('./routes/sponsors.routes');

// Importação e configuração do Swagger
const { swaggerUi, swaggerDocs } = require('./swagger');

console.log("Iniciando o servidor...");
console.log(`Host configurado: ${host}`);
console.log(`Porta configurada: ${port}`);

// Conectar ao banco de dados
require('./init/db.js')(app, () => {
  console.log("Conexão ao banco de dados estabelecida");

  // Middlewares para processar JSON e dados codificados
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  console.log("Middlewares para processamento de JSON e dados codificados configurados");

  // Configuração de middlewares
  app.use('/assets', express.static('assets'));
  console.log("Middleware de '/assets' configurado");

  app.use('/views', express.static('views'));
  console.log("Middleware de '/views' configurado");

  // Configuração de rotas
  app.use('/api/sponsors', sponsorsRoutes);
  console.log("Rotas de '/api/sponsors' configuradas");

  // Configuração do Swagger
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  console.log("Swagger configurado. Documentação disponível em '/api-docs'");

  // Inicializa o servidor
  app.listen(port, host, (error) => {
    if (error) {
      console.error("Erro ao iniciar o servidor:", error.stack);
      return;
    }
    console.log(`Servidor rodando em http://${host}:${port}`);
  });
});
