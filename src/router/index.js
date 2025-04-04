import { defineRouter } from '#q-app/wrappers'
import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

function isAuthenticated() {
  return localStorage.getItem('accessToken') !== null; // Example check
}

export default defineRouter(function (/* { store, ssrContext } */) {
  // Force history mode here by using createWebHistory instead of checking env var
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : createWebHistory  // Changed to always use history mode

  const Router = createRouter({
    scrollBehavior(to) {
      if (to.hash) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              el: to.hash,
              behavior: 'smooth'
            });
          }, 300); // delay scroll to give the page time to render
        });
      }

      return { left: 0, top: 0 };
    },
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  Router.beforeEach((to, from, next) => {
    if (to.path.startsWith('/dashboard') && !isAuthenticated()) {
      next('/login'); // Redirect to login if not authenticated
    } else {
      next(); // Allow access
    }
  });

  return Router
})