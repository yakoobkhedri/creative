<template>
  <section
    class="relative before:inset-x-0 before:-top-32 before:bg-dash before:absolute before:w-1 before:h-24 before:mx-auto mt-48"
  >
    <div class="lg:flex hidden items-center justify-center font-bold gap-11">
      <a
        class="hover:text-secondary cursor-pointer transition-all duration-300"
        @click="toggleTabs(1)"
        :class="{
          'text-black': openTab !== 1,
          'text-secondary': openTab === 1,
        }"
        >WEB DESIGN</a
      >
      <a
        class="hover:text-secondary cursor-pointer transition-all duration-300"
        @click="toggleTabs(2)"
        :class="{
          'text-black': openTab !== 2,
          'text-secondary': openTab === 2,
        }"
        >LOGO DESIGN</a
      >
      <a
        class="hover:text-secondary cursor-pointer transition-all duration-300"
        @click="toggleTabs(3)"
        :class="{
          'text-black': openTab !== 1,
          'text-secondary': openTab === 3,
        }"
        >ADVERTISEMENT</a
      >
      <a
        class="hover:text-secondary cursor-pointer transition-all duration-300"
        @click="toggleTabs(4)"
        :class="{
          'text-black': openTab !== 4,
          'text-secondary': openTab === 4,
        }"
        >BRANDING</a
      >
      <a
        class="hover:text-secondary cursor-pointer transition-all duration-300"
        @click="toggleTabs(5)"
        :class="{
          'text-black': openTab !== 5,
          'text-secondary': openTab === 5,
        }"
        >DESIGN</a
      >
      <a
        class="hover:text-secondary cursor-pointer transition-all duration-300"
        @click="toggleTabs(6)"
        :class="{
          'text-black': openTab !== 6,
          'text-secondary': openTab === 6,
        }"
        >PHOTO</a
      >
    </div>
    <div>
      <!-- Swiper -->
      <div v-bind:class="{ hidden: openTab !== 1, flex: openTab === 1 }">
        <div
          class="swiper mySwiper mt-12"
          ref="WEB"
          
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      WEB DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-1.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      WEB DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-1.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      WEB DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-1.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      WEB DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-1.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      WEB DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-1.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      WEB DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-1.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      WEB DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-1.jpg" alt="slide" class="" />
              </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
      <!-- Swiper -->
      <div v-bind:class="{ hidden: openTab !== 2, flex: openTab === 2 }">
        <div
          class="swiper mySwiper mt-12"
          ref="LOGO"
         
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      LOGO DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-2.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      LOGO DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-2.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      LOGO DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-2.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      LOGO DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-2.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      LOGO DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-2.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      LOGO DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-2.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      LOGO DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-2.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      LOGO DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-2.jpg" alt="slide" class="" />
              </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
      <!-- Swiper -->
      <div v-bind:class="{ hidden: openTab !== 3, flex: openTab === 3 }">
        <div
          class="swiper mySwiper mt-12"
          ref="ADVERTISEMENT"
          
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      ADVERTISEMENT
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-3.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      ADVERTISEMENT
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-3.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      ADVERTISEMENT
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-3.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      ADVERTISEMENT
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-3.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      ADVERTISEMENT
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-3.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      ADVERTISEMENT
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-3.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      ADVERTISEMENT
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-3.jpg" alt="slide" class="" />
              </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
      <!-- Swiper -->
      <div v-bind:class="{ hidden: openTab !== 4, flex: openTab === 4 }">
        <div
          class="swiper mySwiper mt-12"
          ref="BRANDING"
          
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      BRANDING
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-4.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      BRANDING
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-4.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      BRANDING
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-4.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      BRANDING
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-4.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      BRANDING
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-4.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      BRANDING
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-4.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      BRANDING
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-4.jpg" alt="slide" class="" />
              </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
      <!-- Swiper -->
      <div v-bind:class="{ hidden: openTab !== 5, flex: openTab === 5 }">
        <div
          class="swiper mySwiper mt-12"
          ref="DESIGN"
          
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-5.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-5.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-5.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-5.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-5.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-5.jpg" alt="slide" class="" />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      DESIGN
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img src="../assets/images/gallery-5.jpg" alt="slide" class="" />
              </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
      <!-- Swiper -->
      <div v-bind:class="{ hidden: openTab !== 6, flex: openTab === 6 }">
        <div class="swiper mySwiper mt-12" ref="PHOTO">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div
                class="relative"
                v-bind:class="{ hidden: openTab !== 6, flex: openTab === 6 }"
              >
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      PHOTO
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img
                  src="../assets/images/gallery-6.jpg"
                  alt="slide"
                  class=""
                />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      PHOTO
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img
                  src="../assets/images/gallery-6.jpg"
                  alt="slide"
                  class=""
                />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      PHOTO
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img
                  src="../assets/images/gallery-6.jpg"
                  alt="slide"
                  class=""
                />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      PHOTO
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img
                  src="../assets/images/gallery-6.jpg"
                  alt="slide"
                  class=""
                />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      PHOTO
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img
                  src="../assets/images/gallery-6.jpg"
                  alt="slide"
                  class=""
                />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      PHOTO
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img
                  src="../assets/images/gallery-6.jpg"
                  alt="slide"
                  class=""
                />
              </div>
            </div>
            <div
              class="swiper-slide text-black text-center items-center justify-center group"
            >
              <div class="relative">
                <div
                  class="absolute transition-all duration-300 w-0 h-0 overflow-hidden origin-center group-hover:h-full group-hover:w-full flex items-center justify-center group-hover:bg-white opacity-75 font-bold"
                >
                  <div>
                    <h3
                      class="transition-all duration-300 text-secondary hover:text-black cursor-pointer text-sm"
                    >
                      PHOTO
                    </h3>
                    <h2
                      class="text-2xl hover:text-secondary text-center transition-all duration-300 px-20 mt-2 cursor-pointer"
                    >
                      Clothes Badge Design
                    </h2>
                  </div>
                </div>
                <img
                  src="../assets/images/gallery-6.jpg"
                  alt="slide"
                  class=""
                />
              </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);
