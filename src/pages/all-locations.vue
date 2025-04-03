<template>
  <q-page>
    <div class="container">
      <div class="q-my-xl rounded-borders" style="">
        <div class="banner-container row justify-center text-center q-pb-lg">
          <div class="col-12">
            <h4 class=" q-mb-md">
              AMBEST All <span class="text-weight-bold">Locations</span>
            </h4>
          </div>
        </div>
      </div>

      <div class="">
        <div class="row justify-center q-my-xl">
          <div class="" style="width: 50%;">
            <q-input v-model="searchQuery" type="search" label="Search location or select state" outlined @update:model-value="filterSuggestions"
            />
            <q-list v-if="suggestions.length" class="suggestions-list">
              <q-item v-for="(item, index) in suggestions" :key="index" clickable @click="selectLocation(item)">
                <q-item-section>{{ item.name }},{{ item.city }}, {{ item.state }} - {{ item.zip }}</q-item-section>
              </q-item>
            </q-list>
            <!-- <div class=" row q-my-lg" style="gap: 5px;">
              <q-btn color="primary" label="Travel/Service Center" @click="sortBytravelService" class="view-more-btn" />
              <q-btn color="red" label="Travel Center" class="view-more-btn"  />
              <q-btn color="green" label="Express" class="view-more-btn"  />
              <q-btn label="Fuel Stop" class="view-more-btn" style="background-color: #b5a621;color : white;" />
              <q-btn style="background-color: rgb(137, 207, 240);color : white;" label="Service Center/Mobile Locations" class="view-more-btn" />
            </div> -->
          </div>
        </div>

        <!-- <div class="grid-container">
          <q-card v-for="(address, index) in selectedLocation" :key="index" class="address-card">
            <q-card-section>
              <div class="text-h6">{{ address.name }}</div>
              <div class="text-subtitle2">{{ address.city }}, {{ address.state }},{{ address.zip }},</div>
            </q-card-section>
          </q-card>
        </div> -->

        <div class="row justify-center q-gutter-xl q-mb-lg">
            <div v-for="(location, index) in selectedLocation" :key="index" class="col-12 col-md-3 location-card">
              <div class="row items-baseline">
                <!-- Circle Dot beside heading -->
                <q-badge :color="location.star_color" rounded class="location-dot q-mr-md" />
                <div>
                  <p class="text-bold text-primary text-h6 q-mb-xs">{{ location.name }}</p>
                  <p class="text-body1 q-mb-none">{{ location.city  }}, {{ location.state  }},{{ location.zip  }}.</p>
                  <p class="text-body1">{{ location.main_phone }}</p>
                </div>
              </div>
            </div>
        </div>

      </div>

      <q-pagination
      v-model="pagination.page"
      :max="maxPage"
      :max-pages="5"
      boundary-numbers
      @update:model-value="updatePagination"
      class="q-mt-md"
      />

    </div>
  </q-page>
</template>
<script>
import { ref,onMounted} from 'vue';
import { api } from 'src/boot/axios';
export default{
  setup(){
    const locations = ref([]);
    const searchQuery = ref('');
    const suggestions = ref('');
    const selectedLocation = ref([]);
    const pagination = ref({ page: 1, rowsPerPage: 6 });
    const fetchLocations = async () => {
      try {
        const response = await api.get('get-user-locations-and-fuel-price');
        locations.value = response.data.data;
        selectedLocation.value = locations.value;
        console.log(locations);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    const filterSuggestions = () => {
      if (!searchQuery.value) {
        suggestions.value = [];
        selectedLocation.value = locations.value;
        return;
      }
      selectedLocation.value = locations.value.filter(loc =>
        loc.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        loc.city.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        loc.state.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        loc.zip.includes(searchQuery.value)
      );
    };

    const selectLocation = (location) => {
      searchQuery.value = `${location.name}, ${location.city}, ${location.state} - ${location.zip}`;
      suggestions.value = [];
      selectedLocation.value = {location};
      console.log(selectedLocation.value);
    };

    const sortBytravelService=()=>{
      // let sortedBy = "city";
      selectedLocation.value.sort((a, b) => a.star_color.localeCompare(b.star_color));
    }
    onMounted(() => {
      fetchLocations();
    });
    return {
      locations,
      searchQuery,
      suggestions,
      fetchLocations,
      filterSuggestions,
      selectLocation,
      selectedLocation,
      pagination,
      sortBytravelService,
    }
  }
}
</script>
<style>
.container{
  width: 90%;
  margin: auto;
}
.banner-container{
  background-color: #f5f9fc !important;
  border-radius: 20px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}
.address-card {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 16px;
  transition: transform 0.2s;
}
.address-card:hover {
  transform: scale(1.05);
}
</style>
