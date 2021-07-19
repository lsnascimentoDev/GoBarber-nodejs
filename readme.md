<h1 align="center" style=  >
GoBarber
</h1>


# Indice

- [Sobre](#-sobre)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como baixar o projeto](#-como-baixar-o-projeto)


## ✍ Sobre

Essa é a aplicação GoBarber, que é uma plataforma de agendamento de serviços para proprietários de barbearias ou salões de beleza.É uma API REST que faz todo o CRUD da aplicação, persistência de dados, tratativa de exceções e que serve dados tanto ao front-end quanto ao mobile.

---

## Funcionalidades

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- o usuário deve poder realizar um novo agendamento com um prestador;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h ás 17h (Primeiro ás 8h, últimos ás 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;


## 🔧 Tecnologias utilizadas


- [Nodejs](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org)
- [Docker](https://www.docker.com/)
- [Postgres](https://www.postgresql.org/)
- [Mongodb](https://www.mongodb.com/)
- [Autenticação JWT](https://auth0.com/)
- [Multer](https://www.npmjs.com/package/multer)
- [Jest](https://jestjs.io/pt-BR/)



---

## ⚡ Como baixar o projeto
</br>

```bash

# Clonar o repositório
$ git clone https://github.com/lsnascimentoDev/GoBarber-nodejs.git

# Entrar no diretório
$ cd gobarber-node-typescript

# Instalar as dependências
$ yarn install


# Iniciar o projeto
$ yarn dev
```


---

Desenvolvido por Lucas Nascimento 💪

