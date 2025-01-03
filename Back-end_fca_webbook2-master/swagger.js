const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Animalec',
            version: '1.0.0',
            description: 'API para gerenciamento de patrocinadores e experts',
            contact: {
                name: 'Rodrigo Costa',
                email: '2401857@estudante.uab.pt',
            },
        },
        servers: [
            {
                url: 'http://localhost:8080',
            },
        ],
        components: {
            schemas: {
                Sponsor: {
                    type: 'object',
                    required: ['name', 'email', 'phone'],
                    properties: {
                        name: {
                            type: 'string',
                            description: 'Nome do patrocinador',
                        },
                        email: {
                            type: 'string',
                            description: 'E-mail do patrocinador',
                        },
                        phone: {
                            type: 'string',
                            description: 'Número de telefone do patrocinador',
                        },
                    },
                },
            },
        },
    },
    apis: ['./routes/*.js'], // Gera a documentação das rotas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = {
    swaggerUi,
    swaggerDocs,
};
