<template>
    <section class="upload-video">
      <span class="upload-video__drag" v-bind="getRootProps()">
        <input class="upload-video__drag-input" v-bind="getInputProps()" />
        <p class="upload-video__drag-title" v-if="isDragActive">
          Suelta los archivos aquí...
        </p>
        <p class="upload-video__drag-text" v-else>
          Arrastra y suelta algunos archivos aquí, o haz clic para seleccionar archivos
        </p>
      </span>
      <button class="upload-video__attach button-white-blue" @click="open">Adjuntar</button>
      <VideoQueue v-if="isFilesQueue" :videos="videoQueue" @close="closeVideoQueue" @send-request="saveFiles" />
    </section>
  </template>
  
  <script>
  import { useDropzone } from "vue3-dropzone";
  import axios from "axios";
  import VideoQueue from "./VideoQueue.vue";
  import { ref } from 'vue';
  
  export default {
    components: {
      VideoQueue,
    },
    setup(props, { emit }) {
      const url = import.meta.env.VITE_API_URL + "upload";
      const isFilesQueue = ref(false);
      const videoQueue = ref([]);
  
      const saveFiles = (files) => {
        const formData = new FormData();
  
        const altData = [];
  
        for (let x = 0; x < files.length; x++) {
          formData.append("media", files[x]);
          console.log('files[x] :>> ', files[x]);
          altData.push({
            altName: files[x].altName,
            description: files[x].description,
            size: files[x].description,
          });
        }
  
        formData.append('altData', altData);
  
        axios
          .post(url, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.info(response.data);
            emit('video-uploaded');
            alert('Se ha subido el archivo')
          })
          .catch((err) => {
            console.error(err);
          });
      };
  
      function onDrop(acceptedFiles) {
        videoQueue.value = acceptedFiles;
        isFilesQueue.value = true;
        console.log(acceptedFiles);
      }
  
      const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
        onDrop,
      });
  
      const closeVideoQueue = () => {
        isFilesQueue.value = false;
      };
  
      return {
        getRootProps,
        getInputProps,
        open,
        isDragActive,
        isFilesQueue,
        videoQueue,
        closeVideoQueue,
        saveFiles,
      };
    },
  };
  </script>
  
  <style scoped lang="scss">
  .upload-video {
    height: 300px;
    background: linear-gradient(to bottom, #4f185f, #4f3ba7);
    border-radius: 40px;
    position: relative;
    padding: 20px;
  
    &__drag {
      display: flex;
      width: 100%;
      height: 100%;
      color: white;
      border: 2px dashed white;
      border-radius: 20px;
      padding: 20px;
      justify-content: center;
      align-items: center;
    }
  
    &__attach {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  </style>
  