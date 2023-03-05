<template>
  <div class="bg-grayTexture py-40 flex flex-col lg:flex-row gap-40 items-center justify-center
  relative pb-52 bg-fixed px-36 text-center before:inset-x-0 before:top-0 before:bg-dashDark before:absolute before:w-1 before:h-24 before:mx-auto after:inset-x-0 after:bottom-16 after:bg-dashDark after:absolute after:w-1 after:h-24 after:mx-auto
  ">
    <div class="text-center">
      <div
        class="rounded-full bg-white flex group items-center justify-center w-40 h-40 p-8 border-4 border-gray-300 mx-auto"
      >
        <img src="../assets/images/icon1.png" alt="contact" class="group-hover:scale-150 transition-all duration-200" />
      </div>
      <h3 class="text-2xl font-medium mt-4">Call Us</h3>
      <div class="flex items-center justify-center mt-2">
        <span class="font-bold text-gray-800">New Accounts:</span>
        <span class="text-gray-500"> 1-800-123-4567</span>
      </div>
      <div class="flex items-center justify-center">
        <span class="font-bold text-gray-800">Support:</span>
        <span class="text-gray-500 mt-2"> 1-800-123-4569</span>
      </div>
    </div>
    <div class="text-center">
      <div
        class="rounded-full bg-white flex group items-center justify-center w-40 h-40 p-8 border-4 border-gray-300 mx-auto"
      >
        <img src="../assets/images/icon3.png" alt="contact" class="group-hover:scale-150 transition-all duration-200" />
      </div>
      <h3 class="text-2xl font-medium mt-4">Write Us</h3>
      <div class="mt-2 flex flex-col">
        <span class="text-gray-500"> example@example.com</span>
        <span class="text-gray-500"> example@example.com</span>
      </div>
    </div>
    <div class="text-center">
      <div
        class="rounded-full flex bg-white group items-center justify-center w-40 h-40 p-8 border-4 border-gray-300 mx-auto"
      >
        <img src="../assets/images/icon2.png" alt="contact" class="group-hover:scale-150 transition-all duration-200" />
      </div>
      <h3 class="text-2xl font-medium mt-4">Visit Us</h3>
      <div class="mt-2 flex flex-col">
        <span class="text-gray-500"> 2231 Sycamore Lake Road</span>
        <span class="text-gray-500"> Green Bay, WI 54304</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
};
</script>

<style></style>
