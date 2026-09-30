/**
 * PORTAL DO INVOCADOR — CATÁLOGO DINÂMICO DE CAMPEÕES
 * Carrega dados via JSON, gerencia filtros por classe e busca em tempo real
 */
document.addEventListener('DOMContentLoaded', () => {
  const championsContainer = document.getElementById('champions-grid');
  const searchInput = document.getElementById('champion-search');
  const filterPills = document.querySelectorAll('.filter-pill');
  const emptyState = document.getElementById('empty-state');
  const countBadge = document.getElementById('champions-count');

  if (!championsContainer) return;

  let allChampions = [];
  let currentRole = 'all';
  let searchTerm = '';

  // Carregar dados locais do JSON
  fetch('data/champions.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao carregar banco de dados de campeões');
      }
      return response.json();
    })
    .then(data => {
      allChampions = data;
      renderChampions();
    })
    .catch(error => {
      console.error(error);
      championsContainer.innerHTML = `
        <div class="empty-state">
          <h3>Erro ao carregar campeões</h3>
          <p>Não foi possível carregar a lista de campeões no momento.</p>
        </div>
      `;
    });

  function renderChampions() {
    const filtered = allChampions.filter(champ => {
      const matchesRole = currentRole === 'all' || champ.role.toLowerCase() === currentRole.toLowerCase();
      const matchesSearch = champ.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            champ.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            champ.region.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesRole && matchesSearch;
    });

    if (countBadge) {
      countBadge.textContent = `${filtered.length} Campeões encontrados`;
    }

    if (filtered.length === 0) {
      championsContainer.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    championsContainer.innerHTML = filtered.map(champ => `
      <article class="hextech-card card--champion" data-role="${champ.role}" data-region="${champ.region}">
        <div class="champion-media">
          <img src="${champ.image}" alt="${champ.name}" class="champion-img" loading="lazy" />
          <div class="champion-overlay">
            <div class="champion-badges">
              <span class="badge badge-role">${champ.role}</span>
              <span class="badge badge-region">${champ.region}</span>
            </div>
            <h3 class="champion-name">${champ.name}</h3>
            <p class="champion-title">${champ.title}</p>
            <span class="champion-meta">Lançado em ${champ.releaseYear} • Dificuldade: ${champ.difficulty}</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Evento de Busca por Nome / Região
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim();
      renderChampions();
    });
  }

  // Evento de Filtro por Classe (Pills)
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentRole = pill.dataset.role || 'all';
      renderChampions();
    });
  });
});
