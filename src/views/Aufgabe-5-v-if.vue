<!-- 
    Aufgabe 5: Verändere die Komponente sodass nur die grüne zahl angezeigt wird,
    wenn der preis größer als 0 und die rote wenn er kleiner als 0 ist
-->
<script setup>
import Stonks from "../components/Aufgabe-5/Stonks.vue";
import test from "../assets/stonks.png"
</script>

<template>
    <div class="container">
        <img src="@/assets/stonks.png" alt="stonks" />
        <Stonks name="Dogecoin" price="420" />
        <Stonks name="1000 Hebel auf Orangensaft" price="-1337" />
        <Stonks name="HDM Coin" price="9999999" />
        <Stonks name="Nico Coin" price="-1337" />
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