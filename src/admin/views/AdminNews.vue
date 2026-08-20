<template>
  <section class="admin-page">
    <div class="page-header">
      <h1>最新消息管理</h1>
      <p>管理官網最新消息公告</p>
    </div>

    <div class="toolbar">
      <button class="btn btn-primary" @click="showAddModal = true">新增消息</button>
    </div>

    <div class="news-list">
      <div v-for="n in news" :key="n.id" class="news-card">
        <div class="news-image" :style="{ backgroundImage: `url(${n.image})` }"></div>
        <div class="news-content">
          <div class="news-meta">
            <span class="news-date">{{ n.date }}</span>
            <span :class="['status-badge', n.status]">{{ n.statusText }}</span>
          </div>
          <h3 class="news-title">{{ n.title }}</h3>
          <p class="news-desc">{{ n.desc }}</p>
        </div>
        <div class="news-actions">
          <button class="icon-btn" @click="editNews(n)" title="編輯">✎</button>
          <button class="icon-btn danger" @click="deleteNews(n.id)" title="刪除">🗑</button>
        </div>
      </div>
    </div>

    <div v-if="showAddModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <h3>{{ editingNews ? '編輯消息' : '新增消息' }}</h3>
        <form @submit.prevent="saveNews">
          <div class="form-group">
            <label>標題</label>
            <input type="text" v-model="form.title" required />
          </div>
          <div class="form-group">
            <label>日期</label>
            <input type="date" v-model="form.date" required />
          </div>
          <div class="form-group">
            <label>圖片網址</label>
            <input type="text" v-model="form.image" placeholder="/images/xxx.jpg" required />
          </div>
          <div class="form-group">
            <label>內容描述</label>
            <textarea v-model="form.desc" rows="4" required></textarea>
          </div>
          <div class="form-group">
            <label>狀態</label>
            <select v-model="form.status">
              <option value="published">發布</option>
              <option value="draft">草稿</option>
            </select>
          </div>
          <div class="modal-actions">
            <button type="button" class="btn btn-secondary" @click="closeModal">取消</button>
            <button type="submit" class="btn btn-primary">{{ editingNews ? '更新' : '發布' }}</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const news = ref([
  { id: 1, title: '新品上市：松露野菇披薩', date: '2024-01-15', image: '/images/onsale1.jpg', desc: '嚴選黑松露醬搭配多種蘑菇，奢華風味新登場，限時優惠中！', status: 'published', statusText: '發布' },
  { id: 2, title: '逢甲店開幕慶', date: '2024-01-10', image: '/images/onsale2.jpg', desc: '逢甲店盛大開幕，凡消費滿500元享8折優惠，快來嚐鮮！', status: 'published', statusText: '發布' },
  { id: 3, title: '外送免運費活動', date: '2024-01-05', image: '/images/onsale3.jpg', desc: '全台外送訂單滿300元免運費，宅在家也能享受道地義式美味。', status: 'draft', statusText: '草稿' },
])

const showAddModal = ref(false)
const editingNews = ref(null)

const form = ref({
  title: '',
  date: '',
  image: '',
  desc: '',
  status: 'published'
})

const saveNews = () => {
  if (editingNews.value) {
    Object.assign(editingNews.value, { ...form.value, statusText: form.value.status === 'published' ? '發布' : '草稿' })
  } else {
    form.value.id = Date.now()
    form.value.statusText = form.value.status === 'published' ? '發布' : '草稿'
    news.value.unshift({ ...form.value })
  }
  closeModal()
}

const closeModal = () => {
  showAddModal.value = false
  editingNews.value = null
  form.value = { title: '', date: '', image: '', desc: '', status: 'published' }
}

const editNews = (n) => {
  editingNews.value = n
  form.value = { ...n }
  showAddModal.value = true
}

const deleteNews = (id) => {
  if (confirm('確定要刪除這則消息嗎？')) {
    const idx = news.value.findIndex(n => n.id === id)
    if (idx > -1) news.value.splice(idx, 1)
  }
}
</script>

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

.toolbar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.btn-primary {
  height: 42px;
  padding: 0 20px;
  background: #35c1d0;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary:hover {
  background: #2aaeb9;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.news-card {
  display: grid;
  grid-template-columns: 200px 1fr auto;
  gap: 20px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.2s;
}

.news-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.news-image {
  background-size: cover;
  background-position: center;
  border-radius: 12px 0 0 12px;
}

.news-content {
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.news-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.news-date {
  font-size: 13px;
  color: #91a1ad;
  font-weight: 500;
}

.status-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
}

.status-badge.published {
  background: #dcfce7;
  color: #166534;
}

.status-badge.draft {
  background: #fef3c7;
  color: #92400e;
}

.news-title {
  margin: 0 0 6px;
  font-size: 17px;
  font-weight: 600;
  color: #273746;
}

.news-desc {
  margin: 0;
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
}

.news-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  border-left: 1px solid #f1f5f9;
}

.icon-btn {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #64748b;
  cursor: pointer;
  font-size: 15px;
  margin-bottom: 8px;
}

.icon-btn:hover {
  background: #f1f5f9;
}

.icon-btn.danger:hover {
  background: #fee2e2;
  color: #ef4444;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
}

.modal {
  background: white;
  border-radius: 14px;
  padding: 28px;
  width: 100%;
  max-width: 560px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}

.modal h3 {
  margin: 0 0 20px;
  font-size: 20px;
  font-weight: 700;
  color: #273746;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 13px;
  color: #374151;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #35c1d0;
  box-shadow: 0 0 0 3px rgba(53, 193, 208, 0.15);
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 8px;
}

.btn-secondary {
  height: 42px;
  padding: 0 20px;
  background: white;
  color: #475569;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #f8fafc;
}
</style>