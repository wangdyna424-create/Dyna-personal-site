const chipData = [
  {
    layer: '01 · 运算芯片', metaphor: '价值量最高 · 算力的源头', chips: [
      { name: 'GPU（AI）', desc: '并行计算的主力，训练大模型时一单往往就是几百颗起步。', use: 'AI 训练、推理集群、科学计算', makers: 'NVIDIA、AMD、华为', note: '典型 ASP：$25,000–40,000+。量级不算最大，却站在价值与需求的黄金象限。' },
      { name: '服务器 CPU', desc: '数据中心的通用计算大脑，承担调度、控制和复杂任务。', use: '云计算、企业服务器、数据库', makers: 'Intel、AMD、AWS', note: '典型 ASP：$3,000–15,000。稳定大单，卖的是性能、生态与长期供货。' },
      { name: 'FPGA', desc: '硬件逻辑可以重写，在 GPU 与 ASIC 之间找到弹性空间。', use: '通信、金融加速、工业与军工', makers: 'AMD Xilinx、Intel Altera、紫光同创', note: '典型 ASP：$100–10,000+。高端利基市场，客户买的是技术判断。' },
      { name: 'SoC / MCU', desc: 'SoC 把多种能力装进一颗芯片，MCU 则负责无处不在的具体控制。', use: '手机、PC、家电、汽车电子', makers: '高通、联发科、ST、NXP、瑞萨', note: 'SoC 走十亿级终端，MCU 则是基础走量的常青树。' }
    ]
  },
  {
    layer: '02 · 存储芯片', metaphor: '体积大 · 用量大 · 周期最强', chips: [
      { name: 'HBM', desc: '把多层 DRAM 垂直堆叠，是 GPU 的贴身高带宽内存。', use: 'AI 服务器、高性能计算', makers: 'SK 海力士、三星、美光', note: '典型 ASP：$20,000–30,000/堆栈。高价值、供给紧，是当前最热的存储品类。' },
      { name: '服务器 DDR5', desc: '服务器的短期记忆，容量、速度和稳定性同时决定系统表现。', use: '数据中心、企业服务器', makers: '三星、SK 海力士、美光', note: '典型 ASP：$100–300/颗。需求随云与 AI 基础设施一起起伏。' },
      { name: '消费级 DRAM', desc: '手机和电脑运行时的主内存，标准化程度高、周期性明显。', use: '手机、PC、消费电子', makers: '三星、SK 海力士、美光', note: '典型 ASP：$3–10/颗。百亿级用量，价格波动常常比技术新闻更快。' },
      { name: 'NAND Flash', desc: '把数据长期留住的闪存颗粒，是 SSD 与移动存储的核心。', use: 'SSD、手机、U 盘、企业存储', makers: '三星、铠侠、西部数据、SK 海力士', note: '典型 ASP：$5–50/颗。量大且周期强，库存变化会直接影响全行业。' }
    ]
  },
  {
    layer: '03 · 模拟芯片', metaphor: '单价不高 · 生命周期极长', chips: [
      { name: 'PMIC', desc: '负责供电、稳压和转换，一颗高算力芯片周围往往围着多颗电源管理芯片。', use: '所有电路板、服务器、手机', makers: 'TI、ADI、MPS、英飞凌', note: '典型 ASP：$0.3–5。量大、品类多，是每一块板子的稳定底盘。' },
      { name: '信号链', desc: '把温度、声音、压力等真实世界信息放大、采集、转换成数据。', use: '工业、医疗、仪器仪表、传感器前端', makers: 'ADI、TI、NXP', note: '典型 ASP：$0.5–10。卖的是精度、可靠性和长期认证。' },
      { name: '射频前端', desc: '完成无线信号的收发、放大与滤波，决定终端连接外部世界的能力。', use: '5G 手机、Wi-Fi、物联网、车联网', makers: 'Qorvo、Skyworks、卓胜微', note: '典型 ASP：$1–15。手机中会叠加多颗，价值随频段和制式上升。' },
      { name: 'BLDC 驱动', desc: '控制无刷直流电机与功率管，让风扇、泵和小型电机平稳转动。', use: '散热风扇、家电、服务器、工业设备', makers: 'MPS、TI、瑞萨', note: '典型 ASP：$0.3–3。Dyna 正在做的基础走量品类，壁垒在电机匹配与客户设计周期。' }
    ]
  },
  {
    layer: '04 · 功率器件', metaphor: '控制电的开关 · 工业与汽车刚需', chips: [
      { name: 'SiC / GaN', desc: '第三代半导体，耐高压、高频，发热更少。', use: '新能源汽车、快充、光伏与储能', makers: '英飞凌、Wolfspeed、纳微', note: '典型 ASP：$5–100。高端利基与新能源增长叠加，是正在爆发的品类。' },
      { name: 'IGBT', desc: '适合高压大电流的功率开关，承担能源转换里的重活。', use: '电动车、电网、高铁、工业变频', makers: '英飞凌、三菱、比亚迪半导体', note: '典型 ASP：$5–50。亿级需求，认证周期长，客户粘性很强。' },
      { name: 'MOSFET', desc: '最基础的电子开关，低压 MOSFET 是 BLDC 驱动系统的关键搭档。', use: '电源转换、电机驱动、消费电子', makers: '英飞凌、安森美、士兰微', note: '典型 ASP：$0.1–5。百亿级出货，基础走量，拼供货与覆盖。' },
      { name: '二极管', desc: '让电流朝一个方向走，用最简单的结构完成整流和保护。', use: '整流、保护、所有基础电路', makers: 'Vishay、安森美、扬杰科技', note: '典型 ASP：$0.01–1。千亿级需求，少了它，很多系统连第一步都走不通。' }
    ]
  },
  {
    layer: '05 · 传感器与光电', metaphor: '电子系统的感官 · AI 用量增长', chips: [
      { name: '图像传感器 CIS', desc: '把光变成电，是手机摄像头和机器视觉的心脏。', use: '手机、安防、自动驾驶、工业视觉', makers: '索尼、三星、豪威', note: '典型 ASP：$2–20。十亿级需求，像素、尺寸与场景决定价值。' },
      { name: 'MEMS 传感器', desc: '用微机电结构感知加速度、角速度、压力和声音。', use: '手机、穿戴、汽车、工业设备', makers: '博世、ST、TDK', note: '典型 ASP：$0.3–3。万物感知的底座，规模化之后仍考验可靠性。' },
      { name: '光模块', desc: '完成光电互转，数据中心把信息送远、送快的血管。', use: '数据中心、AI 集群、5G 网络', makers: 'Coherent、中际旭创、新易盛', note: '典型 ASP：$100–10,000+。高性能模块属于高端利基，技术代际很快。' },
      { name: '激光器 / 光耦', desc: '提供光源、隔离和光纤传输能力。', use: '光通信、工业传感、电源隔离', makers: 'Lumentum、Broadcom、光迅科技', note: '典型 ASP：$0.5–100。体量不一，但很多场景都离不开它的光电翻译。' }
    ]
  },
  {
    layer: '06 · 被动元件', metaphor: '不是芯片 · 但与芯片绑在一起', chips: [
      { name: 'MLCC', desc: '多层陶瓷电容，负责滤波、储能和稳定电压。', use: '手机、汽车、服务器、AI 加速卡', makers: '村田、三星电机、国巨', note: '典型 ASP：$0.001–1。万亿级需求，一颗 GPU 周边可能就有上万颗。' },
      { name: '电阻 / 电感', desc: '完成限流、分压、滤波和能量储存，是电路里的基础配合。', use: '所有电路板、汽车电子、工业控制', makers: '国巨、风华高科、TDK', note: '典型 ASP：$0.001–0.1。单颗不起眼，但用量大到不能忽略。' },
      { name: '连接器', desc: '让板与板、模组与模组之间可靠连接，并承担高速信号传输。', use: '服务器、AI 机柜、汽车、消费电子', makers: 'TE、Amphenol、莫仕', note: '典型 ASP：$0.1–100+。高速互连的价值会随系统复杂度迅速上升。' }
    ]
  }
];

