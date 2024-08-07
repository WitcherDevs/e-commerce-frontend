<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <nav class="w-full h-[7.6rem] shadow-md flex justify-between items-center px-48">
    <div>
      <span class="font-extrabold text-3xl text-[#ff6000]"
        >Ri<span class="text-black">Buy</span></span
      >
    </div>
    <div class="flex text-center items-center gap-8 text-base text-gray-600 font-bold">
      <NuxtLink
        to="/"
        class="hover:text-black"
        :class="{ 'underline underline-offset-8': route.path == '/' }"
        >Ana Sayfa</NuxtLink
      >
      <NuxtLink
        to="/contact"
        class="hover:text-black"
        :class="{ 'underline underline-offset-8': route.path == '/contact' }"
        >İletişim</NuxtLink
      >
      <NuxtLink
        to="/aboutus"
        class="hover:text-black"
        :class="{ 'underline underline-offset-8': route.path == '/aboutus' }"
        >Hakkımızda</NuxtLink
      >
      <NuxtLink
        to="/premium"
        class="hover:text-black"
        :class="{ 'underline underline-offset-8': route.path == '/premium' }"
        >Premium</NuxtLink
      >
    </div>
    <div class="flex items-center gap-7">
      <div class="bg-gray-200 flex items-center rounded-md text-gray-500 py-0.5">
        <input
          type="text"
          class="bg-gray-200 h-8 rounded-md px-2 w-52 outline-none text-sm"
          placeholder="Aradığınız ürünü yazınız."
        />
        <Icon name="ri:search-line" size="24" class="mr-2 flex text-black" title="Ara" />
      </div>
      <NuxtLink>
        <Icon name="codicon:account" size="30" title="Hesabım" />
      </NuxtLink>
      <NuxtLink>
        <Icon name="ph:heart" size="30" title="Beğendiklerim" />
      </NuxtLink>
      <NuxtLink>
        <Icon name="carbon:shopping-cart" size="30" title="Sepetim" />
      </NuxtLink>
    </div>
  </nav>
</template>
