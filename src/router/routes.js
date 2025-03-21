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




  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
