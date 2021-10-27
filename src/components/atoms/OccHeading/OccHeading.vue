<template>
  <component :is="tagLevel" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from "vue";
import { Data, Methods, Computed, Props } from "./types";

export default Vue.extend<Data, Methods, Computed, Props>({
  name: "OccHeading",
  props: {
    level: {
      type: Number,
      validator(level: number) {
        return [1, 2, 3, 4, 5, 6].includes(level);
      },
      default: 1,
    },
    visual: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
  computed: {
    tagLevel() {
      return `h${this.level}`;
    },
    visualLevel() {
      return this.visual ? this.visual : this.level;
    },
    classes() {
      return [
        `occ-heading--${this.visualLevel}`,
        this.color ? `occ-heading__color--${this.color}` : "",
      ];
    },
  },
});
</script>

<style lang="scss" scoped>
.occ-heading {
  line-height: 1.4;
  font-weight: 700;

  &--1 {
    font-size: 20px;
  }

  &--2 {
    font-size: 16px;
  }

  &--3 {
    font-size: 14px;
  }

  &--4 {
    font-size: 12px;
  }

  &--5 {
    font-size: 10px;
  }

  &__color {
    &--black {
      color: $tx-black;
    }
  }

  &--line-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
}
</style>
