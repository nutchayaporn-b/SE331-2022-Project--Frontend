<template>
  <div class="flex flex-col">
    <div class="bg-white">
      <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span class="block">EU Digital Covid Certificate</span>
          <span class="block text-green-600">It's free register now!</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a
              href="/sign-up"
              class="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-5 py-3 text-base font-medium text-white hover:bg-green-700"
              >Get started</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="bg-green-50 py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <p class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            A better way to verify your vaccinations
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            This website provide alternative for those who wants to keep their vaccination certifcate online
          </p>
        </div>
        <div class="mt-10">
          <dl class="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            <div v-for="feature in features" :key="feature.name" class="relative">
              <dt>
                <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-green-500 text-white">
                  <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg font-medium leading-6 text-gray-900">{{ feature.name }}</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from "@heroicons/vue/24/outline";

const features = [
  {
    name: "Completely free",
    description: "0 charge, 100% free",
    icon: GlobeAltIcon,
  },
  {
    name: "Fast and accurate",
    description:
      "Take less than 1 second to load your information, accurately from our hospital that you have been vaccinated with",
    icon: ScaleIcon,
  },
  {
    name: "EU digital standard",
    description: "Could be used in any country, ensure by EU government",
    icon: BoltIcon,
  },
  {
    name: "Mobile support",
    description: "Responsive website design, can be used by any device",
    icon: ChatBubbleBottomCenterTextIcon,
  },
];
</script>
