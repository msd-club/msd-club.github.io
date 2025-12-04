<script setup lang="ts">
import {ref} from "vue";

const isOpen = ref(false);
</script>

<template>
	<!-- Desktop Navbar -->
	<nav class="sticky top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-purple-700/30">
		<div class="w-[90%] mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
			<!-- Logo -->
			<div class="flex items-center space-x-3">
				<i class='bx bx-code-block text-3xl text-purple-400'></i>
				<div>
          <span class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Micro-SD
          </span>
					<p class="text-xs text-gray-400">Micro Software Development Club</p>
				</div>
			</div>
			
			<!-- Desktop Nav -->
			<div class="hidden md:flex items-center space-x-8">
				<router-link to="#home" class="hover:text-purple-400 text-gray-400 transition duration-300 flex items-center">
					<i class='bx bx-home-alt-2 mr-2'></i> Home
				</router-link>
				<router-link to="#about" class="hover:text-purple-400 text-gray-400 transition duration-300 flex items-center">
					<i class='bx bx-info-circle mr-2'></i> About
				</router-link>
				<router-link to="#vision" class="hover:text-purple-400 text-gray-400 transition duration-300 flex items-center">
					<i class='bx bx-bullseye mr-2'></i> Vision
				</router-link>
				<router-link to="#projects"
				             class="hover:text-purple-400 text-gray-400 transition duration-300 flex items-center">
					<i class='bx bx-cube-alt mr-2'></i> Projects
				</router-link>
				<router-link to="#members"
				             class="hover:text-purple-400 text-gray-400 transition duration-300 flex items-center">
					<i class='bx bx-group mr-2'></i> Team
				</router-link>
				<router-link to="#blog" class="hover:text-purple-400 text-gray-400 transition duration-300 flex items-center">
					<i class='bx bx-news mr-2'></i> Blog
				</router-link>
				<router-link to="#contact" class="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold
                        hover:from-purple-600 hover:to-pink-600 transition duration-300">
					Contact Us
				</router-link>
			</div>
			
			<!-- Mobile Menu Button -->
			<button @click="isOpen = true" class="md:hidden text-gray-300">
				<i class='bx bx-menu text-2xl'></i>
			</button>
		</div>
		
		<!-- Mobile Overlay -->
		<transition name="fade">
			<div v-if="isOpen" class="fixed inset-0 h-screen bg-gray-900 z-50 flex flex-col">
				<!-- Close Button -->
				<div class="flex justify-end p-4">
					<button @click="isOpen = false" class="text-gray-300 hover:text-purple-400 transition">
						<i class='bx bx-x text-3xl'></i>
					</button>
				</div>
				
				<!-- Nav Links -->
				<div class="flex flex-col items-center justify-center flex-grow space-y-6 text-lg font-semibold">
					<router-link @click="isOpen = false" to="#home" class="text-gray-200 hover:text-purple-400 transition">Home
					</router-link>
					<router-link @click="isOpen = false" to="#about" class="text-gray-200 hover:text-purple-400 transition">
						About
					</router-link>
					<router-link @click="isOpen = false" to="#vision" class="text-gray-200 hover:text-purple-400 transition">
						Vision
					</router-link>
					<router-link @click="isOpen = false" to="#projects" class="text-gray-200 hover:text-purple-400 transition">
						Projects
					</router-link>
					<router-link @click="isOpen = false" to="#members" class="text-gray-200 hover:text-purple-400 transition">
						Team
					</router-link>
					<router-link @click="isOpen = false" to="#blog" class="text-gray-200 hover:text-purple-400 transition">Blog
					</router-link>
					<router-link @click="isOpen = false" to="#contact"
					             class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition">
						Contact Us
					</router-link>
				</div>
			</div>
		</transition>
	</nav>
</template>