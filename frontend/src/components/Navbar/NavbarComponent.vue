<template>
  <nav class="bg-white shadow-md border-b-2 border-gray-300">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <h1 class="text-3xl font-extrabold text-black">Reservelt</h1>
      </div>

      <div class="hidden md:flex gap-10 items-center text-black font-semibold">
        <a href="#" class="hover:text-blue-700 transition duration-200">Discover</a>
        <a href="#" class="hover:text-blue-700 transition duration-200">Events</a>
        <a href="#" class="hover:text-blue-700 transition duration-200">Pricing</a>
        <a href="#" class="hover:text-blue-700 transition duration-200">Contact</a>
      </div>

      <div class="hidden md:flex items-center gap-6">
        <router-link
          to="/login"
          class="text-md font-semibold text-black hover:text-gray-600 transition duration-200"
        >
          Login
        </router-link>

        <router-link
          to="/signup"
          class="text-md font-semibold bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-200 shadow-lg"
        >
          Sign Up
        </router-link>
      </div>

      <button
        class="md:hidden inline-flex items-center justify-center rounded-md p-2 text-black hover:text-gray-600 hover:bg-gray-100 transition duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
};
</script>
