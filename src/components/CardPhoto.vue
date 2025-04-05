<script setup>
    const props = defineProps({
        urlImg: {
            type: String,
            required: true
        },
    })
    const imageSrc = new URL(`../assets/photos/${props.urlImg}`, import.meta.url).href;
</script>

<template>
   <el-card style="max-width: 480px">
    <img
      :src="imageSrc"
      class="w-[384px] h-72 object-cover"
    />
    <template #footer></template>
  </el-card>
</template>
