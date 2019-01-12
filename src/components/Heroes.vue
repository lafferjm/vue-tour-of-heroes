<template>
  <div>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li v-for="hero in heroes" v-bind:key="hero.id" v-on:click="selectHero(hero)" v-bind:class="{selected: hero === selectedHero}">
        <span class="badge">{{ hero.id }}</span> {{ hero.name}}
      </li>
    </ul>
    <hero-detail v-bind:hero="selectedHero"></hero-detail>
  </div>
</template>

<script>
import HEROES from '../../mock-heroes';
import HeroDetail from '@/components/HeroDetail';

export default {
  name: 'heroes',
  components: {
    HeroDetail
  },
  data: () => {
    return {
      heroes: HEROES,
      selectedHero: null
    };
  },
  methods: {
    selectHero: function (hero) {
      this.selectedHero = hero;
    }
  }
}
</script>

<style scoped>
.selected {
  background-color: #cfd8dc !important;
  color: white
}
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #eeeeee;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}
.heroes li.selected:hover {
  background-color: #bbd8dc !important;
  color: white;
}
.heroes li:hover {
  color: #607d8b;
  background-color: #dddddd;
  left: .1em;
}
.heroes .text {
  position: relative;
  top: -3px;
}
.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607d8b;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}
</style>
