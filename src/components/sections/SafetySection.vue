<template>
  <section class="safety section">
    <div class="container">
      <div class="safety-content">
        <div class="safety-text fade-in-left">
          <h2>Pharmacovigilance & Product Safety</h2>
          <p class="safety-intro">
            At Red Shadows, we take product safety seriously.
          </p>
          <p class="safety-description">
            If you experience or observe any side effect, unexpected reaction, or quality issue related to any of our distributed products, please contact our safety team.
          </p>
          <p class="safety-description">
            Our team reviews every report promptly and coordinates with manufacturers and regulatory authorities when required. Reports are acknowledged within 24 hours (Sun–Thu).
          </p>
          
          <div class="contact-box">
            <h3>Contact for Product Safety Reports</h3>
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">📧</div>
                <div class="method-details">
                  <span class="method-label">Email</span>
                  <a href="mailto:safety@redshadows.me.com" class="method-value">safety@redshadows.me.com</a>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">📞</div>
                <div class="method-details">
                  <span class="method-label">Phone</span>
                  <a href="tel:+96897220991" class="method-value">+968 9722 0991</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="safety-visual fade-in-right">
          <div class="visual-card">
            <div class="card-header">
              <div class="header-icon">⚠️</div>
              <h3>When Reporting, Please Include:</h3>
            </div>
            <ul class="info-list">
              <li>
                <div class="list-icon">✓</div>
                <span>Product name and batch/lot number</span>
              </li>
              <li>
                <div class="list-icon">✓</div>
                <span>Description of the issue or reaction</span>
              </li>
              <li>
                <div class="list-icon">✓</div>
                <span>Date and place of purchase</span>
              </li>
              <li>
                <div class="list-icon">✓</div>
                <span>Your contact details for follow-up</span>
              </li>
            </ul>
            <div class="card-footer">
              <div class="footer-note">
                <span class="note-icon">🔒</span>
                <p>Please avoid sharing personal identifiers; initials/age/sex are sufficient if relevant.</p>
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
.safety {
  background-color: var(--white);
}

.safety-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.safety-text {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s ease-out;
}

.safety-text h2 {
  color: var(--primary-blue);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.safety-intro {
  color: var(--primary-blue);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.safety-description {
  color: var(--text-gray);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.contact-box {
  margin-top: 2.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, var(--light-gray) 0%, #e9ecef 100%);
  border-radius: 15px;
  border-left: 4px solid var(--accent-orange);
}

.contact-box h3 {
  color: var(--primary-blue);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.method-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
}

.method-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.method-label {
  color: var(--text-gray);
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.method-value {
  color: var(--primary-blue);
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
}

.method-value:hover {
  color: var(--accent-orange);
  text-decoration: underline;
}

.safety-visual {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s ease-out;
  position: relative;
}

.visual-card {
  background: linear-gradient(135deg, var(--primary-blue) 0%, #032a7a 100%);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: var(--shadow-hover);
  position: relative;
  overflow: hidden;
}

.visual-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  opacity: 0.5;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.header-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.card-header h3 {
  color: var(--white);
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  position: relative;
  z-index: 1;
}

.info-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 0.75rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transition: var(--transition);
}

.info-list li:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateX(5px);
}

.list-icon {
  width: 24px;
  height: 24px;
  background-color: var(--accent-orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: bold;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.info-list li span {
  color: var(--white);
  font-size: 1rem;
  line-height: 1.6;
  flex: 1;
}

.card-footer {
  position: relative;
  z-index: 1;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1.5rem;
}

.footer-note {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
}

.note-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.footer-note p {
  color: var(--white);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.95;
}

@media (max-width: 1024px) {
  .safety-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .safety-text {
    text-align: center;
  }
  
  .card-header {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .safety {
    padding: 80px 0;
  }
  
  .safety-text h2 {
    font-size: 2.5rem;
  }
  
  .safety-intro {
    font-size: 1.1rem;
  }
  
  .safety-description {
    font-size: 1rem;
  }
  
  .contact-box {
    padding: 1.5rem;
  }
  
  .visual-card {
    padding: 2rem;
  }
  
  .card-header h3 {
    font-size: 1.3rem;
  }
  
  .info-list li span {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .safety {
    padding: 60px 0;
  }
  
  .safety-content {
    gap: 2rem;
  }
  
  .safety-text h2 {
    font-size: 2rem;
  }
  
  .contact-box {
    padding: 1.25rem;
  }
  
  .contact-box h3 {
    font-size: 1.2rem;
  }
  
  .visual-card {
    padding: 1.5rem;
  }
  
  .card-header {
    flex-direction: column;
    text-align: center;
  }
  
  .header-icon {
    font-size: 2rem;
  }
  
  .card-header h3 {
    font-size: 1.2rem;
  }
  
  .info-list li {
    padding: 0.75rem;
  }
  
  .list-icon {
    width: 20px;
    height: 20px;
    font-size: 0.8rem;
  }
  
  .info-list li span {
    font-size: 0.9rem;
  }
  
  .method-value {
    font-size: 1rem;
  }
}
</style>

