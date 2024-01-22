<template>
    <section class="uploads">
      <h3 class="uploads__title">Media Uploads</h3>
      <ul class="uploads__content">
        <li class="uploads__content-item" v-for="publication in data" :key="publication._id">
          <h3 class="uploads__content-item-title">{{ publication.name }}</h3>
          <p class="uploads__content-item-description">{{ publication.description }}</p>
          <img :src="publication.url" :alt="publication.name" />
        </li>
        <li class="uploads__content-empty" v-if="data.length === 0">
            <h4 class="uploads__content-empty-text">No hay publicaciones que mostrar</h4>
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
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
          console.log('environmen: ', import.meta.env.VITE_API_URL)
          // Realiza la solicitud HTTP para obtener las publicaciones
          const response = await axios.get(import.meta.env.VITE_API_URL + "media");
          // Almacena los datos en la propiedad 'data'
          this.data = response.data.data;
        } catch (error) {
          console.error("Error al obtener las publicaciones:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  /* Agrega estilos según sea necesario */
  .uploads {
    &__content {
      position: relative;
      &-empty {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        &-text {
          font-size: 12px;
          color: gray
        }
      }
    }
  }
  </style>
  