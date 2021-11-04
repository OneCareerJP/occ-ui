<template>
  <component :is="tagLevel" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "@vue/composition-api";

export interface Props {
  level: number;
  visual: string;
  color: string;
}

export default defineComponent({
  name: "OccHeading",
  props: {
    level: {
      type: Number as PropType<Props["level"]>,
      validator: (level: number) => {
        return [1, 2, 3, 4, 5, 6].includes(level);
      },
      default: 1,
    },
    visual: {
      type: String as PropType<Props["visual"]>,
      default: "",
    },
    color: {
      type: String as PropType<Props["color"]>,
      default: "",
    },
  },
  setup(props) {
    const tagLevel = computed(() => {
      return `h${props.level}`;
    });
    const visualLevel = computed(() => {
      return props.visual ? props.visual : props.level;
    });
    const classes = computed(() => [
      `occ-heading--${visualLevel.value}`,
      props.color ? `occ-heading__color--${props.color}` : "",
    ]);
    return { classes, tagLevel, visualLevel };
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
