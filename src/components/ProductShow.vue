<template>
    <div>
        <p>My ID from the props object is: {{ productId }}</p>
        <div v-if="isPending">
            <p>Loading...</p>
        </div>
        <div v-else-if="productWithId">My title from fetch is: {{ productWithId.title }}</div>
            
        <div v-else-if="error">
            <p>Something went wrong: {{ error.messsage }}</p>
        </div>
        <!-- <p id="notice"><%= notice %></p>

        <p>
        <strong>Title:</strong>
        <%= @product.title %>
        </p>

        <p>
        <strong>Description:</strong>
        <%= @product.description %>
        </p>

        <p>
        <strong>Image url:</strong>
        <%= @product.image_url %>
        </p>

        <p>
        <strong>Price:</strong>
        <%= @product.price %>
        </p>

        <%= link_to 'Edit', edit_product_path(@product) %> |
        <%= link_to 'Back', products_path %> -->
    </div>
</template>

<script>
import { useFetch } from '../helpers/fetch'

export default {
    props: ['productId'],
    setup(props) {
        const { data: productWithId, error, isPending } = useFetch(
            () => `http://localhost:3000/products/${props.productId}`
        )

        // Emit a value that sets the ID to null so that the modal will close
        
        return {
            productWithId,
            error,
            isPending
        }
    },
    
}
</script>