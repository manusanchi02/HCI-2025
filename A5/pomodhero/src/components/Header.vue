<template>
    <div :class="$style.header">
        <div :class="$style.leftheader">
            <img :class="$style.leftheaderChild" @click="goBack" src="../assets/images/back.svg" alt="" />
            <b :class="$style.pomodhero">Pomodhero</b>
        </div>
        <div :class="$style.rightheader">
            <div :class="$style.icon">
                <div :class="$style.layer1">
                    <div :class="$style.layer1">
                        <img :class="$style.path26Icon" src="../assets/images/logo.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Header",
    methods: {
        goBack() {
            // move back in history
        }
    }
};
</script>
<style module>
.header {
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 36px;
    box-sizing: border-box;
    text-align: center;
    font-size: 32px;
    color: #191c1b;
    font-family: Roboto;
}

.leftheader {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px 0px;
    gap: 15px;
}

.leftheaderChild {
    width: 22px;
    height: 22px;
}

.pomodhero {
    position: relative;
    line-height: 28px;
}

.rightheader {
    align-self: stretch;
    flex: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.icon {
    height: 64px;
    width: 64px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
}

.layer1 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
}

.path26Icon {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
}

.g29 {
    position: absolute;
    height: 82.97%;
    width: 80.63%;
    top: 5.39%;
    right: 9.7%;
    bottom: 11.64%;
    left: 9.67%;
}

.path27Icon {
    position: absolute;
    height: 28.06%;
    width: 36.43%;
    top: 0%;
    right: 31.75%;
    bottom: 71.94%;
    left: 31.81%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
}

.path28Icon {
    position: absolute;
    height: 21.09%;
    width: 34.3%;
    top: 78.94%;
    right: 32.79%;
    bottom: -0.03%;
    left: 32.91%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
}

.path29Icon {
    position: absolute;
    height: 46.89%;
    width: 100%;
    top: 27.97%;
    right: 0%;
    bottom: 25.14%;
    left: 0%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
}
</style>