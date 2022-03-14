<template>
  <form action="http://localhost:3000/products" method="POST" enctype="multipart/form-data">
    <!-- <% if product.errors.any? %>
    <div id="error_explanation">
    <h2><%= pluralize(product.errors.count, "error") %>
    prohibited this product from being saved:</h2>
    <ul>
    <% product.errors.full_messages.each do |message| %>
    <li><%= message %></li>
    <% end %>
    </ul>
    </div>
    <% end %> -->

    <div class="field">
      <label for="product_title">Title</label>
      <input type="text" name="title" id="product_title">
    </div>

    <div class="field">
      <label for="image">Upload an image</label>
      <!-- add accept attribute -->
      <input type="file" name="image" id="image" multiple>
    </div>

    <div class="field">
      <label for="product_description">Description</label>
      <textarea rows="10" cols="60" name="description" id="product_description"></textarea>
    </div>

    <div class="field">
      <label for="product_image_url">Image url</label>
      <input type="text" name="image_url" id="product_image_url">
    </div>

    <div class="field">
      <label for="product_price">Price</label>
      <input type="text" name="price" id="product_price">
    </div>

    <div class="actions">
      <input type="submit" name="commit" value="Create Product" data-disable-with="Create Product">
    </div>
  </form>

   <!-- <%= link_to 'Back', products_path %> -->
</template>