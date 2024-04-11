<!-- 
    Aufgabe 6: Anstatt die Element mehrmals reinzukopieren, 
    schreibe die paths in einen array und stelle alle bilder mit einem v-for da.
-->
<script setup>
import borderImage from "../components/Aufgabe-6/borderImage.vue";
</script>

<template>
    <div class="container">
        <borderImage path="https://t4.ftcdn.net/jpg/01/11/10/55/360_F_111105568_C0CRN1nRp2RwPD6hzEsv1kclLf9uOl5Q.jpg" />
        <borderImage
            path="https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?cs=srgb&dl=pexels-amir-ghoorchiani-1183434.jpg&fm=jpg" />
        <borderImage
            path="https://i0.wp.com/teamjimmyjoe.com/wp-content/uploads/2020/01/funny-pics-animal-mashup-gorilla-bird.jpg?ssl=1" />
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