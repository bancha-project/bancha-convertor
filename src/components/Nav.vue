<template>
    <div id="nav">
        <ul id="slide-out" class="sidenav sidenav-fixed">
            <li>
                <router-link to="/">
                    <h4 class="title">変換野郎</h4>
                </router-link>
            </li>

            <li><div class="divider"></div></li>
            <li><a class="subheader">メインコンテンツ</a></li>

            <li>
                <router-link to="/sql">
                    <i class="material-icons">edit</i>
                    SQL
                </router-link>
            </li>
            <li>
                <router-link to="/base64">
                    <i class="material-icons">edit</i>
                    Base64
                </router-link>
            </li>
            <li>
                <router-link to="/case">
                    <i class="material-icons">edit</i>
                    Case
                </router-link>
            </li>

            <li><div class="divider"></div></li>
            <li><a class="subheader">ほかのコンテンツ</a></li>

            <li>
                <router-link to="/contact">
                    <i class="material-icons">contact_mail</i>
                    コンタクト
                </router-link>
            </li>
            <li>
                <router-link to="/about">
                    <i class="material-icons">directions_walk</i>
                    制作者について
                </router-link>
            </li>
        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger">
            <i class="material-icons">menu</i>
        </a>
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

    /*
     * タイトルは明朝体
     */
    .title {
        font-family: serif;
        font-weight: bold;
    }
</style>
