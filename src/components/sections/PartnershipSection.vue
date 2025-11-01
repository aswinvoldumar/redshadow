<template>
  <section class="partnership section">
    <div class="container">
      <div class="partnership-content">
        <div class="partnership-text fade-in-left">
          <h2>Partner with Us</h2>
          <p class="partnership-description">
            We welcome partnerships with manufacturers, brand owners, and healthcare distributors seeking reliable regional representation.
            Whether you're looking for a trusted distributor or private-label collaboration, our team ensures professional regulatory and commercial execution.
          </p>
          
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">📩</div>
              <div class="contact-info">
                <span class="contact-label">Email</span>
                <a href="mailto:sales@redshadows.me" class="contact-value">sales@redshadows.me</a>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div class="contact-info">
                <span class="contact-label">Call/WhatsApp</span>
                <a href="tel:+96897220991" class="contact-value">+968 9722 0991</a>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div class="contact-info">
                <span class="contact-label">Offices</span>
                <span class="contact-value">Muscat, Oman</span>
              </div>
            </div>
          </div>
          
          <div class="partnership-button">
            <a href="#contact" class="btn btn-primary">
              ➡️ Get in Touch
            </a>
          </div>
        </div>
        
        <div class="partnership-visual fade-in-right">
          <div class="visual-container">
            <img src="/src/assets/partnership.jpg" alt="Partnership" class="partnership-image" loading="lazy" />
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
.partnership {
  background-color: var(--white);
  padding: 100px 0;
}

.partnership-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.partnership-text {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s ease-out;
}

.partnership-text h2 {
  color: var(--primary-blue);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.partnership-description {
  color: var(--text-gray);
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.contact-details {
  margin-bottom: 2.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1.25rem;
  background-color: var(--light-gray);
  border-radius: 10px;
  transition: var(--transition);
}

.contact-item:hover {
  transform: translateX(5px);
  box-shadow: var(--shadow);
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-icon {
  font-size: 1.8rem;
  margin-right: 1.25rem;
  flex-shrink: 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-label {
  color: var(--text-gray);
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-value {
  color: var(--primary-blue);
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
}

.contact-value:hover {
  color: var(--accent-orange);
}

.partnership-button {
  margin-top: 2rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.partnership-visual {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s ease-out;
  position: relative;
}

.visual-container {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.partnership-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.partnership-image:hover {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .partnership-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .partnership-text {
    text-align: center;
  }
  
  .contact-item {
    justify-content: center;
  }
  
  .visual-container {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .partnership {
    padding: 80px 0;
  }
  
  .partnership-text h2 {
    font-size: 2.5rem;
  }
  
  .partnership-description {
    font-size: 1rem;
  }
  
  .contact-item {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }
  
  .contact-icon {
    margin-right: 0;
    margin-bottom: 0.75rem;
  }
  
  .visual-container {
    height: 350px;
  }
}

@media (max-width: 480px) {
  .partnership {
    padding: 60px 0;
  }
  
  .partnership-content {
    gap: 2rem;
  }
  
  .partnership-text h2 {
    font-size: 2rem;
  }
  
  .visual-container {
    height: 300px;
  }
  
  .btn-primary {
    width: 100%;
    justify-content: center;
  }
}
</style>

