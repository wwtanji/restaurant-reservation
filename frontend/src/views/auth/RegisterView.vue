<template>
<div class="min-h-screen flex items-center justify-center bg-white p-6">
    <div class="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 sm:p-10">
        <div class="text-center mb-8">
            <h2 class="text-4xl font-extrabold text-gray-800">Sign Up</h2>
            <p class="mt-2 text-gray-500">Start now and get 5% off your first order.</p>
        </div>

        <div class="flex gap-4 justify-center mb-6">
            <button class="flex items-center justify-center gap-2 border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all w-1/2">
                <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" />
                <span class="text-sm font-medium text-gray-700">Google</span>
            </button>
            <button class="flex items-center justify-center gap-2 border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all w-1/2">
                <img src="https://img.icons8.com/color/24/000000/discord-logo.png" alt="Discord" />
                <span class="text-sm font-medium text-gray-700">Discord</span>
            </button>
        </div>

        <div class="flex items-center text-sm text-gray-400 mb-6">
            <hr class="flex-grow border-gray-300" />
            <span class="mx-3">OR</span>
            <hr class="flex-grow border-gray-300" />
        </div>

        <form @submit.prevent="signup" class="space-y-4">
            <input type="email" placeholder="Email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
            <input type="text" placeholder="Username" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
            <input type="password" placeholder="Password" class="w-full px-4 py-3
          border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />

            <button type="submit" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 rounded-xl transition-all shadow-md">
                Create account
            </button>
        </form>

        <p class="text-center text-sm text-gray-500 mt-6">
            Already have an account?
            <router-link to="/login" class="text-blue-600 font-semibold hover:underline">Log In</router-link>
        </p>
    </div>
</div>
</template>

<script>
export default {

    name: 'SignUpComponent',
    methods: {
        signup() {}
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

* {
    font-family: 'Inter', sans-serif;
}
</style>
