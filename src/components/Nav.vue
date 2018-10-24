<template>
    <div id="nav">
        <ul>
            <li>
              <router-link to="/sql">
                SQL
              </router-link>
            </li>
            <li>
              <router-link to="/base64">
                Base64
              </router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Nav extends Vue {
    }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>