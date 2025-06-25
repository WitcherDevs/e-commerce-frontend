<template>
  <div
    class="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer"
    @click="navigateToProduct"
  >
    <div class="relative mb-3 flex-shrink-0">
      <img :src="product.image" :alt="product.name" class="w-full h-40 object-cover rounded-xl" />
      <div
        class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold"
      >
        %{{ product.discount }}
      </div>
      <div class="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
        Stokta
      </div>
    </div>

    <div class="flex flex-col flex-grow">
      <h3
        class="text-base font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors line-clamp-2"
      >
        {{ product.name }}
      </h3>
      <p class="text-gray-600 text-xs mb-3 line-clamp-1">{{ product.description }}</p>

      <div class="mt-auto">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-1">
            <span class="text-lg font-bold text-gray-800">₺{{ product.price }}</span>
            <span class="text-gray-400 line-through text-sm">₺{{ product.originalPrice }}</span>
          </div>
        </div>

        <button
          class="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          @click.stop="addToCart"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const navigateToProduct = () => {
  // Ürün sayfasına yönlendirme
  navigateTo(`/product/${props.product.id}`);
};

const addToCart = () => {
  // Sepete ekleme fonksiyonu
  console.log("Ürün sepete eklendi:", props.product.name);
  // Burada sepete ekleme işlemi yapılabilir
};
</script>

<style scoped>
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
