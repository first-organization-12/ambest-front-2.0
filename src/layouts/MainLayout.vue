<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-white text-dark row items-center" style="height: 69px;" height-hint="98">
      <q-toolbar class="q-px-md">

      <q-item to="/">
        <q-avatar square class="q-mr-md q-mx-auto responsive-logo" >
          <q-img :src="logo" fit="contain" />
          <!-- <q-img src="/images/ambest-logo.png" fit="contain" /> -->
        </q-avatar>
      </q-item>

       <div class="q-mx-lg"></div>

        <!-- NAVIGATION - Hide on Mobile -->
        <div class="row items-center hidden-lg custom-hide-nav  q-mt-sm">
          <q-btn flat label="ABOUT" class="text-dark" to="/about-ambest" />
          <q-btn flat label="TRAVEL CENTERS" class="text-dark" to="/travel-centers" />
          <q-btn flat label="SERVICE CENTERS" class="text-dark" to="/service-centers" />
          <q-btn flat label="FUEL CARDS" class="text-dark" to="/fuel-cards"/>
          <q-btn flat label="AMBUCK$" class="text-dark" to="/ambuck$"/>
        </div>

        <q-space />

        <!-- ICONS -->
         <a target="_blank" style="color: #000;" href="https://ambest.powerappsportals.com/home/">
           <q-btn flat round dense icon="person_outline" class="q-mr-md"/>
        </a>
        <!-- <q-btn flat round dense icon="local_gas_station" to="/fuel-price"/> -->

        <!-- MENU BUTTON - Show Only on Mobile -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          class=" custom-hide-menu hidden-xl-and-up"

          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="right" overlay>
      <q-list>
        <q-item to="/">
          <q-avatar square class="q-mr-md q-mx-auto responsive-logo" >
            <q-img :src="logo" fit="contain" />
          </q-avatar>
        </q-item>
        <q-item clickable v-ripple to="/about-ambest" exact-active-class="bg-cyan-2" >
          <q-item-section>ABOUT</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/travel-centers" exact-active-class="bg-cyan-2" >
          <q-item-section >TRAVEL CENTERS</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/service-centers" exact-active-class="bg-cyan-2" >
          <q-item-section>SERVICE CENTERS</q-item-section>
        </q-item>
        <q-item clickable v-ripple  to="/fuel-cards" exact-active-class="bg-cyan-2" >
          <q-item-section>FUEL CARDS</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/ambuck$" exact-active-class="bg-cyan-2" >
          <q-item-section>AMBUCK$</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="q-pb-md" style="padding-bottom: 100px;">
      <router-view />
    </q-page-container>


    <!-- Footer Section -->
    <!-- <q-footer class="footer q-pa-xl bg-grey-2 text-dark"> -->
    <q-footer class="footer q-pa-xl bg-[#f5f9fc] text-dark">
  <div class="footer-content">

    <!-- Logo and Navigation -->
    <div class="footer-top q-mb-sm">
      <q-img :src="logo" class="footer-logo" />
      <div class="footer-nav row wrap justify-center">
        <q-btn flat label="ABOUT" class="footer-link" to="/about-ambest"/>
        <q-btn flat label="TRAVEL CENTERS" class="footer-link" to="/travel-centers"/>
        <q-btn flat label="SERVICE CENTERS" class="footer-link" to="/service-centers"/>
        <q-btn flat label="FUEL CARDS" class="footer-link" to="/fuel-cards"/>
        <q-btn flat label="AMBUCK$" class="footer-link" to="/ambuck$"/>
        <q-btn flat label="CONTACT" class="footer-link" to="/contacts"/>
      </div>
    </div>

    <!-- Social Media Icons -->
    <div class="footer-social row justify-center q-mt-lg q-gutter-sm q-gutter-md-md">
      <a :href="facebookLink" target="_blank" style="color: #000;">
        <q-icon name="mdi-facebook" size="28px" class="q-mx-sm q-mx-md-md" />
      </a>
      <a :href="instagramLink" target="_blank" style="color: #000;">
        <q-icon name="mdi-instagram" size="28px" class="q-mx-sm q-mx-md-md" />
      </a>
      <a :href="xLink" target="_blank" style="color: #000;">
        <q-icon name="mdi-twitter" size="28px" class="q-mx-sm q-mx-md-md" />
      </a>
      <a :href="LinkedInLink" target="_blank" style="color: #000;">
        <q-icon name="mdi-linkedin" size="28px" class="q-mx-sm q-mx-md-md" />
      </a>
      <a :href="`tel:+${contactNo}`" style="color: #000;">
        <q-icon name="mdi-phone" size="28px" class="q-mx-sm q-mx-md-md" />
      </a>
    </div>

    <!-- Three-Column Layout for Mailing List, Office, and Contact -->
    <div class="footer-row row wrap justify-between q-mt-xl">

      <!-- Mailing List -->
      <div class="footer-mailing col-xs-12 col-sm-4 q-mb-lg">
        <span class="footer-heading">Never Miss a Perk — <b>Join Our Mailing List!</b></span>
        <div class="mailing-form row q-mt-md">
          <q-input dense outlined placeholder="Email Address" class="email-input col" />
          <q-btn label="Sign Up" color="black" class="sign-up-btn q-ml-md q-px-md q-py-sm" />
        </div>
      </div>

      <!-- Office Details -->
      <div class="footer-info col-xs-12 col-sm-4 text-center q-mb-lg">
        <b class="footer-heading">{{ officeName }}</b><br />
        {{ address }}
        <!-- 101 Winners Circle North, Suite 200 <br />
        Brentwood, TN 37027 -->
      </div>

      <!-- Contact Information -->
      <div class="footer-info col-xs-12 col-sm-4 text-center q-mb-lg">
        <b class="footer-heading">GET IN TOUCH</b><br />
        <!-- (615) 371-5187 -->
         {{ contactNo }}
        <br />
        <a :href="`mailto:${email}`" class="email-link" style="color: #000; text-decoration: underline;">{{ email }}</a>
        <!-- <a href="mailto:info@am-best.com" class="email-link" style="color: #000; text-decoration: underline;">info@am-best.com</a> -->
      </div>

    </div>

  </div>

  <!-- Copyright -->
  <div class="footer-wrapper">
    <div class="footer-bottom">
      <span>Copyright 2025, AMBEST</span>
      <span>Created by <a href="https://www.sociallink.com/" target="_blank">Social Link</a></span>
    </div>
  </div>
