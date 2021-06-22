/**
 * @file src/store/modules/habrModule/mutations.ts
 * @author Artem Shuvaev
 * @version 1.0.0
 * @fileoverview Mutations for store example with new Ref and Reactive Vue3
 */

import State from './state'

export default class Mutations {
  /**
   * Set to state new string
   * @param value 
   */
  static setString (value: string): void {
    State.strExample.value = value
  }

  /**
   * Increate the number in state
   */
  static increaseNumber (): void {
    State.numberExample.value++
  }
}
