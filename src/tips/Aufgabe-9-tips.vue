<!-- 
    Aufgabe 8: Sorge dafür mithilfe von emits, 
    dass wenn man den button clickt die headline zu dem namen das buttons geändert wird.
-->
<script setup>
import { ref } from "vue";
import Tipp from "./Tipp.vue";
const headline = ref("Veränder mich")


</script>



<template>
    <div class="container">
        <Tipp name="Beispiel Tipp" text="Hier könnte ein Tipp stehen" />
        <Tipp name="File erstellung"
            text="Erstelle eine neue File im Views Ordner mit dem Namen Aufgabe-9 erstelle desweiteren eine neue Component(List-Item) im components Folder. Denke auch an das Routing" />
        <Tipp name="Liste richtig abspeichern und darstellen"
            text="Um elemente einfach hinzufügen und löschen zu können macht es sinn alle List-Items in einem Array zu speichern und mit v-for darzustellen" />
        <Tipp name="Liste dynamisch erstellen"
            text="Wenn du neue Einträge in das Array schreibst werden neue Elemente automatisch erstellt" />
        <Tipp name="Liste Löschen"
            text="Wenn du die Listen Elemente in einem Array abgespeichert hast kannst du einfach über einen Emit das Element aus dem Array löschen und das ganze Element wird gelöscht" />
        <Tipp name="Preis Anzeigen/nicht Anzeigen"
            text="Wenn kein Preis angegeben sollte man den Preis Text mit einem v-if disablen" />
        <Tipp name="Gesamt Preis berechnen"
            text="Um den Gesamtpreis zu berechnen loope einfach über das Array und addiere die Preise" />
    </div>
</template>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>