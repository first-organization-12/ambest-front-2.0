<template>
  <q-page class="">
  <div class="banner relative-position" style="overflow: hidden;">
    <video autoplay loop muted playsinline class="absolute-full" style="z-index: -1; object-fit: cover; width:100%;">
      <source src="/images/ambest-intro-video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="banner-overlay absolute-center text-center">
      <h1 class="banner-title text-white text-h4 text-weight-bold">
        Where America Stops for Service and Value
      </h1>
    </div>
  </div>

    <div class="custom-banner" style="margin:30px auto 60px;">
      <h4><span>Where <strong>Drivers, Fleets, and Members</strong> Thrive on the Road!</span></h4>
    </div>


    <div class="info-section row col-12" style="width: 100%; margin:60px auto;">
      <div class="col-12 col-md-7">
        <div class="info-section-text-container">
          <h4 class="text-dark text-bold q-mb-sm q-mt-none">Your Partner in Service Excellence</h4>
          <h6 class="q-my-lg" style="font-weight: 600;">
            From coast to coast, AMBEST Travel Centers and Service Centers are here to keep you moving.
          </h6>
          <p class="text-desc">
            We're more than just a network of truck stops—we're a trusted partner for drivers and fleets alike.
            From quality facilities and competitive fuel prices to AMBUCK$® rewards and reliable service centers,
            we provide everything to keep you moving.
          </p>
        <div class="btn-container">
          <q-btn color="primary text-bold" rounded unelevated label="EXPLORE TRAVEL CENTERS" to="/travel-centres"/>
          <q-btn color="primary text-bold" rounded unelevated label="EXPLORE SERVICE CENTERS" to="/service-centers" />
        </div>
        </div>
      </div>
      <div class="col-12 col-md-5">
        <div class="row q-col-gutter-md">
          <div v-for="(feature, index) in features" :key="index" class="col-12 col-sm-4 col-md-4">
            <q-card class="q-pa-md feature-card row flex-center" style='box-shadow: none;'>
              <img :src="feature.image" alt="fetaure-image"  class="fetaure-image" />
              <div class="text-weight-bold q-mt-sm text-center">{{ feature.label }}</div>
            </q-card>
          </div>
        </div>
      </div>
    </div>

  <div class="about-section row items-center" style="max-width: 90%; margin:60px auto;">
    <!-- Left Side: Image -->
    <div class="col-12 col-md-6 text-center">
      <q-img
        src="/images/mask_img.png"
        class="rounded-borders"
        fit="cover"
      />
    </div>

    <!-- Right Side: Text Content -->
    <div class="col-12 col-md-6 q-pa-md">
      <div class="content">
        <h4 class=" text-dark q-mb-xs">ABOUT <strong class="text-dark">AMBEST</strong></h4>
        <p class="text-body2 text-dark q-mt-none  text-desc">
          Founded in 1988, AMBEST is a Member-owned, nationwide network of independent truck stops
          and service centers. Unlike big Wall Street companies, AMBEST locations are family-owned
          businesses where you're likely to find the owner with their sleeves rolled up, ready to take care of you.

        </p>
        <q-btn label="READ MORE" rounded unelevated color="primary" class="q-mt-md text-bold" to="/about-ambest" />
      </div>
    </div>
  </div>

  <div class="advantage-section text-center q-pa-md" style="margin:60px auto;">
    <!-- Heading -->
    <h5 class="text-dark" style="font-size: 32px;">Experience the <strong class="text-dark">AMBEST Advantage</strong></h5>

    <!-- Features Grid -->
    <div class="row justify-center q-mt-lg">
      <div class="col-12 col-md-3 advantage-cards" v-for="(item, index) in advantages" :key="index" style="margin: auto;">
        <div class="" style="width: 350px; margin: auto;">
          <img :src="item.image" alt="advantage-image" class="advantage-image" />
          <p class="q-mt-md " style="font-size: 26px; font-weight: 800;">{{ item.title }}</p>
          <q-btn :label="item.buttonText" outline color="primary" rounded unelevated class="q-mt-md text-bold" :to="item.route" />
        </div>
      </div>
    </div>
  </div>

  <div class="join-section" style="margin:60px auto;">
    <div class="q-pa-lg bg-blue-grey-1 flex column items-center rounded-borders">
      <!-- Heading -->
      <h4 class="text-dark q-mb-md q-mt-none">
        Become an <strong class="text-dark">AMBEST</strong> Location!
      </h4>

      <!-- Buttons -->
      <div class="row q-gutter-md  flex flex-center">
        <q-btn
          label="MEMBERSHIP APPLICATION"
          color="primary"
          text-color="white"
          class="q-px-md text-bold"
          rounded
          unelevated
          to="/fuel-cards/membership/aplication"
        />
        <a href="https://ambest.powerappsportals.com/" target="_blank" style="color: black;">
          <q-btn
            label="EXISTING MEMBER LOGIN"
            color="primary"
            text-color="white"
            class="q-px-md text-bold"
            rounded
            unelevated
          />
        </a>
      </div>
    </div>
  </div>


  <div class="services-section q-pa-md w-100 flex flex-center" style="margin:60px auto;">
    <div class="row q-gutter-md justify-evenly" style="width: 100%;">
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
      <q-card  class="service-card">
        <q-img src="/images/Mask_group_3.png" class="service-img" />
        <div class="service-content">
          <q-item target="_blank" href="https://qr.link/HeDWv6">
            <div style="width: 100%;">
              <h5 class="text-white text-bold q-mb-none">Download the App</h5>
              <p class="text-white text-caption q-text-md">Stay Connected →</p>
            </div>
          </q-item>
        </div>
      </q-card>
    </div>
  </div>

