<template>
  <form @submit.prevent class="flex flex-col border-solid border-black border px-8 py-8 items-center">
    <h1 class="text-4xl font-bold text-green-600 md:text-5xl">SIGN UP</h1>
    <div class="flex gap-4">
      <input
        type="text"
        class="border-solid border-black border-b outline-none px-2 py-1 text-lg mt-4 mb-4 md:text-xl md:mt-6 md:mb-4"
        placeholder="Email"
      />
      <input
        type="text"
        class="border-solid border-black border-b outline-none px-2 py-1 text-lg mt-4 mb-4 md:text-xl"
        placeholder="Phone number"
      />
    </div>
    <div class="flex gap-4">
      <input
        type="text"
        class="border-solid border-black border-b outline-none px-2 py-1 text-lg mt-4 mb-4 md:text-xl"
        placeholder="First Name"
      />
      <input
        type="text"
        class="border-solid border-black border-b outline-none px-2 py-1 text-lg mt-4 mb-4 md:text-xl"
        placeholder="Last Name"
      />
    </div>
    <div class="flex gap-4 justify-center items-center">
      <span class="text-lg">Date of Birth <b>:</b></span>
      <input
        type="date"
        class="border-solid border-black border-b outline-none px-2 py-1 text-lg mt-2 mb-2 md:text-xl"
      />
    </div>
    <div class="flex gap-4 items-center justify-center">
      <input
        type="text"
        class="border-solid border-black border-b outline-none px-2 py-1 text-lg mt-4 mb-4 md:text-xl"
        placeholder="Hometown"
      />
      <input
        type="password"
        class="border-solid border-black border-b outline-none px-2 py-1 text-lg mt-4 mb-4 md:text-xl"
        placeholder="Password"
      />
    </div>
    <button class="text-lg font-bold bg-green-600 text-white px-4 py-2 mt-4 mb-4 md:text-2xl md:px-8 md:py-4">
      SIGN UP
    </button>
  </form>
</template>
