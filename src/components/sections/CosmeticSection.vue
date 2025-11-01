<template>
  <section class="cosmetic section">
    <div class="container">
      <div class="cosmetic-content">
        <div class="cosmetic-visual fade-in-left">
          <div class="product-showcase">
            <div class="main-product-card">
              <div class="product-image">
                <img :src="currentProduct.image" :alt="currentProduct.title" />
                <div class="product-overlay">
                  <div class="product-info">
                    <h3>{{ currentProduct.title }}</h3>
                    <p>{{ currentProduct.subtitle }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="floating-elements">
              <div class="floating-icon icon-1">
                <span>💄</span>
              </div>
              <div class="floating-icon icon-2">
                <span>🧴</span>
              </div>
              <div class="floating-icon icon-3">
                <span>✨</span>
              </div>
              <div class="floating-icon icon-4">
                <span>🌿</span>
              </div>
            </div>
            
            <div class="secondary-cards">
              <div 
                class="mini-card card-1" 
                :class="{ 'active': currentProductIndex === 0 }"
                @click="selectProduct(0)"
              >
                <img src="https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg" alt="Skincare" loading="lazy" />
                <div class="card-label">Skincare</div>
              </div>
              <div 
                class="mini-card card-2" 
                :class="{ 'active': currentProductIndex === 1 }"
                @click="selectProduct(1)"
              >
                <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop" alt="Makeup" loading="lazy" />
                <div class="card-label">Makeup</div>
              </div>
              <div 
                class="mini-card card-3" 
                :class="{ 'active': currentProductIndex === 2 }"
                @click="selectProduct(2)"
              >
                <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop" alt="Hair Care" loading="lazy" />
                <div class="card-label">Hair Care</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="cosmetic-text fade-in-right">
          <span class="section-subtitle">Read about</span>
          <h2>{{ currentProduct.title }}</h2>
          <p class="cosmetic-description">
            {{ currentProduct.description }}
          </p>
          <ul v-if="currentProduct.bulletPoints" class="cosmetic-bullet-list">
            <li v-for="(point, index) in currentProduct.bulletPoints" :key="index">
              {{ point }}
            </li>
          </ul>
          <p v-if="currentProduct.additionalDescription" class="cosmetic-additional-description">
            {{ currentProduct.additionalDescription }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Product data
const products = ref([
{
  title: 'Quality & Compliance',
  subtitle: '',
  image: 'https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg',
  description: `We operate in line with Good Distribution Practice (GDP) and GMP sourcing standards:`,
  bulletPoints: [
    'Controlled temperature monitoring for all stored goods',
    'Batch and expiry tracking (FEFO)',
    'Supplier and customer qualification',
    'Proper documentation for import and distribution',
    'Ongoing staff training in product handling and hygiene'
  ],
  additionalDescription: 'Red Shadows is fully committed to GDP principles. Formal certification is underway as our facilities expand.'
},
  {
    title: 'Luxury Makeup',
    subtitle: 'Professional makeup collection',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
    description: 'Discover our luxury makeup collection featuring high-performance cosmetics that enhance your natural beauty. Our range includes long-lasting foundations, vibrant eyeshadows, and premium lipsticks. Each product is carefully crafted with quality ingredients to provide flawless coverage and stunning results for any occasion.'
  },
  {
    title: 'Hair Care Solutions',
    subtitle: 'Complete hair care system',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    description: 'Transform your hair with our comprehensive hair care solutions. From nourishing shampoos to intensive treatments, our products are designed to restore, strengthen, and beautify your hair. Whether you need volume, moisture, or repair, our advanced formulas deliver salon-quality results at home.'
  }
])

// Current selected product index
const currentProductIndex = ref(0)

// Computed property for current product
const currentProduct = computed(() => {
  return products.value[currentProductIndex.value]
})

// Method to select a product
const selectProduct = (index) => {
  currentProductIndex.value = index
}

// Trigger animations when elements come into view
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateX(0)'
      }
    })
  })
  
  document.querySelectorAll('.cosmetic-visual, .cosmetic-text').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.cosmetic {
  background-color: var(--white);
  padding: 100px 0;
}

.cosmetic-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.cosmetic-text {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s ease-out;
}

.section-subtitle {
  color: var(--text-gray);
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  display: block;
}

.cosmetic-text h2 {
  color: var(--primary-blue);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.cosmetic-description {
  color: var(--text-gray);
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0 0 1.5rem 0;
}

.cosmetic-bullet-list {
  color: var(--text-gray);
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 1rem 0 0 0;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.cosmetic-bullet-list li {
  margin-bottom: 0.75rem;
}

.cosmetic-bullet-list li:last-child {
  margin-bottom: 0;
}

.cosmetic-additional-description {
  color: var(--text-gray);
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 1.5rem 0 0 0;
}

.cosmetic-visual {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s ease-out;
  position: relative;
}

.product-showcase {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-product-card {
  position: relative;
  z-index: 10;
}

.product-image {
  width: 300px;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  position: relative;
}

.product-image:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.product-image:hover img {
  transform: scale(1.1);
}

.product-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem 1.5rem 1.5rem;
  color: white;
  opacity: 0;
  transition: var(--transition);
}

.product-image:hover .product-overlay {
  opacity: 1;
}

.product-info h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: white;
}

.product-info p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.floating-icon {
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: float 6s ease-in-out infinite;
}

.floating-icon.icon-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.floating-icon.icon-2 {
  top: 20%;
  right: 15%;
  animation-delay: 1.5s;
}

.floating-icon.icon-3 {
  bottom: 30%;
  left: 5%;
  animation-delay: 3s;
}

.floating-icon.icon-4 {
  bottom: 20%;
  right: 10%;
  animation-delay: 4.5s;
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

.secondary-cards {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 5;
}

.mini-card {
  width: 80px;
  height: 80px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.mini-card:hover {
  transform: translateY(-10px) scale(1.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.mini-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-label {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary-blue);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  transition: var(--transition);
}

.mini-card:hover .card-label {
  opacity: 1;
  bottom: -40px;
}

.mini-card.active {
  transform: translateY(-10px) scale(1.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border: 2px solid var(--accent-orange);
}

.mini-card.active .card-label {
  opacity: 1;
  bottom: -40px;
  background: var(--accent-orange);
}

.cosmetic-text {
  transition: all 0.5s ease-in-out;
}

.product-image img {
  transition: all 0.5s ease-in-out;
}

@media (max-width: 1024px) {
  .cosmetic-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  .product-showcase {
    height: 400px;
  }
  
  .product-image {
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 768px) {
  .cosmetic {
    padding: 80px 0;
  }
  
  .cosmetic-text h2 {
    font-size: 2.5rem;
  }
  
  .product-showcase {
    height: 350px;
  }
  
  .product-image {
    width: 200px;
    height: 200px;
  }
  
  .floating-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
  
  .mini-card {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 480px) {
  .cosmetic {
    padding: 60px 0;
  }
  
  .cosmetic-content {
    gap: 2rem;
  }
  
  .cosmetic-text h2 {
    font-size: 2rem;
  }
  
  .cosmetic-description {
    font-size: 1rem;
  }
  
  .cosmetic-bullet-list {
    font-size: 1rem;
    padding-left: 1.25rem;
  }
  
  .cosmetic-additional-description {
    font-size: 1rem;
    margin-top: 1.25rem;
  }
  
  .product-showcase {
    height: 300px;
  }
  
  .product-image {
    width: 180px;
    height: 180px;
  }
  
  .floating-icon {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .mini-card {
    width: 50px;
    height: 50px;
  }
  
  .secondary-cards {
    gap: 0.5rem;
  }
}
</style>
