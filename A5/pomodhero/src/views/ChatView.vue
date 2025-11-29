<template>
	<div :class="$style.openedchat">
		<Header :title=username></Header>
		<div :class="$style.content">
			<div :class="$style.chat">
				<div :class="$style.messageother">
					<div :class="$style.box">
						<div :class="$style.ciaoDovePossiamo">Ciao dove possiamo vederci?</div>
						<div :class="$style.div">12:00</div>
					</div>
				</div>
				<div :class="$style.messagemine">
					<div :class="$style.box2">
						<div :class="$style.vediamociInVia">Vediamoci in via del pinzimonio</div>
						<div :class="$style.div2">12:03</div>
					</div>
				</div>
				<div :class="$style.messageother">
					<div :class="$style.box">
						<div :class="$style.ciaoDovePossiamo">Ok!</div>
						<div :class="$style.div">12:05</div>
					</div>
				</div>
			</div>
			<div :class="$style.inputParent">
				<div :class="$style.input">
					<div :class="$style.typeAMessage">Type a message...</div>
				</div>
				<img :class="$style.categoriesIconButton" alt="" src="../assets/images/send-msg.svg" />
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import Header from '../components/Header.vue';

export default {
	components: {
		Header
	},
	name: "ChatView",
    props: {
        username: {
            type: String,
            //default: 'Cetriolhero'
        }
    },
    methods: {
        /*goBack() {
            this.$router.go(-1);
        }*/
    }
}
</script>
<style module>
.openedchat {
	width: 100%;
	height: 933px;
	position: relative;
	background-color: #f2f4f2;
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
	height: 746px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	font-size: 24px;
	color: #003027;
}

.chat {
	align-self: stretch;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 10px 10px 18px;
	gap: 26px;
}

.messageother {
	align-self: stretch;
	overflow: hidden;
	display: flex;
	align-items: flex-start;
}

.box {
	border-radius: 25px 25px 25px 4px;
	background-color: #7bb6a6;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px 20px;
	gap: 4px;
}

.ciaoDovePossiamo {
	position: relative;
	letter-spacing: 1px;
	line-height: 20px;
}

.div {
	position: relative;
	font-size: 16px;
	letter-spacing: 1px;
	line-height: 20px;
	color: #0f634d;
}

.messagemine {
	align-self: stretch;
	overflow: hidden;
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	text-align: right;
	color: #191c1b;
}

.box2 {
	border-radius: 25px 25px 4px 25px;
	background-color: #d8dad8;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding: 16px 20px;
	gap: 4px;
}

.vediamociInVia {
	width: 247px;
	position: relative;
	letter-spacing: 1px;
	line-height: 20px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}

.div2 {
	position: relative;
	font-size: 16px;
	letter-spacing: 1px;
	line-height: 20px;
	color: #747474;
	text-align: left;
}

.inputParent {
	align-self: stretch;
	background-color: #fff;
	border-top: 1px solid #bbb;
	overflow: hidden;
	display: flex;
	align-items: center;
	padding: 22px 21px;
	gap: 10px;
	font-size: 16px;
	color: #72777a;
	font-family: 'DM Sans';
}

.input {
	flex: 1;
	border-radius: 18px;
	background-color: #fff;
	border: 1.5px solid #979c9e;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 13px 17px;
}

.typeAMessage {
	position: relative;
	line-height: 24px;
}

.categoriesIconButton {
	height: 50px;
	width: 50px;
	position: relative;
	border-radius: 34px;
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