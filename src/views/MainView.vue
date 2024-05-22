
<template>
  <div
    id="scrollContainer"
    class="main-content py-8"
  >
    <div class="flex flex-col justify-center items-center py-4 gap-8">
      <h1 class="fs-900 font-medium text-center">Choose your new Macbook Pro.</h1>
      <!-- chat with specialist -->
      <div class="supports-content fs-500 flex justify-center items-center flex-col gap-1">
        <FontAwesomeIcon
          class="font-light pb-3 fs-700"
          :icon="faComments"
        />
        <h2 class="tracking-tight">Have questions about buying a Mac?</h2>
        <a
          href="#"
          target="_blank"
        >Chat with a Mac Specialist</a>
      </div>

      <!-- main character macbook -->
      <MacbookSelection :isFixed="isFixed" />

      <!-- what to consider -->
      <WhatToConsider />

      <!-- compare model -->
      <CompareModel />

      <!-- apple care -->
      <AppleCare />
    </div>
  </div>
</template>

<script setup>
import AppleCare from './../components/AppleCare.vue'
import CompareModel from './../components/CompareModel.vue'
import WhatToConsider from './../components/WhatToConsider.vue'
import MacbookSelection from './../components/MacbookSelection.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faComments } from '@fortawesome/free-regular-svg-icons'
</script>