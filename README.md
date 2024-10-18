# Mascot Clinical Management System

Este é um sistema de gerenciamento clínico de mascotes desenvolvido usando **Node.js**, **Express**, **Sequelize** e **MySQL**. O sistema tem como objetivo gerenciar dados relacionados a pacientes, tratamentos, animais de estimação, funcionários (tutores, veterinários e enfermeiros) e a ficha diária de tratamento.

## Instalação e Configuração

Para instalar e configurar o projeto localmente, siga os seguintes passos:

1. **Clone o repositório:**
   git clone https://github.com/SeuUsuario/NomeDoRepositorio.git

2. **Instale as dependências do projeto:**
   Navegue até o diretório raiz do projeto e execute o comando:
   npm install

3. **Configure o banco de dados MySQL:**
   Certifique-se de que o MySQL esteja instalado e rodando em sua máquina. Crie um banco de dados chamado `mascot_clinical`. 

4. **Inicie o servidor:**
   Execute o seguinte comando para rodar o servidor:
   npm start

5. **Verifique a aplicação:**
   Acesse `http://localhost:3000` no seu navegador. Você deverá ver a mensagem "Hello World!".

## Estrutura do Banco de Dados

O sistema possui várias tabelas inter-relacionadas, tais como:

- **personRegister**: Registra pessoas, como tutores, veterinários e enfermeiros.
- **address**: Guarda endereços associados a pessoas.
- **contact**: Guarda informações de contato das pessoas.
- **role**: Define o papel de uma pessoa (Tutor, Veterinário, Enfermeiro).
- **pet**: Registra animais de estimação.
- **patient**: Registra pacientes admitidos na clínica.
- **cage**: Define as gaiolas onde os pacientes estão.
- **treatment**: Registra tratamentos dados aos pacientes.
- **medication**: Guarda informações sobre medicações administradas.
- **patientsDailyChart**: Ficha diária de acompanhamento dos pacientes.

## Rodando o Servidor

Depois de seguir as etapas de instalação e configuração, você poderá rodar o servidor com:

npm start

O servidor será iniciado e estará disponível em `http://localhost:3000`.

## Contribuindo

Se quiser contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request no GitHub.
