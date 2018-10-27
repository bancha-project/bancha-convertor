<template>
    <div>
        <div class="row">
            <form class="col s12">
                <h5>json</h5>
                <div class="row">
                    <div class="input-field col s12 teal lighten-5">
                        <textarea id="textarea1" class="materialize-textarea" style="height:200px;" v-model="jsonText" v-on:keyup="jsonChanged"></textarea>
                    </div>
                </div>
            </form>
        </div>
        <div class="row">
            <form class="col s12">
                <h5>yaml</h5>
                <div class="row">
                    <div class="input-field col s12 teal lighten-5">
                        <textarea id="textarea1" class="materialize-textarea" style="height:200px;" v-model="yamlText" v-on:keyup="yamlChanged"></textarea>
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

    @Component
    export default class ConfigFile extends Vue {
        jsonText = ""
        yamlText = ""

        jsonChanged() {
            let json = ""
            try {
                json = JSON.parse(this.jsonText)
                this.yamlText = jsyaml.dump(json, {
                    "indent": 4
                })
            } catch(err) {

            }
        }

        yamlChanged() {
            const yaml = jsyaml.load(this.yamlText)
            const jsonText = JSON.stringify(yaml, null, 4)
            try{
                JSON.parse(jsonText)
                this.jsonText = jsonText
            } catch(err) {

            }
        }
    }
</script>