<script setup>
  import CardPhoto from './CardPhoto.vue'
  const sizeScreen = screen.width
</script>

<template>
  <section class="bg-primary-400 -mt-2 -mb-20">
    <div class="text-center py-10 lg:py-20 px-4">
      <h1 class="text-primary-300 text-4xl lg:text-6xl font-cookie mb-6">Fragmentos de eternidad capturados en nuestra historia.</h1>
      <p class="text-gray-400 text-md lg:text-lg font-roboto">
        Un momento efímero, eterno en el corazón.
      </p>
    </div>
    <div class="p-4">
      <el-carousel 
        :interval="3000" 
        :type="sizeScreen > 645 ? 'card' : null" 
        height="500px" 
        :autoplay="true"
        indicator-position="none"
        arrow="always">
        <el-carousel-item v-for="(photo, index) in 10" :key="photo">
          <div class="flex justify-center">
            <CardPhoto :url-img="`photo-${index+1}.jpg`" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="h-[120px] md:h-[220px] flex items-start -mt-2"> 
      <img class="hidden md:block" src="../assets/images/separator-lines.png" alt="">
      <img class="block md:hidden" src="../assets/images/separator-lines-mobile.png" alt="">
    </div>
  </section>
</template>

<style scoped>
.el-carousel__item h3 {
  opacity: 0.8;
  line-height: 200px;
  margin: 0;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: transparent;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: transparent;
}

</style>
