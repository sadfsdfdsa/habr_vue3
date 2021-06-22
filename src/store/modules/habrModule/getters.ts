/**
 * @file src/store/modules/habrModule/getters.ts
 * @author Artem Shuvaev
 * @version 1.0.0
 * @fileoverview Getters for store example with new Ref and Reactive Vue3
 */

import type { Ref } from 'vue'
import State from './state'

export default class Getters {
  /**
   * Test getter with cache
   * @deprecated must use readonly and state proxy if not need any business logic
   */
  static get strExample(): Ref<string> {
    return State.strExample
  }
}
