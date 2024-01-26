<template>
  <section class="uploads">
    <h3 class="uploads__title">Media Uploads</h3>
    <ul class="uploads__content">
      <li class="uploads__content-item" v-for="publication in data" :key="publication._id">
        <h3 class="uploads__content-item-title">{{ publication.name }}</h3>
        <button v-if="props?.userId === publication.author?._id" class="uploads__content-item-cross"
          @click="() => onDelete(publication)" title="delete">
          <FontAwesomeIcon icon="trash" />
        </button>
        <template v-if="isPhoto(publication)">
          <v-lazy-image class="uploads__content-item-media" :src="publication.url" :alt="publication.name"
            placeholder="/ruta/de/tu/imagen-de-carga.jpg" />
        </template>
        <template v-else>
          <video class="uploads__content-item-media" :src="publication.url" controls>
            Tu navegador no soporta el tag de video.
          </video>
        </template>
        <span class="uploads__content-item-description" :innerHTML="publication.description || `<p>No hay descripcion</p>`"></span>
        <span class="uploads__content-item-author">
          <img class="uploads__content-item-author-avatar" :src="publication?.author?.avatar" alt="avatar"
            :title="`${publication?.author?.name.split(' ').at(0)} ${publication?.author?.lastname}`">
          <p class="uploads__content-item-author-username">@{{ `${publication?.author?.name.split(' ').at(0)}${publication?.author?.lastname}`}}</p>
        </span>
      </li>
      <li class="uploads__content-empty" v-if="data.length === 0">
        <h4 class="uploads__content-empty-text">No hay publicaciones que mostrar</h4>
      </li>
    </ul>
  </section>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VLazyImage from 'v-lazy-image';

library.add(faTrash)

export default {
  props: {
    data: Array,
    userId: String,
  },
  components: {
    VLazyImage,
    FontAwesomeIcon
  },
  setup: (props, { emit }) => {
    function onDelete(file) {
      emit('delete-media', file)
    }
    return {
      onDelete,
      props
    }
  },
  methods: {
    isPhoto(publication) {
      return publication?.type === "image" || (publication.filename?.includes(".jpeg") || publication.filename?.includes(".jpg") || publication.filename?.includes(".png") || publication.filename?.includes(".webp") || publication.filename?.includes(".gif") || publication.filename?.includes(".heic"));
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
      position: relative;
      border: 1px dashed #3f8ecf;
      padding: 5px;
      display: flex;
      flex-direction: column;
      &-description {
        font-size: 12px;
        word-break: break-all;
        margin-bottom: 5px;
      }

      &-title {
        font-size: 13px;
        padding: 5px;
        background-color: #3f8ecf;
        color: white;
        text-align: center;
        text-transform: capitalize;
      }

      &-cross {
        font-weight: bold;
        color: white;
        position: absolute;
        background-color: transparent;
        top: 13px;
        right: 10px;
        cursor: pointer;
      }

      &-media {
        width: 100%;
      }

      &-author {
        display: flex;
        height: 30px;
        align-items: end;
        justify-content: space-between;
        flex-grow: 1;
        &-avatar {
          width: 25px;
          border-radius: 50%;
        }

        &-username {
          font-size: 12px;
        }
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
}</style>
