<template>
  <form @submit.prevent class="flex flex-col border-solid border-black border px-8 py-8 items-center">
    <h1 class="text-4xl font-bold text-green-600 md:text-5xl">SIGN IN</h1>
    <input
      type="text"
      class="border-solid border-black border-b outline-none px-2 py-1 text-lg mt-4 mb-4 md:text-xl md:mt-6 md:mb-4"
      placeholder="Email or Phone number"
    />
    <input
      type="password"
      class="border-solid border-black border-b outline-none px-2 py-1 text-lg mt-4 mb-4 md:text-xl md:mt-4 md:mb-6"
      placeholder="Password"
    />
    <button class="text-lg font-bold bg-green-600 text-white px-4 py-2 mt-4 mb-4 md:text-2xl md:px-8 md:py-4">
      SIGN IN
    </button>
  </form>
</template>
