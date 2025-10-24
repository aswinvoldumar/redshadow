<template>
  <section class="hero">
    <div class="hero-background">
      <div class="molecular-pattern"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-text fade-in-up">
          <h1>Innovating Healthcare with Trust and Precision</h1>
          <p class="hero-subtitle">Delivering quality pharmaceuticals that improve lives</p>
          <div class="hero-buttons">
            <router-link to="/about" class="btn btn-primary">Learn More</router-link>
            <router-link to="/contact" class="btn btn-accent">Contact Us</router-link>
          </div>
        </div>
        <div class="hero-image fade-in-right">
          <div class="hero-visual">
            <img src="/src/assets/hero image.png" alt="RED SHADOW Pharmaceuticals Hero" class="hero-main-image">
            <div class="molecule-animation">
              <div class="atom"></div>
              <div class="atom"></div>
              <div class="atom"></div>
              <div class="bond"></div>
              <div class="bond"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Add animation classes when component mounts
  const elements = document.querySelectorAll('.fade-in-up, .fade-in-right')
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, index * 200)
  })
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.molecular-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(4, 60, 170, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 102, 1, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 60%, rgba(4, 60, 170, 0.05) 0%, transparent 50%);
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
  padding-top: 80px;
}

.hero-text {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.hero-text h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--primary-blue);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: var(--text-gray);
  margin-bottom: 2.5rem;
  font-weight: 400;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.hero-image {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s ease-out;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  position: relative;
}

.hero-main-image {
  max-width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: var(--shadow-hover);
  z-index: 2;
  position: relative;
}

.molecule-animation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  z-index: 1;
  opacity: 0.3;
}

.atom {
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--primary-blue);
  border-radius: 50%;
  animation: orbit 8s linear infinite;
}

.atom:nth-child(1) {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 0s;
}

.atom:nth-child(2) {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: var(--accent-orange);
  animation-delay: -2.67s;
}

.atom:nth-child(3) {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: -5.33s;
}

.bond {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-blue), var(--accent-orange));
  animation: pulse 2s ease-in-out infinite;
}

.bond:nth-child(4) {
  top: 50%;
  left: 50%;
  width: 100px;
  transform: translate(-50%, -50%) rotate(45deg);
  animation-delay: 0s;
}

.bond:nth-child(5) {
  top: 50%;
  left: 50%;
  width: 100px;
  transform: translate(-50%, -50%) rotate(-45deg);
  animation-delay: 1s;
}

@keyframes orbit {
  0% { transform: translateX(-50%) rotate(0deg) translateX(100px) rotate(0deg); }
  100% { transform: translateX(-50%) rotate(360deg) translateX(100px) rotate(-360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}


@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-text h1 {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .hero-visual {
    height: 300px;
  }
  
  .hero-main-image {
    max-height: 300px;
  }
}

@media (max-width: 480px) {
  .hero-text h1 {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
