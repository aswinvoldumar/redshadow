<template>
  <section class="about section">
    <div class="container">
      <div class="about-content">
        <div class="about-text fade-in-left">
          <h2>About RED SHADOW Pharmaceuticals</h2>
          <p class="lead">We are committed to advancing healthcare through innovative pharmaceutical solutions that improve patient outcomes and quality of life.</p>
          
          <div class="mission-vision">
            <div class="mission">
              <h3>Our Mission</h3>
              <p>To develop and deliver high-quality pharmaceutical products that address unmet medical needs while maintaining the highest standards of safety and efficacy.</p>
            </div>
            
            <div class="vision">
              <h3>Our Vision</h3>
              <p>To be a global leader in pharmaceutical innovation, recognized for our commitment to excellence, integrity, and improving human health worldwide.</p>
            </div>
          </div>
          
          <div class="values">
            <h3>Our Values</h3>
            <div class="values-grid">
              <div class="value-item">
                <div class="value-icon">🔬</div>
                <h4>Innovation</h4>
                <p>Continuous research and development</p>
              </div>
              <div class="value-item">
                <div class="value-icon">🛡️</div>
                <h4>Trust</h4>
                <p>Reliable and safe products</p>
              </div>
              <div class="value-item">
                <div class="value-icon">🎯</div>
                <h4>Excellence</h4>
                <p>Highest quality standards</p>
              </div>
              <div class="value-item">
                <div class="value-icon">🤝</div>
                <h4>Partnership</h4>
                <p>Collaborative healthcare approach</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="about-image fade-in-right">
          <div class="image-container">
            <div class="lab-visual">
              <div class="lab-equipment">
                <div class="microscope"></div>
                <div class="test-tubes"></div>
                <div class="molecular-structure"></div>
              </div>
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
}

.lab-visual {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--light-gray) 0%, #e9ecef 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lab-equipment {
  position: relative;
  width: 200px;
  height: 200px;
}

.microscope {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 60px;
  background: var(--primary-blue);
  border-radius: 5px;
  animation: float 3s ease-in-out infinite;
}

.microscope::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: var(--accent-orange);
  border-radius: 50%;
}

.test-tubes {
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 60px;
  height: 80px;
  background: var(--accent-orange);
  border-radius: 5px;
  animation: float 3s ease-in-out infinite 1s;
}

.test-tubes::before,
.test-tubes::after {
  content: '';
  position: absolute;
  width: 15px;
  height: 40px;
  background: var(--primary-blue);
  border-radius: 2px;
}

.test-tubes::before {
  left: 10px;
  top: 10px;
}

.test-tubes::after {
  right: 10px;
  top: 10px;
}

.molecular-structure {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 80px;
  height: 80px;
  border: 2px solid var(--primary-blue);
  border-radius: 50%;
  animation: rotate 10s linear infinite;
}

.molecular-structure::before,
.molecular-structure::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--accent-orange);
  border-radius: 50%;
}

.molecular-structure::before {
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.molecular-structure::after {
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes rotate {
  0% { transform: translateY(-50%) rotate(0deg); }
  100% { transform: translateY(-50%) rotate(360deg); }
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
