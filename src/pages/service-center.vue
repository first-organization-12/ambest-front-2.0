<template>
  <q-page class="">
    <q-page-container style="padding: 0;">
    <!-- Hero Section -->
      <div class="hero-container relative-position" style="height: 300px;">
        <q-img src="/images/man-using-laptop-factory-with-red-light 1.png" class="absolute-full" style="z-index: -1; background-color: transparent;">
          <div class="absolute-center text-center text-white" style="background: transparent;">
            <q-img class="banner-text-img" src="/images/Ambest-service-centers.png"/><div>
            </div>
          </div>
        </q-img>
      </div>

      <div class="custom-banner text-center q-ma-xl">
        <h4 class=" q-ma-md"><strong>Where America Stops for Service and Value</strong></h4>
        <q-btn label="SEARCH SERVICE CENTERS" rounded unelevated color="primary"  to="/about-ambest" />
      </div>

      <div class="intro-section row items-center bg-light">
        <!-- Right Side: Image -->
        <div class="col-12 col-md-5 slider" style="border-radius: 20px; display: flex; justify-content: flex-start;">
            <!-- <q-responsive :ratio="9/6"> -->
              <q-carousel
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="primary"
                navigation
                padding
                class="custom-carousel"
              >

          <q-carousel-slide :name="1" class="column no-wrap">
              <div class="fit flex justify-center">
                <q-img class="rounded-borders col-6 full-height" src="/images/conversation.png" style="border-radius: 20px; width: 550px;" />
              </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap">
            <div class="fit flex justify-center">
              <q-img class="rounded-borders col-6 full-height" src="/images/conversation.png" style="border-radius: 20px; width: 550px;" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="column no-wrap">
            <div class="fit flex justify-center">
              <q-img class="rounded-borders col-6 full-height" src="/images/conversation.png" style="border-radius: 20px; width: 550px;" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="4" class="column no-wrap">
            <div class="fit flex justify-center">
              <q-img class="rounded-borders col-6 full-height" src="/images/conversation.png" style="border-radius: 20px; width: 550px;" />
            </div>
          </q-carousel-slide>
        </q-carousel>

    <!-- </q-responsive> -->
      </div>
        <!-- Left Side: Text Content -->
        <div class="col-12  col-md-7 "  >
          <div class="content q-px-xl">
            <h4 class="" style="margin-block: 5px;">From <strong>Routine Maintenance </strong> to <strong>Complex Repairs</strong>, We’ve Got You Covered.</h4>
            <p class="text-desc_1_1" style="line-height: normal;">
              Our expert technicians are equipped to handle everything from basic preventative maintenance to advanced diagnostics and repair. Offering In-Shop and Mobile repair along with many locations that offer Towing & Recovery. We ensure your vehicle is in top condition so you can keep moving forward with Confidence.
            </p>
          </div>
        </div>
      </div>


  <q-container class=" q-pa-md">
    <q-card class="bg-primary service-section text-white q-pa-lg">
      <h4 class="text-center" style="margin: 10px 0px;">Key <span class="text-bold">Services</span></h4>
      <div class="q-pa-xl">
      <div class="row justify-center ">
        <q-card v-for="(service, index) in services.slice(0,5)" :key="index" flat class="col-12 col-sm-6 col-md-2 col-lg-2 text-center bg-primary text-white">
          <q-card-section>
            <q-icon :name="service.icon" class="service-icons" color="primary" size="sm" />
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle1">{{ service.title }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="row justify-center ">
        <q-card v-for="(service, index) in services.slice(5,10)" :key="index" flat class="col-12 col-sm-6 col-md-2 col-lg-2 text-center bg-primary text-white">
          <q-card-section>
            <q-icon :name="service.icon" class="service-icons" color="primary" size="sm"></q-icon>
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle1">{{ service.title }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    </q-card>
  </q-container>

      <div class="intro-section row items-center bg-light">

        <!-- Left Side: Text Content -->
        <div class="col-12  col-md-6 ">
          <div class="content q-pa-xl">
            <q-img src="/images/service-connection-logo.png"
            class="rounded-borders"
            fit="cover"
             width="80%"/>
             <div class="q-pr-xl">
               <h5 class="text-h5" style="margin-block: 5px;"><strong>Connecting You to Quality Care.</strong></h5>
               <p class="text-desc_1_1" style="line-height: normal;">
                  AMBEST Service Centers are committed to keep you rolling. We are constantly innovating to find more efficient means to keep you on the road doing what you do best! Service Connection is made to designed to provide Ease, peace of mind and make your experience exceptional.
                </p>
              </div>
          </div>
        </div>

        <!-- Right Side: Image -->
        <div class="col-12 col-md-6 q-pa-xl" style="max-width: 600px; margin: auto;">
            <q-responsive :ratio="9/6">
              <q-img
              src="/images/men-in-call.png"
              class="rounded-borders"
              fit="cover"
              width="100%"
              style="border-radius: 20px;"
              />
            </q-responsive>
        </div>
      </div>


      <div class="intro-section row items-center bg-light">
        <!-- Right Side: Image -->
        <div class="col-12 col-md-6 text-center slider q-pa-xl" style="display: flex; justify-content: flex-start;">
          <!-- <q-responsive :ratio="9/6"> -->
                <q-carousel
                  v-model="slide"
                  transition-prev="slide-right"
                  transition-next="slide-left"
                  swipeable
                  animated
                  control-color="primary"
                  navigation
                  padding
                  >
                <q-carousel-slide :name="1" class="column no-wrap">
                    <div class="fit flex justify-center">
                      <q-img class="rounded-borders col-6 full-height" src="/images/forest.png" style="border-radius: 20px; width: 550px;" />
                    </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="column no-wrap">
                  <div class="fit flex justify-center">
                    <q-img class="rounded-borders col-6 full-height" src="/images/forest.png" style="border-radius: 20px; width: 550px;" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="3" class="column no-wrap">
                  <div class="fit flex justify-center">
                    <q-img class="rounded-borders col-6 full-height" src="/images/forest.png"  style="border-radius: 20px; width: 550px;"/>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="4" class="column no-wrap">
                  <div class="fit flex justify-center">
                    <q-img class="rounded-borders col-6 full-height" src="/images/forest.png"  style="border-radius: 20px; width: 550px;"/>
                  </div>
                </q-carousel-slide>
              </q-carousel>
          <!-- </q-responsive> -->
      </div>
        <!-- Left Side: Text Content -->
        <div class="col-12  col-md-6 "  >
          <div class="content q-pa-xl">
            <q-img src="/images/CargoSolutions26x10.png"
            class="rounded-borders"
            fit="cover"
             width="50%"/>
             <div class="">
               <h5 class="text-h5" style="margin-block: 5px;"><strong>Your Freight Issues, AMBEST Cargo Solutions</strong></h5>
               <p class="text-desc_1_1" style="line-height: normal;">
                  AMBEST Cargo Solutions offers Load Shift, Banding, Cross-docking, load Transfer, Fork Lift Service and more. We help Carriers reduce cost, optimize logistics and keep cargo moving Safely and efficiently.
                  </p>
              </div>
          </div>
        </div>
      </div>

      <div class="intro-section row items-center bg-light">
        <!-- Left Side: Text Content -->
        <div class="col-12  col-md-6 "  >

          <div class="col-12 col-md-3 q-pa-md row warranty" style="flex-direction: column;">
              <q-img
              src="/images/freedom-warranty-logo.png"
              class="rounded-borders"
              fit="cover"
              width="200px"
              />
            <h5 class=" text-bold q-mt-md q-mb-none" style="font-size: 22px;">Peace of Mind in Every Repair. </h5>
            <div class="">
              <q-btn label="learn more" outline color="primary" rounded unelevated class="q-mt-md text-bold" to="/service-centers/freedom-warranty"/>
            </div>
          </div>
        </div>

        <!-- Right Side: Image -->
        <div class="col-12 col-md-6 text-center warranty-side-image q-pa-xl" style="max-width: 600px; margin: auto;">
          <q-responsive :ratio="9/6"  style="border-radius: 20px;">
            <q-img
            src="/images/car-reparing.png"
            class="rounded-borders"
            fit="cover"
            width="100%"
            style="border-radius: 20px;"
            />
          </q-responsive>
        </div>
        </div>





    <div class="q-pa-md">
    <!-- Title -->
    <h4 class="text-center text-bold q-mb-md">Find an AMBEST Location Near You!</h4>

    <!-- Search Bar -->
    <div class="row justify-center q-gutter-sm q-mb-md">
      <!-- <q-input
        v-model="searchQuery"
        outlined
        dense
        placeholder="Enter City, State, or ZIP"
        class="search-input"
      /> -->
      <div class="search-section">
        <q-input class="" v-model="searchQuery" label="Search location or select state" outlined dense @update:model-value="filterSuggestions" />
        <q-list v-if="suggestions.length" class="suggestions-list">
          <q-item v-for="(item, index) in suggestions" :key="index" clickable @click="selectLocation(item)">
            <q-item-section>{{ item.city }}, {{ item.state }} - {{ item.zip }}</q-item-section>
          </q-item>
        </q-list>
      </div>
      <q-btn color="primary" rounded label="SEARCH" class="search-btn" style="height: 48px;" />
    </div>

    <!-- Map -->
    <div class="row justify-center">
      <!-- <q-img src="/images/map.png" alt="AMBEST Locations" class="map-image" /> -->
       <div id="map" class="map-section" style=""></div>
    </div>

    <!-- Legend (Below & Left-Aligned) -->
    <div class="row justify-start q-mt-md legend-container">
      <div v-for="(item, index) in legendItems" :key="index" class="legend-item">
        <q-badge :style="{ backgroundColor: item.color }" class="legend-color" />
        <span class="legend-text">{{ item.label }}</span>
      </div>
    </div>
  </div>

  <div class="q-pa-md q-mb-xl">
    <!-- Section Title -->
    <h4 class="text-center text-bold q-mb-xl">Locations Near You</h4>

    <!-- Locations Grid -->
    <div class="row justify-center q-gutter-xl q-mb-lg">
    <div v-for="(location, index) in selectedLocations" :key="index" class="col-12 col-md-3 location-card">
      <div class="row items-baseline">
        <!-- Circle Dot beside heading -->
        <q-badge color="blue" rounded class="location-dot q-mr-md" />
        <div>
          <p class="text-bold text-primary text-h6 q-mb-xs">{{ location.name }}</p>
          <p class="text-body1 q-mb-none">{{ selectedLocation.city  }}, {{ selectedLocation.state  }}, zip:{{ selectedLocation.zip  }}.</p>
          <p class="text-body1">{{ selectedLocation.main_phone }}</p>
        </div>
      </div>
    </div>
  </div>

    <!-- View More Button -->
    <div class="row justify-center q-mb-xl">
      <q-btn color="primary" label="VIEW MORE" class="view-more-btn" to="/all-locations" />
    </div>
    </div>


      <div class="form-section row" style="margin-inline: auto; border-radius: 20px;">
        <!-- Right Side: Image -->
        <div class="col-12 col-md-6 text-center">
              <q-img
                src="/images/headphone-girl.png"
                class="rounded-borders form-section-image"
                fit="cover"
                height="100%"
              />
        </div>

          <!-- Left Side: Text Content -->
          <div class="col-12  col-md-6 q-px-xl bg-primary" style="border-radius: 0 20px 20px 0;">
            <div class="content  q-px-xl">
              <h5 class="text-white text-bold text-center q-mb-sm"><strong>Request More Information</strong></h5>
              <p class="text-white text-center text-body2 text-desc">
                Complete the form, and our team will get in touch with you!
              </p>
              <div class="">
                <q-form class="contact-form" @submit="submitForm" ref="serviceForm">
                  <div class="row q-col-gutter-sm">
                    <q-input class="col-12 col-md-6 input-area" bg-color="white"  outlined v-model="firstName" :rules="[validateRequired]" label="First Name"/>
                    <q-input class="col-12 col-md-6 input-area" bg-color="white"  outlined v-model="lastName" :rules="[validateRequired]" label="Last Name"/>
                    <q-input class="col-12 col-md-6 input-area" bg-color="white"  outlined v-model="email" :rules="[validateRequired,validateEmail]" label="Email"/>
                    <q-input class="col-12 col-md-6 input-area" bg-color="white"  outlined v-model="phone" :rules="[validateRequired,validatePhone]" label="Phone"/>
                    <q-input class="col-12 input-area" bg-color="white"  outlined v-model="companyName" :rules="[validateRequired]" label="Company Name"/>
                    <q-select
                      class="col-12 input-area"
                      bg-color="white"
                      outlined
                      v-model="service"
                      :options="contactOptions"
                      :rules="[validateRequired]"
                      label="Service"
                      emit-value
                      map-options
                    />
                    <q-input class="col-12 " bg-color="white" outlined v-model="message" :rules="[validateRequired]" label="Message" type="textarea"/>
                  </div>
                  <div class="flex flex-center q-my-sm">
                    <q-btn rounded color="white" text-color="primary" label="SUBMIT" class="text-bold" type="submit"  />
                  </div>
                </q-form>
              </div>
            </div>
          </div>
        </div>
    </q-page-container>
  </q-page>
