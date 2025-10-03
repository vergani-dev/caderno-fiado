# Comandos Usados 

## Criando repositorio
- criando repositorio local (git)
    - cd Projetos (comando para entrar na pasta em que vai ser criado o repositrio local)
    - mkdir caderno-fiado ( Cria uma pasta)
    - cd caderno-fiado (entra na pasta que foi criada)
    - Git init (Inicia o git)
    - nano .gitignore ( criar um arquivo para o node.js e React)
    - node_modules/
        .env
        .DS_Store
    - salve e saia 
    - echo '# Caderno fiado' README.md (Cria o README inicial)
    - git add . (adiciona todos os arquivos)
    - git commit -m 'primeiro commit' 


- Crie o repositorio remoto no github
    - acesse o github
    - clique em new repository
    - nomeie o projeto

- Conectar o repositorio local com o remoto
    - git remote add origin 'link do repostorio'
    - git branch -M main
    - git push -u origin main


## Estrutura do projeto

- Caderno-fiado -> backend / WEB / Mobile


## Insalando Node no backend

- Entrar na pasta backend
- npm init -y

## Instalando dependências principais

- npm install express mongoose cors body-parser (depencias principais)
    * Express framework para criar a API
    * mongoose conectar e manipular o MongoDB
    * cors permitir requisiçoes do frontend
    * body-parser Interpretar dados no corpo da requisição.

## criar o arquivo principal server.js

nano server.js 

- Ou criar dentro do VSCode

##  Instalando o nodemon 

- npm install --save-dev nodemon

- Configurar no package.json
    * "scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}

- npm run dev

## Rota teste 
- http://localhost:5000/ 
- colocar no navegador 


## Confirmar se o MongoDb esta rodando no Ubunto