(function () {
  const NEWS_ITEMS = [
    {
      id: "news-publication-rlc-2026",
      type: "news",
      category: "publication",
      categoryLabel: "Publication",
      categoryLabelZh: "论文动态",
      title: "Paper Accepted by RLC 2026",
      titleZh: "论文被 RLC 2026 强化学习会议接收",
      bodyHtml:
        "<strong>Ms. Xinren Zhang</strong>'s conference paper, Learning Multi-Agent Communication Protocol: Study on Information Entropy Efficiency in MARL, has been accepted by RLC 2026 (Reinforcement Learning Conference).",
      bodyHtmlZh:
        "<strong>张馨仁</strong>的会议论文 Learning Multi-Agent Communication Protocol: Study on Information Entropy Efficiency in MARL 已被 RLC 2026（强化学习会议）接收。",
      summaryHtml:
        "<strong>Ms. Xinren Zhang</strong>'s work on information entropy efficiency in multi-agent communication has been accepted by RLC 2026.",
      summaryHtmlZh:
        "<strong>张馨仁</strong>关于多智能体通信中信息熵效率的研究被 RLC 2026 接收。",
      displayDate: "6 May 2026",
      displayDateZh: "2026年5月6日",
      sortDate: "2026-05-06",
      homepageVisual: {
        type: "art-image",
        src: "./assets/news/RLC.jpg",
        alt: "RLC 2026 conference visual",
        altZh: "RLC 2026 会议配图"
      },
      image: {
        src: "./assets/news/RLC.jpg",
        alt: "RLC 2026 conference visual",
        altZh: "RLC 2026 会议配图"
      },
      searchText:
        "xinren zhang rlc 2026 reinforcement learning conference learning multi-agent communication protocol information entropy efficiency marl accepted paper",
      searchTextZh:
        "张馨仁 RLC 2026 强化学习会议 多智能体 通信协议 信息熵 效率 MARL 论文 接收"
    },
    {
      id: "news-publication-icc-2026-travel-grant",
      type: "news",
      category: "publication",
      categoryLabel: "Publication",
      categoryLabelZh: "论文动态",
      title: "Ms. Jianing Zheng Receives ICC 2026 Student Travel Grant",
      titleZh: "郑佳宁获 ICC 2026 Student Travel Grant",
      bodyHtml:
        "<strong>Ms. Jianing Zheng</strong> received the ICC 2026 Student Travel Grant. Her paper, Maximizing Personalized Energy-efficiency for Swarm Learning in 6G Networks, will be presented on 25 May 2026 in Glasgow, Scotland, UK.",
      bodyHtmlZh:
        "<strong>郑佳宁</strong>获得了 ICC 2026 Student Travel Grant。她的论文 Maximizing Personalized Energy-efficiency for Swarm Learning in 6G Networks 将于 <strong>2026 年 5 月 25 日</strong> 在英国苏格兰格拉斯哥宣讲。",
      summaryHtml:
        "<strong>Ms. Jianing Zheng</strong> received the ICC 2026 Student Travel Grant for her work on personalized energy efficiency in swarm learning for 6G networks.",
      summaryHtmlZh:
        "<strong>郑佳宁</strong>因其关于 6G 群体学习个性化能效的研究，获得 ICC 2026 学生差旅资助。",
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
        "<strong>Mr. Hao Xiong</strong> reports that Latency-Freshness-Aware Vehicular Edge Computing for Digital Twin-Enabled Intelligent Transportation has been accepted by IEEE Transactions on Intelligent Transportation Systems.",
      bodyHtmlZh:
        "<strong>熊浩</strong>的论文 Latency-Freshness-Aware Vehicular Edge Computing for Digital Twin-Enabled Intelligent Transportation 已被 IEEE Transactions on Intelligent Transportation Systems 接收。",
      summaryHtml:
        "<strong>Mr. Hao Xiong</strong> reports a new acceptance for digital twin-enabled vehicular edge computing.",
      summaryHtmlZh:
        "<strong>熊浩</strong>在数字孪生赋能车联网边缘计算方向获得新的论文接收。",
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
        "<strong>Ms. Xinren Zhang</strong> received a major revision decision for Learning Efficient Communication Protocols for Multi-Agent Reinforcement Learning from IEEE Transactions on Machine Learning in Communications and Networking.",
      bodyHtmlZh:
        "<strong>张馨仁</strong>的论文 Learning Efficient Communication Protocols for Multi-Agent Reinforcement Learning 在 IEEE Transactions on Machine Learning in Communications and Networking 获得大修意见。",
      summaryHtml:
        "<strong>Ms. Xinren Zhang</strong> received a major revision for a paper on efficient communication protocols in multi-agent reinforcement learning.",
      summaryHtmlZh:
        "<strong>张馨仁</strong>关于多智能体强化学习高效通信协议的论文获得大修。",
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
        "<strong>Ms. Jianing Zheng</strong> reports that Scheduling and Fusion for Multimodal Federated Learning in Energy-constrained Wireless Networks has been accepted by IEEE Transactions on Mobile Computing.",
      bodyHtmlZh:
        "<strong>郑佳宁</strong>的论文 Scheduling and Fusion for Multimodal Federated Learning in Energy-constrained Wireless Networks 已被 IEEE Transactions on Mobile Computing 接收。",
      summaryHtml:
        "<strong>Ms. Jianing Zheng</strong> reports an acceptance on multimodal federated learning in energy-constrained wireless networks.",
      summaryHtmlZh:
        "<strong>郑佳宁</strong>在能量受限无线网络中的多模态联邦学习方向获得新的论文接收。",
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
      id: "news-media-tei-seminar-coverage",
      type: "news",
      category: "media",
      categoryLabel: "Media",
      categoryLabelZh: "媒体报道",
      title: "Towards Edge Intelligence Seminar Successfully Held",
      titleZh: "学术交流 | Towards Edge Intelligence 研讨会圆满举办",
      bodyHtml:
        "A featured report from <strong>HKUST(GZ) IoT Thrust</strong> covered the 1st <strong>Towards Edge Intelligence Seminar</strong>, jointly advanced by the University of Bristol and HKUST(GZ), highlighting academic exchange around edge intelligence, multi-agent systems, and intelligent infrastructure.",
      bodyHtmlZh:
        "<strong>港科大广州物联网学域</strong>报道了首届 <strong>Towards Edge Intelligence Seminar</strong>。活动由布里斯托大学与港科大（广州）联合推进，聚焦边缘智能、多智能体系统与智能基础设施的学术交流。",
      summaryHtml:
        "HKUST(GZ) IoT Thrust reported on the University of Bristol and HKUST(GZ)'s joint Towards Edge Intelligence seminar.",
      summaryHtmlZh:
        "港科大广州物联网学域报道了布里斯托大学与港科大（广州）联合推进的 Towards Edge Intelligence 学术交流活动。",
      displayDate: "2 Jun 2026",
      displayDateZh: "2026年6月2日",
      sortDate: "2026-06-02",
      link: "https://mp.weixin.qq.com/s/4ZTzrjNKdZJ7XHfzzcpTqA",
      image: {
        src: "./assets/news/tei-seminar-media.jpg",
        alt: "Media coverage of the Towards Edge Intelligence Seminar",
        altZh: "Towards Edge Intelligence 研讨会媒体报道封面"
      },
      searchText:
        "towards edge intelligence seminar successfully held hkust gz iot thrust university of bristol academic exchange edge intelligence multi-agent systems intelligent infrastructure media coverage",
      searchTextZh:
        "Towards Edge Intelligence 研讨会 圆满举办 港科大广州 物联网学域 布里斯托大学 学术交流 边缘智能 多智能体系统 智能基础设施 媒体报道"
    },
    {
      id: "news-media-guangdong-iot-association-visit",
      type: "news",
      category: "media",
      categoryLabel: "Media",
      categoryLabelZh: "媒体报道",
      title: "Guangdong Internet of Things Association Visited HKUST(GZ) for Exchange",
      titleZh: "广东省物联网协会来港科大（广州）参观交流",
      bodyHtml:
        "A featured report covered the <strong>Guangdong Internet of Things Association</strong>'s visit to <strong>HKUST(GZ)</strong> for exchange. During the visit, Dr. Jiadong Yu introduced <strong>EXTEND Lab</strong>'s recent research outcomes and project progress.",
      bodyHtmlZh:
        "专题报道介绍了<strong>广东省物联网协会</strong>来访<strong>港科大（广州）</strong>参观交流的活动。交流期间，于佳冬博士介绍了 <strong>EXTEND Lab</strong> 的近期研究成果与项目进展。",
      summaryHtml:
        "A media report highlighted Guangdong Internet of Things Association's visit to HKUST(GZ) and Dr. Jiadong Yu's introduction of EXTEND Lab's recent work.",
      summaryHtmlZh:
        "媒体报道介绍了广东省物联网协会来港科大（广州）参观交流，以及于佳冬博士对 EXTEND Lab 近期工作的分享。",
      displayDate: "26 Apr 2026",
      displayDateZh: "2026年4月26日",
      sortDate: "2026-04-26",
      link: "https://mp.weixin.qq.com/s/xwyuhbr4OYw4A_ay2al6lg",
      image: {
        src: "./assets/news/guangdong.jpg",
        alt: "Guangdong Internet of Things Association visit to HKUST(GZ)",
        altZh: "广东省物联网协会来港科大（广州）参观交流"
      },
      searchText:
        "guangdong internet of things association visit hkust gz exchange dr jiadong yu extend lab recent research outcomes project progress media coverage",
      searchTextZh:
        "广东省物联网协会 港科大广州 参观交流 于佳冬 EXTEND Lab 近期研究成果 项目进展 媒体报道"
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
      id: "event-cambridge-visit",
      type: "event",
      category: "recent-activity",
      categoryLabel: "Recent Activity",
      categoryLabelZh: "近期活动",
      title: "EXTEND Lab Visits the University of Cambridge",
      titleZh: "EXTEND Lab 拜访剑桥大学",
      bodyHtml:
        "On 30-31 May 2026, EXTEND Lab visited the University of Cambridge, hosted by Dr. Guangming Wang from the University of Cambridge. Dr. Wang first guided the team through the Civil Engineering Building in West Cambridge and introduced the building robotic arm inside. The team then visited Trinity College before having dinner at The Eagle Pub, the historic pub where the discovery of the DNA helical structure was announced. On the second day, EXTEND Lab attended a formal dinner at Queens' College.",
      bodyHtmlZh:
        "2026 年 5 月 30 日至 31 日，EXTEND Lab 拜访剑桥大学，并由剑桥大学 Dr. Guangming Wang 接待。Dr. Wang 首先带领团队参观了位于 West Cambridge 的 Civil Engineering Building，并介绍了楼内的建筑机械臂。随后，团队参观了 Trinity College，并在 The Eagle Pub 用晚餐；这里也是宣布发现 DNA 螺旋结构的历史性酒吧。第二天，EXTEND Lab 参加了 Queens' College 的 formal dinner。",
      summaryHtml:
        "EXTEND Lab visited the University of Cambridge, toured the Civil Engineering Building and Trinity College with Dr. Guangming Wang, and joined dinners at The Eagle Pub and Queens' College.",
      summaryHtmlZh:
        "EXTEND Lab 拜访剑桥大学，在 Dr. Guangming Wang 接待下参观 Civil Engineering Building 与 Trinity College，并前往 The Eagle Pub 和 Queens' College 晚宴。",
      displayDate: "30-31 May 2026",
      displayDateZh: "2026年5月30-31日",
      sortDate: "2026-05-31",
      galleryPreview: {
        modalId: "cambridgeVisitGalleryModal",
        hint: "Open photo gallery",
        hintZh: "打开照片墙"
      },
      images: [
        {
          src: "./assets/events/cambridge/EXTEND_at_Queen's_College.jpg",
          alt: "EXTEND Lab at Queens' College, University of Cambridge",
          altZh: "EXTEND Lab 在剑桥大学 Queens' College"
        }
      ],
      galleryImages: [
        {
          src: "./assets/events/cambridge/EXTEND_at_Queen's_College.jpg",
          alt: "EXTEND Lab at Queens' College, University of Cambridge",
          altZh: "EXTEND Lab 在剑桥大学 Queens' College",
          caption: "EXTEND Lab at Queens' College, University of Cambridge.",
          captionZh: "EXTEND Lab 在剑桥大学 Queens' College。"
        },
        {
          src: "./assets/events/cambridge/EXTEND_at_Civil_engineer_buiding_in_west_Cambridge.jpg",
          alt: "EXTEND Lab at the Civil Engineering Building in West Cambridge",
          altZh: "EXTEND Lab 在 West Cambridge 的 Civil Engineering Building",
          caption: "Visit to the Civil Engineering Building in West Cambridge.",
          captionZh: "团队参观 West Cambridge 的 Civil Engineering Building。"
        },
        {
          src: "./assets/events/cambridge/With_DrGuangmingWang_in_Trinity.jpg",
          alt: "EXTEND Lab with Dr. Guangming Wang at Trinity College",
          altZh: "EXTEND Lab 与 Dr. Guangming Wang 在 Trinity College",
          caption: "EXTEND Lab with Dr. Guangming Wang at Trinity College.",
          captionZh: "EXTEND Lab 与 Dr. Guangming Wang 在 Trinity College。"
        },
        {
          src: "./assets/events/cambridge/trinity.jpg",
          alt: "Trinity College, University of Cambridge",
          altZh: "剑桥大学 Trinity College",
          caption: "Visit to Trinity College, University of Cambridge.",
          captionZh: "团队参观剑桥大学 Trinity College。"
        },
        {
          src: "./assets/events/cambridge/trinity_chaple.jpg",
          alt: "Trinity College Chapel",
          altZh: "Trinity College Chapel",
          caption: "Trinity College Chapel.",
          captionZh: "Trinity College Chapel。"
        },
        {
          src: "./assets/events/cambridge/Newton_in_Trinity.jpg",
          alt: "Newton's statue at Trinity College",
          altZh: "Trinity College 内的 Newton 雕像",
          caption: "Newton's statue at Trinity College.",
          captionZh: "Trinity College 内的 Newton 雕像。"
        },
        {
          src: "./assets/events/cambridge/EXTEND_at_the_Eagle.jpg",
          alt: "EXTEND Lab at The Eagle Pub in Cambridge",
          altZh: "EXTEND Lab 在剑桥 The Eagle Pub",
          caption: "Dinner at The Eagle Pub in Cambridge.",
          captionZh: "团队在剑桥 The Eagle Pub 用晚餐。"
        },
        {
          src: "./assets/events/cambridge/EXTEND_at_Queen's_College_Formal_dinner.jpg",
          alt: "EXTEND Lab at the Queens' College formal dinner",
          altZh: "EXTEND Lab 参加 Queens' College formal dinner",
          caption: "EXTEND Lab at the Queens' College formal dinner.",
          captionZh: "EXTEND Lab 参加 Queens' College formal dinner。"
        }
      ],
      searchText:
        "extend lab university of cambridge visit guangming wang civil engineering building west cambridge building robotic arm trinity college the eagle pub dna helical structure queens college formal dinner may 30 31 2026",
      searchTextZh:
        "EXTEND Lab 剑桥大学 拜访 Guangming Wang Civil Engineering Building West Cambridge 建筑机械臂 Trinity College The Eagle Pub DNA 螺旋结构 Queens College formal dinner 2026年5月30日 5月31日"
    },
    {
      id: "event-icc-2026-glasgow",
      type: "event",
      category: "recent-activity",
      categoryLabel: "Recent Activity",
      categoryLabelZh: "近期活动",
      title: "EXTEND Lab at IEEE ICC 2026 in Glasgow",
      titleZh: "EXTEND Lab 参加 IEEE ICC 2026 格拉斯哥会议",
      bodyHtml:
        "EXTEND Lab members participated in IEEE ICC 2026 in Glasgow, UK. Ms. Jianing Zheng presented Maximizing Personalized Energy-efficiency for Swarm Learning in 6G Networks on 25 May 2026. Dr. Jiadong Yu chaired the GCSN-03 session, Energy-aware UAV communications and networking (Oral Presentation), on 26 May 2026. Dr. Yu and Dr. Xiaolan Liu (University of Bristol) also joined the second UK Working Committee meeting of the China Institute of Communications on 24th May. Dr. Yu and Dr. Liu attended the ICC 2026 banquet on 26 May.",
      bodyHtmlZh:
        "EXTEND Lab 成员参加了在英国格拉斯哥举行的 IEEE ICC 2026。郑佳宁于 2026 年 5 月 25 日宣讲论文 Maximizing Personalized Energy-efficiency for Swarm Learning in 6G Networks。于佳冬博士于 2026 年 5 月 26 日主持 GCSN-03 分会场 Energy-aware UAV communications and networking（Oral Presentation）。于佳冬博士和刘小兰博士（University of Bristol）于 5 月 24 日参加了中国通信学会第二届英国工作委员会会议。于佳冬博士和刘小兰博士于 5 月 26 日参加 ICC 2026 晚宴。",
      summaryHtml:
        "EXTEND Lab joined IEEE ICC 2026 in Glasgow, with Jianing Zheng presenting on 25 May and Jiadong Yu chairing GCSN-03 on 26 May.",
      summaryHtmlZh:
        "EXTEND Lab 参加 IEEE ICC 2026 格拉斯哥会议；郑佳宁于 5 月 25 日作报告，于佳冬博士于 5 月 26 日主持 GCSN-03 分会场。",
      displayDate: "24-26 May 2026",
      displayDateZh: "2026年5月24-26日",
      sortDate: "2026-05-26",
      galleryPreview: {
        modalId: "icc2026GalleryModal",
        hint: "Open photo gallery",
        hintZh: "打开照片墙"
      },
      images: [
        {
          src: "./assets/events/icc2026/jianing-presentation-icc2026.jpg",
          alt: "Jianing Zheng presenting at IEEE ICC 2026 in Glasgow",
          altZh: "郑佳宁在 IEEE ICC 2026 格拉斯哥会议作报告",
          caption: "Jianing Zheng presenting at IEEE ICC 2026 on 25 May 2026.",
          captionZh: "郑佳宁于 2026 年 5 月 25 日在 IEEE ICC 2026 作报告。"
        },
        {
          src: "./assets/events/icc2026/jianing-closeup-icc2026.jpg",
          alt: "Jianing Zheng at the IEEE ICC 2026 podium",
          altZh: "郑佳宁在 IEEE ICC 2026 讲台前",
          caption: "Presentation session at IEEE ICC 2026, Glasgow.",
          captionZh: "IEEE ICC 2026 格拉斯哥会议报告现场。"
        },
        {
          src: "./assets/events/icc2026/hao-jianing-xinren-glasgow.jpg",
          alt: "Hao Xiong, Jianing Zheng, and Xinren Zhang in Glasgow",
          altZh: "熊浩、郑佳宁、张馨仁在格拉斯哥",
          caption: "Hao Xiong, Jianing Zheng, and Xinren Zhang in Glasgow.",
          captionZh: "熊浩、郑佳宁、张馨仁在格拉斯哥。"
        },
        {
          src: "./assets/events/icc2026/jianing-hao-xinren-edinburgh.jpg",
          alt: "Jianing Zheng, Hao Xiong, and Xinren Zhang in Edinburgh",
          altZh: "郑佳宁、熊浩、张馨仁在爱丁堡",
          caption: "Jianing Zheng, Hao Xiong, and Xinren Zhang in Edinburgh.",
          captionZh: "郑佳宁、熊浩、张馨仁在爱丁堡。"
        },
        {
          src: "./assets/events/icc2026/chinacom-uk-committee.jpg",
          alt: "Second UK Working Committee meeting of the China Institute of Communications",
          altZh: "中国通信学会第二届英国工作委员会会议合影",
          caption: "Dr. Jiadong Yu and Dr. Xiaolan Liu at the second UK Working Committee meeting of the China Institute of Communications.",
          captionZh: "于佳冬博士与刘小兰博士参加中国通信学会第二届英国工作委员会会议。"
        },
        {
          src: "./assets/events/icc2026/jiadong-xiaolan-icc2026.jpg",
          alt: "Dr. Jiadong Yu and Dr. Xiaolan Liu in Glasgow during ICC 2026",
          altZh: "于佳冬博士和刘小兰博士在 ICC 2026 期间于格拉斯哥合影",
          caption: "Dr. Jiadong Yu and Dr. Xiaolan Liu during ICC 2026 in Glasgow.",
          captionZh: "于佳冬博士和刘小兰博士在 ICC 2026 期间于格拉斯哥合影。"
        }
      ],
      searchText:
        "extend lab ieee icc 2026 glasgow jianing zheng presentation may 25 2026 jiadong yu chair gcsn-03 energy-aware uav communications networking xiaolan liu banquet china institute of communications uk working committee hao xiong xinren zhang edinburgh",
      searchTextZh:
        "EXTEND Lab IEEE ICC 2026 格拉斯哥 郑佳宁 报告 2026年5月25日 于佳冬 主持 GCSN-03 Energy-aware UAV communications networking 刘小兰 晚宴 中国通信学会 英国工作委员会 熊浩 张馨仁 爱丁堡"
    },
    {
      id: "event-tei-seminar-bristol",
      type: "event",
      category: "recent-activity",
      categoryLabel: "Recent Activity",
      categoryLabelZh: "近期活动",
      title: "Co-organize Seminar in University of Bristol.",
      titleZh: "在布里斯托大学联合组织研讨会",
      bodyHtml:
        "EXTEND Lab and Dr. Xiaolan Liu (University of Bristol), from the Smart Internet Lab and Bristol Digital Futures Institute, are co-organizing the 1st Seminar of Towards Edge Intelligence. The seminar theme is Towards Edge Intelligence: context-aware and multi-agent approaches for sensing, computation and communication. The hybrid seminar brings together invited keynote speakers, PhD poster presentations, and networking around edge intelligence, networked AI, and multi-agent systems. For more information, visit <a href=\"https://extend-lab.github.io/TEI/\" target=\"_blank\" rel=\"noopener\">the seminar website</a>.",
      bodyHtmlZh:
        "EXTEND Lab 与刘小兰博士（University of Bristol，Smart Internet Lab 和 Bristol Digital Futures Institute）共同组织首届 Towards Edge Intelligence Seminar。研讨会主题为 Towards Edge Intelligence：面向感知、计算与通信的情境感知和多智能体方法。本次混合研讨会将围绕边缘智能、网络化 AI 与多智能体系统，组织特邀报告、博士生海报展示与学术交流。更多信息请访问 <a href=\"https://extend-lab.github.io/TEI/\" target=\"_blank\" rel=\"noopener\">活动网站</a>。",
      summaryHtml:
        "EXTEND Lab and Dr. Xiaolan Liu from the University of Bristol are co-organizing a hybrid seminar on Towards Edge Intelligence.",
      summaryHtmlZh:
        "EXTEND Lab 与布里斯托大学刘小兰博士共同组织一场聚焦 Towards Edge Intelligence 的混合研讨会。",
      displayDate: "29 May 2026",
      displayDateZh: "2026年5月29日",
      sortDate: "2026-05-29",
      galleryPreview: {
        modalId: "teiSeminarGalleryModal",
        hint: "Open photo gallery",
        hintZh: "打开照片墙"
      },
      posterPreview: {
        modalId: "teiSeminarPosterModal",
        hint: "Click poster to enlarge",
        hintZh: "点击海报查看大图"
      },
      images: [
        {
          src: "./assets/events/tei-seminar/tei-seminar-poster.png",
          alt: "Poster for the 1st Seminar of Towards Edge Intelligence",
          altZh: "首届 Towards Edge Intelligence Seminar 海报"
        }
      ],
      galleryImages: [
        {
          src: "./assets/events/tei-seminar/tei-seminar-photo-01.jpg",
          alt: "Photo from the 1st Seminar of Towards Edge Intelligence",
          altZh: "首届 Towards Edge Intelligence Seminar 现场照片",
          caption: "Photo from the 1st Seminar of Towards Edge Intelligence at the University of Bristol.",
          captionZh: "首届 Towards Edge Intelligence Seminar 布里斯托大学现场照片。"
        },
        {
          src: "./assets/events/tei-seminar/tei-seminar-photo-02.jpg",
          alt: "Photo from the 1st Seminar of Towards Edge Intelligence",
          altZh: "首届 Towards Edge Intelligence Seminar 现场照片",
          caption: "Photo wall from the 1st Seminar of Towards Edge Intelligence.",
          captionZh: "首届 Towards Edge Intelligence Seminar 照片墙。"
        },
        {
          src: "./assets/events/tei-seminar/tei-seminar-photo-03.jpg",
          alt: "Photo from the 1st Seminar of Towards Edge Intelligence",
          altZh: "首届 Towards Edge Intelligence Seminar 现场照片",
          caption: "Seminar exchange and networking at the University of Bristol.",
          captionZh: "布里斯托大学研讨会交流现场。"
        },
        {
          src: "./assets/events/tei-seminar/tei-seminar-photo-04.jpg",
          alt: "Photo from the 1st Seminar of Towards Edge Intelligence",
          altZh: "首届 Towards Edge Intelligence Seminar 现场照片",
          caption: "Participants at the 1st Seminar of Towards Edge Intelligence.",
          captionZh: "首届 Towards Edge Intelligence Seminar 参会现场。"
        },
        {
          src: "./assets/events/tei-seminar/tei-seminar-photo-05.jpg",
          alt: "Photo from the 1st Seminar of Towards Edge Intelligence",
          altZh: "首届 Towards Edge Intelligence Seminar 现场照片",
          caption: "Academic exchange around edge intelligence and multi-agent systems.",
          captionZh: "围绕边缘智能与多智能体系统的学术交流。"
        },
        {
          src: "./assets/events/tei-seminar/tei-seminar-photo-06.jpg",
          alt: "Photo from the 1st Seminar of Towards Edge Intelligence",
          altZh: "首届 Towards Edge Intelligence Seminar 现场照片",
          caption: "Photo from the Towards Edge Intelligence seminar.",
          captionZh: "Towards Edge Intelligence 研讨会现场照片。"
        },
        {
          src: "./assets/events/tei-seminar/tei-seminar-photo-07.jpg",
          alt: "Photo from the 1st Seminar of Towards Edge Intelligence",
          altZh: "首届 Towards Edge Intelligence Seminar 现场照片",
          caption: "Photo from the Towards Edge Intelligence seminar.",
          captionZh: "Towards Edge Intelligence 研讨会现场照片。"
        },
        {
          src: "./assets/events/tei-seminar/tei-seminar-photo-08.jpg",
          alt: "Photo from the 1st Seminar of Towards Edge Intelligence",
          altZh: "首届 Towards Edge Intelligence Seminar 现场照片",
          caption: "Photo from the Towards Edge Intelligence seminar.",
          captionZh: "Towards Edge Intelligence 研讨会现场照片。"
        },
        {
          src: "./assets/events/tei-seminar/tei-seminar-photo-09.jpg",
          alt: "Photo from the 1st Seminar of Towards Edge Intelligence",
          altZh: "首届 Towards Edge Intelligence Seminar 现场照片",
          caption: "Photo from the Towards Edge Intelligence seminar.",
          captionZh: "Towards Edge Intelligence 研讨会现场照片。"
        },
        {
          src: "./assets/events/tei-seminar/tei-seminar-photo-10.jpg",
          alt: "Photo from the 1st Seminar of Towards Edge Intelligence",
          altZh: "首届 Towards Edge Intelligence Seminar 现场照片",
          caption: "Photo from the Towards Edge Intelligence seminar.",
          captionZh: "Towards Edge Intelligence 研讨会现场照片。"
        }
      ],
      searchText:
        "co-organize seminar university of bristol towards edge intelligence seminar xiaolan liu smart internet lab bristol digital futures institute bdfi hkust gz edge intelligence networked ai multi-agent systems may 29 2026",
      searchTextZh:
        "在布里斯托大学联合组织研讨会 Towards Edge Intelligence 研讨会 布里斯托大学 刘小兰 Smart Internet Lab BDFI 香港科技大学广州 边缘智能 网络化AI 多智能体系统 2026年5月29日"
    },
    {
      id: "event-quanzhun-visit",
      type: "event",
      category: "recent-activity",
      categoryLabel: "Recent Activity",
      categoryLabelZh: "近期活动",
      title: "Visit to Guangdong Quanzhun Intelligent Technology Co., Ltd.",
      titleZh: "走访广东泉准智能科技有限公司",
      bodyHtml:
        "On 11 March 2026, Dr. Jiadong Yu, Mr. Ziru Zhang, and Ms. Xuling Zhang visited Guangdong Quanzhun Intelligent Technology Co., Ltd. During the visit, the team toured the company's production line and discussed potential collaboration opportunities and a shared long-term vision.",
      bodyHtmlZh:
        "在 2026 年 3 月 11 日，于佳冬博士、张子儒和张栩棱走访了广东泉准智能科技有限公司。团队参观了企业生产线，并围绕潜在合作机会与长期共同愿景进行了交流。",
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
        "我们组织了一场由于佳冬博士与李佳乐主讲的“展开讲讲”活动，介绍 AI Agent 与 OpenClaw 的基础内容，并交流了将 Claude Code 等工具用于日常科研流程的实践体会。",
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
      text: "funded projects grants sponsored collaborations bristol guangdong diandong blockchain smart factories virtual reality mobile edge intelligence resource allocation",
      textZh: "资助项目 合作 布里斯托 广东 点动 区块链 智能工厂 虚拟现实 移动边缘智能 资源分配"
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
        <article class="news-card homepage-update-card homepage-update-card-${item.type}-${item.category}">
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

  function getEventGalleryImages(item) {
    return item.galleryImages || item.images || [];
  }

  function renderGalleryPreviewMarkup(images, galleryPreview) {
    return `
      <div class="event-gallery-preview-grid">
        ${images
          .slice(0, 4)
          .map(
            (image, index) => `
              <figure class="event-gallery-preview-tile">
                <img src="${image.src}" alt="${escapeHtml(getLocalizedImageAlt(image))}" class="event-feature-image event-gallery-preview-image">
                ${index === 3 && images.length > 4 ? `<span class="event-gallery-more">+${images.length - 4}</span>` : ""}
              </figure>
            `
          )
          .join("")}
      </div>
      <span class="research-poster-hint event-gallery-hint">${escapeHtml(
        getLanguage() === "zh" && galleryPreview.hintZh ? galleryPreview.hintZh : galleryPreview.hint
      )}</span>
    `;
  }

  function renderEventCard(item, hidden) {
    const hiddenAttrs = hidden ? ' hidden data-archive-hidden="true"' : ' data-archive-hidden="false"';
    const images = item.images || [];
    const galleryImages = getEventGalleryImages(item);
    const displayDate = getLocalizedValue(item, "displayDate");
    const title = getLocalizedValue(item, "title");
    const bodyHtml = getLocalizedValue(item, "bodyHtml");
    const galleryPreview = item.galleryPreview && galleryImages.length ? item.galleryPreview : null;
    const posterPreview = item.posterPreview && images[0] ? item.posterPreview : null;
    const hasPosterAndGallery = posterPreview && galleryPreview;
    const galleryAriaLabel = escapeHtml(
      getLanguage() === "zh" ? `打开${title}照片墙` : `Open photo gallery for ${title}`
    );
    const mediaClass =
      hasPosterAndGallery
        ? "event-feature-media event-seminar-media"
        : galleryPreview
        ? "event-feature-media event-gallery-preview"
        : images.length > 1
        ? "event-feature-media"
        : "event-feature-media event-feature-media-single";
    const cardClass =
      galleryPreview && !hasPosterAndGallery ? "event-feature-card event-gallery-card" : "event-feature-card";
    const cardAttrs =
      galleryPreview && !hasPosterAndGallery
        ? ` role="button" tabindex="0" data-gallery-target="#${galleryPreview.modalId}" aria-label="${galleryAriaLabel}"`
      : "";
    const mediaMarkup = hasPosterAndGallery
      ? `
        <button type="button" class="research-poster-trigger event-poster-trigger event-seminar-poster-trigger" data-bs-toggle="modal" data-bs-target="#${posterPreview.modalId}" aria-label="${escapeHtml(
          getLanguage() === "zh" ? "打开活动海报" : "Open the event poster"
        )}">
          <img src="${images[0].src}" alt="${escapeHtml(getLocalizedImageAlt(images[0]))}" class="event-feature-image research-cfp-image">
          <span class="research-poster-hint">${escapeHtml(
            getLanguage() === "zh" && posterPreview.hintZh ? posterPreview.hintZh : posterPreview.hint
          )}</span>
        </button>
        <button type="button" class="event-gallery-preview event-seminar-gallery-trigger" data-gallery-target="#${galleryPreview.modalId}" aria-label="${galleryAriaLabel}">
          ${renderGalleryPreviewMarkup(galleryImages, galleryPreview)}
        </button>
      `
      : galleryPreview
      ? `
        ${renderGalleryPreviewMarkup(galleryImages, galleryPreview)}
      `
      : posterPreview
      ? `
        <button type="button" class="research-poster-trigger event-poster-trigger" data-bs-toggle="modal" data-bs-target="#${posterPreview.modalId}" aria-label="${escapeHtml(
          getLanguage() === "zh" ? "打开活动海报" : "Open the event poster"
        )}">
          <img src="${images[0].src}" alt="${escapeHtml(getLocalizedImageAlt(images[0]))}" class="event-feature-image research-cfp-image">
          <span class="research-poster-hint">${escapeHtml(
            getLanguage() === "zh" && posterPreview.hintZh ? posterPreview.hintZh : posterPreview.hint
          )}</span>
        </button>
      `
      : images
          .map(
            (image) =>
              `<img src="${image.src}" alt="${escapeHtml(getLocalizedImageAlt(image))}" class="event-feature-image">`
          )
          .join("");
    return `
      <article class="${cardClass}" id="${item.id}"${hiddenAttrs}${cardAttrs}>
        <div class="${mediaClass}">${mediaMarkup}</div>
        <div class="event-feature-body">
          <p class="event-feature-date">${displayDate}</p>
          <h3 class="event-feature-title">${title}</h3>
          <p class="event-feature-text">${bodyHtml}</p>
          ${galleryPreview && !hasPosterAndGallery ? `<span class="event-gallery-cta">${escapeHtml(
            getLanguage() === "zh" ? "查看照片墙" : "View photo gallery"
          )}</span>` : ""}
        </div>
      </article>
    `;
  }

  function renderPosterModal(modalId, image) {
    return `
      <div class="modal fade research-poster-modal" id="${modalId}" tabindex="-1" aria-label="${escapeHtml(
        getLanguage() === "zh" ? "活动海报预览" : "Event poster preview"
      )}" aria-hidden="true" data-event-poster-modal="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content research-poster-modal-content">
            <div class="modal-body research-poster-modal-body">
              <button type="button" class="research-poster-close" data-bs-dismiss="modal" aria-label="${escapeHtml(
                getLanguage() === "zh" ? "关闭海报预览" : "Close poster preview"
              )}">×</button>
              <div class="research-poster-toolbar" aria-label="${escapeHtml(
                getLanguage() === "zh" ? "海报缩放控制" : "Poster zoom controls"
              )}">
                <button type="button" class="research-poster-tool" data-action="zoom-out" aria-label="${escapeHtml(
                  getLanguage() === "zh" ? "缩小" : "Zoom out"
                )}">−</button>
                <button type="button" class="research-poster-tool" data-action="zoom-in" aria-label="${escapeHtml(
                  getLanguage() === "zh" ? "放大" : "Zoom in"
                )}">+</button>
                <button type="button" class="research-poster-tool research-poster-tool-reset" data-action="reset">${escapeHtml(
                  getLanguage() === "zh" ? "重置" : "Reset"
                )}</button>
              </div>
              <div class="research-poster-stage" data-role="poster-stage">
                <div class="research-poster-canvas" data-role="poster-canvas">
                  <img src="${image.src}" alt="${escapeHtml(getLocalizedImageAlt(image))}" class="research-poster-modal-image" data-role="poster-image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderGalleryModal(item) {
    const modalId = item.galleryPreview.modalId;
    const title = getLocalizedValue(item, "title");
    const displayDate = getLocalizedValue(item, "displayDate");
    const images = getEventGalleryImages(item);

    return `
      <div class="modal fade event-gallery-modal" id="${modalId}" tabindex="-1" aria-label="${escapeHtml(
        title
      )}" aria-hidden="true" data-event-gallery-modal="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content event-gallery-modal-content">
            <div class="modal-header event-gallery-header">
              <div>
                <p class="event-gallery-eyebrow">${displayDate}</p>
                <h2 class="event-gallery-title">${title}</h2>
              </div>
              <button type="button" class="event-gallery-close" data-bs-dismiss="modal" aria-label="${escapeHtml(
                getLanguage() === "zh" ? "关闭照片墙" : "Close photo gallery"
              )}"><i class="bi bi-x-lg" aria-hidden="true"></i></button>
            </div>
            <div class="modal-body event-gallery-modal-body">
              <div class="event-gallery-controls" aria-label="${escapeHtml(
                getLanguage() === "zh" ? "照片墙导航" : "Photo gallery navigation"
              )}">
                <button type="button" class="event-gallery-control" data-gallery-action="prev" aria-label="${escapeHtml(
                  getLanguage() === "zh" ? "上一张照片" : "Previous photo"
                )}"><i class="bi bi-chevron-left" aria-hidden="true"></i></button>
                <button type="button" class="event-gallery-control" data-gallery-action="next" aria-label="${escapeHtml(
                  getLanguage() === "zh" ? "下一张照片" : "Next photo"
                )}"><i class="bi bi-chevron-right" aria-hidden="true"></i></button>
              </div>
              <div class="event-gallery-wall" data-role="gallery-wall">
                ${images
                  .map(
                    (image, index) => `
                      <figure class="event-gallery-slide" data-gallery-index="${index}">
                        <img src="${image.src}" alt="${escapeHtml(getLocalizedImageAlt(image))}" class="event-gallery-image">
                        <figcaption class="event-gallery-caption">${escapeHtml(
                          getLocalizedValue(image, "caption") || getLocalizedImageAlt(image)
                        )}</figcaption>
                      </figure>
                    `
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function syncEventPosterModals() {
    const hasEventSections = document.querySelector("[data-render='events-section']");
    document.querySelectorAll("[data-event-poster-modal='true']").forEach((modal) => modal.remove());
    document.querySelectorAll("[data-event-gallery-modal='true']").forEach((modal) => modal.remove());

    if (!hasEventSections) return;

    const posterModalMarkup = getEventItems()
      .filter((item) => item.posterPreview && item.images && item.images[0])
      .map((item) => renderPosterModal(item.posterPreview.modalId, item.images[0]))
      .join("");
    const galleryModalMarkup = getEventItems()
      .filter((item) => item.galleryPreview && getEventGalleryImages(item).length)
      .map(renderGalleryModal)
      .join("");
    const modalMarkup = `${posterModalMarkup}${galleryModalMarkup}`;

    if (!modalMarkup) return;

    document.body.insertAdjacentHTML("beforeend", modalMarkup);
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
    syncEventPosterModals();
  }

  function initPosterModals() {
    document.querySelectorAll(".research-poster-modal").forEach((modal) => {
      if (modal.dataset.posterReady === "true") return;

      const stage = modal.querySelector("[data-role='poster-stage']");
      const canvas = modal.querySelector("[data-role='poster-canvas']");
      const image = modal.querySelector("[data-role='poster-image']");
      const zoomInButton = modal.querySelector("[data-action='zoom-in']");
      const zoomOutButton = modal.querySelector("[data-action='zoom-out']");
      const resetButton = modal.querySelector("[data-action='reset']");

      if (!stage || !canvas || !image || !zoomInButton || !zoomOutButton || !resetButton) return;

      const MIN_SCALE = 1;
      const MAX_SCALE = 3.5;
      const SCALE_STEP = 0.25;
      const state = {
        scale: 1,
        baseHeight: 0,
        imageRatio: 1
      };

      const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

      const ensureMetrics = () => {
        const naturalWidth = image.naturalWidth || 1;
        const naturalHeight = image.naturalHeight || 1;
        state.imageRatio = naturalHeight / naturalWidth;
        state.baseHeight = Math.max(320, stage.clientHeight - 32);
      };

      const render = (anchor) => {
        ensureMetrics();
        const previousWidth = canvas.offsetWidth || (state.baseHeight / state.imageRatio);
        const previousHeight = canvas.offsetHeight || state.baseHeight;
        const anchorX = anchor ? anchor.x : stage.clientWidth / 2;
        const anchorY = anchor ? anchor.y : stage.clientHeight / 2;
        const contentX = anchor ? anchor.contentX : stage.scrollLeft + anchorX;
        const contentY = anchor ? anchor.contentY : stage.scrollTop + anchorY;
        const nextHeight = state.baseHeight * state.scale;
        const nextWidth = nextHeight / state.imageRatio;

        canvas.style.width = `${nextWidth}px`;
        canvas.style.height = `${nextHeight}px`;
        stage.dataset.zoomed = state.scale > 1 ? "true" : "false";
        zoomOutButton.disabled = state.scale <= MIN_SCALE;
        zoomInButton.disabled = state.scale >= MAX_SCALE;

        const widthRatio = previousWidth ? nextWidth / previousWidth : 1;
        const heightRatio = previousHeight ? nextHeight / previousHeight : 1;
        const maxScrollLeft = Math.max(0, nextWidth - stage.clientWidth);
        const maxScrollTop = Math.max(0, nextHeight - stage.clientHeight);

        stage.scrollLeft = clamp((contentX * widthRatio) - anchorX, 0, maxScrollLeft);
        stage.scrollTop = clamp((contentY * heightRatio) - anchorY, 0, maxScrollTop);
      };

      const setScale = (nextScale, anchor) => {
        state.scale = clamp(nextScale, MIN_SCALE, MAX_SCALE);
        render(anchor);
      };

      const reset = () => {
        state.scale = 1;
        stage.scrollTop = 0;
        stage.scrollLeft = 0;
        render({
          x: 0,
          y: 0,
          contentX: 0,
          contentY: 0
        });
      };

      const getStageCenterAnchor = () => ({
        x: stage.clientWidth / 2,
        y: stage.clientHeight / 2,
        contentX: stage.scrollLeft + stage.clientWidth / 2,
        contentY: stage.scrollTop + stage.clientHeight / 2
      });

      zoomInButton.addEventListener("click", () => setScale(state.scale + SCALE_STEP, getStageCenterAnchor()));
      zoomOutButton.addEventListener("click", () => setScale(state.scale - SCALE_STEP, getStageCenterAnchor()));
      resetButton.addEventListener("click", reset);

      stage.addEventListener(
        "wheel",
        (event) => {
          event.preventDefault();
          const delta = event.deltaY > 0 ? -SCALE_STEP : SCALE_STEP;
          const rect = stage.getBoundingClientRect();
          setScale(state.scale + delta, {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
            contentX: stage.scrollLeft + (event.clientX - rect.left),
            contentY: stage.scrollTop + (event.clientY - rect.top)
          });
        },
        { passive: false }
      );

      modal.addEventListener("shown.bs.modal", reset);
      modal.addEventListener("hidden.bs.modal", reset);
      image.addEventListener("load", () => render(getStageCenterAnchor()));
      window.addEventListener("resize", () => render(getStageCenterAnchor()));

      modal.dataset.posterReady = "true";
      render();
    });
  }

  function initEventGalleryCards() {
    document.querySelectorAll("[data-gallery-target]").forEach((card) => {
      if (card.dataset.galleryCardReady === "true") return;

      const openGallery = () => {
        const target = card.getAttribute("data-gallery-target");
        const modal = target ? document.querySelector(target) : null;
        if (!modal || !window.bootstrap || !window.bootstrap.Modal) return;
        window.bootstrap.Modal.getOrCreateInstance(modal).show();
      };

      card.addEventListener("click", openGallery);
      card.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        openGallery();
      });

      card.dataset.galleryCardReady = "true";
    });
  }

  function initEventGalleryModals() {
    document.querySelectorAll(".event-gallery-modal").forEach((modal) => {
      if (modal.dataset.galleryReady === "true") return;

      const wall = modal.querySelector("[data-role='gallery-wall']");
      const slides = Array.from(modal.querySelectorAll(".event-gallery-slide"));
      const prevButton = modal.querySelector("[data-gallery-action='prev']");
      const nextButton = modal.querySelector("[data-gallery-action='next']");

      if (!wall || !slides.length || !prevButton || !nextButton) return;

      const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
      const getStep = () => {
        if (slides.length < 2) return slides[0].offsetWidth || wall.clientWidth;
        return slides[1].offsetLeft - slides[0].offsetLeft;
      };
      const getCurrentIndex = () => {
        const step = getStep();
        return step ? clamp(Math.round(wall.scrollLeft / step), 0, slides.length - 1) : 0;
      };
      const scrollToIndex = (index, behavior = "smooth") => {
        const safeIndex = clamp(index, 0, slides.length - 1);
        wall.scrollTo({
          left: slides[safeIndex].offsetLeft - wall.offsetLeft,
          behavior
        });
      };
      const updateControls = () => {
        const currentIndex = getCurrentIndex();
        prevButton.disabled = currentIndex <= 0;
        nextButton.disabled = currentIndex >= slides.length - 1;
      };

      prevButton.addEventListener("click", () => scrollToIndex(getCurrentIndex() - 1));
      nextButton.addEventListener("click", () => scrollToIndex(getCurrentIndex() + 1));
      wall.addEventListener("scroll", updateControls, { passive: true });
      modal.addEventListener("shown.bs.modal", () => {
        scrollToIndex(0, "auto");
        updateControls();
      });
      window.addEventListener("resize", updateControls);

      modal.dataset.galleryReady = "true";
      updateControls();
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
    initPosterModals();
    initEventGalleryCards();
    initEventGalleryModals();
    revealHashTarget();
    window.addEventListener("hashchange", revealHashTarget);
    window.addEventListener("extend:languagechange", () => {
      renderHomepage();
      initHomepageHighlightsRail();
      renderNewsPage();
      renderEventsPage();
      initPosterModals();
      initEventGalleryCards();
      initEventGalleryModals();
      revealHashTarget();
    });
  });
})();
