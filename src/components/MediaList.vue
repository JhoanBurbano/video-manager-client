<template>
  <section class="uploads">
    <h3 class="uploads__title">Media Uploads</h3>
    <ul class="uploads__content">
      <li class="uploads__content-item" v-for="publication in data" :key="publication._id">
        <h3 class="uploads__content-item-title">{{ publication.name }}</h3>
        <template v-if="isPhoto(publication)">
          <v-lazy-image
            class="uploads__content-item-media"
            :src="publication.url"
            :alt="publication.name"
            placeholder="/ruta/de/tu/imagen-de-carga.jpg"
          />
        </template>
        <template v-else>
          <video class="uploads__content-item-media" :src="publication.url" controls>
            Tu navegador no soporta el tag de video.
          </video>
        </template>
        <p class="uploads__content-item-description">{{ publication.description || "No hay descripcion"}}</p>
      </li>
      <li class="uploads__content-empty" v-if="data.length === 0">
        <h4 class="uploads__content-empty-text">No hay publicaciones que mostrar</h4>
      </li>
    </ul>
  </section>
</template>

<script>
import VLazyImage from 'v-lazy-image';

export default {
  props: {
    data: Array,
    mediaListKey: Number,
  },
  components: {
    VLazyImage,
  },
  
  methods: {
    isPhoto(publication) {
      return publication?.type === "image" || (publication.filename?.includes(".jpeg") || publication.filename?.includes(".jpg") || publication.filename?.includes(".png") || publication.filename?.includes(".webp") || publication.filename?.includes(".gif")|| publication.filename?.includes(".heic"));
    },
  },
};
</script>

<style scoped lang="scss">
.uploads {
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
  @media screen and (max-width: 900px) {
    max-height: max-content;
  }
  &__content {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;
    &-item {
      width: 100%;
      cursor: pointer;
      &-description {
        font-size: 12px;
        word-break: break-all;
      }
      &-title {
        font-size: 13px;
        padding: 5px;
        background-color: #3f8ecf;
        color: white;
        text-align: center;
      }
      &-media {
        width: 100%;
      }
    }
    &-empty {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      &-text {
        font-size: 12px;
        color: gray;
      }
    }
  }
}
</style>