<div class="news-section row items-center bg-light" style="max-width: 90%; border-radius: 20px; margin:60px auto;">
  <!-- Left Side: Text Content -->
  <div class="col-12  col-md-6 q-px-xl">
    <div class="content q-pa-xl">
      <h4 class="text-dark q-mb-sm">AMBEST <strong>NEWS</strong></h4>
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
        src="/images/top-view-fuel-station.png"
        class="rounded-borders"
        fit="cover"
      />
    </div>

</div>

<div class="text-center q-mb-md" style="margin:60px auto;">
  <h5 class="" style="font-size: 28px; font-weight: 600;">WHAT OUR CUSTOMERS SAY:</h5>
</div>

<q-carousel
  v-model="slide"
  swipeable
  animated
  control-color="primary"
  infinite
  autoplay
  autoplay-interval="3000"
  transition-prev="slide-right"
  transition-next="slide-left"
>
  <q-carousel-slide
    v-for="(chunk, index) in chunkedTestimonials"
    :key="index"
    :name="index"
    class="q-pa-md"
  >
    <div class="row justify-center q-gutter-md q-gutter-lg-md">
      <q-card
        v-for="(testimonial, i) in chunk"
        :key="i"
        class="testimonial-card col-12 col-sm-6 col-md-4 col-lg-3"
        style="max-height: 180px;"
      >
        <q-card-section class="overflow-hidden" style="white-space: nowrap;overflow:hidden">
          <p class="text-white q-mb-md ellipsis">
            “{{ testimonial.message }}”
          </p>
          <p class="text-white text-bold">
            {{ testimonial.author }}
          </p>
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
  { image: "/images/MapTrifold.png", label: "Nationwide Coverage" },
  { image: "/images/Star.png", label: "Top-Tier Amenities" },
  { image: "/images/GasPump2.png", label: "Competitive Fuel Prices" },
  { image: "/images/Wrench.png", label: "Expert Maintenance" },
  { image: "/images/MoneyWavy.png", label: "Loyalty Rewards Program" },
  { image: "/images/UserCircleGear.png", label: "Domestic Customer Service" },
  { image: "/images/Handshake.png", label: "Industry Support" },
  { image: "/images/DeviceMobileCamera.png", label: "Convenient Mobile App" },
  { image: "/images/ChefHat.png", label: "Great Restaurants" }
]);

