<template>
  <div class="flex items-center justify-center relative overflow-x-hidden">
    <!-- Left Background (Blue) -->
    <div class="absolute inset-y-0 left-0 w-screen bg-[#339abc] -translate-x-1/2 z-0 hidden lg:block"></div>

    <!-- Right Background (Light Blue) -->
    <div class="absolute inset-y-0 right-0 w-screen bg-[#EBF5F8] translate-x-1/2 z-0 hidden lg:block"></div>

    <!-- Footer Content -->
    <div class="w-full max-w-[1366px] h-auto lg:h-[610px] flex flex-col lg:flex-row justify-start items-end relative z-10">
      <!-- Left Section -->
      <div
        class="w-full lg:w-[690px] h-auto lg:h-[610px] px-10 lg:px-[100px] py-20 lg:py-[85px] bg-[#339abc] lg:rounded-tr-xl flex flex-col justify-start items-start gap-2.5 overflow-hidden mobile-no-radius">
        <div class="w-full h-auto flex flex-col justify-start items-start gap-10">
          <div class="w-full h-auto flex flex-col justify-start items-center gap-4">
            <div class="w-full text-white text-3xl lg:text-[54px] font-bold leading-tight lg:leading-[81px]">
              Ready to transform your career or elevate your team?
            </div>
          </div>
          <button class="px-8 py-3.5 rounded-lg border-2 border-white flex justify-center items-center gap-4 overflow-hidden
         hover:bg-white transition duration-300 text-white font-bold hover:text-[#339abc]">Let’s Connect
</button>
        </div>
      </div>

      <!-- Right Section -->
      <div
        class="w-full lg:w-auto lg:flex-1 px-6 lg:px-[60px] py-6 lg:py-[30px] bg-[#EBF5F8] lg:rounded-tr-lg flex flex-col justify-center items-start gap-10 overflow-hidden">
        <div class="w-full flex flex-col justify-start items-start gap-8">
          <img class="w-[155px] h-[45.27px]" src="/public/img/icons/color_logo.png" alt="Logo" />
        </div>
        <div class="w-full h-auto flex flex-col justify-start items-start gap-8">
          <div class="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
            <!-- Pages Section -->
            <div class="flex flex-col justify-start items-start gap-5">
              <div class="text-[#222222] text-2xl font-semibold ">Pages</div>
              <div class="text-[#222222] text-xl font-medium ">IT Staffing</div>
              <div class="text-[#222222] text-xl font-medium ">IT Solutions Reseller</div>
              <div class="text-[#222222] text-xl font-medium ">About us</div>
              <div class="text-[#222222] text-xl font-medium ">Privacy policy</div>
            </div>

            <!-- Jobs Section -->
            <div class="flex flex-col justify-start items-start gap-5">
              <div class="text-[#222222] text-2xl font-semibold ">Jobs</div>
              <div class="flex justify-start items-center gap-2">
                <span class="text-[#222222] text-xl font-medium ">Job Portal</span>
              </div>
              <div class="text-[#222222] text-xl font-medium ">Referrals</div>
            </div>
          </div>

          <!-- Contact Section -->
          <div class="w-full flex flex-col justify-start items-start gap-8">
            <div class="w-full flex flex-col lg:flex-row justify-between gap-8">
              <div class="flex items-center gap-4">
                <img class="w-7 h-7" src="/public/img/icons/mail.svg" alt="Email Icon" />
                <span class="text-[#222222] text-lg font-medium ">admin@triuneinfomatics.com</span>
              </div>
              <div class="flex gap-4">
                <img class="w-7 h-7" src="/public/img/icons/phone-calling.svg" alt="Phone Icon" />
                <span class="text-[#222222] text-lg font-medium ">(510) 854-8766</span>
              </div>
            </div>

            <div class="w-full flex flex-col lg:flex-row justify-between gap-8">
              <div class="flex items-center gap-4">
                <img class="w-7 h-7" src="/public/img/icons/location.svg" alt="Location Icon" />
                <span class="text-[#222222] text-lg font-medium">
                  39111 Paseo Padre Parkway<br />Fremont, CA 94538
                </span>
              </div>

              <!-- Social Media Icons -->
              <div class="w-[171px] flex flex-col justify-center items-start gap-10">
                <div class="flex gap-6">
                  <div class="w-12 h-12 flex items-center justify-center rounded-full border border-black">
                    <img class="w-6 h-6" src="/public/img/icons/Facebook.svg" alt="Facebook Icon" />
                  </div>

                  <div class="w-12 h-12 flex items-center justify-center rounded-full border border-black">
                    <img class="w-6 h-6" src="/public/img/icons/LinkedIn.svg" alt="LinkedIn Icon" />
                  </div>

                  <div class="w-12 h-12 flex items-center justify-center rounded-full border border-black">
                    <img class="w-6 h-6" src="/public/img/icons/Twitter.svg" alt="Twitter Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="w-full text-[#222222] text-lg font-normal">
          2024 © All rights reserved by Triune Infomatics
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResponsiveLayout",
};
</script>

<style scoped>
/* Remove border radius on mobile view for the left section */
@media (max-width: 1023px) {
  .mobile-no-radius {
    border-radius: 0 !important;
  }
}
</style>
