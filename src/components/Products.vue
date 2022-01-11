<script>
import { ref } from 'vue'

export default {
  setup() {
    debugger
    const products = ref([])

    fetch('http://localhost:3000/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        products.value = data
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    // cycle service
    let index = 0

    function cycleClassNames(...classNames) {
      console.log("function")

      const value = classNames[index]
      index = next_index()
      return value

      function next_index() {
          return step_index(1)
      }

      function step_index(n) {
        return (index + n) % classNames.length
      }
    }

    return { 
      products,
      cycleClassNames: cycleClassNames
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      <p :class="cycleClassNames('hello', 'goodbye')">{{ product.title }}</p>
    </li>
  </ul>

</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>- 

