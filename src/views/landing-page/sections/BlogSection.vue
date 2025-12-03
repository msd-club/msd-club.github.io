<script setup lang="ts">

</script>

<template>
	<section id="blog" class="py-16 sm:py-24">
		<div class="w-[90%] mx-auto px-4 sm:px-6">
			<div class="flex justify-between items-center mb-12">
				<div>
					<h2 class="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
						Latest from Our Blog</h2>
					<p class="text-gray-400">Tech tutorials, project documentation, and insights from CSU-Carig's Computer
						Engineering students</p>
				</div>
				<a href="#" class="text-amber-400 hover:text-amber-300 flex items-center transition duration-300">
					View All <i class='bx bx-chevron-right ml-1'></i>
				</a>
			</div>
			
			<div class="grid md:grid-cols-3 gap-8">
				<div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700
					            hover:border-amber-500 transition duration-300 transform hover:-translate-y-2">
					<div class="p-6">
              <span
		              class="inline-block px-3 py-1 bg-gradient-to-r from-emerald-900 to-emerald-700 text-emerald-300 rounded-full text-sm mb-4">
                <i class='bx bx-code-alt mr-1'></i> Tutorial
              </span>
						<h3 class="text-xl font-bold mb-3 text-emerald-300">Getting Started with Microservices</h3>
						<p class="text-gray-400 mb-4">Learn how to design and implement your first microservice architecture with
							practical examples</p>
						<div class="flex items-center justify-between">
							<div class="flex items-center text-gray-500 text-sm">
								<i class='bx bx-calendar mr-2'></i> 2 days ago
							</div>
							<button class="text-emerald-400 hover:text-emerald-300 flex items-center text-sm">
								Read More <i class='bx bx-chevron-right ml-1'></i>
							</button>
						</div>
					</div>
				</div>
				
				<div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700
					            hover:border-blue-500 transition duration-300 transform hover:-translate-y-2">
					<div class="p-6">
              <span
		              class="inline-block px-3 py-1 bg-gradient-to-r from-blue-900 to-blue-700 text-blue-300 rounded-full text-sm mb-4">
                <i class='bx bx-code mr-1'></i> Tech
              </span>
						<h3 class="text-xl font-bold mb-3 text-blue-300">Vue 3 Composition API Tips</h3>
						<p class="text-gray-400 mb-4">Best practices for using the Composition API in production applications</p>
						<div class="flex items-center justify-between">
							<div class="flex items-center text-gray-500 text-sm">
								<i class='bx bx-calendar mr-2'></i> 1 week ago
							</div>
							<button class="text-blue-400 hover:text-blue-300 flex items-center text-sm">
								Read More <i class='bx bx-chevron-right ml-1'></i>
							</button>
						</div>
					</div>
				</div>
				
				<div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700
					            hover:border-purple-500 transition duration-300 transform hover:-translate-y-2">
					<div class="p-6">
              <span
		              class="inline-block px-3 py-1 bg-gradient-to-r from-purple-900 to-purple-700 text-purple-300 rounded-full text-sm mb-4">
                <i class='bx bx-bar-chart-alt mr-1'></i> Case Study
              </span>
						<h3 class="text-xl font-bold mb-3 text-purple-300">Automation Success Story</h3>
						<p class="text-gray-400 mb-4">How we saved 40 hours/month with our latest automation tool deployment</p>
						<div class="flex items-center justify-between">
							<div class="flex items-center text-gray-500 text-sm">
								<i class='bx bx-calendar mr-2'></i> 2 weeks ago
							</div>
							<button class="text-purple-400 hover:text-purple-300 flex items-center text-sm">
								Read More <i class='bx bx-chevron-right ml-1'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
			
			<div class="text-center mt-12">
				<button class="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600
                         rounded-xl font-semibold transition duration-300 transform hover:scale-105 flex items-center justify-center mx-auto shadow-lg">
					<i class='bx bx-book-open mr-3 text-xl'></i>Explore All Articles
				</button>
			</div>
		</div>
	</section>
</template>