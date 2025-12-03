<script setup lang="ts">
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";
</script>

<template>
	<main>
		<Header/>
		<main class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
			<slot></slot>
		</main>
		<Footer/>
	</main>
</template>