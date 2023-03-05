<template>
  <navBar
    class="flex items-center justify-between bg-primary text-white 2xl:px-11 px-3 py-5"
  >
    <a class="cursor-pointer">
      <img src="../assets/images/logo.png" alt="logo" />
    </a>
    <ul class="hidden xl:flex items-center gap-20 font-bold">
      <li
        class="relative cursor-pointer hover:text-secondary after:w-1 after:h-1 after:top-3 after:-right-10 after:bg-white after:rounded-full after:absolute"
      >
        <a>Home</a>
      </li>
      <li
        class="relative cursor-pointer hover:text-secondary after:w-1 after:h-1 after:top-3 after:-right-10 after:bg-white after:rounded-full after:absolute"
      >
        <a>About</a>
      </li>
      <li
        class="relative cursor-pointer hover:text-secondary after:w-1 after:h-1 after:top-3 after:-right-10 after:bg-white after:rounded-full after:absolute"
      >
        <a>Services</a>
      </li>
      <li
        class="relative cursor-pointer hover:text-secondary after:w-1 after:h-1 after:top-3 after:-right-10 after:bg-white after:rounded-full after:absolute"
      >
        <a>Works</a>
      </li>
      <li
        class="relative cursor-pointer hover:text-secondary after:w-1 after:h-1 after:top-3 after:-right-10 after:bg-white after:rounded-full after:absolute"
      >
        <a>Pages</a>
      </li>
      <li
        class="relative cursor-pointer hover:text-secondary after:w-1 after:h-1 after:top-3 after:-right-10 after:bg-white after:rounded-full after:absolute"
      >
        <a>Blog</a>
      </li>
      <li
        class="relative cursor-pointer hover:text-secondary after:w-1 after:h-1 after:top-3 after:-right-10 after:bg-white after:rounded-full after:absolute"
      >
        <a>Contacts</a>
      </li>
      <li class="relative cursor-pointer hover:text-secondary">
        <a>Features</a>
      </li>
    </ul>
    <div class="flex items-center gap-3">
      <a class="sm:flex hidden items-center text-2xl">
        <span class="text-secondary">1-800</span>
        <span>-123-4567</span>
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="currentColor"
        class="bi bi-list cursor-pointer text-white xl:hidden active:bg-secondary rounded-lg"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </div>
  </navBar>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style></style>
