<script setup>
import Dashboard from '../components/Dashboard.vue';
import LeftBar from '../components/LeftBar.vue';
</script>

<template>
  <div class="viewport">
    <LeftBar/>
    <Dashboard />
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
  .viewport {
    height: 100vh;
    width: 100vw;
    padding: 15px;
    background-color: #eeeeee;
    display: flex;
    gap: 40px;
    overflow-y: auto;
  }

  @media screen and (max-width: 1024px) {
    .viewport {
      gap: 15px;
    }
  }
</style>
