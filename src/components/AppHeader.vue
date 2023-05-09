<script>

import SearchBar from './SearchBar.vue';
export default {
    components: { SearchBar },
    emits: ['submit']
}
</script>

<template>
    <div class="row d-flex  align-items-center justify-content-between g-0 ">
        <div class="col-6 d-flex ">
            <a href=""><img class="img-fluid ms-3" src="../assets/img/BOOLFLIX.LOGO.png" alt=""></a>
        </div>
        <div class="d-flex col-5 justify-content-end">
            <SearchBar @submit="$emit('submit', $event)"></SearchBar>
        </div>
    </div>

</template>

<style scoped >
.row {
    background-color: #000;
    height: 150px;
    width: 100%;
}
</style>