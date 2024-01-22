<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faBell, faSearch)
</script>


<template>
    <nav class="top-bar">
        <section class="top-bar__search">
            <input type="text" name="" id="" placeholder="Search" class="top-bar__search-input">
            <span class="top-bar__search-icon">
                <FontAwesomeIcon icon="search" />
            </span>
        </section>
        <section class="top-bar__tabs">
            <button class="top-bar__tabs-item active">All items</button>
            <button class="top-bar__tabs-item">Art</button>
            <button class="top-bar__tabs-item">Sports</button>
            <button class="top-bar__tabs-item">Gaming</button>
            <button class="top-bar__tabs-item">Utility</button>
            <button class="top-bar__tabs-item">Cards</button>
        </section>
        <section class="top-bar__user">
            <span class="top-bar__user-icon">
                <FontAwesomeIcon icon="bell" />
            </span>
            <span class="top-bar__user-info">
                <figure class="top-bar__user-info-avatar">
                    <span class="top-bar__user-info-avatar-status"></span>
                </figure>
                <span class="top-bar__user-info-text">
                    <h4 class="top-bar__user-info-text-name">Adam Lee</h4>
                    <p class="top-bar__user-info-text-username">@adamlee</p>
                </span>
            </span>
        </section>
    </nav>
</template>

<style scoped lang="scss">
.top-bar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    gap: 15px;
    padding-right: 20px;
    &__search {
        width: 300px;
        position: relative;

        &-input {
            border: none;
            outline: none;
            padding: 15px;
            width: 100%;
            border-radius: 8px;
        }
        &-icon {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    &__tabs {
        flex: 1;
        display: flex;
        gap: 20px;
        &-item {
            padding: 10px;
            border-radius: 8px;
            background: white;
            cursor: pointer;
            &:hover {
                background: #150552;
                color: white;
            }
            &.active {
                background: #150552;
                color: white;
                font-weight: bold;
            }
        }
    }

    &__user {
        display: flex;
        align-items: center;
        gap: 20px;
        &-icon {
            position: relative;
            cursor: pointer;
        }
        &-info {
            display: flex;
            gap: 20px;
            &-avatar {
                width: 40px;
                height: 40px;
                background: linear-gradient(to right,#a7cdf8, #e35aff);
                border-radius: 50%;
                position: relative;
                cursor: pointer;
                &-status {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: #00dd00;
                    position: absolute;
                    top: 0px;
                    right: 5px;
                }
            }
            &-text {
                &-username {
                    font-style: italic;
                    font-size: 1.2ch;
                }
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .top-bar {
        display: flex;
        flex-direction: column-reverse;
        height: max-content;
    }
}
</style>