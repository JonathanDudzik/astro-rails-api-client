<script>
import { ref } from 'vue'
import ProductShow from './ProductShow.vue'
import { useFetch } from '../helpers/fetch'
import truncate from '../helpers/truncate'

export default {
  components: { ProductShow },
  setup() {
    const productID = ref(null)

    const { data: products, error, isPending } = useFetch(
      () => `http://localhost:3000/products`
    );

    // Cycle convert into a JS Class and extract for reuse
    let index = 0
    function cycleClassNames(...classNames) {
      const value = classNames[index]
      index = next_index()

      function next_index() {
        return step_index(1)
      }

      function step_index(n) {
        return (index + n) % classNames.length
      }
      
      return value
    }

    return { 
      productID,
      products,
      error,
      isPending,
      truncate,
      cycleClassNames: cycleClassNames
    }
  }
}
</script>

<template>
  <h1>Products</h1>

  <div v-if="isPending">
    <p>Loading...</p>
  </div>
  
  <div v-else-if="products">
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th colspan="3"></th>
        </tr>
      </thead>
      <tbody>
        <tr 
          :class="cycleClassNames('dark', 'light')"
          v-for="product in products" 
          :key="product.id"
        >
          <td class='image'>
            <img v-bind:src='`http://localhost:3000/assets/${product.image_url}`' class='list_image' />
          </td>
          <td>{{ product.title }}</td>
          <td>{{ truncate(product.description, {truncateAt: 55, omission: "..."}) }}</td>
          <td>{{ product.price }}</td>
          <td @click="productID = product.id">SHOW</td>
          <!-- 
          <td>{{ link_to 'Edit', edit_product_path(product) }}</td>
          <td>{{ link_to 'Destroy', product, method: :delete, data: { confirm: 'Are you sure?' } }}</td> 
          -->
        </tr>
      </tbody>
    </table>
    <br>
    <a href="/create">New Product</a>
    <br>
    <ProductShow v-if="productID" :product-id="productID" />
  </div>

  <div v-else-if="error">
    <p>Something went wrong: {{ error.messsage }}</p>
  </div>

</template>


