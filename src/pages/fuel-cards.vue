<template>
  <q-page class="">
    <q-page-container style="padding: 0;">
    <!-- Hero Section -->
      <div class="hero-container relative-position" style="height: 300px;">
        <q-img src="/images/cards-banner.png" class="absolute-full" style="z-index: -1; background-color: transparent;">
          <div class="absolute-center text-center text-white" style="background: transparent;">
            <div class="text-h2 text-weight-bold">AMBEST Fuel Cards</div>
          </div>
        </q-img>
      </div>

      <div class="custom-banner text-h3">
        <div class="flex flex-center q-mb-none">
          <h4 class="q-mb-xs"><span style="color: white;">Fuel Savings, Simplified — <strong>Introducing AMBEST Fuel Cards</strong></span></h4>
        </div>
        <q-btn
          outline
          color="primary"
          style="background-color: white !important;"
          rounded
          unelevated
          class="q-mt-xs text-bold"
          label="Apply for a card today"
          size="md"
          to="/fuel-cards/fuel-card-form/aplication"

        />
      </div>

      <div class="q-pa-md row   justify-center  info-section q-col-gutter-md">
      <!-- Left Section (Text) -->
      <div class="col-md-6 col-12 q-pr-md">
        <h5 class="q-pa-none">About AMBEST <strong>Fuel Cards</strong> Provide:</h5>
        <ul class="text-desc text-list">
          <li>Exclusive fuel discounts for professional drivers and fleet operators</li>
          <li>Flexible payment options to fit your needs</li>
          <li>Expense tracking for better financial management</li>
          <li>Accepted at over 1,000 AMBEST locations nationwide</li>
          <li>Ideal for both fleet managers and solo drivers</li>
          <li>Save money while keeping operations efficient and hassle-free</li>
          <li>Access to AMBUCK$ points</li>
        </ul>
      </div>

      <!-- Right Section (Images) -->
      <div class="col-md-6 col-6 text-right q-pl-none relative-position">
        <q-img src="/images/EFS-Direct-Card-Web.png" class="overlapping-card" />
        <q-img src="/images/card.png" class="overlapping-card second-card" />
      </div>
    </div>


    <q-container>
      <div class="news-section row items-center bg-light q-mb-xl">
        <div class="col-12 col-md-6 text-center">
          <q-img
            src="/images/fuel-refill.jpg"
            class="rounded-borders"
            fit="cover"
            style=" border-radius: 20px;"
            width="70%"
          />
        </div>
        <!-- right Side: Text Content -->
        <div class="col-12  col-md-6 q-px-xl q-mb-xl">
          <div class="content q-pa-md q-mb-none">
            <h4><strong>Why </strong> Choose AMBEST <strong>Fuel Cards </strong>?</h4>
            <p class="text-desc">Enjoy exclusive discounts at over 1,000 locally owned and independent locations nationwide, plus flexible options designed to meet the needs of both fleets and individual drivers. Support local businesses while saving more and keeping your journey running smoothly!</p>
          </div>
        </div>
      </div>
    </q-container>

      <div class="row justify-center q-my-xl">
      <div class="col-md-10 col-12">
        <h5 class="text-h5 text-center" style="margin-block: 5px;"><span class="text-weight-bold">Find the Right AMBEST Fuel Card for You</span></h5>
        <p class="text-desc_1_1 text-center ">
          <strong>AMBEST offers two fuel card options to fit the unique needs of drivers <br> and fleets. Compare below to see which one is the best fit for your business.</strong>
        </p>
        <p class="text-center text-desc_1_1">
          Fuel Cards are accepted at all EFS-approved locations across the U.S. and Canada.
        </p>
      </div>
    </div>

    <!-- <div class="row justify-center q-mt-lg">
      <div class="col-md-5 col-12">
        <q-card class="fuel-card text-center">
          <q-img src="/images/card1.png" class="card-image" />
          <q-card-section>
            <h5 class="text-primary">EFS Direct Card</h5>
            <p>Ideal for businesses with multiple vehicles looking for customizable controls and detailed reporting.</p>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <q-list dense>
              <q-item>
                <q-item-section><strong>Best For:</strong> Businesses managing multiple vehicles</q-item-section>
              </q-item>
              <q-item>
                <q-item-section><strong>Discounts:</strong> Aggressive discounts at AMBEST locations</q-item-section>
              </q-item>
              <q-item>
                <q-item-section><strong>Fuel Controls:</strong> Customizable spending limits and controls</q-item-section>
              </q-item>
              <q-item>
                <q-item-section><strong>Accepted At:</strong> Nationwide fuel and maintenance locations</q-item-section>
              </q-item>
              <q-item>
                <q-item-section><strong>Reporting:</strong> Detailed Reports for tracking expenses</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn color="primary" label="SEE ALL BENEFITS" />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-md-5 col-12">
        <q-card class="fuel-card text-center">
          <q-img src="/images/card2.png" class="card-image second-card" />
          <q-card-section>
            <h5 class="text-primary">EFS Preferred Card</h5>
            <p>Perfect for individual drivers or small fleets seeking straightforward savings, flexibility, and convenience with easy management.</p>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <q-list dense>
              <q-item>
                <q-item-section><strong>Best For:</strong> Individual drivers and small fleets</q-item-section>
              </q-item>
              <q-item>
                <q-item-section><strong>Discounts:</strong> Competitive discounts at AMBEST locations & affiliates</q-item-section>
              </q-item>
              <q-item>
                <q-item-section><strong>Fuel Controls:</strong> Simple, hassle-free purchasing</q-item-section>
              </q-item>
              <q-item>
                <q-item-section><strong>Accepted At:</strong> AMBEST locations only</q-item-section>
              </q-item>
              <q-item>
                <q-item-section><strong>Reporting:</strong> Detailed Reports for tracking expenses</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn color="primary" label="SEE ALL BENEFITS" />
          </q-card-actions>
        </q-card>
      </div>
    </div> -->

    <q-container >
      <div class="row justify-center" style="width: 80%; margin: auto;">
          <div class="col-4"></div>
          <div class="col-4 q-pl-lg" style="border-left: 1px solid #00659E;">
            <q-img src="/images/EFS-Direct-Card-Web.png" class="card-image" fit="cover"
              width="50%"  />
            <q-card-section>
              <div class="text-h6 text-primary text-weight-bold">EFS Preferred Card</div>
              <p class="text-subtitle2">
                Perfect for individual drivers or small fleets seeking straightforward savings, flexibility, and convenience.
              </p>
            </q-card-section>
          </div>
          <div class="col-4 q-pl-lg" style="border-left: 1px solid #00659E;">
            <q-img src="/images/EFS-Direct-Card-Web.png" class="card-image" fit="cover"
              width="50%" />
            <q-card-section>
              <div class="text-h6 text-primary text-weight-bold">EFS Preferred Card</div>
              <p class="text-subtitle2">
                Perfect for individual drivers or small fleets seeking straightforward savings, flexibility, and convenience.
              </p>
            </q-card-section>
          </div>
          <!-- rows -->
          <div class="col-12 row" v-for="(item, index) in rows" :key="index">
              <div class="col-2"></div>
             <div class="col-2"><q-item-section class=" text-desc text-primary"><strong>{{item.category}}</strong></q-item-section></div>
             <div class="col-4">
               <q-item-section><sapn class="text-desc q-pl-lg" style="border-left: 1px solid #00659E;"> {{item.businesses}}</sapn></q-item-section>
              </div>
              <div class="col-4">
                <q-item-section><sapn class="text-desc q-pl-lg" style="border-left: 1px solid #00659E;">{{item.individuals}}</sapn></q-item-section>
              </div>
          </div>
          <div class="col-12 row">
            <div class="col-2"></div>
            <div class="col-2"></div>
            <div class="col-4" style="border-left: 1px solid #00659E;"></div>
            <div class="col-4">
              <q-item-section><sapn class="text-desc q-pl-lg" style="border-left: 1px solid #00659E;">AMBUCK$ Tiers: Direct and Preferred Memberships</sapn></q-item-section>
            </div>
          </div>
          <div class="col-12 row">
            <div class="col-2"></div>
            <div class="col-2"></div>
            <div class="col-4 flex q-pl-lg" style="flex-direction: column;">
              <q-btn label="SEE ALL BENEFITS" rounded unelevated color="primary" class="q-mt-md text-bold" to="/fuel-cards/details" style="width: 255px;" />
              <q-btn label="VIEW ACCEPTING LOCATIONS" rounded unelevated color="primary" class="q-mt-md text-bold" to="/about-ambest" style="width: 255px;" />
            </div>
            <div class="col-4 flex q-pl-lg" style="flex-direction: column;">
              <q-btn label="SEE ALL BENEFITS" rounded unelevated color="primary" class="q-mt-md text-bold" to="/fuel-cards/details" style="width: 255px;" />
              <q-btn label="VIEW ACCEPTING LOCATIONS" rounded unelevated color="primary" class="q-mt-md text-bold" to="/about-ambest" style="width: 255px;" />
            </div>
          </div>
      </div>
    </q-container>



    <!-- <div class="row justify-center q-mt-xl" >
      <table>
        <tbody>
          <tr>
            <td colspan="2" style="border-left: 1px solid black;"><q-img src="/images/EFS-Direct-Card-Web.png" class="card-image" fit="cover"
              width="50%" height="100%"  />
          <q-card-section>
            <div class="text-h6 text-primary">EFS Preferred Card</div>
            <p class="text-subtitle2">
              Perfect for individual drivers or small fleets seeking straightforward savings, flexibility, and convenience.
            </p>
          </q-card-section></td>
            <td style="border-left: 1px solid black;">
              <q-img src="/images/card.png" class="card-image" fit="cover"
              width="50%" height="100%" />
          <q-card-section>
            <div class="text-h6 text-primary">EFS Preferred Card</div>
            <p class="text-subtitle2">
              Perfect for individual drivers or small fleets seeking straightforward savings, flexibility, and convenience.
            </p>
          </q-card-section>
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->


    <!-- <q-table
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="category"
      hide-bottom
    >
      <template v-slot:body-cell-category="props">
        <q-td :props="props" class="col-2">
          <strong class="text-primary">{{ props.row.category }}</strong>
        </q-td>
      </template>
    </q-table> -->


      <div class="text-center">
        <h5 class="text-h5 "><span class="text-weight-bold">Exclusive</span>Offerings</h5>
      </div>
      <div class="news-section row items-center bg-light">
        <!-- Left Side: Text Content -->
        <div class="col-12  col-md-6 q-px-xl">
          <div class="content q-pa-xl">
            <h5 class="text-h5 "><span class="text-weight-bold">EFS UMA Crossroads </span>Fuel Card</h5>
            <p class="text-weight-bold">A Card Exclusively Designed for UMA Fleets</p>
            <p>The Crossroads fuel card offers significant fuel savings and nationwide acceptance.
                Enjoy an average discount of $0.35 to $0.45 per gallon at AMBEST Truck Stops.
                No monthly account fees.
                Convenience of purchasing gas or diesel anywhere EFS is accepted.
                A flat $1.50 transaction fee applies per purchase, making it a cost-effective solution for fleet fueling.
            </p>
          </div>
        </div>
        <!-- Right Side: Image -->
        <div class="col-12 col-md-6 text-center">
          <q-img
            src="/images/crossroads-card.png"
            class="rounded-borders"
            fit="cover"
            width="70%"
          />
        </div>
      </div>
      <div class="text-center">
        <q-btn label="SEE ALL BENEFITS" rounded unelevated color="primary" class="q-mt-md text-bold" to="/about-ambest" />
      </div>
    </q-page-container>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        { name: "category", label: "", align: "left", field: "category" },
        { name: "businesses", label: "Businesses Managing Multiple Vehicles", align: "left", field: "businesses" },
        { name: "individuals", label: "Individual Drivers & Small Fleets", align: "left", field: "individuals" }
      ],
      rows: [
        { category: "Best For", businesses: "Businesses managing multiple vehicles", individuals: "Individual drivers and small fleets" },
        { category: "Discounts", businesses: "Aggressive discounts at AMBEST locations", individuals: "Competitive discounts at AMBEST locations & affiliates" },
        { category: "Fuel Controls", businesses: "Customizable spending limits and controls", individuals: "Simple, hassle-free purchasing" },
        { category: "Accepted At", businesses: "Nationwide fuel and maintenance locations", individuals: "AMBEST locations only" },
        { category: "Reporting", businesses: "Detailed Reports for tracking expenses", individuals: "Detailed Reports for tracking expenses" }
      ]
    };
  }
};
</script>