const chipLayers = document.getElementById('chipLayers');
const dialog = document.getElementById('chipDialog');
const closeDialog = document.getElementById('closeDialog');

chipData.forEach(group => {
  const layer = document.createElement('section');
  layer.className = 'chip-layer';
  layer.innerHTML = `<div class="layer-title"><span>${group.layer}</span><small>${group.metaphor}</small></div>`;
  const buttons = document.createElement('div');
  buttons.className = 'chip-buttons';
  group.chips.forEach(chip => {
    const btn = document.createElement('button');
    btn.className = 'chip-button';
    btn.type = 'button';
    btn.textContent = chip.name;
    btn.addEventListener('click', () => openChip(group, chip));
    buttons.appendChild(btn);
  });
  layer.appendChild(buttons);
  chipLayers.appendChild(layer);
});

function openChip(group, chip) {
  document.getElementById('dialogLayer').textContent = `${group.layer} · ${group.metaphor}`;
  document.getElementById('dialogTitle').textContent = chip.name;
  document.getElementById('dialogDesc').textContent = chip.desc;
  document.getElementById('dialogUse').textContent = chip.use;
  document.getElementById('dialogMakers').textContent = chip.makers;
  document.getElementById('dialogNote').textContent = chip.note;
  dialog.showModal();
}
closeDialog.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) dialog.close();
});


