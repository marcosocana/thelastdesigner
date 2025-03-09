
import { Question } from "@/types";

export const questions: Question[] = [
  // Round 1: Fundamentos de UX
  {
    id: 1,
    round: 1,
    text: "¿Qué significa UX?",
    options: [
      "User Experience", 
      "User Examination", 
      "User Extension", 
      "User Extraction"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    round: 1,
    text: "¿Cuál de estos NO es uno de los 5 elementos de la UX según Jesse James Garrett?",
    options: [
      "Estrategia", 
      "Alcance", 
      "Estética", 
      "Estructura"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    round: 1,
    text: "¿Quién es considerado el padre de la experiencia de usuario?",
    options: [
      "Steve Jobs", 
      "Don Norman", 
      "Jakob Nielsen", 
      "Alan Cooper"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    round: 1,
    text: "¿Qué es un wireframe?",
    options: [
      "Un archivo de imagen de alta resolución", 
      "Un esquema visual de bajo nivel de una interfaz", 
      "Una animación en 3D", 
      "Un componente de JavaScript"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    round: 1,
    text: "¿Qué es la 'arquitectura de información'?",
    options: [
      "El diseño de edificios para oficinas", 
      "La organización y estructura del contenido de un producto digital", 
      "La infraestructura tecnológica de un sitio web", 
      "El diseño del departamento de TI de una empresa"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    round: 1,
    text: "¿Cuál es la diferencia principal entre UX y UI?",
    options: [
      "UX se enfoca en lo visual, UI en la funcionalidad", 
      "UX es la experiencia completa, UI es la interfaz visual", 
      "UX es para web, UI para móviles", 
      "UX es para desarrolladores, UI para diseñadores"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    round: 1,
    text: "¿Qué es un 'User Journey'?",
    options: [
      "Un viaje organizado para usuarios de un producto", 
      "El recorrido y experiencia de un usuario al usar un producto", 
      "Una historia de ficción sobre un usuario ideal", 
      "La documentación técnica para usuarios nuevos"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    round: 1,
    text: "¿Qué es un 'Pain Point' en UX?",
    options: [
      "Un error en el código que causa fallos", 
      "Un problema o frustración que experimenta el usuario", 
      "Un punto de referencia en un mapa de sitio", 
      "Un elemento visual que causa fatiga visual"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    round: 1,
    text: "¿Qué es una 'Persona' en UX?",
    options: [
      "Un personaje de ficción en una historia de usuario", 
      "El perfil arquetípico de un usuario ideal", 
      "Un avatar digital que representa al diseñador", 
      "Un cliente importante de una empresa"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    round: 1,
    text: "¿Cuál de estos es un principio fundamental de la UX?",
    options: [
      "Hacer que el usuario trabaje más para valorar el producto", 
      "Diseñar para impresionar a otros diseñadores", 
      "Centrarse en las necesidades y objetivos del usuario", 
      "Usar siempre las últimas tendencias en diseño"
    ],
    correctAnswer: 2
  },
  
  // Round 2: UI y Diseño Visual
  {
    id: 11,
    round: 2,
    text: "¿Qué es una paleta de colores?",
    options: [
      "Una herramienta física para mezclar pinturas", 
      "Un conjunto limitado de colores para un diseño", 
      "Un software de diseño gráfico", 
      "Un modelo matemático de colores"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    round: 2,
    text: "¿Qué significa el acrónimo RGB en diseño visual?",
    options: [
      "Rapid Graphics Builder", 
      "Real Good Brightness", 
      "Red, Green, Blue", 
      "Responsive Grid Basis"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    round: 2,
    text: "¿Qué es una fuente serif?",
    options: [
      "Una fuente sin adornos en los extremos de las letras", 
      "Una fuente con adornos en los extremos de las letras", 
      "Una fuente decorativa", 
      "Una fuente monoespaciada"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    round: 2,
    text: "¿Qué es el 'kerning' en tipografía?",
    options: [
      "El tamaño de la fuente", 
      "El grosor de los caracteres", 
      "El espacio entre caracteres específicos", 
      "La altura de la línea de texto"
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    round: 2,
    text: "¿Qué es la jerarquía visual?",
    options: [
      "La organización de elementos según su importancia", 
      "El orden cronológico de elementos en una página", 
      "El tamaño de los elementos en una interfaz", 
      "La estructura técnica de un sitio web"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    round: 2,
    text: "¿Qué tipo de contraste se crea al combinar colores complementarios?",
    options: [
      "Contraste de valor", 
      "Contraste de saturación", 
      "Contraste complementario", 
      "Contraste de temperatura"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    round: 2,
    text: "¿Qué es una retícula (grid) en diseño UI?",
    options: [
      "Un patrón decorativo", 
      "Una estructura que ayuda a organizar los elementos en la página", 
      "Un tipo de gráfico estadístico", 
      "Un efecto visual de degradado"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    round: 2,
    text: "¿Qué es el 'whitespace' o espacio en blanco en diseño?",
    options: [
      "El color de fondo blanco", 
      "Un error de renderizado en la pantalla", 
      "El espacio vacío intencional entre elementos", 
      "Una técnica para resaltar texto importante"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    round: 2,
    text: "¿Qué es un 'call to action' (CTA)?",
    options: [
      "Un botón o enlace que invita al usuario a realizar una acción", 
      "Una llamada telefónica para soporte técnico", 
      "Una alerta de error en la interfaz", 
      "Un recordatorio para los usuarios inactivos"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    round: 2,
    text: "¿Qué formato de imagen es mejor para iconos e ilustraciones con líneas definidas?",
    options: [
      "JPEG", 
      "GIF", 
      "PNG", 
      "SVG"
    ],
    correctAnswer: 3
  },
  
  // Round 3: Design Systems
  {
    id: 21,
    round: 3,
    text: "¿Qué es un Design System?",
    options: [
      "Un software para diseñar interfaces", 
      "Un conjunto de patrones, componentes y principios para crear productos digitales coherentes", 
      "Un método de organización de archivos de diseño", 
      "Un estilo visual específico creado por una empresa"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    round: 3,
    text: "¿Cuál de estos NO es un beneficio principal de los Design Systems?",
    options: [
      "Mejora la consistencia visual y funcional", 
      "Acelera el proceso de diseño y desarrollo", 
      "Elimina la necesidad de hacer pruebas con usuarios", 
      "Facilita la colaboración entre equipos"
    ],
    correctAnswer: 2
  },
  {
    id: 23,
    round: 3,
    text: "¿Qué son los 'tokens' en un Design System?",
    options: [
      "Valores reutilizables que representan elementos de diseño", 
      "Monedas digitales para acceder al sistema", 
      "Permisos de acceso para los desarrolladores", 
      "Los iconos y logotipos de la marca"
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    round: 3,
    text: "¿Qué es una 'biblioteca de componentes' en un Design System?",
    options: [
      "Una colección física de libros sobre diseño", 
      "Un repositorio de elementos de UI reutilizables", 
      "Un conjunto de plantillas de documentos", 
      "El historial de versiones anteriores del sistema"
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    round: 3,
    text: "¿Qué conocido Design System fue creado por Google?",
    options: [
      "Carbon", 
      "Material Design", 
      "Human Interface Guidelines", 
      "Fluent Design"
    ],
    correctAnswer: 1
  },
  {
    id: 26,
    round: 3,
    text: "¿Qué es un 'atomic design'?",
    options: [
      "Un estilo minimalista de diseño", 
      "Una metodología que construye interfaces desde elementos básicos hasta complejos", 
      "Un software para crear animaciones", 
      "Un tipo de diseño inspirado en la física cuántica"
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    round: 3,
    text: "En Atomic Design, ¿cuáles son los niveles de componentes en orden correcto?",
    options: [
      "Átomos, Moléculas, Organismos, Templates, Páginas", 
      "Bits, Elementos, Componentes, Secciones, Páginas", 
      "Partículas, Elementos, Bloques, Secciones, Vistas", 
      "Puntos, Líneas, Formas, Composiciones, Interfaces"
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    round: 3,
    text: "¿Qué herramienta es especialmente útil para documentar Design Systems?",
    options: [
      "Microsoft Word", 
      "Adobe Photoshop", 
      "Storybook", 
      "Google Analytics"
    ],
    correctAnswer: 2
  },
  {
    id: 29,
    round: 3,
    text: "¿Qué es un 'living Design System'?",
    options: [
      "Un Design System con animaciones", 
      "Un Design System que evoluciona y se actualiza constantemente", 
      "Un Design System inspirado en la naturaleza", 
      "Un Design System con elementos 3D"
    ],
    correctAnswer: 1
  },
  {
    id: 30,
    round: 3,
    text: "¿Qué aspecto es fundamental para mantener un Design System efectivo?",
    options: [
      "Cambiar completamente el sistema cada año", 
      "Limitar el acceso solo al equipo de diseño", 
      "Gobernanza y procesos de actualización claros", 
      "Utilizar exclusivamente tecnologías propietarias"
    ],
    correctAnswer: 2
  },
  
  // Round 4: Research y Data-Driven Design
  {
    id: 31,
    round: 4,
    text: "¿Qué es el 'User Research'?",
    options: [
      "Investigación de mercado para nuevos productos", 
      "El estudio sistemático de usuarios para entender sus necesidades y comportamientos", 
      "Un análisis de la competencia", 
      "Una técnica para clasificar usuarios por demografía"
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    round: 4,
    text: "¿Qué es una 'entrevista contextual' en investigación UX?",
    options: [
      "Una entrevista realizada en el entorno donde el usuario utiliza el producto", 
      "Una entrevista enfocada en el contexto del negocio", 
      "Una entrevista improvisada sin preparación", 
      "Una entrevista con varios participantes simultáneamente"
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    round: 4,
    text: "¿Qué es un 'test de usabilidad'?",
    options: [
      "Una prueba técnica del rendimiento del sistema", 
      "Una evaluación de la seguridad de la aplicación", 
      "Una evaluación de cómo los usuarios interactúan con un producto", 
      "Un cuestionario sobre las preferencias del usuario"
    ],
    correctAnswer: 2
  },
  {
    id: 34,
    round: 4,
    text: "¿Qué tipo de datos proporciona el análisis cuantitativo?",
    options: [
      "Datos narrativos y descriptivos", 
      "Datos numéricos y estadísticos", 
      "Datos sobre las emociones de los usuarios", 
      "Datos sobre la historia de la empresa"
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    round: 4,
    text: "¿Qué es un 'heat map' en el análisis de datos UX?",
    options: [
      "Un mapa del clima global", 
      "Una representación visual que muestra las áreas donde los usuarios hacen clic o prestan más atención", 
      "Un diagrama de temperatura del servidor", 
      "Un análisis del rendimiento del equipo de diseño"
    ],
    correctAnswer: 1
  },
  {
    id: 36,
    round: 4,
    text: "¿Qué es la tasa de conversión en el contexto de UX?",
    options: [
      "El porcentaje de usuarios que visitan más de una página", 
      "El porcentaje de usuarios que completan una acción deseada", 
      "La velocidad a la que los usuarios cambian de dispositivo", 
      "El número de conversaciones iniciadas en el chat de soporte"
    ],
    correctAnswer: 1
  },
  {
    id: 37,
    round: 4,
    text: "¿Qué es el 'card sorting' en investigación UX?",
    options: [
      "Una técnica para organizar tarjetas de presentación", 
      "Un método donde los usuarios organizan temas en categorías para entender su modelo mental", 
      "Una forma de ordenar componentes visuales", 
      "Un juego para entretener a los participantes durante las pruebas"
    ],
    correctAnswer: 1
  },
  {
    id: 38,
    round: 4,
    text: "¿Qué métrica mide el esfuerzo que un usuario debe realizar para completar una tarea?",
    options: [
      "Tasa de rebote", 
      "Puntuación de satisfacción", 
      "Índice de esfuerzo del cliente (CES)", 
      "Tasa de conversión"
    ],
    correctAnswer: 2
  },
  {
    id: 39,
    round: 4,
    text: "¿Qué es un 'A/B test' en diseño basado en datos?",
    options: [
      "Una prueba alfabética de nombres de productos", 
      "Una comparación entre dos versiones (A y B) para ver cuál funciona mejor", 
      "Un test para comparar dos grupos demográficos diferentes", 
      "Una evaluación de la versión alfa versus la beta"
    ],
    correctAnswer: 1
  },
  {
    id: 40,
    round: 4,
    text: "¿Qué significa NPS en el contexto de investigación de usuarios?",
    options: [
      "New Product Strategy", 
      "Net Profit Score", 
      "Net Promoter Score", 
      "Natural Person Survey"
    ],
    correctAnswer: 2
  },
  
  // Round 5: UX Writing & Microcopy
  {
    id: 41,
    round: 5,
    text: "¿Qué es el UX Writing?",
    options: [
      "La documentación técnica de un producto", 
      "La redacción de textos para la interfaz de usuario que guían al usuario", 
      "La escritura de artículos sobre experiencia de usuario", 
      "La creación de manuales para diseñadores UX"
    ],
    correctAnswer: 1
  },
  {
    id: 42,
    round: 5,
    text: "¿Qué es el 'microcopy'?",
    options: [
      "Textos muy pequeños difíciles de leer", 
      "Palabras o frases breves en la interfaz que guían al usuario", 
      "Derechos de autor de elementos pequeños", 
      "Una forma de copyright para fragmentos de texto"
    ],
    correctAnswer: 1
  },
  {
    id: 43,
    round: 5,
    text: "¿Cuál es un principio fundamental del UX Writing?",
    options: [
      "Usar terminología técnica para parecer profesional", 
      "Escribir textos largos y detallados", 
      "Ser claro, conciso y útil", 
      "Usar jerga específica de la industria"
    ],
    correctAnswer: 2
  },
  {
    id: 44,
    round: 5,
    text: "¿Qué es un 'empty state'?",
    options: [
      "Un error en la aplicación", 
      "Una página en blanco sin diseñar", 
      "Una pantalla que se muestra cuando no hay contenido disponible", 
      "Un estado de depresión del diseñador"
    ],
    correctAnswer: 2
  },
  {
    id: 45,
    round: 5,
    text: "¿Qué es la 'voz de marca' en UX Writing?",
    options: [
      "Un asistente de voz como Siri o Alexa", 
      "El tono y personalidad consistentes en todos los textos", 
      "La voz del narrador en videos promocionales", 
      "El volumen recomendado para usar la aplicación"
    ],
    correctAnswer: 1
  },
  {
    id: 46,
    round: 5,
    text: "¿Qué es un 'mensaje de error' efectivo?",
    options: [
      "Uno que usa términos técnicos detallados", 
      "Uno que culpa al usuario por el error", 
      "Uno que explica qué salió mal y cómo resolverlo", 
      "Uno que incluye un código de error numérico largo"
    ],
    correctAnswer: 2
  },
  {
    id: 47,
    round: 5,
    text: "¿Qué es un 'CTA' (Call to Action) en el contexto de UX Writing?",
    options: [
      "Un texto que anima al usuario a realizar una acción específica", 
      "Un aviso de cierre temporal de la aplicación", 
      "Un mensaje automático generado por el sistema", 
      "Una notificación crítica sobre problemas técnicos"
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    round: 5,
    text: "¿Qué es la 'jerarquía de información' en UX Writing?",
    options: [
      "La organización del texto según su importancia", 
      "El tamaño de diferentes fuentes en la página", 
      "El número de palabras permitidas en cada sección", 
      "El organigrama del equipo de contenido"
    ],
    correctAnswer: 0
  },
  {
    id: 49,
    round: 5,
    text: "¿Por qué es importante la consistencia en UX Writing?",
    options: [
      "Para ahorrar tiempo al equipo de diseño", 
      "Para evitar confusiones y crear familiaridad para el usuario", 
      "Para facilitar las traducciones a otros idiomas", 
      "Para cumplir con requisitos legales"
    ],
    correctAnswer: 1
  },
  {
    id: 50,
    round: 5,
    text: "¿Qué es un 'tone map' en UX Writing?",
    options: [
      "Un mapa del sitio web con colores que representan diferentes secciones", 
      "Una guía de cómo ajustar el tono del contenido según el contexto", 
      "Una herramienta para analizar la entonación en asistentes de voz", 
      "Un gráfico que muestra las opiniones de los usuarios"
    ],
    correctAnswer: 1
  },
  
  // Round 6: Mobile UX y Responsive Design
  {
    id: 51,
    round: 6,
    text: "¿Qué es el 'diseño responsive'?",
    options: [
      "Un diseño que responde a las interacciones del usuario", 
      "Un enfoque de diseño que permite que las páginas se adapten a diferentes tamaños de pantalla", 
      "Un diseño que responde rápidamente a cambios en el sistema", 
      "Un diseño que incluye animaciones interactivas"
    ],
    correctAnswer: 1
  },
  {
    id: 52,
    round: 6,
    text: "¿Qué es un 'breakpoint' en diseño responsive?",
    options: [
      "Un punto donde el código deja de funcionar", 
      "Un punto de interrupción donde el diseño cambia para adaptarse a diferentes tamaños de pantalla", 
      "Un error en el código CSS", 
      "Un punto donde se coloca un descanso visual en la interfaz"
    ],
    correctAnswer: 1
  },
  {
    id: 53,
    round: 6,
    text: "¿Qué significa 'mobile-first design'?",
    options: [
      "Diseñar exclusivamente para dispositivos móviles", 
      "Un enfoque donde se diseña primero para dispositivos móviles y luego se amplía para pantallas más grandes", 
      "Una técnica donde los móviles son los primeros en probar un diseño", 
      "Un diseño que solo funciona en teléfonos de última generación"
    ],
    correctAnswer: 1
  },
  {
    id: 54,
    round: 6,
    text: "¿Qué es un 'hamburger menu' en el diseño de interfaces móviles?",
    options: [
      "Un menú para pedir comida", 
      "Un icono de tres líneas horizontales que despliega el menú principal", 
      "Un tipo específico de menú para restaurantes", 
      "Un diseño de navegación inspirado en capas"
    ],
    correctAnswer: 1
  },
  {
    id: 55,
    round: 6,
    text: "¿Cuál es la principal diferencia entre una aplicación nativa y una web app?",
    options: [
      "Las aplicaciones nativas están escritas en idiomas locales", 
      "Las aplicaciones nativas están instaladas directamente en el dispositivo y están optimizadas para él", 
      "Las web apps son siempre de pago mientras que las nativas son gratuitas", 
      "Las web apps funcionan sin conexión a internet mientras que las nativas requieren conexión"
    ],
    correctAnswer: 1
  },
  {
    id: 56,
    round: 6,
    text: "¿Qué es la 'zona de alcance del pulgar' en diseño móvil?",
    options: [
      "El área de la pantalla que un usuario puede alcanzar cómodamente con el pulgar mientras sostiene el dispositivo", 
      "El espacio necesario para colocar huellas dactilares en la pantalla", 
      "El tamaño mínimo recomendado para botones táctiles", 
      "Una técnica para medir el tamaño de la pantalla"
    ],
    correctAnswer: 0
  },
  {
    id: 57,
    round: 6,
    text: "¿Qué es una 'unidad relativa' en CSS para diseño responsive?",
    options: [
      "Una medida que depende del tamaño de otro elemento", 
      "Una unidad que solo se usa en tablets", 
      "Un valor estándar determinado por el W3C", 
      "Una unidad que cambia según la conexión a internet"
    ],
    correctAnswer: 0
  },
  {
    id: 58,
    round: 6,
    text: "¿Qué es el 'scroll infinito' en diseño móvil?",
    options: [
      "Un error que hace que la página no tenga fin", 
      "Una técnica donde el contenido se carga continuamente al llegar al final de la página", 
      "Un tipo de animación que simula un pergamino infinito", 
      "Una característica que permite desplazarse horizontalmente sin límites"
    ],
    correctAnswer: 1
  },
  {
    id: 59,
    round: 6,
    text: "¿Qué significa PWA?",
    options: [
      "Personal Web Application", 
      "Progressive Web App", 
      "Powerful Web Access", 
      "Professional Web Architecture"
    ],
    correctAnswer: 1
  },
  {
    id: 60,
    round: 6,
    text: "¿Qué técnica de diseño responsive permite reorganizar elementos en diferentes columnas según el tamaño de pantalla?",
    options: [
      "Sticky positioning", 
      "Media queries", 
      "Fixed layout", 
      "Absolute positioning"
    ],
    correctAnswer: 1
  },
  
  // Round 7: Prototipado y Herramientas
  {
    id: 61,
    round: 7,
    text: "¿Qué es un prototipo en UX/UI?",
    options: [
      "Una versión final del producto", 
      "Una simulación o modelo de cómo funcionará el producto final", 
      "Un boceto a mano alzada", 
      "Un documento que describe las funcionalidades"
    ],
    correctAnswer: 1
  },
  {
    id: 62,
    round: 7,
    text: "¿Cuál es la diferencia entre un prototipo de baja fidelidad y uno de alta fidelidad?",
    options: [
      "Los de baja fidelidad son digitales y los de alta fidelidad son impresos", 
      "Los de baja fidelidad son básicos y conceptuales, mientras que los de alta fidelidad se parecen más al producto final", 
      "Los de baja fidelidad son más caros de producir", 
      "No hay diferencia, son términos intercambiables"
    ],
    correctAnswer: 1
  },
  {
    id: 63,
    round: 7,
    text: "¿Qué herramienta NO es principalmente para diseño de interfaces?",
    options: [
      "Figma", 
      "Sketch", 
      "Adobe XD", 
      "GIMP"
    ],
    correctAnswer: 3
  },
  {
    id: 64,
    round: 7,
    text: "¿Qué permite hacer la función 'Auto Layout' en Figma?",
    options: [
      "Distribuir automáticamente los elementos en la pantalla aleatoriamente", 
      "Crear layouts que se adaptan y reorganizan cuando se modifican los contenidos", 
      "Convertir automáticamente un diseño web en un diseño móvil", 
      "Actualizar automáticamente el diseño según la hora del día"
    ],
    correctAnswer: 1
  },
  {
    id: 65,
    round: 7,
    text: "¿Qué son los 'componentes' en herramientas como Figma o Sketch?",
    options: [
      "Elementos decorativos", 
      "Partes del hardware necesarias para ejecutar el software", 
      "Elementos reutilizables que mantienen consistencia en todo el diseño", 
      "Códigos específicos para programar la interfaz"
    ],
    correctAnswer: 2
  },
  {
    id: 66,
    round: 7,
    text: "¿Qué es un 'handoff' en el proceso de diseño?",
    options: [
      "El momento en que se entrega el diseño finalizado a los desarrolladores", 
      "Una técnica para pasar el control de un proyecto a otro equipo", 
      "El acto de descartar un diseño obsoleto", 
      "Una reunión donde se rechazan ideas de diseño"
    ],
    correctAnswer: 0
  },
  {
    id: 67,
    round: 7,
    text: "¿Qué herramienta permite la colaboración en tiempo real entre diseñadores?",
    options: [
      "Adobe Photoshop", 
      "Figma", 
      "CorelDRAW", 
      "Paint"
    ],
    correctAnswer: 1
  },
  {
    id: 68,
    round: 7,
    text: "¿Qué es un 'design token'?",
    options: [
      "Una moneda digital para diseñadores", 
      "Un certificado de autenticidad del diseño", 
      "Un valor estilístico almacenado (como colores, espaciado) que se puede reutilizar", 
      "Un premio otorgado a diseños excepcionales"
    ],
    correctAnswer: 2
  },
  {
    id: 69,
    round: 7,
    text: "¿Qué permite hacer InVision como herramienta?",
    options: [
      "Programar el backend de una aplicación", 
      "Crear y compartir prototipos interactivos", 
      "Analizar el rendimiento del sitio web", 
      "Editar videos para tutoriales"
    ],
    correctAnswer: 1
  },
  {
    id: 70,
    round: 7,
    text: "¿Qué formato de archivo es nativo de Adobe Photoshop?",
    options: [
      "PNG", 
      "SVG", 
      "PSD", 
      "FIG"
    ],
    correctAnswer: 2
  },
  
  // Round 8: Diseño Inclusivo y Accesibilidad
  {
    id: 71,
    round: 8,
    text: "¿Qué es el diseño inclusivo?",
    options: [
      "Diseñar exclusivamente para personas con discapacidades", 
      "Diseñar productos que pueden ser utilizados por personas con el más amplio rango de capacidades", 
      "Incluir elementos de diferentes culturas en el diseño", 
      "Un tipo de diseño que incluye muchos elementos gráficos"
    ],
    correctAnswer: 1
  },
  {
    id: 72,
    round: 8,
    text: "¿Qué significan las siglas WCAG?",
    options: [
      "Web Content Accessibility Guidelines", 
      "World Creative Arts Guild", 
      "Web Creators Association Group", 
      "Wireframe Creation and Architecture Guide"
    ],
    correctAnswer: 0
  },
  {
    id: 73,
    round: 8,
    text: "¿Qué es el contraste de color en términos de accesibilidad?",
    options: [
      "La diferencia entre colores claros y oscuros para asegurar la legibilidad", 
      "Un efecto visual para hacer el diseño más atractivo", 
      "Una técnica para destacar elementos importantes", 
      "La cantidad de colores utilizados en un diseño"
    ],
    correctAnswer: 0
  },
  {
    id: 74,
    round: 8,
    text: "¿Qué es un 'screen reader'?",
    options: [
      "Una pantalla grande para leer mejor", 
      "Una herramienta que lee el contenido en pantalla para personas con discapacidad visual", 
      "Un software para extraer texto de imágenes", 
      "Una aplicación para mejorar la resolución de la pantalla"
    ],
    correctAnswer: 1
  },
  {
    id: 75,
    round: 8,
    text: "¿Qué representa el atributo 'alt' en una imagen para la accesibilidad?",
    options: [
      "Una versión alternativa de la imagen en otro color", 
      "La alineación de la imagen en la página", 
      "Un texto descriptivo del contenido de la imagen para quienes no pueden verla", 
      "El autor de la imagen"
    ],
    correctAnswer: 2
  },
  {
    id: 76,
    round: 8,
    text: "¿Qué es el 'keyboard navigation' en diseño accesible?",
    options: [
      "Un teclado especial para personas con movilidad reducida", 
      "La capacidad de navegar por un sitio web usando solo el teclado", 
      "Un atajo de teclado para acceder al menú de navegación", 
      "Un teclado digital que aparece en pantalla"
    ],
    correctAnswer: 1
  },
  {
    id: 77,
    round: 8,
    text: "¿Qué nivel de conformidad WCAG es el más estricto?",
    options: [
      "Nivel A", 
      "Nivel AA", 
      "Nivel AAA", 
      "Nivel AAAA"
    ],
    correctAnswer: 2
  },
  {
    id: 78,
    round: 8,
    text: "¿Por qué es importante proporcionar subtítulos en los videos?",
    options: [
      "Para hacer los videos más estéticos", 
      "Para que los usuarios puedan ver el video sin sonido o si tienen discapacidad auditiva", 
      "Para aumentar el SEO del video", 
      "Para proteger el contenido con derechos de autor"
    ],
    correctAnswer: 1
  },
  {
    id: 79,
    round: 8,
    text: "¿Qué es el 'daltonismo' y cómo afecta al diseño?",
    options: [
      "Una teoría de diseño basada en las ideas de John Dalton", 
      "Una condición que afecta la percepción del color, requiriendo considerar combinaciones de colores accesibles", 
      "Un estilo minimalista de diseño", 
      "Una técnica para simplificar interfaces complejas"
    ],
    correctAnswer: 1
  },
  {
    id: 80,
    round: 8,
    text: "¿Qué es una 'trampa de foco' en términos de accesibilidad?",
    options: [
      "Un error donde el usuario no puede salir de un elemento usando el teclado", 
      "Un elemento de diseño que atrae demasiada atención", 
      "Una característica para mantener la concentración del usuario", 
      "Una técnica para resaltar elementos importantes"
    ],
    correctAnswer: 0
  },
  
  // Round 9: Heurísticas y Evaluación UX
  {
    id: 81,
    round: 9,
    text: "¿Qué son las 'heurísticas de Nielsen' en UX?",
    options: [
      "Algoritmos para analizar datos de usuarios", 
      "Principios generales para evaluar la usabilidad de interfaces", 
      "Medidas para calcular el ROI de un proyecto de UX", 
      "Técnicas para realizar entrevistas con usuarios"
    ],
    correctAnswer: 1
  },
  {
    id: 82,
    round: 9,
    text: "¿Cuántas heurísticas de usabilidad definió Jakob Nielsen originalmente?",
    options: [
      "5", 
      "10", 
      "12", 
      "15"
    ],
    correctAnswer: 1
  },
  {
    id: 83,
    round: 9,
    text: "¿Qué es una 'evaluación heurística'?",
    options: [
      "Un test con usuarios reales", 
      "Una revisión de usabilidad realizada por expertos basada en principios establecidos", 
      "Un análisis automático mediante software", 
      "Una encuesta enviada a los usuarios"
    ],
    correctAnswer: 1
  },
  {
    id: 84,
    round: 9,
    text: "Según Nielsen, ¿qué heurística se refiere a la correspondencia entre el sistema y el mundo real?",
    options: [
      "Visibilidad del estado del sistema", 
      "Coincidencia entre el sistema y el mundo real", 
      "Control y libertad del usuario", 
      "Consistencia y estándares"
    ],
    correctAnswer: 1
  },
  {
    id: 85,
    round: 9,
    text: "¿Qué es la 'severidad' en una evaluación heurística?",
    options: [
      "La dificultad para implementar una solución", 
      "La valoración del impacto de un problema de usabilidad", 
      "La frecuencia con la que ocurre un error", 
      "El costo de solucionar un problema"
    ],
    correctAnswer: 1
  },
  {
    id: 86,
    round: 9,
    text: "¿Qué es un 'think-aloud protocol' en evaluación UX?",
    options: [
      "Una técnica donde los usuarios verbalizan sus pensamientos mientras usan el producto", 
      "Un documento que establece las reglas para el equipo de UX", 
      "Una metodología para que los diseñadores expliquen sus decisiones", 
      "Una herramienta para grabar las sesiones de prueba"
    ],
    correctAnswer: 0
  },
  {
    id: 87,
    round: 9,
    text: "¿Qué es un 'cognitive walkthrough' en evaluación UX?",
    options: [
      "Un paseo físico con los usuarios por el espacio de trabajo", 
      "Una revisión paso a paso de cómo los usuarios realizarían tareas específicas", 
      "Un análisis de los procesos cognitivos de los usuarios", 
      "Una técnica para mapear el conocimiento de los usuarios"
    ],
    correctAnswer: 1
  },
  {
    id: 88,
    round: 9,
    text: "¿Qué es un 'eye-tracking' en evaluación UX?",
    options: [
      "Una tecnología que rastrea el movimiento ocular para ver dónde miran los usuarios", 
      "Un método para seguir la evolución de las tendencias visuales", 
      "Una técnica para evaluar la fatiga visual", 
      "Un software para detectar problemas visuales en los diseños"
    ],
    correctAnswer: 0
  },
  {
    id: 89,
    round: 9,
    text: "Según la heurística de Nielsen, ¿qué significa 'reconocer en lugar de recordar'?",
    options: [
      "Los usuarios deben poder reconocer a los desarrolladores del sistema", 
      "El sistema debe mostrar elementos visibles para que el usuario no tenga que memorizar información", 
      "Los usuarios deben reconocer sus errores", 
      "El sistema debe recordar las preferencias del usuario"
    ],
    correctAnswer: 1
  },
  {
    id: 90,
    round: 9,
    text: "¿Qué es una 'prueba de los 5 segundos' en evaluación UX?",
    options: [
      "Verificar si un sitio carga en menos de 5 segundos", 
      "Mostrar un diseño durante 5 segundos y preguntar qué recuerdan los usuarios", 
      "Una prueba para verificar si una acción toma más de 5 segundos", 
      "Un test para verificar la velocidad de respuesta del sistema"
    ],
    correctAnswer: 1
  },
  
  // Round 10: Negocio y Estrategia de Producto
  {
    id: 91,
    round: 10,
    text: "¿Qué es un 'product roadmap'?",
    options: [
      "Un mapa físico para encontrar productos en una tienda", 
      "Un plan que comunica la dirección y progreso del producto a lo largo del tiempo", 
      "Una guía para transportar productos físicos", 
      "Un esquema de las rutas de distribución del producto"
    ],
    correctAnswer: 1
  },
  {
    id: 92,
    round: 10,
    text: "¿Qué es un 'MVP' en desarrollo de producto?",
    options: [
      "Most Valuable Professional", 
      "Multiple Variation Product", 
      "Minimum Viable Product", 
      "Maximum Value Proposition"
    ],
    correctAnswer: 2
  },
  {
    id: 93,
    round: 10,
    text: "¿Qué es el 'ROI' en el contexto de UX?",
    options: [
      "Range Of Interaction", 
      "Return On Investment", 
      "Review Of Interface", 
      "Rate Of Implementation"
    ],
    correctAnswer: 1
  },
  {
    id: 94,
    round: 10,
    text: "¿Qué es un 'KPI' en estrategia de producto?",
    options: [
      "Knowledge Process Integration", 
      "Key Product Innovation", 
      "Key Performance Indicator", 
      "Kinetic Product Interface"
    ],
    correctAnswer: 2
  },
  {
    id: 95,
    round: 10,
    text: "¿Qué es el 'Product-Market Fit'?",
    options: [
      "El proceso de adaptar físicamente un producto al mercado", 
      "El grado en que un producto satisface una fuerte demanda del mercado", 
      "Un método para posicionar productos en estanterías", 
      "La forma en que un producto encaja en una tienda física"
    ],
    correctAnswer: 1
  },
  {
    id: 96,
    round: 10,
    text: "¿Qué es una 'propuesta de valor' en estrategia de producto?",
    options: [
      "Un documento legal que establece el valor de un producto", 
      "La declaración que resume por qué un cliente debería comprar o usar tu producto", 
      "Un precio sugerido para un producto", 
      "Una promesa de descuento para clientes fieles"
    ],
    correctAnswer: 1
  },
  {
    id: 97,
    round: 10,
    text: "¿Qué metodología utiliza 'sprints' para el desarrollo de productos?",
    options: [
      "Waterfall", 
      "Six Sigma", 
      "Agile/Scrum", 
      "Lean Manufacturing"
    ],
    correctAnswer: 2
  },
  {
    id: 98,
    round: 10,
    text: "¿Qué es un 'product owner' en metodologías ágiles?",
    options: [
      "El dueño legal de los derechos del producto", 
      "La persona responsable de maximizar el valor del producto y representar los intereses del cliente", 
      "El inventor original del producto", 
      "El gerente que supervisa la fabricación del producto"
    ],
    correctAnswer: 1
  },
  {
    id: 99,
    round: 10,
    text: "¿Qué es un 'feature creep' en desarrollo de producto?",
    options: [
      "Una característica que se implementa lentamente", 
      "Un equipo dedicado a desarrollar nuevas características", 
      "La tendencia a agregar continuamente características al producto más allá del alcance original", 
      "Un error que aparece gradualmente con el tiempo"
    ],
    correctAnswer: 2
  },
  {
    id: 100,
    round: 10,
    text: "¿Qué representa el acrónimo 'AARRR' en métricas de producto?",
    options: [
      "Acquisition, Activation, Retention, Referral, Revenue (el embudo pirata de crecimiento)", 
      "Analysis, Assessment, Research, Review, Results", 
      "Awareness, Adaptation, Reaction, Response, Return", 
      "Attract, Adapt, Reward, Retain, Repeat"
    ],
    correctAnswer: 0
  }
];

export const getQuestionsByRound = (round: number): Question[] => {
  return questions.filter(q => q.round === round);
};
