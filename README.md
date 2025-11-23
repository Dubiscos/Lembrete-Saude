# 🏥 Lembrete Saúde

Bem-vindo ao **Lembrete Saúde**! Este projeto é uma aplicação desenvolvida para ajudar os utilizadores a gerir e acompanhar os seus cuidados de saúde e rotinas médicas de forma simples e organizada.

## 🙎‍♂️ Membros do Grupo

* Eduardo Lopes Ferreira Filho
* Arthur Claudino de Oliveira
* Caio Guilherme Pedrosa de Oliveira
* Charles Mamor Iawmoto Filho
* Danilo Fogaça Pacheco
* Davi Anastacio Santos
* Diego Sabala Gomes

## 📸 Visão Geral

O objetivo deste projeto é fornecer uma interface amigável para o agendamento e acompanhamento de lembretes importantes, garantindo que cuidados essenciais não caiam no esquecimento.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando ferramentas modernas que foram fundamentais para agilizar o desenvolvimento e garantir a qualidade do código.

### 🎨 Frontend (Interface)
A escolha das tecnologias de frontend foi decisiva para criar a aplicação de forma rápida e eficiente:

* **Next.js:** A estrutura principal da aplicação. A sua arquitetura facilitou imenso a criação das páginas e a integração com o backend.
* **Tailwind CSS:** Utilizado para a estilização. Ajudou a construir a interface de utilizador (UI) de forma muito ágil, permitindo focar na lógica do produto sem perder tempo com CSS complexo.

### 🗄️ Backend & Base de Dados
Para a camada de dados, o foco foi na segurança e na integridade das informações:

* **Prisma ORM:** A peça central do backend. O Prisma foi escolhido pela facilidade em lidar com a base de dados, garantindo a segurança dos tipos (*type-safety*) e simplificando a escrita de *queries* e migrações.
* **SQLite:** A base de dados utilizada para armazenar as informações dos lembretes de forma leve e eficaz.

## 🔧 Como correr o projeto

Siga os passos abaixo para executar a aplicação no seu ambiente local:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/o-seu-usuario/lembrete-saude.git](https://github.com/o-seu-usuario/lembrete-saude.git)

2. **Instale as dependencias:**   
   ```bash
   npm install

3. **Configuração Base de Dados(Prisma):**   
   ```bash
   npx prisma migrate dev

3. **Iniciar o servidor de desenvolvimento:**   
   ```bash
   npm run dev
