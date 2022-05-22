<template>
  <label>Pokemon Count: {{ this.count }}</label>
  <div class="grid">
    <div class="col-4" v-for="p in pokemonsData" :key="p.id">
      <pv-card>
        <!--Title-->
        <template #header>
          <ul>
            <li>Id #{{ p.id }}</li>
            <img
              style="height: 100px; width: 100px"
              v-bind:src="p.sprites.front_default"
              alt=""
            />
          </ul>
        </template>
        <!--Name-->
        <template #content>
          <h3>{{ p.name }}</h3>
          <a v-bind:href="externPokedexUrl + p.name"
            ><i class="pi pi-external-link" style="font-size: 2em"></i
          ></a>
          <ul>
            <li v-for="t in p.types" :key="t.id">
              {{ t.type.name }}
            </li>
          </ul>
        </template>
        <!--Characteristics-->
        <template #footer>
          <h3>Characteristics</h3>
          <ul>
            <li v-for="s in p.stats" :key="s.id">
              {{ s.stat.name }}: {{ s.base_stat }}
            </li>
          </ul>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<script>
import { PokemonApiService } from "../services/pokemon.api.service";
export default {
  name: "CardsView",
  data() {
    return {
      apiPokemon: null,
      min: 0,
      max: 20,
      externPokedexUrl: "https://pokemondb.net/pokedex/",
      count: 0,
      pokemons: [],
      pokemonsData: [],
    };
  },
  created() {
    this.apiPokemon = new PokemonApiService();
    this.apiPokemon.getAll().then((response) => {
      this.count = response.data.count;
    });
    this.apiPokemon.getAllByRange(this.min, this.max).then((response) => {
      this.pokemons = response.data.results;
      for (let i = this.min; i < this.max; i++) {
        this.apiPokemon
          .getById(i + 1)
          .then((response) => (this.pokemonsData[i] = response.data));
      }
    });
  },
  methods: {},
};
</script>

<style></style>
