<template>
  <div class="flex sm:w-[25%]">
    <div class="flex-col flex gap-3">
      <h4 class="text-2xl font-bold">Write a Recommendation</h4>
      <input
        v-model="docterName"
        type="text"
        placeholder="Docter name..."
        class="px-2 py-1 text-lg border border-black border-solid"
      />
      <textarea
        v-model="recommendation"
        cols="30"
        rows="10"
        class="px-2 py-1 text-lg border border-black border-solid"
        placeholder="Write here..."
      ></textarea>
      <button class="bg-pink-500 text-white py-2 font-bold text-lg" @click="handleSubmit">SUBMIT</button>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    userId: Number,
  },
  data() {
    return {
      docterName: "",
      recommendation: "",
    };
  },
  methods: {
    handleSubmit() {
      if (!this.docterName) return alert("Please fill in docter name");
      if (!this.recommendation) return alert("Please fill in recommendation");
      let recommendations = JSON.parse(localStorage.getItem("recommendations"));
      let newRecommendations = [
        ...recommendations,
        {
          id: recommendations.length,
          userId: this.userId,
          docterName: this.docterName,
          recommendation: this.recommendation,
        },
      ];
      localStorage.setItem("recommendations", JSON.stringify(newRecommendations));
      this.$emit("add", newRecommendations);
    },
  },
};
</script>
