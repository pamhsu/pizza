
<template>
  <div class="admin-layout">
    <!-- ==================== Sidebar ==================== -->
    <aside
      class="sidebar"
      :class="{ 'sidebar-collapsed': sidebarCollapsed }"
    >
      <!-- Logo -->
      <div class="sidebar-logo">
        <div class="logo-icon">F</div>

        <div v-if="!sidebarCollapsed" class="logo-text">
          <strong>FATTA A MANO</strong>
          <span>ADMIN SYSTEM</span>
        </div>
      </div>

      <!-- Menu -->
      <nav class="sidebar-menu">
        <div v-if="!sidebarCollapsed" class="menu-title">
          功能列表
        </div>

        <RouterLink
          to="/admin/dashboard"
          class="menu-item"
          :class="{ active: isActive('/admin/dashboard') }"
        >
          <span class="menu-icon">▦</span>
          <span v-if="!sidebarCollapsed">儀表板</span>
        </RouterLink>

        <RouterLink
          to="/admin/members"
          class="menu-item"
          :class="{ active: isActive('/admin/members') }"
        >
          <span class="menu-icon">♙</span>
          <span v-if="!sidebarCollapsed">會員管理</span>
        </RouterLink>

        <RouterLink
          to="/admin/products"
          class="menu-item"
          :class="{ active: isActive('/admin/products') }"
        >
          <span class="menu-icon">▤</span>
          <span v-if="!sidebarCollapsed">商品管理</span>
        </RouterLink>

        <RouterLink
          to="/admin/news"
          class="menu-item"
          :class="{ active: isActive('/admin/news') }"
        >
          <span class="menu-icon">▧</span>
          <span v-if="!sidebarCollapsed">最新消息</span>
        </RouterLink>

        <div
          v-if="!sidebarCollapsed"
          class="menu-section"
        >
          系統管理
        </div>

        <RouterLink
          to="/admin/settings"
          class="menu-item"
          :class="{ active: isActive('/admin/settings') }"
        >
          <span class="menu-icon">⚙</span>
          <span v-if="!sidebarCollapsed">系統設定</span>
        </RouterLink>
      </nav>
      <!-- 登出 -->
      <button class="logout-btn" @click="logout">
        登出
      </button>


      <!-- Sidebar Footer -->
      <div v-if="!sidebarCollapsed" class="sidebar-footer">
        <div>FATTA A MANO</div>
        <small>Admin v1.0</small>
      </div>
    </aside>

    <!-- ==================== Main ==================== -->
    <div
      class="main-wrapper"
      :class="{ 'main-expanded': sidebarCollapsed }"
    >
      <!-- Header -->
      <header class="admin-header">
        <div class="header-left">
          <button
            class="toggle-button"
            type="button"
            @click="toggleSidebar"
          >
            ☰
          </button>

          <div class="header-title">
            後台管理系統
          </div>
        </div>

        <div class="header-right">
          <!-- Notification -->
          <button
            class="notification-button"
            type="button"
            title="通知"
          >
            ♢
            <span class="notification-dot"></span>
          </button>

          <!-- User -->
          <div class="user-menu">
            <div class="avatar">
              管
            </div>

            <div class="user-info">
              <strong>最高管理員</strong>
              <span>Administrator</span>
            </div>

            <span class="user-arrow">⌄</span>
          </div>
        </div>
      </header>

      <!-- Content -->
      <main class="admin-content">
        <!-- Breadcrumb -->
        <div class="breadcrumb">
          <RouterLink to="/admin/dashboard">
            Home
          </RouterLink>

          <span>•</span>

          <span>{{ pageTitle }}</span>
        </div>

        <!-- Page Content -->
        <section class="page-content">
          <RouterView />
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const sidebarCollapsed = ref(false)

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value
}

const isActive = (path) => {
  return route.path === path || route.path.startsWith(`${path}/`)
}

const pageTitle = computed(() => {
  const titles = {
    '/admin/dashboard': '儀表板',
    '/admin/members': '會員管理',
    '/admin/products': '商品管理',
    '/admin/news': '最新消息',
    '/admin/settings': '系統設定'
  }

  return titles[route.path] || '後台管理'
})

// 登出
const logout = () => {
  // 清除登入狀態
  localStorage.removeItem("adminToken")
  
  // 回到後台登入頁
  router.push("/admin/login")
}
</script>

<style scoped>
/* =========================
   Global Layout
========================= */

.admin-layout {
  min-height: 100vh;
  background: #f5f7f9;
  color: #374151;
  font-family:
    "Noto Sans TC",
    "Microsoft JhengHei",
    Arial,
    sans-serif;
}

/* =========================
   Sidebar
========================= */

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  width: 240px;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background: #273746;
  color: #dbe4ea;

  transition: width 0.25s ease;
}

.sidebar-collapsed {
  width: 72px;
}

/* Logo */

