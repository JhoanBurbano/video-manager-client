<script setup>
import UploadVideo from './UploadVideo.vue';
import { ref } from 'vue';
</script>

<template>
  <div class="wall">
    <UploadVideo @video-uploaded="reloadMediaList" />
    <section class="wall__creators">
      <h3>Trending Creators</h3>
      <span class="wall__creators-content">
        <figure class="wall__creators-content-item"></figure>
        <figure class="wall__creators-content-item"></figure>
        <figure class="wall__creators-content-item"></figure>
        <figure class="wall__creators-content-item"></figure>
        <figure class="wall__creators-content-item"></figure>
        <figure class="wall__creators-content-item"></figure>
        <figure class="wall__creators-content-item"></figure>
      </span>
    </section>
    <MediaList :key="mediaListKey" />
  </div>
</template>

<script>
import MediaList from './MediaList.vue';

export default {
  components: {
    MediaList,
  },
  setup() {
    const mediaListKey = ref(0);

    const reloadMediaList = () => {
      // Incrementa la clave para forzar la recarga de MediaList
      mediaListKey.value += 1;
    };

    return {
      mediaListKey,
      reloadMediaList,
    };
  },
};
</script>

<style scoped lang="scss">
.wall {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &__banner {
    height: 400px;
    border-radius: 32px;
    background: linear-gradient(to bottom, #4f185f, #4f3ba7);
    padding: 90px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    display: none;
    &-text {
      color: white;
      font-size: 40px;
    }
    &-image {
      position: absolute;
      right: 0;
      top: 50%;
      width: 500px;
      transform: translateY(-50%);
    }
    &-buttons {
      display: flex;
      gap: 20px;
      &-button {
        padding: 20px;
        border-radius: 8px;
        cursor: pointer;
        &:hover {
          background: #150552;
          color: white;
        }
      }
    }
  }
  &__creators {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    &-content {
      display: flex;
      gap: 20px;
      @media screen and (max-width: 1024px) {
        display: grid;
        gap: 5px;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-items: center;
      }
      &-item {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(to right, #a7cdf8, #945aff);
        cursor: pointer;
      }
    }
  }
  &__uploads {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    &-view {
      position: absolute;
      top: 0;
      right: 0;
      color: #008ae6;
      cursor: pointer;
    }
    &-content {
      display: flex;
      width: max-content;
      height: 250px;
      gap: 10px;
      &-upload {
        width: 250px;
        height: 250px;
        background-color: #999;
        border-radius: 8px;
        display: block;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .wall {
    &__banner {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      gap: 10px;
      &-text {
        font-size: 30px;
      }
      &-image {
        transform: none;
        position: static;
        width: 400px;
      }
    }
    &__creators {
      &-content {
        &-item {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}
</style>
