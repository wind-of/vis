<script setup lang="ts">
import { ref } from 'vue'
import RecursiveTree from './RecursiveTree.vue';
import type { Folder } from '../types/folder';

defineProps<{ title: string, folders: Folder[] }>()
defineEmits(["close", "select"])

const currentSelectedFolder = ref<Folder>()
</script>

<template>
  <section class="tree">
    <header>
      <h2>{{ title }}</h2>
    </header>
    <section class="content">
      <RecursiveTree 
        v-for="folder in folders" 
        :key="folder.id" 
        :folder="folder" 
        :selected-folder-id="currentSelectedFolder?.id" 
        @select="currentSelectedFolder = $event" 
      />
    </section>
    <section class="actions">
      <button class="close-button" @click="$emit('close')">Close</button>
      <button 
        class="ok-button" 
        :disabled="!currentSelectedFolder" 
        @click="$emit('select', currentSelectedFolder?.id)"
      >
        Ok
      </button>
    </section>
  </section>
</template>

<style scoped>
.tree {
  background-color: white;
  border: 1px solid #888;
  border-radius: .5rem;
}
.content {
  display: flex;
  flex-direction: column;
  width: min(70vw, 600px);
  height: min(60vh, 800px);
  overflow-y: auto;
}
.actions {
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
.ok-button {
  background-color: rgb(0, 160, 223);
  color: white;
}
</style>
