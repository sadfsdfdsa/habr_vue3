<template>
  <div>
    <!-- Main body -->
    <div class="main">
      <h5>App.vue</h5>

      String from store: {{ readonlyStringFromStore }}

      <div>
        <button @click="increaseCounter">Counter: {{ counter }}</button>
      </div>
    </div>
    <!-- /Main body -->

    <TheHelloWorldComponent :counter="counter" @customEvent="increaseCounter" />

    <TheTestComponent :counter="counter" @click="increaseCounter" />
  </div>
</template>

<script lang="ts" setup>
/**
 * @file src/App.vue
 * @author Artem Shuvaev
 * @version 1.0.0
 * @fileoverview Entry Vue example file for it's project
 */

import { ref, onMounted, readonly, defineAsyncComponent } from 'vue'
import { habrModule } from './store'

/* Components */

// Vue + new setup script example component
const TheHelloWorldComponent = defineAsyncComponent(
  () => import('./components/TheHelloWorldComponent.vue')
)

// Vue + new setup and TSX render example
const TheTestComponent = defineAsyncComponent(
  () => import('./components/TheTestComponent/index')
)

/* Data */

// must be readonly cause of state proxying
const readonlyStringFromStore = readonly(habrModule.state.strExample)

// simple reactive variable
const counter = ref(0)

/* Hooks */
onMounted(() => {
  habrModule.actions.setString('changed from App.vue string')
})

/* Methods */

/**
 * Increase local reactive counter
 */
const increaseCounter = () => {
  counter.value++
}
</script>¬

<style lang="css">
@import 'styles.css';
</style>

<style lang="css" scoped>
.main {
  background-color: aquamarine;
  padding: 5vh;
}
</style>