const marketInsights = {
  gold: '① 黄金象限：量大价高。供需一紧张就会进入卖方市场，代理商的机会来自规模、货源与关键客户关系。',
  niche: '② 高端利基：量小价高。客户买的不只是货，而是你的方案判断与技术可信度。',
  volume: '③ 基础走量：量大价低。价格、库存与交付稳定性决定胜负，覆盖做深才有复利。',
  tail: '④ 长尾品类：量小价低。偶尔有机会，但不值得成为资源投入的主力方向。'
};
const marketInsight = document.getElementById('marketInsight');
document.querySelectorAll('[data-quadrant]').forEach(button => {
  button.addEventListener('click', () => {
    marketInsight.textContent = marketInsights[button.dataset.quadrant];
    document.querySelectorAll('[data-quadrant]').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
  });
});

const rippleCopy = document.getElementById('rippleCopy');
const rippleTexts = {
  '中心算力': '中心是 GPU 与 HBM：算力先在这里聚集，像一块石头落入水面。',
  '连接神经': '第二圈是连接层：光模块、射频和 DSP 把算力的波纹送到更远的地方。',
  '基础土壤': '最外圈是基础层：模拟芯片、分立器件和 MLCC 支撑所有看得见的智能。'
};
document.querySelectorAll('.ring').forEach(ring => {
  ring.addEventListener('click', () => {
    rippleCopy.textContent = rippleTexts[ring.dataset.ripple];
    ring.animate([
      { boxShadow: '0 0 0 0 rgba(92,225,230,.45)' },
      { boxShadow: '0 0 0 34px rgba(92,225,230,0)' }
    ], { duration: 900, easing: 'ease-out' });
  });
});

