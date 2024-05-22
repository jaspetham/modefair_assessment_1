

<template>
  <div class="bg-grey py-12 flex flex-col gap-4 w-full text-center items-center">
    <h1 class="fs-800 font-medium">Compare Mac models</h1>
    <a
      href="https://www.apple.com/my/mac/compare/"
      target="_blank"
    >
      <span class="pr-2">Choose the best Mac for you</span>
      <FontAwesomeIcon
        class="fs-200 diagonal"
        :icon="faArrowRight"
      />
    </a>

    <div class="img-wrapper py-6">
      <img
        src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-compare-202310?wid=960&hei=355&fmt=png-alpha&.v=1696970981940"
        alt="choose model"
      >
    </div>
  </div>
</template>

<script setup>
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style scoped>
.diagonal {
  transform: rotate(670deg);
}
</style>