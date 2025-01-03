# Tarefa 3.2: Miniprojeto - Desenvolvimento do front-end

## Descrição

Este projeto é um sistema Front-end que utiliza **Vue.js** e simula interações com uma API por meio de dados mockados. O mock foi implementado para facilitar os testes e o desenvolvimento local, permitindo a simulação de respostas da API sem necessidade de um backend funcional.

A funcionalidade de mock está habilitada apenas no ambiente de desenvolvimento, garantindo que não interfira em um ambiente de produção.

## Funcionalidades Implementadas

1. **Configuração de Mocks**
    - Arquivo `mock.js` configurado para interceptar chamadas de `fetch` para URLs específicas.
    - Dados simulados incluem usuários, animais e perguntas.

2. **Integração no Projeto**
    - O mock foi integrado ao `main.js` para ser ativado apenas em ambiente de desenvolvimento.

3. **Exibição dos Dados Mockados**
    - Criado um componente `TestMock.vue` que exibe os dados mockados diretamente na interface para validação visual.

4. **Dados Mockados**
    - **Usuários:** Lista de usuários com `id`, `nome` e `função`.
    - **Animais:** Lista de animais com `id`, `nome` e `tipo`.
    - **Perguntas:** Lista de perguntas com `id`, `enunciado` e `resposta`.

## Como Testar o Projeto

1. **Executar o projeto localmente**
    - Use o comando `npm run serve` para iniciar o servidor de desenvolvimento.

2. **Acessar a aplicação no navegador**
    - Abra o navegador e acesse a URL fornecida pelo terminal, geralmente `http://localhost:8080`.

3. **Verificar o Mock**
    - A página inicial do projeto deve exibir os dados mockados no componente `TestMock.vue`, que inclui:
        - Lista de usuários.
        - Lista de animais.
        - Lista de perguntas com suas respostas.

4. **Simular Requisições API**
    - A funcionalidade de mock intercepta chamadas feitas com `fetch` para as rotas definidas no arquivo `mock.js`:
        - `/api/users`
        - `/api/animals`
        - `/api/questions`
    - Verifique no console do navegador os logs de intercepção das requisições mockadas.

## Considerações

- Certifique-se de rodar o projeto em **modo de desenvolvimento** para testar os mocks.
- Para produção, o mock é automaticamente desativado, garantindo que a aplicação se conecte a APIs reais.


### Tarefa criada por:
- Rodrigo Costa
- 2401857@estudante.uab.pt

# Animalec
An animals pedagogical app

# Using json-server
To mock some dummy results
https://github.com/typicode/json-server