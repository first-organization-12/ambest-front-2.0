<template>
  <q-page class="">
    <!-- Banner Section -->
    <div class="banner">
      <q-img src="/images/banner.png" class="banner-image" fit="cover" />
      <div class="banner-overlay">
        <h1 class="banner-title ">Where America Stops for Service and Value</h1>
      </div>
    </div>

    <div class="custom-banner text-h3">
      <h5><span>Where <strong>Drivers, Fleets, and Members</strong> Thrive on the Road!</span></h5>
    </div>



    <div class="info-section">
    <!-- Heading Section -->
    <div class="text-justify q-pa-xl">
      <h6 class="text-dark text-bold q-mb-sm q-mt-none">Your Partner in Service Excellence</h6>
      <p class="text-small text-bold">
        From coast to coast, AMBEST Travel Centers and Service Centers are here to keep you moving.
      </p>
      <p class="text-small">
        We're more than just a network of truck stops—we're a trusted partner for drivers and fleets alike.
        From quality facilities and competitive fuel prices to AMBUCKS® rewards and reliable service centers,
        we provide everything to keep you moving.
      </p>
      <!-- Buttons -->
    <div class="btn-container">
      <q-btn color="primary text-bold" rounded unelevated label="EXPLORE TRAVEL CENTERS" />
      <q-btn color="primary text-bold" rounded unelevated label="EXPLORE SERVICE CENTERS" />
    </div>
    </div>



    <!-- Features Section (Flex) -->
    <!-- <div class="features-container">
      <div v-for="(feature, index) in features" :key="index" class="feature-item">
        <q-icon :name="feature.icon" color="primary" size="3rem" class="icon" />
        <p class="text-weight-bold">{{ feature.label }}</p>
      </div>
    </div> -->
    <div class="row q-col-gutter-md">
      <div v-for="(feature, index) in features" :key="index" class="col-12 col-sm-4 col-md-4">
        <q-card class="q-pa-md" style='box-shadow: none;'>
          <q-icon :name="feature.icon" size="40px" class="icon" color="primary" />
          <div class="text-weight-bold q-mt-sm text-center">{{ feature.label }}</div>
        </q-card>
      </div>
    </div>
  </div>


  <div class="about-section row items-center" style="max-width: 80%;">
    <!-- Left Side: Image -->
    <div class="col-12 col-md-6 text-center">
      <q-img
        src="/images/mask_img.png"
        class="rounded-borders"
        fit="cover"
      />
    </div>

    <!-- Right Side: Text Content -->
    <div class="col-12 col-md-5 q-pa-md">
      <div class="content">
        <h6 class=" text-dark q-mb-xs">ABOUT <strong class="text-dark">AMBEST</strong></h6>
        <p class="text-body2 text-dark q-mt-none  text-desc">
          Founded in 1988, AMBEST is a Member-owned, nationwide network of independent truck stops
          and service centers. Unlike big Wall Street companies, AMBEST locations are family-owned
          businesses where you're likely to find the owner with their sleeves rolled up, ready to take care of you.

        </p>
        <q-btn label="READ MORE" rounded unelevated color="primary" class="q-mt-md text-bold" to="/about-ambest" />
      </div>
    </div>
  </div>

  <div class="advantage-section text-center q-pa-md">
    <!-- Heading -->
    <h5 class="text-dark">Experience the <strong class="text-dark">AMBEST Advantage</strong></h5>

    <!-- Features Grid -->
    <div class="row justify-center q-mt-lg">
      <div class="col-12 col-md-3 q-pa-md" v-for="(item, index) in advantages" :key="index">
        <q-icon :name="item.icon" color="primary" size="lg" />
        <p class="text-bold q-mt-md ">{{ item.title }}</p>
        <q-btn :label="item.buttonText" outline color="primary" rounded unelevated class="q-mt-md text-bold" :to="item.route" />
      </div>
    </div>
  </div>

  <div class="join-section q-pa-md">
    <div class="q-pa-md bg-blue-grey-1 flex column items-center rounded-borders">
      <!-- Heading -->
      <h6 class="text-dark q-mb-md q-mt-none">
        Join <strong class="text-dark">AMBEST</strong> Today!
      </h6>

      <!-- Buttons -->
      <div class="row q-gutter-md q-tex">
        <q-btn v-for="(button, index) in buttons" :key="index"
          :label="button.label"
          color="primary"
          text-color="white"
          class="q-px-md text-bold"
          rounded
          unelevated
        />
      </div>
    </div>
  </div>


  <div class="services-section q-pa-md w-100 flex flex-center">
    <div class="row q-gutter-md">
      <q-card v-for="(service, index) in services" :key="index" class="service-card">
        <q-img :src="service.image" class="service-img" />
        <div class="service-content">
          <q-item :to="service.route">
            <div style="width: 100%;">
              <h5 class="text-white text-bold q-mb-none">{{ service.title }}</h5>
              <p class="text-white text-caption q-text-md">{{ service.subtitle }} →</p>
            </div>
          </q-item>
        </div>
      </q-card>
    </div>
  </div>

  <!-- <div class="news-section q-pa-md">
  <div class="row bg-light q-pa-lg justify-center">
    Text Content
    <div class="col-12 col-md-5 q-pa-xl  q-mr-xl">
      <h5 class="text-dark text-bold q-mb-sm">AMBEST <strong>NEWS</strong></h5>
      <p class="text-body2 text-desc">
        Exciting things are happening at AMBEST! We've recently expanded our network with new locations in key
        regions, providing even more convenience for drivers and fleets.
      </p>
      <p class="text-body2 text-desc">
        Members can now enjoy enhanced rewards through our updated loyalty program, and our partnership with
        leading service providers ensures top-tier maintenance and support. Stay tuned for upcoming events
        and exclusive offers designed to keep you moving forward with confidence.
      </p>
    </div>

    Image Section
    <div class="col-12 col-md-6 d-flex justify-center align-center q-ml-xl">
      <q-img src="/images/truck.png" class="news-img" style="width: 80%; max-width: 100%;" fit="cover" />
    </div>
  </div>
