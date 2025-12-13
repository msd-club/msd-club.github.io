<script setup lang="ts">
import {computed, ref} from "vue";
import {members} from "@/data/members.ts";

const showAllMembers = ref(false)
const officers = computed(() => {
	return members.filter(member => member.isOfficer)
})

const regularMembers = computed(() => {
	return members.filter(member => !member.isOfficer)
})

const visibleOfficers = computed(() => {
	return officers.value
})

const visibleMembers = computed(() => {
	return showAllMembers.value ? regularMembers.value : []
})

</script>

<template>
	<section id="members" class="py-16 sm:py-24 bg-gray-800 bg-opacity-50">
		<div class="w-[90%] mx-auto px-4 sm:px-6">
			<div class="text-center mb-16">
				<h2 class="text-3xl sm:text-4xl font-bold mb-4">MSD Club Leadership</h2>
				<div class="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
				<p class="text-gray-300 text-lg max-w-3xl mx-auto">
					Faculty guidance meets student innovation - Driving tech excellence at CSU-Carig
				</p>
			</div>
			
			<!-- Club Adviser Section -->
			<div class="mb-16">
				<h3 class="text-2xl font-bold mb-8 text-center text-purple-300">
					<i class='bx bx-user-check mr-2'></i>Club Adviser
				</h3>
				<div class="flex justify-center">
					<div class="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/50
                    max-w-2xl w-full transform hover:-translate-y-2 transition duration-300">
						<div class="flex flex-col md:flex-row items-center gap-8">
							<!-- Adviser Avatar -->
							<div class="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full
                       flex items-center justify-center text-3xl font-bold border-4 border-purple-300">
								<!-- Replace with your initials -->
								<span>RME</span>
							</div>
							
							<!-- Adviser Info -->
							<div class="text-center md:text-left flex-1">
								<h3 class="text-2xl font-bold mb-1">Ralph Maron Eda</h3>
								<p class="text-purple-400 mb-3">Faculty Adviser</p>
								<p class="text-pink-300 mb-4">
									<i class='bx bx-briefcase mr-2'></i>Instructor, Computer Engineering Department
								</p>
								<p class="text-gray-300 mb-4">
									College of Engineering and Architecture<br>
									Cagayan State University - Carig Campus
								</p>
								<div class="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                <span class="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">
                  Software Engineering
                </span>
									<span class="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">
                  Web Development
                </span>
									<span class="px-3 py-1 bg-pink-900/50 text-pink-300 rounded-full text-sm">
                  Database Systems
                </span>
								</div>
								<div class="flex space-x-4 justify-center md:justify-start">
									<a href="#" class="text-gray-400 hover:text-purple-400 transition duration-300">
										<i class='bx bx-envelope text-xl'></i>
									</a>
									<a href="#" class="text-gray-400 hover:text-blue-400 transition duration-300">
										<i class='bx bxl-linkedin text-xl'></i>
									</a>
									<a href="#" class="text-gray-400 hover:text-green-400 transition duration-300">
										<i class='bx bxs-graduation text-xl'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Show/Hide All Members Toggle -->
			<div class="flex justify-center mb-8">
				<button @click="showAllMembers = !showAllMembers"
				        class="px-6 py-2 rounded-full border border-blue-500 hover:bg-blue-500/10 transition duration-300
                     flex items-center text-blue-300 cursor-pointer">
					<i class='bx bx-group mr-2'></i>
					{{ showAllMembers ? 'Show Executive Officers Only' : 'Show All Members (' + members.length + ')' }}
					<i :class="['bx ml-2 transition-transform duration-300', showAllMembers ? 'bx-chevron-up' : 'bx-chevron-down']"></i>
				</button>
			</div>
			
			<!-- Officers Section -->
			<div class="mb-12">
				<h3 class="text-2xl font-bold mb-8 text-center text-blue-300">
					<i class='bx bx-star mr-2'></i>Student Executive Officers
				</h3>
				<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					<div v-for="(member, index) in visibleOfficers" :key="member.id"
					     class="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700
                    hover:border-blue-500 transition duration-300 transform hover:-translate-y-2"
					     :class="{'animate-fade-in': index < 8 || showAllMembers}">
						<div class="flex flex-col items-center text-center">
							<!-- Officer Badge -->
							<div class="relative">
								<div
										:class="[member.avatarColor, 'w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-4']">
									{{ member.initials }}
								</div>
								<div class="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
									{{ member.roleBadge }}
								</div>
							</div>
							
							<h3 class="text-xl font-bold mb-1">{{ member.name }}</h3>
							<p class="text-blue-400 mb-2">{{ member.position }}</p>
							<p class="text-gray-400 text-sm mb-3">{{ member.yearLevel }}</p>
							
							<div class="flex flex-wrap gap-2 justify-center mb-4">
              <span v-for="skill in member.expertise.slice(0, 2)" :key="skill"
                    class="px-3 py-1 bg-gray-700 rounded-full text-xs">
                {{ skill }}
              </span>
							</div>
							
							<div class="flex space-x-3">
								<button class="text-gray-400 hover:text-blue-400 transition duration-300">
									<i class='bx bxl-github text-lg'></i>
								</button>
								<button class="text-gray-400 hover:text-purple-400 transition duration-300">
									<i class='bx bx-envelope text-lg'></i>
								</button>
								<button class="text-gray-400 hover:text-green-400 transition duration-300">
									<i class='bx bxl-facebook text-lg'></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Regular Members (Only shown when showAllMembers is true) -->
			<div v-if="showAllMembers" class="mt-12">
				<h3 class="text-2xl font-bold mb-8 text-center text-green-300">
					<i class='bx bx-group mr-2'></i>Club Members
				</h3>
				<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					<div v-for="(member, index) in visibleMembers" :key="member.id"
					     class="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700
                    hover:border-green-500 transition duration-300 transform hover:-translate-y-2"
					     :class="{'animate-fade-in': true}">
						<div class="flex flex-col items-center text-center">
							<div
									:class="[member.avatarColor, 'w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-4']">
								{{ member.initials }}
							</div>
							
							<h3 class="text-lg font-bold mb-1">{{ member.name }}</h3>
							<p class="text-green-400 mb-2">{{ member.position }}</p>
							<p class="text-gray-400 text-sm mb-3">{{ member.yearLevel }}</p>
							
							<div class="flex flex-wrap gap-2 justify-center mb-4">
              <span v-for="skill in member.expertise.slice(0, 1)" :key="skill"
                    class="px-2 py-1 bg-gray-700 rounded-full text-xs">
                {{ skill }}
              </span>
							</div>
							
							<div class="flex space-x-3">
								<button class="text-gray-400 hover:text-gray-300 transition duration-300">
									<i class='bx bx-code text-lg'></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- View More/Less button at bottom -->
			<div class="text-center mt-8" v-if="members.length > 4">
				<button @click="showAllMembers = !showAllMembers"
				        class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600
                     rounded-xl font-semibold transition duration-300 transform hover:scale-105
                     flex items-center justify-center mx-auto cursor-pointer">
					<i :class="['bx mr-2', showAllMembers ? 'bx-chevron-up' : 'bx-chevron-down']"></i>
					{{ showAllMembers ? 'Show Executive Officers Only' : 'View All Club Members (' + members.length + ')' }}
				</button>
			</div>
		</div>
	</section>
</template>