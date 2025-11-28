<script>
import Header from "../components/Header.vue";
import InputChip from "../components/InputChip.vue";
import { getData, setData, isUserLoggedIn } from "../utils/storage";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      isLogin: false,
    };
  },
  components: {
    Header,
    InputChip,
  },
  mounted() {
    if (isUserLoggedIn()) {
      this.$router.go(-1);
      return;
    }
    
    const data = getData();
    if (data && data.user && data.user.username) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  methods: {
    handleSubmit() {
      const data = getData();
      
      if (this.isLogin) {
        if (!this.username || !this.password) {
          alert("Per favore inserisci username e password");
          return;
        }
        
        if (data.user.username !== this.username) {
          alert("Username non trovato");
          return;
        }
        
        if (data.user.password !== this.password) {
          alert("Password errata");
          return;
        }
        
        sessionStorage.setItem("userLoggedIn", "true");
        this.$router.go(-1);
      } else {
        if (!this.username) {
          alert("Per favore inserisci un username");
          return;
        }
        
        if (!this.email) {
          alert("Per favore inserisci un'email");
          return;
        }
        
        if (!this.password) {
          alert("Per favore inserisci una password");
          return;
        }
        
        data.user = {
          username: this.username,
          email: this.email,
          password: this.password,
          profilePicture: "",
        };
        
        setData(data);
        sessionStorage.setItem("userLoggedIn", "true");
        this.$router.go(-1);
      }
    },
  },
};
</script>
<template>
  <div :class="$style.logInSignIn">
    <Header :title="isLogin ? 'Login' : 'Sign In'" />
    <div :class="$style.userImage">
      <img
        :class="$style.userImageChild"
        alt=""
        src="../assets/images/user.svg"
      />
      <InputChip
        v-model="username"
        type="text"
        placeholder="Username"
      />
      <InputChip
        v-if="!isLogin"
        v-model="email"
        type="email"
        placeholder="Email"
      />
      <InputChip
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <div :class="$style.submitButton" @click="handleSubmit">
        <b :class="$style.invia">Invia</b>
      </div>
    </div>
  </div>
</template>
<style module>
.logInSignIn {
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
}
.userImage {
  align-self: stretch;
  height: 746px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 27px 16px;
  box-sizing: border-box;
  gap: 10px;
  font-size: 24px;
  color: #49454f;
}
.userImageChild {
  width: 150px;
  height: 150px;
  position: relative;
  border-radius: 100px;
  border: 1px solid black;
}
.inputChip2 {
  height: 48px;
  width: 359px;
  margin: 0 !important;
  position: absolute;
  top: 0px;
  left: calc(50% - 180px);
  border-radius: 8px;
  border: 1px solid #cac4d0;
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  z-index: 0;
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
.inputField {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: #1d1b20;
  font-family: Roboto;
}
.inputField::placeholder {
  color: #49454f;
  opacity: 0.7;
}
.submitButton {
  cursor: pointer;
  width: 150px;
  height: 62px;
  position: relative;
  border-radius: 25px;
  background-color: #cd471f;
  overflow: hidden;
  flex-shrink: 0;
  font-size: 30px;
  color: #fff;
}
.invia {
  position: absolute;
  top: 8px;
  left: calc(50% - 69px);
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 139px;
  height: 45px;
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
