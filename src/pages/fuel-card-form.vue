<template>
  <q-page>
    <q-section>
      <div class="q-ma-xl rounded-borders" style="">
        <div class="banner-container row justify-center text-center q-pb-lg">
          <div class="col-12">
            <h4 class="banner-heading text-h4 q-mb-md">
              AMBEST Fuel Card <span class="text-weight-bold">Online Application</span>
            </h4>
            <p class="banner-heading banner-sub-heading"><strong>Ready to get rolling with an AMBEST Fuel Card?</strong></p>
          </div>
        </div>
      </div>
    </q-section>
    <q-section>
      <div class="form-container" style="margin-top: 8rem;">
        <h4 class="heading">Fill out the form today to </h4>
        <h4 class="second-heading"><strong>start your application process! </strong></h4>


        <q-form @submit="handlemembershipform" ref="fuelCardForm">

          <h5 class="form-section-first-heading"><strong>choose your card type</strong></h5>
          <div class="form-group">
            <q-select
                  v-model="service"
                  :options="cardOptions"
                  outlined
                  dense
                  :rules="[validateRequired]"
                  class="custom-select"
                  emit-value
                  map-options

                />
          </div>

          <h5 class="form-section-second-heading"><strong>company information</strong></h5>
            <div class="form-group row q-col-gutter-md">
                <div class="form-field col-12 col-md-6">
                    <label>Contact Name *</label>
                    <q-input v-model="contactName" :rules="[validateRequired]" outlined type="text" />
                </div>
                <div class="form-field col-12 col-md-6">
                    <label>Corporate Name *</label>
                    <q-input v-model="corporateName" :rules="[validateRequired]" outlined type="text" />
                </div>
            </div>

            <div class="form-group">
                <label>Company Email Address *</label>
                <q-input v-model="email" :rules="[validateRequired,validateEmail]" outlined type="email" />
            </div>

            <div class="form-group">
                <label>Location Phone *</label>
                <q-input v-model="phone" :rules="[validateRequired,validatePhone]" outlined type="tel" />
            </div>

            <div class="form-group">
                <label>Location Address *</label>
                <q-input v-model="locationAdd" :rules="[validateRequired]" outlined type="tel" />
            </div>

            <div class="form-group row q-col-gutter-md">
                <div class="form-field col-12 col-md-6">
                    <label>City *</label>
                    <q-input v-model="city" :rules="[validateRequired]" outlined type="text" />
                </div>
                <div class="form-field col-12 col-md-6">
                    <label>State/Province *</label>
                    <q-input v-model="state" :rules="[validateRequired]" outlined type="text" />
                </div>
            </div>

            <div class="form-group row q-col-gutter-md">
                <div class="form-field col-12 col-md-6">
                    <label>Zip/Postal Code </label>
                    <q-input v-model="zip" :rules="[validateRequired]" outlined type="text" />
                </div>
                <div class="form-field col-12 col-md-6">
                    <label>Country *</label>
                    <q-input v-model="country" :rules="[validateRequired]" outlined type="text" />
                </div>
            </div>

            <div class="form-group row q-col-gutter-md">
                <div class="form-field col-12 col-md-6">
                    <label>Number of Drivers *</label>
                    <q-input v-model="numberOfDrivers" :rules="[validateRequired,validateNumber]" outlined type="text" />
                </div>
                <div class="form-field col-12 col-md-6">
                    <label>Number of Trucks *</label>
                    <q-input v-model="numberOfTrucks" :rules="[validateRequired,validateNumber]" outlined type="text" />
                </div>
            </div>

            <div id="recaptcha-container"></div>
            <!-- <div class="form-group">
                <q-img class="captha" src="/images/captcha.png" height="50%" width="50%"/>
            </div> -->
            <q-btn label="SUBMIT" rounded unelevated color="primary" class="q-mt-md q-px-xl text-bold" style="max-width: 298px;" type="submit"/>
        </q-form>
    </div>
    </q-section>
  </q-page>
