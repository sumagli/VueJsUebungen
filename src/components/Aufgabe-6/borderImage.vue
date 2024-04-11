<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    path: {
        type: String,
        required: true
    },
})

</script>

<template>
    <p>
        <img :src="path" />
    </p>

</template>

<style scoped>
img {
    border: 5px solid #d1d1d1;
    width: 700px;
}
</style>
