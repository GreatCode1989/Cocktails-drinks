<template>
    <div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <div class="main">
        <el-button class="btn">Get random cocktail</el-button>
        <slot></slot>
    </div>
    </div>
</template>

<script setup>
const props = defineProps({
    imgUrl: {
        tipe: String,
        required: true,
    },
});
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.root 
    display: flex
    min-height: 100vh
    background-color: $background

.img 
    width: 50%
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: cover

.main
    position: relative
    width: 50%
    padding: 32px 40px

.btn
    position: absolute
    top: 32px
    right: 42px
    font-size: 16px
    font-family: 'Ralewey', 'Arial', sans-serif
    background-color: $accent
    border-color: $accent
    color: $text
    
.btn:hover,
.btn:active
    background-color: darken($accent, 10%)
    border-color: darken($accent, 10%)
</style>