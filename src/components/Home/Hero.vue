<template>
    <div class="relative w-full min-h-[500px] sm:min-h-[420px] md:min-h-[600px] lg:h-[768px]">
        <!-- Background Image -->
        <div class="absolute inset-0 w-full h-full">
            <img :src="isMobile ? mobileImage : desktopImage" alt="Hero Image"
                class="w-full h-full object-cover sm:object-cover" />
        </div>

        <!-- Navbar -->
        <nav class="absolute top-0 left-0 w-full z-20 bg-transparent/25">
            <div class="container mx-auto flex items-center justify-between p-[16px] lg:py-[30px] lg:px-[60px]">
                <div class=" lg:p-0">
                    <img src="/public/img/Triune_Logo.png" class="w-[120px] h-[40px] lg:w-[200px] lg:h-[94.77px]">
                </div>
                <button v-if="isMobile" @click="toggleMenu" class="text-white text-2xl block lg:hidden">
                    ☰
                </button>
                <ul class="hidden lg:flex items-center space-x-[30px] text-white">
                    <li><a href="#" class="text-[18px] font-semibold leading-[27px] hover:text-[#339ABC]">Home</a></li>
                    <li><a href="#" class="text-[18px] font-semibold leading-[27px] hover:text-[#339ABC]">About</a></li>
                    <li>
                        <a href="#" class="text-[18px] leading-[27px] hover:text-[#339ABC] block font-semibold">
                            IT Staffing <br>
                            <span class="font-light">Solution</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="text-[18px] leading-[27px] hover:text-[#339ABC] block font-semibold">
                            IT Solution <br>
                            <span class="font-light">Reseller</span>
                        </a>
                    </li>
                    <li>
                        <button class="bg-[#339ABC] w-[146px] h-[49px] text-white px-4 py-2 rounded-md font-semibold">
                            Find Jobs
                        </button>
                    </li>
                </ul>
            </div>
        </nav>


        <!-- Full-Screen Sidebar (Mobile Menu) -->
        <div class="fixed inset-0 bg-white z-30 flex flex-col items-center justify-center transform transition-transform duration-300"
            :class="menuOpen ? 'translate-y-0' : '-translate-y-full'">
            <button @click="toggleMenu"
                class="absolute top-6 right-6 text-3xl font-bold text-gray-700 hover:text-gray-900">
                ✖
            </button>
            <ul class="flex flex-col items-center space-y-6 text-gray-900 text-2xl font-semibold tracking-wide">
                <li class="w-full text-center">
                    <a href="#"
                        class="block py-4 w-full hover:bg-[#339ABC] hover:text-white transition-all rounded-md">Home</a>
                </li>
                <li class="w-full text-center">
                    <a href="#"
                        class="block py-4 w-full hover:bg-[#339ABC] hover:text-white transition-all rounded-md">About</a>
                </li>
                <li class="w-full text-center">
                    <a href="#"
                        class="block py-4 w-full hover:bg-[#339ABC] hover:text-white transition-all rounded-md">IT
                        Staffing Solution</a>
                </li>
                <li class="w-full text-center">
                    <a href="#"
                        class="block py-4 w-full hover:bg-[#339ABC] hover:text-white transition-all rounded-md">IT
                        Solution Reseller</a>
                </li>
                <li class="w-full text-center mt-6">
                    <button
                        class="bg-[#339ABC] w-[200px] h-[50px] text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md hover:bg-[#257A8A] transition-all">
                        Find Jobs
                    </button>
                </li>
            </ul>
        </div>

        <!-- Hero Content -->
        <div class="container mx-auto">
            <div class="relative flex items-start sm:justify-center md:justify-start md:pl-[60px] md:pt-[308px]">
                <div class="hidden md:flex w-[343px] h-[222px] text-white flex-col items-start gap-[10px]
    md:w-[686px] md:h-[390px] md:gap-[20px]">
                    <!-- Button -->
                    <button class="w-[153px] h-[26px] text-[12px] rounded-[64px] border border-[#339ABC] bg-[#339ABC1A] flex items-center justify-center
        md:w-[213px] md:h-[40px] md:text-base">
                        IT Staffing Simplified
                    </button>
                    <!-- Heading -->
                    <h1 class="text-[30px] leading-[35.19px] font-medium font-sans md:text-[60px] md:leading-[70.38px]">
                        Transforming Careers Since 2005
                    </h1>
                    <!-- Paragraph -->
                    <p class="text-[14px] leading-[23.8px] font-normal md:text-[20px] md:leading-[34px] 
        lg:border-l-2 lg:border-[#339ABC] lg:pl-[10px]">
                        At Triune, we have been staffing the right way for nearly two decades. Whether
                        you're seeking your next big career opportunity or looking to take your current role to new
                        heights.
                    </p>
                </div>

            </div>
        </div>


    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const menuOpen = ref(false);
const toggleMenu = () => menuOpen.value = !menuOpen.value;

const mobileImage = 'public/img/HeroBgMobile.png';
const desktopImage = 'public/img/HeroBg.png';

const isMobile = ref(false);
const checkScreen = () => {
    isMobile.value = window.innerWidth < 1024;
    if (!isMobile.value) {
        menuOpen.value = false;
    }
};

onMounted(() => {
    checkScreen();
    window.addEventListener('resize', checkScreen);
});
</script>
