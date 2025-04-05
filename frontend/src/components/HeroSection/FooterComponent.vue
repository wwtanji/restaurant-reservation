<template>
  <footer class="bg-gray-900 text-gray-400">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div>
          <h2 class="text-white text-2xl font-semibold mb-4">ReserveIt</h2>
          <p class="text-sm">
            Elegantná platforma pre správu rezervácií. Spoľahlivá. Rýchla. Jednoduchá.
          </p>
        </div>

        <div>
          <h3 class="text-white font-medium mb-3">Spoločnosť</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white transition">O nás</a></li>
            <li><a href="#" class="hover:text-white transition">Kariéra</a></li>
            <li><a href="#" class="hover:text-white transition">Tlačové centrum</a></li>
            <li><a href="#" class="hover:text-white transition">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-medium mb-3">Podpora</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white transition">Kontakt</a></li>
            <li><a href="#" class="hover:text-white transition">Centrum pomoci</a></li>
            <li><a href="#" class="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-medium mb-3">Odoberať novinky</h3>
          <form @submit.prevent class="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <input
              type="email"
              placeholder="Email"
              class="w-full sm:w-auto px-4 py-2 rounded-md bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Odoslať
            </button>
          </form>
        </div>
      </div>

      <div class="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© {{ new Date().getFullYear() }} ReserveIt. Všetky práva vyhradené.</p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="#" class="hover:text-white transition">Facebook</a>
          <a href="#" class="hover:text-white transition">Twitter</a>
          <a href="#" class="hover:text-white transition">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>
