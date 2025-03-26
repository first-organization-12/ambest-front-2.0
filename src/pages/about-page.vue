<template>
  <q-page class="">
    <q-page-container style="padding: 0;">
    <!-- Hero Section -->
      <div class="hero-container relative-position" style="height: 300px;">
        <q-img src="/images/center-open-road-desert-landscape.png" class="absolute-full" style="z-index: -1; background-color: transparent;">
          <div class="absolute-center text-center text-white" style="background: transparent;">
            <div class="text-h2 text-weight-bold">About AMBEST</div>
          </div>
        </q-img>
      </div>
      <q-section>
        <div class="q-my-xl text-center">
          <h5 class="text-h5" style="margin-block: 5px;"><span class="text-weight-bold">Since 1988, AMBEST has been a trusted name for professional fleets across the U.S. </span></h5>
          <p class="text-desc text-weight-bold">Committed to exceptional service, convenience, and community support.</p>
          <q-btn label="DISCOVER OUR STORY" rounded unelevated color="primary" class="q-mt-md text-bold q-px-lg"/>
        </div>
      </q-section>

      <q-section>
          <div class="news-section row items-center bg-light">
          <!-- Left Side: Text Content -->
          <div class="col-12 col-md-6">
            <div class="content q-pa-xl">
              <h5 class="text-h5 " style="margin: 20px 0;">Our <span class="text-weight-bold">Mission</span></h5>
              <p class="text-desc">
                At AMBEST, we're dedicated to being <strong>Where America Stops for Service and Value®.</strong>
              </p>
              <p class="text-desc">
                We’ve grown since 1988, from a network of trusted truck stops to a reliable partner for drivers, fleets, and members. With quality facilities, competitive fuel prices, and exclusive rewards, we provide everything you need to keep moving forward, no matter where the road takes you.
              </p>
            </div>
          </div>
          <!-- Right Side: Image -->
          <div class="col-12 col-md-6 text-center">
            <q-img
              src="/images/img-one.png"
              class="rounded-borders dynamic-width"
              fit="cover"
            />
          </div>
        </div>
      </q-section>

      <q-section>
          <div class="news-section row items-center bg-light" style="margin: 20px auto;">
            <!-- Right Side: Image -->
            <div class="col-12 col-md-6 text-center">
              <q-img
              src="/images/our-story.png"
              class="rounded-borders dynamic-width"
              fit="cover"
              />
            </div>
            <!-- Left Side: Text Content -->
            <div class="col-12 col-md-6">
              <div class="content q-py-xl q-px-lg">
                <h5 class="text-h5 " style="margin: 20px 0;">Our <span class="text-weight-bold">Story</span></h5>
                <p class="text-desc">
                  Founded in 1988, AMBEST is a Member-owned, nationwide network of independent truck stops and service centers. Unlike large corporations or chains, most AMBEST locations are family owned businesses where you're likely to find the owner with his or her sleeves rolled up ready to take care of you anyway they can.
                </p>
                <p class="text-desc">
                  Our goal at AMBEST is not to have a location on every corner. Rather, we take pride in finding the finest locations along the most popular routes so you'll always have a quality AMBEST location where and when you need us. Regardless of where you stop at AMBEST, you can rely on a friendly face, clean facilities and terrific values on the things you need most. As our customer, you deserve our best. And that's America's Best.
                </p>
              </div>
            </div>
        </div>
      </q-section>

      <q-section>
        <div class="q-my-xl text-center">
          <h5 class="text-h5" style="margin-block: 5px;"><span class="text-weight-bold">Driven by Service, Focused on You</span></h5>
          <p class="text-desc">Discover how our commitment to quality and innovation has shaped AMBEST into <br>
            a trusted partner for drivers, fleets, and members across the nation.</p>
        </div>
      </q-section>

      <div class="news-section row justify-center " style="margin: 25px auto;">
      <div class="col-12 col-md-3 q-pa-md row justify-center items-center text-center" style="flex-direction: column;" v-for="(item, index) in items" :key="index">
        <q-icon :name="item.icon" color="primary" size="55px" />
        <h5 class="text-h5 text-bold q-mt-md q-mb-none">{{ item.title }}</h5>
        <q-btn :label="item.buttonLabel" outline color="primary" rounded unelevated class="q-mt-md text-bold"/>
      </div>
    </div>

    <q-section>
      <div class="form-section q-ma-xl q-px-xl" style="background: #f5f9fc; margin-inline: auto;">
        <div class="text-center q-py-xl">
          <div class="section-container" style="margin: auto;">
            <h5 class="text-h5" style="margin-block: 5px;"><span class="text-weight-bold">Why Join </span>AMBEST ? </h5>
            <p class="text-desc">Gain access to exclusive rewards, top-tier facilities, and an unparalleled network of service providers.</p>
            <p class="text-desc">AMBEST is a premier, Member-owned organization specializing in sales, marketing, and purchasing. Proudly representing some of the nation’s finest independently -owned truck stops and service centers, AMBEST is committed to helping Members  succeed. Our mission is simple: to enhance profitability and ensure the long-term success and sustainability of our Members.</p>
          </div>
            <div class="flex justify-center" style="gap: 5px;">
            <q-btn label="BECOME A MEMBER" rounded unelevated color="primary" class="q-mt-md q-px-xl" to="/fuel-cards/membership/aplication" />
            <q-btn label="MEMBERSHIP LOGIN" rounded unelevated color="primary" class="q-mt-md q-px-xl" />
          </div>
        </div>
      </div>
    </q-section>
      <q-section>
        <div class="q-my-xl text-center">
          <h5 class="text-h5" style="margin-block: 5px;"><span class="text-weight-bold">Exceptional Service, Endless Convenience, Stronger Communities</span></h5>
        </div>
      </q-section>

      <div class="form-section row  bg-primary" style="margin: auto; border-radius: 20px;">
        <div class="col-12  col-md-6 q-pa-xl">
          <div class="content  q-px-xl q-py-lg">
            <h5 class="text-white text-bold text-center q-mb-sm"><strong>Get In touch</strong></h5>
            <p class="text-white text-center text-body2 text-desc">
              Complete the form, and our team will get in touch with you!
            </p>
            <div class="">
              <q-form class="contact-form" ref="aboutForm">
                <div class="row q-col-gutter-md">
                  <q-input class="col-12 col-md-6 input-area" bg-color="white" :rules="[validateRequired]"  outlined v-model="firstName" label="First Name"/>
                  <q-input class="col-12 col-md-6 input-area" bg-color="white" :rules="[validateRequired]"  outlined v-model="lastName" label="Last Name" />
                  <q-input class="col-12 col-md-6 input-area" bg-color="white" :rules="[validateRequired,validateEmail]"  outlined v-model="email" label="Email" />
                  <q-input class="col-12 col-md-6 input-area" bg-color="white" :rules="[validateRequired,validatePhone]"  outlined v-model="phone" label="Phone" />
                  <q-select
                      class="col-12 input-area"
                      bg-color="white"
                      outlined
                      v-model="service"
                      :options="contactOptions"
                      :rules="[validateRequired]"
                      label="Who would you like to contact"
                      emit-value
                      map-options
                    />
                  <q-input class="col-12 " bg-color="white" outlined v-model="message" label="Message" type="textarea" />
                </div>
                <div class="flex flex-center q-mt-md">
                  <q-btn unelevated rounded color="white" text-color="primary" label="SUBMIT" class="text-bold q-px-lg" @click="submitForm" />
                </div>
              </q-form>
            </div>
          </div>
        </div>
          <div class="col-12 col-md-6 text-center">
            <q-img
              src="/images/shop.png"
              class="rounded-borders"
              fit="cover"
              height="100%"
              style="border-radius: 0 20px 20px 0;"
            />
          </div>
      </div>

    </q-page-container>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";

