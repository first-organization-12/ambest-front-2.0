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
        />
      </div>
      <div class="text-center">
        <h5><span style="">Our<strong> Leadership</strong></span></h5>
      </div>

      <div class="row justify-center q-col-gutter-md" style="display: flex;gap: 10px;">
        <div v-for="member in team.slice(0,3)" :key="member.name" class="col-lg-2">
          <div class="text-center">
            <q-img :src="member.image" class="profile-image" style="height: 215px; width: 215px;" />
            <div class="">
              <div class="name"><strong>{{ member.name }}</strong></div>
              <div class="position">{{ member.position }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-center q-col-gutter-md q-mt-xl" style="display: flex;gap: 10px;">
        <div v-for="member in team.slice(3,7)" :key="member.name" class="col-lg-2">
          <div class="text-center">
            <q-img :src="member.image" class="profile-image" style="height: 215px; width: 215px;" />
            <div class="">
              <div class="name"><strong>{{ member.name }}</strong></div>
              <div class="position">{{ member.position }}</div>
            </div>
          </div>
        </div>
      </div>
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

        <div class="form-container" style="margin-top: 8rem;">
        <h5 class="" style="margin: 25px 0 !important;">Have questions? <strong>Fill out the form and our team will get back to you within 24 hours.</strong></h5>

        <form action="#" method="POST">
            <div class="form-group row" style="display: flex;gap: 10px;">
                <div class="form-field">
                    <label>First Name *</label>
                    <input type="text" required>
                </div>
                <div class="form-field">
                    <label>Last Name *</label>
                    <input type="text" required>
                </div>
            </div>

            <div class="form-group">
                <label>Phone *</label>
                <input type="tel" required>
            </div>

            <div class="form-group">
                <label>Email *</label>
                <input type="email" required>
            </div>

            <div class="form-group">
                <label>Which Services are You Looking For? *</label>
                <select required>
                    <option value="" disabled selected>Select One</option>
                    <option value="service1">Service 1</option>
                    <option value="service2">Service 2</option>
                    <option value="service3">Service 3</option>
                </select>
            </div>

            <div class="form-group">
                <label>Message *</label>
                <textarea required></textarea>
            </div>

            <div class="form-group">
                <q-img src="/images/captcha.png" height="50%" width="50%"/>
            </div>
            <q-btn label="SUBMIT" rounded unelevated color="primary" class="q-mt-md q-px-xl text-bold" style="max-width: 298px;" to="/about-ambest" />
        </form>
    </div>

    <div class="faq-container" style="width: 70%; margin: auto;">
      <h5 class="text-h5"><span class="text-weight-bold">Answers to Your Frequently Asked Questions...</span></h5>
      <q-list class="faq-list">
        <q-expansion-item
          v-for="(item, index) in faqs"
          :key="index"
          expand-separator
          dense
          header-class="faq-item"
        >
          <template v-slot:header>
            <q-item-section class="text-desc" style="margin-bottom: .5rem;"><strong>{{ item.question }}</strong></q-item-section>
            <q-item-section side>
              <q-icon color="primary" name="add"  />
            </q-item-section>
          </template>
          <q-card>
            <q-card-section>
              <p class="text-desc">{{ item.answer }}</p>
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
<script setup>
import { ref } from "vue";
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

</script>

<style>
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
/* box-shadow: 0px 4px 8px 3px #00000026; */

}
/* .row {
    display: flex;
    gap: 10px;
} */

.form-field {
    flex: 1;
}

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
</style>
