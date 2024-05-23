<template>
  <main id="product" class="outer-wrapper h-screen flex overflow-y-auto">
    <div class="product-wrapper p-8 gap-12 content-limit">
        <!-- left side -->
        <div class="relative">
            <div class="sticky top-0">
                <div class="flex flex-col items-center gap-6">
                    <img
                        class="fluid"
                        src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-m3-max-pro-spaceblack-cto-hero-202310_FMT_WHH?wid=484&hei=298&fmt=jpeg&qlt=90&.v=1697314999766"
                        alt="macbook">
                    <div class="flex gap-1 items-center fs-200 clr-link">
                        <button class="hover:underline">View Gallery</button>
                        <FontAwesomeIcon :icon="faSquarePlus"/>
                    </div>
                    <div class="flex w-4/5 max-auto justify-between py-4">
                        <div class="flex flex-col gap-2 justify-center items-center">
                            <div class="icon-holder">
                                <svg viewBox="0 0 35 35" class="as-svgicon as-svgicon-shipping as-svgicon-base as-svgicon-shippingbase" role="img" aria-hidden="true" width="35px" height="35px">
                                    <path fill="none" d="M0 0h35v35H0z"></path>
                                    <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748v9.471a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-4.538 2.446l9.651 5.566-4.4 2.5-9.823-5.58c.038-.026.07-.059.111-.081zM7.788 23.539A1.5 1.5 0 017 22.219v-9.471a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z">
                                    </path>
                                </svg>
                            </div>
                            <p class="fs-100 font-medium">Free Delivery</p>
                        </div>
                        <div class="flex flex-col gap-2 justify-center items-center">
                            <div class="icon-holder">
                                <svg viewBox="0 0 35 35" class="as-svgicon as-svgicon-return as-svgicon-base as-svgicon-returnbase" role="img" aria-hidden="true" width="35px" height="35px">
                                    <path fill="none" d="M0 0h35v35H0z"></path>
                                    <path d="M12.249 9.022l-4.461 2.4c-.041.022-.073.055-.111.081l9.823 5.588 4.4-2.5zM27.322 11.507c-.038-.025-.069-.058-.11-.081l-9-4.852a1.5 1.5 0 00-1.424 0l-3.5 1.889 9.628 5.55zM10.8 18.5a.5.5 0 01-.5.5H7v3.219a1.5 1.5 0 00.788 1.32l9 4.852a1.494 1.494 0 00.212.082V17.957l-9.931-5.645a1.494 1.494 0 00-.069.436V18h3.3a.5.5 0 01.5.5zM18 17.957v10.515a1.481 1.481 0 00.212-.082l9-4.851a1.5 1.5 0 00.788-1.32v-9.471a1.5 1.5 0 00-.069-.436z" fill="none"></path>
                                    <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748V17h1v-4.252a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082l-9-4.852A1.5 1.5 0 017 22.219V20H6v2.219a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-9.11 4.932c.038-.026.07-.059.111-.081l4.461-2.4 9.651 5.561-4.4 2.5zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z">
                                    </path>
                                    <path d="M2.507 18l1.646-1.646a.5.5 0 00-.707-.707l-2.5 2.5a.5.5 0 000 .707l2.5 2.5a.5.5 0 10.707-.707L2.507 19H6v-1zM10.3 19a.5.5 0 000-1H7v1zM6 18h1v1H6z">
                                    </path>
                                </svg>
                            </div>
                            <p class="fs-100 font-medium">Free and easy returns</p>
                        </div>
                    </div>
                    <div class="flex flex-col items-center gap-2 fs-200 items-center">
                        <h2 class="tracking-tight">Have questions about buying a Mac?</h2>
                        <a
                        href="#"
                        target="_blank"
                        >Chat with a Mac Specialist</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- right side -->
        <div class="product-details-wrapper">
            <div class="product-detail flex flex-col gap-2 pt-4 pb-8 bb-1">
                <h1 class="fs-800 font-medium">{{ macbookData.title }}</h1>
                <p class="fs-200" v-for="(subtitle,index) in macbookData.subtitle" :key="index">
                    {{ subtitle }}
                </p>
            </div>
            <!-- add a trade in -->
            <div class="trade-in-wrapper fs-200 py-4 bb-1">
                <h2 class="font-medium">Add a trade-in</h2>
                <p class="pt-3">Get credit towards a new Mac when you trade in your eligible computer. Or recycle it for free.<sup>**</sup></p>
                <a class="flex pt-3 items-center gap-2" href="#" target="_blank">Get Started <FontAwesomeIcon :icon="faSquarePlus"/></a>
            </div>
            <!-- chip processor -->
            <div class="chip-wrapper py-4">
                <p class="fs-300 font-medium">Chip (Processor)</p>
                <a href="#" target="_blank" class="fs-200 flex items-center gap-2">
                    Which chip is right for you?
                    <FontAwesomeIcon :icon="faSquarePlus"/>
                </a>
                <div class="flex flex-col gap-4 py-4">
                    <div
                     @click="selectCore(chip)"
                    v-for="(chip,index) in macbookData.chip_selection"
                    :key="index"
                    :id="chip.core"
                    :class="(index === 0 ? 'selected' : '')"
                    class="card-selection core-selection fs-300">
                        <span class="card-title font-semibold">{{ chip.title }}</span>
                        <span class="card-price font-light">{{ chip.priceText }}</span>
                    </div>
                </div>
                <div class="px-4 fs-300 font-light">
                    <p>Select M3 Max with 30-core GPU to add 96GB of memory.</p>
                    <p>Select M3 Max with 40-core GPU to add 48GB, 64GB, or 128GB.</p>
                </div>
            </div>

            <!-- <h1>{{ macbookTotalPrice }} - {{ macbookTotalInstallment }}</h1> -->
        </div>
    </div>
    <div class="img-wrapper relative fs-700">
        <div class="img-detail flex flex-col gap-4">
            <div class="img-text">
                <img
                    width="50"
                    height="20"
                    src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-tv-plus-logo-standard-202404?wid=100&hei=40&fmt=png-alpha&.v=1711378620426" alt="">
                <h4 class="font-bold">Get 3 months of Apple TV+ free when you buy a Mac.<sup>***</sup></h4>
                <div class="flex gap-2 items-center fs-300 gap-6">
                    <a href="http://tv.apple.com/?itscg=10000&itsct=tvwebmac_buytile_tifwebavl200729" target="_blank">
                        <span class="pr-3">Try it Free <sup>^</sup></span>
                        <FontAwesomeIcon :icon="faAngleRight"/>
                    </a>
                    <a href="http://tv.apple.com/?itscg=10000&itsct=tvwebmac_buytile_tifwebavl200729" target="_blank">
                        <span class="pr-3">Learn more</span>
                        <FontAwesomeIcon :icon="faAngleRight"/>
                    </a>
                </div>
            </div>
        </div>
      <img
        class="fluid"
        src="@/assets/product_ads.png"
        alt="ads"
      >
    </div>
  </main>
