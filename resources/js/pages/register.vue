<template>
    <div>
      <div class="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div class="w-full">
          <div class="text-center">
            <div class="bg-red" v-if="message">{{ message }}</div>
            <h1 class="text-3xl font-semibold text-gray-900">Sign up</h1>
          </div>
          <div class="mt-5">
            <form @submit.prevent="register">
              <div class="relative mt-6">
                <input v-model="user.name" type="text" name="email" id="email" placeholder="Name" class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="off" />
              </div>
              <div class="relative mt-6">
                <input v-model="user.email" type="email" name="email" id="email" placeholder="Email Address" class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="off" />
              </div>
              <div class="relative mt-6">
                <input v-model="user.password" type="password" name="password" id="password" placeholder="Password" class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
              </div>
              <div class="my-6">
                <button type="submit" class="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign up</button>
              </div>
              <p class="text-center text-sm text-gray-500">Have an account?
                <router-link to="/login" class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">
                  Log in
                </router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: [],
            user: {name: "", email: "", password: "" },
        }
    },
    methods: {
        register() {
        axios.post('/api/register', this.user)
            .then(res => {
                // this.getUsers();
                this.user = {name: "", email: "", password: "" };
                this.$router.push('/login');
            })
            .catch(err => console.error(err));
        }
    }
}
</script>

  