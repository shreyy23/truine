<template>
    <div class="container mx-auto text-center p-[30px_16px] lg:p-[60px]">
        <!-- Centered Button -->
        <div class="flex justify-center mb-6">
            <button class="w-44 h-10 rounded-full border border-[#339ABC] bg-[#339ABC1A] text-sm">
                Our Valued Clients
            </button>
        </div>

        <!-- Responsive Grid Layout for 10 Images -->
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-y-12 place-items-center">
            <img 
                v-for="(image, index) in visibleImages" 
                :key="index" 
                :src="image" 
                class="w-24 md:w-28 lg:w-32 object-contain"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const images = [
    "/public/clients/client1.png",
    "/public/clients/client2.png",
    "/public/clients/client3.png",
    "/public/clients/client4.png",
    "/public/clients/client1.png",
    "/public/clients/client4.png",
    "/public/clients/client3.png",
    "/public/clients/client2.png",
    "/public/clients/client1.png",
    "/public/clients/client4.png"
];

const windowWidth = ref(window.innerWidth);

// Update window width on resize
const updateWidth = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateWidth);
});

// Computed property to show only 9 images on small screens
const visibleImages = computed(() => {
    return windowWidth.value < 768 ? images.slice(0, 9) : images;
});
</script>
