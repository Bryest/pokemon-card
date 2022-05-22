<template>
  <label>Pokemon Count: {{ pokeData.count }}</label>

  <div>
    <h3>Characteristics</h3>
    <ul>
      <li>Id #{{ pokeInfo.id }}</li>
      <li>
        <img v-bind:src="pokeInfo.sprites.front_default" alt="" />
      </li>
      <li>
        {{ pokeData.results[0].name }}
      </li>
      <li>
        {{ pokeData.results[0].url }}
      </li>
      <li>
        {{ pokeInfo.types[0].type.name }} {{ pokeInfo.types[1].type.name }}
      </li>
      <li>
        {{ pokeInfo.weight }}
      </li>
      <li>
        {{ pokeInfo.stats[0].stat.name }} : {{ pokeInfo.stats[0].base_stat }}
      </li>
      <li>
        {{ pokeInfo.stats[1].stat.name }} : {{ pokeInfo.stats[1].base_stat }}
      </li>
      <li>
        {{ pokeInfo.stats[2].stat.name }} : {{ pokeInfo.stats[2].base_stat }}
      </li>
      <li>
        {{ pokeInfo.stats[3].stat.name }} : {{ pokeInfo.stats[3].base_stat }}
      </li>
      <li>
        {{ pokeInfo.stats[4].stat.name }} : {{ pokeInfo.stats[4].base_stat }}
      </li>
      <li>
        {{ pokeInfo.stats[5].stat.name }} : {{ pokeInfo.stats[5].base_stat }}
      </li>
    </ul>
  </div>
</template>

<script>
import { PokemonApiService } from "../services/pokemon.api.service";

export default {
  name: "CardsView",
  data() {
    return {
      pokeData: [],
      pokeInfo: [],
      apiPokemon: undefined,
    };
  },
  created() {
    this.apiPokemon = new PokemonApiService();
    this.getNumPokeData();
    this.getPokemonInfo();
  },
  methods: {
    getNumPokeData() {
      this.apiPokemon
        .getAll()
        .then((response) => (this.pokeData = response.data));
    },
    getPokemonInfo() {
      this.apiPokemon
        .getById(1)
        .then((response) => (this.pokeInfo = response.data));
    },
  },
};
</script>

<style></style>
