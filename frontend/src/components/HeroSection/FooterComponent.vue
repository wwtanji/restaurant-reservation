<template>
<footer class="bg-gray-900 text-gray-400">
    <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
            <div>
                <div class="flex items-center gap-3 mb-4">
                    <h2 class="text-white text-2xl font-bold">ReserveIt</h2>
                </div>
                <p class="text-sm leading-relaxed">
                    Tvoja obľúbená aplikácia na rezerváciu reštaurácií.
                    Pohodlne. Rýchlo. S úsmevom.
                </p>
            </div>

            <div>
                <h3 class="text-white text-lg font-semibold mb-4">O nás</h3>
                <ul class="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Príbeh značky</a></li>
                    <li><a href="#" class="hover:text-white transition">Tím</a></li>
                    <li><a href="#" class="hover:text-white transition">Partnerstvá</a></li>
                    <li><a href="#" class="hover:text-white transition">Blog</a></li>
                </ul>
            </div>

            <div>
                <h3 class="text-white text-lg font-semibold mb-4">Pomoc & Podpora</h3>
                <ul class="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Kontakt</a></li>
                    <li><a href="#" class="hover:text-white transition">Centrum pomoci</a></li>
                    <li><a href="#" class="hover:text-white transition">Zásady ochrany osobných údajov</a></li>
                    <li><a href="#" class="hover:text-white transition">Obchodné podmienky</a></li>
                </ul>
            </div>

            <div>
                <h3 class="text-white text-lg font-semibold mb-4">Zostaň v spojení</h3>
                <form @submit.prevent class="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <input type="email" placeholder="Tvoj email" class="w-full sm:w-auto px-4 py-2 rounded-md bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button type="submit" class="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                        Odoslať
                    </button>
                </form>
                <p class="text-xs mt-3 text-gray-500">Bez spamu, len chutné novinky ✨</p>
            </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
            <div class="flex items-center space-x-6 text-sm text-gray-500 mb-4 md:mb-0">
                <a href="#" class="hover:text-white transition">App Store</a>
                <a href="#" class="hover:text-white transition">Google Play</a>
            </div>

            <div class="flex items-center space-x-4 text-gray-500">
                <a href="#" class="hover:text-white transition">Facebook</a>
                <a href="#" class="hover:text-white transition">Instagram</a>
                <a href="#" class="hover:text-white transition">Twitter</a>
            </div>
        </div>

        <div class="mt-6 text-center text-xs text-gray-500">
            © {{ new Date().getFullYear() }} ReserveIt. Všetky práva vyhradené.
        </div>
    </div>
</footer>
</template>

<script>
export default {
    name: 'FooterComponent',
}
</script>
