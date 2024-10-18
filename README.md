# Protótipo de Sistema de internação para clínica veterinária

Este projeto é uma aplicação Node.js para gerenciar informações sobre pets em uma clínica veterinária. Ele fornece operações de CRUD (Criar, Ler, Atualizar e Deletar) para gerenciar registros de pets, tutores e pacientes.

## Tecnologias Usadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para Node.js que facilita a criação de APIs.
- **MySQL**: Sistema de gerenciamento de banco de dados usado para armazenar as informações.

## Pré-requisitos

- Ter o [Node.js](https://nodejs.org/) instalado na sua máquina.
- Ter o [MySQL](https://www.mysql.com/) instalado e em execução.
- Ter o NPM (Node Package Manager) instalado, que geralmente vem com o Node.js.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/JonTalmon/nome-do-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure a conexão com o banco de dados no arquivo `connection.js`.

## Uso

1. Inicie o servidor:

   ```bash
   node index.js
   ```

2. Acesse a aplicação em seu navegador ou via ferramenta de testes de API (como Postman) em `http://localhost:3000`.

## Endpoints

### GET `/pet`

Retorna todos os pets cadastrados.

### GET `/pet/:name`

Retorna informações sobre um pet específico pelo nome.

### DELETE `/pet/:name`

Deleta um pet específico pelo nome. **Observação**: Esse endpoint não pode deletar pets que estão referenciados por outras tabelas.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Contato

Para mais informações, entre em contato com [JonTalmon](https://github.com/JonTalmon).
