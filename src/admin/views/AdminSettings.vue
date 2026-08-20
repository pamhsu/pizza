<template>
  <section class="admin-page">
    <div class="page-header">
      <h1>系統設定</h1>
      <p>管理網站基本設定與管理員帳號</p>
    </div>

    <div class="settings-grid">
      <div class="settings-card">
        <h2>網站基本資料</h2>
        <div class="form-group">
          <label>網站名稱</label>
          <input type="text" v-model="site.name" />
        </div>
        <div class="form-group">
          <label>網站副標題</label>
          <input type="text" v-model="site.tagline" />
        </div>
        <div class="form-group">
          <label>聯絡電話</label>
          <input type="text" v-model="site.phone" />
        </div>
        <div class="form-group">
          <label>聯絡 Email</label>
          <input type="email" v-model="site.email" />
        </div>
        <div class="form-group">
          <label>地址</label>
          <textarea v-model="site.address" rows="3"></textarea>
        </div>
        <div class="form-group">
          <label>營業時間</label>
          <textarea v-model="site.hours" rows="3"></textarea>
        </div>
        <button class="btn btn-primary" @click="saveSite">儲存設定</button>
      </div>

      <div class="settings-card">
        <h2>外觀設定</h2>
        <div class="form-group">
          <label>主色調</label>
          <div class="color-picker-row">
            <input type="color" v-model="theme.primary" />
            <span>{{ theme.primary }}</span>
          </div>
        </div>
        <div class="form-group">
          <label>次要色調</label>
          <div class="color-picker-row">
            <input type="color" v-model="theme.secondary" />
            <span>{{ theme.secondary }}</span>
          </div>
        </div>
        <div class="form-group">
          <label>強調色</label>
          <div class="color-picker-row">
            <input type="color" v-model="theme.accent" />
            <span>{{ theme.accent }}</span>
          </div>
        </div>
        <button class="btn btn-primary" @click="saveTheme">儲存主題</button>
      </div>

      <div class="settings-card full-width">
        <h2>管理員帳號管理</h2>
        <div class="toolbar">
          <button class="btn btn-primary" @click="showAddAdmin = true">新增管理員</button>
        </div>
        <div class="table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>帳號</th>
                <th>姓名</th>
                <th>角色</th>
                <th>最後登入</th>
                <th>狀態</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="a in admins" :key="a.username">
                <td>{{ a.username }}</td>
                <td>{{ a.name }}</td>
                <td><span class="role-badge">{{ a.role }}</span></td>
                <td>{{ a.lastLogin }}</td>
                <td><span :class="['status-badge', a.status]">{{ a.statusText }}</span></td>
                <td>
                  <button class="icon-btn" title="編輯">✎</button>
                  <button class="icon-btn danger" title="刪除">🗑</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="showAddAdmin" class="modal-overlay" @click.self="closeAdminModal">
          <div class="modal">
            <h3>新增管理員</h3>
            <form @submit.prevent="saveAdmin">
              <div class="form-row">
                <div class="form-group">
                  <label>帳號</label>
                  <input type="text" v-model="adminForm.username" required />
                </div>
                <div class="form-group">
                  <label>姓名</label>
                  <input type="text" v-model="adminForm.name" required />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>Email</label>
                  <input type="email" v-model="adminForm.email" required />
                </div>
                <div class="form-group">
                  <label>角色</label>
                  <select v-model="adminForm.role" required>
                    <option value="superadmin">超級管理員</option>
                    <option value="admin">管理員</option>
                    <option value="editor">編輯</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>密碼</label>
                  <input type="password" v-model="adminForm.password" required minlength="8" />
                </div>
                <div class="form-group">
                  <label>確認密碼</label>
                  <input type="password" v-model="adminForm.confirmPassword" required />
                </div>
              </div>
              <div class="modal-actions">
                <button type="button" class="btn btn-secondary" @click="closeAdminModal">取消</button>
                <button type="submit" class="btn btn-primary">新增</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const site = ref({
  name: 'FATTA A MANO',
  tagline: '手工披薩專家',
  phone: '04-2222299',
  email: 'contact@fattaamano.com',
  address: '台中市東區復興路遠雄百貨商場號F1',
  hours: '週一至週日 11:00 - 21:00'
})

const theme = ref({
  primary: '#4A4435',
  secondary: '#73612C',
  accent: '#693335'
})

const admins = ref([
  { username: 'admin', name: '最高管理員', role: 'superadmin', lastLogin: '2024-01-20 14:30', status: 'active', statusText: '啟用' },
  { username: 'manager', name: '店務主管', role: 'admin', lastLogin: '2024-01-19 09:15', status: 'active', statusText: '啟用' },
  { username: 'editor', name: '內容編輯', role: 'editor', lastLogin: '2024-01-18 16:45', status: 'inactive', statusText: '停用' },
])

const showAddAdmin = ref(false)

const adminForm = ref({
  username: '',
  name: '',
  email: '',
  role: 'admin',
  password: '',
  confirmPassword: ''
})

const saveSite = () => {
  alert('網站基本資料已儲存（需串接 API）')
}

const saveTheme = () => {
  alert('主題色彩已儲存（需重新載入套用）')
}

const saveAdmin = () => {
  if (adminForm.value.password !== adminForm.value.confirmPassword) {
    alert('兩次密碼不一致')
    return
  }
  admins.value.push({
    username: adminForm.value.username,
    name: adminForm.value.name,
    role: adminForm.value.role,
    lastLogin: '從未登入',
    status: 'active',
    statusText: '啟用'
  })
  closeAdminModal()
  alert('管理員已新增')
}

const closeAdminModal = () => {
  showAddAdmin.value = false
  adminForm.value = { username: '', name: '', email: '', role: 'admin', password: '', confirmPassword: '' }
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

.settings-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.settings-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
}

.settings-card.full-width {
  grid-column: 1 / -1;
}

.settings-card h2 {
  margin: 0 0 20px;
  font-size: 18px;
  font-weight: 700;
  color: #273746;
  padding-bottom: 12px;
  border-bottom: 1px solid #f1f5f9;
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

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.color-picker-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.color-picker-row input[type="color"] {
  width: 48px;
  height: 36px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-primary {
  height: 42px;
  padding: 0 24px;
  background: #35c1d0;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
}

.btn-primary:hover {
  background: #2aaeb9;
}

.toolbar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.table-wrapper {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 14px 18px;
  text-align: left;
  border-bottom: 1px solid #f1f5f9;
}

.data-table th {
  background: #f8fafc;
  font-weight: 600;
  color: #475569;
  font-size: 13px;
  white-space: nowrap;
}

.data-table td {
  font-size: 14px;
  color: #334155;
}

.data-table tbody tr:hover {
  background: #f8fafc;
}

.data-table tbody tr:last-child td {
  border-bottom: none;
}

.role-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  background: #e8f5fa;
  color: #0e7a8a;
}

.status-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.status-badge.active {
  background: #dcfce7;
  color: #166534;
}

.status-badge.inactive {
  background: #fee2e2;
  color: #991b1b;
}

.icon-btn {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: #64748b;
  cursor: pointer;
  font-size: 14px;
  margin-right: 6px;
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

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
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

@media (max-width: 992px) {
  .settings-grid {
    grid-template-columns: 1fr.
  }

  .form-row {
    grid-template-columns: 1fr.
  }
}
</style>