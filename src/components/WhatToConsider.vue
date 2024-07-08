<template>
  <div class="content-limit bg-grey py-12 flex flex-col gap-4 rounded-lg">
    <h1 class="fs-600 font-medium text-center">What to consider when choosing your MacBook Pro.</h1>
    <p class="text-center fs-300">Configure your laptop on the next step.</p>
    <div class="chips-detail py-4 px-6">
      <div
        class="chip-detail flex flex-col gap-1 fs-200"
        v-for="(chip,index) in chipsData"
        :key="index"
      >
        <img
          :width="index === 2 ? 48 : 36"
          height="36"
          :src="chip.imgSrc"
          :alt="chip.title"
        >

        <p class="font-medium mt-4">{{ chip.title }}</p>
        <p>{{ chip.description }}</p>
        <ul>
          <li
            v-for="(list, index) in chip.lists"
            :key="index"
          >{{ list }}</li>
        </ul>
      </div>
    </div>

    <div class="fs-100 flex gap-2 items-center justify-center flex-wrap">
      <span>Have questions about buying a Mac? </span>
      <a
        href="https://www.apple.com/my/shop/buy-mac/macbook-pro/16-inch#"
        target="_blank"
      >Chat with a Mac Specialist.</a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const chipsData = ref([])
const fetchInitialData = async () => {
  const data = await fetch('/json/chip-details.json')
  chipsData.value = await data.json()
}
onMounted(() => {
  fetchInitialData()
})
</script>

<style scoped>
.chips-detail {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 18px;
  unicode-bidi: isolate;
}

ul > li {
  padding-top: 0.5rem;
}

@media screen and (max-width: 820px) {
  .chips-detail {
    grid-template-columns: 1fr;
  }
}
</style>