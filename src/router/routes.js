const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  {
    path: '/travel-centers',
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
    path: '/service-centers/freedom-warranty',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/freedom-warranty.vue') }
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
    path: '/ambuck$',
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
    path: '/fuel-cards/fuel-card-form/application',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/fuel-card-form.vue') }
    ]
  },

  {
    path: '/fuel-cards/membership/application',
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
    path: '/all-locations',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/all-locations.vue') }
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

  {
    path: '/dashboard/map-and-locations',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/map-and-locations.vue')}
    ]
  },

  {
    path: '/dashboard/site-content-management',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/cms/site-info.vue')}
    ]
  },

  {
    path: '/dashboard/home-page-content-management',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/cms/home-page.vue')}
    ]
  },

  {
    path: '/dashboard/about-content-management',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/cms/about-page.vue')}
    ]
  },

  {
    path: '/dashboard/travel-center-content-management',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/cms/travel-center.vue')}
    ]
  },

  {
    path: '/dashboard/service-center-content-management',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/cms/service-center.vue')}
    ]
  },

  {
    path: '/dashboard/fuel-card-content-management',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/cms/fuel-card.vue')}
    ]
  },

  {
    path: '/dashboard/fuel-card-details-content-management',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/cms/fuel-card-details.vue')}
    ]
  },

  {
    path: '/dashboard/ambuck$-content-management',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/cms/ambuck$-page.vue')}
    ]
  },

  {
    path: '/dashboard/contacts-content-management',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/cms/contacts-page.vue')}
    ]
  },

  {
    path: '/dashboard/membership-content-management',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/cms/membership-page.vue')}
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
