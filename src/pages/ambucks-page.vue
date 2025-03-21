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
      <!-- <div class="news-section row items-center bg-light q-ma-xl">
        <div class="col-12 col-md-6 text-center">
          <q-img
            src="/images/ambucks-logo-1.png"
            class="rounded-borders"
            fit="cover"
            style=" border-radius: 20px;"
            width="70%"
          />
        </div> -->
        <!-- right Side: Text Content -->
        <!-- <div class="col-12  col-md-6 q-px-xl">
          <div class="content q-pa-xl">
            <h5 class="text-h5"><span class="text-weight-bold">About AMBUCKS Rewards Program</span></h5>
            <p class="text-desc">AMBEST launched AMBUCKS, a professional driver loyalty
              program, in 1994. Professional drivers carn point(s) for every
              gallon purchased and can redeem these points at any
              AMBEST location nationwide. In addition to points, AMBUCK$
              cardholders earn one FREE shower credit for every 75+ diesel
              gallon purchase. Additional points can be earned through
              participating AMBEST Service Centers, 20 / 20 Bus Program
              Participants, and location specific offerings.</p>
              <p class="text-desc">
              Since the program's inception, our locations have issued billions
              of AMBUCK$ points and [XXX] showers to professional drivers.
              In addition, AMBEST has given away millions of points, cash and
              various other prizes through AMBUCK$ promotions. Subscribe
              here to sign up to receive our latest promotions.
              diesel
              </p>
              <q-btn label="Subscribe for AMBUCKS Rewards" rounded unelevated color="primary" class="q-mt-md text-bold" to="/about-ambest" />
          </div>
        </div>
      </div> -->

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
            <h5 class="text-h5" style="margin-block: 5px;"><span class="text-weight-bold">About AMBUCKS Rewards Program</span></h5>
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
              of AMBUCK$ points and [XXX] showers to professional drivers.
              In addition, AMBEST has given away millions of points, cash and
              various other prizes through AMBUCK$ promotions. Subscribe
              here to sign up to receive our latest promotions.
            </p>
            <q-btn label="Subscribe for AMBUCKS Rewards" rounded unelevated color="primary" class="q-mt-md text-bold" to="/about-ambest" />
          </div>
        </div>
      </div>

      <!-- <q-container class="q-mt-md  q-rt-lg q-ma-xl">
            <div class="news-section q-pa-xl">
              <div class="row items-center q-gutter-md">
              Image Section
              <div class="col-12 col-md-6 text-left q-pa-xl  q-gutter-md">
                  <q-img src="/images/ambucks-logo-1.png" contain style=" max-width:700px; height: auto;" />
                </div>
                Text Section
                <div class="col-12 col-md-5 text-left">
                  <h5 class="text-h5" style="font-size: 32px;"><span class="text-weight-bold">About AMBUCK$ Rewards Program</span></h5>
                  <p class="text-desc">AMBEST launched AMBUCKS, a professional driver loyalty
                    program, in 1994. Professional drivers carn point(s) for every
                    gallon purchased and can redeem these points at any
                    AMBEST location nationwide. In addition to points, AMBUCK$
                    cardholders earn one FREE shower credit for every 75+ diesel
                    gallon purchase. Additional points can be earned through
                    participating AMBEST Service Centers, 20 / 20 Bus Program
                    Participants, and location specific offerings.</p>
                    <p class="text-desc">
                    Since the program's inception, our locations have issued billions
                    of AMBUCK$ points and [XXX] showers to professional drivers.
                    In addition, AMBEST has given away millions of points, cash and
                    various other prizes through AMBUCK$ promotions. Subscribe
                    here to sign up to receive our latest promotions.
                    diesel
                    </p>
                    <q-btn label="Subscribe for AMBUCKS Rewards" rounded unelevated color="primary" class="q-mt-md text-bold" to="/about-ambest" />
                </div>

              </div>
        </div>
      </q-container> -->

      <div class="q-ma-xl rounded-borders" style="">
        <div class="row justify-center text-center q-pb-lg" style="background-color: #f5f9fc !important;border-radius: 20px;">
          <div class="col-12">
            <h5 class="text-h5 q-mb-md">
              <span class="text-weight-bold">Rewarding Every Gallon</span> — Earn Ambuck$ for Your Purchase at AMBEST Locations.
            </h5>
            <q-btn color="primary" label="Get the AMBEST App" rounded class="q-py-sm text-white q-px-xl" />
          </div>
        </div>
      </div>



      <div class="news-section row items-center bg-light" style="margin: 30px auto;">
        <!-- Right Side: Image -->
        <div class="col-12 col-md-6 text-center">
          <q-img
            src="/images/Mask_group.png"
            class="rounded-borders"
            fit="cover"
            width="80%"
          />
        </div>
        <!-- Left Side: Text Content -->
        <div class="col-12  col-md-6 q-pa-xl">
          <div class="content q-py-xl">
            <h5 class="text-h5" style="font-size: 32px; margin-bottom: 0 !important;"><span class="text-weight-bold">How it Works</span></h5>
            <p class="text-desc" style="font-size: 22px;">
                <span>Register, swipe and start earning points, free showers and prizes!</span>
            </p>
            <q-btn label="Get More Details" rounded unelevated color="primary" class="q-mt-md text-bold q-px-xl" />
          </div>
        </div>
      </div>


      <div class="custom-banner" style="padding: 25px 0;">
        <div class="text">
          <h4 style="margin: 0 !important;color: white;">
              <strong>Log In</strong> or <strong>Explore</strong> AMBEST Location Near You
            </h4>
        </div>
        <div class="btn">
          <div class="row justify-center" style="gap: 0.3rem;">
            <q-btn outline color="primary" style="background-color: white !important;" rounded unelevated class="q-mt-md text-bold q-px-xl" label="Check Your AMBUCK$ Balance" />
            <q-btn outline color="primary" style="background-color: white !important;" rounded unelevated class="q-mt-md text-bold q-px-xl" label="Locations Directory" />
          </div>
        </div>
      </div>


      <div class="news-section row items-center bg-light">
        <!-- Left Side: Text Content -->
        <div class="col-12  col-md-6 q-pa-xl">
          <div class="content q-py-xl">
            <h5 class="text-h5 "><span class="text-weight-bold">This Month's AMBUCK$ <br>
              Promotions-</span>Don't Miss Out!</h5>
            <p class="text-desc">
              Check out current and previous promotions from AMBUCK$.
              Don't forget to download our app to find specific location
              offerings so you always get the best AMBUCK$ values.
            </p>
            <q-btn label="EXPLORE SPECIALS" rounded unelevated color="primary" class="q-mt-md text-bold q-px-xl" />
          </div>
        </div>
        <!-- Right Side: Image -->
        <div class="col-12 col-md-6 text-center">
          <q-img
            src="/images/Mask_group_30.png"
            class="rounded-borders"
            fit="cover"
             width="80%"
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
</style>
