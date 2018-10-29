<template>
    <div>
        <span>Caseを変えたい。</span>
        <div class="row">
            <div class="input-field col s6">
                <input type="text" id="case_text" v-bind:value="inputValue" v-on:input="handleInput($event)" class="validate">
                <label for="case_text">Text</label>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <button v-on:click="handleClick()" class="waves-effect waves-light btn">変える</button>
            </div>
            <div class="col s12">
                <div class="col s12"><span>大文字</span></div>
                <div class="col s6 offset-s1"><span class="flow-text">{{ value | convertUpperCase }}</span></div>
            </div>
            <div class="col s12">
                <div class="col s12"><span>小文字</span></div>
                <div class="col s6 offset-s1"><span class="flow-text">{{ value | convertLowerCase }}</span></div>
            </div>
            <div class="col s12">
                <div class="col s12"><span>キャメルケース</span></div>
                <div class="col s6 offset-s1"><span class="flow-text">{{ value | convertSnakeToCamelCase }}</span></div>
            </div>
            <div class="col s12">
                <div class="col s12"><span>スネークケース</span></div>
                <div class="col s6 offset-s1"><span class="flow-text">{{ value | convertCamelToSnakeCase }}</span></div>
            </div>
            <div class="col s12">
                <div class="col s12"><span>パスカルケース</span></div>
                <div class="col s6 offset-s1"><span class="flow-text">{{ value | convertPascalCase }}</span></div>
            </div>
            <div class="col s12">
                <div class="col s12"><span>ケバブケース</span></div>
                <div class="col s6 offset-s1"><span class="flow-text">{{ value | convertKebabCase }}</span></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator';

  @Component({
    /** filters */
    filters: {
      convertUpperCase(value: string): string | null {
        if (!value) {
          return null;
        }
        return value.toUpperCase();
      },
      convertLowerCase(value: string): string | null {
        if (!value) {
          return null;
        }
        return value.toLowerCase();
      },
      convertSnakeToCamelCase(value: string): string | null {
        if (!value) {
          return null;
        }
        return value.replace(/_./g,
          (s) => s.charAt(1).toUpperCase()
        );
      },
      convertCamelToSnakeCase(value: string): string | null {
        if (!value) {
          return null;
        }
        return value.replace(/([A-Z])/g,
          (s) => '_' + s.charAt(0).toLowerCase()
        );
      },
      convertPascalCase(value: string): string | null {
        if (!value) {
          return null;
        }

        let camel = value.replace(/_./g,
          (s) => s.charAt(1).toUpperCase()
        );
        return camel.charAt(0).toUpperCase() + camel.slice(1)
      },
      convertKebabCase(value: string): string | null {
        if (!value) {
          return null;
        }
        return value.replace(/([A-Z])/g,
          (s) => '-' + s.charAt(0).toLowerCase()
        );
      },
    },
  })
  export default class Case extends Vue {
    value: string = '';
    inputValue: string = '';

    handleInput($event: Event): void {
      this.inputValue = (($event.target as any) as HTMLInputElement).value;
    }
    handleClick(): void {
      if (this.inputValue === '') {
        return;
      }
      this.value = this.inputValue;
      this.inputValue = '';
    }
  }
</script>