</template>

<script>
import { defineComponent, ref,nextTick,onMounted,onUnmounted } from 'vue';
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
export default defineComponent({
  setup() {
    const q = useQuasar();
    const searchQuery = ref('');
    const serviceForm = ref(null);
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const phone = ref('');
    const companyName = ref('');
    const service = ref('');
    const message = ref('');
    // map vals
    const locations = ref([]);
    let map;
    let markersLayer;
    const isActive =ref(false);
    const suggestions = ref([]);
    const selectedLocation = ref(null);
    const selectedLocations = ref([]); //selected nearest locations
    // const modelPagination =ref({page:1, rowsPerPage:15})

    // warranty btn code
    const isTextVisible = ref(false);
    const textRef = ref(null);
    const buttonRef = ref(null);

    const toggleText = () => {
      isTextVisible.value = !isTextVisible.value;
    };

    const handleClickOutside = (event) => {
      if (
        textRef.value &&
        !textRef.value.contains(event.target) &&
        buttonRef.value &&
        !buttonRef.value.$el.contains(event.target)
      ) {
        isTextVisible.value = false;
      }
    };

    // Attach event listener on mount
    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    // Remove event listener on unmount
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });
    const perks = [
      { icon: "/images/ToiletPaper.png", title: "Clean Restrooms" },
      { icon: "/images/GasPump.png", title: "Quality Fuel" },
      { icon: "/images/ThumbsUp.png", title: "Friendly Service" },
      { icon: "/images/Hamburger.png", title: "Convenience Stores" },
      { icon: "/images/TruckTrailer.png", title: "Truck Parking" },
      { icon: "/images/WashingMachine.png", title: "Showers & Laundry" },
    ];

    const legendItems = [
      { color: "#007bff", label: "AMBEST Travel/Service Center" },
      { color: "#dc3545", label: "AMBEST Travel Center" },
      { color: "#28a745", label: "AMBEST Express" },
      { color: "#ffc107", label: "AMBEST Fuel Stop" },
      { color: "#89CFF0", label: "AMBEST Service Center/Mobile Locations" },
    ];

    const locationsResult = ref([
      { name: "Name of AMBEST Location", address: "HWY, Exit 123\nCity Name, ST 12345", phone: "123-456-7890" },
      { name: "Name of AMBEST Location", address: "HWY, Exit 123\nCity Name, ST 12345", phone: "123-456-7890" },
      { name: "Name of AMBEST Location", address: "HWY, Exit 123\nCity Name, ST 12345", phone: "123-456-7890" },
    ]);

    const services = [
      { icon: 'build', title: 'Preventative Maintenance & Repairs' },
        { icon: 'directions_car', title: 'Tire and Brake Repairs' },
        { icon: 'settings', title: 'Engine Diagnostics' },
        { icon: 'invert_colors', title: 'Oil Changes & Fluid Checks' },
        { icon: 'flash_on', title: 'Electrical Repairs' },
        { icon: 'local_shipping', title: 'Trailer Maintenance' },
        { icon: 'warning', title: 'Vehicle Recovery' },
        { icon: 'local_taxi', title: 'Box Truck Maintenance' },
        { icon: 'wifi_tethering', title: 'Mobile Service' },
        { icon: 'airport_shuttle', title: 'Towing Service' }
      ];
    const slide= ref(1);
    const contactOptions= ref([
    { label: "Oil Change", value: "oil_change" },
    { label: "Brake Repair", value: "brake_repair" },
    { label: "Engine Diagnostics", value: "engine_diagnostics" },
    { label: "Tire Replacement", value: "tire_replacement" },
    { label: "Other Services", value: "other_services" }
    ]);
    const validateEmail =(val)=>{
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(val) || "Invalid email address";
    }
    const validatePhone =(val)=>{
      const phonePattern = /^[0-9]{10}$/; // Accepts only 10-digit numbers
        return phonePattern.test(val) || "Invalid phone number (must be 10 digits)";
    }
    const validateRequired =(val)=>{
      return (val && val.trim() !== "") || "This field is required";
    }
    const submitForm =()=>{
      api.post(`store-service-center-contact`,{
        'first_name':firstName.value,
        'last_name':lastName.value,
        'email':email.value,
        'phone':phone.value,
        'company_name':companyName.value,
        'service':service.value,
        'message':message.value,
      })
        .then((response)=>{
          showSuccessNotification(response.data.message);
          firstName.value = '';
          lastName.value = '';
          email.value = '';
          phone.value = '';
          companyName.value = '';
          service.value = '';
          message.value = '';
          serviceForm.value?.reset();
        }).catch((error)=>{
          showErrorNotification(error.response.data.message || error.message);
        })
    }

    const showSuccessNotification = (message) => {
      q.notify({
        color: "positive",
        position: "top",
        message: message,
        icon: "check_circle",
      });
    };

    const showErrorNotification = (message) => {
      q.notify({
        color: "negative",
        position: "top",
        message: message,
        icon: "report_problem",
      });
    };

    //maps
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
      map = L.map('map').setView([37.0902, -95.7129], 4);

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
        .bindPopup(`${location.name}, ${location.city}, ${location.state} - ${location.zip}`)
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
      addNearestLocations(location);
    };

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
      const R = 6371; // Radius of the Earth in km
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c; // Distance in km
      return distance;
    };

    const addNearestLocations = (selected) => {
      const distances = locations.value.map(location => {
        const distance = calculateDistance(selected.lat, selected.long, location.lat, location.long);
        return { ...location, distance };
      });

      // Sort by distance and get the two nearest locations
      const nearestLocations = distances.sort((a, b) => a.distance - b.distance).slice(1, 3);

      // Add nearest locations to the map and store them
      selectedLocations.value = [selected, ...nearestLocations];  // Store selected + 2 nearest

      selectedLocations.value.forEach(location => {
        L.marker([location.lat, location.long]).addTo(map.value)
          .bindPopup(`<strong>${location.city}, ${location.state} - ${location.zip}</strong>`);
      });
    };

    onMounted(fetchLocations);
    return {
      q,
      perks,
      serviceForm,
      searchQuery,
      legendItems,
      locations,
      locationsResult,
      contactOptions,
      firstName,
      lastName,
      email,
      phone,
      companyName,
      service,
      message,
      slide,
      services,
      validateRequired,
      validateEmail,
      validatePhone,
      submitForm,
      showSuccessNotification,
      showErrorNotification,
      fetchLocations,
      filterSuggestions,
      selectLocation,
      isActive,
      suggestions,
      selectedLocation,
      selectedLocations,
      toggleText,
      handleClickOutside,
      isTextVisible,
      textRef,
      buttonRef,
      addNearestLocations,
      calculateDistance
    };
  }
});
</script>
<!-- <style scope>
/* Button Container (Flexbox) */
.btn-container {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}
</style> -->
<style scoped>
.q-field__marginal{
  height: 44px;
}
.services-container {
  border-radius: 12px;
}

