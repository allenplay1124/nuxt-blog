<template>
    <div>
        <div class="swiper" v-swiper:myDirectiveSwiper="swiperOptions">
            <div class="swiper-wrapper">
                <div class="swiper-slide relative">
                    
                    <img
                        class="object-cover"
                        src="http://lorempixel.com/1920/680/cats"
                    />
                    
                    <div
                        class="
                        lg:w-1/2 lg:absolute lg:bottom-10 lg:right-5 z-100 p-10 bg-gray-100 
                        lg:rounded-full lg:shadow-2xl opacity-50 backdrop-blur
                        md:w-full md:relative text-opacity-100
                        dark:bg-gray-800 dark:text-gray-100
                    "
                    >
                    
                        <h2 class="text-3xl text-blue-500 dark:text-yellow-500 ">
                            <nuxt-link to="/">貓咪好可愛</nuxt-link>
                        </h2>

                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Culpa non eum rem quis, commodi eius harum ea
                            totam nostrum excepturi, veniam nobis distinctio
                            explicabo qui earum velit? Perspiciatis, nesciunt
                            ratione? Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Maxime nam et minus, excepturi aut
                            quo architecto sit dolore unde molestias, magni,
                            itaque natus deserunt eos vero distinctio blanditiis
                            maiores perspiciatis.
                        </div>
                    
                    </div>
                </div>
                <div class="swiper-slide">
                    <img
                        class="object-cover"
                        src="http://lorempixel.com/1920/680/city"
                    />

                    <div
                        class="
                        lg:w-1/2 lg:absolute lg:bottom-10 lg:right-5 z-100 p-10 bg-gray-100 
                        lg:rounded-full lg:shadow-2xl opacity-50 backdrop-blur
                        md:w-full md:relative 
                    "
                    >
                    
                        <h2 class="text-2xl text-blue-500">
                            <nuxt-link to="/">浪漫城市</nuxt-link>
                        </h2>

                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Culpa non eum rem quis, commodi eius harum ea
                            totam nostrum excepturi, veniam nobis distinctio
                            explicabo qui earum velit? Perspiciatis, nesciunt
                            ratione? Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Maxime nam et minus, excepturi aut
                            quo architecto sit dolore unde molestias, magni,
                            itaque natus deserunt eos vero distinctio blanditiis
                            maiores perspiciatis.
                        </div>
                    
                    </div>
                </div>
                <div class="swiper-slide">
                    <img
                        class="object-cover"
                        src="http://lorempixel.com/1920/680/food"
                    />

                    <div
                        class="
                        lg:w-1/2 lg:absolute lg:bottom-10 lg:right-5 z-100 p-10 bg-gray-100 
                        lg:rounded-full lg:shadow-2xl opacity-50 backdrop-blur
                        md:w-full md:relative 
                    "
                    >
                    
                        <h2 class="text-2xl text-blue-500">
                            <nuxt-link to="/">美食天堂</nuxt-link>
                        </h2>

                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Culpa non eum rem quis, commodi eius harum ea
                            totam nostrum excepturi, veniam nobis distinctio
                            explicabo qui earum velit? Perspiciatis, nesciunt
                            ratione? Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Maxime nam et minus, excepturi aut
                            quo architecto sit dolore unde molestias, magni,
                            itaque natus deserunt eos vero distinctio blanditiis
                            maiores perspiciatis.
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
</style>
