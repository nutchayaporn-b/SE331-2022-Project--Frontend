<template>
  <div class="flex flex-col md:w-[60%]">
    <div class="flex flex-col sm:flex-row gap-4">
      <UserCard
        :name="user.name"
        :surname="user.surname"
        :age="user.age"
        :img="user.img"
        :hometown="user.hometown"
        :dose="user.vaccines.length"
      />
      <table class="">
        <tr class="text-black">
          <th class="border-solid border-pink-500 border-4 px-4 py-1">Dose (#)</th>
          <th class="border-solid border-pink-500 border-4 px-4 py-1">Date Of Vaccination</th>
          <th class="border-solid border-pink-500 border-4 px-4 py-1">Vaccine ID</th>
          <th class="border-solid border-pink-500 border-4 px-4 py-1">Name of Vaccination</th>
        </tr>
        <VaccineTableBodyInfo
          v-for="vaccine in user.vaccines"
          :dose="user.vaccines.indexOf(vaccine) + 1"
          :vaccineDate="vaccine.timestamp"
          :vaccineId="vaccine.id"
          :vaccineName="vaccine.name"
        />
      </table>
    </div>
    <div class="h-100 flex flex-col sm:flex-row mt-4 w-full">
      <RecommendationForm :userId="user.id" @add="addRecommendation" />
      <RecommendationList :recommendations="recommendations" :userId="user.id" />
    </div>
  </div>
</template>
<script>
import UserCard from "../components/UserCard.vue";
import users from "../mockups/users";
import VaccineTableBodyInfo from "../components/VaccineTableBodyInfo.vue";
import RecommendationForm from "../components/RecommendationForm.vue";
import RecommendationList from "../components/RecommendationList.vue";
export default {
  components: {
    UserCard,
    VaccineTableBodyInfo,
    RecommendationForm,
    RecommendationList,
  },
  created() {
    this.recommendations = JSON.parse(localStorage.getItem("recommendations"));
  },
  data() {
    return {
      recommendations: [],
    };
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    },
    user() {
      return users.find((u) => u.id == this.userId);
    },
  },
  methods: {
    addRecommendation(newRecommendations) {
      this.recommendations = newRecommendations;
    },
  },
};
</script>
