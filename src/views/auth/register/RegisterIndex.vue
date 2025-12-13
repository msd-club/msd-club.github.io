<script setup lang="ts">
import {computed, reactive, ref} from "vue";
import {db} from "@/firebase";
import {doc, getDoc, serverTimestamp, setDoc,} from "firebase/firestore";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string;

const form = reactive({
	firstName: "",
	lastName: "",
	yearLevel: "" as "" | number,
	email: "",
	expertise: "",
	profilePicture: null as File | null,
});

const yearOptions = [
	{label: "1st Year", value: 1},
	{label: "2nd Year", value: 2},
	{label: "3rd Year", value: 3},
	{label: "4th Year", value: 4},
	{label: "5th Year", value: 5},
];

const message = ref("");
const isRegistering = ref(false);

const fileInput = ref<HTMLInputElement | null>(null);

const previewUrl = computed(() =>
		form.profilePicture ? URL.createObjectURL(form.profilePicture) : null
);

const handleFileChange = (event: Event) => {
	const target = event.target as HTMLInputElement;
	if (target.files && target.files[0]) {
		form.profilePicture = target.files[0];
	}
};

const removeProfilePicture = () => {
	form.profilePicture = null;
	if (fileInput.value) fileInput.value.value = "";
};

const uploadImage = async (file: File): Promise<string | null> => {
	const formData = new FormData();
	formData.append("file", file);
	formData.append("upload_preset", UPLOAD_PRESET);
	
	try {
		const res = await fetch(
				`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
				{method: "POST", body: formData}
		);
		const data = await res.json();
		return data.secure_url ?? null;
	} catch (err) {
		console.error("Cloudinary error:", err);
		return null;
	}
};

const handleRegister = async () => {
	message.value = "";
	isRegistering.value = true;
	
	try {
		const emailId = form.email.trim().toLowerCase();
		const memberRef = doc(db, "members", emailId);
		
		const existingDoc = await getDoc(memberRef);
		if (existingDoc.exists()) {
			message.value = "This email is already taken.";
			isRegistering.value = false;
			return;
		}
		
		let imageUrl: string | null = null;
		if (form.profilePicture) {
			imageUrl = await uploadImage(form.profilePicture);
			if (!imageUrl) {
				message.value = "Failed to upload profile picture.";
				isRegistering.value = false;
				return;
			}
		}
		
		await setDoc(memberRef, {
			firstName: form.firstName,
			lastName: form.lastName,
			yearLevel: Number(form.yearLevel),
			email: emailId,
			about: form.expertise,
			profilePicture: imageUrl,
			createdAt: serverTimestamp(),
		});
		
		message.value = "Registration successful! 🎉";
		
		form.firstName = "";
		form.lastName = "";
		form.yearLevel = "";
		form.email = "";
		form.expertise = "";
		removeProfilePicture();
		
		setTimeout(() => (message.value = ""), 5000);
	} catch (err) {
		console.error(err);
		message.value = "Something went wrong. Please try again.";
	} finally {
		isRegistering.value = false;
	}
};
</script>

<template>
	<main
			class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center py-16 px-4"
	>
		<div class="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-4xl">
			<h2
					class="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
			>
				Join the Club
			</h2>
			
			<form
					@submit.prevent="handleRegister"
					class="grid grid-cols-1 md:grid-cols-2 gap-6"
			>
				<div>
					<label class="block text-gray-300 mb-1">First Name</label>
					<input
							v-model="form.firstName"
							type="text"
							placeholder="Enter your first name"
							required
							class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
					/>
				</div>
				<div>
					<label class="block text-gray-300 mb-1">Last Name</label>
					<input
							v-model="form.lastName"
							type="text"
							placeholder="Enter your last name"
							required
							class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
					/>
				</div>
				<div>
					<label class="block text-gray-300 mb-1">Year Level</label>
					<select
							v-model="form.yearLevel"
							required
							class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
					>
						<option value="" disabled>Select year level</option>
						<option
								v-for="year in yearOptions"
								:key="year.value"
								:value="year.value"
						>
							{{ year.label }}
						</option>
					</select>
				</div>
				<div>
					<label class="block text-gray-300 mb-1">Email</label>
					<input
							v-model="form.email"
							type="email"
							placeholder="example@school.edu"
							required
							class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
					/>
				</div>
				<div class="md:col-span-2">
					<label class="block text-gray-300 mb-1">About Yourself</label>
					<textarea
							v-model="form.expertise"
							rows="3"
							placeholder="Tell us about yourself, your interests, or what skills you want to share"
							class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
					></textarea>
				</div>
				<div class="md:col-span-2 flex flex-col">
					<label class="block text-gray-300 mb-1">
						Profile Picture (optional)
					</label>
					<div class="flex items-center gap-2">
						<div
								class="flex-1 flex items-center px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 cursor-pointer text-white"
								@click="fileInput?.click()"
						>
							<i class="bx bx-camera text-xl text-purple-400 mr-2"></i>
							<input
									ref="fileInput"
									type="file"
									accept="image/*"
									class="hidden"
									@change="handleFileChange"
							/>
							<span class="truncate">
                {{
									form.profilePicture
											? form.profilePicture.name
											: "Click to upload image"
								}}
              </span>
						</div>
						
						<button
								v-if="form.profilePicture"
								type="button"
								@click="removeProfilePicture"
								class="p-2 bg-red-500 hover:bg-red-600 rounded-lg"
								title="Clear image"
						>
							<i class="bx bx-x"></i>
						</button>
					</div>
					
					<img
							v-if="previewUrl"
							:src="previewUrl"
							alt="Preview"
							class="mt-3 w-24 h-24 object-cover rounded-lg border border-gray-600"
					/>
				</div>
				<div class="md:col-span-2 text-center text-sm text-yellow-400">
					{{ message }}
				</div>
				<div class="md:col-span-2 flex flex-col items-center">
					<button
							type="submit"
							class="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold flex justify-center items-center"
					>
						<span v-if="isRegistering" class="loader mr-2"></span>
						{{ isRegistering ? "Registering..." : "Register" }}
					</button>
					
					<router-link
							to="/"
							class="mt-4 text-sm text-purple-300 hover:text-pink-400"
					>
						Back to Home
					</router-link>
				</div>
			</form>
		</div>
	</main>
</template>

<style>
.loader {
	border: 2px solid rgba(255, 255, 255, 0.3);
	border-top: 2px solid white;
	border-radius: 50%;
	width: 16px;
	height: 16px;
	animation: spin 0.8s linear infinite;
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}
</style>
