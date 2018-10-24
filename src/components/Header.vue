<template>
    <header>
        <router-link to="/">
            <h1>Bancha Convertor</h1>
        </router-link>
    </header>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Header extends Vue {
    }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: black;
  }
</style>