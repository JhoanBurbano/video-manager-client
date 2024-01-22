<template>
    <div class="video-queue-modal">
        <h3 class="video-queue-modal-title">Lista de archivos</h3>
      <ul class="video-queue">
        <li v-for="video in videos" :key="video.id" class="video-queue__item">
          <h3>{{ video.name}}</h3>
          <p>{{ video.description }}</p>
          <input v-model="video.altName" placeholder="Titulo del contenido" />
          <textarea v-model="video.description" placeholder="Descripcion del contenido"></textarea>
        </li>
    </ul>
    <span class="video-queue__button">
        <button @click="sendRequest" class="video-queue__button-item button-bdark">Enviar</button>
        <button @click="closeModal" class="video-queue__button-item button-red">Cerrar</button>
    </span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
    },
    methods: {
      closeModal() {
        this.$emit("close");
      },
      sendRequest() {
        this.$emit("send-request", this.videos);
        this.closeModal();
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .video-queue-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
    gap: 10px;
    &-title {
        color: white;
        background-color: #3f8ecf;
        padding: 5px;
        border-radius: 4px;
    }
  }
  
  .video-queue {
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-height: 80vh;
    overflow-y: auto;
    width: 80%;
  }
  
  .video-queue__item {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #3f8ecf;
    border-radius: 4px;
  }
  
  .video-queue__item h3 {
    margin-bottom: 10px;
  }
  
  input,
  textarea {
    width: 100%;
    margin-bottom: 10px;
    border: none;
    outline: none;
    border-bottom: 2px dashed  #3f8ecf;
    font-size: 12px;
    font-family: 'Manrope';
    resize: none;
  }

  input {
    padding-bottom: 10px;
  }

  .video-queue__button {
    display: flex;
    gap: 5px;
  }
  </style>
  