<template>
    <div class="relative w-full min-h-[500px] sm:min-h-[420px] md:min-h-[600px] lg:h-[768px]">
        <!-- Background Image -->
        <div class="absolute inset-0 w-full h-full">
            <img :src="isMobile ? mobileImage : desktopImage" alt="Hero Image"
                class="w-full h-full object-cover sm:object-cover" />
        </div>

        <!-- Navbar -->
        <nav class="absolute top-0 left-0 w-full z-20 bg-transparent/25">
            <div class="container mx-auto flex items-center justify-between p-[8px]  lg:px-[60px]">
                <div class=" lg:p-0">
                    <img src="/img/Triune_Logo.png" class="w-[100px] h-[55px] lg:w-[200px] lg:h-[94.77px]">
                </div>
                <button v-if="isMobile" @click="toggleMenu" class="text-white text-2xl block lg:hidden">
                    ☰
                </button>
                <ul class="hidden lg:flex items-center space-x-[30px] text-white">
                    <li><a href="#" class="text-[18px] font-medium leading-[27px] hover:text-[#339ABC]">Home</a></li>
                    <li><a href="#" class="text-[18px] font-medium leading-[27px] hover:text-[#339ABC]">About</a></li>
                    <li>
                        <a href="#" class="text-[18px] leading-[27px] hover:text-[#339ABC] block font-medium">
                            IT Staffing <br>
                            <span class="font-light">Solution</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="text-[18px] leading-[27px] hover:text-[#339ABC] block font-medium">
                            IT Solution <br>
                            <span class="font-light">Reseller</span>
                        </a>
                    </li>
                    <li>
                        <button class="bg-[#339ABC] w-[146px] h-[49px] text-white px-4 py-2 rounded-md font-medium">
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
        class="absolute top-6 right-6 text-xl font-normal text-gray-700 hover:text-gray-900">
        ✖
    </button>
    <ul class="flex flex-col items-center text-gray-900 text-lg font-normal w-full">
        <li class="w-full border-t border-gray-300 text-center">
            <a href="#" class="block py-3 w-full hover:text-[#339ABC] font-medium transition-all">Home</a>
        </li>
        <li class="w-full border-t border-gray-300 text-center">
            <a href="#" class="block py-3 w-full hover:text-[#339ABC] font-medium transition-all">About</a>
        </li>
        <li class="w-full border-t border-gray-300 text-center">
            <a href="#" class="block py-3 w-full hover:text-[#339ABC] font-medium transition-all">IT Staffing Solution</a>
        </li>
        <li class="w-full border-t border-gray-300 text-center border-b">
            <a href="#" class="block py-3 w-full hover:text-[#339ABC] font-medium transition-all">IT Solution Reseller</a>
        </li>
        <li class="w-full text-center mt-4">
            <button
                class="bg-[#339ABC] w-[180px] h-[45px] text-white text-base font-medium px-4 py-2 rounded-lg shadow-md hover:bg-[#257A8A] transition-all">
                Find Jobs
            </button>
        </li>
    </ul>
</div>

        <!-- Hero Content -->
        <div class="container mx-auto">
            <div class="relative flex items-start sm:justify-center md:justify-start md:pl-[60px] md:pt-[308px]">
                <div class="md:flex w-[343px] h-[222px] text-white flex-col items-start gap-[10px]
    md:w-[686px] md:h-[390px] md:gap-[20px]">
                    <!-- Button -->
                    <button class="it-button w-[153px] h-[26px] text-[12px] font-medium rounded-[64px] border border-[#339ABC] bg-[#339ABC1A] flex items-center justify-center
        md:w-[213px] md:h-[40px] md:text-base cursor-default">
                        IT Staffing Simplified
                    </button>
                    <!-- Heading -->
                    <h1 class="text-[30px] leading-[35.19px] font-medium  md:text-[60px] md:leading-[70.38px]">
                        Transforming Careers Since 2005
                    </h1>
                    <!-- Paragraph -->
                    <p class="text-[14px] leading-[23.8px] font-normal md:text-[20px] md:leading-[34px] 
        lg:border-l-2 lg:border-[#339ABC] lg:pl-[10px]">
                        At Triune, we have been staffing the right way for nearly two decades. Whether you're seeking
                        your next big career opportunity or looking to take your current role to new heights, we are
                        committed to helping you find the perfect job— or a better one if you're already employed.
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

const mobileImage = '/img/HeroBgMobile.png';
const desktopImage = '/img/HeroBg.png';

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
<style scoped>
    @media (max-width: 767px) {
        .relative {
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 20;
            padding-top: 55px;
        }
        h1 {
            margin-bottom: 20px;
        }
        .it-button{
            margin-bottom: 7px;
        }
    }
</style>