const quizQuestions = [
  { q: '面对复杂问题，你第一反应是？', options: [
    ['拆成逻辑步骤', 'CPU'], ['开很多脑洞并行试', 'GPU'], ['先确保系统稳定', '模拟芯片'], ['直接改底层规则', 'FPGA']
  ]},
  { q: '朋友最常说你像什么？', options: [
    ['默默把事做成的人', 'MCU'], ['能听懂言外之意的人', 'DSP'], ['记得住每段来路的人', 'HBM'], ['会把能量推向前的人', 'MOSFET']
  ]},
  { q: '你喜欢怎样的工作状态？', options: [
    ['清晰规划后推进', 'CPU'], ['高强度灵感爆发', 'GPU'], ['长期主义慢慢积累', '模拟芯片'], ['边做边重构系统', 'FPGA']
  ]},
  { q: '团队最需要你的时刻通常是？', options: [
    ['把细节落到具体动作', 'MCU'], ['把模糊信息整理成信号', 'DSP'], ['接住分散的经验与记忆', 'HBM'], ['在关键节点提供推力', 'MOSFET']
  ]}
];
const resultCopy = {
  CPU: '编排者。你擅长组织、判断，并把复杂事变成可以推进的路径。',
  GPU: '灵感并行者。你适合处理密集的创意、高能任务和同时涌来的可能性。',
  '模拟芯片': '稳压者。你是长期系统里的底层力量，越复杂越能显出可靠。',
  FPGA: '重构者。你喜欢从规则本身动手，持续把系统调成更好的样子。',
  MCU: '执行官。你把抽象计划落进真实动作，稳定地让事情发生。',
  DSP: '信号译者。你能从嘈杂信息里听见重点，再把它表达得清楚。',
  HBM: '记忆建筑师。你把经验、关系和细节组织成持续可用的底座。',
  MOSFET: '能量推进者。你在关键节点果断导通，把积累变成向前的动力。'
};
const personalityCards = [
  ['CPU', '编排者'], ['GPU', '灵感并行者'], ['模拟芯片', '稳压者'], ['FPGA', '重构者'],
  ['MCU', '执行官'], ['DSP', '信号译者'], ['HBM', '记忆建筑师'], ['MOSFET', '能量推进者']
];
let quizIndex = 0;
let scores = {};
const quiz = document.getElementById('quiz');
function renderQuiz() {
  const current = quizQuestions[quizIndex];
  if (!current) {
    const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] || 'CPU';
    quiz.innerHTML = `<div class="result-card"><p class="eyebrow">人格芯片生成完成</p><h4>${winner}</h4><p>${resultCopy[winner]}</p><button class="restart-quiz" type="button">重新测试</button></div>`;
    quiz.querySelector('button').addEventListener('click', () => { quizIndex = 0; scores = {}; renderQuiz(); });
    return;
  }
  quiz.innerHTML = `<div class="quiz-question"><strong>${current.q}</strong><div class="quiz-options"></div></div>`;
  const options = quiz.querySelector('.quiz-options');
  current.options.forEach(([label, chip]) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = label;
    btn.addEventListener('click', () => {
      scores[chip] = (scores[chip] || 0) + 1;
      quizIndex += 1;
      renderQuiz();
    });
    options.appendChild(btn);
  });
}
renderQuiz();

const personalityDeck = document.getElementById('personalityDeck');
if (personalityDeck) {
  personalityCards.forEach(([chip, label]) => {
    const card = document.createElement('div');
    card.className = 'personality-card';
    card.innerHTML = `<strong>${chip}</strong><span>${label}</span>`;
    personalityDeck.appendChild(card);
  });
}

const quietNote = document.getElementById('quietNote');
document.getElementById('clearNote').addEventListener('click', () => { quietNote.value = ''; quietNote.focus(); });

let audioCtx;
let noiseNode;
let activeNoiseButton;
function stopNoise() {
  if (noiseNode) noiseNode.stop();
  noiseNode = null;
  if (activeNoiseButton) activeNoiseButton.classList.remove('active');
  activeNoiseButton = null;
}
function playNoise(kind, button) {
  if (activeNoiseButton === button) { stopNoise(); return; }
  stopNoise();
  audioCtx = audioCtx || new AudioContext();
  const bufferSize = audioCtx.sampleRate * 2;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i += 1) {
    const base = Math.random() * 2 - 1;
    data[i] = kind === 'rain' ? base * (i % 37 === 0 ? .55 : .12) : kind === 'keys' ? (i % 900 < 18 ? base * .5 : base * .03) : Math.sin(i / 22) * .05 + base * .04;
  }
  const source = audioCtx.createBufferSource();
  const gain = audioCtx.createGain();
  gain.gain.value = kind === 'keys' ? .24 : .18;
  source.buffer = buffer;
  source.loop = true;
  source.connect(gain).connect(audioCtx.destination);
  source.start();
  noiseNode = source;
  activeNoiseButton = button;
  button.classList.add('active');
}
document.getElementById('rainBtn').addEventListener('click', e => playNoise('rain', e.currentTarget));
document.getElementById('keysBtn').addEventListener('click', e => playNoise('keys', e.currentTarget));
document.getElementById('fanBtn').addEventListener('click', e => playNoise('fan', e.currentTarget));

function setupCanvas(canvas, draw) {
  const ctx = canvas.getContext('2d');
  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };
  resize();
  window.addEventListener('resize', resize);
  draw(ctx, canvas);
}

