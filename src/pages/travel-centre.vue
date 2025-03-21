<template>
<q-page class="">

    <q-page-container style="padding-top: 0; padding-bottom:0px">
    <!-- Hero Section -->
      <div class="hero-container relative-position" style="height: 300px;">
        <q-img src="/images/travel-banner.jpg" class="absolute-full" style="z-index: -1; background-color: transparent;">
          <div class="absolute-center text-center text-white" style="background: transparent;">
            <div class="text-h2 text-weight-bold">Travel Centers</div>
          </div>
        </q-img>
      </div>

      <!-- Main Content -->
      <div class="q-pa-md">
          <!-- Find Travel Center Section -->
          <div class="bg-grey-2 q-pa-lg q-my-lg rounded-borders">
            <div class="row justify-center text-center">
              <div class="col-12">
                <p class="text-h5 q-mb-md">
                  <span class="text-weight-bold">Your Home Away from Home</span> — Find an AMBEST Travel Center near you.
                </p>
                <q-btn color="primary" rounded unelevated style="text-transform:unset;" label="Locate a Travel Center" class="q-py-sm text-white text-bold  text-none" />
              </div>
            </div>
          </div>
        </div>
        <q-container class="q-mt-md q-mb-lg q-rt-lg">
            <div class="info-section q-pa-xl">
              <div class="row items-center q-gutter-md">
                <!-- Text Section -->
                <div class="col-12 col-md-5 text-justify">
                  <h5 class="text-dark q-mb-sm q-mt-none">
                    A Network Built on <strong>Trust</strong> and <strong>Tradition</strong>
                  </h5>
                  <p class="text-desc">
                    Since 1988, AMBEST has been America’s Best Travel Centers—a member-owned network of
                    independent truck stops and service centers. Unlike corporate-owned chains, AMBEST locations
                    are family-run businesses where owners are hands-on, ready to provide personalized care and
                    exceptional service. Here, you’re not just another traveler—you’re part of the family.
                  </p>
                  
                  <!-- Buttons -->
                  <div class="q-mt-md">
                    <q-btn color="primary" rounded unelevated label="EXPLORE TRAVEL CENTERS" class="q-mr-sm text-bold" />
                    <q-btn color="primary" rounded unelevated label="EXPLORE SERVICE CENTERS" class="text-bold" />
                  </div>
                </div>
                <!-- Image Section -->
                <div class="col-12 col-md-6 text-left q-pa-xl  q-gutter-md">
                  <q-img src="/images/ambest-logo3.png" contain style=" max-width:700px; height: auto;" />
                </div>
              </div>
            </div>
          </q-container>
          <q-container class="q-mt-xl q-pa-md q-pa-xl-lg">
            <div class="about-section row items-center " style="max-width: 80%;">
              <!-- Left Side: Image -->
              <div class="col-12 col-md-6 text-center">
                <q-img
                  src="/images/mask_group.png"
                  class="rounded-borders"
                  fit="cover"
                />
              </div>

              <!-- Right Side: Text Content -->
              <div class="col-12 col-md-6 q-pa-xl">
                <div class="content q-pa-xl">
                  <h4 class=" text-dark q-mb-xs">Everything You Need, 
                  <br><strong class="text-dark">All in One Place </strong></h4>
                  <p class="text-body2 text-desc_1_1 text-dark q-mt-lg">
                  <b>Fuel up with confidence </b> with Diesel, DEF, and Gasoline at your convenience. <b>Unwind</b> with clean showers, comfortable lounges, and delicious dining options—everything you need to recharge for the road ahead.
                  </p>
                  <q-btn label="SEARCH TRAVEL CENTERS " rounded  color="primary" style="text-transform:unset;" class="q-mt-md text-bold" to="/about-ambest" />
                </div>
              </div>
            </div>
          </q-container>

          <q-container class="q-pa-md q-pa-lg-lg">
            <!-- Heading -->
            <div class="text-center q-mb-md">
              <h5 class="text-h5">
                <strong>Top Perks</strong> at AMBEST Locations
              </h5>
            </div>

            <!-- Perks Grid -->
            <div class="row justify-center q-gutter-xs">
              <div v-for="(perk, index) in perks" :key="index" class="col-4 col-sm-4 custom-col  text-center">
                <q-avatar size="80px" class="bg-blue-1 q-mb-xs">
                  <q-img :src="perk.icon" contain class="icon-img"  />
                </q-avatar>
                <p class="text-bold  q-mb-none q-ma-md">{{ perk.title }}</p>
              </div>
            </div>
          </q-container>

          <div class="q-pa-md">
            <div class="bg-primary banner-container flex flex-center">
              <p class="banner-text text-desc">
              Find the Best Fuel Prices at AMBEST Locations — <strong> Save More on Every Mile! </strong>
             
              </p>
            </div>
          </div>

          <div class="q-pa-md">
    <!-- Title -->
    <h4 class="text-center text-bold q-mb-md">Find an AMBEST Location Near You!</h4>

    <!-- Search Bar -->
    <div class="row justify-center q-gutter-sm q-mb-md">
      <q-input 
        v-model="searchQuery" 
        outlined 
        dense 
        placeholder="Enter City, State, or ZIP" 
        class="search-input"
      />
      <q-btn color="primary" rounded label="SEARCH" class="search-btn" />
    </div>

    <!-- Map -->
    <div class="row justify-center">
      <q-img src="/images/map.png" alt="AMBEST Locations" class="map-image" />
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
      <div v-for="(location, index) in locations" :key="index" class="col-12 col-md-3 location-card">
        <div class="row items-baseline">
          <!-- Circle Dot beside heading -->
          <q-badge color="blue" rounded class="location-dot q-mr-md" />
          <div>
            <p class="text-bold text-primary text-h6 q-mb-xs">{{ location.name }}</p>
            <p class="text-body1 q-mb-none">{{ location.address }}</p>
            <p class="text-body1">{{ location.phone }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- View More Button -->
    <div class="row justify-center q-mb-xl">
      <q-btn color="primary" label="VIEW MORE" class="view-more-btn" />
    </div>
  </div>

  
      <div class="about-section row items-center q-mt-xxl" style="max-width: 80%; margin: auto;">
        
        <!-- Left Side: Text Content -->
        <div class="col-12 col-md-6 q-pa-xl">
          <div class="content q-pa-xl">
            <h4 class="text-dark q-mb-xs">
              The <strong>Best Stops</strong> Aren’t on Every Corner — 
              <strong>They’re on the Right Route!</strong>
            </h4>
            
            <p class="text-body2 text-dark q-mt-lg">
              At AMBEST, our mission isn’t to be on every corner—it’s to be exactly where you need us most. 
              We carefully select top-quality locations along the nation’s busiest routes, ensuring you always have 
              access to exceptional service, clean facilities, and great deals on the essentials.
            </p>

            <p class="text-body2 text-dark q-mt-lg">
              No matter where you stop, you can count on a warm welcome and a commitment to excellence. 
              Because as our customer, you deserve the best—and that's America's Best.
            </p>
          </div>
        </div>

        <!-- Right Side: Image -->
        <div class="col-12 col-md-6 text-center">
          <q-img src="/images/mask_group_6.png" class="rounded-borders" fit="cover" />
        </div>

      </div>
  




    </q-page-container>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';


export default defineComponent({
  components: {

  },
  setup() {
    const search = ref('');

    const perks = [
      { icon: "/images/ToiletPaper.png", title: "Clean Restrooms" },
      { icon: "/images/GasPump.png", title: "Quality Fuel" },
      { icon: "/images/ThumbsUp.png", title: "Friendly Service" },
      { icon: "/images/Hamburger.png", title: "Convenience Stores" },
      { icon: "/images/TruckTrailer.png", title: "Truck Parking" },
      { icon: "/images/WashingMachine.png", title: "Showers & Laundry" },
    ];
    const searchQuery = ref("");

    const legendItems = [
      { color: "#007bff", label: "AMBEST Travel/Service Center" },
      { color: "#dc3545", label: "AMBEST Travel Center" },
      { color: "#28a745", label: "AMBEST Express" },
      { color: "#ffc107", label: "AMBEST Fuel Stop" },
      { color: "#89CFF0", label: "AMBEST Service Center/Mobile Locations" },
    ];

    const locations = ref([
      { name: "Name of AMBEST Location", address: "HWY, Exit 123\nCity Name, ST 12345", phone: "123-456-7890" },
      { name: "Name of AMBEST Location", address: "HWY, Exit 123\nCity Name, ST 12345", phone: "123-456-7890" },
      { name: "Name of AMBEST Location", address: "HWY, Exit 123\nCity Name, ST 12345", phone: "123-456-7890" },
    ]);

    return {
      search,
      perks,
      searchQuery,
      legendItems,
      locations
    };
  }
});
</script>

<style scoped>
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


/* ✅ Responsive Behavior */
@media (max-width: 1280px) { /* Large screens */
  .custom-col {
    flex: 0 0 16.67%; /* Same as col-lg-2 */
    max-width: 16.67%;
  }
}

@media (max-width: 1024px) { /* Medium screens */
  .custom-col {
    flex: 0 0 25%; /* Same as col-md-3 */
    max-width: 25%;
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
}

@media (max-width: 480px) { /* Extra small screens */
  .custom-col {
    flex: 0 0 100%; /* Full width */
    max-width: 100%;
  }
}

</style>
