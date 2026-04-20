(function () {
  const NEWS_ITEMS = [
    {
      id: "news-publication-icc-2026-travel-grant",
      type: "news",
      category: "publication",
      categoryLabel: "Publication",
      categoryLabelZh: "论文动态",
      title: "Ms. Jianing Zheng Receives ICC 2026 Student Travel Grant",
      titleZh: "郑佳宁同学获 ICC 2026 Student Travel Grant",
      bodyHtml:
        "<strong>Ms. Jianing Zheng</strong> received the <em>ICC 2026 Student Travel Grant</em>. Her paper, <em>Maximizing Personalized Energy-efficiency for Swarm Learning in 6G Networks</em>, will be presented on 25 May 2026 in Glasgow, Scotland, UK.",
      bodyHtmlZh:
        "<strong>郑佳宁同学</strong>获得了 <em>ICC 2026 Student Travel Grant</em>。她的论文 <em>Maximizing Personalized Energy-efficiency for Swarm Learning in 6G Networks</em> 将于 <strong>2026 年 5 月 25 日</strong> 在英国苏格兰格拉斯哥宣讲。",
      summaryHtml:
        "<strong>Ms. Jianing Zheng</strong> received the ICC 2026 Student Travel Grant for her work on personalized energy efficiency in swarm learning for 6G networks.",
      summaryHtmlZh:
        "<strong>郑佳宁同学</strong>因其关于 6G 群体学习个性化能效的研究，获得 ICC 2026 学生差旅资助。",
      displayDate: "17 Apr 2026",
      displayDateZh: "2026年4月17日",
      sortDate: "2026-04-17",
      homepageVisual: {
        type: "art-image",
        src: "./assets/news/ICC2026.jpg",
        alt: "Official IEEE ICC 2026 conference banner",
        altZh: "IEEE ICC 2026 官方会议横幅"
      },
      image: {
        src: "./assets/news/ICC2026.jpg",
        alt: "Official IEEE ICC 2026 conference banner",
        altZh: "IEEE ICC 2026 官方会议横幅"
      },
      searchText:
        "jianing zheng icc 2026 student travel grant maximizing personalized energy-efficiency for swarm learning in 6g networks glasgow may 25 2026",
      searchTextZh:
        "郑佳宁 ICC 2026 学生差旅资助 6G 群体学习 个性化 能效 格拉斯哥 2026年5月25日"
    },
    {
      id: "news-publication-tits",
      type: "news",
      category: "publication",
      categoryLabel: "Publication",
      categoryLabelZh: "论文动态",
      title: "Paper Accepted by IEEE Transactions on Intelligent Transportation Systems",
      titleZh: "论文被 IEEE Transactions on Intelligent Transportation Systems 接收",
      bodyHtml:
        "<strong>Mr. Hao Xiong</strong> reports that <em>Latency-Freshness-Aware Vehicular Edge Computing for Digital Twin-Enabled Intelligent Transportation</em> has been accepted by <em>IEEE Transactions on Intelligent Transportation Systems</em>.",
      bodyHtmlZh:
        "<strong>熊浩同学</strong>的论文 <em>Latency-Freshness-Aware Vehicular Edge Computing for Digital Twin-Enabled Intelligent Transportation</em> 已被 <em>IEEE Transactions on Intelligent Transportation Systems</em> 接收。",
      summaryHtml:
        "<strong>Mr. Hao Xiong</strong> reports a new acceptance for digital twin-enabled vehicular edge computing.",
      summaryHtmlZh:
        "<strong>熊浩同学</strong>在数字孪生赋能车联网边缘计算方向获得新的论文接收。",
      displayDate: "Mar 2026",
      displayDateZh: "2026年3月",
      sortDate: "2026-03-20",
      homepageVisual: {
        type: "art-image",
        src: "./assets/news/TITS.jpg",
        alt: "IEEE Transactions on Intelligent Transportation Systems homepage screenshot",
        altZh: "IEEE Transactions on Intelligent Transportation Systems 页面截图"
      },
      image: {
        src: "./assets/news/TITS.jpg",
        alt: "IEEE Transactions on Intelligent Transportation Systems homepage screenshot",
        altZh: "IEEE Transactions on Intelligent Transportation Systems 页面截图"
      },
      searchText:
        "hao xiong ieee transactions on intelligent transportation systems latency freshness vehicular edge computing digital twin accepted paper",
      searchTextZh:
        "熊浩 TITS 接收 车联网 边缘计算 数字孪生 智能交通"
    },
    {
      id: "news-publication-tmlcn",
      type: "news",
      category: "publication",
      categoryLabel: "Publication",
      categoryLabelZh: "论文动态",
      title: "Major Revision for Multi-Agent Communication Learning Paper",
      titleZh: "多智能体通信学习论文获得大修",
      bodyHtml:
        "<strong>Ms. Xinren Zhang</strong> received a major revision decision for <em>Learning Efficient Communication Protocols for Multi-Agent Reinforcement Learning</em> from <em>IEEE Transactions on Machine Learning in Communications and Networking</em>.",
      bodyHtmlZh:
        "<strong>张馨仁同学</strong>的论文 <em>Learning Efficient Communication Protocols for Multi-Agent Reinforcement Learning</em> 在 <em>IEEE Transactions on Machine Learning in Communications and Networking</em> 获得大修意见。",
      summaryHtml:
        "<strong>Ms. Xinren Zhang</strong> received a major revision for a paper on efficient communication protocols in multi-agent reinforcement learning.",
      summaryHtmlZh:
        "<strong>张馨仁同学</strong>关于多智能体强化学习高效通信协议的论文获得大修。",
      displayDate: "Mar 2026",
      displayDateZh: "2026年3月",
      sortDate: "2026-03-12",
      image: {
        src: "./assets/news/TMLCN.jpg",
        alt: "IEEE Transactions on Machine Learning in Communications and Networking journal graphic",
        altZh: "IEEE Transactions on Machine Learning in Communications and Networking 期刊图示"
      },
      searchText:
        "xinren zhang machine learning in communications and networking major revision multi-agent communication protocols reinforcement learning",
      searchTextZh:
        "张馨仁 大修 多智能体 通信协议 强化学习 TMLCN"
    },
    {
      id: "news-publication-tmc",
      type: "news",
      category: "publication",
      categoryLabel: "Publication",
      categoryLabelZh: "论文动态",
      title: "Paper Accepted by IEEE Transactions on Mobile Computing",
      titleZh: "论文被 IEEE Transactions on Mobile Computing 接收",
      bodyHtml:
        "<strong>Ms. Jianing Zheng</strong> reports that <em>Scheduling and Fusion for Multimodal Federated Learning in Energy-constrained Wireless Networks</em> has been accepted by <em>IEEE Transactions on Mobile Computing</em>.",
      bodyHtmlZh:
        "<strong>郑佳宁同学</strong>的论文 <em>Scheduling and Fusion for Multimodal Federated Learning in Energy-constrained Wireless Networks</em> 已被 <em>IEEE Transactions on Mobile Computing</em> 接收。",
      summaryHtml:
        "<strong>Ms. Jianing Zheng</strong> reports an acceptance on multimodal federated learning in energy-constrained wireless networks.",
      summaryHtmlZh:
        "<strong>郑佳宁同学</strong>在能量受限无线网络中的多模态联邦学习方向获得新的论文接收。",
      displayDate: "Sep 2025",
      displayDateZh: "2025年9月",
      sortDate: "2025-09-08",
      image: {
        src: "./assets/news/TMC.jpg",
        alt: "IEEE Transactions on Mobile Computing journal graphic",
        altZh: "IEEE Transactions on Mobile Computing 期刊图示"
      },
      searchText:
        "jianing zheng ieee transactions on mobile computing multimodal federated learning energy constrained wireless networks accepted paper",
      searchTextZh:
        "郑佳宁 TMC 接收 多模态 联邦学习 能量受限 无线网络"
    },
    {
      id: "news-media-jituo-interview",
      type: "news",
      category: "media",
      categoryLabel: "Media",
      categoryLabelZh: "媒体报道",
      title: "Dr. Jiadong Yu Shared What She Looks for in Prospective Students in a Jituo Forum Interview",
      titleZh: "于佳冬博士在寄托天下论坛采访中分享对未来学生的期待",
      bodyHtml:
        "<strong>Dr. Jiadong Yu</strong> was interviewed by <em>Jituo Forum</em> and asked what qualities she hopes to see in prospective students. She highlighted <strong>curiosity</strong>, <strong>execution</strong>, and <strong>resilience</strong> as the traits she values most.",
      bodyHtmlZh:
        "<strong>于佳冬博士</strong>接受了 <em>寄托天下论坛</em> 采访，分享她最看重未来学生的哪些特质。她特别强调了 <strong>好奇心</strong>、<strong>执行力</strong> 与 <strong>韧性</strong>。",
      summaryHtml:
        "In a Jituo Forum interview, Dr. Jiadong Yu shared that she values curiosity, execution, and resilience in prospective students.",
      summaryHtmlZh:
        "在寄托天下论坛采访中，于佳冬博士表示她最看重未来学生的好奇心、执行力与韧性。",
      displayDate: "19 Aug 2025",
      displayDateZh: "2025年8月19日",
      sortDate: "2025-08-19",
      link: "https://weixin.qq.com/sph/AAr5v9a3f5",
      image: {
        src: "./assets/news/jituo.jpg",
        alt: "Jituo Forum interview coverage featuring Dr. Jiadong Yu",
        altZh: "寄托天下论坛对于佳冬博士的采访报道"
      },
      searchText:
        "dr jiadong yu jituo forum interview prospective students curiosity execution resilience media coverage april 20 2026",
      searchTextZh:
        "于佳冬 寄托天下论坛 采访 学生 好奇心 执行力 韧性 媒体报道"
    },
    {
      id: "news-media-joint-lab-forum",
      type: "news",
      category: "media",
      categoryLabel: "Media",
      categoryLabelZh: "媒体报道",
      title: "Dr. Jiadong Yu Delivered a Forum Talk at the HKUST(GZ)-Diandong Joint Laboratory Event",
      titleZh: "于佳冬博士在港科大（广州）- 点动联合实验室活动中作论坛报告",
      bodyHtml:
        "In the featured report, <strong>Dr. Jiadong Yu</strong> introduced the group's work on scheduling heterogeneous computing resources for data centers, guided by the vision of making compute as accessible and on-demand as electricity.",
      bodyHtmlZh:
        "在专题报道中，<strong>于佳冬博士</strong>介绍了团队在数据中心异构计算资源调度方面的研究工作，并分享了“让算力像电力一样可获得、可按需使用”的愿景。",
      summaryHtml:
        "A featured media report highlighted the group's vision for on-demand heterogeneous computing.",
      summaryHtmlZh:
        "专题媒体报道介绍了团队关于按需异构算力的研究愿景。",
      displayDate: "8 Sep 2025",
      displayDateZh: "2025年9月8日",
      sortDate: "2025-09-08",
      link: "https://mp.weixin.qq.com/s/288UUs9USw-S1FGN5Nji5Q",
      image: {
        src: "./assets/news/joint-lab-report.jpg",
        alt: "Dr. Jiadong Yu speaking at the HKUST(GZ)-Diandong joint laboratory event",
        altZh: "于佳冬博士在港科大（广州）- 点动联合实验室活动中发言"
      },
      searchText:
        "dr jiadong yu diandong joint laboratory media coverage data center heterogeneous computing resources",
      searchTextZh:
        "于佳冬 点动 联合实验室 媒体报道 数据中心 异构计算 资源调度"
    }
  ];

  const EVENT_ITEMS = [
    {
      id: "event-quanzhun-visit",
      type: "event",
      category: "recent-activity",
      categoryLabel: "Recent Activity",
      categoryLabelZh: "近期活动",
      title: "Visit to Guangdong Quanzhun Intelligent Technology Co., Ltd.",
      titleZh: "走访广东泉准智能科技有限公司",
      bodyHtml:
        "On <strong>11 March 2026</strong>, <strong>Dr. Jiadong Yu</strong>, <strong>Mr. Ziru Zhang</strong>, and <strong>Ms. Xuling Zhang</strong> visited <em>Guangdong Quanzhun Intelligent Technology Co., Ltd.</em>. During the visit, the team toured the company's production line and discussed potential collaboration opportunities and a shared long-term vision.",
      bodyHtmlZh:
        "在 <strong>2026 年 3 月 11 日</strong>，<strong>于佳冬博士</strong>、<strong>张子儒同学</strong>和 <strong>张栩棱同学</strong>走访了 <em>广东泉准智能科技有限公司</em>。团队参观了企业生产线，并围绕潜在合作机会与长期共同愿景进行了交流。",
      summaryHtml:
        "The team visited Guangdong Quanzhun Intelligent Technology Co., Ltd., toured its production line, and discussed future collaboration opportunities.",
      summaryHtmlZh:
        "团队走访广东泉准智能科技有限公司，参观生产线并交流未来合作机会。",
      displayDate: "11 Mar 2026",
      displayDateZh: "2026年3月11日",
      sortDate: "2026-03-11",
      images: [
        {
          src: "./assets/events/quanzhun.jpg",
          alt: "EXTEND Lab members visiting Guangdong Quanzhun Intelligent Technology Co., Ltd.",
          altZh: "EXTEND Lab 成员走访广东泉准智能科技有限公司"
        }
      ],
      searchText:
        "jiadong yu ziru zhang xuling zhang guangdong quanzhun intelligent technology company visit production line collaboration vision march 11 2026",
      searchTextZh:
        "于佳冬 张子儒 张栩棱 广东泉准智能科技 走访 生产线 合作 2026年3月11日"
    },
    {
      id: "event-openclaw-ai-agent",
      type: "event",
      category: "extend-sharing",
      categoryLabel: "EXTEND Sharing",
      categoryLabelZh: "展开讲讲",
      title: "EXTEND Sharing: OpenClaw and AI Agent",
      titleZh: "展开讲讲：OpenClaw 与 AI Agent",
      bodyHtml:
        "We organized an EXTEND Sharing Session featuring Dr. Jiadong Yu and Mr. Jiale Li. The session covered the fundamentals of AI agents and OpenClaw, plus practical reflections on using tools such as Claude Code in everyday research workflows.",
      bodyHtmlZh:
        "我们组织了一场由于佳冬博士与李佳乐同学主讲的“展开讲讲”活动，介绍 AI Agent 与 OpenClaw 的基础内容，并交流了将 Claude Code 等工具用于日常科研流程的实践体会。",
      summaryHtml:
        "An internal sharing session on AI agents, OpenClaw, and practical tooling for everyday research workflows.",
      summaryHtmlZh:
        "一场聚焦 AI Agent、OpenClaw 以及日常科研工具实践的“展开讲讲”活动。",
      displayDate: "20 Mar 2026",
      displayDateZh: "2026年3月20日",
      sortDate: "2026-03-20",
      images: [
        {
          src: "./assets/events/extendclaw.jpg",
          alt: "Participants at the EXTEND Sharing Session",
          altZh: "“展开讲讲”活动现场"
        }
      ],
      searchText:
        "extend sharing openclaw ai agent jiale li tools claude code internal sharing session",
      searchTextZh:
        "展开讲讲 OpenClaw AI Agent 李佳乐 Claude Code 工具 科研工作流"
    }
  ];

  const STATIC_SEARCH_INDEX = [
    {
      title: "About EXTEND Lab",
      titleZh: "关于 EXTEND Lab",
      url: "about/",
      category: "About",
      categoryZh: "关于",
      text: "mission values break boundaries unlock possibilities reinforcement learning multi-agent systems robotics embodied intelligence",
      textZh: "使命 价值观 打破边界 无限可能 强化学习 多智能体系统 机器人 具身智能"
    },
    {
      title: "Research: Multi-Agent Systems",
      titleZh: "研究：多智能体系统",
      url: "research/",
      category: "Research",
      categoryZh: "研究",
      text: "multi-agent systems collaborative competitive intelligence cyber-physical tasks",
      textZh: "多智能体系统 协作 竞争 智能 信息物理 任务"
    },
    {
      title: "Research: Robotic/Embodied AI",
      titleZh: "研究：机器人 / 具身智能",
      url: "research/",
      category: "Research",
      categoryZh: "研究",
      text: "robotic embodied ai perception adaptation dynamic environments",
      textZh: "机器人 具身智能 感知 适应 动态环境"
    },
    {
      title: "Research: Simulation-to-Reality RL",
      titleZh: "研究：仿真到现实强化学习",
      url: "research/",
      category: "Research",
      categoryZh: "研究",
      text: "simulation to reality reinforcement learning physical deployment training environments",
      textZh: "仿真到现实 强化学习 物理部署 训练环境"
    },
    {
      title: "Research: Edge Intelligence and Wireless Systems",
      titleZh: "研究：边缘智能与无线系统",
      url: "research/",
      category: "Research",
      categoryZh: "研究",
      text: "edge intelligence wireless systems resource allocation communications intelligent infrastructure",
      textZh: "边缘智能 无线系统 资源分配 通信 智能基础设施"
    },
    {
      title: "Projects",
      titleZh: "项目",
      url: "projects/",
      category: "Projects",
      categoryZh: "项目",
      text: "funded projects grants sponsored collaborations bristol guangdong diandong blockchain smart factories",
      textZh: "资助项目 合作 布里斯托 广东 点动 区块链 智能工厂"
    },
    {
      title: "People",
      titleZh: "成员",
      url: "people/",
      category: "People",
      categoryZh: "成员",
      text: "jiadong yu hao xiong xinren zhang jianing zheng yulong zhang guangzhi zhu nianfu wang phd mphil visiting students",
      textZh: "于佳冬 熊浩 张馨仁 郑佳宁 张育龙 张子儒 张栩棱 李佳乐 朱光智 王年福 博士生 硕士 访问学生"
    },
    {
      title: "Publications",
      titleZh: "论文",
      url: "publications/",
      category: "Publications",
      categoryZh: "论文",
      text: "journal articles conference papers ieee twc tmc tits wireless communications internet of things",
      textZh: "期刊论文 会议论文 IEEE TWC TMC TITS 无线通信 物联网"
    },
    {
      title: "Collaborate",
      titleZh: "合作",
      url: "support/",
      category: "Collaborate",
      categoryZh: "合作",
      text: "collaboration funding partners graduate students undergraduate students visiting phd scholars application materials",
      textZh: "合作 资助伙伴 研究生 本科生 访问博士 学者 申请材料"
    }
  ];

  function getLanguage() {
    if (
      typeof window !== "undefined" &&
      window.EXTEND_I18N &&
      typeof window.EXTEND_I18N.getLanguage === "function"
    ) {
      return window.EXTEND_I18N.getLanguage();
    }

    return "en";
  }

  function t(key, params, fallback) {
    if (
      typeof window !== "undefined" &&
      window.EXTEND_I18N &&
      typeof window.EXTEND_I18N.t === "function"
    ) {
      return window.EXTEND_I18N.t(key, params, fallback);
    }

    return fallback !== undefined ? fallback : key;
  }

  function getLocalizedValue(item, key) {
    const language = getLanguage();
    if (language === "zh" && item && item[`${key}Zh`]) {
      return item[`${key}Zh`];
    }

    return item ? item[key] : "";
  }

  function getLocalizedImageAlt(image) {
    if (!image) return "";
    if (getLanguage() === "zh" && image.altZh) return image.altZh;
    return image.alt || "";
  }

  function getSearchText(value, zhValue) {
    return [value, zhValue].filter(Boolean).join(" ");
  }

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
    const newsLabel = t("content.newsLabel", {}, "News");
    const eventsLabel = t("content.eventsLabel", {}, "Events");
    const contentItems = [
      ...getNewsItems().map((item) => ({
        title: `${newsLabel}: ${getLocalizedValue(item, "title")}`,
        url: `news/#${item.id}`,
        category: newsLabel,
        text: `${stripHtml(item.bodyHtml)} ${stripHtml(item.bodyHtmlZh)} ${getSearchText(item.searchText, item.searchTextZh)}`
      })),
      ...getEventItems().map((item) => ({
        title: `${eventsLabel}: ${getLocalizedValue(item, "title")}`,
        url: `events/#${item.id}`,
        category: eventsLabel,
        text: `${stripHtml(item.bodyHtml)} ${stripHtml(item.bodyHtmlZh)} ${getSearchText(item.searchText, item.searchTextZh)}`
      }))
    ];

    const staticItems = STATIC_SEARCH_INDEX.map((item) => ({
      title: getLocalizedValue(item, "title"),
      url: item.url,
      category: getLocalizedValue(item, "category"),
      text: getSearchText(item.text, item.textZh)
    }));

    return [...staticItems, ...contentItems];
  }

  function renderHomepageVisual(item) {
    if (item.homepageVisual && item.homepageVisual.type === "art-image") {
      return `
        <div class="homepage-update-art homepage-update-art-image">
          <img src="${item.homepageVisual.src}" alt="${escapeHtml(getLocalizedImageAlt(item.homepageVisual))}" class="homepage-update-art-image-asset">
        </div>
      `;
    }

    const image = item.image || (item.images && item.images[0]);
    if (!image) return "";

    return `<img src="${image.src}" alt="${escapeHtml(getLocalizedImageAlt(image))}" class="news-card-image">`;
  }

  function renderEditorialCardVisual(item) {
    const visual =
      (item.homepageVisual && item.homepageVisual.type === "art-image" && item.homepageVisual) ||
      item.image;

    if (!visual) return "";

    return `
      <div class="homepage-update-art homepage-update-art-image">
        <img src="${visual.src}" alt="${escapeHtml(getLocalizedImageAlt(visual))}" class="homepage-update-art-image-asset">
      </div>
    `;
  }

  function renderHomepageCard(item) {
    const title = getLocalizedValue(item, "title");
    const summaryHtml = getLocalizedValue(item, "summaryHtml") || getLocalizedValue(item, "bodyHtml");
    const displayDate = getLocalizedValue(item, "displayDate");
    const label =
      item.type === "event"
        ? `${t("content.eventsLabel", {}, "Events")} · ${getLocalizedValue(item, "categoryLabel")}`
        : `${t("content.newsLabel", {}, "News")} · ${getLocalizedValue(item, "categoryLabel")}`;

    return `
      <a href="${getItemUrl(item)}" class="homepage-update-link">
        <article class="news-card homepage-update-card">
          ${renderHomepageVisual(item)}
          <div class="news-card-body">
            <p class="homepage-update-label">${label}</p>
            <p class="homepage-update-meta">${displayDate}</p>
            <h3 class="news-card-title">${title}</h3>
            <p class="news-card-text">${summaryHtml}</p>
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
        <div class="homepage-highlights-dots" data-role="dots" aria-label="${escapeHtml(
          t("content.highlightNavigation", {}, "Highlight navigation")
        )}"></div>
      </section>
    `;
  }

  function renderNewsCard(item, hidden, section) {
    const hiddenAttrs = hidden ? ' hidden data-archive-hidden="true"' : ' data-archive-hidden="false"';
    const useImageCards = section && section.dataset.cardStyle === "image";
    const useEditorialArt = useImageCards && item.category === "publication";
    const title = getLocalizedValue(item, "title");
    const bodyHtml = getLocalizedValue(item, "bodyHtml");
    const displayDate = getLocalizedValue(item, "displayDate");

    if (item.category === "publication" && !useImageCards) {
      return `
        <article class="news-card news-card-textonly" id="${item.id}"${hiddenAttrs}>
          <div class="news-card-body">
            <h3 class="news-card-title">${title}</h3>
            <p class="news-card-text">${bodyHtml}</p>
            <p class="news-card-date">${displayDate}</p>
          </div>
        </article>
      `;
    }

    const linkedTitle = item.link
      ? `<a href="${item.link}" target="_blank" rel="noopener">${title}</a>`
      : title;
    const image = useEditorialArt
      ? renderEditorialCardVisual(item)
      : item.image
      ? `
        ${item.link
          ? `<a href="${item.link}" target="_blank" rel="noopener" class="news-card-image-link"><img src="${item.image.src}" alt="${escapeHtml(getLocalizedImageAlt(item.image))}" class="news-card-image"></a>`
          : `<div class="news-card-image-link"><img src="${item.image.src}" alt="${escapeHtml(getLocalizedImageAlt(item.image))}" class="news-card-image"></div>`}
      `
      : "";

    return `
      <article class="news-card" id="${item.id}"${hiddenAttrs}>
        ${image}
        <div class="news-card-body">
          <h3 class="news-card-title">${linkedTitle}</h3>
          <p class="news-card-text">${bodyHtml}</p>
          <p class="news-card-date">${displayDate}</p>
        </div>
      </article>
    `;
  }

  function renderEventCard(item, hidden) {
    const hiddenAttrs = hidden ? ' hidden data-archive-hidden="true"' : ' data-archive-hidden="false"';
    const images = item.images || [];
    const displayDate = getLocalizedValue(item, "displayDate");
    const title = getLocalizedValue(item, "title");
    const bodyHtml = getLocalizedValue(item, "bodyHtml");
    const mediaClass =
      images.length > 1 ? "event-feature-media" : "event-feature-media event-feature-media-single";
    const mediaMarkup = images
      .map(
        (image) =>
          `<img src="${image.src}" alt="${escapeHtml(getLocalizedImageAlt(image))}" class="event-feature-image">`
      )
      .join("");

    return `
      <article class="event-feature-card" id="${item.id}"${hiddenAttrs}>
        <div class="${mediaClass}">${mediaMarkup}</div>
        <div class="event-feature-body">
          <p class="event-feature-date">${displayDate}</p>
          <h3 class="event-feature-title">${title}</h3>
          <p class="event-feature-text">${stripHtml(bodyHtml)}</p>
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
      button.textContent = expanded
        ? t("archive.showLess", {}, "Show Less")
        : t("archive.findMore", {}, "Find More");
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
        actions.innerHTML = `<a class="btn-action archive-toggle-button" href="${section.dataset.findMoreUrl}">${t(
          "archive.findMore",
          {},
          "Find More"
        )}</a>`;
      } else {
        actions.innerHTML =
          items.length > limit
            ? `<button type="button" class="btn-action archive-toggle-button" aria-expanded="false">${t(
                "archive.findMore",
                {},
                "Find More"
              )}</button>`
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
      let pressedLink = null;
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
                aria-label="${escapeHtml(
                  t("content.highlightSet", { index: index + 1 }, `Show highlight set ${index + 1}`)
                )}"
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
        pressedLink = event.target.closest(".homepage-update-link");
        dragStartX = event.clientX;
        dragStartScrollLeft = viewport.scrollLeft;
        dragDistance = 0;
        rail.dataset.dragging = "true";
        rail.dataset.dragMoved = "false";
        viewport.setPointerCapture(pointerId);
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
        const shouldNavigate = dragDistance <= 8 && pressedLink;
        pointerId = null;
        pressedLink = null;
        rail.dataset.dragging = "false";
        window.setTimeout(() => {
          rail.dataset.dragMoved = dragDistance > 8 ? "true" : "false";
        }, 0);
        snapToNearest();
        if (shouldNavigate) {
          window.location.assign(shouldNavigate.href);
        }
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

    window.requestAnimationFrame(() => {
      target.scrollIntoView({
        block: "start",
        behavior: "auto"
      });
    });

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
    window.addEventListener("extend:languagechange", () => {
      renderHomepage();
      initHomepageHighlightsRail();
      renderNewsPage();
      renderEventsPage();
      revealHashTarget();
    });
  });
})();
