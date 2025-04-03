<template>
  <q-page>
    <q-container>
      <q-section class="">
        <div class="tab-container q-mt-xl">
          <q-btn-toggle
            v-model="tab"
            toggle-color="primary"
            color="grey-2"
            text-color="black"
            no-caps
            spread
            rounded
            :options="[
              { label: 'Direct fuel Card', value: 'section1' },
              { label: 'Preferred fuel Card', value: 'section2' },
            ]"
            class="custom-tabs"
          />
        </div>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'section1'" name="section1">
              <div class="text-center">
                <h4 class="panel-section-heading q-mb-xs"><span>AMBEST EFS <strong>Direct Fuel Card</strong></span></h4>
                <p class="panel-section-sub-heading text-bold">BIG SAVINGS FOR HARDWORKING FLEETS</p>
              </div>
              <div class="panel-container row items-start q-mt-xl q-px-xl">
                <div class="panel-sub-container col-12 col-md-6 q-px-xl">
                  <div class="panel-card-name text-h5">The <strong>Direct</strong> Fuel Card</div>
                  <p class="panel-card-sub-text text-desc">Ideal for businesses with multiple vehicles, looking for customizable controls and detailed reporting. </p>
                  <p class="text-desc">AMBEST is proud to offer the AMBEST Fleet Card, a joint venture with EFS, an industry leader in third-party billing. Unlike any other fleet card on the market, this new tool has some outstanding features that will help fleets of all sizes control expenditures and make informed buying decisions. Some of the features of the AMBEST Fleet Card include:</p>
                  <ul class="panel-lists text-desc">
                    <li>A "One-Card" fuel card with acceptance anywhere EFS is accepted, including most major chains and many independents nationwide</li>
                    <li>Custom designed POS fuel discounts at the truck stops your fleet visits most</li>
                    <li>Valuable management information at the point of sale</li>
                    <li>The capacity to set controls for purchases and cash advances</li>
                    <li>On-line account administration, FREE reports and management tools</li>
                    <li>FREE 24/7 customer service</li>
                    <li>Plus AMBEST will credit the transaction fee for loyal fleet customers that use the AMBEST Fuel Card anywhere within the AMBEST network</li>
                    <li>Earn 2X, 3X, & 4X AMBUCK$ points by fueling at AMBUCK$ locations.</li>
                  </ul>
                </div>
                <div class="col-12 image-section col-md-6 q-px-xl">
                  <div class="" style="max-width: 500px;">
                    <q-responsive :ratio="9/6">
                      <q-img src="images/EFS-Direct-Card-Web.png"/>
                    </q-responsive>
                    <q-btn
                      label="VIEW ACCEPTING LOCATIONS"
                      rounded
                      unelevated
                      color="primary"
                      class="col-12 col-md-4 q-mt-xs q-px-lg text-bold"
                      to="/fuel-cards/fuel-card-form/aplication"
                      />
                  </div>
                </div>
              </div>
              <div class="panel-btn-section  q-my-xl">
                  <q-btn
                   label="Apply Today"
                   rounded
                   unelevated
                   color="primary"
                   class="col-12 col-md-4 q-mt-xs text-bold"
                   to="/fuel-cards/fuel-card-form/aplication"
                   />
                  <q-btn
                    outline
                    color="primary"
                    style="background-color: white !important;"
                    rounded
                    unelevated
                    class="col-12 col-md-4 q-mt-xs text-bold"
                    label="Download Brochure"
                    size="md"
                    @click="downloadFile"
                  />
                  <q-btn
                    outline
                    color="primary"
                    style="background-color: white !important;"
                    rounded
                    unelevated
                    class="col-12 col-md-4 q-mt-xs text-bold"
                    label="Descargar Folleto En Espaňol"
                    size="md"
                  />
              </div>

                <div class="form-section row  bg-primary" style="margin: auto; border-radius: 20px;">
                  <!-- Right Side: Image -->
                  <div class="col-12 col-md-6 text-center">
                        <q-img
                          src="/images/fornt-truck.png"
                          class="rounded-borders form-section-image"
                          fit="cover"
                          height="100%"
                          style="border-radius: 20px 0 0 20px;"
                        />
                  </div>

                    <!-- Left Side: Text Content -->
                    <div class="col-12  col-md-6 q-px-xl">
                      <div class="content">
                        <h5 class="text-white text-bold text-center q-mb-sm"><strong>Want More Information?</strong></h5>
                        <p class="text-white text-center text-body2 text-desc">
                          Complete the form, and our team will reach out!
                        </p>
                        <div class="">
                          <q-form class="contact-form" @submit="submitForm">
                          <div class="row q-col-gutter-md">
                            <q-input class="col-12 col-md-6 input-area" bg-color="white"  outlined v-model="firstName" :rules="[validateRequired]" label="First Name"/>
                            <q-input class="col-12 col-md-6 input-area" bg-color="white"  outlined v-model="lastName" :rules="[validateRequired]" label="Last Name"/>
                            <q-input class="col-12 col-md-6 input-area" bg-color="white"  outlined v-model="email" :rules="[validateRequired,validateEmail]" label="Email"/>
                            <q-input class="col-12 col-md-6 input-area" bg-color="white"  outlined v-model="phone" :rules="[validateRequired,validatePhone]" label="Phone"/>
                            <q-input class="col-12 input-area" bg-color="white"  outlined v-model="sortMessage" :rules="[validateRequired]" label="Subject"/>
                            <q-input class="col-12 " bg-color="white" outlined v-model="message" :rules="[validateRequired]" label="Message" type="textarea"/>
                          </div>
                          <div class="flex flex-center q-ma-md">
                            <q-btn rounded color="white" text-color="primary" label="SUBMIT" class="text-bold q-px-xl" type="submit"  />
                          </div>
                        </q-form>
                        </div>
                      </div>
                    </div>
                  </div>
            </q-tab-panel>

            <q-tab-panel v-if="tab === 'section2'" name="section2">
              <div class="text-center">
                <h4 class="panel-section-heading q-mb-xs"><span>AMBEST EFS <strong>Preferred Fuel Card</strong></span></h4>
                <p class="panel-section-sub-heading text-bold">BIG DISCOUNTS FOR SMALL FLEETS</p>
              </div>
              <div class="panel-container row items-start q-mt-xl q-px-xl">
                <div class="col-12 col-md-6">
                  <div class="panel-card-name">The <strong>Preferred</strong> Fuel Card</div>
                  <p class="panel-card-sub-text text-desc">The Preferred card designed specifically for carriers with small to mid-sized fleets.</p>
                  <p class="text-desc">AMBEST is proud to offer the AMBEST Preferred Fleet Card, a
                    joint venture with EFS, an industry leader in third-party billing. EFS can extend you the credit you need to get on the road, all you have to do is complete the online application process. Once your account is setup, fleet customers experience both transaction fee savings and fuel discounts when purchasing at over 500 AMBEST locations nationwide.</p>
                  <ul class="panel-lists text-desc">
                    <li>DEEP fuel discounts at AMBEST locations</li>
                    <li>$1.50 fuel transaction fee makes this card competitive for small fleets!</li>
                    <li>Earn 2X, 3X, & 4X AMBUCK$ points by fueling at AMBUCK$ locations.</li>
                  </ul>
                </div>
                <div class="col-12 image-section col-md-6 q-px-xl">
                  <div class="" style="max-width: 500px;">
                    <q-responsive :ratio="9/6">
                      <q-img src="images/card.png"/>
                    </q-responsive>
                      <q-btn
                      label="VIEW ACCEPTING LOCATIONS"
                      rounded
                      unelevated
                      color="primary"
                      class="col-12 col-md-4 q-mt-xs q-px-lg text-bold"
                      to="/fuel-cards/fuel-card-form/aplication"
                      />
                  </div>
                </div>
              </div>
              <div class="panel-btn-section q-my-xl">
                  <q-btn
                   label="Apply Today"
                   rounded
                   unelevated
                   color="primary"
                   class="col-12 col-md-4 q-mt-xs text-bold"
                   to="/fuel-cards/fuel-card-form/aplication"
                   />
                  <q-btn
                    outline
                    color="primary"
                    style="background-color: white !important;"
                    rounded
                    unelevated
                    class="col-12 col-md-4 q-mt-xs text-bold"
                    label="Download Brochure"
                    size="md"
                    @click="downloadFile"
                  />
                  <q-btn
                    outline
                    color="primary"
                    style="background-color: white !important;"
                    rounded
                    unelevated
                    class="col-12 col-md-4 q-mt-xs text-bold"
                    label="Descargar Folleto En Espaňol"
                    size="md"
                  />
              </div>
              <div class="form-section row  bg-primary" style="margin: auto; border-radius: 20px;">
                <!-- Right Side: Image -->
                <div class="col-12 col-md-6 text-center">
                      <q-img
                        src="images/see-side-truck.png"
                        class="rounded-borders form-section-image"
                        fit="cover"
                        height="100%"
                        style="border-radius: 20px 0 0 20px;"
                      />
                    </div>

                  <!-- Left Side: Text Content -->
                  <div class="col-12  col-md-6 q-pa-xl">
                    <div class="content">
                      <h5 class="text-white text-bold text-center q-mb-sm"><strong>Get In touch</strong></h5>
                      <p class="text-white text-center text-body2 text-desc">
                        Complete the form, and our team will get in touch with you!
                      </p>
                      <div class="">
                        <q-form class="contact-form" @submit="submitForm">
                          <div class="row q-col-gutter-md">
                            <q-input class="col-12 col-md-6 input-area" bg-color="white"  outlined v-model="firstName" :rules="[validateRequired]" label="First Name"/>
                            <q-input class="col-12 col-md-6 input-area" bg-color="white"  outlined v-model="lastName" :rules="[validateRequired]" label="Last Name"/>
                            <q-input class="col-12 col-md-6 input-area" bg-color="white"  outlined v-model="email" :rules="[validateRequired,validateEmail]" label="Email"/>
                            <q-input class="col-12 col-md-6 input-area" bg-color="white"  outlined v-model="phone" :rules="[validateRequired,validatePhone]" label="Phone"/>
                            <q-input class="col-12 input-area" bg-color="white"  outlined v-model="sortMessage" :rules="[validateRequired]" label="Subject"/>
                            <q-input class="col-12 " bg-color="white" outlined v-model="message" :rules="[validateRequired]" label="Message" type="textarea"/>
                          </div>
                          <div class="flex flex-center q-mt-md">
                            <q-btn rounded color="white" text-color="primary" label="SUBMIT" class="text-bold q-px-xl" type="submit"  />
                          </div>
                        </q-form>
                      </div>
                    </div>
                  </div>
                </div>
            </q-tab-panel>
          </q-tab-panels>
          <div v-if="tab === 'section2'" class="float-apply-button">
            <q-btn
              label="Apply Now"
              rounded
              unelevated
              color="primary"
              class="col-12 col-md-4 q-mt-xs text-bold"
              to="/fuel-cards/fuel-card-form/aplication"
              style="height: 50px; width: 200px;"
              />
          </div>
      </q-section>
    </q-container>
  </q-page>
