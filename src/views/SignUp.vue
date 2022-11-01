<template>
  <form @submit.prevent="addUser" class="flex flex-col border-solid border-black border px-8 py-8 items-center">
    <h1 class="text-4xl font-bold text-green-600 md:text-5xl">SIGN UP</h1>
    <div class="flex gap-4">
      <input
        type="text"
        class="border-solid border-black border-b outline-none px-2 py-1 text-lg mt-4 mb-4 md:text-xl md:mt-6 md:mb-4"
        placeholder="Email"
        v-model="email"
      />
      <input
        type="text"
        class="border-solid border-black border-b outline-none px-2 py-1 text-lg mt-4 mb-4 md:text-xl"
        placeholder="Phone number"
        v-model="phone"
      />
    </div>
    <div class="flex gap-4">
      <input
        type="text"
        class="border-solid border-black border-b outline-none px-2 py-1 text-lg mt-4 mb-4 md:text-xl"
        placeholder="First Name"
        v-model="firstName"
      />
      <input
        type="text"
        class="border-solid border-black border-b outline-none px-2 py-1 text-lg mt-4 mb-4 md:text-xl"
        placeholder="Last Name"
        v-model="lastName"
      />
    </div>
    <div class="flex gap-4 items-center justify-center">
      <input
        type="text"
        class="border-solid border-black border-b outline-none px-2 py-1 text-lg mt-4 mb-4 md:text-xl"
        placeholder="Hometown"
        v-model="homeTown"
      />
      <input
        type="password"
        class="border-solid border-black border-b outline-none px-2 py-1 text-lg mt-4 mb-4 md:text-xl"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <button class="text-lg font-bold bg-green-600 text-white px-4 py-2 mt-4 mb-4 md:text-2xl md:px-8 md:py-4">
      SIGN UP
    </button>
  </form>
</template>

<script>
import router from "../router";
import axiosHelper from "../services/axiosHelper";
export default {
  data() {
    return {
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
      homeTown: "",
      password: "",
    };
  },
  methods: {
    addUser() {
      if (!this.email || !this.phone || !this.firstName || !this.lastName || !this.homeTown || !this.password)
        return alert("fill in all fields");
      try {
        axiosHelper.post("/register", {
          username: this.firstName + " " + this.lastName,
          email: this.email,
          phone: this.phone,
          firstname: this.firstName,
          lastname: this.lastName,
          location: this.homeTown,
          password: this.password,
        });
      } finally {
        alert("Success");
        router.go("/sign-in");
      }
    },
  },
};
</script>