const lattice = document.getElementById('latticeCanvas');
setupCanvas(lattice, (ctx, canvas) => {
  let tick = 0;
  const animate = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(98,214,163,.16)';
    ctx.fillStyle = 'rgba(216,227,230,.5)';
    const gap = 42;
    for (let y = 30; y < h; y += gap) {
      for (let x = 30; x < w; x += gap) {
        const wave = Math.sin((x + y + tick) / 70) * 7;
        ctx.beginPath();
        ctx.arc(x + wave, y - wave, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x + wave, y - wave);
        ctx.lineTo(x + gap + wave, y - wave);
        ctx.stroke();
      }
    }
    tick += 1.2;
    requestAnimationFrame(animate);
  };
  animate();
});

const particleCanvas = document.getElementById('particleCanvas');
setupCanvas(particleCanvas, (ctx, canvas) => {
  const particles = Array.from({ length: 90 }, () => ({ x: Math.random() * 1200, y: Math.random() * 800, vx: 0, vy: 0 }));
  const mouse = { x: -999, y: -999 };
  canvas.parentElement.addEventListener('pointermove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  const animate = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p, i) => {
      const angle = (i % 6) * Math.PI / 3;
      const targetX = mouse.x + Math.cos(angle) * (24 + (i % 8) * 12);
      const targetY = mouse.y + Math.sin(angle) * (24 + (i % 8) * 12);
      p.vx += (targetX - p.x) * .006 + (Math.random() - .5) * .08;
      p.vy += (targetY - p.y) * .006 + (Math.random() - .5) * .08;
      p.vx *= .88; p.vy *= .88;
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w || p.y < 0 || p.y > h) { p.x = Math.random() * w; p.y = Math.random() * h; }
      ctx.fillStyle = i % 3 === 0 ? 'rgba(92,225,230,.62)' : i % 3 === 1 ? 'rgba(255,111,145,.5)' : 'rgba(255,255,255,.42)';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.strokeStyle = 'rgba(255,255,255,.08)';
    for (let i = 0; i < particles.length - 1; i += 3) {
      ctx.beginPath();
      ctx.moveTo(particles[i].x, particles[i].y);
      ctx.lineTo(particles[i + 1].x, particles[i + 1].y);
      ctx.stroke();
    }
    requestAnimationFrame(animate);
  };
  animate();
});

const articleList = document.getElementById('articleList');
const articleDialog = document.getElementById('articleDialog');
const closeArticle = document.getElementById('closeArticle');
const articleTitle = document.getElementById('articleTitle');
const articleCategory = document.getElementById('articleCategory');
const articleBody = document.getElementById('articleBody');
const articles = window.DYNA_ARTICLES || [];

function openArticle(index) {
  const article = articles[index];
  if (!article) return;
  articleCategory.textContent = article.category;
  articleTitle.textContent = article.title;
  articleBody.innerHTML = '';
  article.paragraphs.forEach(text => {
    const p = document.createElement('p');
    p.textContent = text;
    articleBody.appendChild(p);
  });
  articleDialog.showModal();
}

if (closeArticle) closeArticle.addEventListener('click', () => articleDialog.close());
if (articleDialog) {
  articleDialog.addEventListener('click', event => {
    const rect = articleDialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) articleDialog.close();
  });
}

function renderArticleList() {
  if (!articleList) return;
  articleList.innerHTML = '';
  const makeArticleButton = (article, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'article-link';
    button.innerHTML = `<em>${article.category}</em><span></span><small></small>`;
    button.querySelector('span').textContent = article.title;
    button.querySelector('small').textContent = article.excerpt;
    button.addEventListener('click', () => openArticle(index));
    return button;
  };
  const featuredGrid = document.createElement('div');
  featuredGrid.className = 'article-grid article-grid-featured';
  articles.slice(0, 6).forEach((article, index) => featuredGrid.appendChild(makeArticleButton(article, index)));
  articleList.appendChild(featuredGrid);

  if (articles.length > 6) {
    const archive = document.createElement('details');
    archive.className = 'article-archive';
    archive.innerHTML = `<summary>展开全部 ${articles.length} 篇文章</summary>`;
    const archiveGrid = document.createElement('div');
    archiveGrid.className = 'article-grid article-grid-archive';
    articles.slice(6).forEach((article, offset) => archiveGrid.appendChild(makeArticleButton(article, offset + 6)));
    archive.appendChild(archiveGrid);
    articleList.appendChild(archive);
  }
}
renderArticleList();

