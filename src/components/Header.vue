<template>
  <!-- empty non working header -->
  <header class="px-5 mx-auto">
    <nav>
      <ul class="flex justify-between items-center fs-100">
        <li
          v-for="(item, index) in headerItems"
          :key="index"
        >
          <span
            :class="getIconClass(item) + 'header-icon'"
            v-if="item.isIcon"
          >
            <FontAwesomeIcon :icon="icons[item.title]" />
          </span>
          <span
            class="header-text"
            v-else
          >{{ item.title }}</span>
        </li>
      </ul>
    </nav>
    <!-- temporary mobile menu , just for aesthetics only it should be the same div
        as the mobile and desktop but due to time constraint, i have added a very simple
        approach to add two version of menu desktop and mobile
     -->
    <div :class="'hamburger-menu ' + (isMenuOpen ? 'open' : 'close')">
      <ul class="flex flex-col gap-3">
        <li
          v-for="(item, index) in headerItems"
          :key="index"
        >
          <span
            class="fs-700 font-bold"
            v-if="!item.isIcon"
          >{{ item.title }}</span>
        </li>
      </ul>
    </div>
    <button
      class="hamburger fs-500"
      @click="toggleMenu"
    >
      <div class="menu-icon">
        <input
          class="menu-icon__cheeckbox"
          type="checkbox"
        />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </button>
  </header>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { ref, onMounted } from 'vue'
const icons = {
  faApple,
  faMagnifyingGlass,
  faShoppingBag
}

const headerItems = ref([])
const isMenuOpen = ref(false)

const fetchHeaderItems = async () => {
  const response = await fetch('/src/assets/json/header.json')
  headerItems.value = await response.json()
}
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const getIconClass = (item) => {
  if (item.isIcon) {
    return item.title === 'faApple' ? 'fs-400 ' : 'fs-200 '
  }
  return ''
}

// on load get the header json
onMounted(() => {
  fetchHeaderItems()
})
</script>

<style scoped>
header {
  width: 100vw;
  max-width: 1024px;
  position: relative;
}
nav ul {
  height: 44px;
}

ul > li > span {
  position: relative;
  visibility: visible;
  opacity: 1;
  transition: all 0.2s ease;
}
.hamburger {
  position: absolute;
  right: -100px;
  opacity: 0;
  visibility: hidden;
  top: 50%;
  transform: translate(-50%, -50%);
}
.hamburger-menu {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: -250vh;
  background: white;
  transition: top 0.5s ease;
  padding-top: 50px;
}
.hamburger-menu li {
  opacity: 0;
  transition: opacity 1s ease;
}
.hamburger-menu.open li {
  opacity: 1;
}
.hamburger-menu span {
  padding: 0 40px;
}
@media screen and (max-width: 932px) {
  ul {
    padding-inline-end: 32px;
  }
  ul > li > span.header-text {
    position: absolute;
    top: -100px;
  }
  ul > li.menuOpen > span {
    top: 0px;
  }
  .hamburger {
    right: -10px;
    opacity: 1;
    visibility: visible;
  }
  .hamburger-menu.open {
    top: 0;
  }
}
</style>
<style lang="scss" scoped>
// preset scss from https://codepen.io/fromwireframes/pen/arMrYp
.menu-icon {
  position: relative;
  width: 32px;
  height: 32px;
  cursor: pointer;

  .menu-icon__cheeckbox {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    z-index: 2;
    -webkit-touch-callout: none;
    position: absolute;
    opacity: 0;
  }
  div {
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 22px;
    height: 12px;
  }
  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--bar-bg, #000);
    border-radius: 1px;
    transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

    &:first-of-type {
      top: 0;
    }
    &:last-of-type {
      bottom: 0;
    }
  }
  &.active,
  .menu-icon__cheeckbox:checked + div {
    span {
      &:first-of-type {
        transform: rotate(45deg);
        top: 5px;
      }
      &:last-of-type {
        transform: rotate(-45deg);
        bottom: 5px;
      }
    }
  }

  &.active:hover span:first-of-type,
  &.active:hover span:last-of-type,
  &:hover .menu-icon__cheeckbox:checked + div span:first-of-type,
  &:hover .menu-icon__cheeckbox:checked + div span:last-of-type {
    width: 22px;
  }

  &:hover {
    // no need hover effect on mobile.
    @media (min-width: 1024px) {
      span:first-of-type {
        width: 26px;
      }

      span:last-of-type {
        width: 12px;
      }
    }
  }
}
</style>