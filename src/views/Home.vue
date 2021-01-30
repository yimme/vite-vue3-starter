<template>
  <div>i am home</div>
  <div>{{ count }}</div>
  <button @click="add">+</button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapActions, mapState } from 'vuex';

  export default defineComponent({
    name: 'Home',
    computed: mapState(['count']),
    methods: {
      ...mapActions({ add: 'increment' }),
    },
  });
</script>
