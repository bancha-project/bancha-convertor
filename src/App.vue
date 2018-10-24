<template>
  <div>
    <Header/>
    <hr/>

    <Nav/>
    <hr/>

    <router-view></router-view>
    <hr/>

    <Footer/>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import Header from "./components/Header.vue"
    import Nav from "./components/Nav.vue"
    import Footer from "./components/Footer.vue"

    @Component({
      components: {
        Header,
        Nav,
        Footer
      }
    })
    export default class App extends Vue {
    }
</script>
