<template>
  	<div :class="$style.daydetails">
    		<div :class="$style.statusBar">
      			<div :class="$style.time">9:30</div>
      			<img :class="$style.rightIcons" alt="" />
      			<img :class="$style.cameraCutoutIcon" alt="" />
    		</div>
    		<div :class="$style.header">
      			<div :class="$style.leftheader">
        				<img :class="$style.leftheaderChild" alt="" />
        				<b :class="$style.pomodhero">Lunedì</b>
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
      			<div :class="$style.meal">
        				<div :class="$style.name">
          					<img :class="$style.primaryIcon" alt="" />
          					<div :class="$style.pranzo">Pranzo</div>
        				</div>
        				<div :class="$style.recipies">
          					<div :class="$style.recipie">
            						<div :class="$style.name2">
              							<i :class="$style.pranzo">Pasta al pesto</i>
              							<i :class="$style.ingredienti">2 ingredienti</i>
            						</div>
            						<img :class="$style.deletebuttonIcon" alt="" />
          					</div>
        				</div>
        				<div :class="$style.space" />
        				<div :class="$style.addicons">
          					<img :class="$style.audioinputIcon" alt="" />
          					<img :class="$style.audioinputIcon" alt="" />
        				</div>
      			</div>
      			<div :class="$style.meal">
        				<div :class="$style.name">
          					<img :class="$style.primaryIcon" alt="" />
          					<div :class="$style.pranzo">Cena</div>
        				</div>
        				<div :class="$style.recipies2" />
        				<div :class="$style.space" />
        				<div :class="$style.addicons">
          					<img :class="$style.audioinputIcon" alt="" />
          					<img :class="$style.audioinputIcon" alt="" />
        				</div>
      			</div>
    		</div>
    		<div :class="$style.tabbar">
      			<div :class="$style.home">
        				<img :class="$style.primaryIcon" alt="" />
        				<div :class="$style.pranzo">home</div>
      			</div>
      			<div :class="$style.bacheca">
        				<div :class="$style.icon3">
          					<div :class="$style.iconChild" />
          					<div :class="$style.iconItem" />
          					<div :class="$style.iconInner" />
          					<div :class="$style.rectangleDiv" />
        				</div>
        				<div :class="$style.pranzo">bacheca</div>
      			</div>
      			<div :class="$style.bacheca">
        				<img :class="$style.primaryIcon" alt="" />
        				<div :class="$style.pranzo">chat</div>
      			</div>
    		</div>
    		<div :class="$style.gestureBar">
      			<div :class="$style.handle" />
    		</div>
  	</div>
</template>
<style  module>.daydetails {
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
    		height: 676px;
    		overflow: hidden;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		padding: 0px 18px;
    		box-sizing: border-box;
    		gap: 20px;
    		font-size: 40px;
    		color: #003027;
  	}
  	.meal {
    		align-self: stretch;
    		flex: 1;
    		border-radius: 43px;
    		background-color: #fff;
    		overflow: hidden;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		padding: 18px;
    		gap: 10px;
  	}
  	.name {
    		align-self: stretch;
    		overflow: hidden;
    		display: flex;
    		align-items: center;
    		padding: 0px 13px;
    		gap: 17px;
  	}
  	.primaryIcon {
    		width: 30px;
    		position: relative;
    		max-height: 100%;
  	}
  	.pranzo {
    		position: relative;
  	}
  	.recipies {
    		align-self: stretch;
    		overflow: hidden;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: center;
    		font-size: 28px;
  	}
  	.recipie {
    		width: 100%;
    		border-radius: 31px;
    		background-color: #edb931;
    		overflow: hidden;
    		display: flex;
    		align-items: center;
    		justify-content: center;
    		padding: 14px;
    		box-sizing: border-box;
    		gap: 15px;
    		max-width: 100%;
  	}
  	.name2 {
    		flex: 1;
    		overflow: hidden;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: center;
    		padding: 0px 0px 0px 14px;
  	}
  	.ingredienti {
    		position: relative;
    		font-size: 20px;
    		color: #29584f;
  	}
  	.deletebuttonIcon {
    		height: 60px;
    		width: 60px;
    		border-radius: 21px;
  	}
  	.space {
    		width: 35px;
    		flex: 1;
    		position: relative;
    		overflow: hidden;
  	}
  	.addicons {
    		align-self: stretch;
    		overflow: hidden;
    		display: flex;
    		align-items: center;
    		justify-content: flex-end;
    		gap: 10px;
  	}
  	.audioinputIcon {
    		height: 60px;
    		width: 60px;
    		border-radius: 50px;
  	}
  	.recipies2 {
    		align-self: stretch;
    		height: 88px;
    		overflow: hidden;
    		flex-shrink: 0;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: center;
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
    		color: #00483c;
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