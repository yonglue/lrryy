// 简易多语言切换
const translations = {
  es: {
    home: "Inicio",
    products: "Productos",
    suppliers: "Proveedores",
    services: "Servicios de Comercio",
    about: "Sobre Nosotros",
    contact: "Contacto",
    slogan: "Productos globales, directo a Latinoamérica",
    subtitle: "Cualquier producto, cualquier país, su socio confiable para América Latina.",
    search: "Buscar",
    hot_categories: "Categorías Populares",
    cat_agriculture: "Productos Agrícolas",
    cat_machinery: "Maquinaria y Herramientas",
    cat_consumer: "Bienes de Consumo",
    cat_auto: "Repuestos de Automóviles",
    about_title: "Sobre Latam Trade Hub",
    about_text: "Nos dedicamos a conectar proveedores globales con compradores en Sudamérica y Latinoamérica, brindando soluciones confiables de abastecimiento, traducción, logística y pagos.",
    contact_title: "Contáctenos"
  },
  pt: {
    home: "Início",
    products: "Produtos",
    suppliers: "Fornecedores",
    services: "Serviços de Comércio",
    about: "Sobre Nós",
    contact: "Contato",
    slogan: "Produtos globais, direto para a América Latina",
    subtitle: "Qualquer produto, qualquer país, seu parceiro de confiança para a América Latina.",
    search: "Pesquisar",
    hot_categories: "Categorias Populares",
    cat_agriculture: "Produtos Agrícolas",
    cat_machinery: "Máquinas e Ferramentas",
    cat_consumer: "Bens de Consumo",
    cat_auto: "Peças Automotivas",
    about_title: "Sobre o Latam Trade Hub",
    about_text: "Dedicamo-nos a conectar fornecedores globais com compradores na América do Sul e América Latina, fornecendo soluções confiáveis de sourcing, tradução, logística e pagamento.",
    contact_title: "Contate-nos"
  },
  en: {
    home: "Home",
    products: "Products",
    suppliers: "Suppliers",
    services: "Trade Services",
    about: "About Us",
    contact: "Contact",
    slogan: "Global Products, Direct to Latin America",
    subtitle: "Any product, any country, your trusted sourcing partner for Latin America.",
    search: "Search",
    hot_categories: "Hot Categories",
    cat_agriculture: "Agricultural Products",
    cat_machinery: "Machinery & Tools",
    cat_consumer: "Consumer Goods",
    cat_auto: "Auto Parts",
    about_title: "About Latam Trade Hub",
    about_text: "We are dedicated to connecting global suppliers with buyers in South America and Latin America, providing reliable sourcing, translation, logistics, and payment solutions.",
    contact_title: "Contact Us"
  },
  zh: {
    home: "首页",
    products: "产品中心",
    suppliers: "供应商",
    services: "贸易服务",
    about: "关于我们",
    contact: "联系我们",
    slogan: "全球商品，一站直达拉美",
    subtitle: "任何商品，任何国家，您值得信赖的拉美采购中介。",
    search: "搜索",
    hot_categories: "热门分类",
    cat_agriculture: "农产品",
    cat_machinery: "机械与工具",
    cat_consumer: "消费品",
    cat_auto: "汽车配件",
    about_title: "关于Latam Trade Hub",
    about_text: "我们致力于将全球供应商与南美和拉美买家连接，提供可靠的采购、翻译、物流和支付解决方案。",
    contact_title: "联系我们"
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

// 默认页面加载为英文，可根据需要修改
document.addEventListener("DOMContentLoaded", () => setLang('en'));
