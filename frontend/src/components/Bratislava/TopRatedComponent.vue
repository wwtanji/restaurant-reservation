<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MoreRestaurants from './MoreRestaurantsButton.vue'

const router = useRouter()

const restaurants = ref([
  {
    name: 'Modrá Hviezda',
    cuisine: 'Slovak',
    price: '€€',
    rating: 5.6,
    reviews: 487,
    image: '',
    district: 'Staré Mesto'
  },
  {
    name: 'Urban House',
    cuisine: 'International',
    price: '€€€',
    rating: 5.8,
    reviews: 211,
    image: '',
    district: 'Kapitulska'
  },
  {
    name: 'Zylinder',
    cuisine: 'Austro-Hungarian',
    price: '€€€',
    rating: 5.7,
    reviews: 341,
    image: '',
    district: 'Hviezdoslavovo nám.'
  },
  {
    name: 'Bratislava Flagship',
    cuisine: 'Traditional Slovak',
    price: '€€',
    rating: 5.5,
    reviews: 169,
    image: '',
    district: 'Nám. SNP'
  }
])

function handleClick(restaurant) {
  console.log('Clicked:', restaurant.name)
}

function loadMore() {
  router.push('/')
}
</script>

<template>
  <section class="bg-white py-12 px-4 sm:px-8 lg:px-20">
    <h2 class="text-center text-3xl sm:text-4xl font-semibold mb-6">
      Explore our
      <span class="text-blue-500">restaurant guide</span>
      to <span class="text-gray-900">Bratislava</span>
    </h2>
    <p class="text-center text-gray-500 mb-10 text-sm sm:text-base">
      Book a table at some of Bratislava’s most-loved restaurants.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
      <div
        v-for="(restaurant, index) in restaurants"
        :key="index"
        @click="handleClick(restaurant)"
        class="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
      >
        <img
          :src="restaurant.image"
          :alt="restaurant.name"
          class="w-full h-36 object-cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold truncate">{{ restaurant.name }}</h3>
          <div class="flex justify-between text-sm mt-1 text-gray-600">
            <div>
              <p>{{ restaurant.district }}</p>
              <p class="text-gray-500">
                {{ restaurant.cuisine }} · {{ restaurant.price }}
              </p>
            </div>
            <div class="flex flex-col items-end justify-center">
              <div class="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                {{ restaurant.rating.toFixed(1) }}/6
              </div>
              <div class="flex items-center text-gray-400 text-xs mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7l-4 4V10a2 2 0 012-2h2m0-4h10a2 2 0 012 2v0a2 2 0 01-2 2H7a2 2 0 01-2-2v0a2 2 0 012-2z"
                  />
                </svg>
                {{ restaurant.reviews }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-start">
      <MoreRestaurants @click="loadMore" />
    </div>
  </section>
</template>
