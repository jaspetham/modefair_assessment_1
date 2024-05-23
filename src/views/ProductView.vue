<template>
  <main id="product" class="outer-wrapper h-screen flex overflow-y-auto">
    <Toast
        v-if="showToast"
        :showToast="showToast"
        :selectedItem="selectedMemory"
        @notifyParent="handleNotification"/>
    <div class="product-wrapper p-8 gap-12 content-limit">
        <!-- left side -->
        <div class="relative">
            <div class="sticky top-0">
                <div class="flex flex-col items-center gap-6">
                    <h1 class="mobile-view fs-600 font-medium">{{ macbookData.title }}</h1>
                    <img
                        class="fluid"
                        src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-m3-max-pro-spaceblack-cto-hero-202310_FMT_WHH?wid=484&hei=298&fmt=jpeg&qlt=90&.v=1697314999766"
                        alt="macbook">
                    <div class="flex gap-1 items-center fs-200 clr-link">
                        <button class="hover:underline">View Gallery</button>
                        <FontAwesomeIcon :icon="faSquarePlus"/>
                    </div>
                    <div class="desktop-view flex w-4/5 max-auto justify-between py-4">
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
                    <div class="desktop-view flex flex-col items-center gap-2 fs-200 items-center">
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
                <h1 class="desktop-view fs-800 font-medium">{{ macbookData.title }}</h1>
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
                    v-for="(chip,index) in macbookData.chips"
                    :key="index"
                    :id="chip.core"
                    :class="(index === 0 ? 'selected' : '')"
                    class="card-selection core-selection fs-300">
                        <span class="card-title font-semibold">{{ chip.title }}</span>
                        <span class="card-price font-light">{{ chip.priceText }}</span>
                    </div>
                </div>
                <div class="px-4 fs-300 fc-deepgrey">
                    <p>Select M3 Max with 30-core GPU to add 96GB of memory.</p>
                    <p>Select M3 Max with 40-core GPU to add 48GB, 64GB, or 128GB.</p>
                </div>
            </div>

            <!-- memory -->
            <div class="memory-wrapper py-4">
                <p class="fs-300 font-medium">Memory</p>
                <a href="#" target="_blank" class="fs-200 flex items-center gap-2">
                    How much memory is right for you?
                    <FontAwesomeIcon :icon="faSquarePlus"/>
                </a>
                <div class="flex flex-col gap-4 py-4">
                    <div
                     @click="selectMemory(memory)"
                    v-for="(memory,index) in macbookData.memories"
                    :key="index"
                    :id="memory.value"
                     :class="[
                        'card-selection',
                        'memory-selection',
                        'fs-300',
                        { 'selected': memory.value === selectedMemory },
                        { 'disabled': memory.suitable !== selectedCore }
                    ]">
                        <span class="card-title font-semibold">{{ memory.title }}</span>
                        <span class="card-price font-light">{{ memory.priceText }}</span>
                    </div>
                </div>
            </div>

            <!-- storage -->
            <div class="storage-wrapper pt-4">
                <p class="fs-300 font-medium">Storage</p>
                <a href="#" target="_blank" class="fs-200 flex items-center gap-2">
                    How much storage is for you?
                    <FontAwesomeIcon :icon="faSquarePlus"/>
                </a>
                <div class="flex flex-col gap-4 py-4">
                    <div
                     @click="selectStorage(storage)"
                    v-for="(storage,index) in macbookData.storages"
                    :key="index"
                    :id="storage.value"
                     :class="[
                        'card-selection',
                        'storage-selection',
                        'fs-300',
                        (index === 0 ? 'selected' : ''),
                    ]">
                        <span class="card-title font-semibold">{{ storage.title }}</span>
                        <span class="card-price font-light">{{ storage.priceText }}</span>
                    </div>
                </div>
            </div>

            <!-- keyboard language -->
            <div class="keyboard-wrapper fs-300 py-2">
                <h2 class="font-medium">Keyboard Language</h2>
                <a class="flex items-center gap-2 fs-200 pt-1" href="#" target="_blank">Learn more<FontAwesomeIcon :icon="faSquarePlus"/></a>
                <div class="form-dropdown mt-2">
                    <select name="language" id="">
                        <option
                        v-for="(lan,index) in macbookData.keyboard_langugages"
                        :key="index"
                        :value="lan.value">
                            {{ lan.title }}
                        </option>
                    </select>
                </div>
            </div>

            <!-- need a moment -->
            <div class="mt-3 p-5 flex flex-col justify-center bg-grey">
                <p class="fs-200 font-medium">Need a moment?</p>
                <p class="fs-200">Keep all your selections by saving this device to Your Saves, then come back anytime and pick up right where you left off.</p>
                <a
                    href="https://www.apple.com/my/shop/buy-mac/macbook-pro/14-inch"
                    target="_blank"
                    class="flex items-center gap-2 fs-100 py-2"
                >
                    <FontAwesomeIcon class="fs-200" :icon="faBookmark" />
                    <span>Save for later</span>
                </a>
            </div>

            <!-- mobile view chat with specialist -->
            <div class="mobile-view flex flex-col items-center gap-2 fs-200 items-center">
                <h2 class="tracking-tight">Have questions about buying a Mac?</h2>
                <a
                href="#"
                target="_blank"
                >Chat with a Mac Specialist</a>
            </div>

            <!-- mobile free delivery -->
            <div class="mobile-view flex max-auto flex-col py-4">
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
        </div>
    </div>
    <div class="img-wrapper relative fs-700 content-limit">
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

    <!-- sticky summary price -->
    <div class="summary-price">
        <div class="summary-content content-limit py-6">
            <div class="flex gap-4 order-2">
                <div class="price font-medium fs-600 flex flex-col gap-1 items-end">
                    <h1>RM {{ macbookTotalPrice }} or</h1>
                    <h1>RM {{ macbookTotalInstallment }}/mo. for 24 mo.<sup>*</sup></h1>
                    <a class="fs-200 explore-options flex items-center gap-" href="https://www.apple.com/my/shop/financing/installments/overlay?ca=25599.00&product=Z1AW" target="_blank">
                        <span>Explore monthly instalment options</span>
                        <div>
                            <FontAwesomeIcon class="pr-2 fs-100" :icon="faAngleRight"/>
                            <FontAwesomeIcon :icon="faSquarePlus"/>
                        </div>
                    </a>
                </div>
                <div class="add-bag flex gap-4 items-center h-fit">
                    <button class="add-btn bg-button text-white fs-200 font-medium whitespace-nowrap">Add to bag</button>
                    <FontAwesomeIcon class="fs-600 clr-link" :icon="faBookmark" />
                </div>
            </div>
            <div :class="showDelivery ? 'active' : ''" class="flex gap-2 shipping-wrapper order-1">
                <div class="pt-1">
                    <svg class="as-svgicon-rtl-mirrored as-svgicon as-svgicon-boxtruck as-svgicon-reduced as-svgicon-boxtruckreduced" viewBox="0 0 25 25" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path fill="#1d1d1f" d="m23.482 12.847-2.92-3.209A1.947 1.947 0 0 0 18.985 9H17V6.495a2.5 2.5 0 0 0-2.5-2.5h-11a2.5 2.5 0 0 0-2.5 2.5v9.75a2.5 2.5 0 0 0 2.5 2.5h.548A2.746 2.746 0 0 0 6.75 21.02 2.618 2.618 0 0 0 9.422 19h6.681a2.744 2.744 0 0 0 5.347-.23h.735A1.656 1.656 0 0 0 24 16.98v-2.808a1.937 1.937 0 0 0-.518-1.325ZM8.426 18.745a1.74 1.74 0 0 1-3.352 0 1.577 1.577 0 0 1 .015-1 1.738 1.738 0 0 1 3.322 0 1.578 1.578 0 0 1 .015 1ZM9.447 18a2.726 2.726 0 0 0-5.394-.255H3.5a1.502 1.502 0 0 1-1.5-1.5v-9.75a1.502 1.502 0 0 1 1.5-1.5h11a1.502 1.502 0 0 1 1.5 1.5V18Zm10.972.77a1.738 1.738 0 0 1-3.337 0 1.573 1.573 0 0 1 0-1 1.742 1.742 0 1 1 3.337 1ZM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0 0 17 16.165V10h1.986a.976.976 0 0 1 .838.314l2.927 3.214a.95.95 0 0 1 .249.644Zm-1.324-3.36a.512.512 0 0 1 .174.38h-3.306a.499.499 0 0 1-.544-.528V11h1.073a.76.76 0 0 1 .594.268Z"></path></svg>
                </div>
                <div class="shipping-details flex fs-200 flex-col pt-1">
                    <p class="font-medium">Ships: </p>
                    <p>3–5 business days</p>
                    <p>Free Shipping</p>
                    <a class="flex items-center" href="#" target="_blank">
                        <span class="pr-1">Get delivery dates</span>
                        <FontAwesomeIcon :icon="faSquarePlus"/>
                    </a>
                </div>
            </div>
            <button
                @click="showDeliveryState()"
                :class="showDelivery ? 'active' : ''"
                class="show-delivery-options mobile-view clr-link flex gap-1 order-3 items-center">
                {{ showDelivery ? 'Hide Options' : 'Show Options' }}
                <FontAwesomeIcon
                    class="caret-down fs-100 clr-link"
                    :class="showDelivery ? 'rotate' : ''"
                    :icon="faAngleDown" />
            </button>
        </div>
    </div>
  </main>