</div> -->


<div class="news-section row items-center bg-light" style="max-width: 80%;">
  <!-- Left Side: Text Content -->
  <div class="col-12  col-md-6 q-px-xl">
    <div class="content q-pa-xl">
      <h5 class="text-dark text-bold q-mb-sm">AMBEST <strong>NEWS</strong></h5>
      <p class="text-body2 text-desc">
        Exciting things are happening at AMBEST! We've recently expanded our network with new locations in key
        regions, providing even more convenience for drivers and fleets.
      </p>
      <p class="text-body2 text-desc">
        Members can now enjoy enhanced rewards through our updated loyalty program, and our partnership with
        leading service providers ensures top-tier maintenance and support. Stay tuned for upcoming events
        and exclusive offers designed to keep you moving forward with confidence.
      </p>
    </div>
  </div>
    <!-- Right Side: Image -->
    <div class="col-12 col-md-6 text-center">
      <q-img
        src="/images/truck.png"
        class="rounded-borders"
        fit="cover"
      />
    </div>

</div>

<div class="text-center q-mb-md">
      <h5 class="text-bold">WHAT OUR CUSTOMERS SAY:</h5>
    </div>

    <q-carousel
  v-model="slide"
  swipeable
  animated
  control-color="primary"
  infinite
  autoplay
  autoplay-interval="500"


  transition-prev="slide-right"
  transition-next="slide-left"

>
  <q-carousel-slide
    v-for="(chunk, index) in chunkedTestimonials"
    :key="index"
    :name="index"
    class="q-pa-md"
  >
    <div class="row justify-center q-gutter-xl">
      <q-card
        v-for="(testimonial, i) in chunk"
        :key="i"
        class="testimonial-card col-12 col-sm-4 col-md-3 col-lg-2"
      >
        <q-card-section>
          <p class="text-white q-mb-md">“{{ testimonial.message }}”</p>
          <p class="text-white text-bold">{{ testimonial.author }}</p>
        </q-card-section>
      </q-card>
    </div>
  </q-carousel-slide>
</q-carousel>

  </q-page>
</template>

<script setup>
import { ref, computed  } from "vue";


const slide = ref(0);


const testimonials = ref([
  {
    message:
      "It's like a family business. It's nice, comfortable, pleasant, and clean.",
    author: "— Thomas - Atmore, AL",
  },
  {
    message:
      "I choose to stop at AMBEST because of the quality service that they offer us. They have great support and a very clean facility.",
    author: "— Anonymous",
  },
  {
    message:
      "I would plan my ride to get by an AMBEST location on any trip!",
    author: "— Daniel - Gary, IN",
  },
  {
    message:
      "The people are friendly and make you feel like you’re part of the family! The restrooms are clean and the place is clean inside.",
    author: "— Anonymous",
  },
]);

// Function to repeat testimonials to always have a multiple of 3
const repeatedTestimonials = computed(() => {
  let repeated = [...testimonials.value];
  while (repeated.length % 5 !== 0) {
    repeated = [...repeated, ...testimonials.value]; // Duplicate until it's a multiple of 3
  }
  return repeated;
});

// Function to split testimonials into chunks of 3
const chunkedTestimonials = computed(() => {
  const chunkSize = 5;
  return repeatedTestimonials.value.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!result[chunkIndex]) result[chunkIndex] = [];
    result[chunkIndex].push(item);
    return result;
  }, []);
});

const features = ref([
  { icon: "mdi-map-marker-radius", label: "Nationwide Coverage" },
  { icon: "mdi-star-circle", label: "Top-Tier Amenities" },
  { icon: "mdi-gas-station", label: "Competitive Fuel Prices" },
  { icon: "mdi-wrench", label: "Expert Maintenance" },
  { icon: "mdi-gift", label: "Loyalty Rewards Program" },
  { icon: "mdi-headset", label: "Domestic Customer Service" },
  { icon: "mdi-domain", label: "Industry Support" },
  { icon: "mdi-cellphone", label: "Convenient Mobile App" },
  { icon: "mdi-silverware-fork-knife", label: "Great Restaurants" }
]);

