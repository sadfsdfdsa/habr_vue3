/**
 * @file src/store/modules/habrModule/state.ts
 * @author Artem Shuvaev
 * @version 1.0.0
 * @fileoverview State for store example with new Ref and Reactive Vue3
 */

import { ref, reactive } from 'vue'

export default class State {
  /**
   * Example string ref (reactive)
   */
  static strExample = ref('string example')

  /**
   * Example number ref (reactive)
   */
  static numberExample = ref(0)

  /**
   * Example string reactive
   */
  static objExample = reactive({
    property: 'property string',
  })
}
