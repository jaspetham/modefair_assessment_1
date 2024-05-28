<template>
  <!-- empty non working header -->
  <header :class="isSubtitleOpen ? 'open' : 'close'">
    <div class="header-content max-w-[1024px] mx-auto">
      <nav class="relative">
        <ul class="flex justify-between items-center fs-100">
          <li v-for="(item, index) in headerItems" :key="index">
            <RouterLink to="/" class="fc-dimblack">
                <span :class="getIconClass(item) + 'header-icon'" v-if="item.isIcon">
                    <div v-if="item.title === 'faApple'">
                        <FontAwesomeIcon :icon="icons[item.title]" />
                    </div>
                    <div v-if="item.title === 'faMagnifyingGlass'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="44px" viewBox="0 0 15 44">
                            <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
                        </svg>
                    </div>
                    <div v-if="item.title === 'faShoppingBag'">
                        <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                      <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path></svg>
                    </div>
                </span>
                <span class="header-text" v-else>{{ item.title }}</span>
            </RouterLink>
          </li>
        </ul>

        <button ref="burgerMenu" class="hamburger fs-500" @click="toggleMenu">
          <div class="menu-icon">
            <input class="menu-icon__cheeckbox" type="checkbox" />
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
          <li v-for="(item, index) in headerItems" :key="index">
            <span class="fs-700 font-bold" v-if="!item.isIcon">{{ item.title }}</span>
          </li>
        </ul>
      </div>

      <div
        :class="
          (isSubtitleOpen ? 'open' : '') + ' subtitle relative flex justify-between'
        "
      >
        <div class="subtitle-content">
          <h1 class="subtitle-text h-fit fs-500 basis-full font-medium">Macbook Pro</h1>
          <button
            @click="toggleSubtitleOpen"
            :class="'subtitle-caret flex justify-end ' + (isSubtitleOpen ? 'up' : 'down')"
          >
            <FontAwesomeIcon :icon="faAngleDown" />
          </button>
        </div>
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { ref, onMounted, watchEffect } from "vue";
const icons = {
  faApple
};

// store data json into header items
const headerItems = ref([]);
// state for menu open
const isMenuOpen = ref(false);
// state for subtitle open
const isSubtitleOpen = ref(false);

const fetchHeaderItems = async () => {
  const response = await fetch("/src/assets/json/header.json");
  headerItems.value = await response.json();
};
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.querySelector("body").style.overflowY = "hidden";
  } else {
    document.querySelector("body").style.overflowY = "auto";
  }
};
const toggleSubtitleOpen = () => {
  isSubtitleOpen.value = !isSubtitleOpen.value;
  if (isSubtitleOpen.value) {
    document.querySelector("main").classList.add("blur");
  } else {
    document.querySelector("main").classList.remove("blur");
  }
};
const getIconClass = (item) => {
  if (item.isIcon) {
    return item.title === "faApple" ? "fs-400 " : "fs-200 ";
  }
  return "";
};

const burgerMenu = ref(null);
// on load get the header json
onMounted(() => {
  fetchHeaderItems();
});
</script>

<style scoped>
header {
  /* if i want to use fixed nav */
  /* position: fixed; */
  position: relative;
  width: 100%;
  top: 0;
  z-index: 99;
  background: var(--clr-white);
  border-bottom: 1px solid rgba(158, 158, 158, 0.5);
}
.header-content {
  z-index: 10;
  position: relative;
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
  background: var(--clr-white);
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
.subtitle-content {
  position: relative;
  background: var(--clr-white);
  z-index: 7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
@media screen and (max-width: 820px) {
    header{
        z-index:-1;
    }
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
  ul > li span.header-text {
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
    top: -15vh;
    opacity: 0;
    flex-direction: column;
    padding-inline: 0.1rem;
    width: 100vw;
    flex-basis: 0%;
    padding-inline: 2.5rem;
    padding-block: 0.75rem;
  }
  .subtitle.open .subtitle-options {
    top: 100%;
    left: 0;
    opacity: 1;
    transition: top 0.3s ease-out, opacity 1.5s ease-out;
    height: fit-content;
    flex-basis: 100%;
    border-bottom: 1px solid rgba(158, 158, 158, 0.5);
    background: var(--clr-white);
    z-index: 1;
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
