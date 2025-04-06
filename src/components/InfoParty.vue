<script setup>
  import { ref, reactive } from 'vue'
  import axios from 'axios'

  const props = defineProps({
    guestCode: {
        type: String,
        required: true
    },
    guestName: {
        type: String,
        required: true
    },
  })

  const loading = ref(false)
  const data = ref(null)
  const error = ref(null)
  const showThanks = ref(false)
  const dressCodeDialog = ref(false)
  const attendanceDialog = ref(false)
  const form = reactive({
    attendance: '',
    comment: '',
  })

  const onSubmit = async() => {
    loading.value = true
    try {
  
      const response = await axios.post('https://us-central1-refined-area-437318-p8.cloudfunctions.net/updateAttendance', 
        {
          Code: props.guestCode,
          Attendance: form.attendance,
          Comments: form.comment,
        },
        {
          headers: {
          'Content-Type': 'application/json',
          }
        }
      )
      data.value = response.data
      showThanks.value = true
    } catch (err) {
        error.value = 'Ups!, ocurrió un error con tu confirmación'
    } finally {
        loading.value = false
    }
}
const goToUrl = () => {
  window.open('https://maps.app.goo.gl/W59Dh8hWVuQnG3p7A', '_blank')
}
</script>

<template>
  <section class="bg-cream-100 pb-1 lg:pb-20">
    <div class="">
      <div class="relative separator-lines mb-20 md:mb-28">
        <img class="w-full mx-auto max-w-[500px]" src="../assets/images/header-party.png" alt="">
        <p class="absolute bottom-[6rem] lg:bottom-[8rem] left-1/2 transform -translate-x-1/2 text-primary-100 text-4xl lg:text-5xl font-cookie pl-5">Ceremonia</p>
      </div>
      <div class="flex flex-wrap justify-evenly mb-20">
        <div class="w-[300px] text-center mb-12 lg:mb-6">
          <div class="w-full bg-cream-50 rounded-xl shadow-md p-6 relative overflow-visible">
            <img src="../assets/images/decoration-party.png" alt="decoración" class="absolute -top-8 -left-8 w-40">
            <p class="text-primary-100 text-4xl font-cookie mb-6">Día</p>
            <div class="flex justify-center mb-6">
              <img src="../assets/gifs/Animation-1.gif" alt="animación día" class="w-24 h-24 object-contain">
            </div>
            <p class="text-gray-400 text-lg font-roboto font-light">Sábado 16 de Agosto</p>
            <p class="text-gray-400 text-lg font-roboto font-light mb-6">16:00 hs</p>
            <el-button class="mt-4" round @click="dressCodeDialog = true">Código de vestimenta</el-button>
          </div>
        </div>
        <div class="w-[300px] text-center mb-12 lg:mb-6">
          <div class="w-full bg-cream-50 rounded-xl shadow-md p-6 relative overflow-visible">
            <p class="text-primary-100 text-4xl font-cookie mb-6">Lugar</p>
            <div class="flex justify-center mb-4">
              <img src="../assets/gifs/Animation-2.gif" alt="animacion-lugar" class="w-24 h-24 object-contain">
            </div>
            <p class="text-gray-400 text-lg font-roboto font-light">Club Promedico Rozo</p>
            <p class="text-gray-400 text-lg font-roboto font-light">Ceremonia: Capilla</p>
            <p class="text-gray-400 text-lg font-roboto font-light">Recepción: Salón Palmas</p>
            <el-button class="mt-4" round @click="attendanceDialog = true">Confirmar asistencia</el-button>
          </div>
          
        </div>
        <div class="w-[300px] text-center mb-12 lg:mb-6">
          <div class="w-full bg-cream-50 rounded-xl shadow-md p-6 relative overflow-visible">
            <img src="../assets/images/decoration-party.png" alt="decoración" class="absolute -top-8 -right-8 w-40 transform -scale-x-100">
            <p class="text-primary-100 text-4xl font-cookie mb-6">Dirección</p>
            <div class="flex justify-center mb-6">
              <img src="../assets/gifs/Animation-3.gif" alt="animacion-lugar" class="w-24 h-24 object-contain">
            </div>
            <p class="text-gray-400 text-lg font-roboto font-light">Paso La Torre</p>
            <p class="text-gray-400 text-lg font-roboto font-light">Yumbo, Valle del Cauca</p>
            <p class="text-gray-400 text-lg font-roboto font-light">Rozo, Palmira – Valle del Cauca</p>
            <el-button class="mt-4" round @click="goToUrl">Cómo llegar</el-button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <el-dialog v-model="dressCodeDialog" title="" center>
    <p class=" text-primary-100 text-4xl font-cookie text-center mt-20 lg:mt-28 lg:mb-4">Código de vestuario</p>
    <div class="mx-auto w-10/12 text-center">
      <!-- <span class="font-cookie text-2xl text-yellow-100">Mujeres:</span> -->
      <p class="text-lg mb-4"> Traje formal</p>
      <!-- <span class="font-cookie text-2xl text-yellow-100">Hombre:</span> -->
      <!-- <p class="mb-4">
        Traje formal (Camisa, Pantalón  <br>lino o drill, blazer opcional)
      </p> -->
      <a href="https://co.pinterest.com/search/pins/?rs=ac&len=2&q=ropa%20invitados%20boda&eq=ropa%20invitados&etslf=10298" target="_blank" class="text-base text-yellow-100 mb-4">Mira aquí algunas referencias</a><br>
      <div class="text-gray-400 mt-4">Recuerda que el blanco está <br> reservado para la novia</div>
    </div>
  </el-dialog>

  <el-dialog v-model="attendanceDialog" title="" center>
    <div v-loading="loading">
      <div v-if="showThanks" class="text-center">
        <p class="font-cookie text-3xl text-primary-100 mt-40 mb-6">{{ guestName }}</p>
        <span v-if="form.attendance == 'si'">Gracias por confirmar tu asistencia <br> Te esperamos!</span>
        <span v-else>Sentimos que no puedas acompañarnos<br> Gracias!</span>
      </div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <p class="font-cookie text-3xl text-primary-100 mt-24 text-center">
          {{ guestName }} <br>
        </p>
        <p class="text-lg text-center lg:mb-4 pl-8 lg:pl-4">
          Deseas confirmar asistencia?
        </p>
        <el-form :model="form" label-width="auto" style="max-width: 600px">
          <div class="flex justify-center">
            <el-form-item>
              <el-radio-group v-model="form.attendance">
                <el-radio value="si">Si! Confirmo</el-radio>
                <el-radio value="No">No puedo</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <div class="md:w-1/2 flex flex-col justify-center items-center mx-auto">
            <p class="text-xs text-center mb-1 lg:mb-4">¿Algún dato importante?<br>  Ej: Soy vegetariano, Soy alergíco a ... </p>
            <el-form-item>
              <el-input v-model="form.comment" type="textarea" />
            </el-form-item>
          </div>
          <div class="flex justify-center">
            <el-form-item>
              <el-button type="primary" round @click="onSubmit">Enviar</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </el-dialog>
</template>
