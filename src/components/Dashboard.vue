<script setup>
import ProfileDetail from "./ProfileDetail.vue";
import TopBar from "./TopBar.vue";
import Wall from "./Wall.vue";
</script>

<template>
  <div class="dashboard">
    <TopBar />
    <main class="dashboard__content">
        <Wall/>
        <ProfileDetail/>
    </main>
  </div>
</template>

<style scoped lang="scss">
    .dashboard {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
        &__content {
            display: flex;
            width: 100%;
        }
    }
</style>