<template>
  <div class="content-limit py-12 flex flex-col gap-4 p-6 items-center">
    <div class="img-wrapper pb-6">
      <img
        width="152"
        height="152"
        src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/applecare-hero-bb-201706?wid=152&hei=152&fmt=jpeg&qlt=95&.v=1629955311000"
        alt="apple care"
      >
    </div>

    <div class="mt-6 text-center flex flex-col gap-6">
      <h1 class="fs-700 font-medium pb-4">AppleCare+ for Mac</h1>
      <p class="fs-400 text-left">
        Every Mac comes with a <a
          href="https://apple.com/legal/warranty"
          target="_blank"
        >one-year limited warranty</a>
        and up to 90 days of <a
          href="https://www.apple.com/my/support/complimentary"
          target="_blank"
        >complimentary technical support.</a>
        AppleCare+ for Mac extends your coverage to three years from your AppleCare+ purchase date and adds unlimited incidents of accidental damage protection, each subject to a service fee of RM 469 for screen damage or external enclosure damage, or RM 1,429 for other accidental damage. In addition, you‘ll get 24/7 priority access to Apple experts by chat or phone through
        <a
          href="https://getsupport.apple.com/"
          target="_blank"
        >getsupport.apple.com.</a>
        For complete details, see the <a
          href="https://www.apple.com/my/legal/sales-support/applecare/applecareplus/en/mac"
          target="_blank"
        >terms</a>.
      </p>

      <a
        class="pt-4"
        href="https://www.apple.com/my/support/products/mac.html"
        target="_blank"
      >
        <span>Learn more about AppleCare+</span>
        <FontAwesomeIcon
          class="fs-100 pl-1"
          :icon="faAngleRight"
        />
      </a>
    </div>

  </div>
</template>

<script setup>
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>