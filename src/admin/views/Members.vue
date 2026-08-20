<template>
  <section class="admin-page">
    <div class="page-header">
      <h1>會員管理</h1>
      <p>管理系統會員帳號</p>
    </div>

    <div class="toolbar">
      <input type="text" placeholder="搜尋會員..." class="search-input" />
      <button class="btn btn-primary">新增會員</button>
    </div>

    <div class="table-wrapper">
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>Email</th>
            <th>電話</th>
            <th>註冊時間</th>
            <th>狀態</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="m in members" :key="m.id">
            <td>{{ m.id }}</td>
            <td>{{ m.name }}</td>
            <td>{{ m.email }}</td>
            <td>{{ m.phone }}</td>
            <td>{{ m.createdAt }}</td>
            <td><span :class="['status-badge', m.status]">{{ m.statusText }}</span></td>
            <td>
              <button class="icon-btn" title="編輯">✎</button>
              <button class="icon-btn danger" title="刪除">🗑</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const members = ref([
  { id: 1, name: '王小明', email: 'wang@example.com', phone: '0912-345-678', createdAt: '2024-01-15', status: 'active', statusText: '啟用' },
  { id: 2, name: '李美華', email: 'li@example.com', phone: '0923-456-789', createdAt: '2024-02-20', status: 'active', statusText: '啟用' },
  { id: 3, name: '陳大同', email: 'chen@example.com', phone: '0934-567-890', createdAt: '2024-03-10', status: 'inactive', statusText: '停用' },
  { id: 4, name: '林雅婷', email: 'lin@example.com', phone: '0945-678-901', createdAt: '2024-03-25', status: 'active', statusText: '啟用' },
  { id: 5, name: '張志明', email: 'chang@example.com', phone: '0956-789-012', createdAt: '2024-04-05', status: 'active', statusText: '啟用' },
])
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
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.search-input {
  flex: 1;
  max-width: 320px;
  height: 42px;
  padding: 0 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
}

.search-input:focus {
  outline: none;
  border-color: #35c1d0;
  box-shadow: 0 0 0 3px rgba(53, 193, 208, 0.15);
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

.btn-primary {
  height: 42px;
  padding: 0 20px;
  background: #35c1d0;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #2aaeb9;
}
</style>