<template>
  <section class="uploads">
    <h3 class="uploads__title">Media Uploads</h3>
    <ul class="uploads__content">
      <li class="uploads__content-item" v-for="publication in data" :key="publication._id">
        <h3 class="uploads__content-item-title">{{ publication.name }}</h3>
        <!-- Verifica si la publicación es una foto o un video -->
        <template v-if="isPhoto(publication)">
          <!-- Si es una foto, utiliza la etiqueta img con v-lazy-image -->
          <v-lazy-image
            class="uploads__content-item-media"
            :src="publication.url"
            :alt="publication.name"
            placeholder="/ruta/de/tu/imagen-de-carga.jpg"
          />
        </template>
        <template v-else>
          <!-- Si es un video, utiliza la etiqueta video -->
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
import axios from "axios";
import VLazyImage from 'v-lazy-image';

export default {
  props: {
    mediaListKey: Number
  } ,
  components: {
    VLazyImage,
  },
  data() {
    return {
      data: [], // Aquí se almacenarán los datos de las publicaciones
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        // Realiza la solicitud HTTP para obtener las publicaciones
        const response = await axios.get(import.meta.env.VITE_API_URL + "media");
        // Almacena los datos en la propiedad 'data'
        this.data = response.data.data;
      } catch (error) {
        console.error("Error al obtener las publicaciones:", error);
      }
    },
    // Verifica si la publicación es una foto
    isPhoto(publication) {
      return publication.name.includes(".jpeg") || publication.name.includes(".jpg") || publication.name.includes(".png"); // Ajusta esto según cómo estés manejando el tipo en tu servidor
    },
  },
};
</script>

<style scoped lang="scss">
.uploads {
  &__content {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;
    &-item {
      width: 100%;
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
