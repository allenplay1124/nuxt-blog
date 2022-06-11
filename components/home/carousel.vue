<template>
    <div class="carousel relative">
        <swiper class="swiper" :options="swiperOption">
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
                        <div
                            class="
                                lg:container
                                mx-auto
                                pt-5
                                md:pt-8
                                lg:pt-20
                                xl:pt-30
                                2xl:pt-50
                            "
                        >
                            <h1
                                class="
                                    site-title
                                    text-5xl
                                    md:text-5xl
                                    lg:text-9xl
                                    xl:text-9xl
                                    2xl:text-9xl
                                    font-black
                                "
                            >
                                {{ this.$nuxt.$options.head.title }}
                            </h1>
                            <div
                                class="
                                    site-description
                                    text-md
                                    mt-2
                                    lg:mt-6
                                    2xl:mt-8
                                "
                            >
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
                    <div class="relative w-full">
                        <img
                            :src="item.src"
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
                            <div
                                class="
                                    lg:container
                                    mx-auto
                                    pt-5
                                    md:pt-10
                                    lg:pt-40
                                "
                            >
                                <div
                                    class="
                                        bg-[rgba(255,255,255,0.3)]
                                        p-2
                                        text-gray-900
                                        backdrop-blur-sm
                                        text-center
                                    "
                                >
                                    <div class="text-2xl text-center">
                                        {{ item.title }}
                                    </div>
                                    <div class="text-md text-center">
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
.site-title {
    background: linear-gradient(180deg, rgb(0, 123, 255), rgb(0, 229, 255));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
.dark .site-title {
    background: linear-gradient(180deg, red, yellow);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}

.site-description {
    font-size: 1.2rem;
    font-weight: lighter;
    color: rgb(0, 123, 255);
}

.dark .site-description {
    font-size: 1.2rem;
    font-weight: lighter;
    color: red;
}
</style>