<style scoped>
.my-card {
  padding: 20px;
  border-radius: 10px;
}

/* .card-image {
  height: 100px;
  object-fit: contain;
} */

.btn-primary {
  background-color: #007bff;
  color: white;
  width: 100%;
  margin-top: 10px;
}

.btn-secondary {
  background-color: #0056b3;
  color: white;
  width: 100%;
  margin-top: 10px;
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
.news-section {
  max-width: 80%;
  margin: auto;
  /* margin-left:10%; */
}

.q-btn{
  min-width: 220px;
}

.text-desc{
  font-size: 1.2rem;
}
.text-desc_1_1{
  font-size: 1.1rem;
}

.info-section{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 50px 15%;
    background-color: white;

}

.overlapping-card {
 max-width: 300px;
 position: relative;
 z-index: 14;
 transition: transform 0.3s ease-in-out;
 transform: rotate(-10deg);
}

.second-card {
  transform: rotate(10deg);
  top: 67px;
  left: -106px;
  z-index: 29;
}




/* ✅ Responsive Behavior */
@media (max-width: 1280px) { /* Large screens */
  .custom-col {
    flex: 0 0 16.67%; /* Same as col-lg-2 */
    max-width: 16.67%;
  }
  .second-card {
    transform: rotate(10deg);
    top: -122px;
    left: 127px;
    z-index: 29;
   }
}

@media (max-width: 1024px) { /* Medium screens */
  .custom-col {
    flex: 0 0 25%; /* Same as col-md-3 */
    max-width: 25%;
  }
}

@media (max-width: 768px) { /* Small screens */
  .custom-col {
    flex: 0 0 50%; /* Same as col-sm-6 */
    max-width: 50%;
  }

  .overlapping-card {
    max-width: 300px;
    position: relative;
    z-index: 14;
    transition: transform 0.3s ease-in-out;
    transform: rotate(-10deg);
   }

   .second-card {
    transform: rotate(10deg);
    top: -78px;
    left: 106px;
    z-index: 29;
   }

   .text-desc[data-v-9cbf88a2] {
      font-size: 1rem;
    }
}

@media (max-width: 480px) { /* Extra small screens */
  .custom-col {
    flex: 0 0 100%; /* Full width */
    max-width: 100%;
  }
}

</style>
