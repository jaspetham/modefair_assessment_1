
<template>
  <div class="main-content py-8">
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
      <!-- select screen size -->
      <div class="size-selection flex justify-center items-center fs-400">
        <div class="size-selector">
          <button
            class="size-select left"
            :class="{ 'selected': selectedSize === 1 }"
            @click="selectSize(1)"
          >14-Inch</button>
        </div>
        <div class="size-selector">
          <button
            class="size-select right"
            :class="{ 'selected': selectedSize === 2 }"
            @click="selectSize(2)"
          >16-Inch</button>
        </div>
      </div>
      <!-- filter chip -->
      <div class="filter-chip-wrapper">
        <p class="fs-200 font-light text-center">Filter by chip:</p>
        <div class="chips-selection flex gap-4 py-3">
          <button
            v-for="(chip, index) in getFilteredChips()"
            :key="index"
            class="chip-select"
            :class="(index === 0 ? 'selected' : '')"
            :id="chip.value"
            @click="selectChip(chip.value)"
          >{{chip.title}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { ref, onMounted } from 'vue'

const selectedSize = ref(1)
const selectedChip = ref('')
const chipsAvailability = ref([])
// select a size
const selectSize = (size) => {
  selectedSize.value = size
  resetSelectedChip()
  const filteredChips = chipsAvailability.value.filter((item) => item.id === selectedSize.value)
  if (filteredChips.length > 0) {
    selectedChip.value = filteredChips[0].chips_availability[0].value
    document.querySelectorAll('.chip-select').forEach((item, index) => {
      if (index === 0) {
        item.classList.add('selected')
      }
    })
  }
}

const resetSelectedChip = () => {
  const previouslySelected = document.querySelector('.chip-select.selected')
  if (previouslySelected) {
    previouslySelected.classList.remove('selected')
  }
}
const selectChip = (chipValue) => {
  selectedChip.value = chipValue
  resetSelectedChip()
  const selectedChipDiv = document.getElementById(chipValue)
  if (selectedChipDiv) {
    document.getElementById(chipValue).classList.add('selected')
  }
}

const getFilteredChips = () => {
  const filteredChips = chipsAvailability.value.filter((item) => item.id === selectedSize.value)
  return filteredChips.length > 0 ? filteredChips[0].chips_availability : []
}

const fetchChipsAvailability = async () => {
  const response = await fetch('/src/assets/json/chips.json')
  chipsAvailability.value = await response.json()
}

onMounted(() => {
  fetchChipsAvailability()
})
</script>
<style>
.size-selection {
  display: inline-grid;
  font-weight: 600;
  grid-auto-columns: 1fr;
  list-style: none;
  margin: 0;
  min-height: 83px;
}
.size-selector {
  display: flex;
  grid-row: 1;
  max-width: 274px;
  min-width: 141px;
  white-space: normal;
  height: 100%;
}
.size-select {
  align-items: center;
  background-color: #fffc;
  border: 1px solid #86868b;
  border-radius: 0;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 24px;
  padding: 20px 16px;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 0;
}
.size-select.left {
  border-end-start-radius: 12px;
  border-start-start-radius: 12px;
}
.size-select.right {
  border-end-end-radius: 12px;
  border-start-end-radius: 12px;
  border-left: 0;
}
.size-select.selected {
  border-color: #06c;
  border-width: 1px;
  box-shadow: inset 0 0 0 1px #06c;
  z-index: 2;
}
.chip-select {
  background-color: #e8e8ed;
  border: 0;
  border-radius: 24px;
  color: #1d1d1f;
  font-size: 14px;
  font-weight: 400;
  font-weight: 600;
  height: 36px;
  letter-spacing: -0.016em;
  line-height: 1.4285914286;
  padding: 0 20px;
  transition: all 0.5s ease-out;
}
.chip-select.selected,
.chip-select:hover {
  background-color: #1d1d1f;
  box-shadow: none;
  color: #fff;
}
</style>
