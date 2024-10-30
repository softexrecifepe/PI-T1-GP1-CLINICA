# Sistema de Gestão de Animais de Estimação

Este é um sistema de gestão para clínicas veterinárias que permite registrar, gerenciar e consultar informações sobre pessoas, endereços, contatos e papéis (roles) de forma eficiente.

## Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **Sequelize**
- **POSTGRESQL** 
- **RENDER**

## Estrutura do Projeto

- **controllers/**: Contém a lógica para manipulação de dados.
- **models/**: Contém os modelos de dados (PersonRegister, Address, Contact, Role).
- **routes/**: Define as rotas da API.
- **db/**: Configuração do banco de dados.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/softexrecifepe/PI-T1-GP1-CLINICA.git

2. Instale as dependências:
   ```bash
   npm install

3. Configure o banco de dados em db/connection.js e crie as tabelas necessárias.

4. Execute a aplicação:
   ```bash
   node index.js

## Rotas da API

### **Person Register**
- `GET /persons`: Recupera todas as pessoas.
- `GET /persons/id/:id`: Recupera uma pessoa pelo ID.
- `GET /persons/name/:name`: Recupera uma pessoa pelo nome.
- `GET /persons/role/:role`: Recupera pessoas pelo tipo de papel.
- `GET /persons/postalcode/:searchedPostalCode`: Recupera pessoas pelo código postal.
- `GET /persons/cellphone/:cellPhone`: Recupera pessoas pelo número de celular.
- `POST /persons`: Cria uma nova pessoa.
- `DELETE /persons/id/:id`: Deleta uma pessoa pelo ID.
- `DELETE /persons/name/:name`: Deleta uma pessoa pelo nome.
- `PUT /persons/id/:id`: Atualiza uma pessoa pelo ID.

### **Address**
- `GET /addresses/id/:id`: Recupera um endereço pelo ID.
- `GET /addresses/street/:addressStreet`: Recupera endereços pelo nome da rua.
- `GET /addresses/city/:city`: Recupera endereços pela cidade.
- `GET /addresses/postalcode/:postalCode`: Recupera endereços pelo código postal.
- `POST /addresses`: Cria um novo endereço.
- `DELETE /addresses/id/:id`: Deleta um endereço pelo ID.
- `PUT /addresses/id/:id`: Atualiza um endereço pelo ID.

### **Contact**
- `GET /contacts`: Recupera todos os contatos.
- `GET /contacts/id/:id`: Recupera um contato pelo ID.
- `GET /contacts/phone/:phoneNumber`: Recupera um contato pelo número de telefone.
- `GET /contacts/email/:email`: Recupera um contato pelo email.
- `POST /contacts`: Cria um novo contato.
- `DELETE /contacts/id/:id`: Deleta um contato pelo ID.
- `PUT /contacts/id/:id`: Atualiza um contato pelo ID.

### **Role**
- `GET /roles`: Recupera todos os papéis.
- `GET /roles/id/:id`: Recupera um papel pelo ID.
- `GET /roles/roleType/:roleType`: Recupera papéis pelo tipo.
- `POST /roles`: Cria um novo papel.
- `DELETE /roles/id/:id`: Deleta um papel pelo ID.
- `PUT /roles/id/:id`: Atualiza um papel pelo ID.