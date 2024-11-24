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

## Links Importantes:
**API-test**: https://pi-t1-gp1-clinica-mascots-final-prototype.onrender.com

**Documentação**:


## Rotas da API

### **Person Register**

- GET /person/complete/: Recupera o registro completo de todas as pessoas.
- GET /person/complete/id/:id: Recupera o registro completo de uma pessoa por ID.
-  GET /person/: Recupera todas as pessoas.
-  GET /person/id/:id: Recupera uma pessoa pelo ID.
-  GET /person/name/:name: Recupera uma pessoa pelo nome. Exemplos: Alice Silva, Carlos Pereira, etc.
-  GET /person/role/:role: Recupera pessoas pelo tipo de papel. Exemplos: Tutor, Vet, Nurse.
-  GET /person/postalCode/:postalCode: Recupera pessoas pelo código postal.
-  GET /person/phone/:cellPhone: Recupera pessoas pelo número de celular.
-  POST /person/: Cria uma nova pessoa.
-  DELETE /person/id/:id: Deleta uma pessoa pelo ID.
-  DELETE /person/name/:name: Deleta uma pessoa pelo nome.
-  PUT /person/id/:id: Atualiza uma pessoa pelo ID.

### **Address**

- GET /address/all-address: Recupera todos os endereços.
- GET /address/id/:id: Recupera um endereço pelo ID.
- GET /address/street/:addressStreet: Recupera endereços pelo nome da rua.
- GET /address/city/:city: Recupera endereços pela cidade.
- GET /address/postalcode/:postalCode: Recupera endereços pelo código postal.
- POST /address/: Cria um novo endereço.
- DELETE /address/id/:id: Deleta um endereço pelo ID.
- PUT /address/id/:id: Atualiza um endereço pelo ID.

### **Contact**
- GET /contact/: Recupera todos os contatos.
- GET /contact/id/:id: Recupera um contato pelo ID.
- GET /contact/phone/:phoneNumber: Recupera um contato pelo número de telefone.
- GET /contact/email/:email: Recupera um contato pelo email.
- POST /contact/: Cria um novo contato.
- DELETE /contact/id/:id: Deleta um contato pelo ID.
- PUT /contact/id/:id: Atualiza um contato pelo ID.

### **Role**
- GET /role/: Recupera todos os papéis.
- GET /role/id/:id: Recupera um papel pelo ID.
- GET /role/type/:roleType: Recupera papéis pelo tipo.
- POST /role/: Cria um novo papel.
- DELETE /role/id/:id: Deleta um papel pelo ID.
- PUT /role/id/:id: Atualiza um papel pelo ID.

### **Pet**
- GET /pet/all: Recupera todos os animais.
- GET /pet/id/:id: Recupera um animal pelo ID.
- GET /pet/name/:name: Recupera um animal pelo nome.
- GET /pet/recent: Recupera o animal mais recente.
- GET /pet/tutor/:tutorName: Recupera animais pelo nome do tutor.
- POST /pet/: Cria um novo animal.
- PUT /pet/:id: Atualiza um animal pelo ID.
- DELETE /pet/:id: Deleta um animal pelo ID.

### **Patient**
- GET /patient/all-patients: Recupera todos os pacientes.
- GET /patient/id/:id: Recupera um paciente pelo ID.
- GET /patient/recent: Recupera o paciente mais recente.
- POST /patient/: Cria um novo paciente.
- PUT /patient/:id: Atualiza um paciente pelo ID.
- DELETE /patient/:id: Deleta um paciente pelo ID.

### **Cage**
- GET /cage/all-cages: Recupera todas as gaiolas.
- GET /cage/id/:id: Recupera uma gaiola pelo ID.
- POST /cage/: Cria uma nova gaiola.
- PUT /cage/:id: Atualiza uma gaiola pelo ID.
- DELETE /cage/:id: Deleta uma gaiola pelo ID.

### **Treatment**
- POST /treatment/: Cria um novo tratamento.
- GET /treatment/id/:treatmentId: Recupera um tratamento pelo ID.
- GET /treatment/pet/:petName: Recupera tratamentos pelo nome do pet.
- GET /treatment/tutor/:tutorName: Recupera tratamentos pelo nome do tutor.
- GET /treatment/treatments: Recupera todos os tratamentos.
- PUT /treatment/:treatmentId: Atualiza um tratamento pelo ID.
- DELETE /treatment/:treatmentId: Deleta um tratamento pelo ID.

### **Medication**
- POST /medication/: Cria uma nova medicação.
- GET /medication/: Recupera todas as medicações.
- GET /medication/:id: Recupera uma medicação pelo ID.
- GET /medication/name/:name: Recupera uma medicação pelo nome.
- PUT /medication/:id: Atualiza uma medicação pelo ID.
- DELETE /medication/:id: Deleta uma medicação pelo ID.

### **Daily Chart**
- GET /dailychart/id/:id: Recupera o diário de um paciente pelo ID.
- GET /dailychart/date/:date: Recupera o diário de um paciente por data.
- GET /dailychart/cpf/:cpf: Recupera o diário de um paciente pelo CPF.
- GET /dailychart/petName/:petName: Recupera o diário de um paciente pelo nome do pet.
- GET /dailychart/all: Recupera todos os diários de pacientes.
- POST /dailychart/: Cria um novo diário de paciente.