</template>

<script setup>
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref, onMounted } from 'vue';

const macbookData = ref({})
const selectedCore = ref('30-core')
const macbookTotalPrice = ref(0);
const macbookTotalInstallment = ref(0);

// select a core
const selectCore = (chip) => {
    const { core } = chip;
    selectedCore.value = core
    // reset selected core class
    document.querySelectorAll('.core-selection').forEach((coreDiv) =>{
        coreDiv.classList.remove('selected');
    })
    const selectedCoreDiv = document.getElementById(core);
    selectedCoreDiv.classList.add('selected');
    // get the second child which is the price
    selectedCoreDiv.childNodes[1].innerHTML = "";
    if(core === "40-core"){
        document.getElementById("30-core").childNodes[1].innerHTML = "- RM 1,200.00";
        calculatePriceInstallment(1200)
    }else{
        document.getElementById("40-core").childNodes[1].innerHTML = "+ RM 1,200.00";
       calculatePriceInstallment(-1200);
    }
}

const calculatePriceInstallment = (price) =>{
    macbookTotalPrice.value += price;
    macbookTotalInstallment.value = (macbookTotalPrice.value/24).toFixed(2);
}


const fetchInitialData = async () => {
  const data = await fetch('/src/assets/json/macbook.json')
  macbookData.value = await data.json()
  macbookTotalPrice.value = macbookData.value.price
  macbookTotalInstallment.value = macbookData.value.installment
}

onMounted(() => {
  fetchInitialData()
})
</script>

<style>
#product .img-wrapper {
  margin: auto;
  position: relative;
  overflow: hidden;
  display:grid;
  flex-wrap:wrap;
  grid-template-columns: minmax(200px,40%) 1fr;
}
.img-detail{
    z-index: 1;
    color: #fff;
    height:100%;
    width:100%;
    padding:20px;
    background: black;
}
.img-text{
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap:1rem;
    height: 100%;
    max-width:20ch;
}
.outer-wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scrollbar-width: none;
}
.outer-wrapper::-webkit-scrollbar {
  display: none;
}

.product-wrapper {
    padding: 32px;
    display:grid;
    grid-template-columns: minmax(200px, 40%) 1fr;
}
.product-details-wrapper{
    width:100%;
}

.card-selection{
    display:flex;
    align-items: center;
    justify-content: space-between;
    border:1px solid #8f8f94;
    border-radius: 12px;
    box-sizing: border-box;
    cursor: pointer;
    height: auto;
    letter-spacing: -.022em;
    line-height: 1.2353641176;
    min-height: 4.8823529412rem;
    padding: 15px;
    width: 100%;
}
.card-selection > .card-title{
    max-width: 50%;
}
.card-selection.selected{
    border-color: #0071e3;
    border-width:2px;
}
@media (max-width: 820px) {
    #product .img-wrapper{
        grid-template-columns: 1fr;
    }
    .img-text{
        max-width: 80%;
        margin:auto;
        text-align: center;
        align-items: center;
    }
    #product.content-limit{
        width:100%;
    }
}
</style>
