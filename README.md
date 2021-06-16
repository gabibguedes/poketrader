# Poke Trader

O Poke Trader é uma calculadora de trocas de pokemon, de forma a avaliar se uma troca é justa ou não.

***OBS.:** Para esse projeto é considerado uma troca justa, as que possuem diferença de **base experience** menor que 5.*

O projeto é composto por um frontend feito em ReactJS, uma API feita em NodeJS com Express e um banco de dados em MongoDB. Além de se conectar a [Poke API](https://pokeapi.co/docs/v2) para coletar as informações sobre os pokemons.

Acesse o Poke Trader em [poketraderfrontend.herokuapp.com](https://poketraderfrontend.herokuapp.com/).

## Como rodar

O projeto foi desenvolvido utilizando Docker, dessa forma para subir o ambiente basta rodar o comando:

```sh
docker-compose up
```

Após todos os containers subirem o frontend do projeto estará rodando na porta `3000`, e a api na porta `3001`.

Veja mais sobre:
- [Frontend](./front)
- [API](./api)

