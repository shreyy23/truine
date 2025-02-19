<template>
  <section class="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
    <picture>
      <source srcset="/public/img///Hero-Second_Mobile.png" media="(max-width: 768px)" />
      <img src="/public/img//Hero-Second.png" alt="Background Image" class="w-full h-full object-cover" />
    </picture>

    <div
      class="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 container mx-auto">
      <h1 class="text-[18px] leading-[27px] font-medium lg:text-[33px] lg:leading-[49.5px] md:font-bold">
        Ready to transform your career or elevate your team?
      </h1>

      <p class="hidden lg:block mt-[15px] text-[26px] leading-[39px]">
        Whether you're looking for top IT talent or the perfect career opportunity, we’ve got you covered. Send us your
        resume or schedule a consultation today and let’s make it happen!
      </p>
      <button
  class="mt-4 border border-white rounded-md bg-transparent text-white hover:bg-white hover:text-black transition  
         w-[135px] h-[40px] md:w-[168px] md:h-[47px]">
  Let's Connect
</button>

    </div>
  </section>
</template>