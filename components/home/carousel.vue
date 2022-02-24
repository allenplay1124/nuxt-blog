<template>
    <div class="carousel">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(item, index) in categories" :key="index">
                <div v-if="item.slider == ''" class="swiper-slider-item">
                    <nuxt-link :to="item.path">
                        {{ item.title }}
                    </nuxt-link>
                </div>
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>

            <div class="swiper-button-prev" slot="button-prev"></div>

            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ['categories'],
    data() {
        return {
            swiperOption: {
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
        }
    },
    mounted() {
        console.log(this.categories)
    },
    methods: {},
}
</script>

<style scoped>
.carousel {
    width: 100%;
    height: 400px;
    background-image: linear-gradient(45deg, #5ee7df 0%, #b490ca 100%);
}

.swiper-slider-item {
    height: 400px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slider-item a {
    background: rgba(36, 149, 255, 0.6);
    padding: 10px;
    border-radius: 20px;
    color: #fff;
}
</style>
