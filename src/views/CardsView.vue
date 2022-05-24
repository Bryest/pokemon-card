<template>
  <div class="grid wrapper">
    <div
      class="container flex justify-content-around col-4"
      v-for="p in pokemonsData"
      :key="p.id"
    >
      <pv-card class="card align-items-center w-6">
        <!--Title-->
        <template #header>
          <div class="bg-green-100">
            <ul class="justify-content-center m-3 border-orange-500">
              <li class="font-bold">Id #{{ p.id }}</li>
              <div class="text-center">
                <img
                  class="w-12"
                  style="
                    image-rendering: auto;
                    image-rendering: crisp-edges;
                    image-rendering: pixelated;
                  "
                  v-bind:src="p.sprites.front_default"
                  alt=""
                />
              </div>
            </ul>
          </div>
        </template>
        <!--Name-->
        <template #content>
          <div class="border-2" style="border-color: rgb(195, 195, 195)">
            <h3 style="display: inline">{{ p.name }}</h3>
            <a v-bind:href="externPokedexUrl + p.name"
              ><i class="pi pi-external-link"></i
            ></a>
            <ul>
              <li class="name" v-for="t in p.types" :key="t.id">
                <span> {{ t.type.name }}</span>
              </li>
            </ul>
          </div>
        </template>
        <!--Characteristics-->
        <template #footer>
          <div class="border-2" style="border-color: rgb(195, 195, 195)">
            <h3>Characteristics</h3>
            <ul>
              <li class="name" v-for="s in p.stats" :key="s.id">
                {{ s.stat.name }}: {{ s.base_stat }}
              </li>
            </ul>
          </div>
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
      max: 10,
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

<style>
ul {
  list-style-type: none;
}
li.name {
  text-transform: capitalize;
}
</style>
