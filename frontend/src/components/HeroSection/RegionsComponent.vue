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

            <div v-for="region in regions" :key="region" @click="goToRegion(region)" class="group bg-white border border-gray-400 hover:border-blue-500 shadow-sm hover:shadow-md
            rounded-2xl h-20 sm:h-24 p-4 flex items-center justify-center cursor-pointer
            transform transition-all duration-300 hover:-translate-y-2">
                <span class="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {{ region }}
                </span>
            </div>

        </div>
    </div>
</div>
</template>

<script>
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
            ]
        }
    },
    methods: {
        goToRegion(regionName) {
            const slug = this.slugify(regionName)
            this.$router.push(`/${slug}`)
        },
        slugify(name) {
            return name
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9 ]/g, '')
                .trim()
                .replace(/\s+/g, '-')
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Inter:wght@400;600;700&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

html,
body {
    font-family: 'Open Sans', sans-serif;
}

h1 {
    font-family: 'Rubik', sans-serif;
}

p,
span {
    font-family: 'Inter', sans-serif;
}

.animate-fade-in {
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
