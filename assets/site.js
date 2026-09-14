const TOPICS = [
  { id: 'povos-originarios', title: 'Povos originários', period: 'Antes de 1500', category: 'Origens' },
  { id: 'chegada-portugueses', title: 'Chegada dos portugueses', period: '1500', category: 'Origens' },
  { id: 'escravidao', title: 'Escravidão no Brasil', period: 'Séculos XVI–XIX', category: 'Colônia e Império' },
  { id: 'independencia', title: 'Independência do Brasil', period: '1822', category: 'Império' },
  { id: 'republica', title: 'Proclamação da República', period: '1889', category: 'República' },
  { id: 'clt', title: 'CLT e direitos trabalhistas', period: '1943', category: 'República' },
  { id: 'ditadura-militar', title: 'Ditadura Militar', period: '1964–1985', category: 'República' },
  { id: 'diretas-ja', title: 'Diretas Já', period: '1983–1984', category: 'Redemocratização' },
  { id: 'constituicao-1988', title: 'Constituição de 1988', period: '1988', category: 'Redemocratização' },
  { id: 'moedas-plano-real', title: 'Moedas e Plano Real', period: '1942–1994', category: 'Economia' },
  { id: 'impostos', title: 'Impostos e orçamento público', period: 'Atualidade', category: 'Estado e cidadania' },
  { id: 'poderes', title: 'Três poderes', period: 'Atualidade', category: 'Estado e cidadania' },
  { id: 'politica', title: 'Posições políticas', period: 'Atualidade', category: 'Estado e cidadania' },
  { id: 'privatizacoes', title: 'Privatizações', period: 'Décadas de 1990–2000', category: 'Economia' },
  { id: 'plano-collor', title: 'Plano Collor', period: '1990–1992', category: 'Economia' },
  { id: 'mensalao', title: 'Mensalão', period: '2005–2013', category: 'Democracia recente' },
  { id: 'organizacoes-criminosas', title: 'Organizações criminosas', period: 'Séculos XX–XXI', category: 'Sociedade e segurança' },
  { id: 'rachadinhas', title: 'Rachadinhas', period: 'Debate contemporâneo', category: 'Democracia recente' },
  { id: 'corrupcao-lavagem', title: 'Corrupção e lavagem de dinheiro', period: 'Debate contemporâneo', category: 'Democracia recente' },
  { id: 'polemicas-gestao', title: 'Polêmicas na gestão do país', period: 'Debate contemporâneo', category: 'Democracia recente' },
  { id: 'banco-master', title: 'Banco Master: estudo de caso', period: 'Atualidade', category: 'Economia' }
];

const SITE_ROOT = document.body?.dataset.root || '.';

function topicUrl(topic) {
  return `${SITE_ROOT}/topics/${topic.id}.html`;
}

function renderSidebar() {
  const mount = document.querySelector('[data-sidebar]');
  if (!mount) return;

  const current = document.body.dataset.topic;
  const currentIndex = TOPICS.findIndex((topic) => topic.id === current);
  const previous = currentIndex > 0 ? TOPICS[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < TOPICS.length - 1 ? TOPICS[currentIndex + 1] : null;

  mount.innerHTML = `
    <aside class="sidebar-panel" aria-label="Navegação do curso">
      <div class="sidebar-heading">
        <span class="eyebrow">Roteiro</span>
        <strong>História do Brasil</strong>
      </div>
      <nav class="topic-nav">
        <a class="topic-nav-link ${!current ? 'is-active' : ''}" href="${SITE_ROOT}/index.html">Visão geral</a>
        ${TOPICS.map((topic, index) => `
          <a class="topic-nav-link ${topic.id === current ? 'is-active' : ''}" href="${topicUrl(topic)}">
            <span class="topic-number">${String(index + 1).padStart(2, '0')}</span>
            <span>${topic.title}</span>
          </a>
        `).join('')}
        <a class="topic-nav-link ${document.body.dataset.page === 'references' ? 'is-active' : ''}" href="${SITE_ROOT}/references.html">Referências</a>
      </nav>
    </aside>
  `;

  const mobileToggle = document.querySelector('[data-sidebar-toggle]');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      document.body.classList.toggle('sidebar-open');
      mobileToggle.setAttribute('aria-expanded', String(document.body.classList.contains('sidebar-open')));
    });
  }

  const closeOnNavigate = () => document.body.classList.remove('sidebar-open');
  mount.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeOnNavigate));

  const navigation = document.querySelector('[data-topic-navigation]');
  if (navigation && currentIndex >= 0) {
    navigation.innerHTML = `
      ${previous ? `<a class="button button-secondary" href="${topicUrl(previous)}">← ${previous.title}</a>` : '<span></span>'}
      ${next ? `<a class="button button-primary" href="${topicUrl(next)}">Próximo: ${next.title} →</a>` : `<a class="button button-primary" href="${SITE_ROOT}/references.html">Ver referências →</a>`}
    `;
  }
}

function renderProgress() {
  const progress = document.querySelector('[data-progress]');
  if (!progress) return;
  const current = TOPICS.findIndex((topic) => topic.id === document.body.dataset.topic);
  const completed = current >= 0 ? current : 0;
  const percentage = Math.round((completed / TOPICS.length) * 100);
  progress.innerHTML = `
    <div class="progress-label"><span>Progresso do roteiro</span><strong>${percentage}%</strong></div>
    <div class="progress-track"><span style="width: ${Math.max(percentage, 4)}%"></span></div>
    <small>${current >= 0 ? `${completed + 1} de ${TOPICS.length} tópicos` : 'Comece pelo primeiro tópico'}</small>
  `;
}

function renderMermaid() {
  const diagrams = document.querySelectorAll('.mermaid');
  if (!diagrams.length) return;
  import('https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs').then(({ default: mermaid }) => {
    mermaid.initialize({ startOnLoad: false, theme: 'base', themeVariables: {
      primaryColor: '#e8f1ed', primaryTextColor: '#17362d', primaryBorderColor: '#2f735e',
      lineColor: '#48766b', secondaryColor: '#f6d6b0', tertiaryColor: '#f3eee5', fontFamily: 'DM Sans'
    }});
    mermaid.run({ nodes: diagrams });
  }).catch(() => {
    diagrams.forEach((diagram) => diagram.classList.add('diagram-fallback'));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderProgress();
  renderMermaid();
});
