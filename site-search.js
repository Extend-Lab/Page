const SITE_SEARCH_INDEX = [
  {
    title: "About EXTEND Lab",
    url: "about/",
    category: "About",
    text: "mission values break boundaries unlock possibilities reinforcement learning multi-agent systems robotics embodied intelligence"
  },
  {
    title: "News: IEEE T-ITS Paper Accepted",
    url: "news/#news-publication-latest",
    category: "News",
    text: "hao xiong ieee transactions on intelligent transportation systems latency freshness vehicular edge computing digital twin accepted paper"
  },
  {
    title: "News: Multi-Agent Communication Paper Revision",
    url: "news/",
    category: "News",
    text: "xinren zhang machine learning in communications and networking major revision multi-agent communication protocols"
  },
  {
    title: "News: IEEE TMC Paper Accepted",
    url: "news/",
    category: "News",
    text: "jianing zheng ieee transactions on mobile computing multimodal federated learning accepted paper"
  },
  {
    title: "News: Media Coverage",
    url: "news/#news-media-latest",
    category: "News",
    text: "dr jiadong yu diandong joint laboratory media coverage data center heterogeneous computing resources"
  },
  {
    title: "Events: OpenClaw and AI Agent",
    url: "events/#event-latest",
    category: "Events",
    text: "extend sharing openclaw ai agent jiale li tools claude code internal sharing session"
  },
  {
    title: "Research: Multi-Agent Systems",
    url: "research/",
    category: "Research",
    text: "multi-agent systems collaborative competitive intelligence cyber-physical tasks"
  },
  {
    title: "Research: Robotic/Embodied AI",
    url: "research/",
    category: "Research",
    text: "robotic embodied ai perception adaptation dynamic environments"
  },
  {
    title: "Research: Simulation-to-Reality RL",
    url: "research/",
    category: "Research",
    text: "simulation to reality reinforcement learning physical deployment training environments"
  },
  {
    title: "Research: Edge Intelligence and Wireless Systems",
    url: "research/",
    category: "Research",
    text: "edge intelligence wireless systems resource allocation communications intelligent infrastructure"
  },
  {
    title: "Projects",
    url: "projects/",
    category: "Projects",
    text: "funded projects grants sponsored collaborations bristol guangdong diandong blockchain smart factories"
  },
  {
    title: "People",
    url: "people/",
    category: "People",
    text: "jiadong yu hao xiong xinren zhang jianing zheng yulong zhang guangzhi zhu nianfu wang phd mphil visiting students"
  },
  {
    title: "Publications",
    url: "publications/",
    category: "Publications",
    text: "journal articles conference papers ieee twc tmc tits wireless communications internet of things"
  },
  {
    title: "Collaborate",
    url: "support/",
    category: "Collaborate",
    text: "collaboration funding partners graduate students undergraduate students visiting phd scholars application materials"
  }
];

function normalizeSearchText(text) {
  return (text || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function scoreSearchEntry(entry, terms) {
  const haystack = normalizeSearchText(`${entry.title} ${entry.category} ${entry.text}`);
  let score = 0;

  for (const term of terms) {
    if (!term) continue;
    if (normalizeSearchText(entry.title).includes(term)) score += 8;
    if (normalizeSearchText(entry.category).includes(term)) score += 4;
    if (haystack.includes(term)) score += 2;
  }

  return score;
}

function buildResultMarkup(entry) {
  return `
    <a class="site-search-result" href="${entry.url}">
      <span class="site-search-result-title">${entry.title}</span>
      <span class="site-search-result-meta">${entry.category}</span>
    </a>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".site-search").forEach((searchRoot) => {
    const input = searchRoot.querySelector(".site-search-input");
    const results = searchRoot.querySelector(".site-search-results");

    if (!input || !results) return;

    const closeResults = () => {
      results.hidden = true;
      results.innerHTML = "";
    };

    const renderResults = (query) => {
      const normalizedQuery = normalizeSearchText(query);
      if (normalizedQuery.length < 2) {
        closeResults();
        return;
      }

      const terms = normalizedQuery.split(" ");
      const matches = SITE_SEARCH_INDEX
        .map((entry) => ({ entry, score: scoreSearchEntry(entry, terms) }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 6)
        .map((item) => item.entry);

      if (!matches.length) {
        results.innerHTML = '<div class="site-search-empty">No results found.</div>';
        results.hidden = false;
        return;
      }

      results.innerHTML = matches.map(buildResultMarkup).join("");
      results.hidden = false;
    };

    input.addEventListener("input", (event) => {
      renderResults(event.target.value);
    });

    input.addEventListener("focus", (event) => {
      if (event.target.value.trim().length >= 2) {
        renderResults(event.target.value);
      }
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeResults();
        input.blur();
      }

      if (event.key === "Enter") {
        const firstResult = results.querySelector(".site-search-result");
        if (firstResult) {
          window.location.href = firstResult.href;
        }
      }
    });

    document.addEventListener("click", (event) => {
      if (!searchRoot.contains(event.target)) {
        closeResults();
      }
    });
  });
});
