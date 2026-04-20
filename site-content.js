(function () {
  const NEWS_ITEMS = [
    {
      id: "news-publication-icc-2026-travel-grant",
      type: "news",
      category: "publication",
      categoryLabel: "Publication",
      title: "Ms. Jianing Zheng Receives ICC 2026 Student Travel Grant",
      bodyHtml:
        "<strong>Ms. Jianing Zheng</strong> received the <em>ICC 2026 Student Travel Grant</em>. Her paper, <em>Maximizing Personalized Energy-efficiency for Swarm Learning in 6G Networks</em>, will be presented on 25 May 2026 in Glasgow, Scotland, UK.",
      summaryHtml:
        "<strong>Ms. Jianing Zheng</strong> received the ICC 2026 Student Travel Grant for her work on personalized energy efficiency in swarm learning for 6G networks.",
      displayDate: "17 Apr 2026",
      sortDate: "2026-04-17",
      homepageVisual: {
        type: "art-image",
        src: "./assets/news/ICC2026.jpg",
        alt: "Official IEEE ICC 2026 conference banner"
      },
      image: {
        src: "./assets/news/ICC2026.jpg",
        alt: "Official IEEE ICC 2026 conference banner"
      },
      searchText:
        "jianing zheng icc 2026 student travel grant maximizing personalized energy-efficiency for swarm learning in 6g networks glasgow may 25 2026"
    },
    {
      id: "news-publication-tits",
      type: "news",
      category: "publication",
      categoryLabel: "Publication",
      title: "Paper Accepted by IEEE Transactions on Intelligent Transportation Systems",
      bodyHtml:
        "<strong>Mr. Hao Xiong</strong> reports that <em>Latency-Freshness-Aware Vehicular Edge Computing for Digital Twin-Enabled Intelligent Transportation</em> has been accepted by <em>IEEE Transactions on Intelligent Transportation Systems</em>.",
      summaryHtml:
        "<strong>Mr. Hao Xiong</strong> reports a new acceptance for digital twin-enabled vehicular edge computing.",
      displayDate: "Mar 2026",
      sortDate: "2026-03-20",
      homepageVisual: {
        type: "art-image",
        src: "./assets/news/TITS.jpg",
        alt: "IEEE Transactions on Intelligent Transportation Systems homepage screenshot"
      },
      image: {
        src: "./assets/news/TITS.jpg",
        alt: "IEEE Transactions on Intelligent Transportation Systems homepage screenshot"
      },
      searchText:
        "hao xiong ieee transactions on intelligent transportation systems latency freshness vehicular edge computing digital twin accepted paper"
    },
    {
      id: "news-publication-tmlcn",
      type: "news",
      category: "publication",
      categoryLabel: "Publication",
      title: "Major Revision for Multi-Agent Communication Learning Paper",
      bodyHtml:
        "<strong>Ms. Xinren Zhang</strong> received a major revision decision for <em>Learning Efficient Communication Protocols for Multi-Agent Reinforcement Learning</em> from <em>IEEE Transactions on Machine Learning in Communications and Networking</em>.",
      summaryHtml:
        "<strong>Ms. Xinren Zhang</strong> received a major revision for a paper on efficient communication protocols in multi-agent reinforcement learning.",
      displayDate: "Mar 2026",
      sortDate: "2026-03-12",
      image: {
        src: "./assets/news/TMLCN.jpg",
        alt: "IEEE Transactions on Machine Learning in Communications and Networking journal graphic"
      },
      searchText:
        "xinren zhang machine learning in communications and networking major revision multi-agent communication protocols reinforcement learning"
    },
    {
      id: "news-publication-tmc",
      type: "news",
      category: "publication",
      categoryLabel: "Publication",
      title: "Paper Accepted by IEEE Transactions on Mobile Computing",
      bodyHtml:
        "<strong>Ms. Jianing Zheng</strong> reports that <em>Scheduling and Fusion for Multimodal Federated Learning in Energy-constrained Wireless Networks</em> has been accepted by <em>IEEE Transactions on Mobile Computing</em>.",
      summaryHtml:
        "<strong>Ms. Jianing Zheng</strong> reports an acceptance on multimodal federated learning in energy-constrained wireless networks.",
      displayDate: "Sep 2025",
      sortDate: "2025-09-08",
      image: {
        src: "./assets/news/TMC.jpg",
        alt: "IEEE Transactions on Mobile Computing journal graphic"
      },
      searchText:
        "jianing zheng ieee transactions on mobile computing multimodal federated learning energy constrained wireless networks accepted paper"
    },
    {
      id: "news-media-jituo-interview",
      type: "news",
      category: "media",
      categoryLabel: "Media",
      title: "Dr. Jiadong Yu Shared What She Looks for in Prospective Students in a Jituo Forum Interview",
      bodyHtml:
        "<strong>Dr. Jiadong Yu</strong> was interviewed by <em>Jituo Forum</em> and asked what qualities she hopes to see in prospective students. She highlighted <strong>curiosity</strong>, <strong>execution</strong>, and <strong>resilience</strong> as the traits she values most.",
      summaryHtml:
        "In a Jituo Forum interview, Dr. Jiadong Yu shared that she values curiosity, execution, and resilience in prospective students.",
      displayDate: "20 Apr 2026",
      sortDate: "2026-04-20",
      link: "https://weixin.qq.com/sph/AAr5v9a3f5",
      image: {
        src: "./assets/news/jituo.jpg",
        alt: "Jituo Forum interview coverage featuring Dr. Jiadong Yu"
      },
      searchText:
        "dr jiadong yu jituo forum interview prospective students curiosity execution resilience media coverage april 20 2026"
    },
    {
      id: "news-media-joint-lab-forum",
      type: "news",
      category: "media",
      categoryLabel: "Media",
      title: "Dr. Jiadong Yu Delivered a Forum Talk at the HKUST(GZ)-Diandong Joint Laboratory Event",
      bodyHtml:
        "In the featured report, <strong>Dr. Jiadong Yu</strong> introduced the group's work on scheduling heterogeneous computing resources for data centers, guided by the vision of making compute as accessible and on-demand as electricity.",
      summaryHtml:
        "A featured media report highlighted the group's vision for on-demand heterogeneous computing.",
      displayDate: "8 Sep 2025",
      sortDate: "2025-09-08",
      link: "https://mp.weixin.qq.com/s/288UUs9USw-S1FGN5Nji5Q",
      image: {
        src: "./assets/news/joint-lab-report.jpg",
        alt: "Dr. Jiadong Yu speaking at the HKUST(GZ)-Diandong joint laboratory event"
      },
      searchText:
        "dr jiadong yu diandong joint laboratory media coverage data center heterogeneous computing resources"
    }
  ];

  const EVENT_ITEMS = [
    {
      id: "event-quanzhun-visit",
      type: "event",
      category: "recent-activity",
      categoryLabel: "Recent Activity",
      title: "Visit to Guangdong Quanzhun Intelligent Technology Co., Ltd.",
      bodyHtml:
        "On <strong>11 March 2026</strong>, <strong>Dr. Jiadong Yu</strong>, <strong>Mr. Ziru Zhang</strong>, and <strong>Ms. Xuling Zhang</strong> visited <em>Guangdong Quanzhun Intelligent Technology Co., Ltd.</em>. During the visit, the team toured the company's production line and discussed potential collaboration opportunities and a shared long-term vision.",
      summaryHtml:
        "The team visited Guangdong Quanzhun Intelligent Technology Co., Ltd., toured its production line, and discussed future collaboration opportunities.",
      displayDate: "11 Mar 2026",
      sortDate: "2026-03-11",
      images: [
        {
          src: "./assets/events/quanzhun.jpg",
          alt: "EXTEND Lab members visiting Guangdong Quanzhun Intelligent Technology Co., Ltd."
        }
      ],
      searchText:
        "jiadong yu ziru zhang xuling zhang guangdong quanzhun intelligent technology company visit production line collaboration vision march 11 2026"
    },
    {
      id: "event-openclaw-ai-agent",
      type: "event",
      category: "extend-sharing",
      categoryLabel: "EXTEND Sharing",
      title: "EXTEND Sharing: OpenClaw and AI Agent",
      bodyHtml:
        "We organized an EXTEND Sharing Session featuring Dr. Jiadong Yu and Mr. Jiale Li. The session covered the fundamentals of AI agents and OpenClaw, plus practical reflections on using tools such as Claude Code in everyday research workflows.",
      summaryHtml:
        "An internal sharing session on AI agents, OpenClaw, and practical tooling for everyday research workflows.",
      displayDate: "20 Mar 2026",
      sortDate: "2026-03-20",
      images: [
        {
          src: "./assets/events/extendclaw.jpg",
          alt: "Participants at the EXTEND Sharing Session"
        }
      ],
      searchText:
        "extend sharing openclaw ai agent jiale li tools claude code internal sharing session"
    }
  ];

  const STATIC_SEARCH_INDEX = [
    {
      title: "About EXTEND Lab",
      url: "about/",
      category: "About",
      text: "mission values break boundaries unlock possibilities reinforcement learning multi-agent systems robotics embodied intelligence"
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

  function sortByDateDesc(items) {
    return [...items].sort((a, b) => {
      const dateDiff = new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime();
      if (dateDiff !== 0) return dateDiff;
      return a.title.localeCompare(b.title);
    });
  }

  function stripHtml(html) {
    return (html || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  }

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;");
  }

  function getNewsItems(category) {
    return sortByDateDesc(
      category ? NEWS_ITEMS.filter((item) => item.category === category) : NEWS_ITEMS
    );
  }

  function getEventItems(category) {
    return sortByDateDesc(
      category ? EVENT_ITEMS.filter((item) => item.category === category) : EVENT_ITEMS
    );
  }

  function getHomepageHighlights() {
    return [
      ...getNewsItems("publication").slice(0, 2),
      ...getNewsItems("media").slice(0, 2),
      ...getEventItems("recent-activity").slice(0, 2),
      ...getEventItems("extend-sharing").slice(0, 2)
    ].filter(Boolean);
  }

  function getItemUrl(item) {
    if (item.type === "event") return `./events/#${item.id}`;
    return `./news/#${item.id}`;
  }

  function getSearchIndex() {
    const contentItems = [
      ...getNewsItems().map((item) => ({
        title: `News: ${item.title}`,
        url: `news/#${item.id}`,
        category: "News",
        text: `${stripHtml(item.bodyHtml)} ${item.searchText || ""}`
      })),
      ...getEventItems().map((item) => ({
        title: `Events: ${item.title}`,
        url: `events/#${item.id}`,
        category: "Events",
        text: `${stripHtml(item.bodyHtml)} ${item.searchText || ""}`
      }))
    ];

    return [...STATIC_SEARCH_INDEX, ...contentItems];
  }

  function renderHomepageVisual(item) {
    if (item.homepageVisual && item.homepageVisual.type === "art-image") {
      return `
        <div class="homepage-update-art homepage-update-art-image">
          <img src="${item.homepageVisual.src}" alt="${escapeHtml(item.homepageVisual.alt)}" class="homepage-update-art-image-asset">
        </div>
      `;
    }

    const image = item.image || (item.images && item.images[0]);
    if (!image) return "";

    return `<img src="${image.src}" alt="${escapeHtml(image.alt)}" class="news-card-image">`;
  }

  function renderPublicationCardVisual(item) {
    const visual =
      (item.homepageVisual && item.homepageVisual.type === "art-image" && item.homepageVisual) ||
      item.image;

    if (!visual) return "";

    return `
      <div class="homepage-update-art homepage-update-art-image">
        <img src="${visual.src}" alt="${escapeHtml(visual.alt)}" class="homepage-update-art-image-asset">
      </div>
    `;
  }

  function renderHomepageCard(item) {
    const label =
      item.type === "event" ? `Events · ${item.categoryLabel}` : `News · ${item.categoryLabel}`;

    return `
      <a href="${getItemUrl(item)}" class="homepage-update-link">
        <article class="news-card homepage-update-card">
          ${renderHomepageVisual(item)}
          <div class="news-card-body">
            <p class="homepage-update-label">${label}</p>
            <p class="homepage-update-meta">${item.displayDate}</p>
            <h3 class="news-card-title">${item.title}</h3>
            <p class="news-card-text">${item.summaryHtml || item.bodyHtml}</p>
          </div>
        </article>
      </a>
    `;
  }

  function renderHomepageHighlightsRail(items) {
    if (!items.length) return "";

    return `
      <section class="homepage-highlights-rail" data-homepage-highlights>
        <div class="homepage-highlights-viewport" data-role="viewport">
          <div class="homepage-highlights-track" data-role="track">
            ${items
              .map(
                (item, index) => `
                  <div class="homepage-highlights-slide" data-slide-index="${index}">
                    ${renderHomepageCard(item)}
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
        <div class="homepage-highlights-dots" data-role="dots" aria-label="Highlight navigation"></div>
      </section>
    `;
  }

  function renderNewsCard(item, hidden, section) {
    const hiddenAttrs = hidden ? ' hidden data-archive-hidden="true"' : ' data-archive-hidden="false"';
    const useImageCards = section && section.dataset.cardStyle === "image";
    const usePublicationArt = useImageCards && item.category === "publication";

    if (item.category === "publication" && !useImageCards) {
      return `
        <article class="news-card news-card-textonly" id="${item.id}"${hiddenAttrs}>
          <div class="news-card-body">
            <h3 class="news-card-title">${item.title}</h3>
            <p class="news-card-text">${item.bodyHtml}</p>
            <p class="news-card-date">${item.displayDate}</p>
          </div>
        </article>
      `;
    }

    const linkedTitle = item.link
      ? `<a href="${item.link}" target="_blank" rel="noopener">${item.title}</a>`
      : item.title;
    const image = usePublicationArt
      ? renderPublicationCardVisual(item)
      : item.image
      ? `
        ${item.link
          ? `<a href="${item.link}" target="_blank" rel="noopener" class="news-card-image-link"><img src="${item.image.src}" alt="${escapeHtml(item.image.alt)}" class="news-card-image"></a>`
          : `<div class="news-card-image-link"><img src="${item.image.src}" alt="${escapeHtml(item.image.alt)}" class="news-card-image"></div>`}
      `
      : "";

    return `
      <article class="news-card" id="${item.id}"${hiddenAttrs}>
        ${image}
        <div class="news-card-body">
          <h3 class="news-card-title">${linkedTitle}</h3>
          <p class="news-card-text">${item.bodyHtml}</p>
          <p class="news-card-date">${item.displayDate}</p>
        </div>
      </article>
    `;
  }

  function renderEventCard(item, hidden) {
    const hiddenAttrs = hidden ? ' hidden data-archive-hidden="true"' : ' data-archive-hidden="false"';
    const images = item.images || [];
    const mediaClass =
      images.length > 1 ? "event-feature-media" : "event-feature-media event-feature-media-single";
    const mediaMarkup = images
      .map(
        (image) =>
          `<img src="${image.src}" alt="${escapeHtml(image.alt)}" class="event-feature-image">`
      )
      .join("");

    return `
      <article class="event-feature-card" id="${item.id}"${hiddenAttrs}>
        <div class="${mediaClass}">${mediaMarkup}</div>
        <div class="event-feature-body">
          <p class="event-feature-date">${item.displayDate}</p>
          <h3 class="event-feature-title">${item.title}</h3>
          <p class="event-feature-text">${stripHtml(item.bodyHtml)}</p>
        </div>
      </article>
    `;
  }

  function setArchiveExpanded(section, expanded) {
    section.dataset.expanded = expanded ? "true" : "false";
    section.querySelectorAll("[data-archive-hidden]").forEach((item) => {
      const shouldHide = item.getAttribute("data-archive-hidden") === "true" && !expanded;
      item.hidden = shouldHide;
    });

    const button = section.querySelector(".archive-toggle-button");
    if (button) {
      button.textContent = expanded ? "Show Less" : "Find More";
      button.setAttribute("aria-expanded", expanded ? "true" : "false");
    }
  }

  function bindArchiveToggle(section) {
    if (section.dataset.findMoreUrl) return;

    const button = section.querySelector(".archive-toggle-button");
    if (!button) return;

    button.addEventListener("click", () => {
      const expanded = section.dataset.expanded === "true";
      setArchiveExpanded(section, !expanded);
    });
  }

  function renderArchiveSection(section, items, renderer) {
    const limit = Number(section.dataset.limit || 3);
    const list = section.querySelector("[data-role='archive-list']");
    const actions = section.querySelector("[data-role='archive-actions']");

    if (!list) return;

    list.innerHTML = items
      .map((item, index) => renderer(item, index >= limit, section))
      .join("");

    if (actions) {
      if (items.length > limit && section.dataset.findMoreUrl) {
        actions.innerHTML = `<a class="btn-action archive-toggle-button" href="${section.dataset.findMoreUrl}">Find More</a>`;
      } else {
        actions.innerHTML =
          items.length > limit
            ? '<button type="button" class="btn-action archive-toggle-button" aria-expanded="false">Find More</button>'
            : "";
      }
    }

    setArchiveExpanded(section, false);
    bindArchiveToggle(section);
  }

  function renderHomepage() {
    document.querySelectorAll("[data-render='homepage-highlights']").forEach((container) => {
      container.innerHTML = renderHomepageHighlightsRail(getHomepageHighlights());
    });
  }

  function initHomepageHighlightsRail() {
    document.querySelectorAll("[data-homepage-highlights]").forEach((rail) => {
      const viewport = rail.querySelector("[data-role='viewport']");
      const slides = Array.from(rail.querySelectorAll(".homepage-highlights-slide"));
      const dotsContainer = rail.querySelector("[data-role='dots']");
      let pointerId = null;
      let dragStartX = 0;
      let dragStartScrollLeft = 0;
      let dragDistance = 0;

      if (!viewport || slides.length === 0 || !dotsContainer) return;

      const getVisibleCount = () => {
        if (window.innerWidth <= 700) return 1;
        if (window.innerWidth <= 1080) return 2;
        return 3;
      };

      const getMaxIndex = () => Math.max(0, slides.length - getVisibleCount());

      const getAnchorIndices = () => {
        const maxIndex = getMaxIndex();
        const visibleCount = getVisibleCount();
        const anchors = [0];
        const step = Math.max(1, visibleCount - 1);

        for (let index = step; index < maxIndex; index += step) {
          anchors.push(index);
        }

        if (maxIndex > 0 && anchors[anchors.length - 1] !== maxIndex) {
          anchors.push(maxIndex);
        }

        return anchors;
      };

      const updateDots = () => {
        const anchors = getAnchorIndices();
        const step = slides.length > 1 ? slides[1].offsetLeft - slides[0].offsetLeft : viewport.clientWidth;
        const nearestIndex = step ? Math.round(viewport.scrollLeft / step) : 0;
        const activeAnchor = anchors.reduce((closest, anchor) => {
          return Math.abs(anchor - nearestIndex) < Math.abs(closest - nearestIndex) ? anchor : closest;
        }, anchors[0] || 0);

        dotsContainer.querySelectorAll(".homepage-highlights-dot").forEach((dot) => {
          const dotIndex = Number(dot.dataset.index || 0);
          dot.classList.toggle("is-active", anchors[dotIndex] === activeAnchor);
        });
      };

      const scrollToIndex = (index, behavior = "smooth") => {
        const safeIndex = Math.max(0, Math.min(index, getMaxIndex()));
        const targetSlide = slides[safeIndex];
        const targetLeft = targetSlide.offsetLeft - viewport.offsetLeft;

        viewport.scrollTo({
          left: targetLeft,
          behavior
        });

        window.requestAnimationFrame(updateDots);
      };

      const snapToNearest = () => {
        const slideWidth = slides[0].offsetWidth;
        const gap = slides.length > 1 ? slides[1].offsetLeft - slides[0].offsetLeft - slideWidth : 0;
        const step = slideWidth + gap;
        if (!step) return;
        const nearestIndex = Math.round(viewport.scrollLeft / step);
        scrollToIndex(nearestIndex);
      };

      const renderDots = () => {
        const anchors = getAnchorIndices();
        dotsContainer.innerHTML = anchors
          .map(
            (_, index) => `
              <button
                type="button"
                class="homepage-highlights-dot${index === 0 ? " is-active" : ""}"
                data-index="${index}"
                aria-label="Show highlight set ${index + 1}"
              ></button>
            `
          )
          .join("");

        dotsContainer.querySelectorAll(".homepage-highlights-dot").forEach((dot) => {
          const jumpToAnchor = () => {
            const dotIndex = Number(dot.dataset.index || 0);
            scrollToIndex(anchors[dotIndex] || 0);
          };

          dot.addEventListener("mouseenter", jumpToAnchor);
          dot.addEventListener("focus", jumpToAnchor);
          dot.addEventListener("click", jumpToAnchor);
        });
      };

      const startDrag = (event) => {
        if (event.pointerType === "mouse" && event.button !== 0) return;
        pointerId = event.pointerId;
        dragStartX = event.clientX;
        dragStartScrollLeft = viewport.scrollLeft;
        dragDistance = 0;
        rail.dataset.dragging = "true";
        rail.dataset.dragMoved = "false";
        viewport.setPointerCapture(pointerId);
        event.preventDefault();
      };

      const moveDrag = (event) => {
        if (pointerId !== event.pointerId) return;
        const deltaX = event.clientX - dragStartX;
        dragDistance = Math.max(dragDistance, Math.abs(deltaX));
        viewport.scrollLeft = dragStartScrollLeft - deltaX;
      };

      const endDrag = (event) => {
        if (pointerId !== event.pointerId) return;
        if (viewport.hasPointerCapture(pointerId)) {
          viewport.releasePointerCapture(pointerId);
        }
        pointerId = null;
        rail.dataset.dragging = "false";
        window.setTimeout(() => {
          rail.dataset.dragMoved = dragDistance > 8 ? "true" : "false";
        }, 0);
        snapToNearest();
      };

      viewport.addEventListener("pointerdown", startDrag);
      viewport.addEventListener("pointermove", moveDrag);
      viewport.addEventListener("pointerup", endDrag);
      viewport.addEventListener("pointercancel", endDrag);
      viewport.addEventListener("scroll", updateDots, { passive: true });

      rail.addEventListener(
        "click",
        (event) => {
          if (rail.dataset.dragMoved === "true") {
            event.preventDefault();
            event.stopPropagation();
            rail.dataset.dragMoved = "false";
          }
        },
        true
      );

      window.addEventListener("resize", () => {
        renderDots();
        snapToNearest();
        updateDots();
      });

      renderDots();
      scrollToIndex(0, "auto");
      updateDots();
    });
  }

  function renderNewsPage() {
    document.querySelectorAll("[data-render='news-section']").forEach((section) => {
      renderArchiveSection(section, getNewsItems(section.dataset.category), renderNewsCard);
    });
  }

  function renderEventsPage() {
    document.querySelectorAll("[data-render='events-section']").forEach((section) => {
      renderArchiveSection(section, getEventItems(section.dataset.category), renderEventCard);
    });
  }

  function revealHashTarget() {
    const hash = window.location.hash ? window.location.hash.slice(1) : "";
    if (!hash) return;

    const target = document.getElementById(hash);
    if (!target) return;

    const section = target.closest("[data-render='news-section'], [data-render='events-section']");
    if (section && target.hidden) {
      setArchiveExpanded(section, true);
    }

    target.classList.add("archive-target-flash");
    window.setTimeout(() => {
      target.classList.remove("archive-target-flash");
    }, 1600);
  }

  window.EXTEND_SITE_CONTENT = {
    news: NEWS_ITEMS,
    events: EVENT_ITEMS,
    getSearchIndex
  };

  document.addEventListener("DOMContentLoaded", () => {
    renderHomepage();
    initHomepageHighlightsRail();
    renderNewsPage();
    renderEventsPage();
    revealHashTarget();
    window.addEventListener("hashchange", revealHashTarget);
  });
})();
