<script>
import { ref } from 'vue'

export default {
  setup() {
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

    function truncate(text, options = {}) {
      const truncateAt = options.truncateAt ? options.truncateAt : 45;

      if (text.length < truncateAt) {
        return text
      }

      const omission = options.omission ? options.omission : " ";

      const length_with_room_for_omission = truncateAt - omission.length

      let stop;
      if (options.separator && [...text].lastIndexOf(options.separator, length_with_room_for_omission) != -1) {
        stop = [...text].lastIndexOf(options.separator, length_with_room_for_omission)
      } else {
        stop = length_with_room_for_omission
      }

      let testStr = {str: ""}
      console.log(testStr.str)

      // this regex will remove html tags from the text but is not a secure html sanitizer for untrusted end user submissions
      return text.substring(0, stop).replace(/<\/?[^>]+(>|$)/g, "") + omission;
    }

    return { 
      products,
      truncate,
      cycleClassNames: cycleClassNames
    }
  }
}
</script>

<template>
  <h1>Products</h1>

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
        <!-- <td><%= truncate(strip_tags(product.description), length: 80) %></td> -->
        <td>{{ truncate(product.description, {omission: "...", separator: ","}) }}</td>
        <td>{{ product.price }}</td>
        <!-- need to pass the product.id for the fetch URL -->
        <td><a href='/show'>Show</a></td>
        <!-- 
        <td>{{ link_to 'Edit', edit_product_path(product) }}</td>
        <td>{{ link_to 'Destroy', product, method: :delete, data: { confirm: 'Are you sure?' } }}</td> 
        -->
      </tr>
    </tbody>
  </table>

  <br>

  <a href="/create">New Product</a>
</template>


