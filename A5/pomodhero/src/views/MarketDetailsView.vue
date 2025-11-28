<template>
    <div :class="$style.marketdetails">

        <div :class="$style.header">
            <div :class="$style.leftheader">
                <img :class="$style.leftheaderChild" alt="" />
                <b :class="$style.pomodhero">Dettaglio prodotto</b>
            </div>
            <div :class="$style.rightheader">
                <div :class="$style.icon">
                    <div :class="$style.layer1">
                        <div :class="$style.layer1">
                            <img :class="$style.path26Icon" alt="" />
                            <div :class="$style.g29">
                                <img :class="$style.path27Icon" alt="" />
                                <img :class="$style.path28Icon" alt="" />
                                <img :class="$style.path29Icon" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="$style.content">
            <b :class="$style.latte">Latte</b>
            <div :class="$style.immagine">
                <img :class="$style.image1Icon" alt="" />
            </div>
            <div :class="$style.dettagliProdotto">
                <b :class="$style.b">3€</b>
                <b :class="$style.cetriolhero">Cetriolhero</b>
                <b :class="$style.pomodhero">25/11/2025 - 30/11/2025</b>
            </div>
        </div>
        <div :class="$style.floatingButton">
            <img :class="$style.confirmIcon" alt="" />
        </div>
        <div :class="$style.tabbar">
            <div :class="$style.home">
                <img :class="$style.icon2" alt="" />
                <div :class="$style.home2">home</div>
            </div>
            <div :class="$style.bacheca">
                <div :class="$style.icon3">
                    <div :class="$style.iconChild" />
                    <div :class="$style.iconItem" />
                    <div :class="$style.iconInner" />
                    <div :class="$style.rectangleDiv" />
                </div>
                <div :class="$style.home2">bacheca</div>
            </div>
            <div :class="$style.home">
                <img :class="$style.icon2" alt="" />
                <div :class="$style.home2">chat</div>
            </div>
        </div>
        <div :class="$style.gestureBar">
            <div :class="$style.handle" />
        </div>
    </div>
</template>
<style module>
.marketdetails {
    width: 100%;
    height: 933px;
    position: relative;
    border-radius: 28px;
    background-color: #f2f4f2;
    border: 8px solid #cac4d0;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    font-size: 14px;
    color: #1d1b20;
    font-family: Roboto;
}

.statusBar {
    align-self: stretch;
    height: 52px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 10px 24px;
    box-sizing: border-box;
    position: relative;
    isolation: isolate;
    gap: 20px;
}

.time {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 20px;
    font-weight: 500;
    z-index: 0;
}

.rightIcons {
    height: 17px;
    width: 46px;
    position: relative;
    z-index: 1;
}

.cameraCutoutIcon {
    height: 24px;
    width: 24px;
    position: absolute;
    margin: 0 !important;
    top: 18px;
    left: calc(50% - 12px);
    z-index: 2;
}

.header {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 36px;
    text-align: center;
    font-size: 32px;
    color: #191c1b;
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

.content {
    align-self: stretch;
    height: 576px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 18px;
    box-sizing: border-box;
    gap: 5px;
    text-align: center;
    font-size: 45px;
    color: #00483c;
}

.latte {
    width: 169px;
    height: 50px;
    position: relative;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.immagine {
    width: 304px;
    height: 299px;
    position: relative;
    border-radius: 25px;
    overflow: hidden;
    flex-shrink: 0;
}

.image1Icon {
    position: absolute;
    top: 23px;
    left: 36px;
    border-radius: 30px;
    width: 232px;
    height: 252px;
    object-fit: cover;
}

.dettagliProdotto {
    height: 184px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 19px 28px;
    box-sizing: border-box;
    gap: 5px;
    font-size: 20px;
}

.b {
    width: 162px;
    height: 41px;
    position: relative;
    font-size: 25px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.cetriolhero {
    width: 162px;
    height: 41px;
    position: relative;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.floatingButton {
    width: 412px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px;
    box-sizing: border-box;
}

.confirmIcon {
    height: 60px;
    width: 60px;
    border-radius: 50px;
}

.tabbar {
    align-self: stretch;
    height: 70px;
    background-color: #fff;
    border-top: 1px solid #bbb;
    box-sizing: border-box;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 31px 0px;
    gap: 10px;
    font-size: 12px;
    color: #adadad;
}

.home {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.icon2 {
    width: 30px;
    position: relative;
    max-height: 100%;
}

.home2 {
    position: relative;
}

.bacheca {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #00483c;
}

.icon3 {
    width: 27px;
    height: 30px;
    position: relative;
    background-color: #00483c;
}

.iconChild {
    position: absolute;
    top: 0px;
    left: 41.5px;
    border-radius: 4px;
    background-color: #d9d9d9;
    width: 27px;
    height: 30px;
}

.iconItem {
    position: absolute;
    top: 5.5px;
    left: 46.5px;
    border-radius: 2px;
    background-color: #d9d9d9;
    width: 17px;
    height: 8px;
}

.iconInner {
    position: absolute;
    top: 16.5px;
    left: 55.5px;
    border-radius: 2px;
    background-color: #d9d9d9;
    width: 8px;
    height: 8px;
}

.rectangleDiv {
    position: absolute;
    top: 16.5px;
    left: 46.5px;
    border-radius: 2px;
    background-color: #d9d9d9;
    width: 6px;
    height: 8px;
}

.gestureBar {
    align-self: stretch;
    height: 24px;
    position: relative;
    background-color: #fff;
}

.handle {
    position: absolute;
    top: calc(50% - 2px);
    left: calc(50% - 54px);
    border-radius: 12px;
    background-color: #1d1b20;
    width: 108px;
    height: 4px;
}
</style>