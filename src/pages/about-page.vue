<template>
  <q-page class="">
    <q-page-container style="padding: 0;">
    <!-- Hero Section -->
      <div class="hero-container relative-position" style="height: 300px;">
        <q-img :src="bannerImgFile" class="absolute-full" style="z-index: -1; background-color: transparent;">
          <div class="absolute-center text-center text-white" style="background: transparent;">
            <div class="text-h2 text-weight-bold">About AMBEST</div>
          </div>
        </q-img>
      </div>
      <q-section>
        <div class="q-my-xl text-center" style="width: 90%; margin-inline: auto;">
          <!-- <h4 class="" style="margin-block: 5px; font-weight: 700;">Since 1988, AMBEST has been a trusted name for professional fleets across the U.S. </h4>
          <p class="" style="font-size: 26px; font-weight: 500;">Committed to exceptional service, convenience, and community support.</p> -->
          <span v-html="introText"></span>
          <q-btn label="DISCOVER OUR STORY" rounded unelevated color="primary" class="q-mt-md text-bold q-px-lg" target="_blank" href="https://youtu.be/JBtntZFLfoo"/>
        </div>
      </q-section>

      <q-section>
          <div class="news-section row items-center bg-light">
          <!-- Left Side: Text Content -->
          <div class="col-12 col-md-6">
            <div class="content q-pa-xl">
              <!--<h4 class="" style="margin: 20px 0; font-weight: 400;"><span class="text-bold">{{ missionTitle }}</span></h4>-->
              <p class="" style="font-size: 20px; font-weight: 400;" v-html="missionText">

              </p>
            </div>
          </div>
          <!-- Right Side: Image -->
          <div class="col-12 col-md-6 text-right">
            <q-img
              :src="missionImg"
              class="rounded-borders dynamic-width"
              fit="cover"
            />
          </div>
        </div>
      </q-section>

      <q-section>
          <div class="news-section story-image-section row items-center bg-light" style="margin: 20px auto;">
            <!-- Right Side: Image -->
            <div class="col-12 col-md-6 text-center q-px-xl">
              <q-img
              :src="storyImg"
              class="rounded-borders dynamic-width"
              fit="cover"
              />
            </div>
            <!-- Left Side: Text Content -->
            <div class="col-12 col-md-6">
              <div class="content q-py-xl q-px-lg">
                <!-- <h4 class="" style="margin: 20px 0; font-weight: 400;"><span class="text-weight-bold">{{ storyTitle }}</span></h4> -->
                <p class="text-desc" style="font-size: 20px; font-weight: 400;" v-html="storyText">

                </p>
              </div>
            </div>
        </div>
      </q-section>

      <q-section>
        <div class="q-my-xl text-center" style="width: 90%; margin-inline:auto;">
          <!-- <h4 class="" style="margin-block: 5px; font-weight: 400;"><span class="text-weight-bold">{{ othersOneTitle }}</span></h4> -->
          <p class="text-desc" style="font-size: 20px; font-weight: 500;" v-html="othersOneText"></p>
        </div>
      </q-section>

      <div class="news-section row justify-center " style="margin: 25px auto;">
      <div class="col-12 col-md-3 q-pa-md row justify-center items-center text-center" style="flex-direction: column;" v-for="(item, index) in items" :key="index">
        <!-- <q-icon :name="item.icon" color="primary" size="55px" /> -->
         <q-img :src="item.icon" style="width: 55px; height: 55px;"/>
        <h5 class="text-h5 text-bold q-mt-md q-mb-none">{{ item.title }}</h5>
        <q-btn :label="item.buttonLabel" outline color="primary" rounded unelevated class="q-mt-md text-bold" :to="item.link"/>
      </div>
    </div>

    <q-section>
      <div class="form-section q-ma-xl" style="background: #f5f9fc; margin-inline: auto; border-radius: 20px;">
        <div class="text-center q-py-xl">
          <div class="section-container" style="margin: auto;">
            <!-- <h4 class="" style="margin-block: 5px;"><strong>{{  othersTwoTitle }}</strong></h4> -->
            <p class="text-desc" style="font-size: 20px; font-weight: 400;" v-html="othersTwoText"></p>
          </div>
            <div class="flex justify-center" style="gap: 5px;">
            <q-btn label="BECOME A MEMBER" rounded unelevated color="primary" class="q-mt-md q-px-xl" to="/fuel-cards/membership/application" />
            <q-btn label="MEMBERSHIP LOGIN" rounded unelevated color="primary" class="q-mt-md q-px-xl" target="_blank" href="https://ambest.powerappsportals.com/home/" />
          </div>
        </div>
      </div>
    </q-section>
      <q-section>
        <div class="q-my-xl text-center">
          <h5 class="" style="margin-block: 5px; font-size: 28px; font-weight: 800;">Exceptional Service, Endless Convenience, Stronger Communities</h5>
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
                  <!-- <q-select
                      class="col-12 input-area"
                      bg-color="white"
                      outlined
                      v-model="service"
                      :options="contactOptions"
                      :rules="[validateRequired]"
                      label="Who would you like to contact"
                      emit-value
                      map-options
                    /> -->
                  <q-input class="col-12" bg-color="white" outlined v-model="message" :rules="[validateRequired]"  label="Message" type="textarea" style="height: 125px !important;" />
                </div>
                <div class="flex flex-center q-mt-xl">
                  <q-btn unelevated rounded color="white" text-color="primary" label="SUBMIT" class="text-bold q-px-lg" @click="submitForm" />
                </div>
              </q-form>
            </div>
          </div>
        </div>
          <div class="col-12 col-md-6 text-center">
            <q-img
              :src="formImg"
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
import { defineComponent, onMounted, ref } from 'vue';
import { api, storage_url } from "src/boot/axios";
import { useQuasar } from "quasar";

