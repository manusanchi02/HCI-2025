<template>
    <div :class="$style.profileView">
        <Header title="Profilo Utente" />
        <div :class="$style.userInfo">
            <div :class="$style.profileImageContainer">
                <img v-if="profilePicture" :src="profilePicture" :class="$style.profileImage" alt="Profile Picture" />
                <div v-else :class="$style.profileImagePlaceholder">
                    <span>{{ username.charAt(0).toUpperCase() }}</span>
                </div>
            </div>
            <div :class="$style.infoField">
                <div :class="$style.fieldLabel">Username</div>
                <div :class="$style.fieldValue">{{ username }}</div>
            </div>
            <div :class="$style.infoField">
                <div :class="$style.fieldLabel">Email</div>
                <div :class="$style.fieldValue">{{ email }}</div>
            </div>
        </div>
        <FloatingButton :icon="logoutIcon" :onClick="handleLogout" />
        <NavBar></NavBar>
        
        <ConfirmDialog
            v-model:show="showLogoutDialog"
            title="Conferma logout"
            message="Sei sicuro di voler effettuare il logout?"
            confirm-text="Logout"
            cancel-text="Annulla"
            @confirm="confirmLogout"
        />
    </div>
    
</template>
<script lang="ts">
import Header from "../components/Header.vue";
import FloatingButton from "../components/FloatingButton.vue";
import NavBar from "../components/NavBar.vue";
import ConfirmDialog from "../components/ConfirmDialog.vue";
import { getData, isUserLoggedIn } from "../utils/storage";
import logoutIcon from '../assets/images/logout.svg';

export default {
    data() {
        return {
            username: "",
            email: "",
            profilePicture: "",
            logoutIcon: logoutIcon,
            showLogoutDialog: false,
        };
    },
    components: {
        Header,
        FloatingButton,
        NavBar,
        ConfirmDialog
    },
    mounted() {
        if (!isUserLoggedIn()) {
            this.$router.push('/login');
            return;
        }

        const data = getData();
        if (data && data.user) {
            this.username = data.user.username || "";
            this.email = data.user.email || "";
            this.profilePicture = data.user.profilePicture || "";
        }
    },
    methods: {
        handleLogout() {
            this.showLogoutDialog = true;
        },
        confirmLogout() {
            sessionStorage.setItem("userLoggedIn", "false");
            this.$router.push('/login');
        },
    },
};
</script>
<style module>
.profileView {
    width: 100%;
    height: 933px;
    position: relative;
    background-color: #f2f4f2;
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

.userInfo {
    align-self: stretch;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 16px;
    box-sizing: border-box;
    gap: 30px;
}

.profileImageContainer {
    width: 150px;
    height: 150px;
    position: relative;
    border-radius: 100px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.profileImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profileImagePlaceholder {
    width: 100%;
    height: 100%;
    background-color: #cd471f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
    color: #fff;
    font-weight: bold;
}

.infoField {
    width: 100%;
    max-width: 359px;
    border-radius: 8px;
    border: 1px solid #cac4d0;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 16px;
    gap: 4px;
}

.fieldLabel {
    font-size: 12px;
    color: #49454f;
    letter-spacing: 0.1px;
    line-height: 16px;
    text-align: left;
}

.fieldValue {
    font-size: 16px;
    color: #1d1b20;
    letter-spacing: 0.1px;
    line-height: 20px;
    text-align: left;
    word-break: break-word;
}
</style>
