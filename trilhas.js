const grid = document.getElementById('trilhasGrid');

if (grid) {
  const cards = Array.from(grid.querySelectorAll('.trilha-card-full'));
  const techButtons = document.querySelectorAll('#filtroTech .filtro-chip');
  const nivelButtons = document.querySelectorAll('#filtroNivel .filtro-chip');
  const countEl = document.getElementById('resultadoCount');
  const emptyState = document.getElementById('emptyState');

  let activeTech = 'todas';
  let activeNivel = 'todos';

  function applyFilters(){
    let visibleCount = 0;

    cards.forEach(card => {
      const matchesTech = activeTech === 'todas' || card.dataset.tech === activeTech;
      const matchesNivel = activeNivel === 'todos' || card.dataset.nivel === activeNivel;
      const visible = matchesTech && matchesNivel;
      card.style.display = visible ? '' : 'none';
      if (visible) visibleCount++;
    });

    countEl.textContent = visibleCount === 1
      ? '1 trilha disponível'
      : `${visibleCount} trilhas disponíveis`;

    emptyState.classList.toggle('visible', visibleCount === 0);
    grid.style.display = visibleCount === 0 ? 'none' : '';
  }

  techButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      techButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTech = btn.dataset.tech;
      applyFilters();
    });
  });

  nivelButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      nivelButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeNivel = btn.dataset.nivel;
      applyFilters();
    });
  });

  applyFilters();
}

