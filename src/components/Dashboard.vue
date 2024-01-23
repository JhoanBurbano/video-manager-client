<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ProfileDetail from "./ProfileDetail.vue";
import TopBar from "./TopBar.vue";
import Wall from './Wall.vue';

const userData = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get("auth/data");
    userData.value = response.data;
  } catch (error) {
    console.error('Error al obtener datos del usuario:', error);
  }
});
</script>

<template>
  <div class="dashboard" v-if="userData">
    <TopBar :userData="userData" />
    <main class="dashboard__content">
      <Wall />
      <ProfileDetail :userData="userData" />
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