</template>

<script setup>
import Toast from './../components/Toast.vue'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref, onMounted } from 'vue';

const macbookData = ref({})
const selectedCore = ref('30-core')
const selectedMemory = ref('36GB')
const selectedStorage = ref('1TB')
const macbookTotalPrice = ref(0)
const macbookTotalInstallment = ref(0)
const showToast = ref(false);
const showDelivery = ref(false);

const handleNotification = (value) => {
  showToast.value = value;
};

const showDeliveryState = () =>{
    console.log(showDelivery.value);
    showDelivery.value = !showDelivery.value;
}

// it is very ineffecient to do this but due to time constraint, i have to hardcode it
const updateMemoryPrice = (price1, price2, price3, price4, price5) => {
    document.getElementById("36GB").childNodes[1].innerHTML = price1;
    document.getElementById("48GB").childNodes[1].innerHTML = price2;
    document.getElementById("64GB").childNodes[1].innerHTML = price3;
    document.getElementById("96GB").childNodes[1].innerHTML = price4;
    document.getElementById("128GB").childNodes[1].innerHTML = price5;
}
const updateStoragePrice = (price1, price2, price3, price4) => {
    document.getElementById("1TB").childNodes[1].innerHTML = price1;
    document.getElementById("2TB").childNodes[1].innerHTML = price2;
    document.getElementById("4TB").childNodes[1].innerHTML = price3;
    document.getElementById("8TB").childNodes[1].innerHTML = price4;
}
// select a core
const selectCore = (chip) => {
    const { core } = chip;
    selectedCore.value = core

    const selectedCoreDiv = document.getElementById(core);
    // get the second child which is the price
    // have to hardcode the value for now
    selectedCoreDiv.childNodes[1].innerHTML = "";
    if(core === "40-core"){
        document.getElementById("30-core").childNodes[1].innerHTML = "- RM 1,200.00";
        selectedMemory.value = "48GB";
        updateMemoryPrice(
            "- RM 800.00",
            "",
            "+ RM 800.00",
            "+ RM 2,400.00",
            "+ RM 4,000.00"
        )
        // add price for the core price
        calculatePriceInstallment(1200)
        // add price for the first memory price
        calculatePriceInstallment(800)
    }else{
        document.getElementById("40-core").childNodes[1].innerHTML = "+ RM 1,200.00";
        selectedMemory.value = "36GB";
        updateMemoryPrice(
            "",
            "+ RM 800.00",
            "+ RM 1,600.00",
            "+ RM 3,200.00",
            "+ RM 4,800.00"
        )
       calculatePriceInstallment(-1200);
       calculatePriceInstallment(-800);
    }
    // reset selected core class
    document.querySelectorAll('.core-selection').forEach((coreDiv) =>{
        coreDiv.classList.remove('selected');
    })
    selectedCoreDiv.classList.add('selected');

    // show toast
    showToast.value = !showToast.value;
}

