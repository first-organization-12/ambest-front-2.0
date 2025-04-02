<template>
  <q-page class="" style="">
    <q-page-container style="padding: 0 !important;">
    <!-- Hero Section -->
      <div class="hero-container relative-position" style="height: 300px;">
        <q-img src="/images/close-up-man-checking-mobile.png" class="absolute-full" style="z-index: -1; background-color: transparent;">
          <div class="absolute-center text-center text-white" style="background: transparent;">
            <div class="text-h2 text-weight-bold">Connect with Us!</div>
          </div>
        </q-img>
      </div>

      <div class="custom-banner text-h3">
        <div class="flex flex-center q-mb-none">
          <h4 class="q-mb-xs"><span style="color: white;">We're here to help — <strong>Reach out to the team with any inqiries.</strong></span></h4>
        </div>
        <q-btn
          outline
          color="primary"
          style="background-color: white !important;"
          rounded
          unelevated
          class="q-mt-xs text-bold"
          label="SEND US A MESSAGE"
          size="md"
          @click="scrollToElement('form-break')"
        />
      </div>
      <!-- <div class="text-center">
        <h4><span style="">Our<strong> Leadership</strong></span></h4>
      </div>

      <div class="learders-card row justify-center q-col-gutter-md" style="display: flex;gap: 10px;">
        <div v-for="member in team.slice(0,3)" :key="member.name" class="col-lg-2">
          <div class="text-center">
            <q-img :src="member.image" class="profile-image" style="height: 215px; width: 215px;" />
            <div class="">
              <div class="name" style="font-size: 20px; font-weight: 800;"><strong>{{ member.name }}</strong></div>
              <div class="position" style="font-size: 16px; font-weight: 400;">{{ member.position }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="learders-card row justify-center q-col-gutter-md q-mt-xl" style="display: flex;gap: 10px;">
        <div v-for="member in team.slice(3,7)" :key="member.name" class="col-lg-2">
          <div class="text-center">
            <q-img :src="member.image" class="profile-image" style="height: 215px; width: 215px;" />
            <div class="">
              <div class="name"><strong>{{ member.name }}</strong></div>
              <div class="position">{{ member.position }}</div>
            </div>
          </div>
        </div>
      </div> -->


      
<!--
      <div class="grid-container">
      <q-card v-for="(leader, index) in team" :key="index" class="leader-card">
        <q-img :src="leader.image" class="leader-image" />
        <q-card-section class="text-center">
          <div class="text-bold">{{ leader.name }}</div>
          <div class="text-caption text-grey-7">{{ leader.position }}</div>
        </q-card-section>
      </q-card>
    </div> -->

        <!-- <div>contacts page</div> -->

        <div class="form-container" id="form-break" style="margin-top: 8rem;">
        <h4 class="" style="margin: 25px 0 !important; font-weight: 400;">Have questions? <strong>Fill out the form and our team will get back to you within 24 hours.</strong></h4>

        <q-form @submit="handleContactSubmit" ref="contactForm">
            <div class="form-group row q-col-gutter-md">
                   <!-- <q-form class="row q-col-gutter-md"> -->

                  <div class="col-12 col-md-6">
                    <label class="input-label">First Name <span class="required">*</span></label>
                    <q-input v-model="firstName"
                    :rules="[validateRequired]"
                      outlined class="custom-input" />
                  </div>

                  <!-- Last Name -->
                  <div class="col-12 col-md-6">
                    <label class="input-label">Last Name <span class="required">*</span></label>
                    <q-input v-model="lastName"
                    :rules="[validateRequired]"
                     outlined class="custom-input" />
                  </div>
                <!-- </q-form> -->
            </div>

            <div class="form-group">
                <label>Phone *</label>
                <q-input outlined
                :rules="[validateRequired,validatePhone]"
                v-model="phone"
                type="tel"  />
            </div>

            <div class="form-group">
                <label>Email *</label>
                <q-input type="email"
                :rules="[validateRequired,validateEmail]"
                v-model="email"
                outlined />
            </div>

            <!-- <div class="form-group">
                <label>Which Services are You Looking For? *</label>
                <q-select
                  v-model="service"
                  :options="serviceOptions"
                  outlined
                  dense
                  :rules="[validateRequired]"
                  class="custom-select"
                  emit-value
                  map-options

                />
            </div> -->

            <div class="form-group">
                <label>Message *</label>
                <q-input type="textarea"
                :rules="[validateRequired]"
                v-model="message"
                outlined />
            </div>

            <div class="form-group">
                <q-img class="captha" src="/images/captcha.png" height="50%" width="50%"/>
            </div>
            <q-btn label="SUBMIT" rounded unelevated color="primary" class="q-mt-md q-px-xl text-bold" style="max-width: 298px;" type="submit"/>
        </q-form>
    </div>

    <div class="faq-container">
      <h4 class=""><span class="" style="font-weight: 800;">Answers to Your Frequently Asked Questions...</span></h4>
      <q-list class="faq-list">
        <q-expansion-item
          v-for="(item, index) in faqs"
          :key="index"
          expand-separator
          dense
          header-class="faq-item"
        >
          <template v-slot:header>
            <q-item-section class="text-desc" style="margin-bottom: .5rem; font-size: 22px; width: 500;"><strong>{{ item.question }}</strong></q-item-section>
            <q-item-section side>
              <q-icon color="primary" name="add"  />
            </q-item-section>
          </template>
          <q-card>
            <q-card-section>
              <p class="text-desc" style="font-size: 20px; width: 500;">{{ item.answer }}</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

      <div class="read-more text-center">
        <sapn class="text-weight-bold"  style="color: #00659E;">READ MORE</sapn>
      </div>
    </div>
    </q-page-container>
  </q-page>
</template>
<script>
import { ref } from "vue";
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";
export default{
  setup(){

  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const phone = ref('');
  const service = ref('');
  const message = ref('');
  const contactForm =ref(null);
  const q = useQuasar();
  const team = ref([
  { image: "/images/Chuck.png", name: "Chuck Ryan", position: "President / CEO" },
          { image: "/images/tim.png", name: "Tim O'Brien", position: "Executive Vice President of Sales" },
          { image: "/images/Bob.png", name: "Bob Craig", position: "Director of Information Technology" },
          { image: "/images/Terri.png", name: "Terri Darroch", position: "Chief Financial Officer" },
          { image: "/images/Gabe.png", name: "Gabe Kelley", position: "Sr. Director — East Region" },
          { image: "/images/Sulser.png", name: "Joel Sulser", position: "Director of Service Centers" },
          { image: "/images/Shane.png", name: "Shane Vasel", position: "VP of Marketing & Purchasing" }
  ]);
  const faqs = ref([
          { question: "How do I become an AMBEST Member?", answer: "You can become a member by signing up on our website." },
          { question: "What is AMBUCK$?", answer: "AMBUCK$ is our rewards program where you earn points on purchases." },
          { question: "How do I earn AMBUCK$ points?", answer: "You earn points when you make qualifying purchases." },
          { question: "Is there a fee to join AMBUCK$?", answer: "No, joining AMBUCK$ is completely free!" },
          { question: "Can I use my AMBUCK$ points at any location?", answer: "Points can be redeemed at participating locations." },
          { question: "I am not a truck stop owner. Can I still join AMBEST?", answer: "Yes, individuals can also join AMBEST." },
          { question: "Can I track my AMBEST points?", answer: "Yes, you can track your points through our website." },
          { question: "What is the AMBEST Fuel Card?", answer: "The AMBEST Fuel Card offers discounts on fuel purchases." },
          { question: "How do I use the AMBEST Fuel Card?", answer: "Simply swipe your card at participating fuel stations." },
          { question: "What are the benefits of using the AMBEST Fuel Card?", answer: "You can enjoy discounts, rewards, and more." }
      ]);
  const serviceOptions= ref([
        { label: "Select One", value: "" },
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
    const handleContactSubmit = ()=>{
      api.post(`contact-store`,{
        'first_name':firstName.value,
        'last_name':lastName.value,
        'email':email.value,
        'phone':phone.value,
        'service':service.value,
        'message':message.value,
      })
        .then((response)=>{
          showSuccessNotification(response.data.message);
          firstName.value ='';
          lastName.value ='';
          email.value ='';
          phone.value ='';
          service.value ='';
          message.value ='';
          contactForm.value?.reset();

        }).catch((error)=>{
          showErrorNotification(error.response.data.message || error.message);
        })
      // console.log(firstName.value);
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
   const scrollToElement = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    return {
      scrollToElement,
      team,
      faqs,
      contactForm,
      handleContactSubmit,
      serviceOptions,
      validateRequired,
      validateEmail,
      validatePhone,
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
      q,
      showSuccessNotification,
      showErrorNotification
    }
  }}

</script>

<style>
.q-field--outlined .q-field__control {
  height: 44px;
  border-radius: 8px;
}
.q-field__marginal{
  height: 44px;
}
.q-textarea .q-field__control{
  height: 120px;
}
.q-textarea .q-field__native{
  resize: none;
}
.q-expansion-item__toggle-icon {
  display: none !important;
}
.text-desc{
  font-size: 1rem;
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

.form-group{
  margin-bottom: 1rem;
}
.profile-card{
  height:215px;
  width:215px;
}


.form-container{
  margin-inline: auto;
  width: 40%;
  border-radius: 20px;
  box-shadow: 0px 1px 3px 0px #0000004D;
  padding: 30px 95px;
}

.form-field {
    flex: 1;
}

label {
    font-size: 20px;
    display: block;
    margin-bottom: 5px;
    font-weight: 700;
}

input, select, textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #000000;
    border-radius: 5px;
}

textarea {
    height: 80px;
}

.faq-container{
  width: 70%;
  margin: auto;
}
/* Mobile (up to 600px) */
@media (max-width: 600px) {
  .form-container{
  width: 99%;
}
.banner-container{
  width: 100%;
}
.banner-heading{
 font-size: 1.5rem;
}
.banner-sub-heading{
 font-size: 1rem;
}
.form-container{
  padding: 20px 30px;
}
.captha{
  width: 100% !important;
}
.faq-container{
  width: 90%;
  margin: auto;
}
}

/* Mobile (up to 600px) */
@media (max-width: 600px) {
.form-container{
  width: 95%;
}
.banner-container{
  width: 100%;
}
.banner-heading{
 font-size: 1.5rem;
}
.banner-sub-heading{
 font-size: 1rem;
}
.form-container{
  padding: 20px 30px;
}
.captha{
  width: 100% !important;
}
.learders-card{
  display: block !important;
}
}
/* Laptop (601px - 1024px) */
@media (min-width: 601px) and (max-width: 1024px) {
  .form-container{
  width: 60%;
}

.banner-heading{
 font-size: 2rem;
}
.banner-sub-heading{
 font-size: 1.2rem;
}
.form-container{
  padding: 20px 50px;
}
}

/* Desktop (1025px - 1440px) */
@media (min-width: 1025px) and (max-width: 1440px) {
  .form-container{
  width: 60%;
}
}
</style>
