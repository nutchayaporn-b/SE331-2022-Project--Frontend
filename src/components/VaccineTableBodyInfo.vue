<template>
  <tr class="max-h-fit">
    <td class="border-solid border-pink-500 border-4 px-4 py-1 text-center">{{ dose }}</td>
    <td class="border-solid border-pink-500 border-4 px-4 py-1 text-center">
      <div>{{ dateToString(vaccineDate) }}</div>
      <div>{{ vaccineDate.toTimeString() }}</div>
    </td>
    <td class="border-solid border-pink-500 border-4 px-4 py-1 text-center">{{ vaccineId }}</td>
    <td class="border-solid border-pink-500 border-4 px-4 py-1 text-center">{{ vaccineName }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    dose: Number,
    vaccineDate: Date,
    vaccineId: Number,
    vaccineName: String,
  },
  methods: {
    dateToString(date) {
      // returns date in string format dd month Year
      const months = [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
    },
  },
};
</script>