const advantages = ref([
      {
        icon: "local_gas_station", // Fuel pump icon
        title: "Over 500 Fuel Locations Nationwide",
        buttonText: "FIND ONE NEAR YOU",
        route:"/travel-centres",
      },
      {
        icon: "emoji_events", // Reward/trophy icon
        title: "Earn Rewards with Every Stop",
        buttonText: "JOIN AMBUCKS TODAY",
        route:"/ambucks",
      },
      {
        icon: "credit_card", // Credit card icon
        title: "Fuel Cards Tailored to Your Needs",
        buttonText: "APPLY NOW",
        route:"/fuel-cards",
      },
    ]);

    const buttons = ref([
      { label: "MEMBERSHIP APPLICATION" },
      { label: "EXISTING MEMBER LOGIN" }
    ]);

    const services = ref([
      {
        title: "Check Fuel Prices",
        subtitle: "Save on Fuel",
        image: "/images/Mask_group_1.png",
        route:""
      },
      {
        title: "Locate Service Centers",
        subtitle: "Find Expert Maintenance",
        image: "/images/Mask_group_2.png",
        route:"travel-centres"
      },
      {
        title: "Download the App",
        subtitle: "Stay Connected",
        image: "/images/Mask_group_3.png",
        route:""
      }
    ]);



</script>


<style scoped>
/* Banner Container */
.banner {
  position: relative;
  width: 100%;
  height: 1000px; /* Adjust height as needed */
  overflow: hidden;
}

/* Banner Image */
.banner-image {
  width: 100%;
  height: 100%;

}

.text-desc{
  font-size: 1.2rem;
}

/* Overlay Text */
.banner-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 100%;

  border-radius: 8px;
}

.banner-title {
  font-size: 4vw; /* Scales with screen width */
  font-weight: bold;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  max-width: 100%;
}

/* Adjust size for mobile screens */
@media (max-width: 600px) {
  .banner-title {
    font-size: 4vw; /* Bigger on small screens */
  }
}

/* Adjust size for large screens */
@media (min-width: 1200px) {
  .banner-title {
    font-size: 3vw;
  }
}



.info-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 50px 10%;
  background-color: white;
  text-align: center;
}

/* Button Container (Flexbox) */
.btn-container {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

/* Features Grid (Flexbox) */
.features-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  max-width: 600px;
}

/* Individual Feature Item */
.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
}

.icon{
      color:rgb(255, 255, 255) !important;
      font-size: 2rem !important;
      background: #00659E;
      border-radius: 50px;
      padding: 11px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .info-section {
    flex-direction: column; /* Stack items on smaller screens */
    padding: 30px 5%;
  }

  .btn-container {
    flex-direction: column; /* Stack buttons */
    align-items: center;
  }

  .features-container {
    gap: 20px;
  }
}

@media (max-width: 600px) {
  .info-section {
    padding: 20px;
  }

  .text-container {
    padding: 0 10px;
  }

  .btn-container {
    flex-direction: column;
    gap: 15px;
  }

  .features-container {
    flex-direction: column;
    align-items: center;
  }

  .feature-item {
    width: 100%;
  }
}


.custom-banner {
  background-color: #f5f9fc; /* Light blue-gray background */
  padding: 10px 20px;
  border-radius: 20px; /* Rounded edges */
  text-align: center;
  font-size: 20px !important;
  font-weight: normal;
  color: #000; /* Black text */

  justify-content: center;
  align-items: center;
  max-width: 80%;
  margin: auto;
}

.about-section {

  margin: auto;
  background: #f5f9fc;
  border-radius: 10px;
  /* padding: 20px; */
}
.content {
  padding: 20px;
}


.advantage-section {
  max-width: 100%;
  margin: auto;
}



.join-section {
  max-width: 95%;


}

.services-section {

  margin: auto;
}
.service-card {
  width: 380px;
  height: 380px;
  border-radius: 10px;
  overflow: hidden;
  margin: 50px;
}
.service-img {
  height: 220px;
}
.service-content {
  background: #0057A3;
  padding: 5px;
  text-align: center;
  height: 220px;
}


.news-section {
  max-width: 100%;
  margin: auto;
  /* margin-left:10%; */
}

.bg-light {
  background: #f4f8fc;
  border-radius: 10px;
}

.news-img {
  height: 100%;
  width: 100%;
  border-radius: 0 10px 10px 0;
}

.testimonial-card {
  background: #0056b3; /* Matching the blue color */
  padding: 16px;
  border-radius: 8px;
  text-align: left;
  color: white;
  min-height: 150px; /* Ensuring consistent height */
}

.testimonial-text {
  font-size: 1rem;
  color: white;
  margin-bottom: 10px;
}

.testimonial-author {
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
}

/* Smooth transition for better sliding */
.smooth-carousel .q-carousel__slides-container {
  transition: transform 1s ease-in-out !important;
}

/* Make cards significantly bigger */
.testimonial-card {
  max-width: 350px; /* Increased width */
  min-height: 250px; /* Increased height */
  padding: 30px;
  background: #1976D2; /* Theme color */
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

/* Increase font size for better readability */
.testimonial-card p {
  text-align:justify;
  font-size: 1rem;
}



</style>
