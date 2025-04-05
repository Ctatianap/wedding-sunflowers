<script setup>
const sizeScreen = screen.width
</script>

<template>
  <section class="bg-cream-default pb-20">
    <div class="">
      <div v-if="sizeScreen > 768" class="relative separator-footer mb-10">
        <img class="w-full mx-auto" src="../assets/images/footer.png" alt="">
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 text-cream-default text-5xl font-cookie mt-40">
          <p class="mt-20 mb-8 text-center">Tus Recuerdos, Nuestro Tesoro:</p>
          <p class="font-roboto font-medium text-lg text-center">¡Comparte Tu Momento Favorito!</p>
          <p class="font-roboto font-light text-lg text-center">Tus fotos son piezas del rompecabezas de nuestro gran día. ¡Compártelas y construyamos juntos el recuerdo completo!"</p>
        </div>
      </div>
      <div v-else class="relative separator-footer mb-10">
        <img class="w-full mx-auto" src="../assets/images/footer-mobile.png" alt="">
        <div class="absolute top-0 p-6 text-cream-default text-3xl md:text-5xl font-cookie mt-28 md:mt-40">
          <p class="mb-4 text-center">Tus Recuerdos, Nuestro Tesoro:</p>
          <p class="mb-4 text-center">¡Comparte Tu Momento Favorito!</p>
          <p class="px-4 font-roboto font-me text-base text-center">Tus fotos son piezas del rompecabezas de nuestro gran día. ¡Compártelas y construyamos juntos el recuerdo completo!"</p>
        </div>
      </div>
    </div>
  </section>
</template>
