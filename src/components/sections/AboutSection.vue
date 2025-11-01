<template>
  <section class="about section">
    <div class="container">
      <div class="about-content">
        <div class="about-text fade-in-left">
          <h2>About Us</h2>
          <p class="vision">Red Shadows SPC is a licensed healthcare and pharmaceutical distribution company committed to improving access to trusted, high-quality wellness products across the Middle East.
          </p> 
          <p class="vision">
          We specialize in the import, marketing, and distribution of dermo-cosmetics, baby care, feminine hygiene, and OTC wellness brands — including our own regional labels such as Senzicare and Baby First, alongside globally recognized partners like Phyto Paris and Mustela France.
          </p>
          <p class="vision">
          From regulatory approvals to last-mile delivery, every aspect of our operation is managed with precision, transparency, and compliance. Our processes follow Good Distribution Practice (GDP) standards to ensure that all products are stored, handled, and transported under controlled and traceable conditions.
          </p>
          
          <div class="mission-vision">
            <div class="mission">
              <h3>Our Mission</h3>
              <p>Our mission is to bridge global healthcare brands with regional markets — empowering pharmacies, hospitals, and retailers to offer safe, effective, and reliable products to their customers.
            </p>
            </div>

            
          </div>
        </div>
        
        <div class="about-image fade-in-right">
          <div class="image-container">
            <img src="/src/assets/about.jpg" alt="About Red Shadows" class="about-main-image" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateX(0)'
      }
    })
  })
  
  document.querySelectorAll('.fade-in-left, .fade-in-right').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.about {
  background-color: var(--white);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s ease-out;
}

.about-text h2 {
  margin-bottom: 1.5rem;
}

.lead {
  font-size: 1.2rem;
  color: var(--text-gray);
  margin-bottom: 2rem;
  font-weight: 400;
}

.mission-vision {
  margin-bottom: 3rem;
}

.mission, .vision {
  margin-bottom: 2rem;
}

.mission h3, .vision h3 {
  color: var(--primary-blue);
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.values h3 {
  color: var(--primary-blue);
  margin-bottom: 1.5rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.value-item {
  text-align: center;
  padding: 1.5rem;
  background-color: var(--light-gray);
  border-radius: 10px;
  transition: var(--transition);
}

.value-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.value-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.value-item h4 {
  color: var(--primary-blue);
  margin-bottom: 0.5rem;
}

.value-item p {
  font-size: 0.9rem;
  color: var(--text-gray);
}

.about-image {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s ease-out;
}

.image-container {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.about-main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.about-main-image:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .image-container {
    height: 300px;
  }
}
</style>
