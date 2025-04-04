<template>
<q-page class="">

    <q-page-container style="padding-top: 0; padding-bottom:0px">
    <!-- Hero Section -->
      <div class="hero-container relative-position" style="height: 300px;">
        <q-img src="/images/travel_center_bg.png" class="absolute-full" style="z-index: -1; background-color: transparent;">
          <div class="absolute-center text-center text-white" style="background: transparent;">
            <div class="text-h2 text-weight-bold">Travel Centers</div>
          </div>
        </q-img>
      </div>

      <!-- Main Content -->
      <div class="" style="width: 90%; margin-inline: auto;">
          <!-- Find Travel Center Section -->
          <div class="bg-grey-2 q-pa-lg q-my-lg rounded-borders">
            <div class="row justify-center text-center">
              <div class="col-12">
                <h4 class=" q-ma-md">
                  <strong>Your Home Away from Home</strong> — Find an AMBEST Travel Center near you.
                </h4>
                <q-btn color="primary" rounded unelevated style="text-transform:unset;" label="Locate a Travel Center" class="q-py-sm text-white text-bold" @click="scrollToElement('map-break')" />
              </div>
            </div>
          </div>
      </div>
        <q-container class="q-mt-md q-mb-lg q-rt-lg">
            <div class="info-section q-pa-xl">
              <div class="row items-center">
                <!-- Text Section -->
                <div class="col-12 col-md-7 info-section-text-container">
                  <h4 class="text-dark q-mb-sm q-mt-none">
                    A Network Built on <strong>Trust</strong> and <strong>Tradition</strong>
                  </h4>
                  <p class="text-desc" style="font-size: 20px; font-weight: 400;">
                    Since 1988, AMBEST has been America’s Best Travel Centers—a member-owned network of
                    independent truck stops and service centers. Unlike corporate-owned chains, AMBEST locations
                    are family-run businesses where owners are hands-on, ready to provide personalized care and
                    exceptional service. Here, you’re not just another traveler—you’re part of the family.
                  </p>

                  <!-- Buttons -->
                  <div class="row" style="gap: 5px;">
                    <q-btn color="primary" rounded unelevated label="Download Location List" class="q-mr-sm text-bold" @click="downloadExcel" />
                    <!-- <q-btn color="primary" outline rounded unelevated label="Print location list" class=" text-bold" @click="printLocations" /> -->
                  </div>
                </div>
                <!-- Image Section -->
                <div class="col-12 col-md-5 text-left q-pa-xl  q-gutter-md">
                  <q-img src="/images/ambest-logo3.png" contain style=" max-width:700px; height: auto;" />
                </div>
              </div>
            </div>
          </q-container>

          <!-- <q-container class="q-mt-xl q-pa-md q-pa-xl-lg">
            <div class="about-section row items-center " style="max-width: 80%;">
              Left Side: Image
              <div class="col-12 col-md-6 text-center">
                <q-img
                  src="/images/Mask_group_9.png"
                  class="rounded-borders"
                  fit="cover"
                />
              </div>

              Right Side: Text Content
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
          </q-container> -->
          <div class="about-section row" style="margin: 20px auto; border-radius: 20px; width: 90%;">
            <!-- Right Side: Image -->
            <div class="col-12 col-md-6 text-center">
                  <q-img
                    src="/images/Mask_group_9.png"
                    class="rounded-borders"
                    fit="cover"
                    height="100%"
                  />
            </div>
            <!-- Left Side: Text Content -->
            <div class="col-12  col-md-6 q-px-xl flex  items-center">
              <div class="content  q-px-xl ">
                <h4 class=" text-dark q-mb-xs">Everything You Need,
                  <br><strong class="text-dark">All in One Place </strong></h4>
                  <p class="text-body2 text-desc_1_1 text-dark q-mt-lg">
                  <b>Fuel up with confidence </b> with Diesel, DEF, and Gasoline at your convenience. <b>Unwind</b> with clean showers, comfortable lounges, and delicious dining options—everything you need to recharge for the road ahead.
                  </p>
                  <q-btn label="SEARCH TRAVEL CENTERS " rounded  color="primary" style="text-transform:unset;" class="q-mt-md text-bold" @click="scrollToElement('map-break')" />
              </div>
            </div>
          </div>

          <q-container class="q-pa-md q-pa-lg-lg">
            <!-- Heading -->
            <div class="text-center q-mb-md">
              <h4 class="">
                <strong>Top Perks</strong> at AMBEST Locations
              </h4>
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

          <div class="q-pa-md" id="map-break">
            <div class="bg-primary banner-container flex flex-center">
              <p class="banner-text text-desc" style="font-size: 28px; font-weight: 400; margin: 0%;">
              Find the Best Fuel Prices at AMBEST Locations — <strong> Save More on Every Mile! </strong>
              </p>
            </div>
          </div>

          <div class="q-pa-md">
    <!-- Title -->
    <h4 class="text-center text-bold">Find an AMBEST Location Near You!</h4>
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
            <p class="text-body1 q-mb-none">{{ selectedLocation.city  }}, {{ selectedLocation.state  }},{{ selectedLocation.zip  }}.</p>
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


      <!-- <div class="about-section row items-center q-mt-xxl" style="max-width: 80%; margin: auto;">

        Left Side: Text Content
        <div class="col-12 col-md-6 q-pa-xl">
          <div class="content q-pa-xl">
            <h4 class="text-dark q-mb-xs">
              The <strong>Best Stops</strong> Aren’t on Every Corner —
              <strong>They’re on the Right Route!</strong>
            </h4>

            <p class="text-body2 text-desc_1_1 text-dark q-mt-lg">
              At AMBEST, our mission isn’t to be on every corner—it’s to be exactly where you need us most.
              We carefully select top-quality locations along the nation’s busiest routes, ensuring you always have
              access to exceptional service, clean facilities, and great deals on the essentials.
            </p>

            <p class="text-body2 text-desc_1_1 text-dark q-mt-lg">
              No matter where you stop, you can count on a warm welcome and a commitment to excellence.
              Because as our customer, you deserve the best—and that's America's Best.
            </p>
          </div>
        </div>

        Right Side: Image
        <div class="col-12 col-md-6 text-center">
          <q-img src="/images/mask_group_6.png" class="rounded-borders" fit="cover" />
        </div>

      </div> -->

      <div class="about-section row" style="margin: 20px auto; border-radius: 20px; width: 90%;">
        <!-- Left Side: Text Content -->
        <div class="col-12  col-md-6 q-px-xl flex  items-center">
          <div class="content  q-px-xl ">
            <h4 class="text-dark q-mb-xs">
              The <strong>Best Stops</strong> Aren’t on Every Corner —
              <strong>They’re on the Right Route!</strong>
            </h4>

            <p class="text-body2 text-desc_1_1 text-dark q-mt-lg">
              At AMBEST, our mission isn’t to be on every corner—it’s to be exactly where you need us most.
              We carefully select top-quality locations along the nation’s busiest routes, ensuring you always have
              access to exceptional service, clean facilities, and great deals on the essentials.
            </p>

            <p class="text-body2 text-desc_1_1 text-dark q-mt-lg">
              No matter where you stop, you can count on a warm welcome and a commitment to excellence.
              Because as our customer, you deserve the best—and that's America's Best.
            </p>
          </div>
        </div>
        <!-- Right Side: Image -->
        <div class="col-12 col-md-6 text-center">
              <q-img
                src="/images/mask_group_6.png"
                class="rounded-borders"
                fit="cover"
                height="100%"
              />
        </div>
      </div>



    </q-page-container>
  </q-page>
