<!-- 
    Aufgabe 8: Sorge dafür mithilfe von emits, 
    dass wenn man den button clickt die headline zu dem namen das buttons geändert wird.
-->
<script setup>
import { ref } from "vue";
import TextButton from "../components/Aufgabe-8/textButton.vue";
const headline = ref("Veränder mich")


</script>



<template>
    <div class="container">
        <h1>{{ headline }}</h1>
        <TextButton name="Chabos" />
        <TextButton name="wissen" />
        <TextButton name="wer" />
        <TextButton name="der" />
        <TextButton name="Babo" />
        <TextButton name="ist" />

    </div>
</template>

<style>
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