export default defineComponent({
  setup() {
    const q = useQuasar();
    const search = ref('');
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const phone = ref('');
    const service = ref('');
    const message = ref('');
    const aboutForm =ref(null);
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
    const contactOptions= ref([
    { label: "Oil Change", value: "oil_change" },
    { label: "Brake Repair", value: "brake_repair" },
    { label: "Engine Diagnostics", value: "engine_diagnostics" },
    { label: "Tire Replacement", value: "tire_replacement" },
    { label: "Other Services", value: "other_services" }
    ]);
    const submitForm =()=>{
      api.post(`store-about-ambest-contact`,{
        'first_name':firstName.value,
        'last_name':lastName.value,
        'email':email.value,
        'phone':phone.value,
        'service':service.value,
        'message':message.value,
      })
        .then((response)=>{
          showSuccessNotification(response.data.message);
          firstName.value = '';
          lastName.value = '';
          email.value = '';
          phone.value = '';
          service.value = '';
          message.value = '';
          aboutForm.value?.reset();
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

    return {
      q,
      aboutForm,
      search,
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
      contactOptions,
      validateRequired,
      validateEmail,
      validatePhone,
      submitForm,
      showSuccessNotification,
      showErrorNotification
    };
  }
});
</script>
<style scoped>

.text-desc{
  font-size: 1.2rem;
  line-height: normal;
}
.news-section {
  max-width: 80%;
  margin: auto;
  margin-left:10%;
}
.about-section {

margin: auto;
width: 80%;
background: #f5f9fc;
border-radius: 10px;
padding: 20px;
}
.form-section{
  width: 90%;

}

.q-field--outlined .q-field__control{
  border-radius: 8px;
}

.section-container{
  width: 70%;
}

/* .dynamic-width{
  width: 90%;
} */
/* Adjust size for mobile screens */
@media (max-width: 600px) {
  .section-container{
  width: 100%;
  }
  .content{
    padding: 0;
  }
}

/* Adjust size for large screens */
@media (min-width: 1200px) {
  .section-container{
  width: 60%;
  }
  .dynamic-width{
  width: 70%;
}
}

/* Responsive Design */
@media (max-width: 1024px) {
  .text-desc{
  font-size: 1rem;
  line-height: normal;
  }
.section-container{
  width: 70%;
}
.dynamic-width{
  width: 100%;
}
}

@media (min-width: 600px) {

}

</style>
