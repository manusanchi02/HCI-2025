<template>
	<div :class="$style.openedchat">
		<Header :title=username></Header>
		<div :class="$style.content">
			<div :class="$style.chat" ref="chatContainer">
				<div :class="$style.messagesWrapper">
					<template v-for="(msg, index) in allMessages" :key="index">
						<MessageReceiver v-if="msg.type === 'received'" :message="msg.text" :time="msg.time" />
						<MessageSender v-else :message="msg.text" :time="msg.time" />
					</template>
				</div>
			</div>
			<div :class="$style.inputParent">
				<div :class="$style.input">
					<input type="text" placeholder="Type a message..." :class="$style.typeAMessage" v-model="message" @keyup.enter="sendMessage" />
				</div>
				<div @click="sendMessage" style="cursor: pointer;">
					<img :class="$style.categoriesIconButton" alt="" src="../assets/images/send-msg.svg" />
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import Header from '../components/Header.vue';
import MessageReceiver from '../components/MessageReceiver.vue';
import MessageSender from '../components/MessageSender.vue';
import { getMessages, addMessage } from '../utils/storage';

export default {
	components: {
		Header,
		MessageReceiver,
		MessageSender
	},
	name: "ChatView",
	props: {
		username: {
			type: String,
			default: 'Cetriolhero'
		}
	},
	data() {
		return {
			message: '',
			allMessages: [],
			responseAlreadySent: false
		}
	},
	computed: {
		isFromMarket() {
			return this.$route.query.fromMarket === 'true';
		}
	},
	mounted() {
		// Load messages from storage
		this.allMessages = getMessages(this.username);
		
		// Add initial message only when coming from navbar (not from market) and no messages exist
		if (!this.isFromMarket && this.allMessages.length === 0) {
			const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
			const initialMessage = {
				type: 'received',
				text: 'Ciao dove possiamo vederci?',
				time: tenMinutesAgo.getHours().toString().padStart(2, '0') + ':' + 
				      tenMinutesAgo.getMinutes().toString().padStart(2, '0')
			};
			this.allMessages.push(initialMessage);
			addMessage(this.username, initialMessage);
		}
		
		this.$nextTick(() => {
			this.scrollToBottom();
		});
	},
	methods: {
		scrollToBottom() {
			if (this.$refs.chatContainer) {
				this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
			}
		},
		sendMessage() {
			if (this.message.trim() === '') return;
			
			const now = new Date();
			const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
			
			const sentMessage = {
				type: 'sent',
				text: this.message,
				time: time
			};
			
			this.allMessages.push(sentMessage);
			addMessage(this.username, sentMessage);
			
			this.message = '';
			
			this.$nextTick(() => {
				this.scrollToBottom();
			});
			
			// Handle automatic response based on access mode
			if (!this.responseAlreadySent) {
				this.responseAlreadySent = true;
				setTimeout(() => {
					const responseTime = new Date();
					const responseTimeStr = responseTime.getHours().toString().padStart(2, '0') + ':' + responseTime.getMinutes().toString().padStart(2, '0');
					
					const responseText = this.isFromMarket 
						? 'Vediamoci in piazza del pinzimonio alle 18:00'
						: 'Ok!';
					
					const receivedMessage = {
						type: 'received',
						text: responseText,
						time: responseTimeStr
					};
					
					this.allMessages.push(receivedMessage);
					addMessage(this.username, receivedMessage);
					
					this.$nextTick(() => {
						this.scrollToBottom();
					});
				}, 5000);
			}
		}
	}
}
</script>
<style module>
.openedchat {
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
	justify-content: flex-end;
	font-size: 24px;
	color: #003027;
}

.chat {
	align-self: stretch;
	flex: 1;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	min-height: 0;
}

.messagesWrapper {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 10px 10px 18px;
	gap: 26px;
	margin-top: auto;
	min-height: min-content;
}

.inputParent {
	align-self: stretch;
	background-color: #fff;
	border-top: 1px solid #bbb;
	overflow: hidden;
	display: flex;
	align-items: center;
	padding: 22px 21px;
	gap: 10px;
	font-size: 16px;
	color: #72777a;
	font-family: 'DM Sans';
}

.input {
	flex: 1;
	border-radius: 18px;
	background-color: #fff;
	border: 1.5px solid #979c9e;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 13px 17px;
}

.typeAMessage {
    position: relative;
    line-height: 24px;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-family: 'DM Sans';
    font-size: 16px;
    color: #72777a;
}

.categoriesIconButton {
	height: 50px;
	width: 50px;
	position: relative;
	border-radius: 34px;
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