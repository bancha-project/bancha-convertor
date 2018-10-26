<template>
    <div>
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">あひゃえもん</span>
                <p>Composer</p>
            </div>
            <div class="card-action">
                <a href="http://ahyaemon.matrix.jp/">あひゃえもんのページ</a>
                <a href="https://github.com/ahyaemon">GitHub</a>
            </div>
        </div>

        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">Kentama7</span>
                <p>Super Engeneer</p>
            </div>
            <div class="card-action">
                <a href="https://github.com/Kentama7">GitHub</a>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Abount extends Vue {
    }
</script>