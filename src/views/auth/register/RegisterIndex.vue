<script setup lang="ts">
import {computed, reactive, ref} from "vue";

// Form state
const form = reactive({
	firstName: '',
	lastName: '',
	yearLevel: '',
	email: '',
	password: '',
	confirmPassword: '',
	expertise: '',
	profilePicture: null as File | null
});

// Password visibility toggle
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const yearOptions = ["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year"];
const message = ref(''); // message above register button

// File input ref
const fileInput = ref<HTMLInputElement | null>(null);

// Handle file input change
const handleFileChange = (event: Event) => {
	const target = event.target as HTMLInputElement;
	if (target.files && target.files[0]) {
		form.profilePicture = target.files[0];
	}
};

// Remove profile picture
const removeProfilePicture = () => {
	form.profilePicture = null;
	if (fileInput.value) fileInput.value.value = ''; // reset input
};

// Preview URL
const previewUrl = computed(() => form.profilePicture ? URL.createObjectURL(form.profilePicture) : null);

// Handle register
const handleRegister = () => {
	if (form.password !== form.confirmPassword) {
		message.value = "Passwords do not match!";
		return;
	}
	
	message.value = "Registration successful! (Demo)";
	console.log("Form submitted:", form);
	
	// Reset form except profile picture for demo
	Object.keys(form).forEach(key => {
		if (key !== 'profilePicture') form[key] = '';
	});
};
</script>

<template>
	<main
			class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center py-16 px-4">
		<div class="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-4xl">
			<h2 class="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
				Join the Club
			</h2>
			
			<form @submit.prevent="handleRegister" class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<!-- First Name -->
				<div>
					<label class="block text-gray-300 mb-1">First Name</label>
					<input v-model="form.firstName" type="text" placeholder="Enter your first name" required
					       class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500 text-white"/>
				</div>
				
				<!-- Last Name -->
				<div>
					<label class="block text-gray-300 mb-1">Last Name</label>
					<input v-model="form.lastName" type="text" placeholder="Enter your last name" required
					       class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500 text-white"/>
				</div>
				
				<!-- Year Level -->
				<div>
					<label class="block text-gray-300 mb-1">Year Level</label>
					<select v-model="form.yearLevel" required
					        class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500 text-white">
						<option value="" disabled>Select Year Level</option>
						<option v-for="year in yearOptions" :key="year" :value="year">{{ year }}</option>
					</select>
				</div>
				
				<!-- Email -->
				<div>
					<label class="block text-gray-300 mb-1">Email</label>
					<input v-model="form.email" type="email" placeholder="Enter your email" required
					       class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500 text-white"/>
				</div>
				
				<!-- Password -->
				<div>
					<label class="block text-gray-300 mb-1">Password</label>
					<div class="relative">
						<input :type="showPassword ? 'text' : 'password'" v-model="form.password" placeholder="Enter password"
						       required
						       class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500 text-white"/>
						<button type="button" @click="showPassword = !showPassword"
						        class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400">
							<i :class="showPassword ? 'bx bx-show' : 'bx bx-hide'"></i>
						</button>
					</div>
				</div>
				
				<!-- Confirm Password -->
				<div>
					<label class="block text-gray-300 mb-1">Confirm Password</label>
					<div class="relative">
						<input :type="showConfirmPassword ? 'text' : 'password'" v-model="form.confirmPassword"
						       placeholder="Confirm password" required
						       class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500 text-white"/>
						<button type="button" @click="showConfirmPassword = !showConfirmPassword"
						        class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400">
							<i :class="showConfirmPassword ? 'bx bx-show' : 'bx bx-hide'"></i>
						</button>
					</div>
				</div>
				
				<!-- About Yourself -->
				<div class="md:col-span-2">
					<label class="block text-gray-300 mb-1">About Yourself</label>
					<textarea
							v-model="form.expertise"
							rows="3"
							placeholder="Tell us about yourself, your interests, or what skills you want to share"
							class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500 text-white"
					></textarea>
				</div>
				
				<!-- Profile Picture -->
				<div class="md:col-span-2 flex flex-col">
					<label class="block text-gray-300 mb-1">Profile Picture (optional)</label>
					
					<div class="flex items-center gap-2">
						<div
								class="flex-1 flex items-center px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 cursor-pointer focus-within:border-purple-500 text-white"
								@click="fileInput?.click()">
							<i class='bx bx-camera text-xl text-purple-400 mr-2'></i>
							<input ref="fileInput" type="file" accept="image/*" class="hidden" @change="handleFileChange"/>
							<span class="truncate">{{ form.profilePicture ? form.profilePicture.name : 'No file selected' }}</span>
						</div>
						
						<button v-if="form.profilePicture" type="button" @click="removeProfilePicture"
						        class="p-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition" title="Clear image">
							<i class='bx bx-x'></i>
						</button>
					</div>
					
					<div v-if="previewUrl" class="mt-2">
						<img :src="previewUrl" alt="Preview" class="w-24 h-24 object-cover rounded-lg border border-gray-600"/>
					</div>
				</div>
				
				<!-- Message -->
				<div class="md:col-span-2">
					<p class="text-center text-sm text-yellow-400 mb-2">{{ message }}</p>
				</div>
				
				<!-- Submit button & Back to Home -->
				<div class="md:col-span-2 flex flex-col items-center">
					<button type="submit" class="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition duration-300 flex justify-center items-center">
						<i class='bx bx-user-plus mr-2'></i> Register
					</button>
					<router-link to="/" class="mt-4 text-sm text-purple-300 hover:text-pink-400">Back to Home</router-link>
				</div>
			
			</form>
		</div>
	</main>
</template>
