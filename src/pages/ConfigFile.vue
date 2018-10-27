<template>
    <div>
        <div class="row">
            <form class="col s12">
                <div class="config-text-title">
                    <h5>json</h5>
                    <button title="jsonをクリップボードにコピーします" @click="copyJson">
                        <i class="material-icons">content_copy</i>
                    </button>
                </div>
                <div class="row" id="a">
                    <div id="jsondiv" class="input-field col s12 lighten-5" :class="{ teal: parsed, pink: !parsed }">
                        <textarea id="jsonarea" class="materialize-textarea" v-model="jsonText" v-on:keyup="jsonChanged"></textarea>
                    </div>
                </div>
            </form>
        </div>
        <div class="row">
            <form class="col s12">
                <div class="config-text-title">
                    <h5>yaml</h5>
                    <button title="yamlをクリップボードにコピーします" @click="copyYaml">
                        <i class="material-icons">content_copy</i>
                    </button>
                </div>
                <div class="row">
                    <div id="yamldiv" class="input-field col s12 lighten-5" :class="{ teal: parsed, pink: !parsed }">
                        <textarea id="yamlarea" class="materialize-textarea" v-model="yamlText" v-on:keyup="yamlChanged"></textarea>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import jsyaml from "js-yaml"
    import M from "materialize-css"

    @Component
    export default class ConfigFile extends Vue {
        parsed = true

        jsonElem!: Element
        jsonDiv!: Node
        jsonText = ""

        yamlElem!: Element
        yamlDiv!: Node
        yamlText = ""

        mounted() {
            this.jsonElem = document.getElementById("jsonarea") as Element
            this.jsonDiv = document.getElementById("jsondiv") as Node

            this.yamlElem = document.getElementById("yamlarea") as Element
            this.yamlDiv = document.getElementById("yamldiv") as Node
        }

        jsonChanged() {
            // 空文字の場合はパースできたとみなす
            if(this.jsonText == "") {
                this.yamlText = ""
                this.parsed = true
                return
            }

            // json形式のテキストから、オブジェクトに変換
            let obj
            try {
                obj = JSON.parse(this.jsonText)
            } catch(err) {
                console.log("jsonのパースに失敗")
                this.parsed = false
                return
            }

            // オブジェクトから、yaml形式のテキストに変換
            this.yamlText = jsyaml.dump(obj, {
                "indent": 4
            })
            this.parsed = true
            M.textareaAutoResize(this.yamlElem)
        }

        yamlChanged() {
            // 空文字の場合はパースできたとみなす
            if(this.yamlText == "") {
                this.jsonText = ""
                this.parsed = true
                return
            }

            // yaml形式のテキストから、オブジェクトに変換
            let obj
            try {
                obj = jsyaml.load(this.yamlText)
            } catch(err) {
                console.log("yamlのパースに失敗")
                this.parsed = false
                return
            }

            // オブジェクトから、json形式のテキストに変換
            this.jsonText = JSON.stringify(obj, null, 4)
            this.parsed = true
            M.textareaAutoResize(this.jsonElem)
        }

        copyJson() {
            document.getSelection().selectAllChildren(this.jsonDiv)
            document.execCommand("copy")
        }

        copyYaml() {
            document.getSelection().selectAllChildren(this.yamlDiv)
            document.execCommand("copy")
        }

    }
</script>

<style lang="scss" scoped>
    textarea {
        height: 200px;
    }

    .config-text-title {
        h5 {
            display: inline;
        }

        i {
            display: inline;
        }

        button {
            border: none;
            margin-left: 10px;
            background-color: rgba(0, 0, 0, 0);
        }

        button:hover {
            color: rgba(158, 45, 45, 0.8);
        }

    }
</style>