export default defineComponent({
  setup() {
    const q = useQuasar();
    const search = ref('');
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const phone = ref('');
    const formImg = ref('');
    // const service = ref('');
    const message = ref('');
    const aboutForm =ref(null);
    const items = ref([
      {title:"Travel Center",icon:"/images/SteeringWheel.png",buttonLabel:"explore",link:"/travel-centers"},
      {title:"Service Center",icon:"/images/Vector.png",buttonLabel:"locate",link:"/service-centers"},
      {title:"Fuel Card",icon:"/images/GasPump1.png",buttonLabel:"apply",link:"/fuel-cards"},
      {title:"AMBUCK$",icon:"/images/PiggyBank.png",buttonLabel:"join",link:"/ambuck$"}
    ])
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
        // 'service':service.value,
        'message':message.value,
      })
        .then((response)=>{
          showSuccessNotification(response.data.message);
          firstName.value = '';
          lastName.value = '';
          email.value = '';
          phone.value = '';
          // service.value = '';
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

    const missionImg = ref('');
    const missionText = ref('');
    const missionTitle = ref('');
    const storyImg = ref('');
    const storyTitle = ref('');
    const storyText = ref('');
    const othersOneTitle = ref("");
    const othersOneText = ref("");
    const othersTwoTitle = ref("");
    const othersTwoText = ref("");
    const bannerImgFile = ref('');
    const introText = ref('');

    const getAboutPageDetails = ()=>{
      api.get('get-front-about-page-details')
      .then((response)=>{
        console.log(response);
        let val = response.data.data;
        bannerImgFile.value = storage_url(val.banner_section.img_url);
        introText.value = val.banner_section.description;
        missionImg.value = storage_url(val.mission_section.img_url);
        missionTitle.value = val.mission_section.title;
        missionText.value = val.mission_section.description;
        storyImg.value = storage_url(val.story_section.img_url);
        storyTitle.value = val.story_section.title;
        storyText.value = val.story_section.description;
        othersOneTitle.value = val.driven_section.title;
        othersOneText.value = val.driven_section.description;
        othersTwoTitle.value = val.whyjoin_section.title;
        othersTwoText.value = val.whyjoin_section.description;
        formImg.value = storage_url(val.form_section.img_url);
      })
    }

    onMounted(()=>{
      getAboutPageDetails();
    })

    return {
      q,
      aboutForm,
      search,
      firstName,
      lastName,
      email,
      phone,
      // service,
      message,
      contactOptions,
      validateRequired,
      validateEmail,
      validatePhone,
      submitForm,
      showSuccessNotification,
      showErrorNotification,
      items,
      missionImg,
      missionTitle,
      missionText,
      storyImg,
      storyTitle,
      storyText,
      othersOneText,
      othersOneTitle,
      othersTwoText,
      othersTwoTitle,

      bannerImgFile,
      introText,
      formImg,
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
  max-width: 90%;
  margin: auto;
  /* margin-left:10%; */
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
  .dynamic-width{
  width: 100%;
  }
  .story-image-section .q-px-xl{
    padding-inline: 0% !important;
  }
}

/* Adjust size for large screens */
@media (min-width: 1200px) {
  .section-container{
  width: 60%;
  }
  .dynamic-width{
  width: 553px;
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
