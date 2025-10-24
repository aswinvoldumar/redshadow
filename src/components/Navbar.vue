<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-content">
        <div class="logo">
          <router-link to="/" class="logo-link">
            <img src="/src/assets/logo red.png" alt="RED SHADOW Pharmaceuticals" class="logo-image">
            
          </router-link>
        </div>
        
        <div class="nav-menu" :class="{ 'active': isMenuOpen }">
          <a href="#home" class="nav-link" :class="{ 'active': isActive('#home') }" @click="closeMenu">Home</a>
          <a href="#about" class="nav-link" :class="{ 'active': isActive('#about') }" @click="closeMenu">About</a>
          <a href="#products" class="nav-link" :class="{ 'active': isActive('#products') }" @click="closeMenu">Products</a>
          <a href="#cosmetic" class="nav-link" :class="{ 'active': isActive('#cosmetic') }" @click="closeMenu">Cosmetic</a>
          <a href="#research" class="nav-link" :class="{ 'active': isActive('#research') }" @click="closeMenu">Research</a>
          <a href="#contact" class="nav-link" :class="{ 'active': isActive('#contact') }" @click="closeMenu">Contact</a>
        </div>
        
        <div class="hamburger" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const route = useRoute()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const isActive = (hash) => {
  // If no hash is present, default to home being active
  if (!route.hash && hash === '#home') {
    return true
  }
  return route.hash === hash
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--white);
  box-shadow: var(--shadow);
  z-index: 1000;
  transition: var(--transition);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--primary-blue);
  font-weight: 700;
  font-size: 1.5rem;
  transition: var(--transition);
}

.logo-image {
  height: 40px;
  width: auto;
  margin-right: 0.5rem;
}

.logo-text {
  font-family: var(--font-primary);
  letter-spacing: 1px;
}

.logo-link:hover {
  transform: scale(1.05);
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: var(--dark-gray);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: var(--transition);
  position: relative;
}

.nav-link:hover {
  color: var(--accent-orange);
  background-color: rgba(255, 102, 1, 0.1);
}

.nav-link.active {
  color: var(--accent-orange);
  background-color: rgba(255, 102, 1, 0.1);
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: var(--primary-blue);
  transition: var(--transition);
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: var(--white);
    flex-direction: column;
    padding: 2rem;
    box-shadow: var(--shadow);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
  }
  
  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .hamburger {
    display: flex;
  }
}
</style>
