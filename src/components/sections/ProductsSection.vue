<template>
  <section class="products section">
    <div class="container">
      <div class="section-header fade-in-up">
        <h2>Our Brands & Products</h2>
        <p>Comprehensive range of high-quality pharmaceutical solutions</p>
      </div>
      
      <div class="products-grid">
        <div class="product-card fade-in-up" v-for="(product, index) in products" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">
          <div class="product-icon">{{ product.icon }}</div>
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
          <div class="product-features">
            <span class="feature" v-for="feature in product.features" :key="feature">{{ feature }}</span>
          </div>
          <div class="product-actions">
            <button class="btn btn-outline">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  {
    icon: '💊',
    title: 'Senzicare',
    description: 'Innovative hygiene and menstrual health products designed with comfort and safety in mind.',
    features: ['Senziwash Women’s Intimate Wash', 'Leo Men’s Intimate Wash', 'Trucup Menstrual Cup','Sterilizer Cup','Reusable Period Panties']
  },
  {
    icon: '🧬',
    title: 'Baby First ',
    description: 'Gentle daily-care range formulated for sensitive infant skin.',
    features: ['Baby Moisturising Lotion', 'Multi-Vita Baby Oil', 'Daily Wash & Shampoo','Eczema Relief Cream (Urea 6 %)','Nappy Cream']
  },
  {
    icon: '🦠',
    title: ' Phyto Paris',
    description: 'A renowned professional hair-care brand blending botanicals with clinical expertise.',
    features: ['Phytocyane Anti-Hair Loss Treatments (Men & Women)', 'Softness, Volume & Colour-Care Ranges', 'Professional Hair Color Kits 1 – 9']
  },
  {
    icon: '🧠',
    title: 'Mustela ',
    description: 'The global leader in baby and maternity skincare.',
    features: ['Normal Skin Range – Gentle Cleansing Gel, Hydra Bebe Face Cream, Massage Oil', 'Dry & Atopic Skin Care – Stelatopia range', 'Very Sensitive Skin & Sun Care – SPF 50 Lotions, Soothing Creams','Maternity Range – Stretch Marks Prevention Cream, Nursing Comfort Balm']
  }
])
</script>

<style scoped>
.products {
  background-color: var(--light-gray);
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

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.product-card {
  background-color: var(--white);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: var(--shadow);
  transition: var(--transition);
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-hover);
}

.product-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
}

.product-card h3 {
  color: var(--primary-blue);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.product-card p {
  color: var(--text-gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.feature {
  background-color: rgba(4, 60, 170, 0.1);
  color: var(--primary-blue);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.product-actions {
  text-align: center;
}

.btn-outline {
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
}

.btn-outline:hover {
  background-color: var(--primary-blue);
  color: var(--white);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .product-card {
    padding: 1.5rem;
  }
  
  .product-features {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
  
  .product-card {
    padding: 1rem;
  }
  
  .product-icon {
    font-size: 2.5rem;
  }
}
</style>
