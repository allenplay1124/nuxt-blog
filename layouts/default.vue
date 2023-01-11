<template>
    <div>
        <header>
            <topBar></topBar>
            <navbar></navbar>
        </header>
        <transition name="fade">
            <div class="loading-wrapper" v-show="loading">
                <div class="loading" :class="loadingClass">玩</div>
            </div>
        </transition>
        <Nuxt />
    </div>
</template>

<script>
import topBar from '~/components/home/topbar'
import navbar from '~/components/home/navbar'
export default {
    components: {
        topBar,
        navbar,
    },
    data() {
        return {
            loading: true,
            loadingClass: {
                'loading-20': true,
                'loading-40': false,
                'loading-60': false,
                'loading-80': false,
                'loading-100': false,
            },
        }
    },
    mounted() {
        var self = this
        var loading = document.querySelector('.loading')

        var colorParcent = 40
        let count = setInterval(function () {
            if (colorParcent == 40) {
                self.loadingClass['loading-20'] = false
                self.loadingClass['loading-40'] = true
                self.loadingClass['loading-60'] = false
                self.loadingClass['loading-80'] = false
                self.loadingClass['loading-100'] = false
            }

            if (colorParcent == 60) {
                self.loadingClass['loading-20'] = false
                self.loadingClass['loading-40'] = false
                self.loadingClass['loading-60'] = true
                self.loadingClass['loading-80'] = false
                self.loadingClass['loading-100'] = false
            }

            if (colorParcent == 80) {
                self.loadingClass['loading-20'] = false
                self.loadingClass['loading-40'] = false
                self.loadingClass['loading-60'] = false
                self.loadingClass['loading-80'] = true
                self.loadingClass['loading-100'] = false
            }

            if (colorParcent == 100) {
                self.loadingClass['loading-20'] = false
                self.loadingClass['loading-40'] = false
                self.loadingClass['loading-60'] = false
                self.loadingClass['loading-80'] = false
                self.loadingClass['loading-100'] = true
            }

            colorParcent = colorParcent + 20
        }, 500)

        setTimeout(function () {
            clearInterval(count)
            self.loading = false
        }, 3000)

        var host = process.env.host

        if (
            window.location.host == host &&
            windows.location.protocol != 'https:'
        ) {
            window.location.protocol = 'https:'
        }
    },
    methods: {
        setRotationOnClick() {
            this.$gsap.to('.title2', { rotation: 90, x: 100, duration: 2 })
        },
        setRotationOnLoad() {
            this.$gsap.to('.loading', { rotation: 27, x: 100, duration: 1 })
        },
    },
}
</script>
<style scoped>
.loading-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333;
    z-index: 99999;
}

.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100pt;
    margin-left: -100pt;
    font-family: 'Cabin Condensed', sans-serif;
    font-weight: bold;
    font-size: 100pt;
    text-align: center;
}

.loading-20 {
    background: linear-gradient(to top, #d03030 0%, #333 20%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

.loading-40 {
    background: linear-gradient(to top, #d03030 0%, #333 40%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

.loading-60 {
    background: linear-gradient(to top, #d03030 0%, #333 60%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

.loading-80 {
    background: linear-gradient(to top, #d03030 0%, #333 80%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

.loading-100 {
    background: linear-gradient(to top, #d03030 0%, #333 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>
