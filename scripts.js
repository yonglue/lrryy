const translations = {
    en: {
        welcome: "Welcome to EXPORTODO",
        home: "Home",
        about: "About Us",
        services: "Services",
        contact: "Contact",
        discover: "Discover Unique Vintage Items from Around the World",
        description: "We specialize in sourcing and delivering the finest vintage items from overseas. Whether you're looking for rare collectibles, classic fashion, or unique home decor, we've got you covered.",
        "about-title": "About Us",
        "about-description": "Our mission is to bring the charm of vintage finds to your doorstep. With years of experience in the industry, we carefully select and curate each item to ensure the highest quality and authenticity.",
        "services-title": "Our Services",
        "service-1": "Personal Shopping Assistance",
        "service-2": "Worldwide Shipping",
        "service-3": "Gift Wrapping and Customization",
        "contact-title": "Contact Us"
    },
    zh: {
        welcome: "欢迎来到 EXPORTODO",
        home: "主页",
        about: "关于我们",
        services: "服务",
        contact: "联系我们",
        discover: "发现来自世界各地的独特复古商品",
        description: "我们专注于海外优质复古商品的采购和配送。无论您在寻找稀有收藏品、经典时尚还是独特的家居装饰，我们都能满足您的需求。",
        "about-title": "关于我们",
        "about-description": "我们的使命是将复古的魅力带到您的家门口。凭借多年的行业经验，我们精心挑选和策划每一件商品，以确保最高的质量和真实性。",
        "services-title": "我们的服务",
        "service-1": "个性化购物辅助",
        "service-2": "全球配送",
        "service-3": "礼品包装和定制",
        "contact-title": "联系我们"
    },
    es: {
        welcome: "Bienvenido a EXPORTODO",
        home: "Inicio",
        about: "Sobre Nosotros",
        services: "Servicios",
        contact: "Contacto",
        discover: "Descubre Artículos Vintage Únicos de Todo el Mundo",
        description: "Nos especializamos en la búsqueda y entrega de los mejores artículos vintage del extranjero. Ya sea que esté buscando coleccionables raros, moda clásica o decoración única para el hogar, lo tenemos cubierto.",
        "about-title": "Sobre Nosotros",
        "about-description": "Nuestra misión es llevar el encanto de los hallazgos vintage a su puerta. Con años de experiencia en la industria, seleccionamos y curamos cuidadosamente cada artículo para garantizar la más alta calidad y autenticidad.",
        "services-title": "Nuestros Servicios",
        "service-1": "Asistencia de Compras Personalizada",
        "service-2": "Envío Mundial",
        "service-3": "Envoltura y Personalización de Regalos",
        "contact-title": "Contáctenos"
    }
};

function setLanguage(language) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[language][key];
    });
}