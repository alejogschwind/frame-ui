import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
const resources = {
  es: {
    translation: {
      "What it is Frame?": `<bold>Frame</bold> es una productora de contenido audiovisual con más de <bold>15 años</bold> en el mercado, que brinda soluciones integrales de alta calidad en la realización de productos para cine, publicidad, televisión, video, dispositivos móviles e internet.
      <break /> <break />Cubrimos en forma integrales las necesidades de nuestros clientes, ofreciendo servicios creativos, de producción, realización y postproducción.`,
      "English": "Ingles",
      "Spanish": "Español",
      "Home": "Inicio",
      "Servicies": "Servicios",
      "Portfolio": "Portafolio",
      "Contact": "Contacto",
      "Light": "Claro",
      "Dark": "Oscuro",
      "Development": "Desarrollo de contenido digital multiplataforma",
      "Branding": "Branding Tv",
      "Marketing": "Marketing digital",
      "PostProduction": "Servicio de post producción",
      "Production": "Desarrollo y producción de formatos",
      "Studio": "Estudio y técnica",
      "KnowUs": "Conocenos",
      "See More": "Ver Más",
      "Give us a call": "Llámenos o visítenos en cualquier momento, nos esforzamos por responder a todas las consultas dentro de las 24 horas los días hábiles. Estaremos encantados de responder a sus preguntas.",
      "Let's work together": "Trabajemos juntos",
      "Your email is kept private": "Tu email se mantiene privado. <br /> Los campos obligatorios estan marcados con un *",
      "Our Addresses": "Nuestras Direcciones",
      "Our Email": "Nuestro Correo",
      "Our Phone Number": "Nuestro Teléfono",
      "Name *": "Nombre *",
      "Email *": "Email *",
      "Message *": "Mensaje *",
      "Send": "Enviar",
      "Our team is": `
        Nuestro equipo está a tu disposición para cualquier duda. Completá el formulario y nos pondremos en contacto contigo lo antes posible.
      `,
      "In Recents Years": `
        Frame es una productora de contenido audiovisual con más de 15 años en el mercado, que brinda soluciones integrales de alta calidad en la realización de productos para cine, publicidad, televisión, video, dispositivos móviles e internet.
        <br /> <br />Cubrimos en forma integrales las necesidades de nuestros clientes, ofreciendo servicios creativos, de producción, realización y postproducción.
      `,
      "Frame is an audiovisual": `
      Desarrollamos contenido y producimos piezas promocionales, especiales, intersticiales, institucionales, trailers, teasers, video clips, campañas integrales. Contamos con la infraestructura profesional y técnica para llevar adelante producciones promocionales de gran volumen, optimizando tiempos y superando objetivos. Nuestros pilares se centran en la coordinación de equipo, selección de profesionales y recursos técnicos propios, para alcanzar con éxito las necesidades del cliente.
    `,
      "Various brands": `
        Diversas marcas nos buscaron para realizar acciones y desarrollar contenidos digitales para sus productos. Experiencias 360°, Shows musicales, productplacement en contenidos original, desarrollo de campañas transmedia, son algunas de los formatos que realizamos para Hewlett Packard, Movistar, Foreo, Faber Castel, entre otras.
    `,
      "We provide": `
      Brindamos servicio de post-producción integral contando con una gran infraestructura. Diseñamos el workflow necesario para cada cliente, pensándolo en conjunto y utilizando herramientas de gestión online como Trello y Sony Ci para agilizar tiempos y lograr los objetivos de una manera clara y sencilla.
    `,
      "Disney Channel": `
      Disney Channel, El Gourmet, Netflix, Canal Encuentro, LN+, son algunos de los importantes y variados clientes que confiaron en nosotros a la hora de desarrollar y producir formatos de manera integral. Contamos con profesionales de amplia experiencia en el medio en todas las áreas para llevar adelante la creatividad, la pre-producción, realización y post-producción.
      `,
      "In recent years": `
        En los últimos años hemos enfocado nuestra creatividad y estrategia de producción en la creación de contenidos short forms para medios digitales. Nuestro contenido original en YouTube alcanzó + de 11M de suscriptores y + de 200M de vistas en 3 años. Somos 1 de las 10 Youtube Network que existen en Argentina y service provider de Google en la región.
      `,
      "Our Facilities": `
        Nuestras instalaciones
      `,
      "Tronador Studio": `
        Estudio Tronador
      `,
      "530 square": `
        Estudio de 480M2 <br />
        (400M2 con parrilla) <br />
        Sala de make up/vestuario <br />
        3 camarines <br />
        Oficina de producción<br />
        Baño Hombres <br />
        Baño Mujeres <br />
        Cocina <br />
        Espacio para Catering <br/>
      `,
      "Technical theatre": `
        480M2 (400M2 CON PARRILLA)<br />
        Parrilla: pasarela - cabreadas cada 2mts <br />
        Altura a parrilla: 5,5mts<br />
        Carga eléctrica hasta 40kilos<br />
        Aire acondicionado / Calefacción central <br />
        Tableros - 60 circuitos de doble boca vinculados a 60 dimmers. <br />
        Dimmer y consola de 36 canales <br />
        Entrada directa de camiones <br />
        Depósito de 200m2 <br />
        Generador de 100KVA <br />
      `,
      "Client": "Cliente",
      "Previous": "Anterior",
      "Next": "Siguiente",
      "Go Back": "Volver",
    }
  },
  en: {
    translation: {
      "What it is Frame?": `<bold>Frame</bold> is an audiovisual content production company with more than <bold>15 years</bold> in the market, which provides high quality comprehensive solutions in the realization of products for cinema, advertising, television, video, mobile devices and Internet.
      <break /> <break />We fully cover the needs of our customers, offering creative, production and post production services.`,
      "English": "English",
      "Spanish": "Spanish",
      "Home": "Home",
      "Servicies": "Servicies",
      "Portfolio": "Portfolio",
      "Contact": "Contact",
      "Light": "Light",
      "Dark": "Dark",
      "Development": "Multiplatform digital content development",
      "Branding": "Branding Tv",
      "Marketing": "Digital marketing",
      "PostProduction": "Post production services",
      "Production": "Format development and production",
      "Studio": "Tv studio and technical equipment hire",
      "KnowUs": "Know Us",
      "See More": "See More",
      "Give us a call": "Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.",
      "Let's work together": "Let's work together",
      "Your email is kept private": "Your email is kept private. <br /> Required fields are marked with *",
      "Our Addresses": "Our Addresses",
      "Our Email": "Our Email",
      "Our Phone Number": "Our Phone Number",
      "Name *": "Name *",
      "Email *": "Email *",
      "Message *": "Message *",
      "Send": "Send",
      "Our team is": `
        Our team is at your disposal for any questions. Complete the form and we will contact you as soon as possible.
      `,
      "In Recents Years": `
        In recent years we have focused our creativity and production strategy on the creation of short-form content for digital media. Our original YouTube content reached + 11M subscribers and + 200M views in 3 years. We are 1 of the 10 YouTube -Network that exist in Argentina and Google Service provider in the region.
        <br /> <br />
        Facebook-Instagram chose us to boost its Instagram TV platform (IGTV), generating special episodes that achieved + 1.5M views in record times.
        <br /> <br />
        Disney LA trusted us to carry out the strategy and production of the digital content of the Disney Channel, XD, JR signals and especially all the transmedia content of its new Disney Channel TV series, Bia.
      `,
      "Frame is an audiovisual": `
        Frame is an audiovisual content production company with more than 15 years in the market, which provides high quality comprehensive solutions in the realization of products for cinema, advertising, television, video, mobile devices and Internet.
        We fully cover the needs of our customers, offering creative, production and post production services.
      `,
      "Various brands": `
        Various brands sought us to carry out actions and develop digital content for their products. Experiences 360 º, Musical shows, product-placement in original content, development of transmedia campaigns, are some of the formats we do for Hewlett Packard, Movistar, Foreo, Faber Castel, among others.
      `,
      "We provide": `
        We provide comprehensive post production services with a great infrastructure. We design the necessary workflow for each client, thinking together and using online management tools, such as Trello and Sony Ci, to speed up times and achieve the objectives in a clear and simple way.
      `,
      "Disney Channel": `
        Disney Channel, Netflix, El Gourmet, LN+, they are some of the important and varied clients that trusted us for developing and producing formats in an integral way. We have professionals with extensive experience in the field in all areas to carry out creativity, pre-production, realization and post-production.
      `,
      "In recent years": `
        In recent years we have focused our creativity and production strategy on the creation of short forms content for digital media. Our original content on YouTube reached + 11M subscribers and + 200M views in 3 years. We are 1 of the 10 Youtube Networks that exist in Argentina and a Google service provider in the region.
      `,
      "Our Facilities": `
        Our Facilities
      `,
      "Tronador Studio": `
        Tronador Studio
      `,
      "530 square": `
        530 square yards TV studio<br />
        Control Room<br />
        Make up and dressing rooms (3)<br />
        Production office<br />
        Kitchen and bathrooms<br />
        Catering area<br />
      `,
      "Technical theatre": `
        Technical theatre grid - 18 feet tall<br />
        Electric charge up to 40 kg<br />
        Air conditioner / Central heat<br />
        Electronic board - 60 double mouth circuits linked to 60 dimmers<br />
        Dimmer and 36 channels console<br />
        Direct truck entry<br />
        220 square yards warehouse<br />
        100KVA diesel generator<br />
      `,
      "Client": "Client",
      "Previous": "Previous",
      "Next": "Next",
      "Go Back": "Go Back",
    }
  }
};

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: "es",
    fallbackLng: 'en',
    debug: true,


    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;