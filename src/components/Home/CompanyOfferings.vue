<template>
  <section class="bg-[#F3FEFF] ">
    <div class="container mx-auto p-[30px_16px] lg:p-[60px]">
      <!-- Centered Button -->
      <div class="flex justify-center">
        <button class="w-[170px] h-[38px] rounded-[64px] border border-[#339ABC] bg-[#339ABC1A] mb-[30px]">
          What we offer
        </button>
      </div>

      <!-- Cards Container -->
      <div class="w-full flex flex-wrap justify-center lg:justify-between gap-[20px] lg:gap-[40px]">
        <!-- Card 1 -->
        <div class="bg-white rounded-xl overflow-hidden flex 
              w-[343px] h-[285px] 
              md:w-[603px] md:h-[314px]">
          <!-- Left Side: Text -->
          <div class="flex flex-col justify-between 
                p-[20px_16px] md:p-[32px] 
                w-[233px] h-[285px] 
                md:w-[449px] md:h-[314px]">
            <img src="/public/img/icons/offer1_icon.png" alt="Logo" class="w-[50px] h-[50px] mb-[10px]" />
            <div class="w-[201px] h-[155px] md:w-[385px] md:h-[186px] ">
              <h3 class="heading-text text-[18px] leading-[24.55px] font-semibold 
   md:text-[25px] md:leading-[34.1px] mb-[10px]">
                IT Staffing
              </h3>
              <p class="custom-text text-[16px] leading-[24px] font-normal font-['Nunito Sans']
   md:text-[21px] md:leading-[31.5px]">
                Triune provides expert IT staffing solutions, matching top talent with businesses for innovation and
                success.
              </p>
            </div>
            <span class="w-[12.73px] h-[12.73px] 
       md:w-[24px] md:h-[24px] ">
              ↗
            </span>

          </div>
          <!-- Right Side: Full Image -->
          <div class="w-[110px] h-[285px] md:w-[154px] md:h-[314px]">
            <img src="/public/img/icons/offer1.png" alt="Image" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-xl overflow-hidden flex 
              w-[343px] h-[285px] 
              md:w-[603px] md:h-[314px]">
          <!-- Left Side: Text -->
          <div class="flex flex-col justify-between 
                p-[20px_16px] md:p-[32px] 
                w-[233px] h-[285px] 
                md:w-[449px] md:h-[314px]">
            <img src="/public/img/icons/offer2_icon.png" alt="Logo" class="w-[50px] h-[50px] mb-[10px]" />
            <div class="w-[201px] h-[155px] md:w-[385px] md:h-[186px]">
              <h3 class="heading-text text-[18px] leading-[24.55px] font-semibold 
   md:text-[25px] md:leading-[34.1px] mb-[10px]">
                IT Solution Reseller
              </h3>
              <p class="custom-text text-[16px] leading-[24px] font-normal font-['Nunito Sans']
   md:text-[21px] md:leading-[31.5px]">
                Triune simplifies IT procurement, offering software, cloud, and infrastructure solutions with seamless
                support.
              </p>
            </div>

            <span class="w-[12.73px] h-[12.73px] 
       md:w-[24px] md:h-[24px] ">
              ↗
            </span>

          </div>
          <!-- Right Side: Full Image -->
          <div class="w-[110px] h-[285px] md:w-[154px] md:h-[314px]">
            <img src="/public/img/icons/offer3.png" alt="Image" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
