<template>
  <div>
    <Nav/>
    <Main/>
    <Footer/>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import Nav from "./components/Nav.vue"
    import Footer from "./components/Footer.vue"
    import Main from "./components/Main.vue"

    @Component({
      components: {
        Nav,
        Footer,
        Main
      }
    })
    export default class App extends Vue {
    }
</script>

<style>
  /*
  * サイドバーの分ずらす
  */
  main, footer {
    padding-left: 300px;
  }
  @media only screen and (max-width : 992px) {
    header, main, footer {
      padding-left: 0;
    }
  }
</style>
