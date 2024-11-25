<script setup lang="ts">
import { ref } from "vue"
import DialogComponent from './components/DialogComponent.vue';
import TreeComponent from './components/TreeComponent.vue'
import { mockFolders } from "./mock/folder";

const isOpen = ref(false);
</script>

<template>
  <section class="app">
    <button @click="isOpen = true">
      Открыть окно
    </button>
    <section class="content">
      <DialogComponent v-model="isOpen">
        <TreeComponent 
          title="Дерево папок" 
          :folders="mockFolders" 
          @close="isOpen = false"
        />
      </DialogComponent>
    </section>
  </section>
</template>
