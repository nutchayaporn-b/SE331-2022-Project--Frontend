<template>
  <div class="flex flex-col md:w-[60%]">
    <div class="flex flex-col sm:flex-row gap-4">
      <UserCard :name="user.name" :age="user.age" :img="user.image" :hometown="user.location"
        :dose="user.vaccineList.length" />
      <table class="">
        <tr class="text-black">
          <th class="border-solid border-green-500 border-4 px-4 py-1">Dose (#)</th>
          <th class="border-solid border-green-500 border-4 px-4 py-1">Date Of Vaccination</th>
          <th class="border-solid border-green-500 border-4 px-4 py-1">Vaccine ID</th>
          <th class="border-solid border-green-500 border-4 px-4 py-1">Name of Vaccination</th>
        </tr>
        <VaccineTableBodyInfo v-for="vaccine in user.vaccineList" :dose="user.vaccineList.indexOf(vaccine) + 1"
          :vaccineDate="vaccine.timestamp" :vaccineId="vaccine.id" :vaccineName="vaccine.type" />
      </table>
    </div>
    <div class="h-100 flex flex-col sm:flex-row mt-4 w-full">
      <!-- <RecommendationForm :userId="user.id" @add="addRecommendation" /> -->
      <RecommendationList :recommendations="user.commentList" />
    </div>
  </div>
</template>
<script>
import UserCard from "../components/UserCard.vue";
import VaccineTableBodyInfo from "../components/VaccineTableBodyInfo.vue";
import RecommendationForm from "../components/RecommendationForm.vue";
import RecommendationList from "../components/RecommendationList.vue";
import axiosHelper from "../services/axiosHelper";
export default {
  components: {
    UserCard,
    VaccineTableBodyInfo,
    RecommendationForm,
    RecommendationList,
  },
  data() {
    return {
      users: [],
    };
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    },
    user() {
      return this.users.find((u) => u.id == this.userId);
    },
  },
  async created() {
    const result = await axiosHelper.get("/event").then((res) => res.data);
    this.users = result;
    console.log(result);
  },
};
</script>
