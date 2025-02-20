<template>
    <div class="bg-[#339ABC] w-full min-h-auto">
        <div class="container mx-auto p-[30px_16px] lg:p-[60px]">
            <div class="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-6 items-start lg:mb-5">
                <!-- Left Column -->
                <div>
                    <h2
                        class="text-[28px] leading-[32.84px] font-medium sm:text-[36px] sm:leading-[42.12px] md:text-[44px] md:leading-[51.61px] font-sans text-white mb-5">
                        What our client say <span class="block">about us</span>
                    </h2>

                    <p
                        class="text-white mt-2 max-w-full sm:max-w-[480px] md:max-w-[560px] text-[18px] leading-[27px] font-normal sm:text-[22px] sm:leading-[33px] sm:font-normal md:text-[22px] md:leading-[33px] md:font-normal">
                        With glowing reviews, we have earned a reputation for excellence, reliability, and a
                        personalized approach that ensures every client and candidate feels valued. At Triune, we are
                        not just about filling
                        roles—we are about building long-lasting connections and empowering growth for IT professionals
                        and the
                        organizations they support.
                    </p>

                    <!-- Button with 40px gap -->
                    <div class="mt-10 flex">
                        <!-- Clients Button -->
                        <button class="w-[147px] border border-white rounded-l-lg transition duration-300"
                            :class="activeTab === 'clients' ? 'bg-white text-[#339ABC] font-semibold' : 'text-white'"
                            @click="activeTab = 'clients'">
                            Clients
                        </button>

                        <!-- Vertical Divider -->
                        <span class="w-[1px] h-[49px] bg-white"></span>

                        <!-- Consultants Button -->
                        <button class="w-[147px] border border-white rounded-r-lg transition duration-300"
                            :class="activeTab === 'consultants' ? 'bg-white text-[#339ABC] font-semibold' : 'text-white'"
                            @click="activeTab = 'consultants'">
                            Consultants
                        </button>
                    </div>

                </div>

                <!-- Right Column -->
                <div class="flex flex-col lg:items-start md:items-end w-full">
                    <!-- White Card -->
                    <div class="relative bg-white opacity-90 lg:mt-10 sm:mt-5 mb-5 rounded-md p-6 sm:p-8 
            lg:w-[619px] lg:h-[280px] sm:w-[343px] sm:h-[326px] w-full max-w-full overflow-hidden">
                        <!-- Watermark (Behind Text) -->
                        <div class="absolute top-3 right-3 opacity-80 z-0 pointer-events-none">
                            <img src="/img/icons/watermark.png"
                                class="w-[136px] h-[186px] lg:w-[135px] lg:h-[180px] object-contain">
                        </div>

                        <!-- Card Content -->
                        <div class="relative z-10">
                            <h3 class="text-[24px] leading-[36px] font-medium text-gray-800">Chief Information Officer
                            </h3>
                            <p class="text-[#606060] text-[22px] font-normal leading-[33px] mt-[10px]">
                                “Triune is a very professional resource and has exceptional technical skills that span
                                numerous applications and modules. They provide well-rounded resources and are an asset
                                to
                                any client or project team.”
                            </p>
                        </div>
                    </div>

                    <!-- Buttons Below the Card -->
                    <div class="flex space-x-4 ">
                        <!-- Backward Button -->
                        <button class="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-[#FFFFFF]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <!-- Forward Button -->
                        <button class="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-[#FFFFFF]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('clients');
</script>
