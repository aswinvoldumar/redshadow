<template>
  <main id="main-content">
    <section id="home">
      <HeroSection />
    </section>
    <section id="about">
      <AboutSection />
    </section>
    <section id="products">
      <ProductsSection />
    </section>
    <section id="cosmetic">
      <CosmeticSection />
    </section>
    <section id="research">
      <ResearchSection />
    </section>
    <section id="sustainability">
      <SustainabilitySection />
    </section>
    <section id="safety">
      <SafetySection />
    </section>
    <section id="partnership">
      <PartnershipSection />
    </section>
    <section id="contact">
      <ContactSection />
    </section>
  </main>
</template>

<script setup>
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import ProductsSection from '../components/sections/ProductsSection.vue'
import CosmeticSection from '../components/sections/CosmeticSection.vue'
import ResearchSection from '../components/sections/ResearchSection.vue'
import SustainabilitySection from '../components/sections/SustainabilitySection.vue'
import SafetySection from '../components/sections/SafetySection.vue'
import PartnershipSection from '../components/sections/PartnershipSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
</script>
