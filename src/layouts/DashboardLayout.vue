<template>
  <q-layout view="hHh lpR fFf">
    <!-- Top Bar -->
    <q-header elevated class="bg-cyan-5">
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="toggleLeftDrawer" class="q-mr-sm" />
        <q-img src="/images/ambest-logo.png" alt="Ambest Logo" style="width: 120px; height: auto" />

        <q-space />

        <q-btn color="primary" @click="handleLogOut">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>Logout</q-item-section>
        </q-btn>
      </q-toolbar>
    </q-header>

    <!-- Sidebar -->
    <q-drawer v-model="leftDrawerOpen" show-if-above side="left" elevated>
      <q-list class="q-my-lg">
        <template v-for="(item, index) in rawItems" :key="index">
          <q-item v-if="!item.isDivider" clickable v-ripple :to="item.to" exact-active-class="bg-cyan-2">
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>
            <q-item-section>{{ item.label }}</q-item-section>
          </q-item>

          <q-item v-else>
            <q-item-section>
              <h6 class="text-primary text-weight-bold q-ma-none">{{ item.label }}</h6>
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>

    <!-- Main Content -->
    <q-page-container>
      <q-page class="q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { api } from 'src/boot/axios';

const $q = useQuasar();
const router = useRouter();
const leftDrawerOpen = ref(false);

const rawItems = [
  { label: 'Dashboard', icon: 'dashboard', to: '/dashboard' },
  { label: 'Contact', icon: 'contact_mail', to: '/dashboard/contact-info' },
  { label: 'Service Messages', icon: 'build', to: '/dashboard/service/messages' },
  { label: 'Fuel Card Applications', icon: 'local_gas_station', to: '/dashboard/fuel-card/application' },
  { label: 'Membership Applications', icon: 'groups', to: '/dashboard/membership/application' },
  { label: 'Fuel Card Inquery', icon: 'mail', to: '/dashboard/fuel-card/inquery' },
  { label: 'About section contact', icon: 'people', to: '/dashboard/about/contacts' },
  { label: 'Map and Locations', icon: 'map', to: '/dashboard/map-and-locations' },
  { isDivider: true, label: 'Content Management' },
  { label: 'Site', icon: 'map', to: '/dashboard/site-content-management' },
  { label: 'Home', icon: 'map', to: '/dashboard/home-page-content-management' },
  { label: 'About', icon: 'map', to: '/dashboard/about-content-management' },
  { label: 'Teavel Center', icon: 'map', to: '/dashboard/travel-center-content-management' },
  { label: 'Service Center', icon: 'map', to: '/dashboard/service-center-content-management' },
  { label: 'Fuel Card', icon: 'map', to: '/dashboard/fuel-card-content-management' },
  { label: 'Fuel Card Details', icon: 'map', to: '/dashboard/fuel-card-details-content-management' },
  { label: 'AMBUCK$', icon: 'map', to: '/dashboard/ambuck$-content-management' },
  { label: 'Contacts & Faq', icon: 'map', to: '/dashboard/contacts-content-management' },
  { label: 'Membership', icon: 'map', to: '/dashboard/membership-content-management' },
  { label: 'Dynamic Pages', icon: 'map', to: '/dashboard/dynamic-pages-content-management' },
];

// Split into groups
// const navigationItems = computed(() => rawItems.filter(i => !i.isDivider));
// const dividerItems = computed(() => rawItems.filter(i => i.isDivider));

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const notify = (message, type = 'positive') => {
  $q.notify({
    color: type === 'positive' ? 'positive' : 'negative',
    position: 'top',
    message,
    icon: type === 'positive' ? 'check_circle' : 'report_problem',
  });
};

const handleLogOut = () => {
  api.post('logout')
    .then(() => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('accessTokenExpiry');
      notify('Logout Successfully!');
      router.push('/');
    })
    .catch((error) => {
      console.error(error.message);
      notify(error?.response?.data?.message || 'Logout failed', 'negative');
    });
};
</script>

<style scoped>
/* Add custom styling here if needed */
</style>
