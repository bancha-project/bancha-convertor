<template>
    <div class="row">
        <span>Caseを変えたい。</span>
        <div class="section input-field">
            <textarea id="case" v-bind:value="inputValue" v-on:input="handleInput($event)"
                      class="materialize-textarea"></textarea>
            <label for="case">Text</label>
            <button v-on:click="handleClick()" class="waves-effect waves-light btn">変える</button>
        </div>
        <div class="section">
            <h5>大文字</h5>
            <pre>{{ value | convertUpperCase }}</pre>
        </div>
        <div class="divider"></div>
        <div class="section">
            <h5>小文字</h5>
            <pre>{{ value | convertLowerCase }}</pre>
        </div>
        <div class="divider"></div>
        <div class="section">
            <h5>キャメルケース</h5>
            <pre>{{ value | convertSnakeToCamelCase }}</pre>
        </div>
        <div class="divider"></div>
        <div class="section">
            <h5>パスカルケース</h5>
            <pre>{{ value | convertPascalCase }}</pre>
        </div>
        <div class="divider"></div>
        <div class="section">
            <h5>スネークケース</h5>
            <pre>{{ value | convertCamelToSnakeCase }}</pre>
        </div>
        <div class="divider"></div>
        <div class="section">
            <h5>ケバブケース</h5>
            <pre>{{ value | convertKebabCase }}</pre>
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
    }
  }
</script>
