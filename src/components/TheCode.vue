<script lang="ts" setup>
    import axios from 'axios'
    import { ref } from 'vue'

    const emit = defineEmits(['dataReceived'])

    const loading = ref(false)
    const input = ref('')
    const data = ref(null)
    const error = ref(null)

    const toUpperCase = () => {
      input.value = input.value.toUpperCase()
    }
    const onSubmit = async() => {
        loading.value = true
        try {
            const response = await axios.post('https://us-central1-refined-area-437318-p8.cloudfunctions.net/getAttendance', 
            {
                Code: input.value
            },
            {
                headers: {
                'Content-Type': 'application/json',
                }
            }
        )
            data.value = response.data
            emit('dataReceived', data.value)
        } catch (err) {
            error.value = 'Parece que algo ocurre con tu código, ingresalo nuevamente'
        } finally {
            loading.value = false
        }
    }
</script>
<template>
    <div class="bg-yellow-50 h-screen">
        <div v-loading="loading">
            <p class="text-cream-50 text-5xl font-cookie text-center pt-40 mb-8">Ingresa el código de tu invitación</p>
            <div class="relative">
                <img class="w-full mx-auto max-w-[500px]" src="../assets/images/header-party.png" alt="">
                <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                    <div class="flex flex-col">
                       <el-input 
                            class="custom-input mb-4"
                            v-model="input" 
                            style="width: 150px" 
                            placeholder="Código" 
                            maxlength="5"
                            show-word-limit
                            @input="toUpperCase"
                        />
                        <el-button type="primary w-24 mx-auto" round @click="onSubmit">Ingresar</el-button>  
                    </div>
                </div>
            </div>
        </div>
        <p  v-if="error" class="mt-6 text-cream text-center">{{ error }}</p>
    </div>
</template>
<style scoped>

.custom-input :deep() .el-input__inner {
  border: none !important;
  border-bottom: 2px solid #d1ab4a  !important; 
  border-radius: 0 !important;
  box-shadow: none !important;
  color: #1f3a35 !important; 
}

.custom-input :deep() .el-input__wrapper {
  border: none !important;
  box-shadow: none !important;
}
</style>
