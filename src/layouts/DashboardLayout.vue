<template>
  <q-layout view="hHh lpR fFf">
    <!-- Top Bar -->
    <q-header elevated class="bg-cyan-5">
      <q-toolbar>
        <!-- Logo on the left -->
        <q-btn flat dense round icon="menu" @click="toggleLeftDrawer" class="q-mr-sm" />
        <q-img src="/images/ambest-logo.png" alt="Logo" style="width: 120px; height: auto" />

        <q-space />
        
        <q-btn color="primary" clickable v-close-popup @click="handleLogOut">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>Logout</q-item-section>
        </q-btn>

        <!-- Profile icon with dropdown menu -->
        <!-- <q-btn flat round dense icon="account_circle">
          <q-menu transition-show="jump-down" transition-hide="jump-up">
            <q-list style="min-width: 150px">
              <q-item clickable v-close-popup @click="navigateTo('settings')">
                <q-item-section avatar>
                  <q-icon name="settings" />
                </q-item-section>
                <q-item-section>Settings</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="handleLogOut">
                <q-item-section avatar>
                  <q-icon name="logout" />
                </q-item-section>
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn> -->
      </q-toolbar>
    </q-header>

    <!-- Left Sidebar -->
    <q-drawer v-model="leftDrawerOpen" show-if-above side="left" elevated>
      <q-list class="q-my-lg">

        <q-item
          clickable
          v-ripple
          to="/dashboard"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="dashboard"  />
          </q-item-section>
          <q-item-section>Dashboard</q-item-section>
        </q-item>

        <q-item
         clickable
          v-ripple
          to="/dashboard/contact-info"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="contact_mail" />
          </q-item-section>
          <q-item-section>Contact</q-item-section>
        </q-item>

        <q-item
         clickable
          v-ripple
          to="/dashboard/service/messages"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="build" />
          </q-item-section>
          <q-item-section>Service Messages</q-item-section>
        </q-item>

        <q-item
         clickable
          v-ripple
          to="/dashboard/fuel-card/application"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="local_gas_station" />
          </q-item-section>
          <q-item-section>Fuel Card Applications</q-item-section>
        </q-item>

        <q-item
         clickable
          v-ripple
          to="/dashboard/membership/application"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="groups" />
          </q-item-section>
          <q-item-section>Membership Applications</q-item-section>
        </q-item>

        <q-item
         clickable
          v-ripple
          to="/dashboard/fuel-card/inquery"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="mail" />
          </q-item-section>
          <q-item-section>Fuel Card Inquery</q-item-section>
        </q-item>

        <q-item
         clickable
          v-ripple
          to="/dashboard/about/contacts"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>About section contact</q-item-section>
        </q-item>

        <q-item
         clickable
          v-ripple
          to="/dashboard/map-and-locations"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="map"/>
          </q-item-section>
          <q-item-section>Map and Locations</q-item-section>
        </q-item>

        <q-item>
          <q-item-section><h6 style="margin: 0%;color: #1976D2; font-weight: 700;">Content Management</h6></q-item-section>
        </q-item>


        <q-item
         clickable
          v-ripple
          to="/dashboard/site-content-management"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="map"/>
          </q-item-section>
          <q-item-section>Site</q-item-section>
        </q-item>

        <q-item
         clickable
          v-ripple
          to="/dashboard/home-page-content-management"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="map"/>
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item
         clickable
          v-ripple
          to="/dashboard/about-content-management"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="map"/>
          </q-item-section>
          <q-item-section>About</q-item-section>
        </q-item>

        <q-item
         clickable
          v-ripple
          to="/dashboard/travel-center-content-management"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="map"/>
          </q-item-section>
          <q-item-section>Teavel Center</q-item-section>
        </q-item>

        <q-item
         clickable
          v-ripple
          to="/dashboard/service-center-content-management"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="map"/>
          </q-item-section>
          <q-item-section>Service Center</q-item-section>
        </q-item>

        <q-item
         clickable
          v-ripple
          to="/dashboard/fuel-card-content-management"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="map"/>
          </q-item-section>
          <q-item-section>Fuel Card</q-item-section>
        </q-item>

        <q-item
         clickable
          v-ripple
          to="/dashboard/fuel-card-details-content-management"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="map"/>
          </q-item-section>
          <q-item-section>Fuel Card Details</q-item-section>
        </q-item>

        <q-item
         clickable
          v-ripple
          to="/dashboard/ambuck$-content-management"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="map"/>
          </q-item-section>
          <q-item-section>AMBUCK$</q-item-section>
        </q-item>

        <q-item
         clickable
          v-ripple
          to="/dashboard/contacts-content-management"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="map"/>
          </q-item-section>
          <q-item-section>Contacts & Faq</q-item-section>
        </q-item>

        <q-item
         clickable
          v-ripple
          to="/dashboard/membership-content-management"
          exact-active-class="bg-cyan-2"
          >
          <q-item-section avatar>
            <q-icon name="map"/>
          </q-item-section>
          <q-item-section>Membership</q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <!-- Main Content Area -->
    <q-page-container>
      <q-page class="q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { api } from 'src/boot/axios';
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
export default{
  setup() {
    const q = useQuasar();
    const router = useRouter();
    const leftDrawerOpen= ref(false);

    const toggleLeftDrawer=()=>{
      leftDrawerOpen.value = !leftDrawerOpen.value;
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

    const handleLogOut = () =>{
      api.post('logout')
      .then(()=>{
        localStorage.removeItem('accessToken');
        localStorage.removeItem('accessTokenExpiry');
        showSuccessNotification('Logout Successfully !');
        router.push("/");
      })
      .catch((error)=>{
        console.log(error.message);
        this.showErrorNotification(error.data.message);
      })
      //localStorage.removeItem('accessToken');
      // router.push("/");
    }

    return { showSuccessNotification, showErrorNotification, handleLogOut,toggleLeftDrawer, leftDrawerOpen}
  }
}
</script>

<style>
/* Customize styling */
</style>
