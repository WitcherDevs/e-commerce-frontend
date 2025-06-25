<template>
  <!-- Footer -->
  <footer class="bg-gradient-to-bl from-blue-700 to-blue-900 text-white">
    <div class="px-48 py-16">
      <div class="grid grid-cols-4 gap-8 mb-12">
        <!-- Şirket Bilgileri -->
        <div class="col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <img src="https://i.hizliresim.com/hkta4qt.jpg" alt="RiBuy Logo" class="w-10 h-10" />
            <span class="text-2xl font-bold">RiBuy</span>
          </div>
          <p class="text-blue-100 text-sm mb-6">
            Türkiye'nin en güvenilir e-ticaret platformu. Milyonlarca ürün, uygun fiyatlar ve hızlı
            teslimat.
          </p>
          <div class="flex gap-4">
            <a
              href="#"
              class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
            >
              <Icon name="mdi:facebook" size="20" />
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
            >
              <Icon name="mdi:instagram" size="20" />
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
            >
              <Icon name="mdi:twitter" size="20" />
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
            >
              <Icon name="mdi:youtube" size="20" />
            </a>
          </div>
        </div>

        <!-- Müşteri Hizmetleri -->
        <div class="col-span-1">
          <h3 class="text-lg font-semibold mb-6">Müşteri Hizmetleri</h3>
          <ul class="space-y-3 text-blue-100">
            <li>
              <a href="#" class="hover:text-white transition-colors">Sıkça Sorulan Sorular</a>
            </li>
            <li><a href="#" class="hover:text-white transition-colors">Kargo Takip</a></li>
            <li><a href="#" class="hover:text-white transition-colors">İade ve Değişim</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Müşteri Destek</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Şikayet ve Öneri</a></li>
          </ul>
        </div>

        <!-- Yasal -->
        <div class="col-span-1">
          <h3 class="text-lg font-semibold mb-6">Yasal</h3>
          <ul class="space-y-3 text-blue-100">
            <li><a href="#" class="hover:text-white transition-colors">Kullanım Koşulları</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Gizlilik Politikası</a></li>
            <li>
              <a href="#" class="hover:text-white transition-colors">KVKK Aydınlatma Metni</a>
            </li>
            <li><a href="#" class="hover:text-white transition-colors">Çerez Politikası</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Satış Sözleşmesi</a></li>
          </ul>
        </div>

        <!-- Ödeme ve Güvenlik -->
        <div class="col-span-1">
          <h3 class="text-lg font-semibold mb-6">Ödeme & Güvenlik</h3>
          <ul class="space-y-3 text-blue-100">
            <li><a href="#" class="hover:text-white transition-colors">Ödeme Yöntemleri</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Taksit Seçenekleri</a></li>
            <li><a href="#" class="hover:text-white transition-colors">SSL Güvenlik</a></li>
            <li><a href="#" class="hover:text-white transition-colors">3D Secure</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Güvenli Alışveriş</a></li>
          </ul>
        </div>
      </div>

      <!-- Ödeme Yöntemleri -->
      <div class="border-t border-blue-500 pt-6 mb-6">
        <h4 class="text-base font-semibold mb-4">Ödeme Yöntemleri</h4>
        <div class="flex flex-wrap gap-3">
          <div
            class="bg-white rounded-lg p-2 flex items-center gap-2 hover:shadow-md transition-all duration-300"
          >
            <Icon name="mdi:credit-card" size="16" class="text-blue-600" />
            <span class="text-xs font-medium text-gray-700">Kredi Kartı</span>
          </div>

          <div
            class="bg-white rounded-lg p-2 flex items-center gap-2 hover:shadow-md transition-all duration-300"
          >
            <Icon name="mdi:bank" size="16" class="text-green-600" />
            <span class="text-xs font-medium text-gray-700">Banka Kartı</span>
          </div>

          <div
            class="bg-white rounded-lg p-2 flex items-center gap-2 hover:shadow-md transition-all duration-300"
          >
            <Icon name="mdi:wallet" size="16" class="text-purple-600" />
            <span class="text-xs font-medium text-gray-700">Dijital Cüzdan</span>
          </div>

          <div
            class="bg-white rounded-lg p-2 flex items-center gap-2 hover:shadow-md transition-all duration-300"
          >
            <Icon name="mdi:cellphone" size="16" class="text-orange-600" />
            <span class="text-xs font-medium text-gray-700">Mobil Ödeme</span>
          </div>

          <div
            class="bg-white rounded-lg p-2 flex items-center gap-2 hover:shadow-md transition-all duration-300"
          >
            <Icon name="mdi:qrcode" size="16" class="text-red-600" />
            <span class="text-xs font-medium text-gray-700">QR Kod</span>
          </div>
        </div>
      </div>

      <!-- Alt Bilgi -->
      <div class="border-t border-blue-500 pt-8">
        <div class="flex justify-between items-center">
          <div class="text-blue-100 text-sm">© 2024 RiBuy. Tüm hakları saklıdır.</div>
          <div class="flex gap-6 text-blue-100 text-sm">
            <a href="#" class="hover:text-white transition-colors">İletişim</a>
            <a href="#" class="hover:text-white transition-colors">Hakkımızda</a>
            <a href="#" class="hover:text-white transition-colors">Kariyer</a>
            <a href="#" class="hover:text-white transition-colors">Basın</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component logic can be added here if needed
</script>
