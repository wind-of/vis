<script setup lang="ts">
const isOpen = defineModel({
	type: Boolean,
	default: false
})
</script>

<template>
	<div class="dialog-wrapper" v-if="isOpen">
		<div class="dialog">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.dialog-wrapper {
	position: fixed;
	width: 100%;
	height: 100%;

	top: 0;
	left: 0;
	z-index: 1000;
	background-color: rgba(0, 0, 0, 0.5);
}
.dialog {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>