<template>
  <tr class="max-h-fit">
    <td class="border-solid border-green-500 border-4 px-4 py-1 text-center">{{ dose }}</td>
    <td class="border-solid border-green-500 border-4 px-4 py-1 text-center">
      <div>{{ vaccineDate }}</div>
    </td>
    <td class="border-solid border-green-500 border-4 px-4 py-1 text-center">{{ vaccineId }}</td>
    <td class="border-solid border-green-500 border-4 px-4 py-1 text-center">{{ vaccineName }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    dose: Number,
    vaccineDate: String,
    vaccineId: Number,
    vaccineName: String,
  },
};
</script>
