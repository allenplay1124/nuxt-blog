<template>
    <div class="bg-red-900 carousel">
        <div class="lg:container m-auto text-center">
            <div
                id="category-block"
                v-for="(item, index) in categories"
                :key="index"
            >
                <div class="category-item">
                  <nuxt-link :to="item.path">
                    {{ item.title }}
                  </nuxt-link>
                </div>
            </div>
            <img src="/images/themes/3D_play.png" alt="" class="m-auto" />
        </div>
    </div>
</template>
<script>
export default {
    props: ['categories'],
    mounted() {
        let div = document.getElementsByClassName('category-item')
        let width = window.innerWidth - 100
        let hight = 300

        for (var i = 0; i < div.length; i++) {
            let top = 100 + this.getRandom(0, hight)
            let left = this.getRandom(0, width)
            div[i].style.top = top + 'px'
            div[i].style.left = left + 'px'
        }
    },
    methods: {
        getRandom(min, max) {
            return Math.random() * (max - min) + min
        },
    },
}
</script>

<style scoped>
.carousel {
    width: 100%;
    height: 400px;
}

.category-item {
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 100px;
    left: 100px;
    margin: 0 auto;
    line-height: 5rem;
    font-weight: bold;
    color: rgb(32, 32, 32);
    border: 1px solid lightgray;
    box-shadow: 2px 2px 3px rgb(32, 32, 32);
}
</style>
