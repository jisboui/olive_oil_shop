<template>
  <h1>زيت زيتونة من عند الياس السبوعي جرب تحصل الكريدي لااا لااا لااا</h1>
  <ProductsList :products="products" />
</template>

<script>
import ProductsList from '../components/ProductsList.vue';
import axios from 'axios';

export default {
  name: "ProductsPage",
  components: {
    ProductsList,
  },
  data() {
    return {
      products: [],
    }
  },
  async created() {
    const response = await axios.get('/api/products');
    const products = response.data;
    this.products = products;
  }
}
</script>