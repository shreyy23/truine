<template>
    <div class="container mx-auto text-center p-[30px_16px] lg:p-[60px]">
        <!-- Centered Button -->
        <div class="flex justify-center mb-[40px]">
            <button class="w-44 h-10  font-medium  rounded-full border border-[#339ABC] bg-[#339ABC1A] text-sm cursor-default">
                Our Valued Clients
            </button>

        </div>

        <!-- Responsive Grid Layout for 10 Images -->
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-y-12 place-items-center">
            <img v-for="(image, index) in visibleImages" :key="index" :src="image"
                class="w-[90px] md:w-28 lg:w-32 object-contain" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const images = [
    "/clients/client1.png",
    "/clients/client2.png",
    "/clients/client3.png",
    "/clients/client4.png",
    "/clients/client1.png",
    "/clients/client4.png",
    "/clients/client3.png",
    "/clients/client2.png",
    "/clients/client1.png",
    "/clients/client4.png"
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
