<template>
  <div
    class="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <!-- Softer gray/white overlay for muted background -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-200/60 to-gray-900/50 mix-blend-multiply"></div>

    <div class="relative text-center text-white px-6 z-10 max-w-2xl">
      <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-xl">
        Have a Restaurant? <br />
        Join <span class="text-blue-500">Reservelt</span>
      </h2>

      <div class="flex justify-center gap-6 mt-8">
        <button
          class="bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition-all"
        >
          Join Now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import mainPhoto from '@/assets/photos/women-cook.jpg';

export default {
  name: 'RestaurantJoinComponent',
  data() {
    return {
      backgroundImage: mainPhoto,
    };
  },
};
</script>
