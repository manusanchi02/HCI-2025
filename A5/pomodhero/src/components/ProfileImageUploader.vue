<script>
import userDefaultImage from '../assets/images/user-line.svg';
import ConfirmDialog from './ConfirmDialog.vue';

export default {
  components: {
    ConfirmDialog,
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      defaultImage: userDefaultImage,
      showDialog: false,
      dialogMessage: "",
    };
  },
  mounted() {
    if (!this.modelValue) {
      this.loadDefaultImageAsBase64();
    }
  },
  methods: {
    async loadDefaultImageAsBase64() {
      try {
        const response = await fetch(userDefaultImage);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onload = (e) => {
          this.$emit("update:modelValue", e.target.result);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("Failed to load default image:", error);
      }
    },
    handleClick() {
      this.$refs.fileInput.click();
    },
    showAlert(message) {
      this.dialogMessage = message;
      this.showDialog = true;
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (!file) return;

      if (!file.type.startsWith("image/")) {
        this.showAlert("Per favore seleziona un file immagine valido");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        this.$emit("update:modelValue", e.target.result);
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<template>
  <div :class="$style.imageUploader" @click="handleClick">
    <img
      :class="$style.userImage"
      :src="modelValue || defaultImage"
      alt="User profile"
    />
    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      :class="$style.hiddenInput"
      @change="handleFileChange"
    />
    
    <ConfirmDialog
      v-model:show="showDialog"
      title="Errore"
      :message="dialogMessage"
      confirm-text="OK"
      :show-cancel="false"
    />
  </div>
</template>

<style module>
.imageUploader {
  cursor: pointer;
  position: relative;
}

.userImage {
  width: 150px;
  height: 150px;
  border-radius: 100px;
  border: 1px solid black;
  object-fit: cover;
}

.imageUploader:hover .userImage {
  opacity: 0.8;
}

.hiddenInput {
  display: none;
}
</style>
