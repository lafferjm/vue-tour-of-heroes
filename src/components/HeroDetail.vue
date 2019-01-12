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
  </div>
</template>

<script>
import HEROES from '../../mock-heroes';

export default {
  name: "hero-detail",
  props: {
    hero: Object
  },
  data: () => {
    return {
    };
  },
  computed: {
    hero: function() {
      const id = this.$route.params.id;
      const hero = HEROES.find(hero => hero.id == id);
      return hero;
    }
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>

</style>
