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
            <div class="partnership-graphic">
              <div class="graphic-element element-1"></div>
              <div class="graphic-element element-2"></div>
              <div class="graphic-element element-3"></div>
              <div class="graphic-icon icon-1">🤝</div>
              <div class="graphic-icon icon-2">🌐</div>
              <div class="graphic-icon icon-3">💼</div>
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
}

.partnership-graphic {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--light-gray) 0%, #e9ecef 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.graphic-element {
  position: absolute;
  border-radius: 10px;
  animation: float 6s ease-in-out infinite;
}

.graphic-element.element-1 {
  width: 100px;
  height: 100px;
  background: var(--primary-blue);
  top: 20%;
  left: 15%;
  opacity: 0.1;
  animation-delay: 0s;
}

.graphic-element.element-2 {
  width: 80px;
  height: 80px;
  background: var(--accent-orange);
  bottom: 25%;
  right: 20%;
  opacity: 0.1;
  animation-delay: 2s;
}

.graphic-element.element-3 {
  width: 120px;
  height: 120px;
  background: var(--primary-blue);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.05;
  animation-delay: 4s;
}

.graphic-icon {
  position: absolute;
  font-size: 3rem;
  animation: float 6s ease-in-out infinite;
}

.graphic-icon.icon-1 {
  top: 30%;
  left: 25%;
  animation-delay: 1s;
}

.graphic-icon.icon-2 {
  top: 50%;
  left: 50%;
  animation: floatCentered 6s ease-in-out infinite;
  animation-delay: 3s;
}

@keyframes floatCentered {
  0%, 100% {
    transform: translate(-50%, 0px) rotate(0deg);
  }
  25% {
    transform: translate(-50%, -20px) rotate(5deg);
  }
  50% {
    transform: translate(-50%, -10px) rotate(-5deg);
  }
  75% {
    transform: translate(-50%, -15px) rotate(3deg);
  }
}

.graphic-icon.icon-3 {
  bottom: 30%;
  right: 25%;
  animation-delay: 5s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(5deg);
  }
  50% {
    transform: translateY(-10px) rotate(-5deg);
  }
  75% {
    transform: translateY(-15px) rotate(3deg);
  }
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
  
  .graphic-icon {
    font-size: 2.5rem;
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
  
  .graphic-icon {
    font-size: 2rem;
  }
  
  .btn-primary {
    width: 100%;
    justify-content: center;
  }
}
</style>

