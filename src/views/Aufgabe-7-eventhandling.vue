<!-- 
    Aufgabe 6: Sorge dafür, dass die Lampe an und aus über den Button geht. Verwende dabei keinen JavaScript Event-Listener.
-->
<script setup>
import { ref } from "vue";
const isLampOn = ref(false);
</script>

<template>
    <div class="container">
        <img
            src="https://purepng.com/public/uploads/large/purepng.com-bulbbulblightenergy-bulbbright-lightclipart-14215264854132qwpb.png" />
        <img
            src="https://purepng.com/public/uploads/large/purepng.com-bulbbulblightenergy-bulbbright-lightclipart-1421526485383ixhcs.png" />
        <button class="button">Lampe an/aus</button>
    </div>
</template>

<style>
img {
    height: 400px;
    margin-top: 20px;

}

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