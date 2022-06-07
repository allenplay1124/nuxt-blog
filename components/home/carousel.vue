<template>
    <div class="carousel">
        <swiper class="swiper" :option="swiperOption">
            <swiper-slide>
                <div class="relative w-full">
                    <img
                        src="/images/slider/light-my-swiper-bg.png"
                        class="w-full object-center object-cover"
                    />
                    <div
                        class="
                            absolute
                            w-full
                            z-10
                            top-0
                            inset-y-20
                            text-center
                        "
                    >
                        <div class="lg:container mx-auto pt-10">
                            <h1 class="text-3xl">
                                {{ this.$nuxt.$options.head.title }}
                            </h1>
                            <div class="text-md">
                                <span>軟體分享</span>
                                <span>程式設計</span>
                                <span>技術探討</span>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide v-for="(item, index) in categories" :key="index">
                <nuxt-link :to="item.path">
                    <div>
                        <img
                            :src="item.src"
                            class="w-full object-center object-cover"
                        />
                        <div>
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
                    </div>
                </nuxt-link>
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
                autoHeight: true,
            },
        }
    },
    mounted() {},
    methods: {},
}
</script>

<style scoped>
.swiper-title {
}
</style>
