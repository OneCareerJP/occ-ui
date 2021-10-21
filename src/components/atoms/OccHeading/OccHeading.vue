<template>
  <component :is="tagLevel" :class="classes" :style="lineClampClassName">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export interface Props {
  lineClamp: number;
  level: number;
  visual: string;
  color: string;
}

export default defineComponent({
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
    lineClamp: {
      type: Number,
      default: 0,
    },
  },
  setup(props: Props) {
    const tagLevel = computed(() => {
      return `h${props.level}`;
    });
    const visualLevel = computed(() => {
      return props.visual ? props.visual : props.level;
    });
    const lineClampClassName = computed(() => {
      return props.lineClamp > 0
        ? {
            display: "-webkit-box",
            overflow: "hidden",
            "max-height": "initial",
            "-webkit-line-clamp": `${props.lineClamp}`,
            "-webkit-box-orient": "vertical",
          }
        : {};
    });
    const classes = computed(() => [
      `occ-heading--${visualLevel.value}`,
      props.color ? `occ-heading__color--${props.color}` : "",
    ]);

    return { classes, tagLevel, visualLevel, lineClampClassName };
  },
});
</script>

<style lang="scss" scoped>
.occ-heading {
  line-height: 1.4;
  font-weight: 700;

  &--1 {
    font-size: 2.6rem;
  }

  &--2 {
    font-size: 22px;
  }

  &--3 {
    font-size: 18px;
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