.service-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-icon {
  width: 64px;
  height: 64px;
}

.container {
  max-width: 1200px;
}

@media (max-width: 768px) {
  .text-section {
    text-align: center;
  }
  .btn-group {
    justify-content: center;
  }
}

.info-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 50px 15%;
  background-color: white;
  text-align: center;
}

.text-desc{
  font-size: 1.2rem;
}
.text-desc_1_1{
  font-size: 1.1rem;
}

.q-btn{
  min-width: 220px;
}

.about-section {

margin: auto;
background: #f5f9fc;
border-radius: 10px;
/* padding: 20px; */
}

.icon-img {
    max-width: 50px;
    max-height: 50px;

  }

.custom-col {
  flex-basis: 12.5%; /* Between 8.33% (col-1) and 16.67% (col-2) */
  max-width: 12.5%;
}

.banner-container {
  background-color: #0066a1; /* Blue background */
  border-radius: 10px; /* Rounded corners */
  padding: 16px; /* Adjust padding */
  text-align: center; /* Center align text horizontally */
  width: 100%; /* Full width */
  max-width: 1650px; /* Limit width on larger screens */
  height: 80px; /* Set height */
  display: flex; /* Flexbox for centering */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  margin: 0 auto; /* Center horizontally */
}


.banner-text {
  color: white; /* Text color */

  line-height: 2.8; /* Better readability */
}


