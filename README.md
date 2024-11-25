# Clínica Veterinária - API

Este projeto é uma API RESTful desenvolvida em Node.js e Express para gerenciar os dados de uma clínica veterinária. A API inclui funcionalidades para gerenciar pessoas, endereços, contatos, papéis, animais de estimação, pacientes, gaiolas, tratamentos, medicamentos e registros diários de pacientes.

## Índice
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação, Estrutura, Rotas e Execução](#instalação-estrutura-rotas-e-execução)
- [Contribuições](#contribuições)

---

## Tecnologias Utilizadas
- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework para construção da API
- **Sequelize** - ORM para manipulação de banco de dados
- **dotenv** - Gerenciamento de variáveis de ambiente

---

## Instalação, Estrutura, Rotas e Execução
```bash
# 1. Clone o repositório
git clone https://github.com/softexrecifepe/PI-T1-GP1-CLINICA.git
cd PI-T1-GP1-CLINICA

# 2. Instale as dependências
npm install

# 3. Configure o ambiente
# Crie um arquivo .env com as variáveis abaixo
echo "PORT=3000
DATABASE_URL=<sua_url_do_banco>" > .env

# 4. Estrutura do projeto
# Diretórios e arquivos principais:
src/
├── controllers/
├── db/
│   └── connection.js
├── models/
│   └── address.js
│   └── associations.js
│   └── cage.js
│   └── contact.js
│   └── medication.js
│   └── patient.js
│   └── patientDailyChart.js
│   └── personRegister.js
│   └── pet.js
│   └── role.js
│   └── treatment.js
├── routes/
│   └── addressRoutes.js
│   └── cageRoutes.js
│   └── contactRoutes.js
│   └── dailyChart.js
│   └── medicationRoutes.js
│   └── patientRoutes.js
│   └── personRoutes.js
│   └── petRoutes.js
│   └── roleRoutes.js
│   └── treatmentRoutes.js
utils/
├── utils.js

# 5. Rotas disponíveis
# Pessoas
GET /person                     # Lista todas as pessoas
GET /person/id/:id              # Busca pessoa por ID
GET /person/name/:name          # Busca pessoa por nome
GET /person/role/:role          # Lista pessoas por papel
GET /person/postalcode/:postal  # Busca pessoa por CEP
GET /person/phone/:cellPhone    # Busca pessoa por telefone
GET /person/complete/id/:id     # Busca registro completo por ID
GET /person/complete            # Lista todos os registros completos
POST /person                    # Cria uma nova pessoa
PUT /person/id/:id              # Atualiza uma pessoa
DELETE /person/id/:id           # Remove uma pessoa

# Endereços
GET /address/id/:id             # Busca endereço por ID
GET /address/street/:street     # Busca endereço por rua
GET /address/city/:city         # Busca endereço por cidade
GET /address/postalcode/:code   # Busca endereço por CEP
GET /address/all-address        # Lista todos os endereços
POST /address                   # Cria um novo endereço
PUT /address/id/:id             # Atualiza um endereço
DELETE /address/id/:id          # Remove um endereço

# Contatos
GET /contact                    # Lista todos os contatos
GET /contact/id/:id             # Busca contato por ID
GET /contact/phone/:number      # Busca contato por número de telefone
GET /contact/email/:email       # Busca contato por e-mail
POST /contact                   # Cria um novo contato
PUT /contact/id/:id             # Atualiza um contato
DELETE /contact/id/:id          # Remove um contato

# Papéis
GET /role                       # Lista todos os papéis
GET /role/id/:id                # Busca papel por ID
GET /role/type/:type            # Busca papel por tipo
POST /role                      # Cria um novo papel
PUT /role/id/:id                # Atualiza um papel
DELETE /role/id/:id             # Remove um papel

# Animais de Estimação
GET /pet/all                    # Lista todos os pets
GET /pet/id/:id                 # Busca pet por ID
GET /pet/name/:name             # Busca pet por nome
GET /pet/recent                 # Lista o pet mais recente
GET /pet/tutor/:name            # Busca pet por nome do tutor
POST /pet                       # Cria um novo pet
PUT /pet/:id                    # Atualiza um pet
DELETE /pet/:id                 # Remove um pet

# Pacientes
GET /patient/all-patients       # Lista todos os pacientes
GET /patient/id/:id             # Busca paciente por ID
GET /patient/recent             # Lista o paciente mais recente
POST /patient                   # Cria um novo paciente
PUT /patient/:id                # Atualiza um paciente
DELETE /patient/:id             # Remove um paciente

# Gaiolas
GET /cage/all-cages             # Lista todas as gaiolas
GET /cage/id/:id                # Busca gaiola por ID
POST /cage                      # Cria uma nova gaiola
PUT /cage/:id                   # Atualiza uma gaiola
DELETE /cage/:id                # Remove uma gaiola

# Tratamentos
GET /treatment/treatments       # Lista todos os tratamentos
GET /treatment/id/:id           # Busca tratamento por ID
GET /treatment/pet/:name        # Busca tratamento por nome do pet
GET /treatment/tutor/:name      # Busca tratamento por nome do tutor
POST /treatment                 # Cria um novo tratamento
PUT /treatment/:id              # Atualiza um tratamento
DELETE /treatment/:id           # Remove um tratamento

# Medicamentos
GET /medication                 # Lista todos os medicamentos
GET /medication/:id             # Busca medicamento por ID
GET /medication/name/:name      # Busca medicamento por nome
POST /medication                # Cria um novo medicamento
PUT /medication/:id             # Atualiza um medicamento
DELETE /medication/:id          # Remove um medicamento

# Registros Diários de Pacientes
GET /dailyChart/all             # Lista todos os registros diários
GET /dailyChart/id/:id          # Busca registro diário por ID
GET /dailyChart/date/:date      # Busca registro diário por data
GET /dailyChart/cpf/:cpf        # Busca registro diário por CPF do tutor
GET /dailyChart/petName/:name   # Busca registro diário por nome do pet
POST /dailyChart                # Cria um novo registro diário
PUT /dailyChart/:id             # Atualiza um registro diário
DELETE /dailyChart/:id          # Remove um registro diário

# 6. Execute o servidor
npm run dev

# O servidor estará disponível em:
http://localhost:3000


## Contribuições

# Faça um fork do repositório
git fork https://github.com/softexrecifepe/PI-T1-GP1-CLINICA.git

# Crie uma branch para sua feature
git checkout -b minha-feature

# Commit suas mudanças
git commit -m "Minha feature"

# Suba a branch
git push origin minha-feature

# Abra um Pull Request no repositório original
