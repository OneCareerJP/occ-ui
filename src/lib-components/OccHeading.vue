<template>
  <div
    class="occ-heading"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue-demi'

/* types */
export interface Props {
  title: boolean
  lineClamp: number
  level: number
  visual: string
  color: string
}

export default /*#__PURE__*/defineComponent({
  // props: {
  //   level: {
  //     type: Number,
  //     validator: (level: number) => {
  //       return [1, 2, 3, 4, 5, 6].includes(level)
  //     },
  //     default: 1,
  //   },
  //   visual: {
  //     type: String,
  //     default: '',
  //   },
  //   color: {
  //     type: String,
  //     default: '',
  //   },
  //   lineClamp: {
  //     type: Number,
  //     default: 0,
  //   },
  //   title: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   bold: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  name: 'OccHeading',
  setup() {
    const tagLevel = computed(() => {
      return `h1`
    })
    console.log({tagLevel});

return {tagLevel}

    // const tagLevel = computed(() => {
    //   return props.title ? `title` : `h${props.level}`
    // })
    // const visualLevel = computed(() => {
    //   return props.visual ? props.visual : props.level
    // })
    // const lineClampClassName = computed(() => {
    //   return props.lineClamp > 0
    //     ? {
    //         display: '-webkit-box',
    //         overflow: 'hidden',
    //         'max-height': 'initial',
    //         '-webkit-line-clamp': `${props.lineClamp}`,
    //         '-webkit-box-orient': 'vertical',
    //       }
    //     : {}
    // })

  //   return { tagLevel, visualLevel, lineClampClassName }
  },
})
</script>

<style  scoped>
.occ-heading {
  line-height: 1.5;
  font-weight: normal;
/*
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
      color: $occ-black;
    }

    &--primary {
      color: $occ-primary;
    }

    &--font {
      color: $occ-font;
    }

    &--font-light {
      color: $occ-font-light;
    }

    &--font-deep {
      color: $occ-font-deep;
    }
  }

  &--bold {
    font-weight: bold;
  }

  &--line-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  } */
}
</style>
