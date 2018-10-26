<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col s12">
                  <router-view></router-view>
                </div>
            </div>
        </div>
    </main>
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