<template>
  <div>
    <h2>My Heroes</h2>
    
    <div>
      <label>Hero name:
        <input v-model="heroName" />
      </label>
      <button v-on:click="add">
        add
      </button>
    </div>

    <ul class="heroes">
      <li v-for="hero in heroes" v-bind:key="hero.id">
        <router-link v-bind:to="`/detail/${hero.id}`">
          <span class="badge">{{ hero.id }}</span> {{ hero.name}}
        </router-link>
        <button class="delete" title="delete hero" v-on:click="deleteHero(hero)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
import HeroDetail from '@/components/HeroDetail';
import axios from 'axios';

export default {
  name: 'heroes',
  components: {
    HeroDetail
  },
  data: () => {
    return {
      heroes: null,
      heroName: ''
    };
  },
  mounted: async function() {
    const response = await axios.get('http://localhost:3000/heroes');
    this.heroes = response.data;
  },
  methods: {
    add: async function() {
      const response = await axios.post('http://localhost:3000/heroes', {
        name: this.heroName
      });
      this.heroName = '';
      this.heroes.push(response.data);
    },
    deleteHero: async function(deletedHero) {
      await axios.delete(`http://localhost:3000/heroes/${deletedHero.id}`);
      const heroFiltered = this.heroes.filter(hero => hero.id !== deletedHero.id);
      this.heroes = heroFiltered;
    }
  }
}
</script>

<style scoped>
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  position: relative;
  cursor: pointer;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}

.heroes li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}

.heroes a {
  color: #888;
  text-decoration: none;
  position: relative;
  display: block;
  width: 250px;
}

.heroes a:hover {
  color:#607D8B;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607D8B;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  min-width: 16px;
  text-align: right;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}

button {
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
  font-family: Arial;
}

button:hover {
  background-color: #cfd8dc;
}

button.delete {
  position: relative;
  left: 194px;
  top: -32px;
  background-color: gray !important;
  color: white;
}
</style>
