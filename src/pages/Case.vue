<template>
    <div>
        Caseを変えたい。
        <input type="text" v-bind:value="inputValue" v-on:input="handleInput($event)"  />
        <button v-on:click="handleClick()">変える</button>
        <h1>大文字:{{ value | convertUpperCase }}</h1>
        <h1>小文字:{{ value | convertLowerCase }}</h1>
        <h1>キャメルケース:{{ value | convertSnakeToCamelCase }}</h1>
        <h1>スネークケース:{{ value | convertCamelToSnakeCase }}</h1>
        <h1>パスカルケース:{{ value | convertPascalCase }}</h1>
        <h1>ケバブケース:{{ value | convertKebabCase }}</h1>
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
