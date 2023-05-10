<script>

import { store } from '../store'
export default {
    data() {
        return {
            store,
            
        }
    },
    emits: ['submit'],
}

</script>

<template>
    <form class=" d-flex  " role="search">
        <input class="form-control me-2 search w-75" type="search" placeholder="Search" v-model.trim="store.ricerca">
        <button class="btn btn-outline-success" type="submit"
            @click.prevent="$emit('submit', ricerca)">Search</button>
    </form>
</template>

<style scoped >
button {
    background-color: #ff0000;
    color: #fff;
    border: none
}

button:hover {
    background-color: #ff0000;
    box-shadow: 0 0 10px #fff;
}

form {
    width: 60%
}

form .search:focus {
    border-color: #ff0000
}

form button:target {
    background-color: #ff0000;
}
</style>