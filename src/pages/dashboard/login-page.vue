<template>
  <div class="flex flex-center" style="height: 100vh;">
    <q-card class="q-pa-lg shadow-2 login-card">
      <!-- Logo -->
      <div class="text-center">
        <q-img src="/images/ambest-logo.png" width="150px" class="q-mb-md" />
      </div>
      <!-- Error Message -->
      <q-banner v-if="errorMessage" class="bg-red-2 text-negative q-my-lg">
        {{ errorMessage }}
      </q-banner>

      <q-form @submit="login" class="q-gutter-md" ref="loginForm">
        <!-- Email -->
        <q-input
          v-model="email"
          label="Email"
          type="email"
          outlined
          dense
          :rules="[val => !!val || 'Email is required', val => /.+@.+\..+/.test(val) || 'Invalid email']"
        />

        <!-- Password -->
        <q-input
          v-model="password"
          label="Password"
          type="password"
          outlined
          dense
          :rules="[val => !!val || 'Password is required', val => val.length >= 8 || 'At least 8 characters']"
        />

        <!-- Submit Button -->
         <div class="">
           <q-btn
           label="Login"
           type="submit"
           color="primary"
           class="full-width"
           :loading="loading"
           />
        </div>
      </q-form>

      <!-- Register Link -->
      <!-- <div class="text-center q-mt-md">
        <q-btn flat label="Create an account" to="/register" color="primary" />
      </div> -->
    </q-card>
  </div>
</template>

<script>
import { ref, onMounted} from "vue";
import { useRouter } from "vue-router";
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";
export default {
  setup() {
    const q = useQuasar();
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    const errorMessage = ref("");
    const router = useRouter();
    const loginForm = ref(null);
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

    const isLogin=()=>{
      if (localStorage.getItem('accessToken')) {
        router.push('/dashboard');
      }
    }

    const login = () => {
      loading.value = true;
      errorMessage.value = "";
        api.post(`auth/login`,{
        'email':email.value,
        'password':password.value,
      })
        .then((response)=>{
          // console.log(response.data);
          console.log(response.data.message);
          const now = new Date();
          const expiresAt = new Date(now.getTime() + response.data.data.expires_in * 1000);

          localStorage.setItem('accessToken',response.data.data.access_token);
          localStorage.setItem('expiresAt', expiresAt.toISOString())
          router.push("/dashboard");
          showSuccessNotification(response.data.message)
        })
        .catch((error)=>{
          console.log(error.response.data.message);
          showErrorNotification(error.response.data.message);
          errorMessage.value = "Invalid email or password";
          email.value = '';
          password.value ='';
          loginForm.value?.reset();
        })
        loading.value = false;
    };
    onMounted(isLogin);
    return {isLogin, email, password, login, loading, errorMessage,q, showSuccessNotification, showErrorNotification,loginForm };
  }
};
</script>

<style scoped>
.login-card {
  width: 350px;
  max-width: 90%;
  border-radius: 10px;
}
</style>

