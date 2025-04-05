<script setup>
  defineProps({
    msg: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <section id="mainPage">
    <div class="banner-opacity">
      <div class="flowers f-top">
        <img class="" src="../assets/images/animation/top/anim-top-left-1.png" alt="leaf 1">
        <img class="" src="../assets/images/animation/top/anim-top-left-2.png" alt="leaf 2">
        <img class="" src="../assets/images/animation/top/anim-top-left-3.png" alt="leaf 3">
        <img class="" src="../assets/images/animation/top/anim-top-left-4.png" alt="leaf 4">
        <img class="" src="../assets/images/animation/top/anim-top-left-5.png" alt="leaf 5">
        <img class="" src="../assets/images/animation/top/anim-top-left-6.png" alt="leaf 6">
      </div>
      <div class="container mx-auto p-4 md:px-10 lg:px-20">
        <div class="mb-20 flex flex-col justify-center items-center">
          <div class="box-bride-and-groom-names w-11/12 md:w-3/4 text-center lg:p-10">
            <div class="flex justify-center items-center">
              <span class="border-gradient w-full lg:w-1/3 mr-5"></span>
              <span class="font-semibold w-full lg:w-1/3">16 . 08 . 2025</span>
              <span class="border-gradient w-full lg:w-1/3 ml-5"></span>
            </div>
            <div class="flex flex-col md:flex-row justify-center py-5 md:py-10 lg:py-20 border-gradient">
              <p class="w-full md:w-1/3 text-6xl md:text-8xl lg:text-9xl text-cream-50 lg:text-right lg:pr-10">
                Estefa
              </p>
              <div class="mt-4 md:mt-12 mx-auto flex justify-center items-center text-primary-300 rounded-full w-8 h-8 md:w-10 lg:w-14 md:h-10 lg:h-14 bg-union mx-8"> 
                <p class="w-full md:w-1/3 text-xl md:text-3xl lg:text-4xl font-extrabold">&</p>  
              </div>  
              <p class="w-full md:w-1/3 text-6xl md:text-8xl lg:text-9xl text-cream-50 lg:text-left">
                Gus
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center text-center py-10">
              <img class="h-6 w-8 mb-2" src="../assets/images/comilla-apertura.png" alt="comilla apertura">

              <p class="text-lg font-normal">{{ msg }}</p>

              <img class="h-6 w-8 mt-2" src="../assets/images/comilla-cierre.png" alt="comilla apertura">     
              <p class="text-lg font-light mt-4"> Colosenses 3:14 </p>         
          </div>
        </div>
      </div>
      <div class="flowers f-rigth">
        <img class="" src="../assets/images/animation/right/anim-bottom-right-1.png" alt="leaf-right 1">
        <img class="" src="../assets/images/animation/right/anim-bottom-right-2.png" alt="leaf-right 2">
        <img class="" src="../assets/images/animation/right/anim-bottom-right-3.png" alt="leaf-right 3">
        <img class="" src="../assets/images/animation/right/anim-bottom-right-4.png" alt="leaf-right 4">
        <img class="" src="../assets/images/animation/right/anim-bottom-right-5.png" alt="leaf-right 5">
        <img class="" src="../assets/images/animation/right/anim-bottom-right-6.png" alt="leaf-right 6">
      </div>
      
    </div>
  </section>
</template>
<style scoped>
  #mainPage {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .f-top {
    position: relative;
    height: 400px;
    max-width: 678px;
    max-height: 570;
    @apply w-[200px] h-[168px] md:w-[400px] md:h-[336px]  2xl:w-[600px] 2xl:h-[504px] 
  }
  .f-top img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: slideDown 2s ease-in-out forwards;
    opacity: 0;
  }

  .f-rigth {
    position: relative;
    width: 100%;
  }

  .f-rigth img {
    position: absolute;
    bottom: 0;
    right: 0;
    animation: slideInFromRight 2s ease-in-out forwards;
    opacity: 0;
    max-width: 678px;
    max-height: 705;
    @apply w-[200px] h-[208px] md:w-[400px] md:h-[416px]  2xl:w-[600px] 2xl:h-[624px] 
  }

  .flowers img:nth-child(1) {
    animation-delay: 0s;
  }

  .flowers img:nth-child(2) {
    animation-delay: 0.5s;
  }

  .flowers img:nth-child(3) {
    animation-delay: 1s;
  }

  .flowers img:nth-child(4) {
    animation-delay: 1.5s;
  }

  .flowers img:nth-child(5) {
    animation-delay: 2s;
  }

  .flowers img:nth-child(6) {
    animation-delay: 2.5s;
  }

  @keyframes slideDown {
    0% {
      top: -100%;
      opacity: 0;
    }
    50% {
      top: 0;
      opacity: 1;
    }
    100% {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes slideInFromRight {
  0% {
    transform: translateX(100%); 
    opacity: 0; 
  }
  100% {
    transform: translateX(0); 
    opacity: 1;
  }
}

  
</style>