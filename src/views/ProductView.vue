<template>
  <main id="product" class="content-limit">
    <div class="img-wrapper relative fs-700">
        <div class="img-detail flex flex-col gap-4">
            <div class="img-text">
                <img width="50" height="20" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-tv-plus-logo-standard-202404?wid=100&hei=40&fmt=png-alpha&.v=1711378620426" alt="">
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


</script>

<style>
.img-wrapper {
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
@media (max-width: 820px) {
    .img-wrapper{
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
