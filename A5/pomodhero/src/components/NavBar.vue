<template>
	<div :class="$style.property1default">
		<router-link style="text-decoration: none;" to="/" :class="$style.home" active-class="active-link">
			<svg :class="$style.icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M16.2746 0.501025C15.5538 -0.167009 14.4403 -0.167009 13.7254 0.501025L0.59807 12.6897C0.0354712 13.2171 -0.152062 14.0316 0.129238 14.7466C0.410537 15.4615 1.0962 15.9361 1.86978 15.9361H2.80744V26.2496C2.80744 28.3182 4.48937 30 6.5581 30H23.436C25.5048 30 27.1867 28.3182 27.1867 26.2496V15.9361H28.1244C28.8979 15.9361 29.5895 15.4615 29.8708 14.7466C30.1521 14.0316 29.9645 13.2113 29.4019 12.6897L16.2746 0.501025ZM14.0594 18.7489H15.9347C17.4877 18.7489 18.7477 20.0088 18.7477 21.5617V27.1872H11.2464V21.5617C11.2464 20.0088 12.5064 18.7489 14.0594 18.7489Z" fill="#ADADAD"/>
			</svg>
			<div :class="$style.home2">home</div>
		</router-link>
		<router-link style="text-decoration: none;" to="/market" :class="$style.home" active-class="active-link">
			<svg :class="$style.icon" width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M23 0C25.2091 0 27 1.79086 27 4V26C27 28.2091 25.2091 30 23 30H4C1.79091 29.9999 1.12741e-07 28.2091 0 26V4C0 1.7909 1.79091 6.13402e-05 4 0H23ZM7 16.5C5.8955 16.5001 5 17.3955 5 18.5V22.5C5 23.6045 5.8955 24.4999 7 24.5H9C10.1046 24.5 11 23.6046 11 22.5V18.5C11 17.3954 10.1046 16.5 9 16.5H7ZM16 16.5C14.8955 16.5001 14 17.3955 14 18.5V22.5C14 23.6045 14.8955 24.4999 16 24.5H20C21.1046 24.5 22 23.6046 22 22.5V18.5C22 17.3954 21.1046 16.5 20 16.5H16ZM7 5.5C5.8955 5.50008 5.00001 6.39549 5 7.5V11.5C5 12.6045 5.8955 13.4999 7 13.5H20C21.1046 13.5 22 12.6046 22 11.5V7.5C22 6.39544 21.1046 5.5 20 5.5H7Z" fill="#ADADAD"/>
			</svg>
			<div :class="$style.home2">bacheca</div>
		</router-link>
		<router-link style="text-decoration: none;" to="/chat-list" :class="$style.home" active-class="active-link">
			<svg :class="$style.icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 18.75V5.625C0 2.51953 2.51953 0 5.625 0H24.375C27.4805 0 30 2.51953 30 5.625V18.75C30 21.8555 27.4805 24.375 24.375 24.375H17.3438C17.0391 24.375 16.7461 24.4746 16.5 24.6562L9.75 29.7188C9.50391 29.9004 9.21094 30 8.90625 30C8.12695 30 7.5 29.373 7.5 28.5938V24.375H5.625C2.51953 24.375 0 21.8555 0 18.75Z" fill="#ADADAD"/>
			</svg>
			<div :class="$style.home2">chat</div>
		</router-link>
	</div>
</template>
<style module>
.property1default {
	width: 100%;
	height: 105px;
	position: relative;
	background-color: #fff;
	border-top: 1px solid #bbb;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding: 12px 31px 0px;
	gap: 10px;
	text-align: left;
	font-size: 12px;
	color: #adadad;
	font-family: Roboto;
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

.icon {
	width: 30px;
	position: relative;
	max-height: 100%;
}

.home2 {
	position: relative;
	color: #adadad;
}

.icon2 {
	width: 27px;
	height: 30px;
	position: relative;
	background-color: #adadad;
}

.iconChild {
	position: absolute;
	top: 0px;
	left: 43.67px;
	border-radius: 4px;
	background-color: #d9d9d9;
	width: 27px;
	height: 30px;
}

.iconItem {
	position: absolute;
	top: 5.5px;
	left: 48.67px;
	border-radius: 2px;
	background-color: #d9d9d9;
	width: 17px;
	height: 8px;
}

.iconInner {
	position: absolute;
	top: 16.5px;
	left: 57.67px;
	border-radius: 2px;
	background-color: #d9d9d9;
	width: 8px;
	height: 8px;
}

.rectangleDiv {
	position: absolute;
	top: 16.5px;
	left: 48.67px;
	border-radius: 2px;
	background-color: #d9d9d9;
	width: 6px;
	height: 8px;
}
</style>

<style scoped>
:deep(.active-link) {
	color: #00483c !important;
}

:deep(.active-link) div {
	color: #00483c !important;
}

:deep(.active-link) svg path {
	fill: #00483c !important;
}
</style>