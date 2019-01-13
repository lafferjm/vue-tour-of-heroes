<template>
  <div v-if="hero">
    <h2>{{ hero.name | uppercase }}</h2>
    <div><span>id: </span>{{hero.id}}</div>
    <div>
      <label>name:
        <input v-model="hero.name" placeholder="name" />
      </label>
    </div>
    <button v-on:click="goBack">go back</button>
    <button v-on:click="save">save</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "hero-detail",
  data: () => {
    return {
      hero: null
    };
  },
  mounted: async function() {
    const id = this.$route.params.id;
    const response = await axios.get(`http://localhost:3000/heroes/${id}`);
    this.hero = response.data;
    this.$store.dispatch('addMessage', `HeroService: get hero id: ${id}`);
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    },
    save: async function() {
      const id = this.$route.params.id;
      await axios.put(`http://localhost:3000/heroes/${id}`, this.hero);
      this.$store.dispatch('addMessage', `HeroService: updated hero with id ${id}`);
      this.goBack();
    }
  }
}
</script>

<style scoped>

</style>
