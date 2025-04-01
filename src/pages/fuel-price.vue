<template>
  <q-page class="">
    <q-page-container style="padding: 0;">
    <!-- Hero Section -->
      <div class="hero-container relative-position" style="height: 300px;">
        <q-img src="/images/cards-banner.png" class="absolute-full" style="z-index: -1; background-color: transparent;">
          <div class="absolute-center text-center text-white" style="background: transparent;">
            <div class="text-h2 text-weight-bold">Current Fuel Prices</div>
          </div>
        </q-img>
      </div>

      <div class="fuel-price-field q-my-xl">
        <div class="form-group">
          <!-- <label class="text-lg text-bold">Search Location or Select State</label>
          <q-select
            v-model="location"
            :options="locationOptions"
            outlined
            dense
            class="custom-select"
            emit-value
            map-options
          /> -->

          <q-input v-model="searchQuery" label="Search location or select state" filled @update:model-value="filterSuggestions" />
          <q-list v-if="suggestions.length" class="suggestions-list">
            <q-item v-for="(item, index) in suggestions" :key="index" clickable @click="selectLocation(item)">
              <q-item-section>{{ item.city }}, {{ item.state }} - {{ item.zip }}</q-item-section>
            </q-item>
          </q-list>

          <div id="location-map" class="bg-primary q-my-md">
          </div>

          <div class="q-pa-md q-mb-xl">
            <!-- Section Title -->
            <h4 class="text-center text-bold q-mb-xl">Locations Near Your Search</h4>
            <!-- Locations Grid -->
            <div v-if="isActive" class="row justify-center q-gutter-xl q-mb-lg" style="flex-direction: column;">
              <div class="flex items-center">
                <q-badge color="blue" rounded class="location-dot q-mr-md" />
                <div>
                  <p class="text-bold text-primary text-h6 q-mb-xs">{{ selectedLocation.name }}</p>
                </div>
              </div>
              <q-table
                :rows="modalRows"
                :columns="modalColumns"
                v-model:pagination="modelPagination"
                hide-bottom
                flat
                bordered
              />
            </div>

            </div>
        </div>
      </div>
    </q-page-container>
  </q-page>
</template>
<script>
import { onMounted, ref,computed, nextTick} from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { api } from 'src/boot/axios';
export default {
  setup() {
    const isActive =ref(false);
    const locations = ref([]);
    const searchQuery = ref('');
    const suggestions = ref([]);
    const selectedLocation = ref([]);
    const modelPagination =ref({page:1, rowsPerPage:15})
    let map;
    let markersLayer;
    const fetchLocations = async () => {
      try {
        const response = await api.get('get-user-locations-and-fuel-price');
        locations.value = response.data.data;
        await nextTick();
        initMap();
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    const initMap = () => {
      if (map) {
        map.remove();
      }
      map = L.map('location-map').setView([37.0902, -95.7129], 4);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      markersLayer = L.layerGroup().addTo(map);
      locations.value.forEach(location => {
        addMarker(location);
      });
    };

    const addMarker = (location) => {
      const starIcon = L.divIcon({
        className: '',
        html: `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${location.star_color || 'gold'}" xmlns="http://www.w3.org/2000/svg">
            <polygon points="12,2 15,10 23,10 17,15 19,22 12,18 5,22 7,15 1,10 9,10" stroke="black" stroke-width="1"/>
          </svg>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });

      L.marker([location.lat, location.long], { icon: starIcon })
        .bindPopup(`${location.city}, ${location.state} - ${location.zip}`)
        .addTo(markersLayer);
    };

    const filterSuggestions = () => {
      if (!searchQuery.value) {
        suggestions.value = [];
        return;
      }
      suggestions.value = locations.value.filter(loc =>
        loc.city.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        loc.state.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        loc.zip.includes(searchQuery.value)
      );
    };

    const selectLocation = (location) => {
      searchQuery.value = `${location.city}, ${location.state} - ${location.zip}`;
      suggestions.value = [];
      selectedLocation.value = location;


      // Set the map view to the selected location
      map.setView([location.lat, location.long], 10, { animate: true });

      // Remove previous marker if it exists
      if (selectedLocation.value.marker) {
        map.removeLayer(selectedLocation.value.marker);
      }

      // Add a new marker at the selected location
      const marker = L.marker([location.lat, location.long]).addTo(map)
        .bindPopup(`<strong>${location.name}, ${location.city}, ${location.state} - ${location.zip}</strong>`)
        .openPopup(); // Automatically open the popup

      // Store the marker in selectedLocation
      selectedLocation.value.marker = marker;

      isActive.value = true;
    };

    const modalColumns = [
      { name: "field", label: "Field", align: "left", field: "field" },
      { name: "value", label: "Value", align: "left", field: "value" }
    ];

    // Generate Modal Table Data
    const modalRows = computed(() => {
      if (!selectedLocation.value) return [];
      return [
        { field: "Name", value:selectedLocation.value.name},
        { field: "Directory Address ", value: selectedLocation.value.directory_address },
        { field: "Restaurants", value: selectedLocation.value.restaurants },
        { field: "Main Phone", value: selectedLocation.value.main_phone },
        { field: "Hours of Operation", value: selectedLocation.value.hours_of_operation },
        { field: "Retail Diesel", value: selectedLocation.value.retail_diesel },
        { field: "Feedback Mail", value: selectedLocation.value.feedback_mail },
        { field: "City", value: selectedLocation.value.city },
        { field: "State", value: selectedLocation.value.state },
        { field: "Zip/Postal Code", value: selectedLocation.value.zip },
      ];
    });

    onMounted(fetchLocations);

    return { locations, searchQuery, suggestions, filterSuggestions, selectLocation,selectedLocation, modalColumns, modalRows,modelPagination,isActive,};
  }
};
</script>

<style>
 /* Bigger Location Card */
.location-card {
  text-align: left;
  max-width: 350px;
}

/* Bigger Circle Dot */
.location-dot {
  width: 14px;
  height: 14px;
}

/* View More Button */
.view-more-btn {
  border-radius: 25px;
  font-weight: bold;
  font-size: 18px;
  padding: 10px 25px;
}
.fuel-price-field{
  width: 50%;
  margin-inline: auto;
}
#location-map{
  height: 50vh;
}

/* Mobile (up to 600px) */
@media (max-width: 600px) {
  .fuel-price-field{
  width: 90%;
}
}
/* Laptop (601px - 1024px) */
@media (min-width: 601px) and (max-width: 1024px) {
  .fuel-price-field{
  width: 50%;
}
}

/* Desktop (1025px - 1440px) */
@media (min-width: 1025px) and (max-width: 1440px) {

}
</style>
