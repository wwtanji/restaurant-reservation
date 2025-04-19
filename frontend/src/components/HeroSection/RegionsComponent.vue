<script lang="ts">
export default {
  name: 'LandingComponent',
  data() {
    return {
      regions: [
        'Bratislavský kraj',
        'Trnavský kraj',
        'Trenčiansky kraj',
        'Nitriansky kraj',
        'Žilinský kraj',
        'Banskobystrický kraj',
        'Prešovský kraj',
        'Košický kraj'
      ],
      regionRoutes: {
        'Bratislavský kraj': 'bratislava',
        'Trnavský kraj': 'trnava',
        'Trenčiansky kraj': 'trencin',
        'Nitriansky kraj': 'nitra',
        'Žilinský kraj': 'zilina',
        'Banskobystrický kraj': 'banskabystrica',
        'Prešovský kraj': 'presov',
        'Košický kraj': 'kosice'
      }
    }
  },
  methods: {
    goToRegion(regionName) {
      const routeName = this.regionRoutes[regionName]
      if (routeName) {
        this.$router.push({ name: routeName })
      } else {
        console.warn(`No route defined for ${regionName}`)
      }
    }
  }
}
</script>


<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <div class="max-w-6xl mx-auto px-6 py-10 text-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">

        <div class="col-span-full">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-black text-transparent bg-clip-text">
            Choose Your Location
          </h1>
        </div>

        <div class="col-span-full mb-10">
          <p class="text-gray-800 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Reserve tables at over
            <span class="font-semibold text-blue-600">8,000 restaurants</span> across
            <span class="font-semibold text-blue-600">8 regions</span> in Slovakia.
          </p>
        </div>

        <div
          v-for="region in regions"
          :key="region"
          @click="goToRegion(region)"
          class="group bg-white border border-gray-400 hover:border-blue-500 shadow-sm hover:shadow-md
          rounded-2xl h-20 sm:h-24 p-4 flex items-center justify-center cursor-pointer
          transform transition-all duration-300 hover:-translate-y-2"
        >
          <span class="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {{ region }}
          </span>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

html,
body {
  font-family: 'DM Sans', sans-serif;
}

h1 {
  font-family: 'Lato', sans-serif;
}

p,
span,
button,
input {
  font-family: 'DM Sans', sans-serif;
}

.animate-fade-in {
    animation: fadeIn 1s ease-in-out;
}
</style>
