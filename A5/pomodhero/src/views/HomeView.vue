<template>
    <div :class="$style.home">
        <Header title="Home"></Header>
        <div :class="$style.content">
            <div :class="$style.homelistitem">
                <div :class="$style.dateframe">
                    <div :class="$style.weekdayframe">
                        <i :class="$style.lun">Lun</i>
                    </div>
                    <div :class="$style.numberdayframe">
                        <img :class="$style.calendaricon" alt="" />
                        <i :class="$style.i">24</i>
                        <i :class="$style.nov">Nov</i>
                    </div>
                </div>
                <div :class="$style.mealframe">
                    <div :class="$style.lunchframe">
                        <i :class="$style.pranzo">Pranzo</i>
                        <i :class="$style.lun">1 Ricetta</i>
                        <i :class="$style.ingredienti">3 ingredienti</i>
                    </div>
                    <div :class="$style.lunchframe">
                        <i :class="$style.cena">Cena</i>
                        <i :class="$style.lun">2 Ricette</i>
                        <i :class="$style.ingredienti">6 ingredienti</i>
                    </div>
                    <div :class="$style.opendetailsbutton">
                        <div :class="$style.spacer" />
                        <img :class="$style.opendetailsicon" alt="" />
                    </div>
                </div>
            </div>
            <div :class="$style.homelistitem2">
                <div :class="$style.dateframe">
                    <div :class="$style.weekdayframe2">
                        <i :class="$style.lun">Mar</i>
                    </div>
                    <div :class="$style.numberdayframe2">
                        <img :class="$style.calendaricon" alt="" />
                        <i :class="$style.i">25</i>
                        <i :class="$style.nov">Nov</i>
                    </div>
                </div>
                <div :class="$style.mealframe2">
                    <div :class="$style.lunchframe">
                        <i :class="$style.pranzo">Pranzo</i>
                        <i :class="$style.lun">1 Ricetta</i>
                        <i :class="$style.ingredienti">3 ingredienti</i>
                    </div>
                    <div :class="$style.lunchframe">
                        <i :class="$style.cena">Cena</i>
                        <i :class="$style.lun">2 Ricette</i>
                        <i :class="$style.ingredienti">6 ingredienti</i>
                    </div>
                    <div :class="$style.opendetailsbutton">
                        <div :class="$style.spacer" />
                        <img :class="$style.opendetailsicon" alt="" />
                    </div>
                </div>
            </div>
            <div :class="$style.homelistitem">
                <div :class="$style.dateframe">
                    <div :class="$style.weekdayframe">
                        <i :class="$style.lun">Mer</i>
                    </div>
                    <div :class="$style.numberdayframe">
                        <img :class="$style.calendaricon" alt="" />
                        <i :class="$style.i">26</i>
                        <i :class="$style.nov">Nov</i>
                    </div>
                </div>
                <div :class="$style.mealframe">
                    <div :class="$style.lunchframe">
                        <i :class="$style.pranzo">Pranzo</i>
                        <i :class="$style.lun">0 Ricette</i>
                        <i :class="$style.ingredienti">0 ingredienti</i>
                    </div>
                    <div :class="$style.lunchframe">
                        <i :class="$style.cena">Cena</i>
                        <i :class="$style.lun">2 Ricette</i>
                        <i :class="$style.ingredienti">6 ingredienti</i>
                    </div>
                    <div :class="$style.opendetailsbutton">
                        <div :class="$style.spacer" />
                        <img :class="$style.opendetailsicon" alt="" />
                    </div>
                </div>
            </div>
            <div :class="$style.homelistitem">
                <div :class="$style.dateframe">
                    <div :class="$style.weekdayframe">
                        <i :class="$style.lun">Giov</i>
                    </div>
                    <div :class="$style.numberdayframe">
                        <img :class="$style.calendaricon" alt="" />
                        <i :class="$style.i">27</i>
                        <i :class="$style.nov">Nov</i>
                    </div>
                </div>
                <div :class="$style.mealframe">
                    <div :class="$style.lunchframe">
                        <i :class="$style.pranzo">Pranzo</i>
                        <i :class="$style.lun">1 Ricetta</i>
                        <i :class="$style.ingredienti">3 ingredienti</i>
                    </div>
                    <div :class="$style.lunchframe">
                        <i :class="$style.cena">Cena</i>
                        <i :class="$style.lun">2 Ricette</i>
                        <i :class="$style.ingredienti">6 ingredienti</i>
                    </div>
                    <div :class="$style.opendetailsbutton">
                        <div :class="$style.spacer" />
                        <img :class="$style.opendetailsicon" alt="" />
                    </div>
                </div>
            </div>
            <div :class="$style.homelistitem">
                <div :class="$style.dateframe">
                    <div :class="$style.weekdayframe">
                        <i :class="$style.lun">Ven</i>
                    </div>
                    <div :class="$style.numberdayframe">
                        <img :class="$style.calendaricon" alt="" />
                        <i :class="$style.i">28</i>
                        <i :class="$style.nov">Nov</i>
                    </div>
                </div>
                <div :class="$style.mealframe">
                    <div :class="$style.lunchframe">
                        <i :class="$style.pranzo">Pranzo</i>
                        <i :class="$style.lun">1 Ricetta</i>
                        <i :class="$style.ingredienti">3 ingredienti</i>
                    </div>
                    <div :class="$style.lunchframe">
                        <i :class="$style.cena">Cena</i>
                        <i :class="$style.lun">2 Ricette</i>
                        <i :class="$style.ingredienti">6 ingredienti</i>
                    </div>
                    <div :class="$style.opendetailsbutton">
                        <div :class="$style.spacer" />
                        <img :class="$style.opendetailsicon" alt="" />
                    </div>
                </div>
            </div>
            <div :class="$style.homelistitem">
                <div :class="$style.dateframe">
                    <div :class="$style.weekdayframe">
                        <i :class="$style.lun">Sab</i>
                    </div>
                    <div :class="$style.numberdayframe">
                        <img :class="$style.calendaricon" alt="" />
                        <i :class="$style.i">29</i>
                        <i :class="$style.nov">Nov</i>
                    </div>
                </div>
                <div :class="$style.mealframe">
                    <div :class="$style.lunchframe">
                        <i :class="$style.pranzo">Pranzo</i>
                        <i :class="$style.lun">1 Ricetta</i>
                        <i :class="$style.ingredienti">3 ingredienti</i>
                    </div>
                    <div :class="$style.lunchframe">
                        <i :class="$style.cena">Cena</i>
                        <i :class="$style.lun">2 Ricette</i>
                        <i :class="$style.ingredienti">6 ingredienti</i>
                    </div>
                    <div :class="$style.opendetailsbutton">
                        <div :class="$style.spacer" />
                        <img :class="$style.opendetailsicon" alt="" />
                    </div>
                </div>
            </div>
            <div :class="$style.homelistitem">
                <div :class="$style.dateframe">
                    <div :class="$style.weekdayframe">
                        <i :class="$style.lun">Dom</i>
                    </div>
                    <div :class="$style.numberdayframe">
                        <img :class="$style.calendaricon" alt="" />
                        <i :class="$style.i">30</i>
                        <i :class="$style.nov">Nov</i>
                    </div>
                </div>
                <div :class="$style.mealframe">
                    <div :class="$style.lunchframe">
                        <i :class="$style.pranzo">Pranzo</i>
                        <i :class="$style.lun">1 Ricetta</i>
                        <i :class="$style.ingredienti">3 ingredienti</i>
                    </div>
                    <div :class="$style.lunchframe">
                        <i :class="$style.cena">Cena</i>
                        <i :class="$style.lun">2 Ricette</i>
                        <i :class="$style.ingredienti">6 ingredienti</i>
                    </div>
                    <div :class="$style.opendetailsbutton">
                        <div :class="$style.spacer" />
                        <img :class="$style.opendetailsicon" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <nav-bar></nav-bar>
    </div>
