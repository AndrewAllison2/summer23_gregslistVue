<template>
  <div class="container-fluid">
    <div class="row mb-3">
      <div class="col-12">
        <h1 class="">Homes for Sale</h1>
        <button class="btn btn-info" type="button" data-bs-toggle="modal" data-bs-target="#formModal">Create Listing</button>
      </div>

    </div>

    <div class="row">
      <div v-for="house in houses" :key="house.id" class="col-10 m-auto elevation-5 bg bg-white rounded mb-3">
        <div class="d-flex">
          <img class="img-fluid house-img" :src="house.imgUrl" alt="">
          <div class="ms-5 mt-2 p-2">
            
            <HouseCard :houseProp="house" />
        </div>
    </div>
    </div>
  </div>
  </div>

  <ModalComponent>
    <template #header>
      <span>House Form</span>
    </template>
    <template #body>
      <HouseForm />
    </template>
  </ModalComponent>
</template>


<script>
import Pop from "../utils/Pop.js";
import {housesService} from '../services/HousesService.js'
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import HouseForm from '../components/HouseForm.vue'
import ModalComponent from "../components/ModalComponent.vue";

export default {
    setup() {
        async function getHouses() {
            try {
                await housesService.getHouses();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        onMounted(() => {
            getHouses();
        });
        return {
            houses: computed(() => AppState.houses)
        };
    },
    components: { HouseForm }
}
</script>


<style lang="scss" scoped>
.house-img {
  height: 30vh;
  width: 30vw;
}
</style>