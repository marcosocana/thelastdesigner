
import { Question } from "@/types";

export const questions: Question[] = [
  // Round 1 questions - Basics of Design
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
    text: "¿Cuál de estos NO es un principio del diseño?",
    options: [
      "Contraste", 
      "Alineación", 
      "Monetización", 
      "Repetición"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    round: 1,
    text: "¿Qué formato de imagen es mejor para fotografías en la web?",
    options: [
      "PNG", 
      "SVG", 
      "JPEG", 
      "GIF"
    ],
    correctAnswer: 2
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
    text: "¿Qué es el 'tracking' en tipografía?",
    options: [
      "El espacio entre caracteres", 
      "El tamaño de la fuente", 
      "El grosor de la fuente", 
      "La altura de la línea"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    round: 1,
    text: "¿Qué modelo de color se usa en diseño web?",
    options: [
      "CMYK", 
      "RGB", 
      "HSL", 
      "Pantone"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    round: 1,
    text: "¿Qué significa RGB?",
    options: [
      "Red Green Blue", 
      "Real Good Brightness", 
      "Rate Gamut Balance", 
      "Relative Gamma Bit"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    round: 1,
    text: "¿Qué herramienta es más adecuada para diseño de interfaces?",
    options: [
      "Microsoft Word", 
      "Adobe Photoshop", 
      "Figma", 
      "Visual Studio Code"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    round: 1,
    text: "¿Qué significa UI?",
    options: [
      "User Interface", 
      "User Interaction", 
      "User Integration", 
      "User Intelligence"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    round: 1,
    text: "¿Qué formato de imagen permite transparencia?",
    options: [
      "JPEG", 
      "PNG", 
      "BMP", 
      "TIFF"
    ],
    correctAnswer: 1
  },
  
  // Round 2 questions - Color Theory & Typography
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
    text: "¿Qué es el contraste en diseño?",
    options: [
      "La diferencia entre elementos adyacentes", 
      "El brillo de una imagen", 
      "La resolución de una pantalla", 
      "La saturación de un color"
    ],
    correctAnswer: 0
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
    text: "¿Qué significa 'responsive design'?",
    options: [
      "Diseño que responde a las emociones del usuario", 
      "Diseño que se adapta a diferentes tamaños de pantalla", 
      "Diseño que carga rápidamente", 
      "Diseño que utiliza animaciones"
    ],
    correctAnswer: 1
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
    text: "¿Qué es un logotipo?",
    options: [
      "Un eslogan corporativo", 
      "Un símbolo gráfico que identifica a una empresa o marca", 
      "Un tipo de archivo de imagen", 
      "Una tendencia de diseño"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    round: 2,
    text: "¿Qué es el 'kerning' en tipografía?",
    options: [
      "El espacio entre líneas de texto", 
      "El espacio entre palabras", 
      "El espacio entre letras específicas", 
      "El tamaño de la fuente"
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    round: 2,
    text: "¿Qué es un 'mock-up' en diseño?",
    options: [
      "Una representación a escala real de un diseño", 
      "Un borrador inicial de un proyecto", 
      "Una imagen de stock", 
      "Un tipo de formato de archivo"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    round: 2,
    text: "¿Qué significa 'pixelado' en una imagen?",
    options: [
      "Una imagen de alta resolución", 
      "Una imagen con pérdida de calidad donde se ven los píxeles individuales", 
      "Una imagen en formato vectorial", 
      "Una imagen con efecto de desenfoque"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    round: 2,
    text: "¿Qué es un 'call to action' (CTA)?",
    options: [
      "Un mensaje de error en un formulario", 
      "Un elemento de diseño que invita al usuario a realizar una acción", 
      "Una animación automática", 
      "Un menú desplegable"
    ],
    correctAnswer: 1
  },
  
  // Round 3 questions - Design Principles
  {
    id: 21,
    round: 3,
    text: "¿Qué es el principio de proximidad en diseño?",
    options: [
      "Elementos similares deben estar cerca entre sí", 
      "Los elementos importantes deben estar en el centro", 
      "Todos los elementos deben tener el mismo tamaño", 
      "Los elementos deben estar distribuidos uniformemente"
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    round: 3,
    text: "¿Cuál es la regla de los tercios?",
    options: [
      "Dividir el presupuesto en tres partes iguales", 
      "Usar solo tres colores en un diseño", 
      "Dividir una composición en nueve partes iguales y colocar elementos en las intersecciones", 
      "Limitar el diseño a tres elementos principales"
    ],
    correctAnswer: 2
  },
  {
    id: 23,
    round: 3,
    text: "¿Qué significa 'affordance' en diseño UX?",
    options: [
      "El costo de implementar un diseño", 
      "La propiedad de un objeto que sugiere cómo puede ser usado", 
      "La velocidad con la que se carga una página", 
      "La capacidad de un diseño para ser accesible"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    round: 3,
    text: "¿Qué es el principio de Gestalt 'figura-fondo'?",
    options: [
      "La tendencia a percibir un elemento como figura y otro como fondo", 
      "La tendencia a agrupar elementos similares", 
      "La tendencia a completar formas incompletas", 
      "La tendencia a percibir elementos simétricos"
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    round: 3,
    text: "¿Qué es el 'whitespace' (espacio en blanco) en diseño?",
    options: [
      "Áreas sin contenido que ayudan a la legibilidad y el equilibrio", 
      "Un área reservada para publicidad", 
      "El fondo blanco de una página web", 
      "Espacio reservado para añadir elementos en el futuro"
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    round: 3,
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
    id: 27,
    round: 3,
    text: "¿Qué es un 'mood board' en diseño?",
    options: [
      "Un panel de opiniones de usuarios", 
      "Una colección de elementos visuales que inspiran un concepto de diseño", 
      "Un diagrama de flujo de trabajo", 
      "Una lista de requisitos de diseño"
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    round: 3,
    text: "¿Qué significa 'skeuomorfismo' en diseño?",
    options: [
      "Un diseño minimalista", 
      "Un diseño que imita elementos del mundo real", 
      "Un diseño basado en rejillas", 
      "Un diseño con muchas animaciones"
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    round: 3,
    text: "¿Qué es una 'retícula' (grid) en diseño?",
    options: [
      "Una estructura de líneas que guía la composición", 
      "Un tipo de fuente", 
      "Un efecto visual de cuadrícula", 
      "Un formato de archivo"
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    round: 3,
    text: "¿Qué significa 'above the fold' en diseño web?",
    options: [
      "El contenido visible sin desplazamiento", 
      "El encabezado de una página", 
      "El área reservada para publicidad", 
      "El pie de página de un sitio web"
    ],
    correctAnswer: 0
  },
  
  // Round 4 questions - UI/UX Principles
  {
    id: 31,
    round: 4,
    text: "¿Qué es la 'usabilidad' en diseño UX?",
    options: [
      "La capacidad de un producto para ser usado fácilmente", 
      "La capacidad de un producto para ser vendido", 
      "La capacidad de un producto para ser actualizado", 
      "La capacidad de un producto para ser personalizado"
    ],
    correctAnswer: 0
  },
  {
    id: 32,
    round: 4,
    text: "¿Qué es un 'user flow' en UX?",
    options: [
      "El tiempo que un usuario pasa en un sitio", 
      "La ruta que sigue un usuario para completar una tarea", 
      "La cantidad de usuarios de un producto", 
      "La satisfacción del usuario con un producto"
    ],
    correctAnswer: 1
  },
  {
    id: 33,
    round: 4,
    text: "¿Qué es un 'design system'?",
    options: [
      "Un conjunto de archivos de diseño", 
      "Un software de diseño", 
      "Un conjunto de estándares para administrar el diseño a escala", 
      "Un método de organización de archivos"
    ],
    correctAnswer: 2
  },
  {
    id: 34,
    round: 4,
    text: "¿Qué es una 'heurística' en evaluación de usabilidad?",
    options: [
      "Una prueba A/B", 
      "Una regla general basada en la experiencia que ayuda a evaluar interfaces", 
      "Un test con usuarios reales", 
      "Un análisis de métricas"
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    round: 4,
    text: "¿Qué busca medir la métrica 'time on task' en UX?",
    options: [
      "El tiempo que un usuario pasa en un sitio web", 
      "El tiempo que tarda un usuario en completar una tarea específica", 
      "El tiempo de carga de una página", 
      "El tiempo entre visitas a un sitio"
    ],
    correctAnswer: 1
  },
  {
    id: 36,
    round: 4,
    text: "¿Qué es un 'design sprint'?",
    options: [
      "Un concurso de diseño rápido", 
      "Una metodología para resolver problemas mediante diseño, prototipado y testeo", 
      "Una herramienta de diseño rápido", 
      "Una competencia entre diseñadores"
    ],
    correctAnswer: 1
  },
  {
    id: 37,
    round: 4,
    text: "¿Qué es la 'arquitectura de información' en UX?",
    options: [
      "El diseño de edificios para oficinas de diseño", 
      "La estructura y organización del contenido de un sitio o aplicación", 
      "El hardware necesario para ejecutar software de diseño", 
      "La infraestructura tecnológica de un sitio web"
    ],
    correctAnswer: 1
  },
  {
    id: 38,
    round: 4,
    text: "¿Qué es una 'persona' en diseño UX?",
    options: [
      "El diseñador principal de un proyecto", 
      "Un perfil ficticio que representa a un grupo de usuarios", 
      "Un cliente importante", 
      "Un avatar digital"
    ],
    correctAnswer: 1
  },
  {
    id: 39,
    round: 4,
    text: "¿Qué es el 'card sorting' en UX?",
    options: [
      "Una técnica para organizar productos en un e-commerce", 
      "Un juego de cartas para diseñadores", 
      "Una técnica para entender cómo los usuarios organizan y agrupan la información", 
      "Un método para seleccionar colores"
    ],
    correctAnswer: 2
  },
  {
    id: 40,
    round: 4,
    text: "¿Qué es un 'user journey map'?",
    options: [
      "Un mapa de navegación de un sitio web", 
      "Una representación visual de la experiencia completa de un usuario con un producto", 
      "Un diagrama de flujo de desarrollo", 
      "Un mapa de sitio"
    ],
    correctAnswer: 1
  },
  
  // Round 5 questions - Design Tools & Software
  {
    id: 41,
    round: 5,
    text: "¿Qué herramienta es específica para prototipado de interfaces?",
    options: [
      "Adobe Illustrator", 
      "Adobe InDesign", 
      "Sketch", 
      "Microsoft Excel"
    ],
    correctAnswer: 2
  },
  {
    id: 42,
    round: 5,
    text: "¿Qué herramienta NO es de Adobe?",
    options: [
      "Photoshop", 
      "Illustrator", 
      "Figma", 
      "InDesign"
    ],
    correctAnswer: 2
  },
  {
    id: 43,
    round: 5,
    text: "¿Qué formato es específico para gráficos vectoriales?",
    options: [
      "JPEG", 
      "PNG", 
      "SVG", 
      "GIF"
    ],
    correctAnswer: 2
  },
  {
    id: 44,
    round: 5,
    text: "¿Qué herramienta permite la colaboración en tiempo real entre diseñadores?",
    options: [
      "Adobe Photoshop", 
      "Figma", 
      "CorelDRAW", 
      "GIMP"
    ],
    correctAnswer: 1
  },
  {
    id: 45,
    round: 5,
    text: "¿Qué herramienta se utiliza principalmente para diseño editorial?",
    options: [
      "Adobe InDesign", 
      "Adobe Premiere", 
      "Sketch", 
      "Blender"
    ],
    correctAnswer: 0
  },
  {
    id: 46,
    round: 5,
    text: "¿Qué software se utiliza para animación de interfaces?",
    options: [
      "Adobe Photoshop", 
      "Adobe Illustrator", 
      "Adobe After Effects", 
      "Adobe Lightroom"
    ],
    correctAnswer: 2
  },
  {
    id: 47,
    round: 5,
    text: "¿Qué método en Photoshop permite seleccionar áreas por color?",
    options: [
      "Varita mágica", 
      "Lazo magnético", 
      "Pluma", 
      "Pincel"
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    round: 5,
    text: "¿Qué herramienta se utiliza para crear mockups interactivos?",
    options: [
      "Trello", 
      "InVision", 
      "Slack", 
      "Asana"
    ],
    correctAnswer: 1
  },
  {
    id: 49,
    round: 5,
    text: "¿Qué es 'Behance'?",
    options: [
      "Un software de diseño de Adobe", 
      "Una plataforma para compartir portfolios", 
      "Una herramienta de prototipado", 
      "Un plugin de Photoshop"
    ],
    correctAnswer: 1
  },
  {
    id: 50,
    round: 5,
    text: "¿Qué técnica en Illustrator permite crear copias en patrón?",
    options: [
      "Repetición", 
      "Fusión", 
      "Patrón", 
      "Mosaico"
    ],
    correctAnswer: 0
  },
  
  // Round 6 questions - Advanced Color Theory
  {
    id: 51,
    round: 6,
    text: "¿Qué es la teoría de color de Munsell?",
    options: [
      "Un sistema que organiza el color en tres dimensiones: matiz, valor y croma", 
      "Un sistema que solo usa RGB", 
      "Un sistema basado en las emociones", 
      "Un sistema para daltónicos"
    ],
    correctAnswer: 0
  },
  {
    id: 52,
    round: 6,
    text: "¿Qué es el 'gamut' en color digital?",
    options: [
      "La temperatura del color", 
      "El rango total de colores que un dispositivo puede reproducir", 
      "La saturación máxima", 
      "El brillo máximo"
    ],
    correctAnswer: 1
  },
  {
    id: 53,
    round: 6,
    text: "¿Qué significa que un color sea 'web safe'?",
    options: [
      "Que tiene licencia para uso web", 
      "Que es visible para personas daltónicas", 
      "Que se visualizará correctamente en navegadores antiguos", 
      "Que ha pasado pruebas de seguridad"
    ],
    correctAnswer: 2
  },
  {
    id: 54,
    round: 6,
    text: "¿Qué sistema de color se basa en cian, magenta, amarillo y negro?",
    options: [
      "RGB", 
      "HSB", 
      "CMYK", 
      "LAB"
    ],
    correctAnswer: 2
  },
  {
    id: 55,
    round: 6,
    text: "¿Qué es un 'color acromático'?",
    options: [
      "Un color con bajo croma", 
      "Un color sin tonalidad (blanco, negro, gris)", 
      "Un color opuesto en el círculo cromático", 
      "Un color que cambia según la luz"
    ],
    correctAnswer: 1
  },
  {
    id: 56,
    round: 6,
    text: "¿Qué tipo de armonía de color utiliza colores adyacentes en el círculo cromático?",
    options: [
      "Complementaria", 
      "Análoga", 
      "Triádica", 
      "Tetráda"
    ],
    correctAnswer: 1
  },
  {
    id: 57,
    round: 6,
    text: "¿Qué significan las siglas LAB en el espacio de color LAB?",
    options: [
      "Light, Absolute, Blue", 
      "Luminance, A channel, B channel", 
      "Lightness, A (green-red), B (blue-yellow)", 
      "Layer, Ambience, Background"
    ],
    correctAnswer: 2
  },
  {
    id: 58,
    round: 6,
    text: "¿Qué es la 'metacromasia' en diseño?",
    options: [
      "El cambio aparente de color debido a la yuxtaposición con otros colores", 
      "Una técnica para seleccionar colores", 
      "Un defecto visual en monitores", 
      "Un tipo de paleta de colores"
    ],
    correctAnswer: 0
  },
  {
    id: 59,
    round: 6,
    text: "¿Qué es el 'dithering' en imágenes digitales?",
    options: [
      "Un efecto de desenfoque", 
      "Una técnica para simular más colores mezclando píxeles", 
      "Un filtro para aumentar el contraste", 
      "Un método para reducir el tamaño de archivo"
    ],
    correctAnswer: 1
  },
  {
    id: 60,
    round: 6,
    text: "¿Qué es el 'metamerismo' en teoría del color?",
    options: [
      "Un efecto donde dos colores parecen iguales bajo una luz pero diferentes bajo otra", 
      "La capacidad de un color para cambiar con el tiempo", 
      "Un error en la reproducción de color en pantallas", 
      "Una técnica para crear ilusiones ópticas"
    ],
    correctAnswer: 0
  },
  
  // Round 7 questions - Advanced Typography
  {
    id: 61,
    round: 7,
    text: "¿Qué es un 'ligadura' en tipografía?",
    options: [
      "Un espacio entre párrafos", 
      "Un tipo de fuente", 
      "La unión de dos o más caracteres en un solo glifo", 
      "El espacio entre líneas"
    ],
    correctAnswer: 2
  },
  {
    id: 62,
    round: 7,
    text: "¿Qué es el 'tracking' en tipografía avanzada?",
    options: [
      "La distancia entre caracteres específicos", 
      "El espacio uniforme entre todos los caracteres", 
      "El espacio entre líneas", 
      "El tamaño de la fuente"
    ],
    correctAnswer: 1
  },
  {
    id: 63,
    round: 7,
    text: "¿Qué es una fuente variable?",
    options: [
      "Una fuente que cambia de color", 
      "Una fuente que contiene múltiples pesos y estilos en un solo archivo", 
      "Una fuente con caracteres de tamaño variable", 
      "Una fuente que solo funciona en ciertos dispositivos"
    ],
    correctAnswer: 1
  },
  {
    id: 64,
    round: 7,
    text: "¿Qué es una 'huérfana' en tipografía?",
    options: [
      "Una palabra sola al final de un párrafo", 
      "Una línea sola al comienzo de una página", 
      "Una letra suelta al final de una línea", 
      "Un párrafo sin título"
    ],
    correctAnswer: 1
  },
  {
    id: 65,
    round: 7,
    text: "¿Qué significa 'x-height' en tipografía?",
    options: [
      "La altura total de un caracter", 
      "La altura de la letra x minúscula", 
      "La altura de las letras mayúsculas", 
      "La altura de los ascendentes"
    ],
    correctAnswer: 1
  },
  {
    id: 66,
    round: 7,
    text: "¿Qué es un 'dingbat'?",
    options: [
      "Un error tipográfico", 
      "Un tipo de fuente que contiene símbolos y ornamentos en lugar de letras", 
      "Una fuente para títulos", 
      "Una técnica de impresión"
    ],
    correctAnswer: 1
  },
  {
    id: 67,
    round: 7,
    text: "¿Qué es la 'sangría francesa' en tipografía?",
    options: [
      "Un párrafo sin sangría en la primera línea", 
      "Un formato donde la primera línea sobresale y el resto del párrafo tiene sangría", 
      "Un tipo de alineación centrada", 
      "Un estilo decorativo francés"
    ],
    correctAnswer: 1
  },
  {
    id: 68,
    round: 7,
    text: "¿Qué es una fuente 'monoespaciada'?",
    options: [
      "Una fuente donde todos los caracteres ocupan el mismo espacio horizontal", 
      "Una fuente con un solo estilo", 
      "Una fuente que solo tiene un tamaño", 
      "Una fuente minimalista"
    ],
    correctAnswer: 0
  },
  {
    id: 69,
    round: 7,
    text: "¿Qué es el 'tipo de contador' en tipografía?",
    options: [
      "Una herramienta para contar palabras", 
      "El espacio cerrado o parcialmente cerrado dentro de un carácter", 
      "Un sistema para medir el tamaño de fuente", 
      "Una técnica para espaciar letras"
    ],
    correctAnswer: 1
  },
  {
    id: 70,
    round: 7,
    text: "¿Qué es un 'specimen' tipográfico?",
    options: [
      "Un documento que muestra todos los caracteres de una fuente", 
      "Una fuente especial para títulos", 
      "Un error en la tipografía", 
      "Una muestra impresa de un diseño"
    ],
    correctAnswer: 0
  },
  
  // Round 8 questions - Design History & Theory
  {
    id: 71,
    round: 8,
    text: "¿Qué movimiento de diseño se asocia con la frase 'menos es más'?",
    options: [
      "Art Deco", 
      "Bauhaus", 
      "Minimalismo", 
      "Pop Art"
    ],
    correctAnswer: 2
  },
  {
    id: 72,
    round: 8,
    text: "¿Quién fundó la escuela Bauhaus?",
    options: [
      "Le Corbusier", 
      "Walter Gropius", 
      "Paul Rand", 
      "Dieter Rams"
    ],
    correctAnswer: 1
  },
  {
    id: 73,
    round: 8,
    text: "¿Qué movimiento artístico surgió en la década de 1960 y utilizaba imágenes de la cultura popular?",
    options: [
      "Art Nouveau", 
      "Futurismo", 
      "Pop Art", 
      "Constructivismo"
    ],
    correctAnswer: 2
  },
  {
    id: 74,
    round: 8,
    text: "¿Qué diseñador suizo es conocido por su sistema de rejilla y tipografía?",
    options: [
      "Paul Rand", 
      "Milton Glaser", 
      "Josef Müller-Brockmann", 
      "Saul Bass"
    ],
    correctAnswer: 2
  },
  {
    id: 75,
    round: 8,
    text: "¿Qué estilo de diseño se caracteriza por líneas orgánicas y motivos florales?",
    options: [
      "Art Deco", 
      "Art Nouveau", 
      "Bauhaus", 
      "Constructivismo"
    ],
    correctAnswer: 1
  },
  {
    id: 76,
    round: 8,
    text: "¿Qué movimiento de diseño surgió en Italia en la década de 1980?",
    options: [
      "Bauhaus", 
      "Memphis", 
      "Futurismo", 
      "De Stijl"
    ],
    correctAnswer: 1
  },
  {
    id: 77,
    round: 8,
    text: "¿Qué principio del diseño suizo enfatiza la claridad, legibilidad y objetividad?",
    options: [
      "Expresionismo", 
      "Diseño Internacional", 
      "Postmodernismo", 
      "Deconstruccionismo"
    ],
    correctAnswer: 1
  },
  {
    id: 78,
    round: 8,
    text: "¿Qué diseñador creó el famoso logo 'I ❤ NY'?",
    options: [
      "Paul Rand", 
      "Milton Glaser", 
      "Saul Bass", 
      "Massimo Vignelli"
    ],
    correctAnswer: 1
  },
  {
    id: 79,
    round: 8,
    text: "¿Qué movimiento de diseño predominó en los años 1920 y 1930 y se caracterizó por líneas rectas y formas geométricas?",
    options: [
      "Art Nouveau", 
      "Art Deco", 
      "Bauhaus", 
      "Constructivismo"
    ],
    correctAnswer: 1
  },
  {
    id: 80,
    round: 8,
    text: "¿Quién diseñó el sistema de señalización del metro de Nueva York en 1970?",
    options: [
      "Paul Rand", 
      "Saul Bass", 
      "Massimo Vignelli", 
      "Milton Glaser"
    ],
    correctAnswer: 2
  },
  
  // Round 9 questions - Specialized Design Fields
  {
    id: 81,
    round: 9,
    text: "¿Qué es la 'señalética'?",
    options: [
      "El diseño de señales de tráfico", 
      "Un sistema de comunicación visual que guía y orienta en un espacio", 
      "Un tipo de señal luminosa", 
      "Una técnica de ilustración"
    ],
    correctAnswer: 1
  },
  {
    id: 82,
    round: 9,
    text: "¿Qué es el 'diseño de interacción'?",
    options: [
      "El diseño de interiores interactivos", 
      "La creación de elementos interactivos para redes sociales", 
      "La práctica de diseñar productos interactivos para facilitar la interacción entre humanos", 
      "Un sistema de animación web"
    ],
    correctAnswer: 2
  },
  {
    id: 83,
    round: 9,
    text: "¿Qué es el 'diseño paramétrico'?",
    options: [
      "Un proceso de diseño basado en algoritmos y parámetros", 
      "Un diseño que se adapta a diferentes tamaños", 
      "Un diseño basado en medidas exactas", 
      "Un diseño que utiliza solo formas geométricas"
    ],
    correctAnswer: 0
  },
  {
    id: 84,
    round: 9,
    text: "¿Qué es el 'diseño generativo'?",
    options: [
      "Diseño que genera ingresos", 
      "Diseño creado utilizando sistemas y algoritmos que pueden funcionar autónomamente", 
      "Diseño para nuevas generaciones", 
      "Diseño de interfaces generales"
    ],
    correctAnswer: 1
  },
  {
    id: 85,
    round: 9,
    text: "¿Qué es el 'motion graphics'?",
    options: [
      "Gráficos en movimiento que combinan animación y diseño gráfico", 
      "Gráficos para emocionar al usuario", 
      "Ilustraciones para películas", 
      "Efectos visuales en fotografía"
    ],
    correctAnswer: 0
  },
  {
    id: 86,
    round: 9,
    text: "¿Qué es el 'diseño sostenible'?",
    options: [
      "Diseño que dura mucho tiempo sin deteriorarse", 
      "Diseño de estructuras que se mantienen en pie", 
      "Diseño que considera el impacto ambiental y social", 
      "Diseño que genera ingresos constantes"
    ],
    correctAnswer: 2
  },
  {
    id: 87,
    round: 9,
    text: "¿Qué es el 'diseño de servicios'?",
    options: [
      "Diseño de menús para restaurantes", 
      "Planificación y organización de personas, infraestructura y materiales para mejorar la calidad del servicio", 
      "Diseño de uniformes para personal de servicio", 
      "Diseño de aplicaciones de servicios"
    ],
    correctAnswer: 1
  },
  {
    id: 88,
    round: 9,
    text: "¿Qué es el 'diseño de información'?",
    options: [
      "Diseño de bases de datos", 
      "Diseño de noticias y artículos", 
      "Diseño de interfaces informativas", 
      "La práctica de presentar información compleja de manera clara y accesible"
    ],
    correctAnswer: 3
  },
  {
    id: 89,
    round: 9,
    text: "¿Qué es el 'diseño crítico'?",
    options: [
      "Diseño que critica otros diseños", 
      "Diseño que cuestiona y desafía suposiciones y normas establecidas en lugar de resolver problemas", 
      "Diseño para críticos de arte", 
      "Diseño que requiere revisión crítica"
    ],
    correctAnswer: 1
  },
  {
    id: 90,
    round: 9,
    text: "¿Qué es el 'design thinking'?",
    options: [
      "Un software de diseño", 
      "Una metodología para resolver problemas complejos centrada en el usuario", 
      "Un proceso de pensamiento creativo", 
      "Una técnica de meditación para diseñadores"
    ],
    correctAnswer: 1
  },
  
  // Round 10 questions - Future of Design & Ethics
  {
    id: 91,
    round: 10,
    text: "¿Qué es el 'diseño ético'?",
    options: [
      "Diseño que cumple con estándares legales", 
      "Diseño que considera los impactos de las decisiones de diseño en las personas y la sociedad", 
      "Diseño para organizaciones éticas", 
      "Diseño que evita elementos controvertidos"
    ],
    correctAnswer: 1
  },
  {
    id: 92,
    round: 10,
    text: "¿Qué es el 'diseño inclusivo'?",
    options: [
      "Diseño que incluye muchos elementos", 
      "Diseño que busca incluir a todas las personas independientemente de sus capacidades", 
      "Diseño para sociedades inclusivas", 
      "Diseño que incluye todas las tendencias"
    ],
    correctAnswer: 1
  },
  {
    id: 93,
    round: 10,
    text: "¿Qué significa 'dark pattern' en diseño UX?",
    options: [
      "Un patrón de color oscuro", 
      "Una interfaz con modo oscuro", 
      "Trucos en el diseño de interfaces que hacen que los usuarios hagan cosas que no pretendían hacer", 
      "Un estilo gótico de diseño"
    ],
    correctAnswer: 2
  },
  {
    id: 94,
    round: 10,
    text: "¿Qué es la 'ley GDPR' y cómo afecta al diseño?",
    options: [
      "Una ley sobre diseño gráfico que no afecta a diseñadores", 
      "Una regulación de la UE sobre protección de datos que exige diseñar con privacidad desde el inicio", 
      "Una ley de derechos de autor para diseñadores", 
      "Una normativa sobre colores accesibles"
    ],
    correctAnswer: 1
  },
  {
    id: 95,
    round: 10,
    text: "¿Qué es el 'bias' (sesgo) en el diseño de inteligencia artificial?",
    options: [
      "Una característica deseada en los algoritmos", 
      "Una preferencia estética del diseñador", 
      "Prejuicios injustos incorporados en los sistemas de IA por los diseñadores o los datos", 
      "Una técnica para mejorar la precisión"
    ],
    correctAnswer: 2
  },
  {
    id: 96,
    round: 10,
    text: "¿Qué es el 'diseño especulativo'?",
    options: [
      "Diseño basado en especulaciones financieras", 
      "Diseño que propone futuros alternativos para fomentar el debate y la reflexión", 
      "Diseño sin una finalidad clara", 
      "Diseño experimental sin bases teóricas"
    ],
    correctAnswer: 1
  },
  {
    id: 97,
    round: 10,
    text: "¿Cómo afecta la ley de accesibilidad digital (WCAG) al diseño web?",
    options: [
      "No afecta al diseño, solo a la programación", 
      "Exige que los diseños web sean accesibles para personas con discapacidades", 
      "Solo afecta a sitios gubernamentales", 
      "Restringe el uso de ciertos colores"
    ],
    correctAnswer: 1
  },
  {
    id: 98,
    round: 10,
    text: "¿Qué es el 'tecnostress' en relación al diseño UX?",
    options: [
      "Un nuevo estilo de diseño tecnológico", 
      "El estrés causado por interfaces mal diseñadas o tecnología intrusiva", 
      "Una herramienta para medir la usabilidad", 
      "Un tipo de tecnología estresante"
    ],
    correctAnswer: 1
  },
  {
    id: 99,
    round: 10,
    text: "¿Qué es el 'digital wellbeing' y cómo influye en el diseño?",
    options: [
      "Un nuevo estándar de salud digital", 
      "Un conjunto de prácticas y características diseñadas para ayudar a los usuarios a mantener un equilibrio saludable con la tecnología", 
      "Un certificado de bienestar para diseñadores", 
      "Un tipo de diseño que promueve el bienestar"
    ],
    correctAnswer: 1
  },
  {
    id: 100,
    round: 10,
    text: "¿Qué es la 'soberanía de datos' en el diseño de productos digitales?",
    options: [
      "El control total del diseñador sobre el producto", 
      "El derecho de los individuos a controlar sus propios datos personales", 
      "Una técnica para proteger los archivos de diseño", 
      "Una restricción en el uso de datos en el diseño"
    ],
    correctAnswer: 1
  }
];

export const getQuestionsByRound = (round: number): Question[] => {
  return questions.filter(q => q.round === round);
};
