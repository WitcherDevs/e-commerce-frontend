<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <nav
    class="w-full h-20 shadow-lg bg-white/95 backdrop-blur-sm flex justify-between items-center px-48 border-b border-gray-100"
  >
    <!-- Logo -->
    <div class="flex items-center">
      <span
        class="font-extrabold text-3xl text-blue-500 hover:text-blue-600 transition-colors duration-300"
        >Ri<span class="text-gray-800">Buy</span></span
      >
    </div>

    <!-- Navigation Links -->
    <div class="flex items-center gap-8">
      <NuxtLink
        to="/"
        class="relative px-4 py-2 text-gray-700 font-medium hover:text-blue-500 transition-all duration-300 group"
        :class="{ 'text-blue-500': route.path == '/' }"
      >
        <span class="relative z-10">Ana Sayfa</span>
        <div
          class="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
        <div
          v-if="route.path == '/'"
          class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"
        ></div>
      </NuxtLink>

      <NuxtLink
        to="/contact"
        class="relative px-4 py-2 text-gray-700 font-medium hover:text-blue-500 transition-all duration-300 group"
        :class="{ 'text-blue-500': route.path == '/contact' }"
      >
        <span class="relative z-10">İletişim</span>
        <div
          class="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
        <div
          v-if="route.path == '/contact'"
          class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"
        ></div>
      </NuxtLink>

      <NuxtLink
        to="/aboutus"
        class="relative px-4 py-2 text-gray-700 font-medium hover:text-blue-500 transition-all duration-300 group"
        :class="{ 'text-blue-500': route.path == '/aboutus' }"
      >
        <span class="relative z-10">Hakkımızda</span>
        <div
          class="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
        <div
          v-if="route.path == '/aboutus'"
          class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"
        ></div>
      </NuxtLink>

      <NuxtLink
        to="/premium"
        class="relative px-4 py-2 text-gray-700 font-medium hover:text-blue-500 transition-all duration-300 group"
        :class="{ 'text-blue-500': route.path == '/premium' }"
      >
        <span class="relative z-10">Premium</span>
        <div
          class="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
        <div
          v-if="route.path == '/premium'"
          class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"
        ></div>
      </NuxtLink>
    </div>

    <!-- Search and Icons -->
    <div class="flex items-center gap-6">
      <!-- Modern Search Bar -->
      <div class="relative group">
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        ></div>
        <div
          class="relative bg-gray-50 hover:bg-white border border-gray-200 hover:border-blue-300 flex items-center rounded-xl px-4 py-2 transition-all duration-300 group-hover:shadow-lg"
        >
          <Icon
            name="ri:search-line"
            size="20"
            class="text-gray-400 group-hover:text-blue-500 transition-colors duration-300"
          />
          <input
            type="text"
            class="bg-transparent h-8 px-3 w-56 outline-none text-gray-700 placeholder-gray-400 text-sm"
            placeholder="Aradığınız ürünü yazınız..."
          />
        </div>
      </div>

      <!-- Modern Icons -->
      <div class="flex items-center gap-4">
        <NuxtLink to="/account" class="group">
          <div
            class="relative p-3 rounded-xl bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all duration-300 group-hover:shadow-md"
          >
            <Icon
              name="codicon:account"
              size="24"
              class="text-gray-600 group-hover:text-blue-500 transition-colors duration-300"
              title="Hesabım"
            />
          </div>
        </NuxtLink>

        <NuxtLink to="/account/favorites" class="group">
          <div
            class="relative p-3 rounded-xl bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 transition-all duration-300 group-hover:shadow-md"
          >
            <Icon
              name="ph:heart"
              size="24"
              class="text-gray-600 group-hover:text-red-500 transition-colors duration-300"
              title="Favorilerim"
            />
          </div>
        </NuxtLink>

        <NuxtLink to="/account/basket" class="group">
          <div
            class="relative p-3 rounded-xl bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-200 transition-all duration-300 group-hover:shadow-md"
          >
            <Icon
              name="carbon:shopping-cart"
              size="24"
              class="text-gray-600 group-hover:text-green-500 transition-colors duration-300"
              title="Sepetim"
            />
            <div
              class="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
            >
              3
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
