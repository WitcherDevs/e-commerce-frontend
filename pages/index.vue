<template>
  <main>
    <div class="flex flex-row items-center justify-start w-screen h-96 gap-24" unselectable="on">
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
        <div class="h-full bg-[#ededed] w-1"></div>
      </div>
      <div class="w-[58rem] mt-7">
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
            <div class="bg-[#ff6000] w-full h-[22rem] flex justify-between rounded-lg">
              <div class="flex m-8 items-start flex-col gap-5">
                <div class="flex flex-row items-center gap-4 text-lg font-bold">
                  <img
                    src="https://cdn.discordapp.com/attachments/1014167819325292554/1270748622237073408/Asus-Logo.png?ex=66b4d460&is=66b382e0&hm=95a7e0b858da42e18b7877cf03f25501e776555c321ec3ee9069ed8f58d277bd&"
                    alt="logo"
                    class="w-24"
                  />
                  <span>Monitörlere</span>
                </div>
                <div class="flex flex-col gap-4">
                  <span class="text-5xl font-extrabold">%30'a varan indirimlerle sahip olun!</span>
                  <button
                    class="bg-[#ff6000] border-2 shadow text-white font-bold w-32 h-12 rounded-lg hover:bg-orange-500"
                  >
                    Satın Al
                  </button>
                </div>
              </div>
              <img
                src="https://cdn.discordapp.com/attachments/1014167819325292554/1270745818768605289/P_setting_xxx_0_90_end_500.png?ex=66b4d1c4&is=66b38044&hm=6aedc6a2781be6319a84b7022fd99f27ebaa513f6538c1ecff811a264d43fda1&"
                alt="banner"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="bg-black w-full h-[22rem] flex justify-between rounded-lg">
              <div class="flex m-8 items-start flex-col gap-5 text-white">
                <div class="flex flex-row items-center gap-4 text-lg font-bold">
                  <img
                    src="https://cdn.discordapp.com/attachments/1014167819325292554/1270750596449701919/image.png?ex=66b4d637&is=66b384b7&hm=bd8e8410b7a48943e5d88b1ed701fcb9610d5270cc7cb94b341751691f3bfc6e&"
                    alt="logo"
                    class="w-10"
                  />
                  <span>Iphone 14 Serisine</span>
                </div>
                <div class="flex flex-col gap-4">
                  <span class="text-5xl font-extrabold">%10'a varan indirimlerle sahip olun!</span>
                  <button
                    class="bg-black hover:bg-gray-700 border-2 shadow text-white font-bold w-32 h-12 rounded-lg"
                  >
                    Satın Al
                  </button>
                </div>
              </div>
              <img
                src="https://cdn.discordapp.com/attachments/1014167819325292554/1270731725596659722/image.png?ex=66b4c4a4&is=66b37324&hm=4ff7e6d638235670798993ee6b91b285b7a97a08fa05d20d45923d70ceaef95a&"
                alt="banner"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div></div>
    </div>
  </main>
</template>