const advantages = ref([
      {
        image: "/images/GasPump1.png", // Fuel pump icon
        title: "Over 500 Fuel Locations Nationwide",
        buttonText: "FIND ONE NEAR YOU",
        route:"/travel-centres",
      },
      {
        image: "/images/HandsClapping.png", // Reward/trophy icon
        title: "Earn Rewards with Every Stop",
        buttonText: "JOIN AMBUCK$ TODAY",
        route:"/ambuck$",
      },
      {
        image: "/images/CreditCard.png", // Credit card icon
        title: "Fuel Cards Tailored to Your Needs",
        buttonText: "APPLY NOW",
        route:"/fuel-cards",
      },
    ]);


    const services = ref([
      {
        title: "Check Fuel Prices",
        subtitle: "Save on Fuel",
        image: "/images/Mask_group_1.png",
        route:"/fuel-price"
      },
      {
        title: "Locate Service Centers",
        subtitle: "Find Expert Maintenance",
        image: "/images/Hoyt-4.png",
        route:"/service-centers"
      },
      // {
      //   title: "Download the App",
      //   subtitle: "Stay Connected",
      //   image: "/images/Mask_group_3.png",

      // }
    ]);



</script>


<style scoped>


h6 {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 2rem;

}


/* Banner Container */
.banner {
  position: relative;
  width: 100%;
  /* height: 1000px; Adjust height as needed */
  height: 100vh; /* Adjust height as needed */
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

.fetaure-image{
   height: 79px;
   width: 79px;
   color:rgb(255, 255, 255) !important;
   font-size: 2rem !important;
   background: #00659E;
   border-radius: 50% !important;
   padding: 11px;
}
.feature-card{
  flex-direction: column;
  width:100%;
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
    /* flex-direction: column; Stack items on smaller screens */
    padding: 30px 5%;
  }

  .btn-container {
    /* flex-direction: column; Stack buttons */
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
  .feature-card{
  flex-direction: column;
  width:50%;
  }
  .custom-banner{
    margin-top: 1% !important;
  }
}


.custom-banner {
  background-color: #f5f9fc; /* Light blue-gray background */
  padding: 10px 20px;
  border-radius: 20px; /* Rounded edges */
  text-align: center;
  font-size: 20px !important;
  font-weight: 400px;
  color: #000; /* Black text */
  /* margin-top:1% !important; */
  justify-content: center;
  align-items: center;
  max-width: 90%;
  margin: auto;
}

.about-section {

  margin: auto;
  background: #f5f9fc;
  border-radius: 10px;
  /* padding: 20px; */
}
.content {
  padding: 80px;
}


.advantage-section {
  max-width: 90%;
  margin: auto;
}



.join-section {
  max-width: 90%;
  margin: auto;

}

.services-section {

  margin: auto;
}
.service-card {
  width: 380px;
  height: 380px;
  border-radius: 10px;
  overflow: hidden;
  margin: 15px;
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

.q-panel.scroll {
  overflow: hidden !important; /* Stop extra scrolling */
}

.q-carousel__slide {
  overflow: hidden !important;
  max-height: 20px;
}
/* info-section-text-container */
.info-section-text-container{
  text-align: justify;
  padding: 48px 48px;
}

.q-carousel{
    height: 280px;
  }

.rounded-borders{
  border-radius: 20px;
}

/* ✅ Responsive Behavior */
@media (max-width: 1280px) { /* Large screens */
  .custom-col {
    flex: 0 0 16.67%; /* Same as col-lg-2 */
    max-width: 16.67%;
  }
  .q-carousel{
    height: 280px;
  }
  .info-section-text-container{
    text-align: start;
  }
  .content{
    padding: 80px;
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
  .q-carousel{
    height: 280px;
  }
  .service-card{
    width: 330px;
    height: 330px;
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
  .banner {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  .text-desc[data-v-2373a833] {
    font-size: 1rem;
  }

  .q-carousel {
    background-color: #fff;
    height: 277px;
  }

  .q-btn{
    font-size: 13px;
  }

  .q-card > img {
    display: block;
    width: 50%;
    max-width: 100%;
    border: 0;
}

.col-12.col-sm-4.col-md-4 {
  text-align: -webkit-center;
}

}

@media (max-width: 480px) { /* Extra small screens */
  .custom-col {
    flex: 0 0 100%; /* Full width */
    max-width: 100%;
  }
  .join-section .rounded-borders{
    text-align: center;
  }
  .advantage-cards{
    margin-block: 20px !important;
  }
}



</style>
