<template>
  <!-- empty non working header -->
  <header
    :class="(isSubtitleOpen ? 'open' : 'close')"
    :style="{ height: headerHeight + 'px' }"
  >
    <div class="header-content max-w-[1024px] mx-auto">
      <nav class="relative">
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

      <div :class="(isSubtitleOpen ? 'open' : '') + ' subtitle relative flex justify-between'">
        <h1 class="subtitle-text h-fit fs-500 basis-full">Macbook Pro</h1>
        <button
          @click="toggleSubtitleOpen"
          :class="'subtitle-caret flex justify-end ' + (isSubtitleOpen ? 'up' : 'down')"
        >
          <FontAwesomeIcon :icon="faAngleDown" />
        </button>
        <div class="subtitle-options flex gap-3 fs-100 fc-dimblack opacity-65">
          <span>Overview</span>
          <span>macOS</span>
          <span>Compare</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faShoppingBag, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { ref, onMounted } from 'vue'
const icons = {
  faApple,
  faMagnifyingGlass,
  faShoppingBag
}

// store data json into header items
const headerItems = ref([])
// state for menu open
const isMenuOpen = ref(false)
// state for subtitle open
const isSubtitleOpen = ref(false)

const fetchHeaderItems = async () => {
  const response = await fetch('/src/assets/json/header.json')
  headerItems.value = await response.json()
}
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const toggleSubtitleOpen = () => {
  isSubtitleOpen.value = !isSubtitleOpen.value
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
  position: fixed;
  width: 100%;
  position: relative;
  background: var(--clr-white);
  border-bottom: 1px solid rgba(158, 158, 158, 0.5);
}
nav,
.subtitle-text {
  padding-inline: clamp(0.25rem, 10vw, 0.75rem);
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
  transform: translateY(-50%);
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
  z-index: 9;
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
.subtitle {
  align-content: center;
  padding: clamp(0.2rem, calc(15px + 10vw), 1.1rem) 1.2rem;
}

.subtitle-caret {
  transition: all 0.5s ease;
  position: absolute;
  right: 25px;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
}
.subtitle-caret.up {
  transform: rotate(-180deg);
}

@media screen and (max-width: 820px) {
  .subtitle-caret {
    opacity: 1;
    visibility: visible;
  }
  .subtitle {
    padding: clamp(0.2rem, calc(15px + 10vw), 0.45rem) 0.5rem;
  }
  nav {
    max-width: clamp(320px, 95vw, 800px);
  }
  ul {
    padding-inline-end: calc(1rem + 32px);
  }
  ul > li > span.header-text {
    position: absolute;
    top: -100px;
  }
  ul > li.menuOpen > span {
    top: 0px;
  }
  .hamburger {
    right: -5px;
    opacity: 1;
    visibility: visible;
    z-index: 10;
  }
  .hamburger-menu.open {
    top: 0;
  }
  .subtitle.open {
    flex-wrap: wrap;
  }
  .subtitle-options {
    background: var(--clr-white);
    position: absolute;
    top: -20vh;
    opacity: 0;
    flex-direction: column;
    padding-inline: 0.1rem;
    width: 0;
    flex-basis: 0%;
    padding-inline: 2.5rem;
    padding-block: 0.75rem;
  }
  .subtitle.open .subtitle-options {
    top: 100%;
    left: 0;
    opacity: 1;
    transition: all 0.3s ease-in, opacity 0.55s ease-in;
    width: 100vw;
    height: fit-content;
    flex-basis: 100%;
    border-bottom: 1px solid rgba(158, 158, 158, 0.5);
  }

  header.open {
    border-bottom: 0;
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