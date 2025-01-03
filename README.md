# Animalec - Um App Pedagógico para Gerenciamento de Animais

Projeto full-stack que combina um **frontend em Vue.js** com um **backend em Node.js**. Este sistema permite o gerenciamento de patrocinadores e experts, com funcionalidades de mock no frontend para facilitar o desenvolvimento e validação local. O backend é integrado ao banco de dados MongoDB e documentado com Swagger para facilitar o uso das APIs.

---

## Funcionalidades

### Backend
1. **APIs REST**
   - Gerenciamento completo das entidades `Sponsors` (patrocinadores) e `Experts`:
      - **GET**: Busca dados de todos os registros.
      - **POST**: Criação de novos registros.
      - **PUT**: Atualização de registros existentes.
      - **DELETE**: Exclusão de registros por ID.

2. **Integração com MongoDB**
   - Conexão segura com o banco de dados utilizando `Mongoose`.
   - Operações CRUD completas para gerenciar as coleções.

3. **Documentação com Swagger**
   - Todas as APIs foram documentadas utilizando Swagger.
   - Documentação interativa disponível em:  
     [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

4. **Validação e Middlewares**
   - Validações de entrada com Mongoose.
   - Middleware para tratamento de JSON e requisições codificadas.

---

### Frontend
1. **Configuração de Mocks**
   - Arquivo `mock.js` intercepta chamadas `fetch` para rotas específicas.
   - Dados mockados incluem usuários, animais e perguntas.
   - Simula interações com uma API em modo de desenvolvimento.

2. **Exibição dos Dados Mockados**
   - Componente `TestMock.vue` exibe dados mockados para validação visual.

3. **Dados Mockados**
   - **Usuários**: Lista com `id`, `nome` e `função`.
   - **Animais**: Lista com `id`, `nome` e `tipo`.
   - **Perguntas**: Lista com `id`, `enunciado` e `resposta`.

4. **Ambiente Controlado**
   - Mocks são ativados apenas em ambiente de desenvolvimento e desativados automaticamente em produção.

---

## Como Rodar o Projeto

### Backend
1. Navegue para o diretório do backend:  
   cd Back-end_fca_webbook2-master

2. Instale as dependências:  
   npm install

3. Inicie o servidor:  
   npm start

4. Acesse a documentação da API:  
   [http://localhost:8080/api-docs](http://localhost:8080/api-docs)

---

### Frontend
1. Navegue para o diretório do frontend:  
   cd Front-end_Animalec-master

2. Instale as dependências:  
   npm install

3. Inicie o servidor:  
   npm run serve

---

## API Endpoints

### Patrocinadores (Sponsors)
- **GET** `/api/sponsors`  
  Retorna todos os patrocinadores.

- **POST** `/api/sponsors`  
  Adiciona um novo patrocinador.

- **PUT** `/api/sponsors/:id`  
  Atualiza um patrocinador existente.

- **DELETE** `/api/sponsors/:id`  
  Remove um patrocinador existente.

---

## Considerações
- Certifique-se de rodar o backend e o frontend separadamente, conforme as instruções acima.
- Utilize o Postman ou o Swagger para testar os endpoints do backend.
- Lembre-se de rodar o backend com a conexão ao banco de dados configurada.

---

## Autor
- **Rodrigo Costa**
   - Email: 2401857@estudante.uab.pt
   - Universidade Aberta

---

## Licença
Este projeto é de uso educacional e desenvolvido como parte do Mestrado em Engenharia Informática da Universidade Aberta.
