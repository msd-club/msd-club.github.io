<script setup lang="ts">
import MainLayout from '@/layout/MainLayout.vue'
import HeroSection from '@/views/landing-page/sections/HeroSection.vue'
import AboutSection from '@/views/landing-page/sections/AboutSection.vue'
import AdditionalAboutSection from '@/views/landing-page/sections/AdditionalAboutSection.vue'
import MemberSection from '@/views/landing-page/sections/MemberSection.vue'
import VisionMissionSection from '@/views/landing-page/sections/VisionMissionSection.vue'
import ProjectsPreviewSection from '@/views/landing-page/sections/ProjectsPreviewSection.vue'
</script>

<template>
	<MainLayout>
		<HeroSection/>
		<AboutSection/>
		<AdditionalAboutSection/>
		<VisionMissionSection/>
		<ProjectsPreviewSection/>
		<MemberSection/>
	</MainLayout>
</template>