</template>
<script lang="ts">
import Header from '../components/Header.vue';
import NavBar from '../components/NavBar.vue';   

export default {
    components: {
        Header,
        NavBar
    }
}
</script>
<style module>
.home {
    width: 100%;
    height: 933px;
    position: relative;
    box-sizing: border-box;
    background-color: #f2f4f2;
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
    height: 676px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 18px;
    box-sizing: border-box;
    font-size: 25px;
    color: #003027;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}

.homelistitem {
    width: 385px;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 9px 14px;
    box-sizing: border-box;
    gap: 10px;
    flex-shrink: 0;
}

.dateframe {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px 0px;
    gap: 8px;
}

.weekdayframe {
    align-self: stretch;
    border-radius: 15px;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 0px;
}

.lun {
    position: relative;
}

.numberdayframe {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    padding: 0px 10px;
    gap: 10px;
    font-size: 20px;
}

.calendaricon {
    height: 19px;
    width: 19px;
    position: relative;
    flex-shrink: 0;
}

.i {
    position: relative;
    flex-shrink: 0;
}

.nov {
    position: relative;
    color: #00483c;
    flex-shrink: 0;
}

.mealframe {
    align-self: stretch;
    border-radius: 25px;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px 0px 15px;
    font-size: 14px;
    color: #69817c;
}

.lunchframe {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 10px;
}

.pranzo {
    width: 73px;
    height: 25px;
    position: relative;
    font-size: 24px;
    display: inline-block;
    color: #003027;
    flex-shrink: 0;
}

.ingredienti {
    width: 75px;
    height: 19px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
}

.cena {
    width: 54px;
    height: 25px;
    position: relative;
    font-size: 24px;
    display: inline-block;
    color: #003027;
    flex-shrink: 0;
}

.opendetailsbutton {
    border-radius: 25px;
    background-color: #edb931;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 4px;
    gap: 1px;
}

.spacer {
    height: 10px;
    width: 1px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
}

.opendetailsicon {
    height: 20px;
    width: 11px;
    position: relative;
}

.homelistitem2 {
    width: 385px;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 9px 14px;
    box-sizing: border-box;
    gap: 10px;
    flex-shrink: 0;
    color: #fff;
}

.weekdayframe2 {
    align-self: stretch;
    border-radius: 15px;
    background-color: #00483c;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 0px;
}

.numberdayframe2 {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    padding: 0px 10px;
    gap: 10px;
    font-size: 20px;
    color: #003027;
}

.mealframe2 {
    align-self: stretch;
    border-radius: 25px;
    background-color: #edb931;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px 0px 15px;
    cursor: pointer;
    font-size: 14px;
    color: #09463a;
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

.home2 {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #00483c;
}

.icon2 {
    width: 30px;
    position: relative;
    max-height: 100%;
}

.bacheca {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.icon3 {
    width: 27px;
    height: 30px;
    position: relative;
    background-color: #adadad;
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