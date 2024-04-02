<template>
    <div>
      <div class="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div class="w-full">
          <div class="text-center">
            <div class="bg-red" v-if="message">{{ message }}</div>
            <h1 class="text-3xl font-semibold text-gray-900">Log in</h1>
            <p class="mt-2 text-gray-500">Sign in below to access your account</p>
          </div>
          <div class="mt-5">
            <form @submit.prevent="login">
              <div class="relative mt-6">
                <input v-model="user.email" type="email" name="email" id="email" placeholder="Email Address" class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="off" />
              </div>
              <div class="relative mt-6">
                <input v-model="user.password" type="password" name="password" id="password" placeholder="Password" class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
              </div>
              <div class="my-6">
                <button type="submit" class="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Log in</button>
              </div>
              <p class="text-center text-sm text-gray-500">Don't have an account yet?
                <a href="#!" class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign up</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <!-- <script>
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  
  export default {
    setup() {
      const router = useRouter();
  
      const user = {email: "", password: ""};
      let message = '';
  
      const login = () => {
        axios.post('/api/login', user)
          .then(res => {
            if (res.data.token) {
              message = res.data.message;
              localStorage.setItem('token', JSON.stringify(res.data.token));
              router.push('/');
            } else {
              message = res.data.message;
            }
          })
          .catch((e) => console.log(e.message));
      };
  
      return {user,message,login};
    }
  }
  </script> -->
<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: { email: "", password: "" },
      message: ''
    };
  },
  methods: {
    login() {
      axios.post('/api/login', this.user)
        .then(res => {
          if (res.data.token) {
            this.message = res.data.message;
            localStorage.setItem('token', JSON.stringify(res.data.token));
            this.$router.push('/');
          } else {
            this.message = res.data.message;
          }
        })
        .catch((e) => console.log(e.message));
    }
  }
}
</script>

  