<script setup>
  import { ref, onMounted } from 'vue'

  const isPlaying = ref(false)
  const audioElement = ref(null) 
  const toggleAudio = () => {
    if (isPlaying.value) {
      audioElement.value.pause()
      isPlaying.value = false
    } else {
      audioElement.value.play()
      isPlaying.value = true
    }
  }

  onMounted(() => {
    audioElement.value.play();  
    isPlaying.value = true; 
  });
</script>

<template>
  <!-- Ícono flotante para el control del audio -->
  <div class="floating-audio" @click="toggleAudio">
    <font-awesome-icon 
      :class="{'icon': true, 'playing': isPlaying }" 
      :icon="isPlaying ?'fa-solid fa-music playing':'fa-solid fa-volume-xmark'" />
  </div>
  <audio ref="audioElement" loop>
    <source src="../assets/audio/fireworks.mp3" type="audio/mpeg">
  </audio>
</template>

<style scoped>
  .floating-audio {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: rgba(255, 255, 255, 0.557);
    border-radius: 100%;
    padding: 8px;
    cursor: pointer;
    z-index: 10;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }

  /* Efecto de hover */
  .floating-audio:hover {
    transform: scale(1.1);
  }

  /* Ícono de música animado */
  .icon {
    font-size: 20px;
    @apply text-primary-300
  }

  /* Animación al reproducir */
  .playing {
    animation: bounce 1s infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
</style>