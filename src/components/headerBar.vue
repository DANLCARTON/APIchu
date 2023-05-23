<template>
    <div id="header" :class="{'visible': isVisible}">
        <p>APICHU</p>
    </div>
</template>

<script>
export default {
    name: 'headerBar',
    data() {
        return {
            isVisible: true,
            //previousScrollPosition: window.scrollY,
        }
    },
    methods: {
        atScroll() {
            const currentScrollPosition = window.scrollY;
            if (currentScrollPosition > 0) {
                this.isVisible = false;
            } else {
                this.isVisible = true;
            }
            //this.previousScrollPosition = currentScrollPosition;
        }   
    },
    mounted() {
        window.addEventListener('scroll', this.atScroll);
    }
}
</script>

<style scoped>

div {
    background: #46b6da;
    color: white;
    font-size: 30px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1000;
    box-shadow: 0 0 10px #00000050;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ease-in-out .2s;
}

.visible {
    top:-100px;
}

p {
    margin: 4px 0;
}

</style>