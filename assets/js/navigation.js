// assets/js/navigation.js
// Responsável por injetar a barra de navegação, sidebar interativa, busca e controle de tema

(function () {
  const isTopicPage = window.location.pathname.includes('/topics/');
  const rootPrefix = isTopicPage ? '../' : './';
  const currentSlug = isTopicPage ? window.location.pathname.split('/').pop().replace('.html', '') : '';

  function renderNavbar() {
    const navContainer = document.getElementById('site-header');
    if (!navContainer) return;

    navContainer.className = "sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 bg-slate-900/90 border-b border-slate-800 text-slate-200";
    navContainer.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          ${isTopicPage ? `
          <button id="toggle-sidebar" class="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none" aria-label="Abrir Menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>` : ''}
          <a href="${rootPrefix}index.html" class="flex items-center space-x-2 group">
            <span class="text-2xl">🇧🇷</span>
            <div class="flex flex-col">
              <span class="font-bold text-lg text-white group-hover:text-amber-400 transition tracking-tight">História do Brasil</span>
              <span class="text-[10px] text-emerald-400 font-mono tracking-wider uppercase">Guia Completo e Roadmap</span>
            </div>
          </a>
        </div>

        <div class="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="${rootPrefix}index.html" class="text-slate-300 hover:text-white transition flex items-center space-x-1.5 ${!isTopicPage && !window.location.pathname.includes('references') ? 'text-amber-400 font-semibold' : ''}">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
            <span>Roadmap</span>
          </a>
          <a href="${rootPrefix}references.html" class="text-slate-300 hover:text-white transition flex items-center space-x-1.5 ${window.location.pathname.includes('references') ? 'text-amber-400 font-semibold' : ''}">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            <span>Referências</span>
          </a>
          <button id="quick-search-btn" class="flex items-center space-x-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-400 hover:text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 text-xs transition">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span>Buscar tópicos...</span>
            <kbd class="px-1.5 py-0.5 text-[10px] bg-slate-900 border border-slate-700 rounded text-slate-400">Ctrl+K</kbd>
          </button>
        </div>

        <div class="flex items-center space-x-3">
          <a href="https://github.com/thiagodsantos/learning-brazil" target="_blank" rel="noopener noreferrer" class="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition" title="Repositório GitHub">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
        </div>
      </div>
    `;
  }

  function renderSidebar() {
    const sidebarContainer = document.getElementById('sidebar-container');
    if (!sidebarContainer || typeof TOPICS_DATA === 'undefined') return;

    const currentIndex = TOPICS_DATA.findIndex(t => t.slug === currentSlug);

    sidebarContainer.innerHTML = `
      <div id="sidebar-backdrop" class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden hidden transition-opacity"></div>
      <aside id="sidebar-nav" class="fixed top-16 bottom-0 left-0 z-40 w-72 bg-slate-900 border-r border-slate-800 flex flex-col transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out">
        <div class="p-4 border-b border-slate-800">
          <div class="relative">
            <input type="text" id="sidebar-search-input" placeholder="Filtrar tópicos..." class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400">
            <svg class="w-4 h-4 absolute right-2.5 top-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
        </div>

        <div class="flex-1 overflow-y-auto py-3 px-3 space-y-1" id="sidebar-list">
          ${TOPICS_DATA.map((t, idx) => {
            const isActive = t.slug === currentSlug;
            return `
              <a href="${rootPrefix}topics/${t.slug}.html" class="sidebar-topic-item flex items-center px-3 py-2 text-xs font-medium rounded-lg transition group ${isActive ? 'bg-amber-400/10 text-amber-400 border border-amber-400/30' : 'text-slate-300 hover:text-white hover:bg-slate-800'}" data-title="${t.title.toLowerCase()}" data-slug="${t.slug}">
                <span class="w-5 h-5 flex items-center justify-center text-xs mr-2 shrink-0 ${isActive ? 'text-amber-400' : 'text-slate-500 group-hover:text-slate-300'}">${idx + 1}.</span>
                <span class="mr-2 text-sm shrink-0">${t.icon}</span>
                <span class="truncate flex-1">${t.shortTitle}</span>
                ${isActive ? '<span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>' : ''}
              </a>
            `;
          }).join('')}
        </div>

        <div class="p-3 border-t border-slate-800 bg-slate-900/50 flex flex-col space-y-2">
          <a href="${rootPrefix}index.html" class="flex items-center space-x-2 text-xs text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition">
            <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            <span>Voltar ao Roadmap</span>
          </a>
          <a href="${rootPrefix}references.html" class="flex items-center space-x-2 text-xs text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition">
            <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            <span>Bibliografia & Fontes</span>
          </a>
        </div>
      </aside>
    `;

    // Event listener para abrir/fechar sidebar em mobile
    const toggleBtn = document.getElementById('toggle-sidebar');
    const sidebar = document.getElementById('sidebar-nav');
    const backdrop = document.getElementById('sidebar-backdrop');

    if (toggleBtn && sidebar && backdrop) {
      const toggle = () => {
        const isOpen = !sidebar.classList.contains('-translate-x-full');
        if (isOpen) {
          sidebar.classList.add('-translate-x-full');
          backdrop.classList.add('hidden');
        } else {
          sidebar.classList.remove('-translate-x-full');
          backdrop.classList.remove('hidden');
        }
      };
      toggleBtn.addEventListener('click', toggle);
      backdrop.addEventListener('click', toggle);
    }

    // Filtro da sidebar
    const filterInput = document.getElementById('sidebar-search-input');
    if (filterInput) {
      filterInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const items = document.querySelectorAll('.sidebar-topic-item');
        items.forEach(item => {
          const title = item.getAttribute('data-title');
          if (title.includes(query)) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    }
  }

  function renderTopicPagination() {
    const paginationContainer = document.getElementById('topic-pagination');
    if (!paginationContainer || typeof TOPICS_DATA === 'undefined' || !isTopicPage) return;

    const currentIndex = TOPICS_DATA.findIndex(t => t.slug === currentSlug);
    if (currentIndex === -1) return;

    const prevTopic = currentIndex > 0 ? TOPICS_DATA[currentIndex - 1] : null;
    const nextTopic = currentIndex < TOPICS_DATA.length - 1 ? TOPICS_DATA[currentIndex + 1] : null;

    paginationContainer.innerHTML = `
      <div class="mt-12 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${prevTopic ? `
          <a href="${rootPrefix}topics/${prevTopic.slug}.html" class="flex flex-col p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:border-slate-700 transition group text-left">
            <span class="text-xs text-slate-400 flex items-center space-x-1 group-hover:text-amber-400 mb-1">
              <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              Tópico Anterior
            </span>
            <span class="text-sm font-semibold text-slate-200 group-hover:text-white truncate">${prevTopic.title}</span>
          </a>
        ` : `<div></div>`}

        ${nextTopic ? `
          <a href="${rootPrefix}topics/${nextTopic.slug}.html" class="flex flex-col items-end p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:border-slate-700 transition group text-right">
            <span class="text-xs text-slate-400 flex items-center space-x-1 group-hover:text-amber-400 mb-1">
              Próximo Tópico
              <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </span>
            <span class="text-sm font-semibold text-slate-200 group-hover:text-white truncate">${nextTopic.title}</span>
          </a>
        ` : `<div></div>`}
      </div>
    `;
  }

  function renderFooter() {
    const footerContainer = document.getElementById('site-footer');
    if (!footerContainer) return;

    footerContainer.className = "mt-20 border-t border-slate-800 bg-slate-950/60 py-12 text-slate-400 text-xs";
    footerContainer.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center space-x-3">
          <span class="text-2xl">🇧🇷</span>
          <div>
            <p class="text-slate-200 font-semibold text-sm">História do Brasil — Guia de Aprendizado</p>
            <p class="text-slate-500 text-xs">Conteúdo educativo e aberto estruturado para compreensão histórica e cívica.</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-6 text-slate-400">
          <a href="${rootPrefix}index.html" class="hover:text-amber-400 transition">Roadmap</a>
          <a href="${rootPrefix}references.html" class="hover:text-amber-400 transition">Referências</a>
          <a href="https://github.com/thiagodsantos/learning-brazil" target="_blank" rel="noopener noreferrer" class="hover:text-amber-400 transition">GitHub</a>
        </div>
      </div>
    `;
  }

  function setupSearchModal() {
    const modalHTML = `
      <div id="search-modal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm hidden items-start justify-center pt-20 px-4">
        <div class="bg-slate-900 border border-slate-700 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[75vh]">
          <div class="p-4 border-b border-slate-800 flex items-center space-x-3">
            <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input type="text" id="modal-search-input" placeholder="Buscar por tema, período, evento ou figura histórica..." class="w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-sm">
            <kbd id="close-search-modal" class="cursor-pointer text-[10px] bg-slate-800 text-slate-400 border border-slate-700 px-2 py-1 rounded">ESC</kbd>
          </div>
          <div id="modal-search-results" class="flex-1 overflow-y-auto p-3 space-y-1 divide-y divide-slate-800/50">
            <!-- Resultados -->
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('search-modal');
    const input = document.getElementById('modal-search-input');
    const resultsContainer = document.getElementById('modal-search-results');
    const closeBtn = document.getElementById('close-search-modal');
    const openBtn = document.getElementById('quick-search-btn');

    function openModal() {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      input.value = '';
      renderModalResults('');
      setTimeout(() => input.focus(), 50);
    }

    function closeModal() {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function renderModalResults(q) {
      if (typeof TOPICS_DATA === 'undefined') return;
      const query = q.toLowerCase().trim();
      const filtered = query === '' 
        ? TOPICS_DATA 
        : TOPICS_DATA.filter(t => t.title.toLowerCase().includes(query) || t.description.toLowerCase().includes(query) || t.category.toLowerCase().includes(query));

      if (filtered.length === 0) {
        resultsContainer.innerHTML = `<div class="p-6 text-center text-slate-500 text-sm">Nenhum tópico encontrado para "${q}".</div>`;
        return;
      }

      resultsContainer.innerHTML = filtered.map(t => `
        <a href="${rootPrefix}topics/${t.slug}.html" class="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800 transition group">
          <div class="flex items-center space-x-3">
            <span class="text-xl">${t.icon}</span>
            <div>
              <p class="text-sm font-semibold text-slate-200 group-hover:text-amber-400 transition">${t.title}</p>
              <p class="text-xs text-slate-400 truncate max-w-sm sm:max-w-md">${t.description}</p>
            </div>
          </div>
          <span class="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 ml-2 shrink-0">${t.period}</span>
        </a>
      `).join('');
    }

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    input.addEventListener('input', (e) => {
      renderModalResults(e.target.value);
    });

    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openModal();
      }
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderSidebar();
    renderTopicPagination();
    renderFooter();
    setupSearchModal();
  });
})();
