<script setup lang="ts">

</script>

<template>
	<section id="home" class="w-[90%] mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
		<div
				class="absolute top-10 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
		<div
				class="absolute bottom-10 left-10 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
		
		<div class="text-center max-w-4xl mx-auto relative z-10">
			<div class="mb-8">
          <span
		          class="inline-block px-4 py-2 bg-purple-900 bg-opacity-30 rounded-full text-sm font-semibold text-purple-300 mb-6">
            <i class='bx bx-rocket mr-2'></i>Innovating Since 2025
          </span>
			</div>
			
			<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
				<span class="block">Building</span>
				<span class="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Innovative Solutions
          </span>
				<span class="block text-2xl sm:text-3xl md:text-4xl mt-6 text-gray-300">
            for <span class="text-purple-300">CSU-Carig Community</span>
          </span>
			</h1>
			
			<p class="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
				The official software development club of Computer Engineering Department,
				College of Engineering and Architecture, CSU-Carig Campus. We design, build,
				and deploy real-world solutions for campus and community challenges.
			</p>
			
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<button class="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600
                        rounded-xl font-semibold transition duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg">
					<i class='bx bx-joystick mr-3 text-xl'></i>Join Our Club
				</button>
				<button class="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-xl font-semibold
                        transition duration-300 transform hover:scale-105 flex items-center justify-center">
					<i class='bx bx-play-circle mr-3 text-xl'></i>View Projects
				</button>
				<button class="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-semibold
                        transition duration-300 transform hover:scale-105 flex items-center justify-center">
					<i class='bx bx-calendar mr-3 text-xl'></i>Upcoming Events
				</button>
			</div>
		</div>
	</section>
</template>