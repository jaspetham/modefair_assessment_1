<template>
  <div class="selection-action flex flex-col items-center justify-center gap-8">
    <!-- select screen size -->
    <div class="size-selection flex justify-center items-center fs-400">
      <div class="size-selector">
        <button
          class="size-select left"
          :class="{ 'selected': selectedSize === '14-inch' }"
          @click="selectSize('14-inch')"
        >14-Inch</button>
      </div>
      <div class="size-selector">
        <button
          class="size-select right"
          :class="{ 'selected': selectedSize === '16-inch' }"
          @click="selectSize('16-inch')"
        >16-Inch</button>
      </div>
    </div>
    <div class="content-limit flex flex-col items-center gap-4">
      <!-- filter chip -->
      <div class="filter-chip-wrapper">
        <p class="fs-200 font-light text-center">Filter by chip:</p>
        <div class="chips-selection flex gap-4 py-3">
          <button
            v-for="(chip, index) in getFilteredChips()"
            :key="index"
            class="chip-select fs-100"
            :class="(index === 0 ? 'selected' : '')"
            :id="chip.value"
            @click="selectChip(chip.value)"
          >{{chip.title}}</button>
        </div>
      </div>
      <!-- macbooks -->
      <div class="macbooks-content">
        <div
          class="macbook flex flex-col gap-3 items-center"
          v-for="(macbook) in macbookFilteredState"
          :key="macbook.id"
        >
          <img
            width="452"
            height="420"
            class="macbook-img"
            :id="`macbook-${macbook.id}`"
            :src="getMacbookImageSrc(macbook.id)"
            :alt="selectedColors[macbook.id]"
          >
          <div class="colors-selection">
            <p class="fs-100 font-light">{{ selectedColors[macbook.id] }}</p>
            <div class="colors flex gap-3 items-center py-3">
              <label
                v-for="(color, colorIndex) in macbook.color"
                :key="colorIndex"
              >
                <input
                  type="radio"
                  :name="`macbook-${macbook.id}-color`"
                  :value="color"
                  :checked="selectedColors[macbook.id] === color"
                  @change="updateColor(macbook.id, color)"
                >
                <img
                  width="32"
                  height="32"
                  :alt="color"
                  :src="getMacbookColorsSrc(color)"
                >
              </label>
            </div>
          </div>
          <img
            width="51"
            height="51"
            class="chip-img"
            :src="getMacbookChipImageSrc(macbook.chip_type)"
            :alt="macbook.chip_type"
          >
          <div class="title-content py-3">
            <h2
              v-for="(title,index) in macbook.title"
              :key="index"
              class="fs-600 font-medium"
            >{{ title }}</h2>
            <div class="subtitle-content pt-5 pb-3">
              <p
                v-for="(subtitle,index) in macbook.subtitle"
                :key="index"
                class="fs-200 font-light mb-1"
              >{{ subtitle }}</p>
            </div>
            <h2 class="fs-600 font-medium leading-relaxed">{{ macbook.price }}</h2>
            <p class="fs-200 py-3">or</p>
            <h2 class="fs-600 font-medium leading-relaxed">{{ macbook.installment }}/mo. for <br> 24 mo.*</h2>
            <a
              href="https://www.apple.com/my/shop/financing/installments/overlay?ca=7499.00&product=MTL73ZP/A"
              target="_blank"
              class="fs-300 flex gap-1 items-center py-2"
            >
              <span>Explore monthly instalment options</span>
              <FontAwesomeIcon
                class="fs-100"
                :icon="faAngleRight"
              />
              <FontAwesomeIcon
                class="fs-300"
                :icon="faSquarePlus"
              />
            </a>
            <div class="trade-in-content fs-200 py-3">
              <p class="font-medium">Add a trade-in</p>
              <p class="font-light">Get credit towards a new Mac when you trade in your eligible computer. Or recycle it for free.<sup>**</sup></p>
              <a
                href=""
                target="_blank"
                class="flex items-center gap-2 pt-1"
              >
                <span>Get Started</span>
                <FontAwesomeIcon
                  class="fs-300"
                  :icon="faSquarePlus"
                />
              </a>
            </div>
            <div class="select-content py-3">
              <RouterLink
                to="/product"
                class="select-btn fs-200 font-medium"
              >Select</RouterLink>
            </div>
            <div class="save-content fs-200 py-3">
              <p class="font-medium">Need a moment?</p>
              <p class="font-light">Keep all your selections by saving this device to Your Saves, then come back anytime and pick up right where you left off.</p>
              <a
                href="https://www.apple.com/my/shop/buy-mac/macbook-pro/14-inch"
                target="_blank"
                class="flex items-center gap-2 py-1"
              >
                <FontAwesomeIcon :icon="faBookmark" />
                <span>Save for later</span>
              </a>
            </div>
            <div class="delivery-content flex gap-3 pt-4 pb-2">
              <svg class="as-svgicon-rtl-mirrored as-svgicon as-svgicon-boxtruck as-svgicon-reduced as-svgicon-boxtruckreduced" viewBox="0 0 25 25" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path fill="#1d1d1f" d="m23.482 12.847-2.92-3.209A1.947 1.947 0 0 0 18.985 9H17V6.495a2.5 2.5 0 0 0-2.5-2.5h-11a2.5 2.5 0 0 0-2.5 2.5v9.75a2.5 2.5 0 0 0 2.5 2.5h.548A2.746 2.746 0 0 0 6.75 21.02 2.618 2.618 0 0 0 9.422 19h6.681a2.744 2.744 0 0 0 5.347-.23h.735A1.656 1.656 0 0 0 24 16.98v-2.808a1.937 1.937 0 0 0-.518-1.325ZM8.426 18.745a1.74 1.74 0 0 1-3.352 0 1.577 1.577 0 0 1 .015-1 1.738 1.738 0 0 1 3.322 0 1.578 1.578 0 0 1 .015 1ZM9.447 18a2.726 2.726 0 0 0-5.394-.255H3.5a1.502 1.502 0 0 1-1.5-1.5v-9.75a1.502 1.502 0 0 1 1.5-1.5h11a1.502 1.502 0 0 1 1.5 1.5V18Zm10.972.77a1.738 1.738 0 0 1-3.337 0 1.573 1.573 0 0 1 0-1 1.742 1.742 0 1 1 3.337 1ZM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0 0 17 16.165V10h1.986a.976.976 0 0 1 .838.314l2.927 3.214a.95.95 0 0 1 .249.644Zm-1.324-3.36a.512.512 0 0 1 .174.38h-3.306a.499.499 0 0 1-.544-.528V11h1.073a.76.76 0 0 1 .594.268Z"></path></svg>
              <div class="delivery-details fs-200">
                <p>Delivery:</p>
                <p class="font-light">In Stock</p>
                <p class="font-light">Free Shipping</p>
                <a
                  href="https://www.apple.com/my/shop/buy-mac/macbook-pro/14-inch"
                  target="_blank"
                  class="flex items-center gap-2 py-1"
                >
                  <span>Get delivery dates</span>
                  <FontAwesomeIcon :icon="faSquarePlus" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- what is in the box -->
  <div class="content-limit box-content py-8">
    <h1 class="fs-800 font-medium text-center">What’s in the Box</h1>
    <div class="perfect-img flex py-4 items-center fs-200 self-stretch">
      <div class="text-center h-full">
        <img
          width="568"
          height="392"
          :src="getBoxImgSrc(selectedSize.value)"
          alt="macbook"
        >
        <span class="box-text block w-full">
          <span v-if="selectedSize === '14-inch'">14-inch Macbook Pro</span>
          <span v-else>16-inch Macbook Pro</span>
        </span>
      </div>
      <div
        class="text-center h-full flex flex-col items-center"
        style="width:171px;"
      >
        <div class="img-wrapper flex justify-center w-full">
          <img
            width="45"
            height="392"
            :src="getBoxCableSrc()"
            alt="cable"
          >
        </div>
        <span class="box-text block w-full">
          <span>USB-C to MagSafe 3 Cable (2m)</span>
        </span>
      </div>
      <div class="text-center h-full">
        <img
          width="242"
          height="392"
          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-witb-70w-adapter-202310_GEO_MY?wid=484&hei=784&fmt=p-jpg&qlt=95&.v=1698689824641"
          alt="power adapter"
        >
        <span class="box-text block w-full">
          <span v-if="selectedSize === '14-inch'"> USB-C Power Adapter</span>
          <span v-else>140W USB-C Power Adapter</span>
        </span>
      </div>
    </div>

    <div class="py-6">
      <swiper
        :slides-per-view="1"
        :modules="modules"
        :space-between="50"
        :pagination="{
            clickable:true
          }"
        class="custom-swiper"
      >
        <swiper-slide>
          <div class="text-center h-full">
            <div class="img-wrapper">
              <img
                :src="getBoxImgSrc()"
                alt="macbook"
              >
            </div>
            <span class="box-text block w-full">
              <span v-if="selectedSize === '14-inch'">14-inch Macbook Pro</span>
              <span v-else>16-inch Macbook Pro</span>
            </span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="text-center h-full">
            <div class="img-wrapper">
              <img
                :src="getBoxCableSrc()"
                alt="cable"
              >
            </div>
            <span class="box-text block w-full bg-white">USB-C to MagSafe 3 Cable (2m)</span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="text-center h-full">
            <div class="img-wrapper">
              <img
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-witb-70w-adapter-202310_GEO_MY?wid=484&hei=784&fmt=p-jpg&qlt=95&.v=1698689824641"
                alt="power adapter"
              >
            </div>
            <span class="box-text block w-full">
              <span v-if="selectedSize === '14-inch'"> USB-C Power Adapter</span>
              <span v-else>140W USB-C Power Adapter</span>
            </span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { ref, onMounted } from 'vue'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const selectedSize = ref('14-inch')
