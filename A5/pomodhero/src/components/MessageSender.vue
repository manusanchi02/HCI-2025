<template>
	<div :class="$style.messagemine">
		<div :class="$style.box2">
			<div :class="$style.msgSender">{{ message }}</div>
			<div :class="$style.div2">{{ time }}</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "MessageSender",
	props: {
		message: {
			type: String,
			required: true
		},
		time: {
			type: String,
			required: true
		}
	}
}
</script>

<style module>
.messagemine {
	align-self: stretch;
	overflow: hidden;
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	text-align: right;
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

.msgSender {
	position: relative;
	letter-spacing: 1px;
	line-height: 20px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-size: 24px;
	color: #191c1b;
	max-width: 247px;
	word-wrap: break-word;
}

.div2 {
	position: relative;
	font-size: 16px;
	letter-spacing: 1px;
	line-height: 20px;
	color: #747474;
	text-align: left;
}
</style>
