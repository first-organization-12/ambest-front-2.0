import { boot } from "quasar/wrappers";
import axios from "axios";


// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: "http://127.0.0.1:8000/api/" });
// const api = axios.create({ baseURL: "http://localhost/api/" });

// Function to retrieve the authorization token (replace with your logic)
function getAuthorizationToken() {
  // Implement your logic to retrieve the token from local storage, cookies, or other mechanisms
  // For example, you could use localStorage.getItem('accessToken')
  // return store.getters.getToken;
  return '1|vWkartoHjg1mST8jNI6oLeSvAdrdsDXAXEFXZNDo78bc9aa1'; // Replace with actual token retrieval
}

export default boot(({ app, router }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;

  // Add request interceptor
  api.interceptors.request.use(
    (config) => {
      const token = getAuthorizationToken();
      console.log(token);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      // Handle request errors (optional)
      return Promise.reject(error);
    }
  );
  api.interceptors.response.use(
    (response) => response, // Return response if it's successful
    (error) => {
      console.log(error.response.status);
      if (error.response && error.response.status === 401) {
        console.log(error.response);
        // store.dispatch("user_logout"); // Dispatch logout action to clear the token
        router.push({ name: "login" }); // Redirect to login page
      }
      return Promise.reject(error);
    }
  );
});

export { api };
