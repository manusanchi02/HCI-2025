<template>
  	<div :class="$style.chatList">
    		<div :class="$style.header">
      			<div :class="$style.leftheader">
        				<img :class="$style.leftheaderChild" alt="" src="../assets/images/back.svg"/>
        				<b :class="$style.pomodhero">Chat</b>
      			</div>
      			<div :class="$style.rightheader">
        				<img :class="$style.icon" alt="" src="../assets/images/logo.svg"/>
      			</div>
    		</div>
    		<div :class="$style.content">
      			<div :class="$style.frameParent">
        				<div :class="$style.cWrapper">
          					<b :class="$style.c">C</b>
        				</div>
        				<i :class="$style.cetriolhero">CETRIOLHERO</i>
      			</div>
      			<div :class="$style.frameParent">
        				<div :class="$style.cWrapper">
          					<b :class="$style.c">F</b>
        				</div>
        				<i :class="$style.cetriolhero">FRANCESCO</i>
      			</div>
      			<div :class="$style.frameParent">
        				<div :class="$style.cWrapper">
          					<b :class="$style.c">E</b>
        				</div>
        				<i :class="$style.cetriolhero">EMANUELE</i>
      			</div>
      			<div :class="$style.frameParent">
        				<div :class="$style.cWrapper">
          					<b :class="$style.c">T</b>
        				</div>
        				<i :class="$style.cetriolhero">TOMMASO</i>
      			</div>
      			<div :class="$style.frameParent">
        				<div :class="$style.cWrapper">
          					<b :class="$style.c">C</b>
        				</div>
        				<i :class="$style.cetriolhero">CATIA</i>
      			</div>
    		</div>
    		<div :class="$style.tabbar">
      			<div :class="$style.home">
        				<img :class="$style.icon2" alt="" src="../assets/images/home.svg"/>
        				<div :class="$style.home2">home</div>
      			</div>
      			<div :class="$style.home">
						<img :class="$style.icon2" alt="" src="../assets/images/market.svg"/>
        				<div :class="$style.home2">bacheca</div>
      			</div>
      			<div :class="$style.chat">
        				<img :class="$style.icon2" alt=""  src="../assets/images/chat.svg"/>
        				<div :class="$style.home2">chat</div>
      			</div>
    		</div>
  	</div>
</template>
<style  module>.chatList {
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
    		font-size: 14px;
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
  	.chat {
    		flex: 1;
    		overflow: hidden;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: center;
    		gap: 10px;
    		color: #00483c;
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