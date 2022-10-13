<template>
  <div class="flex flex-col sm:w-[58%] px-6 py-2 gap-6">
    <template v-for="recommendation in recommendations">
      <div class="flex-col flex" v-if="userId == recommendation.userId">
        <div class="flex border-solid border-black border w-full">
          <h4 class="bg-gray-200 px-4 py-2 border-solid border-black border-r">DOCTER NAME</h4>
          <p class="flex items-center px-3 break-words">{{ recommendation.docterName }}</p>
        </div>
        <div class="border-solid border-black border-b border-l border-r px-4 py-2 break-words">
          {{ recommendation.recommendation }}
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    recommendations: [],
    userId: Number,
  },
  created() {
    console.log(this.userId);
  },
};
</script>