export default {
  name: "portfolio",
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
  mounted() {
    new Swiper(this.$refs.WEB, {
      loop: true,
      clickable: true,
      slidesPerView: 1,
      autoplay: true,
      breakpoints:{
          768:{
            slidesPerView: 2,
          },
          992:{
            slidesPerView: 3,
          },
          1024:{
            slidesPerView: 4,
          },
          1200:{
            slidesPerView: 5,
          }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    new Swiper(this.$refs.LOGO, {
      loop: true,
      clickable: true,
      slidesPerView: 1,
      autoplay: true,
      breakpoints:{
          768:{
            slidesPerView: 2,
          },
          992:{
            slidesPerView: 3,
          },
          1024:{
            slidesPerView: 4,
          },
          1200:{
            slidesPerView: 5,
          }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    new Swiper(this.$refs.ADVERTISEMENT, {
      loop: true,
      clickable: true,
      slidesPerView: 1,
      autoplay: true,
      breakpoints:{
          768:{
            slidesPerView: 2,
          },
          992:{
            slidesPerView: 3,
          },
          1024:{
            slidesPerView: 4,
          },
          1200:{
            slidesPerView: 5,
          }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    new Swiper(this.$refs.BRANDING, {
      loop: true,
      clickable: true,
      slidesPerView: 1,
      autoplay: true,
      breakpoints:{
          768:{
            slidesPerView: 2,
          },
          992:{
            slidesPerView: 3,
          },
          1024:{
            slidesPerView: 4,
          },
          1200:{
            slidesPerView: 5,
          }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    new Swiper(this.$refs.DESIGN, {
      loop: true,
      clickable: true,
      slidesPerView: 1,
      autoplay: true,
      breakpoints:{
          768:{
            slidesPerView: 2,
          },
          992:{
            slidesPerView: 3,
          },
          1024:{
            slidesPerView: 4,
          },
          1200:{
            slidesPerView: 5,
          }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    new Swiper(this.$refs.PHOTO, {
      loop: true,
      clickable: true,
      slidesPerView: 1,
      autoplay: true,
      breakpoints:{
          768:{
            slidesPerView: 2,
          },
          992:{
            slidesPerView: 3,
          },
          1024:{
            slidesPerView: 4,
          },
          1200:{
            slidesPerView: 5,
          }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>

<style></style>
