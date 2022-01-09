# TMDB-Desafio-Back-end
## Sobre o projeto
  Esse projeto é um desafio propôsto pela D1, que resumidamente consome uma API de filmes. Para a criação do servidor, essas tecnologias foram utilizadas:
  - Node.js
  - Typescript
  - Prisma Orm
  - Mysql
  - Express
  - Axios
  - jsonwebtoken 
  - Eslint
## Estrutura do projeto
Para fazer a estrutura do projeto, utilizei um dos principios do SOLID que é o <i>Single Responsiblity Principle</i>, onde cada classe tem apenas uma tarefa pra executar. O projeto é composto pelas seguintes pastas:
  - services: É a pasta responsavel por executar as regras de negócio.
  - controllers: Pasta responsavel por fazer o tratamento de dados de requisições e retornar uma resposta.
  - database: É onde ocorre a conexão com banco de dados.
  - routes: Pasta que armazena todas as rotas do servidor.
  - prisma: Pasta que contem as migrations e toda a estrutura do banco de dados.
  - middleware: pasta onde contem todos os middlewares.
  - @types: Pasta que auxilia na tipagem.

Optei por usar typescript para deixar o projeto mais organizado e tambem utilizei JWT para cada usuário ter seus próprios comentários na aplicação.

## Como executar o projeto

### 1 - Configurar Variáveis de ambiente
Para executar o projeto, primeiro é preciso configurar o .env

Renomeie o arquivo .env.example para .env e logo em seguida, coloque as informações necessarias que são:
    
    1- TMDB_API_KEY=  -> Chave da api do TMDB
    2- TMDB_API       -> Link da api do TMDB ("https://api.themoviedb.org/3")
    3- JWT_SECRET     -> Pode ser qualquer palavra como por exemplo "supersecret", é apenas para servir de referência pro JWT
    4- PORT           -> Porta em que o projeto está rodando ( ex: 3000, 3001...)
    5- DATABASE_URL   -> É o endereço da conexão do Banco de dados
    6- ENVIRONMENT    -> Indica se o ambiente é de desenvolvimento ou produção

    
<h5> 
  obs: O DATABASE_URL tem o seguinte formato: "mysql://root:mypassword@localhost:3306/movies" Onde:
</h5>

    mysql     -> Tipo do banco de dados utilizado
    root      -> Usuário pra conectar no banco
    password  -> Senha do banco
    localhost -> Endereço do banco
    movies    -> Nome do Schema
    
### 2 - Baixar dependências
Nesse Projeto eu utilizei o yarn, então:
```ts
yarn // Baixar dependências  
// Caso não funcione, tente:
yarn bcrypt
```

### 3 - Configurar banco de dados e migrations
Primeiro temos que criar o schema que colocamos dentro do DATABASE_URL no .env

```sql
mysql -u root -p

create database movies;
```

Agora que temos o banco de dados criado, precisamos rodar as migrations

```
yarn prisma migrate dev
```

### 4 - Executar o projeto
Por fim, basta executar o servidor!
```ts
yarn dev
```
Pronto, o projeto está rodando! Agora é só iniciar o client-side que se encontra aqui: https://github.com/GuilhermeBarroso-sys/TMDB-Desafio-Front-end <br>
 
    
Atenciosamente <br>
Guilherme
