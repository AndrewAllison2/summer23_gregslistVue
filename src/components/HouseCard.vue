<template>
  <div class="row">
    <h2>{{ houseProp.year}} {{ houseProp.bedrooms }} Bed {{ houseProp.bathrooms }} Bath {{ houseProp.levels }} Story Home</h2>
      <h4>Price: $ {{ houseProp.price }}</h4>
      <p>{{ houseProp.description }}</p>
      <p>Posted On: {{ houseProp.createdAt.toLocaleDateString() }}</p>
      <img class="img-fluid account-img" :src="houseProp.creator.picture" :alt="houseProp.creator.name">

    </div>
  
</template>


<script>
import { House } from "../models/House.js";

export default {
  props: {
    houseProp: {type: House}
  },

  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>
.account-img {
  height: 7vh;
  width: 7vw;
  border-radius: 100%;
}

</style>