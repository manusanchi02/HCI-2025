<template>
  	<div :class="$style.recipedetails">
    		<div :class="$style.statusBar">
      			<div :class="$style.time">9:30</div>
      			<img :class="$style.rightIcons" alt="" />
      			<img :class="$style.cameraCutoutIcon" alt="" />
    		</div>
    		<div :class="$style.header">
      			<div :class="$style.leftheader">
        				<img :class="$style.leftheaderChild" alt="" />
        				<b :class="$style.pomodhero">Ricetta</b>
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
      			<div :class="$style.recipeTitle">
        				<div :class="$style.pomodhero">Titolo Ricetta</div>
      			</div>
      			<div :class="$style.recipeIngredient">
        				<div :class="$style.inputChip">
          					<div :class="$style.stateLayer">
            						<div :class="$style.labelText">Ingredient 1</div>
          					</div>
        				</div>
        				<div :class="$style.inputChip2">
          					<div :class="$style.stateLayer">
            						<div :class="$style.labelText">100 gr</div>
          					</div>
        				</div>
      			</div>
      			<div :class="$style.recipeIngredient">
        				<div :class="$style.inputChip">
          					<div :class="$style.stateLayer">
            						<div :class="$style.labelText">Ingredient 2</div>
          					</div>
        				</div>
        				<div :class="$style.inputChip2">
          					<div :class="$style.stateLayer">
            						<div :class="$style.labelText">2 L</div>
          					</div>
        				</div>
      			</div>
      			<div :class="$style.recipeIngredient">
        				<div :class="$style.inputChip">
          					<div :class="$style.stateLayer">
            						<div :class="$style.labelText">Ingredient 3</div>
          					</div>
        				</div>
        				<div :class="$style.inputChip2">
          					<div :class="$style.stateLayer">
            						<div :class="$style.labelText">4 u</div>
          					</div>
        				</div>
      			</div>
    		</div>
    		<div :class="$style.unexpected">
      			<div :class="$style.unexpectedButton">
        				<b :class="$style.unexpected2">Imprevisto</b>
      			</div>
    		</div>
    		<div :class="$style.gestureBar">
      			<div :class="$style.handle" />
    		</div>
  	</div>
</template>
<style  module>.recipedetails {
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
  	text-align: center;
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
    		text-align: left;
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
    		height: 644px;
    		background-color: #f2f4f2;
    		overflow: hidden;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		padding: 20px;
    		box-sizing: border-box;
    		gap: 10px;
    		font-size: 16px;
    		color: #49454f;
  	}
  	.recipeTitle {
    		align-self: stretch;
    		background-color: #f2f4f2;
    		overflow: hidden;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: center;
    		padding: 10px;
    		text-align: left;
    		font-size: 20px;
    		color: #000;
  	}
  	.recipeIngredient {
    		align-self: stretch;
    		height: 78px;
    		background-color: #f2f4f2;
    		overflow: hidden;
    		flex-shrink: 0;
    		display: flex;
    		align-items: flex-start;
    		flex-wrap: wrap;
    		align-content: flex-start;
    		padding: 10px 0px;
    		box-sizing: border-box;
    		gap: 10px;
  	}
  	.inputChip {
    		height: 58px;
    		width: 290px;
    		border-radius: 8px;
    		border: 1px solid #707975;
    		box-sizing: border-box;
    		overflow: hidden;
    		flex-shrink: 0;
    		display: flex;
    		align-items: center;
  	}
  	.stateLayer {
    		display: flex;
    		align-items: center;
    		justify-content: center;
    		padding: 6px 12px;
  	}
  	.labelText {
    		position: relative;
    		letter-spacing: 0.1px;
    		line-height: 20px;
  	}
  	.inputChip2 {
    		height: 58px;
    		width: 70px;
    		border-radius: 8px;
    		border: 1px solid #707975;
    		box-sizing: border-box;
    		overflow: hidden;
    		flex-shrink: 0;
    		display: flex;
    		align-items: center;
    		justify-content: center;
  	}
  	.unexpected {
    		align-self: stretch;
    		background-color: #f2f4f2;
    		overflow: hidden;
    		display: flex;
    		align-items: center;
    		justify-content: center;
    		padding: 20px;
    		font-size: 30px;
    		color: #fff;
  	}
  	.unexpectedButton {
    		height: 62px;
    		width: 188px;
    		position: relative;
    		border-radius: 25px;
    		background-color: #cd471f;
    		overflow: hidden;
    		flex-shrink: 0;
  	}
  	.unexpected2 {
    		position: absolute;
    		top: 16px;
    		left: calc(50% - 72px);
    		line-height: 28px;
  	}
  	.gestureBar {
    		align-self: stretch;
    		height: 24px;
    		position: relative;
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