</template>

<script>
import { defineComponent, ref,nextTick,onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
{/* import * as XLSX from 'xlsx'; */}
import { api } from 'src/boot/axios';

export default defineComponent({
  components: {

  },
  setup() {

    const searchQuery = ref("");
    const locations = ref([]);
    let map;
    let markersLayer;
    const isActive =ref(false);
    const suggestions = ref([]);
    const selectedLocation = ref(null);
    const selectedLocations = ref([]); //selected nearest locations
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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${location.star_color==='blue' ? "#027dffff" : location.star_color==='red' ? '#ff0000ff' : location.star_color==='green' ? '#008000ff' : location.star_color==='yellow' ? '#ffa500ff' : location.star_color==='white' ? '#89cff0ff' : 'gold'}" xmlns="http://www.w3.org/2000/svg">
           <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1"/>
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

    const scrollToElement = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };



    const downloadExcel = () => {
      const filePath = "/files/AMBESTTruckStops.csv"; // Change this to your file path inside the "public" folder
      const link = document.createElement("a");
      link.href = filePath;
      link.download = "AMBESTTruckStops.csv"; // Name of the file when downloaded
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    // const downloadExcel = async () => {
    //   try {
    //     let response =  await api.get('get-downloadable-locations')
    //     let downloadLocations ;
    //     // if (!locations || locations.length === 0) {
    //     //   alert("No data available to download.");
    //     //   return;
    //     // }

    //     // Remove 'id' field from each object
    //     downloadLocations = response.data.data;

    //     // Convert data to worksheet
    //     const worksheet = XLSX.utils.json_to_sheet(downloadLocations);

    //     // Create workbook and append worksheet
    //     const workbook = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(workbook, worksheet, "Locations");

    //     // Create and download Excel file
    //     XLSX.writeFile(workbook, "locations.xlsx");
    //   } catch (error) {
    //     console.error("Error downloading location list:", error);
    //   }
    // };
    const printLocations = () => {
      try {
          if (!locations.value || locations.value.length === 0) {
            alert("No data available to print.");
            return;
          }

          // Clone locations and remove 'id' field
          let printLocations = locations.value;

          if (printLocations.length === 0) {
            alert("No valid data available to print.");
            return;
          }

          let tableRows = printLocations.map(row => {
            let rowData = Object.values(row).map(value => `<td>${value}</td>`).join('');
            return `<tr>${rowData}</tr>`;
          }).join('');

          let tableHeaders = Object.keys(printLocations[0])
            .map(key => `<th>${key.toUpperCase()}</th>`)
            .join('');

          // Correctly formatted template literal
          let printContent = `
            <div id="printSection">
              <h2>Location List</h2>
              <table>
                <thead>
                  <tr>${tableHeaders}</tr>
                </thead>
                <tbody>
                  ${tableRows}
                </tbody>
              </table>
            </div>
            <style>
              #printSection { font-family: Arial, sans-serif; }
              table { width: 100%; border-collapse: collapse; table-layout: fixed; }
              th, td { border: 1px solid #000; padding: 8px; text-align: left; word-wrap: break-word; }
              th { background-color: #f2f2f2; }

              @media print {
                body * { visibility: hidden; }
                #printSection, #printSection * { visibility: visible; }
                #printSection { position: absolute; top: 0; left: 0; width: 100%; }
              }
            </style>
          `;

           // Add the print section to the page
          let printDiv = document.createElement("div");
          printDiv.innerHTML = printContent;
          document.body.appendChild(printDiv);

          // Print without opening a new page
          window.print();

          // Remove print section after printing
          window.onafterprint = function () {
            document.body.removeChild(printDiv);
          };
        } catch (error) {
          console.error("Error printing location list:", error);
        }
    };
    onMounted(fetchLocations);
    return {
      perks,
      searchQuery,
      legendItems,
      locations,
      locationsResult,
      fetchLocations,
      filterSuggestions,
      selectLocation,
      isActive,
      suggestions,
      selectedLocation,
      selectedLocations,
      calculateDistance,
      addNearestLocations,
      scrollToElement,
      downloadExcel,
      printLocations,
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
  border-radius: 20px; /* Rounded corners */
  padding: 16px; /* Adjust padding */
  text-align: center; /* Center align text horizontally */
  width: 90%; /* Full width */
  /* max-width: 1650px; Limit width on larger screens */
  /* height: 131px; Set height */
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
/* map section  */
.map-section{
  height: 50vh;
  width: 50%;
}
.search-section{
  width: 30%;
}
.info-section-text-container{
  text-align: justify;
}
.rounded-borders{
  border-radius: 20px 20px;
}
/* ✅ Responsive Behavior */
@media (max-width: 1280px) { /* Large screens */
  .custom-col {
    flex: 0 0 16.67%; /* Same as col-lg-2 */
    max-width: 15.67%;
  }
}

@media (max-width: 1024px) { /* Medium screens */
  .custom-col {
    flex: 0 0 25%; /* Same as col-md-3 */
    max-width: 25%;
  }
  .info-section-text-container{
  text-align: start;
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
  .map-section{
  height: 50vh;
  width: 100%;
}
.search-section{
  width: 100%;
}
.q-px-xl{
  padding-left: 10px;
  padding-right: 10px;
}
}

</style>
