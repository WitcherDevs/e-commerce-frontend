<template>
  <main>
    <!-- Kategoriler ve Slider Divi -->
    <div
      class="flex flex-row items-start justify-start w-screen gap-24 py-8 relative bg-[#eef5ff]"
      unselectable="on"
    >
      <div class="flex flex-row justify-start items-start ml-48">
        <div class="bg-white rounded-xl shadow-lg p-6 w-[18rem] border border-gray-100 h-fit">
          <div class="mb-4">
            <h3 class="text-lg font-bold text-gray-800 mb-2">Kategoriler</h3>
            <div class="w-12 h-1 bg-blue-500 rounded-full"></div>
          </div>
          <div class="flex flex-col gap-3">
            <NuxtLink
              class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 hover:text-blue-500 hover:scale-105 hover:shadow-md transition-all duration-300 transform group"
              to="/shop/man"
            >
              <Icon
                name="mdi:tshirt-crew"
                size="20"
                class="text-blue-500 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300"
              />
              <span class="font-medium">Erkek Giyim</span>
            </NuxtLink>
            <NuxtLink
              class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 hover:text-blue-500 hover:scale-105 hover:shadow-md transition-all duration-300 transform group"
              to="/shop/woman"
            >
              <Icon
                name="mdi:dresser"
                size="20"
                class="text-pink-500 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300"
              />
              <span class="font-medium">Kadın Giyim</span>
            </NuxtLink>
            <NuxtLink
              class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 hover:text-blue-500 hover:scale-105 hover:shadow-md transition-all duration-300 transform group"
              to="/shop/pet"
            >
              <Icon
                name="mdi:paw"
                size="20"
                class="text-green-500 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300"
              />
              <span class="font-medium">Evcil Hayvan</span>
            </NuxtLink>
            <NuxtLink
              class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 hover:text-blue-500 hover:scale-105 hover:shadow-md transition-all duration-300 transform group"
              to="/shop/electricity"
            >
              <Icon
                name="mdi:laptop"
                size="20"
                class="text-purple-500 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300"
              />
              <span class="font-medium">Elektrik & Elektronik</span>
            </NuxtLink>
            <NuxtLink
              class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 hover:text-blue-500 hover:scale-105 hover:shadow-md transition-all duration-300 transform group"
              to="/shop/health"
            >
              <Icon
                name="mdi:heart-pulse"
                size="20"
                class="text-red-500 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300"
              />
              <span class="font-medium">Sağlık & Güzellik</span>
            </NuxtLink>
            <NuxtLink
              class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 hover:text-blue-500 hover:scale-105 hover:shadow-md transition-all duration-300 transform group"
              to="/shop/sport"
            >
              <Icon
                name="mdi:bike"
                size="20"
                class="text-yellow-500 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300"
              />
              <span class="font-medium">Spor & Açık Hava</span>
            </NuxtLink>
            <NuxtLink
              class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 hover:text-blue-500 hover:scale-105 hover:shadow-md transition-all duration-300 transform group"
              to="/shop/sales"
            >
              <Icon
                name="mdi:tag"
                size="20"
                class="text-blue-500 group-hover:scale-110 transition-all duration-300"
              />
              <span class="font-medium">Fırsat Ürünleri</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Slider Divi -->
      <div class="w-[63rem] h-[32rem] relative group">
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination, SwiperNavigation]"
          :slides-per-view="1"
          :loop="true"
          :effect="'creative'"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :creative-effect="{
            prev: {
              shadow: true,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
          }"
          class="h-full"
        >
          <SwiperSlide class="rounded-2xl overflow-hidden">
            <div
              class="bg-gradient-to-r from-gray-900 to-gray-800 w-full h-full flex justify-between rounded-2xl overflow-hidden"
            >
              <div class="flex m-12 items-start flex-col gap-8 text-white">
                <div class="flex flex-row items-center gap-4">
                  <img src="https://i.hizliresim.com/hkta4qt.jpg" alt="logo" class="w-10 h-10" />
                  <span class="text-xl font-semibold text-gray-200">iPhone 15 Pro</span>
                </div>

                <div class="flex flex-col gap-6">
                  <div class="space-y-3">
                    <h1 class="text-5xl font-bold leading-tight text-white">
                      Titanium<br />
                      <span class="text-blue-400">Serisi</span>
                    </h1>
                    <p class="text-lg text-gray-300 max-w-md">
                      A17 Pro çip ile %20 daha hızlı performans.
                      <span class="text-blue-300 font-medium">%25 indirimle</span> sahip olun!
                    </p>
                  </div>

                  <div class="flex items-center gap-4">
                    <button
                      class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
                    >
                      Hemen Satın Al
                    </button>

                    <div class="flex items-center gap-2 text-sm text-gray-300">
                      <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Stokta</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-4 text-sm">
                    <span class="text-gray-300">48MP Kamera</span>
                    <span class="text-gray-400">•</span>
                    <span class="text-gray-300">29 Saat Pil</span>
                    <span class="text-gray-400">•</span>
                    <span class="text-gray-300">A17 Pro Çip</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-center pr-8">
                <img
                  src="https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png"
                  alt="iPhone 15 Pro"
                  class="h-96 w-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="rounded-2xl overflow-hidden">
            <div
              class="bg-gradient-to-r from-gray-900 to-gray-800 w-full h-full flex justify-between rounded-2xl overflow-hidden"
            >
              <div class="flex m-12 items-start flex-col gap-8 text-white">
                <div class="flex flex-row items-center gap-4">
                  <img src="https://i.hizliresim.com/hkta4qt.jpg" alt="logo" class="w-10 h-10" />
                  <span class="text-xl font-semibold text-gray-200">iPhone 15 Pro</span>
                </div>

                <div class="flex flex-col gap-6">
                  <div class="space-y-3">
                    <h1 class="text-5xl font-bold leading-tight text-white">
                      Titanium<br />
                      <span class="text-blue-400">Serisi</span>
                    </h1>
                    <p class="text-lg text-gray-300 max-w-md">
                      A17 Pro çip ile %20 daha hızlı performans.
                      <span class="text-blue-300 font-medium">%25 indirimle</span> sahip olun!
                    </p>
                  </div>

                  <div class="flex items-center gap-4">
                    <button
                      class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
                    >
                      Hemen Satın Al
                    </button>

                    <div class="flex items-center gap-2 text-sm text-gray-300">
                      <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Stokta</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-4 text-sm">
                    <span class="text-gray-300">48MP Kamera</span>
                    <span class="text-gray-400">•</span>
                    <span class="text-gray-300">29 Saat Pil</span>
                    <span class="text-gray-400">•</span>
                    <span class="text-gray-300">A17 Pro Çip</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-center pr-8">
                <img
                  src="https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png"
                  alt="iPhone 15 Pro"
                  class="h-96 w-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
          <div
            class="swiper-button-prev !w-12 !h-12 !bg-white/10 !backdrop-blur-sm !border !border-white/20 !rounded-full !text-white hover:!bg-white/20 transition-all duration-300 after:!text-lg after:!font-bold opacity-0 group-hover:opacity-100 !left-4"
          ></div>
          <div
            class="swiper-button-next !w-12 !h-12 !bg-white/10 !backdrop-blur-sm !border !border-white/20 !rounded-full !text-white hover:!bg-white/20 transition-all duration-300 after:!text-lg after:!font-bold opacity-0 group-hover:opacity-100 !right-4"
          ></div>
          <div
            class="swiper-pagination !bottom-4 !left-1/2 !-translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </Swiper>
      </div>
    </div>

    <!-- Öne Çıkan Kategoiler Divi -->
    <div class="py-16 px-48 bg-white">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Öne Çıkan Kategoriler</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          En popüler kategorilerimizi keşfedin ve ihtiyacınız olan ürünleri kolayca bulun
        </p>
      </div>

      <div class="grid grid-cols-4 gap-8">
        <AnimatedSection animation="fade-left" :delay="150">
          <div class="group cursor-pointer">
            <div
              class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105"
            >
              <div
                class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors"
              >
                <Icon name="mdi:laptop" size="32" class="text-white" />
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Elektronik</h3>
              <p class="text-gray-600 text-sm">Telefon, bilgisayar ve aksesuarlar</p>
              <span class="text-blue-600 font-medium text-sm mt-2 inline-block">1,234 ürün</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" :delay="250">
          <div class="group cursor-pointer">
            <div
              class="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105"
            >
              <div
                class="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-600 transition-colors"
              >
                <Icon name="mdi:tshirt-crew" size="32" class="text-white" />
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Moda</h3>
              <p class="text-gray-600 text-sm">Giyim, ayakkabı ve aksesuarlar</p>
              <span class="text-pink-600 font-medium text-sm mt-2 inline-block">2,567 ürün</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" :delay="350">
          <div class="group cursor-pointer">
            <div
              class="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105"
            >
              <div
                class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors"
              >
                <Icon name="mdi:home" size="32" class="text-white" />
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Ev & Yaşam</h3>
              <p class="text-gray-600 text-sm">Dekorasyon ve ev eşyaları</p>
              <span class="text-green-600 font-medium text-sm mt-2 inline-block">3,891 ürün</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-right" :delay="450">
          <div class="group cursor-pointer">
            <div
              class="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105"
            >
              <div
                class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors"
              >
                <Icon name="mdi:bike" size="32" class="text-white" />
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Spor</h3>
              <p class="text-gray-600 text-sm">Spor ekipmanları ve aksesuarlar</p>
              <span class="text-purple-600 font-medium text-sm mt-2 inline-block">1,756 ürün</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>

    <!-- Fırsat Ürünleri Divi -->
    <div class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-48">
      <div class="flex flex-col">
        <div class="flex flex-row justify-between">
          <div class="flex items-center gap-3 mb-8">
            <div class="bg-gradient-to-r from-blue-500 to-indigo-600 w-1 h-12 rounded-full"></div>
            <div class="flex flex-col">
              <span class="text-blue-600 text-lg font-semibold">Günün</span>
              <span class="text-4xl font-bold text-gray-800">Fırsat Ürünleri</span>
            </div>
          </div>

          <div class="flex items-center justify-between mb-12">
            <div class="flex items-center gap-6 bg-white rounded-2xl px-8 py-4 shadow-lg">
              <div class="flex flex-col items-center">
                <span class="text-sm font-medium text-gray-600 mb-2">Gün</span>
                <div
                  class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl px-4 py-3 min-w-[4rem] text-center shadow-lg"
                >
                  <span class="text-2xl font-bold">03</span>
                </div>
              </div>
              <div class="font-bold text-2xl text-blue-500 mb-8">:</div>
              <div class="flex flex-col items-center">
                <span class="text-sm font-medium text-gray-600 mb-2">Saat</span>
                <div
                  class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl px-4 py-3 min-w-[4rem] text-center shadow-lg"
                >
                  <span class="text-2xl font-bold">21</span>
                </div>
              </div>
              <div class="font-bold text-2xl text-blue-500 mb-8">:</div>
              <div class="flex flex-col items-center">
                <span class="text-sm font-medium text-gray-600 mb-2">Dakika</span>
                <div
                  class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl px-4 py-3 min-w-[4rem] text-center shadow-lg"
                >
                  <span class="text-2xl font-bold">25</span>
                </div>
              </div>
              <div class="font-bold text-2xl text-blue-500 mb-8">:</div>
              <div class="flex flex-col items-center">
                <span class="text-sm font-medium text-gray-600 mb-2">Saniye</span>
                <div
                  class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl px-4 py-3 min-w-[4rem] text-center shadow-lg"
                >
                  <span class="text-2xl font-bold">06</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative group">
          <Swiper
            :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
            :slides-per-view="6"
            :space-between="16"
            :loop="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :navigation="{
              nextEl: '.swiper-button-next-products',
              prevEl: '.swiper-button-prev-products',
            }"
            :pagination="{
              el: '.swiper-pagination-products',
              clickable: true,
              type: 'bullets',
            }"
            class="products-swiper"
          >
            <SwiperSlide v-for="(product, index) in products" :key="product.id">
              <ProductCard :product="product" />
            </SwiperSlide>
          </Swiper>

          <div
            class="swiper-button-prev-products opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div
            class="swiper-button-next-products opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div
            class="swiper-pagination-products !bottom-4 !left-1/2 !-translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>
      </div>
    </div>

    <!-- Sen de RiBuy'da Satış Yap -->
    <div class="py-16 px-48 bg-white">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          Sen de RiBuy'da Satış Yapmak İster misin?
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Kendi mağazanı aç, ürünlerini sat ve kazanmaya başla!
        </p>
      </div>

      <div class="grid grid-cols-2 gap-8 mb-12">
        <AnimatedSection animation="fade-left" :delay="250">
          <div
            class="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-blue-400"
          >
            <div
              class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="mdi:information" size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Detaylı Bilgi</h3>
            <p class="text-gray-600 text-sm mb-4">
              Satış süreçleri, komisyon oranları ve destek hizmetleri
            </p>
            <button
              class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-base font-medium transition-colors"
            >
              Bilgi Al
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-right" :delay="250">
          <div
            class="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-blue-200"
          >
            <div
              class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="mdi:account-plus" size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Hemen Başvuru</h3>
            <p class="text-gray-600 text-sm mb-4">Formu doldur ve hemen satışa başla</p>
            <button
              class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg text-base font-medium transition-colors"
            >
              Başvuru Yap
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const products = ref([
  {
    id: 1,
    name: "Apple Watch Series 9",
    description: "45mm, GPS, Alüminyum",
    price: "12.999",
    originalPrice: "16.999",
    discount: 25,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Apple Watch Ultra 2",
    description: "49mm, GPS + Cellular",
    price: "24.999",
    originalPrice: "32.999",
    discount: 30,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Apple Watch SE",
    description: "44mm, GPS, 2. Nesil",
    price: "8.999",
    originalPrice: "11.999",
    discount: 20,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Apple Watch Series 8",
    description: "41mm, GPS, Alüminyum",
    price: "10.999",
    originalPrice: "14.999",
    discount: 40,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Apple Watch Ultra",
    description: "49mm, GPS + Cellular",
    price: "22.999",
    originalPrice: "29.999",
    discount: 15,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Apple Watch Series 7",
    description: "45mm, GPS, Alüminyum",
    price: "9.999",
    originalPrice: "13.999",
    discount: 25,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Apple Watch SE 2",
    description: "40mm, GPS, 2. Nesil",
    price: "7.999",
    originalPrice: "10.999",
    discount: 20,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Apple Watch Series 6",
    description: "44mm, GPS, Alüminyum",
    price: "8.499",
    originalPrice: "12.999",
    discount: 35,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
  },
  {
    id: 9,
    name: "Apple Watch Series 5",
    description: "40mm, GPS, Alüminyum",
    price: "7.499",
    originalPrice: "11.999",
    discount: 30,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
  },
  {
    id: 10,
    name: "Apple Watch Series 4",
    description: "44mm, GPS, Alüminyum",
    price: "6.999",
    originalPrice: "10.999",
    discount: 25,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
  },
  {
    id: 11,
    name: "Apple Watch Series 3",
    description: "42mm, GPS, Alüminyum",
    price: "5.999",
    originalPrice: "8.999",
    discount: 40,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
  },
  {
    id: 12,
    name: "Apple Watch Series 2",
    description: "42mm, GPS, Alüminyum",
    price: "4.999",
    originalPrice: "7.999",
    discount: 20,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
  },
]);
</script>