</template>
<script>
import { ref,onMounted } from 'vue';
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";
export default{
  setup(){
    const captchaSuccess= ref(false);
    const recaptchaWidgetId = ref(null);
    const recaptchaSiteKey = '6LfBUAkrAAAAAKh4Enzz4ANdzfbf4exJLGe9Nbal'
    const recaptchaResponse = ref('')


    const q = useQuasar();
    const service = ref('');
    const fuelCardForm = ref(null);
    const contactName =ref('');
    const corporateName =ref('');
    const email =ref('');
    const phone =ref('');
    const locationAdd =ref('');
    const city =ref('');
    const state =ref('');
    const zip =ref('');
    const country =ref('');
    const numberOfDrivers =ref('');
    const numberOfTrucks =ref('');
    const cardOptions= ref([
        { label: "Select One", value: "" },
        { label: "Direct Fuel Card", value: "direct" },
        { label: "Preferred Fuel Card", value: "preferred" },
        { label: "Crossroads Fuel Card", value: "crossroads" },
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
    const validateNumber=(val)=> {
        const regex = /^[0-9]+$/; // Allows only numbers (0-9)
        return regex.test(val) || "Only number ";
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

    const handlemembershipform=()=>{
      if (!captchaSuccess.value) {
        showErrorNotification('Please complete the reCAPTCHA.');
        return;
      }
      api.post(`store-ambest-Fuel-card-application`,{
        'card_type':service.value,
        'contact_name':contactName.value,
        'corporate_name':corporateName.value,
        'company_email':email.value,
        'location_phone':phone.value,
        'location_address':locationAdd.value,
        'city':city.value,
        'zip':zip.value,
        'state':state.value,
        'country':country.value,
        'number_of_drivers':numberOfDrivers.value,
        'number_of_trucks':numberOfTrucks.value,
      })
      .then((response)=>{
        showSuccessNotification(response.data.message);
        service.value = '';
        contactName.value = '';
        corporateName.value = '';
        email.value = '';
        phone.value = '';
        locationAdd.value = '';
        city.value = '';
        zip.value = '';
        state.value = '';
        country.value = '';
        numberOfDrivers.value = '';
        numberOfTrucks.value = '';
        fuelCardForm.value?.reset();

      }).catch((error)=>{
        showErrorNotification(error.response.data.message || error.message);
      })

      // Optional: reset widget
      window.grecaptcha.reset(recaptchaWidgetId.value);
      captchaSuccess.value = false;
      recaptchaResponse.value = '';
    }

    onMounted(() => {
      window.onCaptchaVerified = (token) => {
        recaptchaResponse.value = token
      }
    })
    const loadCaptcha = () =>{
      if (window.grecaptcha) {
        recaptchaWidgetId.value = window.grecaptcha.render('recaptcha-container',{
          sitekey: recaptchaSiteKey,
          callback: (token)=>{
            captchaSuccess.value = true;
            recaptchaResponse.value = token;
            console.log(recaptchaResponse);
          },
          'expired-callback': () => {
            captchaSuccess.value = false;
            recaptchaResponse.value = '';

          }
        });
      } else {
        setTimeout(loadCaptcha, 500); // Retry until grecaptcha is loaded
      }
    }
    onMounted(()=>{
      loadCaptcha();
    })

    return {

        recaptchaResponse,
        recaptchaSiteKey,
        recaptchaWidgetId,
        captchaSuccess,
        q,
        service,
        fuelCardForm,
        contactName,
        corporateName,
        email,
        phone,
        locationAdd,
        city,
        state,
        zip,
        country,
        numberOfDrivers,
        numberOfTrucks,
        handlemembershipform,
        validateRequired,
        validatePhone,
        validateEmail,
        validateNumber,
        cardOptions,
        showErrorNotification,
        showSuccessNotification,
    }
  }}
</script>
<style>

.q-field--outlined .q-field__control{
  height: 44px !important;
  border-radius: 8px !important;
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


.banner-container{
  background-color: #f5f9fc !important;
  border-radius: 20px;
}
.banner-heading{
 font-size: 2.5rem;
}
.banner-sub-heading{
 font-size: 1.6rem;
}
.form-container{
  margin-inline: auto;
  width: 40%;
  border-radius: 20px;
  box-shadow: 0px 1px 3px 0px #0000004D;
  padding: 30px 95px;
}
.form-container .heading{
  margin-top: 25px  ;
  margin-bottom: 0;
}
.form-container  .second-heading{
  margin-top: 0 !important;
  margin-bottom: 25px !important;
}

.form-section-first-heading{
  text-transform: uppercase;
  color: #00659E;
  margin: 0 0 20px 0;
}

.form-section-second-heading{
  text-transform: uppercase;
  color: #00659E;
  margin: 25px 0 20px 0;
}
.form-group{
  margin-bottom: 20px;
}


/* .form-field {
    flex: 1;
} */

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

/* Big Screens (1441px and above) */
/* @media (min-width: 1441px) {

} */
</style>
