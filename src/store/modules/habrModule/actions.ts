/**
 * @file src/store/modules/habrModule/actions.ts
 * @author Artem Shuvaev
 * @version 1.0.0
 * @fileoverview Actions for store example with new Ref and Reactive Vue3
 */

import Mutations from './mutations'

export default class Actions {
  /**
   * Increate the number in state
   */
  static increaseNumber(): void {
    Mutations.increaseNumber()
  }

  /**
   * Set new string by value to state
   * @param value
   */
  static setString(value: string): void {
    Mutations.setString(value)
  }
}
