<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faXmark)
</script>

<template>
    <div class="profile-detail">
        <section class="profile-detail__information">
            <span class="profile-detail__information-banner">
                <figure class="profile-detail__information-banner-avatar"></figure>
                <p class="profile-detail__information-banner-username">Adam Lee</p>
                <h3 class="profile-detail__information-banner-name">@AdamLee</h3>
            </span>
            <h3 class="profile-detail__information-email">name@email.com</h3>
            <button class="profile-detail__information-button button-white">Change Pasword</button>
        </section>
        <section class="profile-detail__activity">
            <h5 class="profile-detail__activity-title">Recent Activity</h5>
            <p class="profile-detail__activity-subtitle">Today</p>
            <ul class="profile-detail__activity-notify">
                <li class="profile-detail__activity-notify-item">
                    <figure class="profile-detail__activity-notify-item-avatar"></figure>
                    <span class="profile-detail__activity-notify-item-content">
                        <h5 class="profile-detail__activity-notify-item-content-up">Title</h5>
                        <p class="profile-detail__activity-notify-item-content-down">Content of notify</p>
                    </span>
                    <span class="profile-detail__activity-notify-item-time">
                        <span class="profile-detail__activity-notify-item-time-point"></span>
                        <p class="profile-detail__activity-notify-item-time-text">2h ago</p>
                    </span>
                    <button class="profile-detail__activity-notify-item-icon">
                        <FontAwesomeIcon icon="xmark"/>
                    </button>
                </li>
                <li class="profile-detail__activity-notify-item">
                    <figure class="profile-detail__activity-notify-item-avatar"></figure>
                    <span class="profile-detail__activity-notify-item-content">
                        <h5 class="profile-detail__activity-notify-item-content-up">Title</h5>
                        <p class="profile-detail__activity-notify-item-content-down">Content of notify</p>
                    </span>
                    <span class="profile-detail__activity-notify-item-time">
                        <span class="profile-detail__activity-notify-item-time-point"></span>
                        <p class="profile-detail__activity-notify-item-time-text">2h ago</p>
                    </span>
                    <button class="profile-detail__activity-notify-item-icon">
                        <FontAwesomeIcon icon="xmark"/>
                    </button>
                </li>
                <li class="profile-detail__activity-notify-item">
                    <figure class="profile-detail__activity-notify-item-avatar"></figure>
                    <span class="profile-detail__activity-notify-item-content">
                        <h5 class="profile-detail__activity-notify-item-content-up">Title</h5>
                        <p class="profile-detail__activity-notify-item-content-down">Content of notify</p>
                    </span>
                    <span class="profile-detail__activity-notify-item-time">
                        <span class="profile-detail__activity-notify-item-time-point"></span>
                        <p class="profile-detail__activity-notify-item-time-text">2h ago</p>
                    </span>
                    <button class="profile-detail__activity-notify-item-icon">
                        <FontAwesomeIcon icon="xmark"/>
                    </button>
                </li>
            </ul>
            <button class="profile-detail__activity-button button-blight">Show more</button>
        </section>
    </div>
</template>

<style scoped lang="scss">
.profile-detail {
    width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 20px;
    &__information {
        width: 100%;
        height: 300px;
        background: black;
        border-radius: 20px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        &-banner {
            display: flex;
            height: 150px;
            background: linear-gradient(to bottom, #3f8ecf, #5c00b3);
            border-radius: 8px;
            position: relative;
            padding: 10px;
            gap: 10px;
            &-avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: black;
            }
            &-name {
                position: absolute;
                bottom: 15px;
                left: 15px;
                color: white;
            }
        }
        &-email {
            color: #3f8ecf;
        }
    }
    &__activity {
        flex: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;
        &-subtitle {
            background: #3f8ecf;
            color: white;
            padding: 4px;
            border-radius: 4px;
            position: absolute;
            right: 0;
            top: 2px;
            font-size: 12px;
        }
        &-notify {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 10px;
            &-item {
                background-color: white;
                border-radius: 8px;
                padding: 2.5px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                gap: 10px;
                cursor: pointer;
                &-avatar {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background: black;
                }
                &-content {
                    &-down {
                        color: #3f8ecf;
                        font-size: 12px;
                    }
                }
                &-time {
                    &-text {
                        color: gray;
                        font-size: 12px;
                    }
                }
                &-icon {
                    background: transparent;
                    cursor: pointer;
                    color: #3f8ecf;
                }
            }
        }
    }
}

@media screen and (max-width: 900px) {
    .profile-detail {
        display: none;
    }
}
</style>