const drawer = document.getElementById('sideDrawer');
const drawerContent = document.getElementById('drawerContent');
const drawerClose = document.getElementById('drawerClose');
const tocItems = [
  ['首屏', '#top'], ['我与世界', '#self'], ['摄影作品', '#photos'], ['航海日志', '#logs'],
  ['硅与文明', '#silicon'], ['元器件图鉴', '#chip-map'], ['文明地基', '#civilization'],
  ['纯粹空间', '#free'], ['芯片人格', '#chip-quiz'], ['书写空间', '#quiet-writing']
];

function openDrawer(mode) {
  drawerContent.innerHTML = '';
  const title = document.createElement('h3');
  title.className = 'drawer-title';
  title.textContent = mode === 'articles' ? 'Dyna 的文章' : '网站目录';
  const list = document.createElement('div');
  list.className = 'drawer-list';
  if (mode === 'articles') {
    articles.forEach((article, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = article.title;
      button.addEventListener('click', () => openArticle(index));
      list.appendChild(button);
    });
  } else {
    tocItems.forEach(([label, href]) => {
      const a = document.createElement('a');
      a.href = href;
      a.textContent = label;
      a.addEventListener('click', () => drawer.classList.remove('open'));
      list.appendChild(a);
    });
  }
  drawerContent.append(title, list);
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
}

document.querySelectorAll('[data-drawer]').forEach(button => {
  button.addEventListener('click', () => openDrawer(button.dataset.drawer));
});
if (drawerClose) drawerClose.addEventListener('click', () => {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
});

const semiMapData = [
  { name: '数字逻辑 IC', chips: 'CPU · GPU · MCU · FPGA · ASIC', text: '处理 0 和 1，负责通用计算、控制、并行运算与可编程逻辑。', x: 50, y: 6, hot: true },
  { name: '存储芯片', chips: 'DRAM · HBM · NAND Flash', text: '存住运行中的数据与长期内容。AI 时代，带宽和容量同样决定算力上限。', x: 80, y: 18, hot: true },
  { name: '模拟与混合信号', chips: 'PMIC · 运放 · ADC/DAC', text: '把真实世界的连续信号接入数字系统，同时负责供电、放大与转换。', x: 91, y: 46, dyna: true },
  { name: '射频与高速接口', chips: 'RF · PA · SerDes · DSP', text: '负责无线收发与高速数据链路，让信息能进来、走得远、传得稳。', x: 73, y: 76, hot: true },
  { name: '光电器件', chips: 'CIS · LED · 激光器 · 光耦', text: '完成光与电的相互转换，是机器的眼睛、显示与光通信入口。', x: 50, y: 89 },
  { name: '传感器与 MEMS', chips: '压力 · 惯性 · 温度 · 声学', text: '把温度、位置、运动和声音翻译成可被系统处理的信号。', x: 20, y: 75 },
  { name: '被动元件', chips: 'MLCC · 电感 · 电阻', text: '严格说不是半导体，却承担滤波、储能、匹配与稳定，是所有系统的沉默底座。', x: 7, y: 45 },
  { name: '分立与保护器件', chips: 'MOSFET · IGBT · SiC/GaN · TVS', text: '控制高压、大电流和能量转换，也承担整流、ESD 与瞬态保护，让系统在关键时刻守得住。', x: 20, y: 17, dyna: true }
];

function renderSemiMap() {
  const map = document.getElementById('semiMap');
  if (!map) return;
  map.innerHTML = '';
  semiMapData.forEach(item => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `semi-node${item.hot ? ' hot' : ''}${item.dyna ? ' dyna' : ''}`;
    button.style.left = `${item.x}%`;
    button.style.top = `${item.y}%`;
    button.style.transform = 'translate(-50%, -50%)';
    button.innerHTML = `<b></b><small></small>`;
    button.querySelector('b').textContent = item.name;
    button.querySelector('small').textContent = item.chips;
    button.addEventListener('click', () => {
      rippleCopy.textContent = `${item.name}：${item.text}`;
      button.animate([
        { boxShadow: '0 0 0 0 rgba(92,225,230,.45)' },
        { boxShadow: '0 0 0 26px rgba(92,225,230,0)' }
      ], { duration: 720, easing: 'ease-out' });
    });
    map.appendChild(button);
  });
}
renderSemiMap();


