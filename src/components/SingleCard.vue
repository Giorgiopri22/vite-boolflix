<script>

export default {
    name: "SingleCard",
    props: {
        item: Object,
        url: String,
    },
    computed: {

        hasFlag() {
            const flags = ['it', 'en'];
            return flags.includes(this.item.original_language);
        },
        flagSrc() {
            const url = new URL(`../assets/img/${this.item.original_language}.png`, import.meta.url);
            return url.href;
        },
        vote() {
            return Math.ceil(this.item.vote_average / 2)
        }
    }
}
</script>

<template>
    
    <div class="my-card col-lg-2 col-md-4 col-12 ">
        <img class="  " :src="url" :alt="item.title || item.name">
        <div id="info">
            <ul>
                <li >Titolo: {{ item.title || item.name }}</li>
                <li>Titolo Originale: {{
                    item.original_title ||
                    item.original_name
                }}
                </li>
                <li>
                    <img class=" flag" v-if="hasFlag" :src="flagSrc" :alt="item.original_language">
                    <div v-else>{{ item.original_language }}</div>
                </li>
                <li>
                    <i v-for="n in 5" :class="n <= vote ? 'fa-solid' : 'fa-regular'" class=" fa-star"></i>
                </li>
            </ul>
        </div>
    </div>

        
</template>

<style scoped lang="scss" >

.my-card{
    position: relative;
    &:hover{
        transform: scale(1.1);
        z-index: 2;
        transition: 1s  ease;
    }
    img{
        width: 100%;
    }
    &:hover img:not(.flag){
        filter: brightness(10%);
        transition: 1s ease;

    }
    &:hover #info{
        opacity: 1;
        color: white;
        transition: 1s ease;
        
    }
    #info {
        width: 80%;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        

        .flag {
            width:40%;           
        }
    }   
}






</style>