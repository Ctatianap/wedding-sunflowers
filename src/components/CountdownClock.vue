<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const targetDate = new Date('2025-08-16T16:00:00'); // Fecha objetivo
const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});
const sizeScreen = screen.width

function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference > 0) {
    countdown.value.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    countdown.value.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    countdown.value.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    countdown.value.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  } else {
    // Si la fecha ya pasó, establecer todo en cero
    countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
}

let interval;
onMounted(() => {
  updateCountdown(); // Actualiza al cargar el componente
  interval = setInterval(updateCountdown, 1000); // Actualiza cada segundo
});

onUnmounted(() => {
  clearInterval(interval); // Limpia el intervalo cuando se desmonte el componente
});
</script>

<template>
  <section>
    <div class="banner-opacity mx-auto relative">
      <div class="relative w-full h-[150px] max-w-[380px] md:max-w-[500px] md:h-[500px] mx-auto">
          <img class="w-full mx-auto" src="../assets/images/heart.png" alt="">
      </div>  
      <div class="absolute top-20 md:mt-8 left-1/2 transform -translate-x-1/2 circle-clock rounded-full text-center w-[180px] h-[180px] md:w-[215px] md:h-[215px] flex flex-col items-center justify-center p-3">
        <span class="text-5xl mb-4 text-primary-300 font-cookie">Falta</span>
        <div id="clock" class="clock w-11/12 mb-6">
          <div id="days" class="w-1/4 flex flex-col border-r ">
            <span class="number">{{ countdown.days }}</span>
            <span class="text-secondary-200 font-light">días</span>
          </div>
          <div id="hours" class="w-1/4 flex flex-col border-r">
            <span class="number">{{ countdown.hours }}</span>
            <span class="text-secondary-200 font-light">hs</span>
          </div>
          <div id="minutes" class="w-1/4 flex flex-col border-r">
            <span class="number">{{ countdown.minutes }}</span>
            <span class="text-secondary-200 font-light">min</span>
          </div>
          <div id="seconds" class="w-1/4 flex flex-col no-border">
            <span class="number">{{ countdown.seconds }}</span>
            <span class="text-secondary-200 font-light">seg</span>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <font-awesome-icon class="beats icon" icon="fa-solid fa-heart" />
        </div>
      </div>
      <img v-if="sizeScreen > 768" class="separator-countdown" src="../assets/images/separator.png" alt="">
      <div class="bg-cream-50 lg:h-[150px]"></div>
      <div class="bg-cream-50 h-[320px] flex items-end -mt-2"> 
        <img class="" src="../assets/images/separator-photos.png" alt="">
      </div>
    </div>
  </section>
</template>
<style scoped>

  .icon {
    font-size: 20px;
    @apply text-primary-200
  }

  /* Animación al reproducir */
  .beats {
    animation: fadeAndScale 3s infinite ease-in-out;
  }

  @keyframes fadeAndScale {
    0%, 100% {
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      opacity: 1;
      transform: scale(1.5);
    }
}
</style>
