<template>
    <div :class="$style.marketdetails">
        <Header title="Dettagli"></Header>
        <div :class="$style.content">
            <div :class="$style.scrollableContent">
                <b :class="$style.latte">{{ title }}</b>
                <div :class="$style.immagine">
                    <img :class="$style.image1Icon" :src="image" alt="" />
                </div>
                <div :class="$style.dettagliProdotto">
                    <b :class="$style.b">{{ price }}€</b>
                    <b :class="$style.quantity" v-if="quantity">Quantità: {{ quantity }}</b>
                    <b :class="$style.cetriolhero">{{ username }}</b>
                    <b :class="$style.pomodhero">{{ dateRange }}</b>
                </div>
            </div>
            <FloatingButton v-if="showButton" :icon="buttonIcon" :onClick="handleButtonClick" navbarOffset />
        </div>
        <ConfirmDialog
            v-model:show="showDeleteDialog"
            title="Conferma eliminazione"
            :message="deleteDialogMessage"
            confirmText="Elimina"
            cancelText="Annulla"
            @confirm="confirmDelete"
        />
        <nav-bar></nav-bar>
    </div>
</template>
<script lang="ts">
import Header from '../components/Header.vue';
import NavBar from '../components/NavBar.vue';
import FloatingButton from '../components/FloatingButton.vue';
import ConfirmDialog from '../components/ConfirmDialog.vue';
import contactIcon from '../assets/images/contact.svg';
import deleteIcon from '../assets/images/delete-white.svg';
import { getData, setData, isUserLoggedIn } from '../utils/storage';

export default {
    components: {
        Header,
        NavBar,
        FloatingButton,
        ConfirmDialog,
    },
    data() {
        return {
            contactIcon: contactIcon,
            deleteIcon: deleteIcon,
            showDeleteDialog: false,
            deleteDialogMessage: ''
        };
    },
    computed: {
        image() {
            return this.$route.query.image || '';
        },
        title() {
            return this.$route.query.title || '';
        },
        username() {
            return this.$route.query.username || '';
        },
        price() {
            return this.$route.query.price || 0;
        },
        expiryDate() {
            return this.$route.query.expiryDate || '';
        },
        uploadDate() {
            return this.$route.query.uploadDate || '';
        },
        quantity() {
            return this.$route.query.quantity || '';
        },
        dateRange() {
            if (this.uploadDate && this.expiryDate) {
                return `${this.uploadDate} - ${this.expiryDate}`;
            }
            return this.expiryDate ? `scade il ${this.expiryDate}` : '';
        },
        isUserLoggedIn() {
            return isUserLoggedIn();
        },
        isMyItem() {
            if (!this.isUserLoggedIn) return false;
            const data = getData();
            return data && data.user && data.user.username === this.username;
        },
        buttonIcon() {
            return this.isMyItem ? this.deleteIcon : this.contactIcon;
        },
        showButton() {
            return this.isUserLoggedIn;
        }
    },
    methods: {
        handleButtonClick() {
            if (this.isMyItem) {
                this.showDeleteConfirmation();
            } else {
                this.openChat();
            }
        },
        showDeleteConfirmation() {
            this.deleteDialogMessage = `Sei sicuro di voler eliminare "${this.title}" dalla bacheca?`;
            this.showDeleteDialog = true;
        },
        confirmDelete() {
            const data = getData();
            if (data && data.market) {
                // Rimuovo l'oggetto dal market filtrando per nome e utente
                data.market = data.market.filter(item => 
                    !(item.name === this.title && item.user === this.username)
                );
                setData(data);
                // Torno alla vista del market
                this.$router.push('/market');
            }
        },
        openChat() {
            if (this.username) {
                this.$router.push({
                    name: 'ChatView',
                    params: {
                        username: this.username
                    },
                    query: {
                        fromMarket: 'true'
                    }
                });
            }
        }
    },
}
</script>
<style module>
.marketdetails {
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

.content {
    align-self: stretch;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 45px;
    color: #00483c;
}

.scrollableContent {
    align-self: stretch;
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 18px;
    box-sizing: border-box;
    gap: 5px;
    min-height: 0;
}

.latte {
    width: 169px;
    height: 50px;
    position: relative;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.immagine {
    width: 304px;
    height: 299px;
    position: relative;
    border-radius: 25px;
    overflow: hidden;
    flex-shrink: 0;
}

.image1Icon {
    position: absolute;
    top: 23px;
    left: 36px;
    border-radius: 30px;
    width: 232px;
    height: 252px;
    object-fit: cover;
}

.dettagliProdotto {
    height: 184px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 19px 28px;
    box-sizing: border-box;
    gap: 5px;
    font-size: 20px;
}

.b {
    width: 162px;
    height: 41px;
    position: relative;
    font-size: 25px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.quantity {
    width: 162px;
    height: 41px;
    position: relative;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.cetriolhero {
    width: 162px;
    height: 41px;
    position: relative;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.pomodhero {
    position: relative;
    line-height: 28px;
}
</style>