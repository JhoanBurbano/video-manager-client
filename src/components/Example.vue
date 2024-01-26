<template>
    <div>
      <ejs-richtexteditor ref="defaultRTE" :height="400" v-model="editorContent" @input="handleEditorInput">
        <p>Descripcion del video</p>
      </ejs-richtexteditor>
      <button @click="logEditorContent">Guardar Contenido</button>
    </div>
  </template>
  
  <script>
  import { Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";
  
  export default {
    provide: {
      richtexteditor: [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar],
    },
    data() {
      return {
        editorContent: "Descripcion del video",
      };
    },
    methods: {
      handleEditorInput(value) {
        // Este método se ejecuta cada vez que cambia el contenido del editor
        this.editorContent = value;
      },
      logEditorContent() {
        // Puedes hacer algo con el contenido guardado, por ejemplo, imprimirlo en la consola
        console.log("Contenido del editor:", this.editorContent);
  
        // Emite un evento al componente padre con el contenido del editor
        this.$emit("on-save", this.editorContent);
      },
    },
  };
  </script>
  
  <style>
  @import "../../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
  @import "../../node_modules/@syncfusion/ej2-inputs/styles/bootstrap5.css";
  @import "../../node_modules/@syncfusion/ej2-lists/styles/bootstrap5.css";
  @import "../../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
  @import "../../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
  @import "../../node_modules/@syncfusion/ej2-navigations/styles/bootstrap5.css";
  @import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/bootstrap5.css";
  @import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/bootstrap5.css";
  </style>
  