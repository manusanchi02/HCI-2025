<template>
	<div v-if="show" :class="$style.dialogOverlay" @click="handleOverlayClick">
		<div :class="$style.dialogBox" @click.stop>
			<h2 :class="$style.dialogTitle">{{ title }}</h2>
			<p :class="$style.dialogMessage">{{ message }}</p>
			<div :class="$style.dialogButtons">
				<button v-if="showCancel" :class="$style.cancelButton" @click="cancel">{{ cancelText }}</button>
				<button :class="$style.confirmButton" @click="confirm">{{ confirmText }}</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ConfirmDialog',
	props: {
		show: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: 'Conferma'
		},
		message: {
			type: String,
			required: true
		},
		confirmText: {
			type: String,
			default: 'OK'
		},
		cancelText: {
			type: String,
			default: 'Annulla'
		},
		showCancel: {
			type: Boolean,
			default: true
		},
		closeOnOverlay: {
			type: Boolean,
			default: true
		}
	},
	emits: ['confirm', 'cancel', 'update:show'],
	methods: {
		confirm() {
			this.$emit('confirm');
			this.$emit('update:show', false);
		},
		cancel() {
			this.$emit('cancel');
			this.$emit('update:show', false);
		},
		handleOverlayClick() {
			if (this.closeOnOverlay) {
				this.cancel();
			}
		}
	}
};
</script>

<style module>
.dialogOverlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
}

.dialogBox {
	background: white;
	border-radius: 24px;
	padding: 32px 24px;
	max-width: 320px;
	width: 90%;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.dialogTitle {
	font-size: 24px;
	font-weight: 600;
	color: #003027;
	margin: 0 0 16px 0;
	text-align: center;
}

.dialogMessage {
	font-size: 16px;
	color: #1d1b20;
	margin: 0 0 24px 0;
	text-align: center;
	line-height: 1.5;
}

.dialogButtons {
	display: flex;
	gap: 12px;
	justify-content: center;
}

.cancelButton,
.confirmButton {
	flex: 1;
	padding: 14px 24px;
	border-radius: 24px;
	font-size: 16px;
	font-weight: 600;
	cursor: pointer;
	border: none;
	transition: all 0.2s;
}

.cancelButton {
	background: #f2f4f2;
	color: #003027;
}

.cancelButton:hover {
	background: #e5e7e5;
}

.confirmButton {
	background: #CD471F;
	color: white;
}

.confirmButton:hover {
	background: #b33e1a;
}
</style>
