<template>
  <q-page>
    <q-section>
      <div class="hero-container relative-position" style="height: 300px;">
        <q-img src="/images/petrol-filling-station.png" class="absolute-full" style="object-fit: cover ;z-index: -1; background-color: transparent;">
          <div class="absolute-center text-center text-white" style="background: transparent;">
            <div class="text-h2"><span class="text-weight-bold">AMBEST</span> Membership</div>
          </div>
        </q-img>
      </div>
    </q-section>

    <q-section>
      <div class="q-ma-xl rounded-borders" style="">
        <div class="banner-container row justify-center text-center q-py-lg">
          <div class=" row justify-center items-center col-12">
            <div class="col-12 col-md-6">
              <p class="banner-heading banner-sub-heading"><strong>Already an AMBEST Member? </strong></p>
                  <q-btn
                   label="membership login"
                   rounded
                   unelevated
                   color="primary"
                   class="col-12 col-md-4 q-mt-xs text-bold"
                   target="_blank"
                   href="https://ambest.powerappsportals.com/home/"
                   />
            </div>
            <div class="col-12 col-md-6 border-line">
              <p class="banner-heading banner-sub-heading"><strong>Interested in Becoming a Member? </strong></p>
              <q-btn
                   label="membership application"
                   rounded
                   unelevated
                   color="primary"
                   class="col-12 col-md-4 q-mt-xs text-bold"
                   to="/fuel-cards/membership/aplication"
                   />
            </div>
          </div>
        </div>
      </div>
    </q-section>

    <q-section>
      <div class="image-section">
          <q-img class="big-image" src="images/F_AMBEST Travel Centers - RGB.png"/>
      </div>
    </q-section>

    <q-section >
      <div class="details-section">
      <div class="panel-container row items-start q-my-xl q-px-xl">
        <div class="col-12 col-md-6">
          <div class="panel-card-name">AMBEST is a <strong>Member-Owned, Sales, Marketing,</strong> and <strong>Purchasing</strong> Organization. </div>
          <p class="text-desc">We are a trusted network of the finest independently owned and operated truck stops and service centers nationwide. Our mission is to drive profitability and support the long-term success of our Members by providing exclusive benefits, industry insights, and growth opportunities. As a Member, you’ll gain access to valuable advantages, including:</p>
          <ul class="panel-lists text-desc">
            <li>An alliance with a solid industry brand.</li>
            <li>A nationwide sales force dedicated to fostering relationships with more than 6,500 fleets nationwide.</li>
            <li>Robust purchasing programs that allow you to enjoy the economies of scale by providing access to network pricing on thousands of items you and your customers buy most.</li>
            <li>Innovative marketing programs designed to help enhance your brand to put trucks on your lots.</li>
            <li>Participation in AMBUCK$, one of the industry's most well-respected loyalty programs with more than 300,000 cardholders.</li>
            <li>The AMBEST Fuel Card is a fleet card designed to not only drive business to Members, but also helps control fees.</li>
            <li>And much, much more!</li>
          </ul>
        </div>
        <div class="hero-image-section col-12 col-md-6 q-px-xl">
          <div class="" style="max-width: 500px;">
            <q-responsive :ratio="9/6">
              <q-img src="images/member-img.png" style="border-radius: 1.25rem;"/>
            </q-responsive>
          </div>
        </div>
      </div>
    </div>
    </q-section>

    <q-section>
      <div class="qa-section text-center">
          <h4 class="" style="font-weight: 800;">How Do I Become an AMBEST Member?</h4>
          <p class="text-desc" style="font-size: 26px; font-weight: 500;">If you own or operate a Travel or Service center and you're
            interested in becoming an AMBEST Member, fill out the form
            below and we'll contact you as soon as possible!
          </p>
      </div>
    </q-section>

    <q-section>
      <div class="form-container" style="margin-top: 4rem;">
        <h5 class="heading"><strong>Become an</strong> AMBEST Member!</h5>

        <q-form @submit="handlemembershipform" ref="memberShipForm">

          <h5 class="form-section-first-heading"><strong>Contact Information</strong></h5>
            <div class="form-group row q-col-gutter-md">
                <div class="form-field col-12 col-md-6">
                    <label>Name *</label>
                    <q-input
                    :rules="[validateRequired]"
                    v-model="conatctName"
                    outlined  type="text" />
                </div>
                <div class="form-field col-12 col-md-6">
                    <label>Position *</label>
                    <q-input
                    :rules="[validateRequired]"
                    v-model="position"
                    outlined  type="text" />
                </div>
            </div>

            <div class="form-group">
                <label>Phone *</label>
                <q-input
                :rules="[validateRequired,validatePhone]"
                v-model="phone"
                outlined  type="tel" />
            </div>

            <div class="form-group">
                <label>Email *</label>
                <q-input
                :rules="[validateRequired,validateEmail]"
                v-model="email"
                outlined  type="email" />
            </div>



          <h5 class="form-section-second-heading"><strong>TRUCK STOP INFORMATION</strong></h5>
            <div class="form-group row q-col-gutter-md">
                <div class="form-field col-12 col-md-6">
                    <label>Name *</label>
                    <q-input
                    :rules="[validateRequired]"
                    v-model="locationName"
                    outlined  type="text" />
                </div>
            </div>

            <div class="form-group">
                <label>Location Address *</label>
                <q-input
                :rules="[validateRequired]"
                v-model="locationAdd"
                outlined  type="tel" />
            </div>

            <div class="form-group row q-col-gutter-md">
                <div class="form-field col-12 col-md-6">
                    <label>City *</label>
                    <q-input
                    :rules="[validateRequired]"
                    v-model="city"
                    outlined  type="text" />
                </div>
                <div class="form-field col-12 col-md-6">
                    <label>State/Province *</label>
                    <q-input
                    v-model="state"
                    outlined  type="text" />
                </div>
            </div>

            <div class="form-group row q-col-gutter-md">
                <div class="form-field col-12 col-md-6">
                    <label>Zip/Postal Code </label>
                    <q-input
                    :rules="[validateRequired]"
                    v-model="zip"
                    outlined  type="text" />
                </div>
                <div class="form-field col-12 col-md-6">
                    <label>Country *</label>
                    <q-input
                    :rules="[validateRequired]"
                    v-model="country"
                    outlined  type="text" />
                </div>
            </div>

            <div class="form-group row q-col-gutter-md">
                <div class="form-field col-12 col-md-6">
                    <label>Number of Drivers *</label>
                    <q-input
                    :rules="[validateRequired,validateNumber]"
                    v-model="numberOfDrivers"
                    outlined  type="text" />
                </div>
                <div class="form-field col-12 col-md-6">
                    <label>Number of Trucks *</label>
                    <q-input
                    :rules="[validateRequired,validateNumber]"
                    v-model="numberOfTrucks"
                    outlined  type="text" />
                </div>
            </div>

            <div class="form-group">
                <q-img class="captha" src="/images/captcha.png" height="50%" width="50%"/>
            </div>
            <q-btn label="SUBMIT" rounded unelevated color="primary" class="q-mt-md q-px-xl text-bold" style="max-width: 298px;" type="submit" />
        </q-form>
    </div>
    </q-section>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