</template>
<script>
import { ref } from 'vue'
import { api } from 'src/boot/axios';
import { useQuasar } from 'quasar';
  export default {
    setup() {
      const q = useQuasar();
      const tab = ref('section1');
      const firstName = ref('');
      const lastName = ref('');
      const email = ref('');
      const phone = ref('');
      const sortMessage = ref('I would like more information on the AMBEST Fuel Card.');
      const message = ref('');

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
      const submitForm =()=>{
        api.post(`store-ambest-Fuel-card-inquery`,{
          'first_name':firstName.value,
          'last_name':lastName.value,
          'email':email.value,
          'phone':phone.value,
          'sort_message':sortMessage.value,
          'message':message.value,
        })
          .then((response)=>{
            showSuccessNotification(response.data.message);

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
      const downloadFile = () => {
      const filePath = "/files/DirectFuelCard.pdf"; // Change this to your file path inside the "public" folder
      const link = document.createElement("a");
      link.href = filePath;
      link.download = "brochure.pdf"; // Name of the file when downloaded
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
      return {q, tab, firstName, lastName, email, phone, sortMessage, message, validateEmail, validatePhone, validateRequired,showSuccessNotification, showErrorNotification, submitForm,downloadFile, }
    }}
</script>
<style scoped>
.text-desc{
  font-size: 1.2rem;
}

.q-field__marginal{
  height: 44px;
}
.form-section{
  /* max-height: 700px; */
  max-width: 90%;
  margin: auto;
  margin-left:10%;
}
/* tabs section  */
.tab-container {
  display: flex;
  justify-content: center;
}

.custom-tabs :deep() .q-btn {
  padding: 10px 30px;
  font-weight: bold;
  border-radius: 50px;
  white-space: nowrap;
  min-width: 200px;
  max-width: 300px;
  width: 100% !important;
  text-align: center;
}

.q-btn-group{
  gap:1rem;
  box-shadow: none !important;
}
.q-btn .q-btn-item{
  border-radius: 20px !important;
}
/* panel section  */
.q-tab-panels{
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
  font-size: 25px;
}
.panel-card-sub-text{
  /* font-size: 16px; */
  font-weight: 600;
}
.panel-lists li{
  margin-bottom: .5rem !important;
}
.panel-btn-section{
  display: flex !important;
  flex-wrap: wrap;
  justify-content: center !important;
  gap: 1rem !important;
}
.panel-btn-section button{
  text-transform: capitalize !important;
  border: 1px solid;
}
/* form section  */
.form-sub-heading{
  font-size: 16px;
  color: #fff;
  text-align: center;
}
/* .q-col-gutter-md{
  padding-top: 5px;
} */

/* button scroll follows */
.float-apply-button{
  position: fixed;
  bottom: 100px;
  right: 100px;
  z-index: 10000;
  transition: opacity 0.3s ease-in-out;
}
@media (max-width: 600px) {
    .q-btn-group{
      flex-direction: column !important;
  }
  .q-tab-panels{
    margin-top: 1rem !important;
  }
  .panel-container, .panel-sub-container{
    padding-inline: 0 !important;
  }

  .panel-container .image-section{
    padding-inline: 0 !important;
  }
  .form-section-image{
  border-radius:  20px;
  }
}
@media (max-width: 1024px) { /* Medium screens */
  .content{
    padding: 0;
  }
}

</style>
