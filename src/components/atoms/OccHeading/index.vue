<template>
  <div class="pagination">
    <button>&lt;</button>
    <button v-if="showFirsPageSelector">1</button>
    <div v-if="showFirsPageSelector">...</div>
    <button
      v-for="selector in selectors"
      :key="selector"
      :class="[selector === current && 'selected']"
    >
      {{ selector }}
    </button>
    <div v-if="showLastPageSelector">...</div>
    <button v-if="showLastPageSelector">{{ total }}</button>
    <button>&gt;</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@vue/composition-api";

interface Data {}
interface Methods {}
interface Computed {}
interface Props {
  current: number;
  total: number;
}

const showPageCount = 4;

export default defineComponent({
  name: "Pagination",
  props: {
    current: {
      type: Number as PropType<Props["current"]>,
      required: true,
    },
    total: {
      type: Number as PropType<Props["total"]>,
      required: true,
    },
  },
  emits: ["change"],
  setup(props) {
    const selectors = computed(() => {
      let start: number;
      if (props.current <= 2) {
        start = 1;
      } else if (props.total - props.current <= 2) {
        start = props.total - showPageCount + 1;
      } else {
        start = props.current - Math.floor(showPageCount / 2);
      }

      return [...Array(showPageCount)].map((_, i) => start + i);
    });

    const showFirsPageSelector = computed(() => {
      return props.current > showPageCount;
    });
    const showLastPageSelector = computed(() => {
      return props.current < props.total - showPageCount + 1;
    });

    return {
      selectors,
      showFirsPageSelector,
      showLastPageSelector,
    };
  },
});
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
}
.selected {
  color: #248ddd;
}
</style>
