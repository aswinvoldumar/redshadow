<template>
  <section class="contact section">
    <div class="container">
      <div class="section-header fade-in-up">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>
      
      <div class="contact-content">
        <div class="contact-form fade-in-left">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" v-model="form.name" required>
            </div>
            
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="form.email" required>
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" v-model="form.subject" required>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" rows="5" required></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
        
        <div class="contact-info fade-in-right">
          <div class="info-item">
            <div class="info-icon">📍</div>
            <div class="info-content">
              <h3>Address</h3>
              <p>123 Pharmaceutical Avenue<br>Medical District, MD 12345<br>United States</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">📞</div>
            <div class="info-content">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567<br>+1 (555) 987-6543</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">✉️</div>
            <div class="info-content">
              <h3>Email</h3>
              <p>info@redshadowpharma.com<br>contact@redshadowpharma.com</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">🕒</div>
            <div class="info-content">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 4:00 PM<br>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  
  isSubmitting.value = false
  
  // Show success message (you can implement a toast notification here)
  alert('Thank you for your message! We will get back to you soon.')
}
</script>

<style scoped>
.contact {
  background-color: var(--light-pastel);
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
}

.section-header p {
  font-size: 1.2rem;
  color: var(--text-gray);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-form {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s ease-out;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--primary-blue);
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid var(--border-gray);
  border-radius: 5px;
  font-family: var(--font-primary);
  font-size: 1rem;
  transition: var(--transition);
}

.form-group input:focus-visible,
.form-group textarea:focus-visible {
  outline: none;
  border-color: var(--primary-teal);
  box-shadow: 0 0 0 3px rgba(74, 155, 142, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-primary {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.contact-info {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s ease-out;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.info-item:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
}

.info-icon {
  font-size: 2rem;
  margin-right: 1rem;
  flex-shrink: 0;
}

.info-content h3 {
  color: var(--primary-blue);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.info-content p {
  color: var(--text-gray);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .info-item {
    flex-direction: column;
    text-align: center;
  }
  
  .info-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .form-group input,
  .form-group textarea {
    padding: 0.6rem;
  }
  
  .info-item {
    padding: 1rem;
  }
}
</style>
