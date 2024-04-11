<script setup>
import { ref } from "vue";
import { defineProps } from 'vue'

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
})

const showTip = ref(false);

</script>

<template>
    <div class="container">
        <button v-if="!showTip" @click="showTip = true" class="button"> {{ name }}</button>
        <p v-if="showTip">{{ text }}</p>
    </div>
</template>
-
<style scoped>
.button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    min-width: 400px;
    cursor: pointer;
    color: white;
    background-color: #42b883;
}

p {
    min-height: 30px;
}
</style>
