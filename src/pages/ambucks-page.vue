<template>
  <q-page class="">
    <q-page-container style="padding: 0;">
    <!-- Hero Section -->
      <div class="hero-container relative-position" style="height: 300px;">
        <q-img src="/images/top-view-man-drinking-truck.png" class="absolute-full" style="z-index: -1; background-color: transparent;">
          <div class="absolute-center text-center text-white" style="background: transparent;">
            <div class="text-h2 text-weight-bold">AMBUCK$</div>
          </div>
        </q-img>
      </div>
      <div class="news-section row items-center bg-light">
        <!-- Right Side: Image -->
        <div class="col-12 col-md-6 text-center">
          <q-img
            src="/images/ambucks-logo-1.png"
            class="rounded-borders"
            fit="cover"
             width="80%"
          />
        </div>
        <!-- Left Side: Text Content -->
        <div class="col-12  col-md-6 " :class="dynamicPadding">
          <div class="content">
            <h4 class="" style="margin-block: 5px;"><span class="text-weight-bold">About AMBUCK$ Rewards Program</span></h4>
            <p class="text-desc" style="line-height: normal;">
              AMBEST launched AMBUCK$, a professional driver loyalty
              program, in 1994. Professional drivers earn point(s) for every
              gallon purchased and can redeem these points at any
              AMBEST location nationwide. In addition to points, AMBUCK$
              cardholders earn one FREE shower credit for every 75+ diesel
              gallon purchase. Additional points can be earned through
              participating AMBEST Service Centers, 20 / 20 Bus Program
              Participants, and location specific offerings.
            </p>
            <p class="text-desc" style="line-height: normal;">
              Since the program's inception, our locations have issued billions
              of AMBUCK$ points and Thousands of showers to professional drivers.
              In addition, AMBEST has given away millions of points, cash and
              various other prizes through AMBUCK$ promotions. Subscribe
              here to sign up to receive our latest promotions.
            </p>
            <q-btn label="Download the app" rounded unelevated color="primary" class="q-mt-md text-bold" target="_blank" href=" https://qr.link/HeDWv6" />
          </div>
        </div>
      </div>


      <div class="news-section row items-center bg-light" style="margin: 30px auto;">
        <!-- Right Side: Image -->
        <div class="col-12 col-md-6">
          <div class="content lists q-pb-xl">
            <h4 class="" style=" margin-bottom: 0 !important; font-weight: 800;"><span class="text-weight-bold">The More You Fuel, The More You Earn</span></h4>
            <p class="text-desc text-bold">Achieve tier status each month and enjoy the benefit of the tier the following month.</p>
            <ul class="text-desc">
              <li>Earn points per gallon purchased</li>
              <li>Redeem points for merchandise and services</li>
              <li>Free shower with 75+ gallons fuel purchase</li>
              <li>Tiers program awards up to 4x points on every gallon</li>
              <li>App users get exclusive access to in-store specials</li>
            </ul>
          </div>
        </div>
        <!-- Left Side: Text Content -->
        <div class="col-12  col-md-6 q-pa-md">
          <div class="plan_card bronze_card">
            <div class="plan_card_title"> <h5 class="text-h5 text-bold" style="margin: 0%;">Bronze</h5></div>
            <div class="plan_card_sub_text q-pr-lg"><p class="text-desc text-bold">500 - 999 Gallons 2x points per gal. </p></div>
          </div>
          <div class="plan_card silver_card">
            <div class="plan_card_title"><h5 class="text-h5 text-bold" style="margin: 0%;">Sliver</h5></div>
            <div class="plan_card_sub_text q-pr-lg"><p class="text-desc text-bold">1000 - 1,499 Gallons 3x points per gal. </p></div>
          </div>
          <div class="plan_card gold_card">
            <div class="plan_card_title"><h5 class="text-h5 text-bold" style="margin: 0%;">Gold</h5></div>
            <div class="plan_card_sub_text q-pr-lg"><p class="text-desc text-bold">> 1500 Gallons
              4x points per gal. </p></div>
          </div>
        </div>
      </div>


      <div class="custom-banner" style="padding: 25px 0; width: 90%; margin-inline:auto ;">
        <div class="text">
          <h4 style="margin: 0 !important;color: white;">
              <strong>Log In</strong> or <strong>Explore</strong> AMBEST Location Near You
            </h4>
        </div>
        <div class="btn">
          <div class="row justify-center" style="gap: 0.3rem;">
            <q-btn outline color="primary" style="background-color: white !important;" rounded unelevated class="q-mt-md text-bold q-px-xl" label="Check Your AMBUCK$ Balance" href="https://register.am-best.com/" target="_blank" />
            <q-btn outline color="primary" style="background-color: white !important;" rounded unelevated class="q-mt-md text-bold q-px-xl" label="Locations" to="/travel-centers" />
          </div>
        </div>
      </div>


      <div class="news-section row items-center bg-light">
        <!-- Left Side: Text Content -->
        <div class="col-12  col-md-6 q-pa-xl">
          <div class="content q-py-sm">
            <h4 class="" style="margin: 10px 0%;"><span class="text-weight-bold">This Month's AMBUCK$ <br>
              Promotions-</span>Don't Miss Out!</h4>
            <p class="text-desc">
              Check out current and previous promotions from AMBUCK$.
              Don't forget to download our app to find specific location
              offerings so you always get the best AMBUCK$ values.
            </p>
            <q-btn label="EXPLORE SPECIALS" rounded unelevated color="primary" class="q-mt-md text-bold q-px-xl" target="_blank" href="https://mylync.lyncoproducts.com/customer/flyers/ambest/index.html" />
          </div>
        </div>
        <!-- Right Side: Image -->
        <div class="col-12 col-md-6 text-center">
          <q-img
            src="/images/ambest_app.png"
            class="rounded-borders"
            fit="cover"
            width="80%"
            style="border-radius: 20px;"
          />
        </div>
      </div>
    </q-page-container>
  </q-page>
</template>
<script>
export default {
  computed: {
    dynamicPadding() {
      return this.$q.screen.xl ? "q-pa-xl" : "q-py-xl";
    },
  },
};
</script>

<style scoped>
.news-section {
  max-width: 80%;
  margin: auto;
  /* margin-left:10%; */
}
.custom-banner {
  background-color: #00659E; /* Light blue-gray background */
  padding: 10px 20px;
  border-radius: 20px; /* Rounded edges */
  text-align: center;
  font-size: 20px !important;
  font-weight: normal;
  color: #000; /* Black text */

  justify-content: center;
  align-items: center;
  max-width: 95%;
  margin: 1rem auto;
}
.text-desc{
  font-size: 1.2rem;
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

.plan_card{
  height: 100px;
  margin: 10px;
  width: 553px;
  max-width: 553px;
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.plan_card div{
  width: 50%;
  text-align: center;
}
.plan_card_title{
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}
.bronze_card{
  background-color: #A77343;
}
.silver_card{
  background-color: #9B9B9B;
}
.gold_card{
  background-color: #A79B55;
}
/* Responsive Design */
@media (max-width: 1024px) {
.plan_card{
  width: 500px;
  max-width: 500px;
}
.news-section .lists{
  padding-inline: 20px;
}
}
@media (max-width: 480px) { /* Extra small screens */
  .plan_card{
    width: 100%;
    display: block;
    padding: 10px;
    height: auto;
  }
  .plan_card div{
    width: 100%;
  }
  .q-pa-xl {
    padding: 48px 0px;
  }
  .custom-banner{
    padding: 25px 25px !important;
  }
}
</style>
