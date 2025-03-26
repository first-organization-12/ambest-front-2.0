const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  {
    path: '/travel-centres',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/travel-centre.vue') }
    ]
  },

  {
    path: '/service-centers',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/service-center.vue') }
    ]
  },

  {
    path: '/fuel-cards',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/fuel-cards.vue') }
    ]
  },

  {
    path: '/ambucks',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ambucks-page.vue') }
    ]
  },

  {
    path: '/contacts',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/contacts-page.vue') }
    ]
  },

  {
    path: '/about-ambest',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/about-page.vue') }
    ]
  },

  {
    path: '/fuel-cards/details',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/fuel-cards-details.vue') }
    ]
  },

  {
    path: '/fuel-cards/fuel-card-form/aplication',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/fuel-card-form.vue') }
    ]
  },

  {
    path: '/fuel-cards/membership/aplication',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/membership-form.vue') }
    ]
  },

  {
    path: '/fuel-price',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/fuel-price.vue') }
    ]
  },

  {
    path: '/login',
    // component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/login-page.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/dashboard-page.vue') }
    ]
  },

  {
    path: '/dashboard/contact-info',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/contact-info.vue') }
    ]
  },

  {
    path: '/dashboard/service/messages',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/service-info.vue') }
    ]
  },

  {
    path: '/dashboard/fuel-card/application',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/fuel-card-appplication-info.vue') }
    ]
  },

  {
    path: '/dashboard/membership/application',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/membership-application.vue') }
    ]
  },

  {
    path: '/dashboard/fuel-card/inquery',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/fuel-card-inquery.vue') }
    ]
  },

  {
    path: '/dashboard/about/contacts',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/about-page-contact.vue')}
    ]
  },




  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
