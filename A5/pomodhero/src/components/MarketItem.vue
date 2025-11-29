<template>
    <div :class="$style.item" @click="goToDetails">
        <img :class="$style.figureIcon" :src="image" alt="" />
        <div :class="$style.details">
            <div :class="$style.nameanduser">
                <b :class="$style.title">{{ title }}</b>
                <div :class="$style.user">
                    <div :class="$style.usericon">
                        <b :class="$style.initial">{{ userInitial }}</b>
                    </div>
                    <i :class="$style.username">{{ username }}</i>
                </div>
            </div>
            <div :class="$style.space" />
            <div :class="$style.price">
                <div :class="$style.priceText">{{ price }}€</div>
            </div>
        </div>
        <div :class="$style.itemChild" />
        <div :class="$style.date">
            <i :class="$style.dateText">
                <span>scade il </span>
                <span :class="$style.dateValue"> {{ expiryDate }}</span>
            </i>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        image: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        price: {
            type: [Number, String],
            required: true
        },
        expiryDate: {
            type: String,
            required: true
        },
        uploadDate: {
            type: String,
            default: ''
        }
    },
    computed: {
        userInitial() {
            return this.username.charAt(0).toUpperCase();
        }
    },
    methods: {
        goToDetails() {
            this.$router.push({
                name: 'MarketDetailsView',
                query: {
                    image: this.image,
                    title: this.title,
                    username: this.username,
                    price: this.price,
                    expiryDate: this.expiryDate,
                    uploadDate: this.uploadDate
                }
            });
        }
    }
}
</script>

<style module>
.item {
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 0px 8px;
    box-sizing: border-box;
    gap: 6px;
}

.figureIcon {
    align-self: stretch;
    height: 126px;
    border-radius: 25px;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
}

.details {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    gap: 10px;
}

.nameanduser {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.title {
    position: relative;
    font-size: 20px;
    color: #003027;
    font-family: Roboto;
}

.user {
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 3px;
    text-align: center;
    font-size: 10px;
    color: #000;
}

.usericon {
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background-color: #edb931;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.initial {
    align-self: stretch;
    height: 15px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 10px;
    color: #000;
    font-family: Roboto;
}

.username {
    position: relative;
    font-size: 14px;
    color: #003027;
    text-align: left;
    font-family: Roboto;
}

.space {
    height: 11px;
    flex: 1;
    position: relative;
    overflow: hidden;
}

.price {
    align-self: stretch;
    border-radius: 14px;
    background-color: #edb931;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2px 8px;
}

.priceText {
    position: relative;
    font-size: 24px;
    color: #003027;
    font-family: Roboto;
}

.itemChild {
    width: 23px;
    flex: 1;
    position: relative;
    overflow: hidden;
}

.date {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 14px;
}

.dateText {
    position: relative;
    font-size: 10px;
    color: #003027;
    font-family: Roboto;
}

.dateValue {
    font-size: 15px;
}
</style>
