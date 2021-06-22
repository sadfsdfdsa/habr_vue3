<template>
  <div class="hello">
    <h5>TheHelloWorldComponent</h5>

    Now counter is {{ props.counter }}
    <div>
      <button @click="emitCustomEvent">
        Emit custom event (increase counter)
      </button>
      <button @click="changeString">Change string in store</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
/**
 * @file /src/components/TheHelloWorldComponent.vue
 * @fileoverview Child component example with using new setup, emits, store etc
 * @author Artem Shuvaev
 * @version 1.0.0
 */

import { defineEmit, defineProps } from 'vue'
import { habrModule } from '../store'

/* Props */
const props = defineProps({
  counter: {
    type: Number,
    required: true,
  },
})

/* Emits */

// Define emits signatures, 
// I don't know but signatures works only with null as output type (instead VOID or UNDEFINED)
const emit = defineEmit({
  customEvent: null,
  customEvent2: (payload: { test: string }) => null
})

/* Methods */

/**
 * Call dispatch of store module
 */
const changeString = () =>
  habrModule.actions.setString('changed from HelloWorld.vue')

/**
 * @emits customEvent
 */
const emitCustomEvent = () => emit('customEvent')

// it's typed payload!
const emitCustomEvent2 = () =>
  emit('customEvent2', {
    test: 'string',
  })
</script>

<style lang="css" scoped>
.hello {
  background-color: lightsteelblue;
  padding: 5vh;
  margin-top: 5vh;
}
</style>