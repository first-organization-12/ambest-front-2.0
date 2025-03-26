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
          <label class="text-lg text-bold">Search Location or Select State</label>
          <q-select
            v-model="location"
            :options="locationOptions"
            outlined
            dense
            class="custom-select"
            emit-value
            map-options
          />
        </div>
      </div>

    </q-page-container>
  </q-page>
</template>
<script>
import { ref } from 'vue';
export default{
  setup(){
    const location = ref('');
    const locationOptions =ref([
        { label: "Select One", value: "" },
        { label: "Oil Change", value: "oil_change" },
        { label: "Brake Repair", value: "brake_repair" },
        { label: "Engine Diagnostics", value: "engine_diagnostics" },
        { label: "Tire Replacement", value: "tire_replacement" },
        { label: "Other Services", value: "other_services" }
    ]);
    return{
      locationOptions,
      location,
    }
  }
}
</script>
<style>
.fuel-price-field{
  width: 35%;
  margin-inline: auto;
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
