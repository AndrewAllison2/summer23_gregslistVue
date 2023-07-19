<template>
  <form @submit.prevent="createHouse()">
    <div class="form-floating mb-3">
      <input v-model="editable.year" required type="number" class="form-control" id="year" placeholder="year...">
      <label for="year">Year Built</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editable.bedrooms" required type="number" class="form-control" id="bedrooms" placeholder="bedrooms...">
      <label for="bedrooms">Number of Bedrooms</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editable.bathrooms" required type="number" class="form-control" id="bathrooms" placeholder="bathrooms...">
      <label for="bathrooms">Number of bathrooms</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editable.levels" required type="number" class="form-control" id="levels" placeholder="levels...">
      <label for="levels">Number of levels</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editable.imgUrl" required type="URL" class="form-control" id="imgUrl" placeholder="imgUrl...">
      <label for="imgUrl">Image of Home</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editable.price" required type="number" class="form-control" id="price" placeholder="price...">
      <label for="price">Price</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editable.description" required type="text" class="form-control" id="description" placeholder="description...">
      <label for="description">Describe your Vibe</label>
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
  </form>
</template>


<script>
import { ref } from "vue";
import { housesService } from "../services/HousesService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({})
    return {
      editable,

      async createHouse() {
          try {
            const houseData = editable.value
            await housesService.createHouse(houseData)
          } catch (error) {
            Pop.error(error.message)
          }
        }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>