<script setup lang="ts">
const isHiddenLanguageMenu = ref<Boolean>(true);
const currentLanguage = ref<String>("tr");

const hideLanguageMenu = (value: Boolean) => {
  isHiddenLanguageMenu.value = value;
};

const languages = [
  {
    emoji: "emojione:flag-for-turkey",
    name: "Türkçe",
    value: "tr",
  },
  {
    emoji: "emojione:flag-england",
    name: "English",
    value: "en",
  },
];
</script>

<template>
  <header
    class="w-full h-11 bg-[#ff6000] flex justify-between items-center px-24 text-gray-100 relative shadow"
  >
    <div />
    <p class="flex text-sm">Yaza özel tüm yaz ürünlerinde %50 indirim ve ücretsiz kargo fırsatı!</p>
    <div
      class="flex relative justify-end h-full flex-col"
      @mouseenter="hideLanguageMenu(false)"
      @mouseleave="hideLanguageMenu(true)"
    >
      <div class="flex relative justify-center h-full flex-col">
        <div class="flex items-center gap-1 relative">
          <span class="text-sm">Türkçe</span>
          <Icon name="ri:arrow-down-s-line" size="24" />
        </div>
      </div>
      <div
        v-if="!isHiddenLanguageMenu"
        class="-mb-[4.8rem] shadow absolute fadein bg-[#ff6000]/90 w-24 h-fit rounded-lg border border-orange-700"
      >
        <div
          class="px-1 py-2 text-sm cursor-pointer hover:bg-orange-400 flex items-center gap-2"
          v-for="(key, i) of languages"
          :class="[
            key.value === currentLanguage ? 'text-orange-200' : 'text-gray-100',
            i + 1 !== languages.length ? 'border-b-2 border-white' : '',
          ]"
        >
          <Icon :name="key.emoji" />
          {{ key.name }}
        </div>
      </div>
    </div>
  </header>
</template>
