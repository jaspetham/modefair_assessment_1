<template>
  <main class="body relative">
    <div
      ref="ribbonDiv"
      class="ribbon gap-2 py-4 fs-200"
    >
      <div class="ribbon-content flex flex-wrap gap-1 justify-center items-center">
        <span>Pay 0% interest for up to 24 months. Terms apply.<sup>◊◊</sup></span>
        <a
          href="https://www.apple.com/my/shop/browse/financing/overlay"
          target="_blank"
        >Learn more
          <FontAwesomeIcon
            class="fs-100 font-thin"
            :icon="faAngleRight"
          />
        </a>
      </div>
    </div>
    <!-- added router view -->
    <RouterView />
  </main>
</template>
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { ref, onMounted } from 'vue'

const ribbonDiv = ref(null)

onMounted(() => {
  //   const headerHeight = document.querySelector('header').offsetHeight + 1
  //   document.querySelector('main.body').style.paddingTop = `${headerHeight}px`
  setTimeout(() => {
    ribbonDiv.value.classList.add('downwards')
  }, 200)
})
</script>
<style scoped>
main {
  background: white;
  z-index: 1;
}
main.blur {
  filter: blur(10px);
}
.ribbon {
  background: #f5f5f7;
  top: -100px;
  position: relative;
  opacity: 0;
  visibility: hidden;
  transition: top 1s ease-in, opacity 2s ease;
  z-index: -1;
}
.ribbon-content {
  max-width: 83%;
  margin-inline: auto;
  text-align: center;
}
.ribbon.downwards {
  visibility: visible;
  opacity: 1;
  top: 0;
}
.ribbon a {
  color: var(--clr-link);
}
</style>