export default{
  setup(){
    const memberShipForm =ref(null);
    const conatctName =ref('');
    const position =ref('');
    const phone =ref('');
    const email =ref('');
    const locationName =ref('');
    const locationAdd =ref('');
    const city =ref('');
    const state =ref('');
    const zip =ref('');
    const country =ref('');
    const numberOfDrivers =ref('');
    const numberOfTrucks =ref('');
    const q = useQuasar();
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
    const handlemembershipform=()=>{
      api.post(`store-membership-application`,{
        'name':conatctName.value,
        'position':position.value,
        'phone':phone.value,
        'email':email.value,
        'location_name':locationName.value,
        'location_address':locationAdd.value,
        'city':city.value,
        'state':state.value,
        'zip':zip.value,
        'country':country.value,
        'number_of_drivers' :numberOfDrivers.value,
        'number_of_trucks' :numberOfTrucks.value,
      })
      .then((response)=>{
        showSuccessNotification(response.data.message);
        conatctName.value = '';
        position.value='';
        phone.value = '';
        email.value = '';
        locationName.value = '';
        locationAdd.value = '';
        city.value = '';
        state.value = '';
        zip.value = '';
        country.value = '';
        numberOfDrivers.value = '';
        numberOfTrucks.value = '';
        memberShipForm.value?.reset();
      })
      .catch((error)=>{
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
        memberShipForm,
        conatctName,
        position,
        email,
        phone,
        locationName,
        locationAdd,
        city,
        state,
        zip,
        country,
        numberOfDrivers,
        numberOfTrucks,
        validateRequired,
        validatePhone,
        validateEmail,
        validateNumber,
        showErrorNotification,
        showSuccessNotification,
        handlemembershipform,
    }
  }}
</script>

<style>
label{
  font-size: 20px !important;
}
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

.banner-container{
  background-color: #f5f9fc !important;
  border-radius: 20px;
}
.banner-heading{
 font-size: 32px !important;
 font-weight: 800 !important;
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
.image-section{
  margin-inline: auto;
  width: 20%;
  border-radius: 20px;
  /* padding: 30px 95px; */
}
.qa-section{
  margin-inline: auto;
  width: 50%;
  border-radius: 20px;
  /* padding: 30px 95px; */
}
.qa-section h5{
  margin: 0;
}
.form-container .heading{
  margin-top: 25px  ;
  margin-bottom: 0;
  font-size: 32px;
  font-weight: 800;
}
.form-container  .second-heading{
  margin-top: 0 !important;
  margin-bottom: 25px !important;
}

.form-section-first-heading{
  text-transform: uppercase;
  color: #00659E;
  margin: 25px 0 20px 0;
}

.form-section-second-heading{
  text-transform: uppercase;
  color: #00659E;
  margin: 25px 0 20px 0;
}
.form-group{
  margin-bottom: 20px;
}

.text-desc{
  font-size: 1.2rem !important;
}

/* .form-field {
    flex: 1;
} */

label {
    font-size: 14px;
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
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


.border-line{
  border-left: 2px solid #00659E;
}

.details-section{
  margin-top: 1rem !important;
  width: 80% !important;
  margin: auto;
}

.panel-section-heading{
  font-size: 30px;
}
.panel-section-sub-heading{
  font-size: 20px !important;
  text-transform: uppercase;
}
.panel-card-name{
  font-size: 32px !important;
  font-weight: 400 !important;
}
.panel-card-sub-text{
  font-size: 20px !important;
  font-weight: 400 !important;
}
.panel-lists li{
  margin-bottom: .5rem !important;
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
.qa-section{
  width: 90%;
}
.border-line{
  margin-top: 2rem;
  border-left: none;
}
.image-section{
  width: 90%;
}
.panel-container, .panel-sub-container{
    padding-inline: 0 !important;
  }
.hero-image-section {
  padding: 0 !important;
  /* margin-bottom: 20px; */
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
.image-section{
  width: 30%;
}
}

/* Desktop (1025px - 1440px) */
@media (min-width: 1025px) and (max-width: 1440px) {
  .form-container{
  width: 60%;
}
}

/* Big Screens (1441px and above) */
@media (min-width: 1441px) {

}
</style>
