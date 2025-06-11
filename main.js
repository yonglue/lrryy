// 产品数据和分页逻辑（仅products.html有效）
let productsData = [
  { name: "Soybeans - High quality, ready for export." },
  { name: "Industrial machinery - Various models." },
  { name: "Mobile phones - Various brands." },
  { name: "Agricultural fertilizer - Organic and chemical." },
  { name: "LED lighting - Energy saving." },
  { name: "Textiles - Fabrics and garments." },
  { name: "Ceramic tiles - All sizes." },
  { name: "Car parts - OEM and aftermarket." },
  { name: "Plastics - Raw materials." },
  { name: "Solar panels - Different capacities." },
  { name: "Medical supplies - Masks, gloves, etc." },
  { name: "Steel products - Sheets, pipes, bars." },
  { name: "Furniture - Office and home." },
  { name: "Food additives - For food processing." },
  { name: "Pumps & valves - Industrial use." },
  { name: "Footwear - Men, women, children." },
  { name: "Stationery - Bulk export." },
  { name: "Water treatment equipment." },
  { name: "Building materials - General supply." },
  { name: "Packing materials - Cartons, tapes, etc." }
];
let currentPage = 1;
const pageSize = 6;

function renderProducts() {
  if (!document.getElementById('product-list')) return;
  const list = document.getElementById('product-list');
  list.innerHTML = '';
  const start = (currentPage - 1) * pageSize;
  const end = Math.min(start + pageSize, productsData.length);
  for (let i = start; i < end; i++) {
    const li = document.createElement('li');
    li.textContent = productsData[i].name;
    list.appendChild(li);
  }
  updatePagination();
}
function updatePagination() {
  if (!document.getElementById('pageInfo')) return;
  const pageInfo = document.getElementById('pageInfo');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const totalPages = Math.ceil(productsData.length / pageSize);
  pageInfo.textContent = `Page ${currentPage} / ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}
function changePage(delta) {
  const totalPages = Math.ceil(productsData.length / pageSize);
  currentPage += delta;
  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;
  renderProducts();
}

const translations = {
  zh: {
    home: "首页",
    welcome: "欢迎",
    welcome_text: "Latam Trade Hub 是您值得信赖的中介，连接中国与拉美的买卖双方，代理任何商品。",
    subtitle: "全球商品直达拉美",
    products: "产品中心",
    suppliers: "供应商",
    suppliers_desc: "我们为您对接全球可靠供应商，详情请联系我们。",
    about: "关于我们",
    about_text: "Latam Trade Hub 是全球商品通往拉美的桥梁，提供任何商品的中介服务。",
    contact: "联系方式",
    china: "中国",
    venezuela: "委内瑞拉",
    email: "邮箱"
  },
  en: {
    home: "Home",
    welcome: "Welcome",
    welcome_text: "Latam Trade Hub is your trusted intermediary for any goods, connecting suppliers and buyers between China and Latin America.",
    subtitle: "Connecting the World to Latin America",
    products: "Products",
    suppliers: "Suppliers",
    suppliers_desc: "We connect you with reliable suppliers worldwide. Please contact us for details.",
    about: "About Us",
    about_text: "Latam Trade Hub is a bridge for global products to Latin America, providing intermediary services for any goods.",
    contact: "Contact",
    china: "China",
    venezuela: "Venezuela",
    email: "Email"
  },
  es: {
    home: "Inicio",
    welcome: "Bienvenido",
    welcome_text: "Latam Trade Hub es su intermediario de confianza para cualquier mercancía, conectando proveedores y compradores entre China y América Latina.",
    subtitle: "Productos globales directos a Latinoamérica",
    products: "Productos",
    suppliers: "Proveedores",
    suppliers_desc: "Le conectamos con proveedores confiables en todo el mundo. Contáctenos para más detalles.",
    about: "Sobre nosotros",
    about_text: "Latam Trade Hub es un puente para productos globales a Latinoamérica, ofreciendo servicios de intermediación para cualquier mercancía.",
    contact: "Contacto",
    china: "China",
    venezuela: "Venezuela",
    email: "Correo"
  },
  pt: {
    home: "Início",
    welcome: "Bem-vindo",
    welcome_text: "Latam Trade Hub é seu intermediário de confiança para quaisquer mercadorias, conectando fornecedores e compradores entre a China e a América Latina.",
    subtitle: "Produtos globais direto à América Latina",
    products: "Produtos",
    suppliers: "Fornecedores",
    suppliers_desc: "Conectamos você a fornecedores confiáveis em todo o mundo. Entre em contato para detalhes.",
    about: "Sobre nós",
    about_text: "Latam Trade Hub é uma ponte para produtos globais à América Latina, fornecendo serviços de intermediação para quaisquer mercadorias.",
    contact: "Contato",
    china: "China",
    venezuela: "Venezuela",
    email: "Email"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

function setTheme(mode, save = true) {
  const body = document.body;
  const btn = document.getElementById('theme-toggle');
  if (mode === 'dark') {
    body.classList.add('dark-mode');
    if (btn) btn.textContent = '☀️ Day';
  } else {
    body.classList.remove('dark-mode');
    if (btn) btn.textContent = '🌙 Night';
  }
  // 应用到localStorage（所有页面都会同步）
  if (save) localStorage.setItem('theme', mode);
}

function listenThemeSync() {
  window.addEventListener('storage', (e) => {
    if (e.key === 'theme' && e.newValue) {
      setTheme(e.newValue, false);
    }
  });
}

function toggleTheme() {
  if (document.body.classList.contains('dark-mode')) {
    setTheme('light', true);
  } else {
    setTheme('dark', true);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  renderProducts();

  let sel = document.getElementById('langSelect');
  if (sel) {
    sel.value = localStorage.getItem('lang') || 'en';
    setLang(sel.value);
    sel.addEventListener('change', function() {
      setLang(this.value);
      localStorage.setItem('lang', this.value);
    });
  }
  let themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
    let theme = localStorage.getItem('theme');
    if (!theme) {
      theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    setTheme(theme, false);
    listenThemeSync();
  }
});