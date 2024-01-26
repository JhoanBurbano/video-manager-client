<template>
  <div>
    <ejs-richtexteditor
      ref="defaultRTE"
      :height="150"
      :maxLength="500"
      :toolbarSettings="{ items: ['Bold', 'Italic', 'Underline', 'Formats', 'Alignments', 'OrderedList', 'UnorderedList'] }"
      :allowInsertImage="false"
      v-model="editorContent"
    >
      <p>Descripcion del video</p>
    </ejs-richtexteditor>
  </div>
</template>

<script>
import { Toolbar, Link, Count, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";

export default {
  provide: {
    richtexteditor: [Toolbar, Link, Count, HtmlEditor, QuickToolbar],
  },
  data() {
    return {
      editorContent: "Descripcion del video",
    };
  },
  watch: {
    editorContent(newValue) {
      // Emite un evento al componente padre con el contenido del editor cada vez que cambia
      this.$emit("on-save", newValue);
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
