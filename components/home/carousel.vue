<template>
    <div class="carousel">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide
                v-for="(item, index) in categories"
                :key="index"
                class="w-full h-80"
            >
                <div
                    class="w-full h-80"
                    :style="{
                        'background-image': 'url(' + item.src + ')',
                        'background-position': 'center center',
                        'background-repeat': 'no-repeat',
                        'background-size': 'cover ',
                    }"
                >
                    <div class="lg:container mx-auto pt-10">
                        <div
                            class="
                                bg-[rgba(255,255,255,0.3)]
                                p-5
                                text-gray-900
                                backdrop-blur-sm
                            "
                        >
                            <div class="text-2xl">
                                {{ item.title }}
                            </div>
                            <div class="text-md">
                                <nuxt-content :document="item" />
                            </div>
                        </div>
                    </div>
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
                    delay: 15000,
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
.swiper-title {
}
</style>
