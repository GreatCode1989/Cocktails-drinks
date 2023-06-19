



<template>
    <AppLayout imgUrl="/src/assets/img/cup-7.jpg" 
    :backFunc="removeIngredient"
    :is-back-button-visible="!!ingredient"
    >

    <div class="wrapper">
    <div v-if="!ingredient || !cocktails" class="info">
    <div class="title">Выберите ваш напиток</div>
    <div class="line"></div>
    <div class="select-wrapper">
    <el-select 
        v-model="rootStore.ingredient"
        placeholder="Ваш выбор"
        size="large"
        filterable
        allow-create
        class="lector"
        @change="getCocktails"
        >
    <el-option
      v-for="item in ingredients"
      :key="item.strIngredient1"
      :label="item.strIngredient1"
      :value="item.strIngredient1"
    />
</el-select>
    </div>
    <div class="text">
        Алкогольные коктейли — коллекции коктейлей на Inshaker. 
        Каталог с фото и рецептами приготовления.
    </div>
    <img src="/src/assets/img/glass-2.jpg" alt="no img" class="img">
    </div>
    <div v-else class="info">
    <div class="title">Выберите ваш {{ ingredient }}</div>
    <div class="line"></div>
    <div class="cocktails">
    <CocktailThumb 
    v-for="cocktail in cocktails"
    :key="cocktail.idDrink"
    :cocktail="cocktail"
    />
    </div>
    </div>
    </div>

    </AppLayout>
</template>


<script setup>
import AppLayout from '../components/AppLayout.vue';
import CocktailThumb from '../components/CocktailThumb.vue';
import { useRootStore } from '@/stores/root';
import { storeToRefs } from 'pinia';
import { ElSelect, ElOption } from 'element-plus';



const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients, ingredient, cocktails } = storeToRefs(rootStore);


function getCocktails() {
    rootStore.getCocktails(rootStore.ingredient)
}

function removeIngredient() {
    rootStore.setIgredient(null)
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'



.select-wrapper 
    padding: 8px

.lector
    width: 200px

.text
    margin: 0 auto
    max-width: 516px
    padding-top: 10px
    line-height: 30px
    letter-spacing: 0.2em
    color: $textMuted

.img
    height: 230px
    width: 500px
    margin: 30px

.cocktails
    display: flex
    flex-wrap: wrap
    align-items: center
    overflow-y: auto
    max-height: 400px
    margin-top: 30px
    justify-content: space-around
</style>