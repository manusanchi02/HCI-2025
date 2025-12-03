<template>
	<div :class="$style.daydetails">
		<Header :title="weekDayIt"></Header>
		<div :class="$style.content">
			<div :class="$style.meal">
				<div :class="$style.name">
					<img src="../assets/images/meal.svg" :class="$style.primaryIcon" alt="" />
					<div :class="$style.pranzo">Pranzo</div>
				</div>
				<div :class="$style.recipies">
					<div v-for="recipe in lunchRecipes" :key="recipe.id" :class="$style.recipie">
						<div :class="$style.cont">
							<i :class="$style.pranzo">{{ recipe.title }}</i>
							<i :class="$style.ingredienti">{{ recipe.ingredients.length }} {{ recipe.ingredients.length
								=== 1 ? 'ingrediente' : 'ingredienti' }}</i>
						</div>
						<div :class="$style.deleteContainer" @click="confirmDelete(recipe.id, 'lunch')">
							<img src="../assets/images/delete.svg" :class="$style.deleteIcon" alt="" />
						</div>
					</div>
				</div>
				<div :class="$style.space" />
				<div :class="$style.addicons">
					<div v-on:click="openNewRecipie('audio', 'lunch')" :class="$style.button">
						<img src="../assets/images/mic.svg" alt="">
					</div>
					<div v-on:click="openNewRecipie('manual', 'lunch')" :class="$style.button">
						<img src="../assets/images/plus.svg" alt="">
					</div>
				</div>
			</div>
			<div :class="$style.meal">
				<div :class="$style.name">
					<img src="../assets/images/meal.svg" :class="$style.primaryIcon" alt="" />
					<div :class="$style.pranzo">Cena</div>
				</div>
				<div :class="$style.recipies2">
					<div v-for="recipe in dinnerRecipes" :key="recipe.id" :class="$style.recipie">
						<div :class="$style.name2">
							<i :class="$style.pranzo">{{ recipe.title }}</i>
							<i :class="$style.ingredienti">{{ recipe.ingredients.length }} {{ recipe.ingredients.length
								=== 1 ? 'ingrediente' : 'ingredienti' }}</i>
						</div>
						<div class="w-14 h-14 px-3.5 py-3 bg-white rounded-3xl inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden"
							@click="confirmDelete(recipe.id, 'dinner')">
							<img src="../assets/images/delete.svg" :class="$style.deletebuttonIcon" alt="" />
						</div>
					</div>
				</div>
				<div :class="$style.space" />
				<div :class="$style.addicons">
					<div v-on:click="openNewRecipie('audio', 'dinner')" :class="$style.button">
						<img src="../assets/images/mic.svg" alt="">
					</div>
					<div v-on:click="openNewRecipie('manual', 'dinner')" :class="$style.button">
						<img src="../assets/images/plus.svg" alt="">
					</div>
				</div>
			</div>
		</div>
		<nav-bar></nav-bar>

		<!-- Confirmation Dialog -->
		<ConfirmDialog
			v-model:show="showDeleteDialog"
			title="Conferma eliminazione"
			message="Sei sicuro di voler eliminare questa ricetta?"
			confirm-text="Elimina"
			cancel-text="Annulla"
			@confirm="deleteRecipe"
			@cancel="closeDialog"
		/>
	</div>
</template>
<script lang="ts">
import FloatingButton from '../components/FloatingButton.vue';
import Header from '../components/Header.vue';
import NavBar from '../components/NavBar.vue';
import ConfirmDialog from '../components/ConfirmDialog.vue';
import * as StorageUtils from '../utils/storage.js';

export default {
	components: {
		Header,
		NavBar,
		FloatingButton,
		ConfirmDialog
	},
	data() {
		return {
			showDeleteDialog: false,
			recipeToDelete: null,
			mealType: null,
			storageData: null
		};
	},
	mounted() {
		this.loadData();
	},
	props: {
		weekDay: {
			type: String,
			default: 'Monday'
		},
		dayNumber: {
			type: String,
			default: '24'
		},
		month: {
			type: String,
			default: 'November'
		}
	},
	computed: {
		weekDayIt() {
			const dayMap = {
				'Sunday': 'Domenica',
				'Monday': 'Lunedì',
				'Tuesday': 'Martedì',
				'Wednesday': 'Mercoledì',
				'Thursday': 'Giovedì',
				'Friday': 'Venerdì',
				'Saturday': 'Sabato'
			};
			return dayMap[this.weekDay] || this.weekDay;
		},
		dayData() {
			if (!this.storageData) return null;
			return this.storageData.days.find(d => d.name === this.weekDay);
		},
		lunchRecipes() {
			if (!this.dayData || !this.storageData) return [];
			return this.dayData.lunch.map(recipeId =>
				this.storageData.recipes.find(r => r.id === recipeId)
			).filter(r => r !== undefined);
		},
		dinnerRecipes() {
			if (!this.dayData || !this.storageData) return [];
			return this.dayData.dinner.map(recipeId =>
				this.storageData.recipes.find(r => r.id === recipeId)
			).filter(r => r !== undefined);
		}
	},
	methods: {
		openNewRecipie(method, meal) {
			this.$router.push({
				name: 'NewRecipe',
				params: {
					day: this.weekDay.toLowerCase(),
					meal: meal,
					method: method
				}
			});
		},
		loadData() {
			this.storageData = StorageUtils.getData();
		},
		openRecipeDetails(recipeId) {
			this.$router.push({ name: 'RecipieDetails', params: { id: recipeId } });
		},
		confirmDelete(recipeId, mealType) {
			this.recipeToDelete = recipeId;
			this.mealType = mealType;
			this.showDeleteDialog = true;
		},
		closeDialog() {
			this.showDeleteDialog = false;
			this.recipeToDelete = null;
			this.mealType = null;
		},
		deleteRecipe() {
			if (!this.recipeToDelete && this.recipeToDelete !== 0) 
			return;

			if (!this.mealType)
			return;

			const data = StorageUtils.getData();

			if (!data)
			return;

			const day = data.days.find(d => d.name === this.weekDay);

			if (!day)
			return;
			
			if (this.mealType === 'lunch') {
				day.lunch = day.lunch.filter(id => id !== this.recipeToDelete);
			} else if (this.mealType === 'dinner') {
				day.dinner = day.dinner.filter(id => id !== this.recipeToDelete);
			}

			StorageUtils.setData(data);


			this.loadData();
			this.closeDialog();
		}
	}
};
</script>
<style module>
.daydetails {
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
	flex: 1;
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
	display: flex;
	padding: 14px;
	justify-content: center;
	align-items: center;
	gap: 15px;
	align-self: stretch;
	border-radius: 31px;
	background: #EDB931;
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
	height: 30px;
	width: 30px;
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

.deleteContainer {
	display: flex;
	width: 60px;
	height: 60px;
	padding: 12px 15px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 21px;
	background: #FFF;
}

.cont {
	display: flex;
	padding-left: 14px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	flex: 1 0 0;
}

.button {
	display: flex;
	width: 60px;
	height: 60px;
	padding: 12px 15px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 50px;
	background: #CD471F;
}

.deleteContainer {
	cursor: pointer;
}
</style>