// select a memory
const selectMemory = (memory) =>{
    const { value } = memory;
    const selectedMemoryDiv = document.getElementById(value);
    // if disabled does nothing
     if(selectedMemoryDiv.classList.contains('disabled')){
        return;
    }
    selectedMemory.value = value;
    document.querySelectorAll('.memory-selection').forEach((memoryDiv) =>{
        memoryDiv.classList.remove('selected');
    })
    selectedMemoryDiv.classList.add('selected')

    switch(value){
        case '36GB':
            updateMemoryPrice(
                "",
                "+ RM 800.00",
                "+ RM 1,600.00",
                "+ RM 3,200.00",
                "+ RM 4,800.00",
            )
            calculatePriceInstallment(-3200)
            break;
        case '48GB':
            updateMemoryPrice(
                "- RM 800.00",
                "",
                "+ RM 800.00",
                "+ RM 2,400.00",
                "+ RM 4,000.00",
            )
            calculatePriceInstallment(-800)
            calculatePriceInstallment(-3200)
            break;
        case '64GB':
            updateMemoryPrice(
                "- RM 1,600.00",
                "- RM 800.00",
                "",
                "+ RM 1,600.00",
                "+ RM 3,200.00",
            )
            calculatePriceInstallment(800)
            calculatePriceInstallment(-2400)
            break;
        case '96GB':
            updateMemoryPrice(
                "- RM 3,200.00",
                "- RM 2,400.00",
                "- RM 1,600.00",
                "",
                "+ RM 1,600.00",
            )
            calculatePriceInstallment(3200)
            break;
        case '128GB':
            updateMemoryPrice(
                "- RM 4,800.00",
                "- RM 4,000.00",
                "- RM 3,200.00",
                "- RM 1,600.00",
                "",
            )
            calculatePriceInstallment(4000)
            break;
    }
}