/* Search Bar */
.search-input {
  width: 600px;
}

/* Map */
.map-image {
  width: 100%;
  max-width: 900px;
  border-radius: 8px;
}

/* Legend (Below & Left-Aligned) */
.legend-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Aligns to left */
  gap: 8px;
  padding-left: 20%; /* Slight padding to align with map */
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.legend-text {
  font-size: 20px;
}

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

/* form section */
.form-section{
  /* max-height: 700px; */
  max-width: 90%;
  margin: auto;
  margin-left:10%;
}

/* .input-area .q-field__control{
  height: 44px !important;
  min-height: 44px !important;
} */
.q-field--outlined .q-field__control{
  border-radius: 8px;
}
.form-section-image{
  border-radius:  20px 0 0 20px;
  object-fit: cover;
}

/* intro-section */
.intro-section{
  width: 80%;
  margin: auto;
}

.service-section{
  max-width: 90%;
  margin: 0 auto;
  border-radius: 20px;
}
.service-icons{
  padding: 20px;
   border-radius:100%;
    background-color: white;
}

.q-card__section--vert{
  padding: 10px 0%;
}

/* map section  */
.map-section{
  height: 50vh;
  width: 50%;
}
.search-section{
  width: 30%;
}

.banner-text-img{
    width: 499px;
  }

