<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
})

</script>

<template>
    <p>
        <span id="green">{{ price }}$ </span>
        <span id="red">{{ price }}$ </span>
        <span>{{ name }}</span>
    </p>

</template>

<style scoped>
#green {
    color: green;
}

#red {
    color: red;
}
</style>
