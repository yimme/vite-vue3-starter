<template>
  <nav>
    <router-link to="/">
Home
</router-link>
    <router-link to="about">
About
</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
@import './scss/_main';
</style>
