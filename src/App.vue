<script setup>
  import TheCode from './components/TheCode.vue'
  import ThePortada from './components/ThePortada.vue'
  import CountdownClock from './components/CountdownClock.vue'
  import InfoParty from './components/InfoParty.vue'
  import ThePhotos from './components/ThePhotos.vue'
  import TheRings from './components/TheRings.vue'
  import FloatingMusic from './components/FloatingMusic.vue'
  import TheFooter from './components/TheFooter.vue'
  import TheGifts from './components/TheGifts.vue'
  import { ref } from 'vue'

  const showSectionCode = ref(true)
  const guestName = ref(true)
  const guestCode = ref(true)

  const showInvitation = (data) => {
    showSectionCode.value = false
    guestCode.value = data.Code
    guestName.value = data.Names
    console.log('Datos recibidos del hijo:', data)
  }
</script>

<template>
  <div v-if="showSectionCode">
    <TheCode @dataReceiveds="showInvitation"/>
  </div>
  <div v-else>
    <FloatingMusic />
    <ThePortada msg="Por encima de todo, vístanse de amor, que es el vinculo perfecto."/>
    <CountdownClock/>
    <ThePhotos />
    <InfoParty :guest-code="guestCode" :guest-name="guestName"/>
    <TheGifts />
    <TheRings />
    <TheFooter />
  </div>
</template>
