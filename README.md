<h1 align="center">Ignite - Design System</h1>

<p align="center">
  <img 
    src="https://img.shields.io/badge/React-%5E18.2.0-blue" 
    alt="React Ver. ^18.1.0"
  />
  <img 
    src="https://img.shields.io/badge/Typescript-%5E4.6.4-blue"
    alt="Typescript Ver. 4.6.4" 
  />
  <img
    src="https://img.shields.io/badge/Ignite-2022-green" 
    alt="Ignite-2022"
  />
  <img 
    alt="License"
    src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033"
  />
</p>

<br>

<h3 align="center">Imagem prévia da aplicação</h3>

![cover](.github/project-preview.png?style=flat)


<br>

## 💻 Projeto
### Exemplo
Essa aplicação foi desenvolvida para estudos seguindo os ensinamentos da **[Rocketseat](https://www.rocketseat.com.br/)** no curso Ignite **[Ignite](https://www.rocketseat.com.br/ignite)** .

 
## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Jonathan-Rios/ignite-n-design-system.git

$ cd ignite-n-design-system
```

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm run dev
```
- Ao rodar a aplicação, aparecerá o endereço de acesso no terminal.
 
## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.

<br />


## 📓 Anotações pessoais

<h3>Criando o projeto e suas dependências </h3>

```bash
➜  npm init -y

➜  npm i typescript -D
➜  npx tsc --init #Gera a configuração inicial do tsconfig

➜  tokens npm i tsup -D
# Serve para converter o código para um pacote javascript que poderá ser carregado em outros projetos, vantagens perante a forma da conversão normal do pacote do typescript.

# Consegue converter o código para vários formatos diferentes como: 
#   - CommonJS(Que utilizando require nos imports)
#   - ECMAScript modules (Que permite Import e Export)

# Arquivos de definição de tipagem
# Mais performático para realizar o processo.
Script de utilização

# Script: "tsup src/index.ts --format esm,cjs --dts"
#     --format esm,cjs responsável por gerar em formatos de CommonJs e ECMAScript
#     --dts Gera a definição de tipagem

Na pasta packages/react
➜  npm init -y
➜  npm i typescript -D
➜  npx tsc --init
➜  npm i -D react @types/react @types/react-dom # Aqui instalamos o React como desenvolvimento pois
# quando alguém for instalar nossa biblioteca de react, elá já vai ter o React instalado, vamos deixar pesado e duplicado desnecessariamente.
➜  npm i @stitches/react
➜  npm install @radix-ui/react-avatar
➜  npm install @radix-ui/react-checkbox
➜  npm i phosphor-react

Na pasta packages/tokens
➜  npm init -y
➜  npm i typescript -D
➜  npx tsc --init

Na pasta packages/eslint-config
➜  npm init -y
➜  npm i -D eslint @rocketseat/eslint-config

Na pasta packages/docs
➜  npx sb init --builder storybook/builder-vite --type react --use-npm
➜  npm i vite @vitejs/plugin-react -D
➜  npm i react react-dom
➜  npm i polished
➜  npm i phosphor-react
➜  npm i @storybook/addon-a11y
➜  npm i @storybook/storybook-deployer --save


➜  npm i turbo@latest -D #Serve para quando estamos trabalhando com monorepo, conseguir executar scripts em todos os pacotes ao mesmo tempo, ajuda a acelerar o processo de build na aplicação.
#turbo run dev --parallel // Executa todos os script de dev de todos os pacotes em paralelo


```
 
<br />

---
<br />

<a href="https://github.com/Jonathan-Rios">
 <img src="https://github.com/Jonathan-Rios.png" width="100px;" alt="" />
 <br />
 <sub><b>Jonathan Rios Sousa</b></sub></a>

💠 NeverStopLearning 💠

[![Linkedin Badge](https://img.shields.io/badge/-Jonathan-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/)](https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/) 
[![Gmail Badge](https://img.shields.io/badge/-jonathan.riosousa@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jonathan.riosousa@gmail.com)](mailto:jonathan.riosousa@gmail.com)