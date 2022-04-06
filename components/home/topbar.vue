<template>
    <div
        class="
            dark-mode-bar
            bg-blue-100
            h-8
            w-full
            dark:bg-yellow-500 dark:text-blue-100
            pr-5
            pt-1
        "
    >
        <div class="flex justify-end mx-auto">
            <div>
                <input
                    id="dark-mode-system"
                    type="radio"
                    v-model="$colorMode.preference"
                    value="system"
                />
                <label
                    for="dark-mode-system"
                    class="
                        w-4
                        h-4
                        p-1
                        rounded-full
                        bg-gray-50
                        dark:bg-gray-700
                        cursor-pointer
                    "
                    @mouseover="darkModeHoverActive('system')"
                    @mouseleave="darkModeHoverUnActive('system')"
                >
                    系
                </label>
                <div
                    v-show="darkModeSystemHover"
                    class="
                        text-xs
                        rounded-3xl
                        bg-blue-100
                        p-2
                        mt-2
                        text-gray-500
                        absolute
                        right-8
                        dark:bg-gray-700 dark:text-gray-100
                    "
                >
                    依系統設定
                </div>
            </div>
            <div>
                <input
                    id="dark-mode-light"
                    type="radio"
                    v-model="$colorMode.preference"
                    value="light"
                />
                <label
                    for="dark-mode-light"
                    class="
                        w-4
                        h-4
                        p-1
                        rounded-full
                        bg-gray-50
                        dark:bg-gray-700
                        cursor-pointer
                    "
                    @mouseover="darkModeHoverActive('light')"
                    @mouseleave="darkModeHoverUnActive('light')"
                >
                    亮
                </label>
                <div
                    v-show="darkModeLightHover"
                    class="
                        text-xs
                        rounded-3xl
                        bg-blue-100
                        p-2
                        mt-2
                        text-gray-500
                        absolute
                        right-12
                        dark:bg-gray-700 dark:text-gray-100
                    "
                >
                    亮色系
                </div>
            </div>
            <div>
                <input
                    id="dark-mode-dark"
                    type="radio"
                    v-model="$colorMode.preference"
                    value="dark"
                />
                <label
                    for="dark-mode-dark"
                    class="
                        w-4
                        h-4
                        p-1
                        rounded-full
                        bg-gray-50
                        dark:bg-gray-700
                        cursor-pointer
                    "
                    @mouseover="darkModeHoverActive('dark')"
                    @mouseleave="darkModeHoverUnActive('dark')"
                >
                    暗
                </label>
                <div
                    v-show="darkModeDarkHover"
                    class="
                        text-xs
                        rounded-3xl
                        bg-blue-100
                        p-2
                        mt-2
                        text-gray-500
                        absolute
                        right-2
                        dark:bg-gray-700 dark:text-gray-100
                    "
                >
                    暗色系
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            darkModeSystemHover: false,
            darkModeLightHover: false,
            darkModeDarkHover: false,
        }
    },
    methods: {
        darkModeHoverActive(mode) {
            switch (mode) {
                case 'system':
                    this.darkModeSystemHover = true
                    this.darkModeLightHover = false
                    this.darkModeDarkHover = false
                    break

                case 'light':
                    this.darkModeLightHover = true
                    this.darkModeSystemHover = false
                    this.darkModeDarkHover = false
                    break

                case 'dark':
                    this.darkModeDarkHover = true
                    this.darkModeSystemHover = false
                    this.darkModeLightHover = false
                    break

                default:
                    break
            }
        },
        darkModeHoverUnActive(mode) {
            switch (mode) {
                case 'system':
                    this.darkModeSystemHover = false
                    break

                case 'light':
                    this.darkModeLightHover = false
                    break

                case 'dark':
                    this.darkModeDarkHover = false
                    break

                default:
                    break
            }
        },
    },
}
</script>
