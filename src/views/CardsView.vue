<template>
  <label>Pokemon Count: {{ pokeData.count }}</label>
  <div>
    <div style="height: 100px; width: 100px"></div>
    <pv-card >
      <!--Title-->
      <template #header>
        <ul>
          <li>Id #{{ pokeInfo.id }}</li>
          <li>
            <img v-bind:src="pokeInfo.sprites.front_default" alt="" />
          </li>
        </ul>
      </template>

      <!--Name-->
      <template #content>
        <h3>{{ pokeInfo.name }}</h3>
        <a v-bind:href="pokedexUrl + pokeData.results[0].name"
          ><i class="pi pi-external-link" style="font-size: 2em"></i
        ></a>
        <ul>
          <li v-for="t in pokeInfo.types" :key="t.id">
            {{ t.type.name }}
          </li>
        </ul>
      </template>
      <!--Characteristics-->
      <template #footer>
        <h3>Characteristics</h3>
        <ul>
          <li v-for="s in pokeInfo.stats" :key="s.id">
            {{ s.stat.name }}: {{ s.base_stat }}
          </li>
        </ul>
      </template>
    </pv-card>
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
      pokedexUrl: "https://pokemondb.net/pokedex/",
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
