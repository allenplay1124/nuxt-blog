<template>
    <div>
        <div class="swiper" v-swiper:myDirectiveSwiper="swiperOptions">
            <div class="swiper-wrapper">
                <div
                    class="swiper-slide w-full"
                    v-for="(item, index) in data"
                    :key="index"
                >
                    <nuxt-link :to="item.path">
                        <img
                            class="object-cover object-center"
                            :src="item.image"
                            :alt="item.title"
                        />
                    </nuxt-link>

                    <div
                        class="
                        lg:w-1/2 lg:absolute lg:bottom-10 lg:right-5 z-100 p-10 bg-gray-100 
                        lg:rounded-full lg:shadow-2xl opacity-50 backdrop-blur
                        md:w-full md:absolute md:bottom-20 text-opacity-100
                        dark:bg-gray-800 dark:text-gray-100
                        "
                    >
                        <h2 class="text-3xl text-blue-500 dark:text-yellow-500">
                            <nuxt-link :to="item.path">
                                {{ item.title }}
                            </nuxt-link>
                        </h2>

                        <div>
                            {{ item.summary }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['data'],
    data() {
        return {
            swiperOptions: {
                loop: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            slider: [],
        }
    },
}
</script>

<style scoped>
.swiper-pagination-bullet {
    width: 100px;
    height: 3px;
    background: #ff0000;
}

img {
    width: 100%;
    height: 90vh;
}
</style>
