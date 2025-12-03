<template>
	<div :class="$style.chatList">
		<Header title="Chat"></Header>
		<div :class="$style.content">
			<div :class="$style.frameParent" @click="openChat('Cetriolhero')">
				<div :class="$style.cWrapper">
					<b :class="$style.c">C</b>
				</div>
				<i :class="$style.cetriolhero">CETRIOLHERO</i>
			</div>
			<div :class="$style.frameParent" @click="openChat('Francesco')">
				<div :class="$style.cWrapper">
					<b :class="$style.c">F</b>
				</div>
				<i :class="$style.cetriolhero">FRANCESCO</i>
			</div>
			<div :class="$style.frameParent" @click="openChat('Emanuele')">
				<div :class="$style.cWrapper">
					<b :class="$style.c">E</b>
				</div>
				<i :class="$style.cetriolhero">EMANUELE</i>
			</div>
			<div :class="$style.frameParent" @click="openChat('Tommaso')">
				<div :class="$style.cWrapper">
					<b :class="$style.c">T</b>
				</div>
				<i :class="$style.cetriolhero">TOMMASO</i>
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
	},
	methods: {
		openChat(username: string) {
			this.$router.push({ name: 'ChatView', params: { username } });
		}
	},
}
</script>
<style module>
.chatList {
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
	font-size: 32px;
	color: #1d1b20;
	font-family: Roboto;
}

.time {
	position: relative;
	letter-spacing: 0.01em;
	line-height: 20px;
	font-weight: 500;
	z-index: 0;
}

.content {
	align-self: stretch;
	flex: 1;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px 18px;
	box-sizing: border-box;
	gap: 5px;
	text-align: center;
	color: #000;
}

.frameParent {
	width: 100%;
	height: 80px;
	position: relative;
	border-radius: 25px;
	background-color: #fff;
	overflow: hidden;
	flex-shrink: 0;
}

.cWrapper {
	position: absolute;
	top: 10px;
	left: 13px;
	border-radius: 50px;
	background-color: #edb931;
	width: 60px;
	height: 60px;
	overflow: hidden;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding: 10px;
	box-sizing: border-box;
}

.c {
	height: 42px;
	width: 38px;
	position: relative;
	line-height: 28px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
}

.cetriolhero {
	position: absolute;
	top: calc(50% - 19px);
	left: 100.5px;
	font-size: 30px;
	display: inline-block;
	text-align: left;
	width: 268px;
	height: 41px;
}
</style>