<template>
  	<div :class="$style.property1default">
    		<router-link style="text-decoration: none; color: inherit;" to="/" :class="$style.home">
      			<img :class="$style.icon" src="../assets/images/home.svg" alt="" />
      			<div :class="$style.home2">home</div>
    		</router-link>
    		<router-link style="text-decoration: none; color: inherit;" to="/market" :class="$style.home">
      			<img :class="$style.icon" src="../assets/images/market.svg" alt="" />
      			<div :class="$style.home2">bacheca</div>
    		</router-link>
    		<router-link style="text-decoration: none; color: inherit;" to="/chat-list" :class="$style.home">
      			<img :class="$style.icon" src="../assets/images/chat.svg" alt="" />
      			<div :class="$style.home2">chat</div>
    		</router-link>
  	</div>
</template>
<style  module>.property1default {
  	width: 100%;
  	height: 105px;
  	position: relative;
  	background-color: #fff;
  	border-top: 1px solid #bbb;
  	box-sizing: border-box;
  	overflow: hidden;
  	display: flex;
  	align-items: center;
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