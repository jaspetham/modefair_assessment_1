
<template>
  <footer class="bg-grey md:p-8 pb-4 p-6">
    <div class="content-limit">
      <div class="footer-top fs-100 font-light flex flex-col gap-4">
        <p><sup>*</sup> Monthly pricing is after purchase using credit card interest at 0% p.a. over a nine-month tenure. Monthly pricing is rounded to the nearest ringgit and displayed for each product added in the order. Exact pricing will be for the whole order and provided by your bank, subject to your bank’s terms and conditions.</p>
        <p><sup>◊◊</sup>
          <span class="font-normal pl-1">Terms & Conditions of 0% interest for 6-, 12- and 24-month instalment payment plans</span>
        </p>
        <p>0% interest instalment payment plans are available to qualified Malaysia residents and provided by Affin, Ambank, CIMB, Hong Leong, Maybank, OCBC and RHB. To qualify for the 0% interest for 6-, 12- or 24-month instalment offers, your purchase minimum value must be MYR 2,000 or more in a single transaction. All purchases on 0% interest instalment plans are subject to approval by your credit card issuer. Refer to your credit card issuer’s website for conditions, fees and charges.</p>
        <p>Instalment offers are only available to individual customers using consumer credit cards. Apple Employee EPP orders, Education Store orders, business purchases and institutional purchases are not eligible for this offer. Only Visa and Mastercard credit cards are eligible for this offer. If your instalment order is not approved by your credit card issuer, we will not be informed of the reason. Please contact your credit card issuer for further information. Purchases will be billed to your account upon order placement. Offer is available on advertised or ticketed price.</p>
        <p>The information is current as of 23 April 2024.</p>
        <p><sup>**</sup> Trade-in service is provided by Apple’s trade-in partners. Trade-in value quotes are estimated only and actual values may be lower than the estimation. Trade-in values vary based on the condition, year and model of your trade-in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit. Trade-in value may be applied towards qualifying new device purchase. Actual value awarded is based on receipt of a qualifying device matching the description provided when the estimate was made. Apple’s trade-in partners reserve the right to refuse, cancel or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply. For recycling eligible equipment Terms and restrictions may apply.</p>
        <p>1. 1GB = 1 billion bytes and 1TB = 1 trillion bytes; actual formatted capacity less.</p>
        <p>2. The displays on the 14-inch and 16-inch MacBook Pro have rounded corners at the top. When measured as a standard rectangular shape, the screens are 14.2 inches and 16.2 inches diagonally (actual viewable area is less).</p>
        <p>We use your location to show you delivery options faster. We found your location using your IP address or because you entered it during a previous visit to Apple.</p>
      </div>
      <ul class="flex gap-2 py-4 fs-200">
        <li>
          <a
            class="fc-dimblack"
            href="https://www.apple.com/my/"
            target="_blank"
          >
            <FontAwesomeIcon
              class="fs-300"
              :icon="faApple"
            />
          </a>
        </li>
        <li>
          <a
            class="fc-dimblack"
            href="https://www.apple.com/my/mac"
            target="_blank"
          >Mac</a>
        </li>
        <li>
          <a
            class="fc-dimblack"
            href="https://www.apple.com/my/macbook-pro"
            target="_blank"
          >Macbook Pro</a>
        </li>
        <li>
          <a
            class="fc-dimblack"
            href=""
            target="_blank"
          >Buy Macbook Pro</a>
        </li>
      </ul>

      <div class="footer-top">
        <p class="fs-100 font-light">More ways to shop:
          <a
            href="https://locate.apple.com/my/en"
            target="_blank"
            class="underline"
          >Find a retailer</a>
          near you. Or call
          <a
            href="tel:1800-80-6419"
            target="_blank"
            class="underline"
          >1800-80-6419.</a>
        </p>
      </div>
      <div class="font-light fs-100 flex flex-wrap justify-between pt-4 gap-4">
        <div class="order-2 md:order-1 flex gap-3 flex-wrap">
          <p>Copyright © 2024 Apple Inc. All rights reserved</p>
          <ul class="flex items-center footer-bottom gap-4 flex-wrap">
            <li class="relative">Privacy Policy</li>
            <li class="relative">Terms of Use</li>
            <li class="relative">Sales and Refunds</li>
            <li class="relative">Legal</li>
            <li class="relative">Site Map</li>
          </ul>
        </div>
        <p class="order-1 md:order-2">Malaysia</p>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
<style scoped>
.footer-top {
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  padding-bottom: 1rem;
}
.footer-top ul > li::before {
  background-color: rgba(0, 0, 0, 0.48);
  content: '';
  display: inline-block;
  height: 11px;
  margin-top: -1px;
  margin-inline-end: 11px;
  -webkit-mask-image: url(https://store.storeimages.cdn-apple.com/8756/store.apple.com/static-resources/rs-external-1.57.4-1d348/rel/031a5e775752813cfad5.svg);
  mask-image: url(https://store.storeimages.cdn-apple.com/8756/store.apple.com/static-resources/rs-external-1.57.4-1d348/rel/031a5e775752813cfad5.svg);
  vertical-align: middle;
  width: 6px;
}
ul.footer-bottom > li::after {
  background-color: rgba(0, 0, 0, 0.48);
  content: '';
  height: 10px;
  margin: 3px 0;
  position: absolute;
  width: 1px;
  right: -10px;
}

ul.footer-bottom > li:last-child::after {
  display: none;
}

.footer-top > li:first-child::before {
  display: none;
}
@media screen and (max-width: 820px) {
    footer .content-limit{
        width:100%
    }
}
</style>