<template>
  <section class="admin-page">
    <div class="page-header">
      <h1>儀表板</h1>
      <p>歡迎回來，管理員</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-icon">👥</span>
        <div class="stat-info">
          <p class="stat-value">1,234</p>
          <p class="stat-label">總會員數</p>
        </div>
      </div>

      <div class="stat-card">
        <span class="stat-icon">🍕</span>
        <div class="stat-info">
          <p class="stat-value">56</p>
          <p class="stat-label">商品總數</p>
        </div>
      </div>

      <div class="stat-card">
        <span class="stat-icon">📦</span>
        <div class="stat-info">
          <p class="stat-value">89</p>
          <p class="stat-label">待處理訂單</p>
        </div>
      </div>

      <div class="stat-card">
        <span class="stat-icon">💰</span>
        <div class="stat-info">
          <p class="stat-value">NT$ 245,680</p>
          <p class="stat-label">本月營收</p>
        </div>
      </div>
    </div>

    <div class="charts-row">
      <div class="chart-card">
        <h3>近 7 天訂單趨勢</h3>
        <div class="chart-placeholder">圖表區域</div>
      </div>

      <div class="chart-card">
        <h3>熱門商品 Top 5</h3>
        <div class="chart-placeholder">圖表區域</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.admin-page {
  padding: 24px;
}

.page-header {
  margin-bottom: 28px;
}

.page-header h1 {
  margin: 0 0 6px;
  font-size: 28px;
  font-weight: 700;
  color: #273746;
}

.page-header p {
  margin: 0;
  color: #91a1ad;
  font-size: 15px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 28px;
}

.stat-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.stat-icon {
  font-size: 28px;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f9fa;
  border-radius: 10px;
}

.stat-value {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: #273746;
}

.stat-label {
  margin: 4px 0 0;
  font-size: 13px;
  color: #91a1ad;
}

.charts-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.chart-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
}

.chart-card h3 {
  margin: 0 0 16px;
  font-size: 16px;
  font-weight: 600;
  color: #273746;
}

.chart-placeholder {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7f9;
  border-radius: 8px;
  color: #94a3b8;
  font-size: 14px;
}

@media (max-width: 992px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .charts-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>