<!-- 
    Aufgabe 2: Momentan funktioniert user Code noch nicht.
    Sorge dafür, dass wenn man auf den Button klicke der text "Hat geklappt" angezeigt wird.
-->

<script setup>
import { ref } from "vue";
const msg = "Ich bin kein ref";
const click = () => {
    msg = "Hat geklappt";
}
</script>

<template>
    <div class="container">
        <div class="title">
            <h1>{{ msg }}</h1>
        </div>
        <button class="button" @click="click">Click me!</button>
    </div>
</template>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    text-align: center;
}

.button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
</style>
