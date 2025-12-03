<template>
	<nav class="sticky top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-purple-700/30">
		<div class="w-[90%] mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
			<div class="flex items-center space-x-3">
				<i class='bx bx-code-block text-3xl text-purple-400'></i>
				<div>
            <span class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Micro-SD
            </span>
					<p class="text-xs text-gray-400">Micro Software Development Club</p>
				</div>
			</div>
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
				<router-link to="#projects" class="hover:text-purple-400 text-gray-400 transition duration-300 flex items-center">
					<i class='bx bx-cube-alt mr-2'></i> Projects
				</router-link>
				<router-link to="#members" class="hover:text-purple-400 text-gray-400 transition duration-300 flex items-center">
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
			<button class="md:hidden text-gray-300">
				<i class='bx bx-menu text-2xl'></i>
			</button>
		</div>
	</nav>
</template>