# Poke Trader API

Devido a necessidade de armazenar o histórico de trocas realizadas, foi implementado uma API capaz de gerenciar todas as trocas feitas e armazena-las em um banco de dados.

A API é independente do frontend, de forma que possui todas as regras para a criação de uma troca justa, fazendo as validações do *base experience* dos pokemon pela conexão com a [Poke API](https://pokeapi.co/docs/v2).

A API está em produção em [poketraderapi.herokuapp.com](https://poketraderapi.herokuapp.com/).

## Como rodar

A API está dockerizada e para roda-la basta utilizar o comando na raiz do repositório:

```sh
docker-compose up api
```

Após o container subir, a API estará rodando em [localhost:3001](http://localhost:3001/).

## Endpoints

**GET** `/trades`

Histórico de todas as trocas registradas.

A API retorna um json no formato abaixo, onde `trades` é a lista de trocas, e em cada troca temos `given` que são os IDs dos pokemons dados e `received`, os IDs dos pokemons recebidos, além do total de base experience dos pokemons dados e recebidos, registrados por `expGiven` e `expReceived`.


```json
{
  "message": "success",
  "trades": [
    {
      "given": [129, 7],
      "received": [1,13],
      "_id": "60c9675dd0bcf3004a681e00",
      "expGiven": 103,
      "expReceived": 103,
      "createdAt": "2021-06-16T02:52:13.555Z",
      "updatedAt": "2021-06-16T02:52:13.555Z",
      "__v": 0
    },
    {
      "given": [1],
      "received": [7],
      "_id": "60c96698d0bcf3004a681dff",
      "expGiven": 64,
      "expReceived": 63,
      "createdAt": "2021-06-16T02:48:56.422Z",
      "updatedAt": "2021-06-16T02:48:56.422Z",
      "__v": 0
    }
  ]
}
```

**GET** `/trades/:id`

Registro de uma troca específica, onde os dados da troca estão em `trade`.

```json
{
  "message": "success",
  "trade": {
    "given": [129, 7],
    "received": [1, 13],
    "_id": "60c9675dd0bcf3004a681e00",
    "expGiven": 103,
    "expReceived": 103,
    "createdAt": "2021-06-16T02:52:13.555Z",
    "updatedAt": "2021-06-16T02:52:13.555Z",
    "__v": 0
  }
}
```

**POST** `/trades`

Criação de uma nova troca.

Para isso é mandado para a API o json no formato abaixo, onde `given` é a lista de IDs dos pokemons dados, e `received` a lista de pokemons recebidos.


```json
{
	"given": [1, 2, 3, 4],
	"received": [252, 253, 254, 255]
}
```

Em caso de sucesso, caso a troca seja justa, a API retornará um json no formato abaixo, com as informações da troca registrada.

```json
{
  "message": "success",
  "isFair": true,
  "trade": {
    "given": [1, 2, 3, 4],
    "received": [252, 253, 254, 255],
    "_id": "60c972a974a485007430416c",
    "expGiven": 504,
    "expReceived": 505,
    "createdAt": "2021-06-16T03:40:25.668Z",
    "updatedAt": "2021-06-16T03:40:25.668Z",
    "__v": 0
  }
}
```

Caso a troca não seja justa o resultado será o apresentado abaixo.

```json
{
  "message": "error",
  "error": "Not a fair trade",
  "isFair": false
}
```

## Configurações

A API utiliza de configurações armazenadas como variáveis no arquivo `.env`:

- PORT: Porta que roda o serviço da API
- DB_USER: Usuário de acesso ao banco de dados
- DB_PASS: Senha de acesso ao banco de dados
- DB_NAME: Nome da base utilizada 
- DB_HOST: Host de acesso ao banco de dados
- NODE_ENV: Variável utilizada para especificar o ambiente da aplicação, para utilizar a API em produção, iguale a variável a `production`.

***OBS.:** Caso queira conectar a API a um banco de dados externo, é necessário usar a variavel `NODE_ENV=production`. O Docker Compose já possui um banco de dados configurado para desenvolvimento.*

