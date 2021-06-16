# Poke Trader Frontend

O Poke Trader Frontend foi desenvolvido para uma boa utilização do Poke Trader pelo usuário, devido a dificuldade de utilizar somente a API para visualizar as trocas de pokemons.

O Frontend faz conexão com a API do Poke Trader para a criação e visualização de trocas, e com a [Poke API](https://pokeapi.co/docs/v2) para melhor visualização dos pokemons envolvidos nessas trocas.

O frontend está em produção em [poketraderfrontend.herokuapp.com](https://poketraderfrontend.herokuapp.com/).


## Como rodar

O Frontend está dockerizado e para roda-lo basta utilizar o comando na raiz do repositório:

```sh
docker-compose up front
```

Após o container subir, o Frontend estará rodando em [localhost:3000](http://localhost:3000/).

## Configurações

O Frontend utiliza da variavel de ambiente `REACT_APP_API_URL` configurada no Docker Compose que aponta para a API do Poke Trader que deve se conectar.