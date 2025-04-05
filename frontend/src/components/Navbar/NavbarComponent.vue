<template>
  <nav class="bg-white shadow-sm border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <h1 class="text-2xl font-bold text-black">Reservelt</h1>
      </div>

      <div class="hidden md:flex gap-8 items-center text-black font-semibold">
        <a href="#" class="hover:text-indigo-600 transition duration-150">Event</a>
        <a href="#" class="hover:text-indigo-600 transition duration-150">Event</a>
        <a href="#" class="hover:text-indigo-600 transition duration-150">Event</a>
        <a href="#" class="hover:text-indigo-600 transition duration-150">Event</a>
      </div>

      <div class="hidden md:flex items-center gap-4">
        <a href="#" class="text-xl font-bold text-black hover:text-indigo-600 transition duration-150">Login</a>
        <a href="#" class="text-sm font-semibold bg-black text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition duration-150">Sign Up</a>
      </div>

      <button class="md:hidden inline-flex items-center justify-center rounded-md p-2 text-black hover:text-indigo-600 hover:bg-gray-100 transition duration-150">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
