/**
 * @file /src/components/TheTestComponents/index.tsx
 * @fileoverview Test component with using TSX rendering in setup function
 * @author Artem Shuvaev
 * @version 1.0.0
 */

import { defineComponent } from 'vue'
import styles from './styles.module.css'

export default defineComponent({
  name: 'TheTestComponent',
  props: {
    counter: {
      type: Number,
      default: 0,
    },
  },
  emits: {
    click: null,
  },
  setup(props, { emit }) {
    /** Methods */

    /**
     * Simple click handler
     * @emits click
     */
    const onClickHandler = () => emit('click')

    /** Rendering */
    return () => (
      <div class={styles.test}>
        <h5>TheTestComponent</h5>
        <div>Now counter is: {props.counter}</div>
        <button onClick={onClickHandler}>Emit click (increase counter)</button>
      </div>
    )
  },
})
