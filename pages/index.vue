<template>
  <main>
    <div
      class="flex flex-row items-center justify-start w-screen h-[28rem] gap-24"
      unselectable="on"
    >
      <div class="flex flex-row justify-start items-start h-full ml-48">
        <div class="flex flex-col gap-4 mt-7 w-[16rem]">
          <NuxtLink class="hover:text-[#ff6000]" to="/shop/man">Erkek Giyim</NuxtLink>
          <NuxtLink class="hover:text-[#ff6000]" to="/shop/woman">Kadın Giyim</NuxtLink>
          <NuxtLink class="hover:text-[#ff6000]" to="/shop/pet">Evcil Hayvan</NuxtLink>
          <NuxtLink class="hover:text-[#ff6000]" to="/shop/electricity"
            >Elektrik & Elektronik</NuxtLink
          >
          <NuxtLink class="hover:text-[#ff6000]" to="/shop/health">Sağlık & Güzellik</NuxtLink>
          <NuxtLink class="hover:text-[#ff6000]" to="/shop/sport">Spor & Açık Hava</NuxtLink>
          <NuxtLink class="hover:text-[#ff6000]" to="/shop/sales">Fırsat Ürünleri</NuxtLink>
        </div>
        <div class="h-full bg-[#ededed] w-1" />
      </div>
      <div class="w-[63rem] mt-7">
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
          :slides-per-view="1"
          :loop="true"
          :effect="'creative'"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
        >
          <SwiperSlide>
            <div class="bg-[#ff6000] w-full h-[25rem] flex justify-between rounded-lg">
              <div class="flex m-8 items-start flex-col gap-8">
                <div class="flex flex-row items-center gap-4 text-lg font-bold">
                  <img src="https://i.hizliresim.com/dpgn3wt.jpg" alt="logo" class="w-24" />
                  <span>Monitörlere</span>
                </div>
                <div class="flex flex-col gap-10">
                  <span class="text-5xl font-extrabold max-w-[30rem]"
                    >%30'a varan indirimlerle sahip olun!</span
                  >
                  <button
                    class="bg-[#ff6000] border-2 shadow text-white font-bold w-32 h-12 rounded-lg hover:bg-orange-500"
                  >
                    Satın Al
                  </button>
                </div>
              </div>
              <img src="https://i.hizliresim.com/kykb5j6.jpg" alt="banner" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="bg-black w-full h-[25rem] flex justify-between rounded-lg">
              <div class="flex m-8 items-start flex-col gap-8 text-white">
                <div class="flex flex-row items-center gap-4 text-lg font-bold">
                  <img src="https://i.hizliresim.com/hkta4qt.jpg" alt="logo" class="w-10" />
                  <span>Iphone 14 Serisine</span>
                </div>
                <div class="flex flex-col gap-10">
                  <span class="text-5xl font-extrabold">%10'a varan indirimlerle sahip olun!</span>
                  <button
                    class="bg-black hover:bg-gray-700 border-2 shadow text-white font-bold w-32 h-12 rounded-lg"
                  >
                    Satın Al
                  </button>
                </div>
              </div>
              <img src="https://i.hizliresim.com/etsbdw5.jpg" alt="banner" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div class="flex py-16 px-48">
      <div class="flex flex-col">
        <div class="flex items-center gap-2">
          <div class="bg-[#ff6000] w-4 rounded-lg h-8" />
          <span class="text-[#ff6000] text-2xl">Günün</span>
        </div>
        <div class="text-4xl flex items-end gap-10">
          <span>Fırsat Ürünleri</span>
          <div class="flex items-center gap-4">
            <div class="flex flex-col">
              <span class="text-base font-mono">Gün</span>
              <span class="text-4xl font-extrabold">03</span>
            </div>
            <div class="font-bold text-3xl text-[#ff6000]">:</div>
            <div class="flex flex-col">
              <span class="text-base font-mono">Saat</span>
              <span class="text-4xl font-extrabold">21</span>
            </div>
            <div class="font-bold text-3xl text-[#ff6000]">:</div>
            <div class="flex flex-col">
              <span class="text-base font-mono">Dakika</span>
              <span class="text-4xl font-extrabold">25</span>
            </div>
            <div class="font-bold text-3xl text-[#ff6000]">:</div>
            <div class="flex flex-col">
              <span class="text-base font-mono">Saniye</span>
              <span class="text-4xl font-extrabold">06</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
