# Task Manager APP

Esta é uma aplicação React simples, desenvolvida para fins didáticos e parte do desafio técnico da empresa Sphere Cyber Solutions. A aplicação consiste em consumir a api [TaskManagerAPI] permitindo que o usuário visualize uma lista de tarefas, crie novas tarefas e também consiga editar ou excluir através da interface.

## Screenshots

![App Screenshot](https://raw.githubusercontent.com/fomes/task-manager-app/master/public/prev.jpeg)

## Rodando localmente

Requisitos:

- [Node.js >= 18](https://nodejs.org/en)
- [Task API](https://github.com/fomes/sphere-task-api)

Clone o projeto

```bash
  git clone https://github.com/task-manager-app

```

Entre no diretório do projeto

```bash
  cd task-manager-app

```

Instale as dependências

```bash
  npm i
```

Criar arquivo env na raiz e definir a seguinte variável de ambiente:

```bash
NEXT_PUBLIC_BASE_URL="http://localhost:9000"
```

Inicie a aplicação

```bash
  npm run dev
```

A API estará disponível na seguinte URL:

http://localhost:3000/

## Stack utilizada

- [React](https://react.dev/)
- [Next](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)

## Demonstração

Disponível no link abaixo

https://sphere-task-manager-app.vercel.app

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