</q-footer>


  </q-layout>
</template>

<script>
console.log(window.innerWidth)

import { api,storage_url } from 'src/boot/axios'
import { ref,onMounted } from 'vue'

export default {
  setup() {
    const leftDrawerOpen = ref(false)
    const logo = ref('');
    const facebookLink = ref('');
    const instagramLink = ref('');
    const xLink = ref('');
    const LinkedInLink = ref('');
    const officeName = ref('');
    const email = ref('');
    const address = ref('');
    const contactNo = ref('');
    const getSiteDetails = ()=>{
      api.get('get-front-site-details')
      .then((response)=>{
        let val = response.data.data;
        logo.value = storage_url(val.logo);
        facebookLink.value = val.facebook_link;
        instagramLink.value = val.instagram_link;
        LinkedInLink.value = val.store_link;
        xLink.value = val.tweeter_link;
        officeName.value = val.office_name;
        email.value = val.email;
        address.value = val.address;
        contactNo.value = val.contact_no;
      })
      .catch((error)=>{
        console.log(error);

      })
    }
    onMounted(()=>{
      getSiteDetails();
    })
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      logo,
      facebookLink,
      instagramLink,
      LinkedInLink,
      xLink,
      officeName,
      email,
      address,
      contactNo,
    }
  }
}
</script>

<style scoped>
/* General Footer Styles */
.footer {
  position:relative;
  background-color: #f2f6fa;
  text-align: center;
  padding: 50px 20px;
  font-size: 16px;
  width: 100%;
}

.footer-content {
  max-width: 1200px;
  margin: auto;
}

/* Logo and Navigation */
.footer-top {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-logo {
  max-width: 200px;
  width: 100%;
  margin-bottom: 20px;
}

.footer-nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-link {
  color: #000;

  font-size: 16px;
  padding: 10px 15px;
}

/* Social Media */
.footer-social {
  margin-top: 20px;
}

.footer-social .q-icon {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.footer-social .q-icon:hover {
  transform: scale(1.2);
}

/* Responsive Row Layout */
.footer-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
}

/* Larger Headings */
.footer-heading {
  font-size: 18px;
  font-weight: bold;
}

/* Mailing List */
.footer-mailing {
  text-align: left;
}

.mailing-form {
  display: flex;
  flex-wrap: wrap;
}

.email-input {
  width: 100%;
  max-width: 280px;
  height: 45px;
  font-size: 16px;
}

.sign-up-btn {
  background-color: black;
  color: white;
  font-size: 16px;
  height: 45px;
  border-radius: 5px;
}

/* Office & Contact Info */
.footer-info {
  font-size: 16px;
  line-height: 1.5;
}

/* Email Link */
.email-link {
  color: #007bff;
  text-decoration: none;
  font-size: 16px;
}

/* Copyright Section */
.footer-wrapper {
  width: 100%;
}

.footer-bottom {
  width: 100%;
  border-top: 1px solid #000;
  padding: 20px 30px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f3f6fa;
}

/* Responsive Fix for Smaller Screens */
@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    padding: 15px 0;
  }
  .footer-bottom span {
    margin-bottom: 5px;
  }
  .footer-link {
    font-size: 14px;
    padding: 8px 12px;
  }

  .footer-nav {
    display: flex;
    justify-content: center;
    gap:0px;
    flex-wrap: wrap;
}
.footer-mailing{
  text-align: center;
}

}
</style>
