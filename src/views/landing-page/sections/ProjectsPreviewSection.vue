<template>
	<section id="projects" class="py-16 sm:py-24">
		<div class="w-[90%] mx-auto px-4 sm:px-6">
			<div class="text-center mb-16">
				<h2 class="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
					Campus and Community Projects</h2>
				<div class="w-32 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-8"></div>
				<p class="text-gray-300 text-lg max-w-3xl mx-auto">
					Real-world software solutions developed by Computer Engineering students of CSU-Carig
				</p>
			</div>
			
			<div class="grid md:grid-cols-2 gap-8">
				<!-- Current Project: LMS API -->
				<div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700
                  hover:border-purple-500 transition duration-300 transform hover:-translate-y-2 group relative">
					<!-- Status Badge -->
					<div class="absolute top-4 left-4 z-10">
					<span class="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full flex items-center">
						<i class='bx bx-loader-circle animate-spin mr-1'></i> IN PROGRESS
					</span>
					</div>
					<div
							class="h-48 bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center group-hover:from-purple-700 group-hover:to-indigo-700 transition duration-300">
						<i class='bx bx-server text-6xl text-white'></i>
					</div>
					<div class="p-6">
						<h3 class="text-xl font-bold mb-3 text-purple-300">Learning Management System</h3>
						<p class="text-gray-400 mb-4">A full-stack LMS solution for CSU-Carig with RESTful API backend and modern
							web client</p>
						<div class="flex flex-wrap gap-2 mb-4">
							<span class="px-3 py-1 bg-purple-900 bg-opacity-50 text-purple-300 rounded-full text-sm">Python</span>
							<span class="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">Django REST</span>
							<span class="px-3 py-1 bg-green-900 bg-opacity-50 text-green-300 rounded-full text-sm">PostgreSQL</span>
							<span class="px-3 py-1 bg-cyan-900 bg-opacity-50 text-cyan-300 rounded-full text-sm">Vue.js</span>
							<span
									class="px-3 py-1 bg-orange-900 bg-opacity-50 text-orange-300 rounded-full text-sm">TypeScript</span>
							<span class="px-3 py-1 bg-teal-900 bg-opacity-50 text-teal-300 rounded-full text-sm">Tailwind CSS</span>
						</div>
						<div class="text-sm text-gray-500 flex items-center">
							<i class='bx bx-time mr-2'></i> Currently in Development
						</div>
					</div>
				</div>
				
				<!-- Completed Project: E-Profiling -->
				<div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700
                  hover:border-emerald-500 transition duration-300 transform hover:-translate-y-2 group relative">
					<!-- Status Badge -->
					<div class="absolute top-4 left-4 z-10">
					<span class="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full flex items-center">
						<i class='bx bx-check-circle mr-1'></i> COMPLETED
					</span>
					</div>
					<div
							class="h-48 bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center group-hover:from-emerald-700 group-hover:to-teal-700 transition duration-300">
						<i class='bx bx-user-circle text-6xl text-white'></i>
					</div>
					<div class="p-6">
						<h3 class="text-xl font-bold mb-3 text-emerald-300">E-Profiling System</h3>
						<p class="text-gray-400 mb-4">Online profiling system for Gonzaga, Cagayan - Digitizing community data
							management</p>
						<div class="flex flex-wrap gap-2 mb-4">
							<span class="px-3 py-1 bg-emerald-900 bg-opacity-50 text-emerald-300 rounded-full text-sm">PHP</span>
							<span class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">MySQL</span>
							<span class="px-3 py-1 bg-amber-900 bg-opacity-50 text-amber-300 rounded-full text-sm">JavaScript</span>
							<span class="px-3 py-1 bg-red-900 bg-opacity-50 text-red-300 rounded-full text-sm">Bootstrap</span>
						</div>
						<div class="flex items-center justify-between">
							<div class="text-sm text-gray-500 flex items-center">
								<i class='bx bx-calendar-check mr-2'></i> Deployed 2025
							</div>
							<span class="text-xs px-2 py-1 bg-emerald-900 bg-opacity-30 text-emerald-300 rounded">
							Community Project
						</span>
						</div>
					</div>
				</div>
				</div>
			
			<!-- Additional Project Info Section -->
			<div class="mt-16 grid md:grid-cols-2 gap-8">
				<!-- LMS Detailed Info -->
				<div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-purple-700/30">
					<div class="flex items-center mb-4">
						<i class='bx bx-code-curly text-2xl text-purple-400 mr-3'></i>
						<h4 class="text-lg font-bold text-purple-300">Learning Management System - Current Project</h4>
					</div>
					<div class="space-y-3">
						<div class="flex items-start">
							<i class='bx bx-check text-purple-400 mt-1 mr-2 text-sm'></i>
							<span class="text-gray-300 text-sm">Backend: Python Django REST Framework with JWT authentication</span>
						</div>
						<div class="flex items-start">
							<i class='bx bx-check text-purple-400 mt-1 mr-2 text-sm'></i>
							<span
									class="text-gray-300 text-sm">Database: PostgreSQL with optimized schemas for educational data</span>
						</div>
						<div class="flex items-start">
							<i class='bx bx-check text-purple-400 mt-1 mr-2 text-sm'></i>
							<span
									class="text-gray-300 text-sm">Frontend: Vue 3 with TypeScript and Tailwind CSS for modern UI</span>
						</div>
						<div class="flex items-start">
							<i class='bx bx-check text-purple-400 mt-1 mr-2 text-sm'></i>
							<span
									class="text-gray-300 text-sm">Features: Course management, assignments, quizzes, grade tracking</span>
						</div>
					</div>
					<div class="mt-6 pt-6 border-t border-purple-700/30">
						<div class="flex items-center text-sm text-gray-400">
							<i class='bx bx-group mr-2'></i>
							<span>Developed by: MSD Club Computer Engineering Students</span>
						</div>
					</div>
				</div>
				
				<!-- E-Profiling Detailed Info -->
				<div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-emerald-700/30">
					<div class="flex items-center mb-4">
						<i class='bx bx-map text-2xl text-emerald-400 mr-3'></i>
						<h4 class="text-lg font-bold text-emerald-300">E-Profiling System - Community Impact</h4>
					</div>
					<div class="space-y-3">
						<div class="flex items-start">
							<i class='bx bx-check text-emerald-400 mt-1 mr-2 text-sm'></i>
							<span class="text-gray-300 text-sm">Location: Municipality of Gonzaga, Cagayan</span>
						</div>
						<div class="flex items-start">
							<i class='bx bx-check text-emerald-400 mt-1 mr-2 text-sm'></i>
							<span class="text-gray-300 text-sm">Purpose: Digital transformation of community profiling and data management</span>
						</div>
						<div class="flex items-start">
							<i class='bx bx-check text-emerald-400 mt-1 mr-2 text-sm'></i>
							<span class="text-gray-300 text-sm">Technology: PHP vanila with MySQL database</span>
						</div>
						<div class="flex items-start">
							<i class='bx bx-check text-emerald-400 mt-1 mr-2 text-sm'></i>
							<span
									class="text-gray-300 text-sm">Features: Citizen registration, family profiling, report generation</span>
						</div>
					</div>
					<div class="mt-6 pt-6 border-t border-emerald-700/30">
						<div class="flex items-center text-sm text-gray-400">
							<i class='bx bx-award mr-2'></i>
							<span>Status: Successfully deployed and in use</span>
						</div>
					</div>
				</div>
			</div>
			
			<div class="text-center mt-12">
				<router-link to="/projects" class="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 max-w-fit
                         rounded-xl font-semibold transition duration-300 transform hover:scale-105 flex items-center justify-center mx-auto shadow-lg">
					<i class='bx bx-folder-open mr-3 text-xl'></i>View All Projects
				</router-link>
			</div>
			
			<!-- Tech Stack Section -->
			<div class="mt-16 pt-8 border-t border-gray-700">
				<h4 class="text-lg font-bold text-center mb-6 text-gray-300">Our Technology Stack</h4>
				<div class="flex flex-wrap justify-center gap-4">
					<div class="flex items-center px-4 py-2 bg-gray-800 rounded-lg">
						<i class='bx bxl-python text-2xl text-blue-400 mr-2'></i>
						<span class="text-gray-300">Python</span>
					</div>
					<div class="flex items-center px-4 py-2 bg-gray-800 rounded-lg">
						<i class='bx bxl-django text-2xl text-green-400 mr-2'></i>
						<span class="text-gray-300">Django</span>
					</div>
					<div class="flex items-center px-4 py-2 bg-gray-800 rounded-lg">
						<i class='bx bxl-postgresql text-2xl text-blue-300 mr-2'></i>
						<span class="text-gray-300">PostgreSQL</span>
					</div>
					<div class="flex items-center px-4 py-2 bg-gray-800 rounded-lg">
						<i class='bx bxl-vuejs text-2xl text-emerald-400 mr-2'></i>
						<span class="text-gray-300">Vue.js</span>
					</div>
					<div class="flex items-center px-4 py-2 bg-gray-800 rounded-lg">
						<i class='bx bxl-typescript text-2xl text-blue-400 mr-2'></i>
						<span class="text-gray-300">TypeScript</span>
					</div>
					<div class="flex items-center px-4 py-2 bg-gray-800 rounded-lg">
						<i class='bx bxl-tailwind-css text-2xl text-cyan-400 mr-2'></i>
						<span class="text-gray-300">Tailwind CSS</span>
					</div>
					<div class="flex items-center px-4 py-2 bg-gray-800 rounded-lg">
						<i class='bx bxl-php text-2xl text-purple-400 mr-2'></i>
						<span class="text-gray-300">PHP</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>