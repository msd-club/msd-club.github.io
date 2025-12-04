<script setup lang="ts">
import {computed, reactive} from "vue";
import type {ContactForm} from "@/types/ContactForm.ts";

const form = reactive<ContactForm>({
	name: '',
	email: '',
	subject: '',
	message: ''
})

const currentYear = computed(() => new Date().getFullYear())

const handleSubmit = () => {
	console.log('Form submitted:', form)
	alert('Thank you for your message! We will get back to you soon.')
	
	form.name = ''
	form.email = ''
	form.subject = ''
	form.message = ''
}
</script>

<template>
	<footer id="contact" class="bg-gradient-to-b from-gray-900 to-gray-950 border-t border-purple-700/30 pt-16 pb-6">
		<div class="w-[90%] mx-auto px-4 sm:px-6">
			<div class="grid lg:grid-cols-3 gap-12 mb-12">
				<!-- Contact Form -->
				<div class="lg:col-span-2">
					<h3 class="text-2xl font-bold mb-8 text-gray-200">Get In Touch</h3>
					<form @submit.prevent="handleSubmit" class="space-y-6">
						<div class="grid md:grid-cols-2 gap-6">
							<div>
								<label class="block text-gray-300 mb-2">Name</label>
								<input v-model="form.name" type="text" required
								       class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg
                                focus:border-purple-500 focus:outline-none transition duration-300 text-gray-300">
							</div>
							<div>
								<label class="block text-gray-400 mb-2">Email</label>
								<input v-model="form.email" type="email" required
								       class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg
                                focus:border-purple-500 focus:outline-none transition duration-300 text-gray-300">
							</div>
						</div>
						<div>
							<label class="block text-gray-400 mb-2">Subject</label>
							<input v-model="form.subject" type="text" required
							       class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg
                              focus:border-purple-500 focus:outline-none transition duration-300 text-gray-300">
						</div>
						<div>
							<label class="block text-gray-400 mb-2">Message</label>
							<textarea v-model="form.message" rows="4" required
							          class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg
                                 focus:border-purple-500 focus:outline-none transition duration-300 text-gray-300"></textarea>
						</div>
						<button type="submit"
						        class="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600
                             rounded-lg font-semibold transition duration-300 flex items-center">
							<i class='bx bx-send mr-2'></i> Send Message
						</button>
					</form>
				</div>
				
				<!-- Quick Links & Info -->
				<div>
					<div class="mb-12">
						<div class="flex items-center mb-6">
							<i class='bx bx-code-block text-3xl text-purple-400 mr-3'></i>
							<span class="text-2xl font-bold text-gray-200">MSD Club</span>
						</div>
						<p class="text-gray-400 mb-6">
							Transforming ideas into elegant software solutions. Join us in building the future of our organization.
						</p>
						<div class="flex space-x-4">
							<a href="#" class="text-gray-400 hover:text-purple-400 transition duration-300">
								<i class='bx bxl-github text-2xl'></i>
							</a>
							<a href="#" class="text-gray-400 hover:text-blue-400 transition duration-300">
								<i class='bx bxl-linkedin text-2xl'></i>
							</a>
							<a href="#" class="text-gray-400 hover:text-pink-400 transition duration-300">
								<i class='bx bxl-discord-alt text-2xl'></i>
							</a>
							<a href="#" class="text-gray-400 hover:text-green-400 transition duration-300">
								<i class='bx bxl-slack text-2xl'></i>
							</a>
						</div>
					</div>
					
					<div class="space-y-8">
						<div>
							<h4 class="text-lg font-bold mb-4 text-gray-400">Quick Links</h4>
							<div class="grid grid-cols-2 gap-4">
								<div class="space-y-2">
									<router-link to="#home" class="block text-gray-400 hover:text-purple-400 transition duration-300">
										<i class='bx bx-home-alt-2 mr-2'></i> Home
									</router-link>
									<router-link to="#about" class="block text-gray-400 hover:text-purple-400 transition duration-300">
										<i class='bx bx-info-circle mr-2'></i> About
									</router-link>
									<router-link to="#projects" class="block text-gray-400 hover:text-purple-400 transition duration-300">
										<i class='bx bx-cube-alt mr-2'></i> Projects
									</router-link>
									<router-link to="#blog" class="block text-gray-400 hover:text-purple-400 transition duration-300">
										<i class='bx bx-news mr-2'></i> Blog
									</router-link>
								</div>
								<div class="space-y-2">
									<router-link to="#members" class="block text-gray-400 hover:text-purple-400 transition duration-300">
										<i class='bx bx-group mr-2'></i> Team
									</router-link>
									<router-link to="#" class="block text-gray-400 hover:text-purple-400 transition duration-300">
										<i class='bx bx-calendar mr-2'></i> Events
									</router-link>
									<router-link to="#" class="block text-gray-400 hover:text-purple-400 transition duration-300">
										<i class='bx bx-book-open mr-2'></i> Resources
									</router-link>
									<router-link to="#" class="block text-gray-400 hover:text-purple-400 transition duration-300">
										<i class='bx bx-help-circle mr-2'></i> FAQ
									</router-link>
								</div>
							</div>
						</div>
						
						<div>
							<h4 class="text-lg font-bold mb-4 text-gray-400">Contact Info</h4>
							<div class="space-y-4">
								<div class="flex items-start">
									<i class='bx bx-envelope text-purple-400 mr-3 mt-1'></i>
									<div>
										<div class="text-gray-300">msdclub@csu.edu.ph</div>
										<div class="text-sm text-gray-500">General Inquiries</div>
									</div>
								</div>
								<div class="flex items-start">
									<i class='bx bx-map text-blue-400 mr-3 mt-1'></i>
									<div>
										<div class="text-gray-300">Computer Engineering Department</div>
										<div class="text-sm text-gray-500">College of Engineering and Architecture, CSU Carig Campus</div>
									</div>
								</div>
								<div class="flex items-start">
									<i class='bx bx-time text-green-400 mr-3 mt-1'></i>
									<div>
										<div class="text-gray-300">Tuesdays, 2:30 - 4:00 PM</div>
										<div class="text-sm text-gray-500">Room A14</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="border-t border-gray-800 pt-6 text-center text-gray-500">
				<p>&copy; {{ currentYear }} Micro-Software Development Club. All rights reserved.</p>
			</div>
		</div>
	</footer>
</template>