const selectedChip = ref('14_all')
const chipsAvailabilityState = ref([])
const macbookState = ref([])
const macbookFilteredState = ref([])
const selectedColors = ref({})
const modules = ref([Pagination])
// select a size
const selectSize = (size) => {
  selectedSize.value = size
  resetSelectedChip()
  const filteredChips = chipsAvailabilityState.value.filter(
    (item) => item.category === selectedSize.value
  )
  if (filteredChips.length > 0) {
    selectedChip.value = filteredChips[0].chips_availability[0].value
    getFilteredMacbooks(filteredChips[0].chips_availability[0].value)
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
const updateColor = (id, color) => {
  selectedColors.value[id] = color
}

const getMacbookImageSrc = (id) => {
  const color = selectedColors.value[id]
  if (color === 'Space Grey') {
    return 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200'
  } else if (color === 'Silver') {
    return 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-silver-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830269'
  } else if (color === 'Space Black') {
    return 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-m3-max-pro-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830118'
  }
  return ''
}
const getMacbookColorsSrc = (color) => {
  if (color === 'Space Grey') {
    return 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1697913361217'
  } else if (color === 'Silver') {
    return 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-silver-cto-hero-202310_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1697913361277'
  } else if (color === 'Space Black') {
    return 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-m3-max-pro-spaceblack-cto-hero-202310_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1697913361051'
  }
  return ''
}

const getMacbookChipImageSrc = (chipType) => {
  if (chipType === 'm3') {
    return 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-m3-icon-202310?wid=102&hei=102&fmt=png-alpha&.v=1697039562647'
  } else if (chipType === 'm3pro') {
    return 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-m3-pro-icon-202310?wid=102&hei=102&fmt=png-alpha&.v=1697039562659'
  } else if (chipType === 'm3max') {
    return 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-m3-max-icon-202310?wid=102&hei=102&fmt=png-alpha&.v=1697039562691'
  }
  return ''
}

const getBoxImgSrc = () => {
  if (selectedSize.value === '14-inch') {
    return 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-witb-silver-202310?wid=1136&hei=784&fmt=p-jpg&qlt=95&.v=1698689812419'
  } else {
    return 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-witb-spaceblack-202310?wid=1216&hei=784&fmt=p-jpg&qlt=95&.v=1698689790358'
  }
}
const getBoxCableSrc = () => {
  if (selectedSize.value === '14-inch') {
    return 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-witb-usb-c-magsafe-cable-silver-202310?wid=90&hei=784&fmt=p-jpg&qlt=95&.v=1698689792158'
  } else {
    return 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-witb-usb-c-magsafe-cable-spaceblack-202310?wid=90&hei=784&fmt=p-jpg&qlt=95&.v=1698689793932'
  }
}
const selectChip = (chipValue) => {
  selectedChip.value = chipValue
  //   reset selected chip state
  resetSelectedChip()
  const selectedChipDiv = document.getElementById(chipValue)
  if (selectedChipDiv) {
    document.getElementById(chipValue).classList.add('selected')
  }

  //   get selected chip
  getFilteredMacbooks(chipValue)
}

const getFilteredChips = () => {
  const filteredChips = chipsAvailabilityState.value.filter(
    (item) => item.category === selectedSize.value
  )
  return filteredChips.length > 0 ? filteredChips[0].chips_availability : []
}
const getFilteredMacbooks = (chip) => {
  let filteredMacbooks = []
  switch (chip) {
    case '14_all':
      filteredMacbooks = macbookState.value.filter((item) => item.category === selectedSize.value)
      break
    case '16_all':
      filteredMacbooks = macbookState.value.filter((item) => item.category === selectedSize.value)
      break
    default:
      filteredMacbooks = macbookState.value.filter(
        (item) => item.category === selectedSize.value && item.chip === selectedChip.value
      )
      break
  }
  filteredMacbooks.forEach((macbook) => {
    selectedColors.value[macbook.id] = macbook.color[0]
  })
  macbookFilteredState.value = filteredMacbooks
}

const fetchInitialData = async () => {
  const chipsData = await fetch('/src/assets/json/chips.json')
  chipsAvailabilityState.value = await chipsData.json()
  const macbooksData = await fetch('/src/assets/json/macbooks.json')
  macbookState.value = await macbooksData.json()
  //   fetch then get the filtered macbooks
  getFilteredMacbooks('14_all')
}

onMounted(() => {
  fetchInitialData()
})
</script>

<style scoped>
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
  padding: 0 1rem;
  transition: all 0.5s ease-out;
}
.chip-select.selected,
.chip-select:hover {
  background-color: #1d1d1f;
  box-shadow: none;
  color: #fff;
}
.macbooks-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.macbook {
  background-color: #f5f5f7;
  border-radius: 18px;
  box-sizing: border-box;
  height: 100%;
  padding: 0 16px 20px;
}

.select-btn {
  display: block;
  text-align: center;
  background: var(--clr-button);
  border-color: transparent;
  color: white !important;
  text-decoration: none;
  width: 100%;
  border-radius: 9px;
  padding: 9px;
}
.box-text {
  height: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 1rem 0;
}

.custom-swiper {
  display: none;
}

.target-element {
  width: 100%;
  transition: position 0.3s ease;
}

.target-element.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.img-wrapper {
  background: var(--clr-grey);
}
@media screen and (max-width: 820px) {
  .macbooks-content {
    grid-template-columns: 1fr;
  }
  .perfect-img {
    display: none;
  }

  .custom-swiper {
    display: block;
    height: 450px;
  }
  .custom-swiper img {
    width: 100%;
    height: 372px;
    object-fit: contain;
  }
}
</style>