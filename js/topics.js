/* ============================================================
 * learning-brazil — shared navigation / sidebar
 * Vanilla JS. Injects the shared sidebar into every page and
 * wires up "anterior / próximo" navigation.
 * ============================================================ */

// Ordered chronologically (oldest -> newest). Reference/structural
// topics that don't have a single date are grouped at the end.
const TOPICS = [
  {
    id: "descobrimento",
    title: "Descobrimento do Brasil",
    year: "1500",
    era: "Brasil Colônia",
    file: "descobrimento.html",
    summary: "A chegada dos portugueses e os efeitos colaterais da colonização."
  },
  {
    id: "escravidao",
    title: "Escravidão no Brasil",
    year: "1500–1888",
    era: "Brasil Colônia",
    file: "escravidao.html",
    summary: "Como começou, quem apoiou e os envolvidos."
  },
  {
    id: "independencia",
    title: "Independência do Brasil",
    year: "1822",
    era: "Império",
    file: "independencia.html",
    summary: "O que aconteceu e quais foram os efeitos colaterais."
  },
  {
    id: "republica",
    title: "Proclamação da República",
    year: "1889",
    era: "República",
    file: "republica.html",
    summary: "A queda do Império e os efeitos colaterais."
  },
  {
    id: "clt",
    title: "Regularização do trabalho (CLT)",
    year: "1943",
    era: "Era Vargas",
    file: "clt.html",
    summary: "Quando e por que ocorreu, quem apoiou, direitos e deveres."
  },
  {
    id: "ditadura",
    title: "Ditadura Militar",
    year: "1964–1985",
    era: "Regime Militar",
    file: "ditadura.html",
    summary: "Quando e por que ocorreu, apoiadores e como acabou."
  },
  {
    id: "diretas-ja",
    title: "Movimento Diretas Já",
    year: "1984",
    era: "Redemocratização",
    file: "diretas-ja.html",
    summary: "Quando e por que ocorreu, quem apoiou e como acabou."
  },
  {
    id: "constituicao-1988",
    title: "Constituição de 1988",
    year: "1988",
    era: "Nova República",
    file: "constituicao-1988.html",
    summary: "Quando e por que ocorreu, apoiadores e envolvidos."
  },
  {
    id: "plano-collor",
    title: "Plano Collor",
    year: "1990",
    era: "Nova República",
    file: "plano-collor.html",
    summary: "Quando e por que ocorreu, apoiadores e como acabou."
  },
  {
    id: "moedas-plano-real",
    title: "Instabilidade das moedas até o Plano Real",
    year: "1986–1994",
    era: "Nova República",
    file: "moedas-plano-real.html",
    summary: "Por que a instabilidade e as trocas de moeda, e como acabou."
  },
  {
    id: "privatizacoes",
    title: "Privatizações",
    year: "1990s",
    era: "Nova República",
    file: "privatizacoes.html",
    summary: "Quais foram, benefícios e envolvidos."
  },
  {
    id: "mensalao",
    title: "Mensalão",
    year: "2005",
    era: "Século XXI",
    file: "mensalao.html",
    summary: "Quando e por que ocorreu, apoiadores e como acabou."
  },
  {
    id: "corrupcao",
    title: "Corrupção e lavagem de dinheiro",
    year: "2014–",
    era: "Século XXI",
    file: "corrupcao.html",
    summary: "Políticos presos, envolvidos, o que fizeram e o prejuízo."
  },
  {
    id: "rachadinhas",
    title: "Rachadinhas",
    year: "2017–",
    era: "Século XXI",
    file: "rachadinhas.html",
    summary: "Quando e por que ocorreu, apoiadores e como acabou."
  },
  {
    id: "organizações-criminosas",
    title: "Organizações criminosas",
    year: "1990s–",
    era: "Século XXI",
    file: "organizacoes-criminosas.html",
    summary: "Milícias, PCC, CV e os envolvidos."
  },
  {
    id: "banco-master",
    title: "Banco Master",
    year: "2025",
    era: "Século XXI",
    file: "banco-master.html",
    summary: "Quando e por que ocorreu, apoiadores e como acabou."
  },
  {
    id: "polemicas",
    title: "Polêmicas na gestão do País",
    year: "—",
    era: "Transversal",
    file: "polemicas.html",
    summary: "Principais polêmicas da gestão pública brasileira."
  },
  {
    id: "politicos",
    title: "Composição dos políticos e responsabilidades",
    year: "—",
    era: "Estrutura",
    file: "politicos.html",
    summary: "Municipal, estadual e federal: quem são e o que fazem."
  },
  {
    id: "tres-poderes",
    title: "Três poderes e suas responsabilidades",
    year: "—",
    era: "Estrutura",
    file: "tres-poderes.html",
    summary: "Como se elegem e o que fazem."
  },
  {
    id: "impostos",
    title: "Criação de impostos",
    year: "—",
    era: "Estrutura",
    file: "impostos.html",
    summary: "Nome, quando foi criado, onde é arrecadado e utilizado."
  },
  {
    id: "posicoes-politicas",
    title: "Diferenças de posições políticas",
    year: "—",
    era: "Estrutura",
    file: "posicoes-politicas.html",
    summary: "Valores e pautas que cada lado defende."
  }
];

