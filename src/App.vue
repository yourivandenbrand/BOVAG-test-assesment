<template>
    <div id="app">
        <div class="header">
            <div class="header__content">
                <div class="header__logo p-col-3 p-d-flex p-ai-center">
                    <img
                        class="header__logo-image"
                        src="@/assets/images/logo-bovag.svg"
                    />
                    <img
                        class="p-ml-5"
                        src="@/assets/images/logo-bovag-text.svg"
                    />
                </div>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style lang="scss">
@font-face {
    font-family: "Exo";
    src: url("./assets/fonts/Exo/Exo-VariableFont_wght.ttf");
}
body {
    margin: 0;
}
p {
    margin: 0;
}
button:focus {
    outline: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0 auto;
    font-family: "Exo";
}

.header {
    height: 64px;
    background-color: black;
    width: 100%;

    &__content {
        max-width: 1248px;
        margin: 0 auto;
        height: 100%;
    }

    &__logo {
        height: 100%;
        padding: 0 !important;
        margin: 3px 0 0 10px;
    }

    &__logo-image {
        max-height: 90%;
    }
}
</style>
