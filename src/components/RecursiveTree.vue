<script setup lang="ts">
import { computed, ref } from 'vue'
import RecursiveTree from './RecursiveTree.vue';
import ChevronIcon from './Icons/ChevronIcon.vue';
import type { Folder } from '../types/folder';

const props = defineProps<{ folder: Folder, selectedFolderId?: number }>()
const emit = defineEmits(["select"])

const isChildrenOpen = ref(false)
const isFolderSelected = computed(() => props.folder.id === props.selectedFolderId)

function handleSelect(folder: Folder) {
	if(folder.id === props.selectedFolderId) {
		return
	}
	emit("select", folder)
}
</script>

<template>
	<section class="tree-wrapper">
		<header 
			class="header" 
			:class="{ 'selected': isFolderSelected }"
			@click.stop="handleSelect(folder)"
		>
			<h3 class="title">{{ folder.name }}</h3>
			<ChevronIcon 
				v-if="folder.children?.length" 
				class="icon" 
				:class="{ 'reversed': isChildrenOpen }" 
				@click.stop="isChildrenOpen = !isChildrenOpen" 
			/>
		</header>
		<section v-if="folder.children?.length && isChildrenOpen" class="children" :class="{ 'open': isChildrenOpen }" >
			<RecursiveTree 
				v-for="folder in folder.children" 
				:key="folder.id" 
				:folder="folder" 
				:selected-folder-id="selectedFolderId"
				@select="handleSelect"
			/>
		</section>
	</section>
</template>

<style scoped>
.tree-wrapper {
	width: 100%;
	background-color: #fff;
}
.header {
	display: flex ;
	padding: 12px;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ccc;
	&.selected {
		background-color: #f3f3f3;
	}
}
.title {
	margin: 6px 0;
	font-weight: medium;
}
.icon {
	display: block;
	width: 24px;
	height: 24px;	
	cursor: pointer;
	transition: transform 0.1s ease;
}
.icon.reversed {
	transform: rotate(180deg);
}
.children {
	position: relative;
	padding-left: 16px;
	background-color: #f9f9f9;
	&::after {
		content: '';
		display: block;
		width: 1px;
		height: 100%;
		background-color: #ccc;
		position: absolute;
		left: 16px;
		top: 0;
	}
	.open {
		border-bottom: 1px solid #ccc;
	}
}
</style>