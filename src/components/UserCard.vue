<template>
  <div class="flex flex-col w-60 h-80 border-black border-solid border cursor-pointer hover:bg-pink-100">
    <img
      :src="'/images/' + (img ? img : 'placeholder') + '.jpg'"
      alt="Profile Picture"
      class="w-full h-[60%] object-contain border-black border-solid border-b"
    />
    <div class="flex flex-col px-4 py-4 text-sm">
      <div>Name: {{ name }} {{ surname }}</div>
      <div>Age: {{ age }}</div>
      <div>Born: {{ hometown }}</div>
      <div>Has been vaccinated: {{ dose }} dose</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    name: String,
    surname: String,
    age: Number,
    hometown: String,
    dose: Number,
  },
  data() {
    return {};
  },
};
</script>
