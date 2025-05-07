<template>
  <div
    class="flex dark:bg-emerald-950 bg-emerald-200 justify-center items-center h-screen px-2 sm:px-4"
  >
    <div
      class="bg-green-600 items-center justify-center flex flex-col w-full p-4 space-y-4 rounded-xl text-white text-sm shadow-2xl outline-1 outline-green-700"
    >
      <h1 class="font-bold text-6xl text-center">404</h1>
      <h1 class="font-bold text-xl text-center">Page Not Found</h1>
      <p class="text-center text-md">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
        voluptas eveniet excepturi ipsam eligendi libero exercitationem
        voluptatem consequatur nobis beatae aperiam sit repellendus vero, earum
        pariatur inventore? Ipsum perferendis sunt distinctio facere ducimus,
        porro ab sint beatae at quia esse minima mollitia, ipsam harum dicta
        deserunt, neque earum odit. Iusto.
      </p>
      <span
        class="bg-yellow-500 w-1/2 shadow-xl p-2 rounded-full items-center flex justify-center sm:text-lg"
      >
        <router-link to="/dashboard">Back</router-link></span
      >
    </div>
  </div>
</template>
