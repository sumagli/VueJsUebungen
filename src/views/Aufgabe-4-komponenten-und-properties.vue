<!-- 
    Aufgabe 4: Lagere die Buttons in eine Komponente aus und rufe diese 3 mal auf.
-->
<script setup>
const redirect = (url) => {
    window.open(url, '_blank').focus();
}
</script>

<template>
    <div class="container">
        <button class="button" @click="redirect('https://www.youtube.com/')"> Youtube</button>
        <button class="button" @click="redirect('https://x.com')"> X(Ehemals Twitter)</button>
        <button class="button" @click="redirect('https://Instagram.com')"> Instagram</button>
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