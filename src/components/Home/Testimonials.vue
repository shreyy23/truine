<template>
    <div class="bg-[#339ABC] w-full min-h-auto">
        <div class="container mx-auto p-[30px_16px] lg:p-[60px]">
            <div class="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-6 items-start lg:mb-5">
                <!-- Left Column -->
                <div>
                    <h2 class="text-[28px] leading-[32.84px]  sm:text-[36px] sm:leading-[42.12px] 
                        md:text-[44px] md:leading-[51.61px]  text-white mb-[24px]">
                        Hear from those we've <span class="block">worked with!</span>
                    </h2>

                    <p class="text-[#F0F0F0] mt-2 max-w-full sm:max-w-[480px] md:max-w-[560px] text-[18px] leading-[27px] 
                        font-normal sm:text-[22px] sm:leading-[33px] md:text-[22px] md:leading-[33px]">
                        With glowing reviews, we have earned a reputation for excellence, reliability, and a
                        personalized approach that ensures every client and candidate feels valued. At Triune, we are
                        not just about filling roles—we are about building long-lasting connections and empowering
                        growth.
                    </p>

                    <!-- Toggle Buttons -->
                    <div class="mt-10 flex">
                        <button class="w-[147px] border border-white rounded-l-lg transition duration-300"
                            :class="activeTab === 'clients' ? 'bg-white text-[#339ABC] font-semibold' : 'text-white'"
                            @click="switchTab('clients')">
                            Clients
                        </button>
                        <span class="w-[1px] h-[49px] bg-white"></span>
                        <button class="w-[147px] border border-white rounded-r-lg transition duration-300"
                            :class="activeTab === 'consultants' ? 'bg-white text-[#339ABC] font-semibold' : 'text-white'"
                            @click="switchTab('consultants')">
                            Consultants
                        </button>
                    </div>
                </div>

                <!-- Right Column -->
                <div class="flex flex-col w-full items-center">
                    <!-- Testimonial Card -->
                    <div class="relative bg-white opacity-90 lg:mt-10 sm:mt-5 mb-3 rounded-md p-6 sm:p-8 
                        lg:w-[619px] lg:h-[280px] sm:w-[343px] sm:h-[326px] w-full max-w-full overflow-hidden">
                        <!-- Watermark -->
                        <div class="absolute top-3 right-3 opacity-80 z-0 pointer-events-none">
                            <img src="/img/icons/watermark.png"
                                class="w-[136px] h-[186px] lg:w-[135px] lg:h-[180px] object-contain">
                        </div>

                        <!-- Dynamic Testimonial Content -->
                        <div class="relative z-10">
                            <h3 class="text-[24px] leading-[36px] font-medium text-[#222222]">{{ activeTestimonial.title
                            }}</h3>
                            <p class="text-[#606060] text-[20px] font-normal leading-[33px] mt-[10px]">
                                {{ activeTestimonial.text }}
                            </p>
                        </div>
                    </div>

                    <!-- Navigation Buttons -->
                    <div class="w-full lg:w-[619px] flex justify-end mt-4">
                        <!-- Backward Button -->
                        <button
                            class="w-[42px] h-[42px] flex items-center justify-center rounded-full transition duration-300"
                            :class="currentIndex === 0 ? 'bg-[#ADD7E4] cursor-not-allowed' : 'bg-white'"
                            @click="prevTestimonial" :disabled="currentIndex === 0">
                            <img src="/public/img/icons/left.svg" alt="Previous" class="w-6 h-6">
                        </button>

                        <!-- Forward Button -->
                        <button
                            class="w-[42px] h-[42px] flex items-center justify-center rounded-full transition duration-300 ml-4"
                            :class="currentIndex === testimonials[activeTab].length - 1 ? 'bg-[#ADD7E4] cursor-not-allowed' : 'bg-white'"
                            @click="nextTestimonial" :disabled="currentIndex === testimonials[activeTab].length - 1">
                            <img src="/public/img/icons/Arrow/Arrow_Right_MD.svg" alt="Next" class="w-6 h-6">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Active tab state
const activeTab = ref('clients');
const currentIndex = ref(0);

// Testimonials data
const testimonials = {
    clients: [
        { title: "Chief Information Officer", text: "Triune is a very professional resource and has exceptional technical skills that span numerous applications and modules. They provide well-rounded resources and are an asset to any client or project team." },
        { title: "Senior IT Manager", text: "Working with Triune has been a game-changer for our hiring process. They consistently provide us with top-notch IT professionals who match our needs perfectly." }
    ],
    consultants: [
        { title: "IT Consultant", text: "Triune helped me find the perfect opportunity that aligned with my skills and career goals. The process was seamless, and their team was extremely supportive." },
        { title: "Software Engineer", text: "The experience with Triune was fantastic. Their guidance and support throughout the hiring process made everything smooth and stress-free." }
    ]
};

// Computed property to get the active testimonial
const activeTestimonial = computed(() => {
    return testimonials[activeTab.value][currentIndex.value];
});

// Switch tab function (reset index when switching)
const switchTab = (tab) => {
    activeTab.value = tab;
    currentIndex.value = 0; // Reset to first testimonial of new tab
};

// Methods to navigate testimonials
const prevTestimonial = () => {
    currentIndex.value = (currentIndex.value - 1 + testimonials[activeTab.value].length) % testimonials[activeTab.value].length;
};

const nextTestimonial = () => {
    currentIndex.value = (currentIndex.value + 1) % testimonials[activeTab.value].length;
};
</script>