const galleryWindow = document.getElementById('galleryWindow');
const galleryTrack = document.getElementById('galleryTrack');
const gallerySlides = [...document.querySelectorAll('.gallery-slide')];
const galleryCounter = document.getElementById('galleryCounter');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');
let activeGalleryIndex = 0;
let galleryOffset = 0;
let galleryDidDrag = false;
let galleryDrag = null;

function galleryStep() {
  if (!gallerySlides.length) return 0;
  const gap = Number.parseFloat(getComputedStyle(galleryTrack).gap) || 0;
  return gallerySlides[0].getBoundingClientRect().width + gap;
}

function galleryMaxIndex() {
  if (!galleryWindow || !galleryTrack) return 0;
  const overflow = Math.max(0, galleryTrack.scrollWidth - galleryWindow.clientWidth);
  return Math.max(0, Math.ceil(overflow / galleryStep()));
}

function renderGallery(animate = true) {
  if (!galleryWindow || !galleryTrack || !gallerySlides.length) return;
  activeGalleryIndex = Math.max(0, Math.min(galleryMaxIndex(), activeGalleryIndex));
  const maxOffset = Math.max(0, galleryTrack.scrollWidth - galleryWindow.clientWidth);
  galleryOffset = Math.min(activeGalleryIndex * galleryStep(), maxOffset);
  galleryTrack.classList.toggle('is-dragging', !animate);
  galleryTrack.style.transform = `translate3d(${-galleryOffset}px, 0, 0)`;
  if (galleryCounter) galleryCounter.textContent = `${String(activeGalleryIndex + 1).padStart(2, '0')} / ${String(gallerySlides.length).padStart(2, '0')}`;
  if (galleryPrev) galleryPrev.disabled = activeGalleryIndex === 0;
  if (galleryNext) galleryNext.disabled = activeGalleryIndex === galleryMaxIndex();
}

function moveGallery(direction) {
  activeGalleryIndex += direction;
  renderGallery();
}

if (galleryWindow && galleryTrack) {
  galleryWindow.addEventListener('pointerdown', event => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    galleryDrag = { pointerId: event.pointerId, startX: event.clientX, lastX: event.clientX };
    galleryWindow.setPointerCapture(event.pointerId);
    galleryTrack.classList.add('is-dragging');
  });
  galleryWindow.addEventListener('pointermove', event => {
    if (!galleryDrag || event.pointerId !== galleryDrag.pointerId) return;
    galleryDrag.lastX = event.clientX;
    const delta = event.clientX - galleryDrag.startX;
    if (Math.abs(delta) > 5) galleryDidDrag = true;
    const maxOffset = Math.max(0, galleryTrack.scrollWidth - galleryWindow.clientWidth);
    const nextOffset = Math.max(0, Math.min(maxOffset, galleryOffset - delta));
    galleryTrack.style.transform = `translate3d(${-nextOffset}px, 0, 0)`;
  });
  const finishGalleryDrag = event => {
    if (!galleryDrag || event.pointerId !== galleryDrag.pointerId) return;
    const delta = galleryDrag.lastX - galleryDrag.startX;
    const threshold = Math.max(42, galleryStep() * .14);
    if (Math.abs(delta) > threshold) activeGalleryIndex += delta < 0 ? 1 : -1;
    galleryDrag = null;
    renderGallery();
    window.setTimeout(() => { galleryDidDrag = false; }, 0);
  };
  galleryWindow.addEventListener('pointerup', finishGalleryDrag);
  galleryWindow.addEventListener('pointercancel', finishGalleryDrag);
  galleryWindow.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); moveGallery(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); moveGallery(1); }
  });
  window.addEventListener('resize', () => renderGallery(false));
  renderGallery(false);
}
galleryPrev?.addEventListener('click', () => moveGallery(-1));
galleryNext?.addEventListener('click', () => moveGallery(1));

const photoDialog = document.getElementById('photoDialog');
const photoDialogImage = document.getElementById('photoDialogImage');
const photoDialogCaption = document.getElementById('photoDialogCaption');
const closePhotoDialog = document.getElementById('closePhotoDialog');

