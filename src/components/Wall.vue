<script>
import { ref, onMounted } from 'vue';
import UploadVideo from './UploadVideo.vue';
import MediaList from './MediaList.vue';
import axios from 'axios';

export default {
  props: {
    userId: String
  },
  components: {
    UploadVideo,
    MediaList,
  },
  setup(props) {
    const mediaData = ref([]);

    const fetchData = async () => {
      try {
        const response = await axios.get('media');
        mediaData.value = response.data.data;
      } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
      }
    };

    const onDelete = async (file) => {
        try {
            const { data } = await axios.delete('media/' + file._id)
            await fetchData()
        } catch (error) {
        console.error('Error al eliminar las publicaciones:', error);
            
        }
    }

    onMounted(fetchData);

    return {
      mediaData,
      fetchData,
      onDelete,
      props
    };
  },
};
</script>

<template>
  <div class="wall">
    <UploadVideo @video-uploaded="fetchData" />
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
    <MediaList :data="mediaData" @delete-media="onDelete" :userId="props?.userId"/>
  </div>
</template>

<style scoped lang="scss">
.wall {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
