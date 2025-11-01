<template>
  <section class="sustainability section">
    <div class="container">
      <div class="section-header fade-in-up">
        <h2>Sustainability & Ethics</h2>
        <p>Our commitment to responsible business practices and environmental stewardship</p>
      </div>
      
      <div class="sustainability-grid">
        <div class="sustainability-card fade-in-left">
          <div class="card-icon">🌱</div>
          <h3>Environmentally Responsible Packaging</h3>
          <p>We promote and implement sustainable packaging solutions that minimize environmental impact while maintaining product integrity and safety.</p>
          <ul class="feature-list">
            <li>Recyclable materials</li>
            <li>Reduced plastic usage</li>
            <li>Biodegradable alternatives</li>
          </ul>
        </div>
        
        <div class="sustainability-card fade-in-right">
          <div class="card-icon">♻️</div>
          <h3>Recycling Programs</h3>
          <p>Active participation in recycling initiatives to reduce waste and contribute to a circular economy in pharmaceutical distribution.</p>
          <ul class="feature-list">
            <li>Product packaging recycling</li>
            <li>Waste reduction strategies</li>
            <li>Circular economy practices</li>
          </ul>
        </div>
      </div>
      
      <div class="sustainability-highlight fade-in-up">
        <div class="highlight-content">
          <div class="highlight-icon">💚</div>
          <div class="highlight-text">
            <h3>Our Pledge</h3>
            <p>At Red Shadows SPC, we believe that business success and social responsibility go hand in hand. We are committed to creating a sustainable future for healthcare while maintaining the highest ethical standards in everything we do.</p>
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
        entry.target.style.transform = 'translateY(0)'
      }
    })
  })
  
  document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.sustainability {
  background: linear-gradient(135deg, #F0F7F6 0%, #E8F5F3 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.section-header h2 {
  margin-bottom: 1rem;
  color: var(--primary-blue);
}

.section-header p {
  font-size: 1.2rem;
  color: var(--text-gray);
  max-width: 700px;
  margin: 0 auto;
}

.sustainability-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.sustainability-card {
  background-color: var(--white);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: var(--shadow);
  transition: var(--transition);
  opacity: 0;
  transform: translateY(30px);
  position: relative;
  overflow: hidden;
}

.sustainability-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-teal), var(--accent-rose));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.sustainability-card:hover::before {
  transform: scaleX(1);
}

.sustainability-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-hover);
}

.sustainability-card.fade-in-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s ease-out;
}

.sustainability-card.fade-in-right {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s ease-out;
}

.card-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  display: block;
}

.sustainability-card h3 {
  color: var(--primary-blue);
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-align: center;
}

.sustainability-card p {
  color: var(--text-gray);
  margin-bottom: 1.5rem;
  line-height: 1.7;
  text-align: center;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  color: var(--text-gray);
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  background-color: var(--light-gray);
  border-radius: 8px;
  position: relative;
  padding-left: 2.5rem;
  transition: var(--transition);
}

.feature-list li::before {
  content: '✓';
  position: absolute;
  left: 0.75rem;
  color: var(--accent-orange);
  font-weight: bold;
  font-size: 1.2rem;
}

.feature-list li:hover {
  background-color: rgba(4, 60, 170, 0.05);
  transform: translateX(5px);
}

.sustainability-highlight {
  background: linear-gradient(135deg, var(--primary-teal) 0%, #3A7B70 100%);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: var(--shadow-hover);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.highlight-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.highlight-icon {
  font-size: 4rem;
  flex-shrink: 0;
}

.highlight-text h3 {
  color: var(--white);
  margin-bottom: 1rem;
  font-size: 2rem;
}

.highlight-text p {
  color: var(--white);
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0;
  opacity: 0.95;
}

@media (max-width: 1024px) {
  .sustainability-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .highlight-content {
    flex-direction: column;
    text-align: center;
  }
  
  .highlight-icon {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .section-header p {
    font-size: 1rem;
  }
  
  .sustainability-card {
    padding: 2rem;
  }
  
  .sustainability-card h3 {
    font-size: 1.3rem;
  }
  
  .card-icon {
    font-size: 3rem;
  }
  
  .sustainability-highlight {
    padding: 2rem;
  }
  
  .highlight-text h3 {
    font-size: 1.5rem;
  }
  
  .highlight-text p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .sustainability-card {
    padding: 1.5rem;
  }
  
  .card-icon {
    font-size: 2.5rem;
  }
  
  .sustainability-card h3 {
    font-size: 1.2rem;
  }
  
  .sustainability-highlight {
    padding: 1.5rem;
  }
  
  .highlight-icon {
    font-size: 2.5rem;
  }
  
  .highlight-text h3 {
    font-size: 1.3rem;
  }
}
</style>