/* ✅ Responsive Behavior */
@media (max-width: 1280px) { /* Large screens */
  .custom-col {
    flex: 0 0 16.67%; /* Same as col-lg-2 */
    max-width: 16.67%;
  }
  .intro-section .slider{
    padding: 0%;
  }

}

@media (max-width: 1024px) { /* Medium screens */
  .custom-col {
    flex: 0 0 25%; /* Same as col-md-3 */
    max-width: 25%;
  }
  .content{
    padding: 0;
  }
  .intro-section .slider{
    padding-right: 48px;
  }
}

@media (max-width: 768px) { /* Small screens */
  .custom-col {
    flex: 0 0 50%; /* Same as col-sm-6 */
    max-width: 50%;
  }

  .banner-text {
    font-size: 1rem; /* Reduce font size for mobile */
    line-height: 1.7; /* Better readability */
  }

  .q-avatar {
    size: 40px !important; /* Reduce size on small screens */
  }
  .icon-img {
    max-width: 30px;
    max-height: 30px;
    padding:30px;
  }

  .legend-text {
    font-size: 10px;
  }

  .content{
    padding: 0;
  }
  .form-section-image{
  border-radius:  20px;
  }
  .warranty{
    align-items: center;
  }
  .warranty-side-image{
    padding: 0%;
  }
  .intro-section .slider{
    padding-right: 0%;
  }
  .banner-text-img{
    width: 499px;
  }

.map-section{
  height: 50vh;
  width: 100%;
}
.search-section{
  width: 100%;
}
}

@media (max-width: 480px) { /* Extra small screens */
  .custom-col {
    flex: 0 0 100%; /* Full width */
    max-width: 100%;
  }
  .banner-text-img{
    width: 350px;
  }
  .form-section .bg-primary{
    border-radius: 0 0 20px 20px !important;
  }
}
</style>