.sidebar-logo {
  height: 68px;

  display: flex;
  align-items: center;

  padding: 0 18px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.logo-icon {
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 8px;

  background: #35c1d0;
  color: white;

  font-size: 20px;
  font-weight: 700;
}

.logo-text {
  margin-left: 12px;

  display: flex;
  flex-direction: column;
}

.logo-text strong {
  color: white;
  font-size: 14px;
  letter-spacing: 0.5px;
}

.logo-text span {
  margin-top: 3px;

  color: #91a1ad;

  font-size: 10px;
  letter-spacing: 1.5px;
}

/* Menu */

.sidebar-menu {
  flex: 1;

  padding: 20px 10px;
}

.menu-title,
.menu-section {
  padding: 0 14px;
  margin-bottom: 10px;

  color: #7f919e;

  font-size: 12px;
}

.menu-section {
  margin-top: 24px;
}

.menu-item {
  position: relative;

  height: 46px;

  display: flex;
  align-items: center;

  margin-bottom: 5px;
  padding: 0 14px;

  color: #cbd5dc;

  border-radius: 6px;

  text-decoration: none;

  font-size: 14px;

  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.menu-item:hover {
  background: rgba(255, 255, 255, 0.07);
  color: white;
}

.menu-item.active {
  background: #35c1d0;
  color: white;
}

.menu-icon {
  width: 25px;

  margin-right: 10px;

  font-size: 18px;

  text-align: center;
}

.sidebar-collapsed .menu-item {
  justify-content: center;
  padding: 0;
}

.sidebar-collapsed .menu-icon {
  margin-right: 0;
}

/*logout*/
.logout-btn {
  width: 100%;
  padding: 11px 16px;

  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;

  background: transparent;
  color: #e8dfd3;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;

  cursor: pointer;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease,
    transform 0.2s ease;
}

.logout-btn:hover {
  background: #a66a45;
  border-color: #a66a45;
  color: #fffaf4;

  transform: translateY(-1px);
}

.logout-btn:active {
  transform: translateY(0);
}

/* Footer */

.sidebar-footer {
  padding: 18px;

  border-top: 1px solid rgba(255, 255, 255, 0.08);

  color: #81929d;

  font-size: 11px;
}

.sidebar-footer small {
  display: block;
  margin-top: 4px;
  color: #60717d;
}

/* =========================
   Main
========================= */

.main-wrapper {
  min-height: 100vh;

  margin-left: 240px;

  transition: margin-left 0.25s ease;
}

.main-expanded {
  margin-left: 72px;
}

/* =========================
   Header
========================= */

.admin-header {
  position: sticky;
  top: 0;
  z-index: 900;

  height: 68px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 26px;

  background: white;

  border-bottom: 1px solid #e5e7eb;
}

.header-left,
.header-right {
  display: flex;
  align-items: center;
}

.toggle-button {
  width: 38px;
  height: 38px;

  margin-right: 14px;

  border: 0;
  border-radius: 6px;

  background: transparent;

  color: #64748b;

  font-size: 20px;

  cursor: pointer;
}

.toggle-button:hover {
  background: #f1f5f9;
}

.header-title {
  font-size: 16px;
  font-weight: 600;
  color: #334155;
}

/* Notification */

.notification-button {
  position: relative;

  width: 38px;
  height: 38px;

  margin-right: 18px;

  border: 0;
  background: transparent;

  color: #64748b;

  font-size: 22px;

  cursor: pointer;
}

.notification-dot {
  position: absolute;
  top: 8px;
  right: 7px;

  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #ef4444;
}

/* User */

.user-menu {
  display: flex;
  align-items: center;

  cursor: pointer;
}

.avatar {
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 10px;

  border-radius: 50%;

  background: #e2e8f0;

  color: #334155;

  font-size: 14px;
  font-weight: 600;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-info strong {
  font-size: 13px;
  color: #334155;
}

.user-info span {
  margin-top: 2px;

  color: #94a3b8;

  font-size: 10px;
}

.user-arrow {
  margin-left: 10px;
  color: #64748b;
}

/* =========================
   Content
========================= */

.admin-content {
  padding: 0 26px 40px;
}

.breadcrumb {
  height: 52px;

  display: flex;
  align-items: center;

  gap: 10px;

  color: #94a3b8;

  font-size: 13px;
}

.breadcrumb a {
  color: #64748b;
  text-decoration: none;
}

.breadcrumb a:hover {
  color: #35c1d0;
}

.page-content {
  min-height: calc(100vh - 120px);
}

/* =========================
   Responsive
========================= */

@media (max-width: 768px) {
  .sidebar {
    width: 240px;

    transform: translateX(-100%);

    transition:
      transform 0.25s ease,
      width 0.25s ease;
  }

  .sidebar:not(.sidebar-collapsed) {
    transform: translateX(0);
  }

  .sidebar-collapsed {
    width: 240px;
  }

  .main-wrapper,
  .main-expanded {
    margin-left: 0;
  }

  .admin-header {
    padding: 0 16px;
  }

  .header-title {
    display: none;
  }

  .user-info,
  .user-arrow {
    display: none;
  }

  .admin-content {
    padding: 0 16px 30px;
  }
}

</style>
