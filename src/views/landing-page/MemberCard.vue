<!-- Member Card Component -->
<template>
	<div class="member-card">
		<div class="flex items-center mb-6">
			<div :class="[member.avatarColor, 'w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold']">
				{{ member.name.split(' ').map(n => n[0]).join('') }}
			</div>
			<div class="ml-4">
				<h3 class="text-xl font-bold">{{ member.name }}</h3>
				<p class="text-blue-400">{{ member.role }}</p>
			</div>
		</div>
		<div class="flex flex-wrap gap-2 mb-4">
      <span v-for="skill in member.expertise" :key="skill"
            class="px-3 py-1 bg-gray-700 rounded-full text-sm">
        {{ skill }}
      </span>
		</div>
		<div class="flex space-x-3">
			<button class="text-gray-400 hover:text-blue-400 transition">
				<i class='bx bxl-github'></i>
			</button>
			<button class="text-gray-400 hover:text-blue-400 transition">
				<i class='bx bxl-linkedin'></i>
			</button>
			<button class="text-gray-400 hover:text-blue-400 transition">
				<i class='bx bx-envelope'></i>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface MemberProps {
	member: {
		id: number
		name: string
		role: string
		expertise: string[]
		avatarColor: string
	}
}

defineProps<MemberProps>()
</script>

<style scoped>
.member-card {
	@apply bg-gray-300 p-6 rounded-xl border border-gray-600
	hover:border-blue-500/50 transition-all duration-300
	hover:transform hover:-translate-y-1;
}
</style>