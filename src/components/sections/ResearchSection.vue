<template>
  <section class="research section">
    <div class="container">
      <div class="section-header fade-in-up">
            <h2>Our Services</h2> 
        </div>
         <div class="innovation-highlights section-header fade-in-right">
          <div class="highlights-grid">
            <div class="highlight-item">
              <div class="highlight-icon">📋</div>
              <h4>Regulatory & Import Support</h4>
              <p>Coordination with MOHAP/DOH for compliant product registration and import approvals.</p>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">📦</div>
              <h4>Warehousing & Distribution</h4>
              <p>Temperature-controlled storage and traceable order fulfillment across Oman & UAE.</p>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">🤝</div>
              <h4>Retail & Pharmacy Partnerships</h4>
              <p>Dedicated account management and on-shelf marketing support.</p>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">🏷️</div>
              <h4>Private Label Development</h4>
              <p>End-to-end support for clients seeking custom-branded health products.</p>
            </div>
          </div>
        </div>

      <div class="section-header fade-in-up">
        <h2>Research & Innovation</h2>
        <p>Pioneering the future of pharmaceutical science</p>
      </div>
      
      <div class="research-content">
        <div class="research-stats fade-in-left">
          <div class="stat-item">
            <div class="stat-number">15+</div>
            <div class="stat-label">Years of Research</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">500+</div>
            <div class="stat-label">Research Papers</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Patents Filed</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">25+</div>
            <div class="stat-label">Countries Served</div>
          </div>
        </div>
        
        <div class="research-areas">
          <div class="research-card fade-in-up" v-for="(area, index) in researchAreas" :key="index" :style="{ animationDelay: `${index * 0.2}s` }">
            <div class="research-icon">{{ area.icon }}</div>
            <h3>{{ area.title }}</h3>
            <p>{{ area.description }}</p>
            <div class="research-progress">
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: area.progress + '%' }"></div>
              </div>
              <span class="progress-text">{{ area.progress }}% Complete</span>
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const researchAreas = ref([
  {
    icon: '🧬',
    title: 'Molecular Biology',
    description: 'Advanced research in cellular mechanisms and molecular interactions.',
    progress: 85
  },
  {
    icon: '💊',
    title: 'Drug Formulation',
    description: 'Developing innovative drug delivery systems and formulations.',
    progress: 92
  },
  {
    icon: '🔬',
    title: 'Clinical Trials',
    description: 'Comprehensive testing and validation of new pharmaceutical products.',
    progress: 78
  },
  {
    icon: '🧠',
    title: 'Neuroscience',
    description: 'Research into neurological disorders and brain function.',
    progress: 65
  }
])
</script>

<style scoped>
.research {
  background-color: var(--white);
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

.research-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s ease-out;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, var(--primary-teal), #3A7B70);
  color: var(--white);
  border-radius: 15px;
  transition: var(--transition);
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--accent-rose);
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 500;
}

.research-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.research-card {
  background-color: var(--light-gray);
  padding: 2rem;
  border-radius: 15px;
  transition: var(--transition);
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

.research-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.research-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.research-card h3 {
  color: var(--primary-blue);
  margin-bottom: 1rem;
  text-align: center;
}

.research-card p {
  color: var(--text-gray);
  margin-bottom: 1.5rem;
  text-align: center;
}

.research-progress {
  margin-top: 1rem;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background-color: rgba(4, 60, 170, 0.2);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-teal), var(--accent-rose));
  border-radius: 4px;
  transition: width 1s ease-out;
}

.progress-text {
  font-size: 0.9rem;
  color: var(--primary-blue);
  font-weight: 500;
  text-align: center;
  display: block;
}

.innovation-highlights {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s ease-out;
}

.innovation-highlights h3 {
  color: var(--primary-blue);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.highlight-item {
  text-align: center;
  padding: 1.5rem;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.highlight-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.highlight-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.highlight-item h4 {
  color: var(--primary-blue);
  margin-bottom: 0.5rem;
}

.highlight-item p {
  color: var(--text-gray);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .research-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .research-areas {
    grid-template-columns: 1fr;
  }
  
  .highlights-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .research-stats {
    grid-template-columns: 1fr;
  }
  
  .highlights-grid {
    grid-template-columns: 1fr;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
}
</style>