function findTopic(id) {
  return TOPICS.find((t) => t.id === id) || null;
}

function buildSidebar(currentId) {
  const items = TOPICS.map((t) => {
    const active = t.id === currentId ? "is-active" : "";
    return `
      <li class="nav-item">
        <a href="topics/${t.file}" class="nav-link ${active}" data-id="${t.id}">
          <span class="nav-year">${t.year}</span>
          <span class="nav-title">${t.title}</span>
        </a>
      </li>`;
  }).join("");

  return `
    <aside id="sidebar" class="sidebar" aria-label="Navegação de tópicos">
      <div class="sidebar-header">
        <a href="index.html" class="brand">
          <span class="brand-mark">🇧🇷</span>
          <span class="brand-text">História do<br><strong>Brasil</strong></span>
        </a>
        <a href="references.html" class="refs-link">📚 Referências</a>
      </div>
      <nav class="sidebar-nav">
        <ul class="nav-list">${items}</ul>
      </nav>
      <div class="sidebar-footer">
        <a href="index.html" class="home-link">← Voltar ao roteiro</a>
      </div>
    </aside>`;
}

function buildPrevNext(currentId) {
  const idx = TOPICS.findIndex((t) => t.id === currentId);
  if (idx === -1) return "";
  const prev = idx > 0 ? TOPICS[idx - 1] : null;
  const next = idx < TOPICS.length - 1 ? TOPICS[idx + 1] : null;
  return `
    <nav class="prevnext" aria-label="Navegação anterior e próximo">
      ${
        prev
          ? `<a class="pn-card pn-prev" href="topics/${prev.file}">
               <span class="pn-label">← Anterior</span>
               <span class="pn-title">${prev.title}</span>
             </a>`
          : `<span class="pn-card pn-empty"></span>`
      }
      ${
        next
          ? `<a class="pn-card pn-next" href="topics/${next.file}">
               <span class="pn-label">Próximo →</span>
               <span class="pn-title">${next.title}</span>
             </a>`
          : `<span class="pn-card pn-empty"></span>`
      }
    </nav>`;
}

function initLayout() {
  const body = document.body;
  const currentId = body.dataset.topic || "";

  // Sidebar
  const sidebarMount = document.getElementById("sidebar-mount");
  if (sidebarMount) {
    sidebarMount.innerHTML = buildSidebar(currentId);
  }

  // Prev / next
  const pnMount = document.getElementById("prevnext-mount");
  if (pnMount) {
    pnMount.innerHTML = buildPrevNext(currentId);
  }

  // Mobile toggle
  const toggle = document.getElementById("sidebar-toggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  if (toggle && sidebar) {
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      if (overlay) overlay.classList.toggle("show");
      toggle.setAttribute("aria-expanded", sidebar.classList.contains("open"));
    });
  }
  if (overlay) {
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("show");
    });
  }
}

document.addEventListener("DOMContentLoaded", initLayout);
