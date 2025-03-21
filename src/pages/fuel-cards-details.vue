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
              { label: 'Crossroads fuel Card', value: 'section3' }
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
                  <div class="panel-card-name">The <strong>Direct</strong> Fuel Card</div>
                  <p class="panel-card-sub-text">Ideal for businesses with multiple vehicles, looking for customizable controls and detailed reporting. </p>
                  <p>AMBEST is proud to offer the AMBEST Fleet Card, a joint venture with EFS, an industry leader in third-party billing. Unlike any other fleet card on the market, this new tool has some outstanding features that will help fleets of all sizes control expenditures and make informed buying decisions. Some of the features of the AMBEST Fleet Card include:</p>
                  <ul class="panel-lists">
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
                <div class="col-12 col-md-6 q-px-xl">
                  <div class="" style="max-width: 500px;">
                    <q-responsive :ratio="9/6">
                      <q-img src="images/EFS-Direct-Card-Web.png"/>
                    </q-responsive>
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
              <div class="row justify-center">
                <div class="col-12 col-md-6">
                  <div class="">
                    <q-responsive :ratio="9/6">
                      <q-img src="images/fornt-truck.png" style="border-radius: 20px 0 0 20px;"/>
                    </q-responsive>
                  </div>
                </div>
                <div class="col-12 col-md-6 bg-primary" style="border-radius: 0 20px 20px 0;">
                    <h5 class="text-h5 text-white text-center" style="font-weight: 600; margin-bottom: 0%;">Want More Information?</h5>
                    <p class="form-sub-heading">Complete the form, and our team will reach out! </p>
                    <div class="q-pa-xl">
                      <!-- here form  -->
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
                  <p class="panel-card-sub-text">The Preferred card designed specifically for carriers with small to mid-sized fleets.</p>
                  <p>AMBEST is proud to offer the AMBEST Preferred Fleet Card, a
                    joint venture with EFS, an industry leader in third-party billing. EFS can extend you the credit you need to get on the road, all you have to do is complete the online application process. Once your account is setup, fleet customers experience both transaction fee savings and fuel discounts when purchasing at over 500 AMBEST locations nationwide.</p>
                  <ul class="panel-lists">
                    <li>DEEP fuel discounts at AMBEST locations</li>
                    <li>$1.50 fuel transaction fee makes this card competitive for small fleets!</li>
                    <li>Earn 2X, 3X, & 4X AMBUCK$ points by fueling at AMBUCK$ locations.</li>
                  </ul>
                </div>
                <div class="col-12 col-md-6 q-px-xl">
                  <div class="" style="max-width: 500px;">
                    <q-responsive :ratio="9/6">
                      <q-img src="images/card.png"/>
                    </q-responsive>
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
              <div class="row justify-center">
                <div class="col-12 col-md-6">
                  <div class="">
                    <q-responsive :ratio="9/6">
                      <q-img src="images/see-side-truck.png" style="border-radius: 20px 0 0 20px;"/>
                    </q-responsive>
                  </div>
                </div>
                <div class="col-12 col-md-6 bg-primary" style="border-radius: 0 20px 20px 0;">
                    <h5 class="text-h5 text-white text-center" style="font-weight: 600; margin-bottom: 0%;">Want More Information?</h5>
                    <p class="form-sub-heading">Complete the form, and our team will reach out! </p>
                    <div class="q-pa-xl">
                      <!-- here form  -->
                    </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel v-if="tab === 'section3'" name="section3">
              <div class="text-center">
                <h4 class="panel-section-heading q-mb-xs"><span>AMBEST EFS <strong>Crossroads Fuel Card</strong></span></h4>
                <p class="panel-section-sub-heading text-bold">FOR USE ON GAS AND DIESEL</p>
              </div>
              <div class="panel-container row items-start q-mt-xl q-px-xl">
                <div class="col-12 col-md-6">
                  <div class="panel-card-name">The <strong>UMA Crossroads</strong> Fuel Card</div>
                  <p class="panel-card-sub-text">A Card Exclusively Designed for Fleets</p>
                  <p>AMBEST is proud to offer the Crossroads Fuel Card, a joint venture with EFS, an industry leader in third-party billing. This card is exclusively designed for fleets! Some of the features of the  Crossroads Fuel Card include:</p>
                  <ul class="panel-lists">
                    <li>Users save an average of $0.35 to $0.45 cents per gallon at all AMBEST Truck Stops!</li>
                    <li>Accepted at any location for Gas or Diesel fuel.</li>
                    <li>No monthly account maintenance fee. </li>
                    <li>Big discounts on diesel island purchases.</li>
                    <li>Earn 2X, 3X, & 4X AMBUCK$ points by fueling at AMBUCK$ locations.</li>
                  </ul>
                </div>
                <div class="col-12 col-md-6 q-px-xl">
                  <div class="" style="max-width: 500px;">
                    <q-responsive :ratio="9/6">
                      <q-img src="images/crossroads-card.png" style="border-radius: 1.25rem;"/>
                    </q-responsive>
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
              <div class="row justify-center">
                <div class="col-12 col-md-6">
                  <div class="">
                    <q-responsive :ratio="9/6">
                      <q-img src="images/road-and-sky.png" style="border-radius: 20px 0 0 20px;"/>
                    </q-responsive>
                  </div>
                </div>
                <div class="col-12 col-md-6 bg-primary" style="border-radius: 0 20px 20px 0;">
                    <h5 class="text-h5 text-white text-center" style="font-weight: 600; margin-bottom: 0%;">Want More Information?</h5>
                    <p class="form-sub-heading">Complete the form, and our team will reach out! </p>
                    <div class="q-pa-xl">
                      <!-- here form  -->
                    </div>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>

      </q-section>
    </q-container>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      tab: 'section1',
    };
  }
};
</script>
<style scoped>
/* tabs section  */
.tab-container {
  display: flex;
  justify-content: center;
}

.custom-tabs >>> .q-btn {
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
}
</style>
