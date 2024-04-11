<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    name: {
        type: String,
        required: true
    },
})

</script>

<template>
    <div class="container">
        <button class="button"> {{ name }}</button>
    </div>
</template>

<style scoped>
.button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    min-width: 300px;
    cursor: pointer;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
