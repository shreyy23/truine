<template>
    <section class="bg-white p-[30px_16px] lg:p-[60px] mx-auto max-w-screen-xl">
        <!-- Centered Button -->
        <div class="flex justify-center mb-[40px]">
            <button class="w-[195px] h-[38px] font-medium  rounded-full border border-[#339ABC] bg-[#339ABC1A] cursor-default">
                The Triune Advantage
            </button>
        </div>

        <!-- Content Container -->
        <div class="flex flex-col md:flex-row items-center justify-between md:gap-16 lg:gap-20">
            <!-- Left Column (Image) -->
            <div class="w-full md:w-3/5 flex-1">
                <img src="/public/img/advantageSection.png" alt="Experience Image" 
                    class="w-full h-auto object-cover rounded-lg min-h-[350px] md:min-h-[400px]">
            </div>

            <!-- Right Column (Text) -->
            <div class="w-full md:w-2/5 flex flex-col justify-center text-center md:text-left flex-1 min-h-[350px] md:min-h-[400px]">
                <div>
                    <h4 class="text-[24px] leading-[30px] md:text-[52px] md:leading-[61px] font-semibold text-[#339ABC] mb-5">
                        20 Years Experience
                    </h4>
                    <p class="text-[18px] leading-[28px] md:text-[22px] md:leading-[33px] font-normal text-[#606060] mb-5">
                        With a proven track record and an unwavering commitment to excellence, Triune Infomatics
                        delivers staffing solutions that exceed expectations. Experience the difference with a partner
                        who prioritizes your success at every step.
                    </p>
                </div>
                <button class="bg-[#339ABC] w-[160px] h-[45px] md:w-[179px] md:h-[49px] text-white px-6 py-3 rounded-md self-center md:self-start font-semibold">
                    Explore More
                </button>
            </div>
        </div>
    </section>
</template>
