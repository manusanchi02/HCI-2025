<template>
	<div :class="$style.messageother">
		<div :class="$style.box">
			<div :class="$style.msgReceiver">{{ message }}</div>
			<div :class="$style.div">{{ time }}</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "MessageReceiver",
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

.msgReceiver {
	position: relative;
	letter-spacing: 1px;
	line-height: 20px;
	font-size: 24px;
	color: #003027;
}

.div {
	position: relative;
	font-size: 16px;
	letter-spacing: 1px;
	line-height: 20px;
	color: #0f634d;
}
</style>