function openPhotoDialog(slide) {
  if (!photoDialog || !photoDialogImage || !photoDialogCaption) return;
  photoDialogImage.src = slide.dataset.photoSrc;
  photoDialogImage.alt = `${slide.dataset.photoTitle}摄影作品`;
  photoDialogCaption.textContent = slide.dataset.photoTitle;
  photoDialog.showModal();
}

gallerySlides.forEach(slide => slide.addEventListener('click', event => {
  if (galleryDidDrag) { event.preventDefault(); return; }
  openPhotoDialog(slide);
}));
closePhotoDialog?.addEventListener('click', () => photoDialog.close());
photoDialog?.addEventListener('click', event => {
  const rect = photoDialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) photoDialog.close();
});

const worldNotes = {
  lens: {
    kicker: '01 · 镜头', title: '把偶然变成一张可以回看的地图',
    media: ['assets/photos/临夜维港.JPG', 'assets/photos/雨夜路口.jpg', 'assets/photos/石海山云.JPG'],
    paragraphs: ['我拍的不是景点清单，而是世界突然显出秩序的那一秒。光落在海面、路牌亮起、云压过城市，它们都在提醒我：日常并不单调，只是需要被认真看见。', '画面里的空白也很重要。它给情绪留位置，也让每一张照片不只是在说“我去过这里”，而是在说“那一刻的世界，是这样与我相遇的”。']
  },
  writing: {
    kicker: '02 · 笔触', title: '写作不是结论，是把问题留在桌面上',
    media: [],
    paragraphs: ['写作是我把经验从身体里搬到桌面上的方式。销售、客户、芯片、选择和焦虑，写下来以后才会慢慢出现它们真正的结构。', '我不急着给所有问题答案。好的文章更像一张被摊开的地图，它让读到的人知道，原来自己也可以从另一个方向走出去。']
  },
  music: {
    kicker: '03 · 频率', title: '一首歌，给现实留一条不必解释的出口',
    media: ['assets/music/陶喆.JPG', 'assets/music/Taylar.png', 'assets/music/钢琴.png.webp', 'assets/music/吉他.jpeg', 'assets/music/12cc451667634b619550c1e01fffecd6.png.webp', 'assets/music/u=1163276968,2539952834&fm=253&app=138&f=JPEG.jpeg'],
    paragraphs: ['音乐不需要替我解释什么。它有时把喧闹的城市降到很低，有时又把我从重复的日常里抬起来，让人重新感到生活有节拍。', '这些封面、琴键和唱片不是歌单的装饰，它们是不同阶段的入口。听见某一句旋律，就能重新回到那个还在想、还在走、还没把世界想明白的自己。']
  },
  poetry: {
    kicker: '04 · 想象', title: '理想主义，是仍愿意为更远处留一盏灯',
    media: [],
    paragraphs: ['理想主义不是忽略现实，而是在现实已经足够复杂的时候，仍然保留一种判断：有些方向值得慢一点，但不能放弃。', '诗词和想象给我的不是逃离，而是一种尺度。它们提醒我，眼前的交付、报价和选择很具体，但人仍然可以把目光放到更远的地方。']
  }
};
const worldDialog = document.getElementById('worldDialog');
const worldDialogKicker = document.getElementById('worldDialogKicker');
const worldDialogTitle = document.getElementById('worldDialogTitle');
const worldDialogMedia = document.getElementById('worldDialogMedia');
const worldDialogBody = document.getElementById('worldDialogBody');

document.querySelectorAll('[data-world]').forEach(card => card.addEventListener('click', () => {
  const note = worldNotes[card.dataset.world];
  if (!note || !worldDialog) return;
  worldDialogKicker.textContent = note.kicker;
  worldDialogTitle.textContent = note.title;
  worldDialogMedia.innerHTML = '';
  note.media.forEach(src => {
    const image = document.createElement('img');
    image.src = src;
    image.alt = '';
    worldDialogMedia.appendChild(image);
  });
  worldDialogBody.innerHTML = '';
  note.paragraphs.forEach(text => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    worldDialogBody.appendChild(paragraph);
  });
  worldDialog.showModal();
}));
document.getElementById('closeWorldDialog')?.addEventListener('click', () => worldDialog.close());
worldDialog?.addEventListener('click', event => {
  const rect = worldDialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) worldDialog.close();
});

