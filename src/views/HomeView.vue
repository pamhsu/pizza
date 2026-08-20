<script>
export default {
  data() {
    return {
      current: 0,
      slides: [
        { src: '/images/home1.png', alt: '披薩圖片 1' },
        { src: '/images/home2.png', alt: '披薩圖片 2' },
        { src: '/images/home3.png', alt: '披薩圖片 3' }
      ],
      timer: null,
      newsList: [
        {
          id: 1,
          image: '/images/onsale1.jpg',
          year: '2026',
          date: '08/10',
          title: '新品上市：雙心XO海鮮披薩'
        },
        {
          id: 2,
          image: '/images/onsale2.jpg',
          year: '2026',
          date: '08/05',
          title: '逢甲店開幕慶'
        },
        {
          id: 3,
          image: '/images/onsale3.jpg',
          year: '2026',
          date: '07/28',
          title: '超值199元活動'
        }
      ]
    }
  },
  methods: {
    next() {
      this.current = (this.current + 1) % this.slides.length
    },
    prev() {
      this.current = (this.current - 1 + this.slides.length) % this.slides.length
    },
    goTo(index) {
      this.current = index
      this.resetTimer()
    },
    resetTimer() {
      clearInterval(this.timer)
      this.timer = setInterval(this.next, 3000)
    }
  },
  mounted() {
    this.timer = setInterval(this.next, 3000)
  },
  beforeUnmount() {
    clearInterval(this.timer)
  }
}
</script>

<template>
  <main class="page">
    <section class="hero">
      <h1 class="brand-title">FATTA A MANO</h1>
      <p>歡迎來到 FATTA A MANO！我們堅持使用新鮮食材，手工揉製餅皮，為您呈現最道地的義式美味。</p>
      <div class="home-actions">
        <RouterLink to="/products" class="btn">立即點餐</RouterLink>
        <RouterLink to="/about" class="btn btn-outline">關於我們</RouterLink>
      </div>
    </section>

    <div class="carousel">
      <div class="carousel-track">
        <img
          v-for="(slide, index) in slides"
          :key="index"
          :src="slide.src"
          :alt="slide.alt"
          class="carousel-slide"
          :class="{ active: index === current }"
        />
      </div>

      <button class="carousel-btn prev" @click="prev">❮</button>
      <button class="carousel-btn next" @click="next">❯</button>

      <div class="carousel-dots">
        <span
          v-for="(slide, index) in slides"
          :key="index"
          class="dot"
          :class="{ active: index === current }"
          @click="goTo(index)"
        ></span>
      </div>
    </div>

    <section class="hero">
      <h2>為何選擇我們？</h2>
      <p>新鮮食材 - 每日嚴選優質原料</p>
      <p>手工製程 - 傳統義式工法，口感紮實</p>
      <p>快速外送 - 下單後 30 分鐘內送達</p>
    </section>

    <section class="news-section">
      <!-- <div class="news-header">
        <h2 class="news-title">最新消息</h2>
      </div> -->
      <div class="news-grid">
        <div class="news-card" v-for="news in newsList" :key="news.id">
          <div class="news-img-wrap">
            <img :src="news.image" :alt="news.title" class="news-img" />
            <div class="news-badge">
              <span class="badge-year">{{ news.year }}</span>
              <span class="badge-date">{{ news.date }}</span>
            </div>
          </div>
          <h3 class="news-card-title">{{ news.title }}</h3>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 32px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.carousel-track {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 7;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  font-size: 24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.carousel-btn:hover {
  background: rgba(0, 0, 0, 0.7);
  transform: translateY(-50%) scale(1.1);
  box-shadow: none;
}

.carousel-btn.prev {
  left: 16px;
}

.carousel-btn.next {
  right: 16px;
}

.carousel-dots {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

.dot.active {
  background: #73612C;
  transform: scale(1.2);
}

.dot:hover {
  background: rgba(255, 255, 255, 0.8);
}

.brand-title {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 2px;
}

.home-actions {
  display: flex;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: wrap;
}

.home-actions .btn {
  min-width: 160px;
  text-align: center;
  text-decoration: none;
}

.btn-outline {
  background: transparent;
  color: #73612C;
  border: 2px solid #73612C;
  box-shadow: none;
}

.btn-outline:hover {
  background: #73612C;
  color: white;
  box-shadow: 0 4px 10px rgba(115, 97, 44, 0.25);
}

.news-section {
  display: block;
  width: 100%;
  margin-top: 16px;
  clear: both;
}

.news-header {
  text-align: center;
  margin-bottom: 28px;
  width: 100%;
}

.news-title {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 36px;
  font-weight: 700;
  color: #4A4435;
  margin: 0;
  letter-spacing: 2px;
}

.news-subtitle {
  display: block;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 16px;
  color: #836539;
  letter-spacing: 3px;
  margin-top: 4px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  width: 100%;
}

.news-card {
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.10);
}

.news-img-wrap {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.news-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-badge {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #c0392b;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
}

.badge-year {
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 1px;
}

.badge-date {
  font-size: 16px;
  font-weight: 800;
  line-height: 1.2;
}

.news-card-title {
  padding: 16px 18px 20px;
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: #4A4435;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .news-grid {
    grid-template-columns: 1fr;
  }

  .news-title {
    font-size: 28px;
  }
}
</style>