// due to time constraint, i have disabled the calculation
const calculatePriceInstallment = (price) =>{
    macbookTotalPrice.value += price;
    macbookTotalInstallment.value = (macbookTotalPrice.value/24).toFixed(2);
}

// select a storage
const selectStorage = (storage) => {
    const { value }  = storage;
    selectedStorage.value = value;
   const selectedStorageDiv = document.getElementById(value);
    // get the second child which is the price
    // have to hardcode the value for now
    selectedStorageDiv.childNodes[1].innerHTML = "";
    // reset selected core class
    document.querySelectorAll('.storage-selection').forEach((coreDiv) =>{
        coreDiv.classList.remove('selected');
    })
    selectedStorageDiv.classList.add('selected');

        switch(value){
        case '1TB':
            updateStoragePrice(
                "",
                "+ RM 1,600.00",
                "+ RM 4,000.00",
                "+ RM 8,800.00",
            )
            calculatePriceInstallment(-3200)
            break;
        case '2TB':
            updateStoragePrice(
                "- RM 1600.00",
                "",
                "+ RM 2,400.00",
                "+ RM 7,200.00",
            )
            calculatePriceInstallment(-800)
            calculatePriceInstallment(-3200)
            break;
        case '4TB':
            updateStoragePrice(
                "- RM 4,000.00",
                "- RM 2,400.00",
                "",
                "+ RM 4,800.00",
            )
            calculatePriceInstallment(800)
            calculatePriceInstallment(-2400)
            break;
        case '8TB':
            updateStoragePrice(
                "- RM 8,800.00",
                "- RM 7,200.00",
                "- RM 4,800.00",
                "",
            )
            calculatePriceInstallment(3200)
            break;
    }
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
    height: auto;
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
.card-selection.disabled{
    cursor: default;
    border-color: #86868b;
    opacity: .42;
    color: #1d1d1f;
}
.desktop-view{
    display:flex;
}
.mobile-view{
    display:none;
}
.summary-price{
    background: #f5f5f7;
    border-top: 1px solid #d2d2d7;
    inset-inline: 0;
    bottom: 0;
    min-height: 130px;
    position: fixed;
    width: 100%;
    z-index: 3;
}
.summary-content{
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:1rem;
}
.add-btn{
    border-radius: 8px;
    padding:0.5rem 1rem;
}
.caret-down{
    transition: all .5s ease;
}
.rotate{
    transform:rotate(180deg)
}
@media (max-width: 820px) {
    #product .img-wrapper, .product-wrapper{
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

    .desktop-view{
        display:none;
    }
    .mobile-view{
        display:flex;
    }

    #product .img-wrapper{
        width:100%;
    }

    .summary-price{
        bottom:0;
    }
    .summary-content{
        grid-template-columns: 1fr;
    }
    .price{
        align-items:flex-start ;
    }
    a.explore-options{
        flex-direction: column;
        align-items: flex-start;
    }
    .summary-content.content-limit{
        width:90%;
    }
    .shipping-wrapper{
        order:2;
        position: relative;
        opacity: 0;
        top: -100%;
        height: 0;
        width: 0;
    }
    .shipping-wrapper.active{
        top:0;
        opacity: 1;
        width:100%;
        height:100%;
    }
    .show-delivery-options.active{
        order:3;
    }
}
</style>
