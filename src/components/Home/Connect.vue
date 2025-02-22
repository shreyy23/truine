<template>
  <section class="relative w-full h-[410px]">
    <picture>
      <source srcset="/public/img/Hero-Second_Mobile.png" media="(max-width: 768px)" />
      <img src="/public/img/Hero-Second.png" alt="Background Image" class="w-full h-[410px] object-cover" />
    </picture>

    <!-- Wrapper to center content -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="container mx-auto px-4 lg:px-[60px] text-white text-center">
        <div class="w-full max-w-[1260px] flex flex-col items-center justify-center gap-5 mx-auto">
          <h1 class="text-[18px] leading-[27px] font-bold lg:text-[33px] lg:leading-[49.5px] ">
            Ready to transform your career or elevate your team?
          </h1>

          <p class="hidden lg:block text-[26px] leading-[39px]">
            Whether you're looking for top IT talent or the perfect career opportunity, we’ve got you covered.
            Send us your resume or schedule a consultation today and let’s make it happen!
          </p>

          <button
            class="border border-white rounded-md bg-transparent text-white hover:bg-white hover:text-black transition  
                   w-[135px] h-[40px] md:w-[168px] md:h-[47px]"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
