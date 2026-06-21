# Recurso Pedagógico Innovador
## Plataforma Web de Hackatón Pedagógica Virtual
### Actividad 1 — Asignatura: Innovación Didáctica

---

**Presentado por:** *[Nombre completo del estudiante / equipo]*
**Docente tutor:** *[Nombre del docente tutor]*
**Fecha de entrega:** *[Día de mes de año]*

---

## Introducción

La innovación didáctica exige a los docentes en formación renovar sus prácticas pedagógicas mediante el uso pertinente de recursos, estrategias y tendencias digitales, sin que ello implique limitarse a herramientas externas preexistentes. En el marco de la Actividad 1 de la asignatura Innovación Didáctica, denominada Hackatón pedagógica virtual, se propuso a los estudiantes resolver un reto didáctico complejo en tiempo limitado, diseñando una solución pedagógica innovadora fundamentada en referentes teóricos pertinentes.

El enunciado de la actividad sugiere apoyarse en plataformas educativas gratuitas (como Genially u otras de naturaleza similar) para generar enlaces y actividades dirigidas a los estudiantes. Sin embargo, este trabajo opta por una vía alternativa y propositiva: el diseño y desarrollo de una aplicación web propia, construida específicamente para alojar, gestionar y evaluar la experiencia completa de la hackatón pedagógica. Esta decisión se fundamenta en la necesidad de contar con una herramienta sin las limitaciones funcionales, de almacenamiento o de personalización que suelen presentar las versiones gratuitas de plataformas comerciales de autor.

El desarrollo de la aplicación se realiza con el apoyo de Antigravity, un editor de código asistido por inteligencia artificial, lo cual permite acelerar la construcción de la solución técnica sin renunciar al control sobre el diseño pedagógico de cada componente. La arquitectura adoptada se compone de tres capas: un frontend desarrollado en Angular CLI, un backend construido en Node.js con el framework Express que expone una API de tipo REST, y una base de datos no relacional en MongoDB para la persistencia de la información académica (retos, preguntas, entregas y evaluaciones).

El presente documento describe de manera integral el recurso pedagógico desarrollado: sus objetivos, la metodología didáctica y tecnológica empleada, los recursos utilizados, la estrategia de evaluación y las actividades innovadoras diseñadas para los estudiantes. Asimismo, se documenta el producto a entregar, incluyendo los enlaces correspondientes al repositorio del proyecto y, en su defecto, al entorno de despliegue, y se incorporan las citas y referencias bibliográficas bajo la norma APA, séptima edición (APA, 2020), que sustentan teóricamente las decisiones pedagógicas y tecnológicas tomadas a lo largo del desarrollo.

## 1. Objetivos

### 1.1 Objetivo general

Diseñar e implementar una aplicación web propia que funcione como espacio educativo integral para el desarrollo de la Hackatón pedagógica virtual, permitiendo a los estudiantes consultar retos didácticos, fundamentar teóricamente sus propuestas, diseñar soluciones pedagógicas innovadoras y ser evaluados mediante mecanismos interactivos, sin depender de las limitaciones de plataformas educativas gratuitas externas.

### 1.2 Objetivos específicos

- Estructurar el contenido pedagógico de la hackatón en fases secuenciales, articuladas explícitamente con las cinco unidades de la asignatura Innovación Didáctica.
- Desarrollar una arquitectura web de tres capas (frontend en Angular CLI, backend en Node.js con Express, y base de datos en MongoDB) que soporte la gestión de retos, preguntas, entregas y evaluaciones.
- Diseñar un sistema de evaluación basado en quizzes interactivos y listas de verificación (checklists) que permitan medir la comprensión conceptual y la aplicación práctica de cada unidad temática.
- Construir una rúbrica de evaluación integradora que valore la coherencia del producto final entregado por los estudiantes frente a las cinco unidades del curso.
- Justificar pedagógica y técnicamente la decisión de emplear una solución tecnológica propia, asistida por inteligencia artificial mediante Antigravity, en lugar de una plataforma educativa gratuita preexistente.

## 2. Metodología

La metodología empleada combina dos dimensiones inseparables en el desarrollo de este recurso pedagógico: la dimensión didáctica, relativa al diseño de la experiencia de aprendizaje de los estudiantes dentro de la hackatón, y la dimensión técnica, relativa a la construcción de la aplicación web que soporta dicha experiencia.

### 2.1 Enfoque pedagógico

Siguiendo los planteamientos de la Unidad IV de la asignatura, el recurso adopta un enfoque centrado en el Aprendizaje Basado en Proyectos (ABPr), complementado con elementos del Aprendizaje Basado en Problemas (ABP) y del Aprendizaje Basado en Casos (ABC), según la naturaleza del reto asignado a cada equipo. Este enfoque transforma al estudiante en protagonista activo de su propio aprendizaje, promoviendo la investigación formativa y colaborativa como vía para resolver problemáticas reales del contexto educativo.

La hackatón se organiza en fases secuenciales que conducen progresivamente al estudiante desde el diagnóstico del problema hasta la entrega del producto final, integrando en cada fase los contenidos de una o varias unidades del curso, tal como se describe en la siguiente tabla.

| Fase | Nombre | Unidad(es) que alimenta la fase | Tipo de evaluación |
|---|---|---|---|
| 0 | Onboarding | Marco general de la asignatura | Sin evaluación (lectura) |
| 1 | Diagnóstico del reto | Unidad I | Quiz de comprensión |
| 2 | Fundamentación teórica | Unidad I + Unidad III | Quiz conceptual + ficha teórica |
| 3A | Diseño — Metodología | Unidad II + Unidad IV | Checklist + quiz aplicado |
| 3B | Diseño — Recursos TIC | Unidad V | Checklist + quiz aplicado |
| 4 | Entrega final | Todas (I-V) integradas | Rúbrica docente |
| 5 | Reflexión metacognitiva | Todas | Quiz formativo (sin nota) |

### 2.2 Enfoque tecnológico

Para el desarrollo de la aplicación se adopta una arquitectura desacoplada de tres capas, construida y mantenida con el apoyo del editor de código asistido por inteligencia artificial Antigravity. Esta decisión metodológica responde a la necesidad de contar con un espacio educativo propio que no dependa de las funcionalidades parciales o restringidas que ofrecen las versiones gratuitas de plataformas educativas comerciales como Genially.

| Capa | Tecnología | Plataforma de despliegue | Función principal |
|---|---|---|---|
| Cliente | Navegador web (PC o móvil) | — | Interacción del estudiante con la aplicación |
| Frontend | Angular CLI 16 (compilado) | Vercel | Interfaz de usuario y carga de activos estáticos |
| Backend | Node.js + Express (API REST) | Render | Lógica de negocio, autenticación y gestión de fases/quizzes |
| Base de datos | MongoDB (vía MongoDB Driver) | Render / servicio gestionado | Persistencia de retos, preguntas, entregas y evaluaciones |
| Integración continua | CI/CD | Vercel + Render | Despliegue automático de cambios en frontend y backend |

El flujo de comunicación entre capas se desarrolla en tres pasos: en primer lugar, el navegador del estudiante carga los activos estáticos del frontend alojado en Vercel; en segundo lugar, el frontend realiza peticiones a través de una API de tipo REST hacia el backend desplegado en Render; y en tercer lugar, el backend establece conexión con la base de datos MongoDB para la consulta y persistencia de la información académica generada durante la hackatón. Las credenciales y cadenas de conexión sensibles se gestionan mediante variables de entorno, evitando su exposición directa en el código fuente.

### 2.3 Justificación de la decisión metodológica

Se documenta a continuación, de manera explícita, la justificación de optar por tecnología propia en lugar de una plataforma educativa gratuita preexistente, tal como lo sugiere el enunciado de la actividad:

- Control total sobre la experiencia pedagógica: una plataforma propia permite diseñar exactamente el flujo de fases, quizzes y rúbricas requerido, sin ajustarse a plantillas o límites de interacción predefinidos por herramientas externas.
- Ausencia de restricciones comerciales: las plataformas gratuitas suelen limitar el número de actividades, el almacenamiento, la cantidad de usuarios simultáneos o los tipos de interacción disponibles en sus planes sin costo.
- Persistencia y trazabilidad real de los datos académicos: el uso de MongoDB permite almacenar, consultar y analizar de forma estructurada las respuestas, entregas y evaluaciones de cada estudiante.
- Escalabilidad y mantenimiento independientes: la arquitectura desacoplada permite escalar cada capa (frontend y backend) de manera independiente y desplegar actualizaciones de forma automatizada mediante integración continua.
- Coherencia con el enfoque de la propia asignatura: la Unidad V (Las TIC en el aula) plantea que la innovación didáctica puede implicar la creación de nuevos recursos tecnológicos pertinentes al contexto educativo, y no limitarse al uso de herramientas existentes.
- Desarrollo asistido por inteligencia artificial: el uso del editor de código Antigravity evidencia una apropiación práctica de tendencias digitales actuales en el diseño de soluciones educativas, en sintonía con la visión de la asignatura de resignificar la mediación del aprendizaje.

### 2.4 Estado de implementación (análisis del código fuente del frontend)

A partir de la revisión directa del código fuente del proyecto Angular CLI 16.1.7 ("Hackatón Pedagógica Virtual"), se documenta a continuación el estado real de avance del desarrollo, contrastado con la propuesta inicial.

**2.4.1 Componentes ya implementados**

| Elemento | Estado | Detalle |
|---|---|---|
| Estructura de fases | Implementado | 6 fases (0 a 5): Onboarding más 5 módulos, uno por unidad, con desbloqueo progresivo |
| Desbloqueo progresivo | Implementado | Cada módulo exige un mínimo de 70% de aciertos para desbloquear el siguiente |
| Banco de preguntas | Implementado (ampliado) | 8 preguntas por módulo, con 4 tipos: opción única, selección múltiple, abierta y basada en imagen |
| Material visual propio | Implementado | Infografías propias para las Unidades I, II y III (línea de tiempo, comparación ABP/ABPr, b-learning, modelo TPACK) |
| Autenticación con roles | Implementado | Inicio de sesión con token, y dos roles diferenciados: administrador y estudiante |
| Guards de ruta | Implementado | Protección de las rutas de administrador y de estudiante según el rol autenticado |
| Vista de administrador | Implementado (parcial) | Panel con vista de resultados y vista de contenido, en modo de solo lectura sobre los mismos módulos |

**2.4.2 Hallazgos y puntos a corregir antes de la entrega**

| Hallazgo | Descripción | Recomendación |
|---|---|---|
| Plataforma de backend | El backend se encuentra desplegado en Render y no en Railway, como se planteó inicialmente | Documentación ya actualizada; verificar endpoints disponibles |
| Resultados de administrador no conectados | El panel de administrador muestra una lista de entregas de ejemplo, definida directamente en el componente, no proveniente de una consulta real a la base de datos | Conectar la vista de resultados a un endpoint real respaldado por MongoDB |
| Nomenclatura de rol inconsistente | El rol de estudiante se identifica internamente con un nombre distinto al usado en la documentación y en la interfaz | Unificar la nomenclatura del rol en el código antes de la entrega final |
| Credenciales de prueba en el código | El componente de inicio de sesión incluye un mecanismo de acceso rápido con credenciales de prueba escritas en el código fuente del frontend | Retirar este mecanismo o trasladar las credenciales a variables de entorno antes de cualquier despliegue público |
| Imágenes externas no controladas | Algunas preguntas visuales de los módulos finales utilizan imágenes alojadas en un servicio externo de fotografía de stock, en lugar de material propio | Sustituir por infografías propias, siguiendo el estándar ya alcanzado en los primeros módulos |

**2.4.3 Pendiente de desarrollo**

- Conexión real del panel de administrador a los datos de entregas y resultados almacenados en MongoDB, actualmente simulados.
- Persistencia de las respuestas del estudiante en el backend; actualmente el avance se gestiona únicamente en el estado del componente, en memoria del navegador.
- Implementación de las fases de diseño de la solución (metodología y recursos TIC) y de la fase de entrega final con rúbrica docente, que aún no aparecen en el frontend analizado.
- Migración del contenido de retos, fases y preguntas, actualmente codificado de forma estática en el frontend, hacia colecciones reales de la base de datos MongoDB.

## 3. Recursos

Los recursos empleados para el desarrollo del presente recurso pedagógico se clasifican en tres categorías: recursos tecnológicos, recursos pedagógicos y recursos teóricos de referencia.

### 3.1 Recursos tecnológicos

- Editor de código asistido por inteligencia artificial Antigravity, utilizado como entorno principal de desarrollo de software.
- Angular CLI, para la construcción del frontend de la aplicación web.
- Node.js y el framework Express, para la construcción del backend y la exposición de la API REST.
- MongoDB y su respectivo driver oficial, como sistema de base de datos no relacional para la persistencia de la información.
- Plataforma Vercel, utilizada para el despliegue del frontend de la aplicación.
- Plataforma Render, utilizada para el despliegue del backend y, en su defecto, de la instancia de base de datos.
- Repositorio de control de versiones en GitHub, vinculado al proyecto Angular CLI base, para la gestión colaborativa del código fuente.
- Mecanismos de integración continua y despliegue continuo (CI/CD), para automatizar la publicación de cambios en frontend y backend.

### 3.2 Recursos pedagógicos

- Banco de retos didácticos correspondientes a problemáticas educativas actuales: virtualización de la enseñanza, inclusión educativa, evaluación auténtica, manejo de emociones en el aula, y motivación y compromiso (engagement).
- Banco de preguntas de quiz organizado por unidad temática (cinco unidades, ocho preguntas cada una, en cuatro tipos de formato), con retroalimentación inmediata para el estudiante.
- Checklists de verificación de completitud para la fase de diseño de la solución pedagógica (metodología y recursos TIC).
- Rúbrica de evaluación integradora para la valoración del producto final entregado por los estudiantes.

### 3.3 Recursos teóricos de referencia

La fundamentación conceptual del recurso pedagógico retoma los contenidos desarrollados en las cinco unidades de la asignatura Innovación Didáctica, entre ellos los aportes históricos de Comenio y la visión contemporánea de Díaz Barriga (Unidad I), el enfoque de Blended-learning o b-learning (Unidad II), el modelo TPACK de integración de conocimientos disciplinar, pedagógico y tecnológico (Unidad III), las estrategias de Aprendizaje Basado en Proyectos, Problemas y Casos (Unidad IV), y el repertorio de Tecnologías de la Información y Comunicación aplicadas al aula, como MOOC, webinars, Flipped Room, realidad aumentada, gamificación y Wow Room (Unidad V).

## 5. Evaluación

La estrategia de evaluación del recurso pedagógico se diseñó bajo el principio de evaluación auténtica y formativa, articulando mecanismos de autoevaluación progresiva durante el desarrollo de la hackatón con una evaluación sumativa final a cargo del docente tutor.

### 5.1 Registro completo del banco de preguntas (quizzes interactivos)

A continuación se documenta el registro íntegro del banco de preguntas implementado en el código fuente del frontend (archivo `hackaton-data.ts`), correspondiente a los cinco módulos de la hackatón. Cada módulo contiene ocho preguntas distribuidas en cuatro tipos: de opción única, de selección múltiple (con una o varias respuestas correctas), abiertas (de revisión docente, sin autocalificación) y visuales (asociadas a una infografía o diagrama). Las respuestas correctas se señalan con ✅, y se incluye la retroalimentación que el sistema muestra al estudiante.

### Unidad I — Visiones generales sobre la didáctica

**1. ¿Quién es considerado el padre de la didáctica y autor de la "Didáctica Magna"?** *[Opción única]*

- **a) Juan Amos Comenio ✅**
- b) Jean Piaget
- c) Lev Vygotsky
- d) Ángel Díaz Barriga
*Retroalimentación:* Correcto. Comenio sentó las bases de la didáctica en 1632.

**2. La innovación didáctica contemporánea (según Díaz Barriga) se enfoca en:** *[Opción única]*

- a) Memorización pura
- **b) El aprendizaje activo y situado ✅**
- c) Eliminar la tecnología
- d) Clases magistrales exclusivas
*Retroalimentación:* Exacto, busca que el aprendizaje sea significativo y situado.

**3. Selecciona las características que definen la innovación didáctica en el siglo XXI (Selecciona varias):** *[Selección múltiple]*

- a) Uso exclusivo de libros impresos
- **b) Integración de recursos digitales ✅**
- **c) Resignificación de la mediación del aprendizaje ✅**
- d) Docente como único portador del saber
- **e) Adaptación al contexto educativo ✅**
*Retroalimentación:* La innovación implica tecnología, resignificación y contextualización.

**4. ¿Cuáles son los elementos fundamentales de la didáctica?** *[Selección múltiple]*

- **a) El docente ✅**
- **b) El estudiante ✅**
- **c) El currículo ✅**
- d) El personal administrativo
*Retroalimentación:* Los elementos centrales son el docente, el estudiante y el contenido/currículo.

**5. Según tu perspectiva, ¿por qué la innovación didáctica NO se limita únicamente al uso de herramientas tecnológicas?** *[Abierta (revisión docente)]*

*Pregunta abierta: respuesta libre del estudiante, registrada para revisión docente (no se autocalifica).*
*Retroalimentación:* Respuesta registrada. Es importante comprender que la innovación es también un cambio metodológico, no solo instrumental.

**6. Describe brevemente cómo aplicarías la visión de "cómo enseñar y aprender" en tu contexto educativo actual.** *[Abierta (revisión docente)]*

*Pregunta abierta: respuesta libre del estudiante, registrada para revisión docente (no se autocalifica).*
*Retroalimentación:* Respuesta registrada. Adaptar el "cómo" al contexto es la esencia de la didáctica situada.

**7. Observa la línea de tiempo. ¿Qué elemento marca la transición hacia la didáctica de la era digital?** *[Visual (basada en imagen)]*

- a) La tiza y el pizarrón
- b) El constructivismo
- **c) La integración TIC ✅**
- d) La Didáctica Magna
*Retroalimentación:* La integración TIC es el hito de la didáctica moderna.

**8. En el diagrama, ¿qué concepto conecta directamente a la didáctica como el "cómo enseñar"?** *[Visual (basada en imagen)]*

- a) La Psicología
- **b) La Pedagogía y la Educación ✅**
- c) La Filosofía
- d) La Administración
*Retroalimentación:* La didáctica es una rama de la pedagogía aplicada a la educación.

---

### Unidad II — Metodologías de intervención en el aula y más allá del aula

**1. El enfoque Blended-learning (b-learning) se caracteriza por:** *[Opción única]*

- a) Ser 100% virtual
- **b) Combinar presencialidad con recursos digitales ✅**
- c) Eliminar las evaluaciones
- d) Ser 100% presencial
*Retroalimentación:* Correcto, el b-learning mezcla lo mejor de ambos mundos.

**2. ¿Cuál es el objetivo de transformar el aula tradicional en un Laboratorio de Innovación Didáctica?** *[Opción única]*

- a) Reducir el salario docente
- b) Aumentar las vacaciones
- **c) Promover la investigación formativa y colaborativa ✅**
- d) Limitar el uso de internet
*Retroalimentación:* El objetivo es crear un espacio activo y de experimentación.

**3. Selecciona las estrategias de aprendizaje activo mencionadas en la unidad (Selecciona varias):** *[Selección múltiple]*

- **a) Aprendizaje Basado en Proyectos (ABPr) ✅**
- **b) Aprendizaje Basado en Problemas (ABP) ✅**
- c) Clase Magistral pasiva
- **d) Aprendizaje Basado en Casos (ABC) ✅**
- e) Dictado tradicional
*Retroalimentación:* ABPr, ABP y ABC son pilares metodológicos del aprendizaje activo.

**4. Beneficios del b-learning (Selecciona varias):** *[Selección múltiple]*

- **a) Flexibilidad de tiempo ✅**
- b) Menor interacción social
- **c) Personalización del aprendizaje ✅**
- d) Dependencia total de la presencialidad
*Retroalimentación:* Aporta flexibilidad y personalización sin perder el contacto humano.

**5. ¿Cómo diseñarías una secuencia didáctica que articule el Aprendizaje Basado en Proyectos (ABPr)?** *[Abierta (revisión docente)]*

*Pregunta abierta: respuesta libre del estudiante, registrada para revisión docente (no se autocalifica).*
*Retroalimentación:* Respuesta registrada. El diseño debe incluir fases claras de planificación, ejecución y evaluación.

**6. Menciona un reto de implementar Blended-learning en tu institución y cómo lo superarías.** *[Abierta (revisión docente)]*

*Pregunta abierta: respuesta libre del estudiante, registrada para revisión docente (no se autocalifica).*
*Retroalimentación:* Respuesta registrada. Identificar barreras como la conectividad o la capacitación es el primer paso.

**7. Según la tabla comparativa, ¿cuál es el rol principal del docente en el ABP y ABPr?** *[Visual (basada en imagen)]*

- a) Transmisor de información
- **b) Guía y facilitador ✅**
- c) Observador pasivo
- d) Evaluador estricto
*Retroalimentación:* El docente actúa como guía, mediando el proceso de descubrimiento.

**8. En el diagrama de B-learning, ¿qué dos esferas se equilibran?** *[Visual (basada en imagen)]*

- a) Padres y Alumnos
- **b) Aula Presencial y Plataformas Virtuales ✅**
- c) Teoría y Práctica
- d) Juegos y Tareas
*Retroalimentación:* El b-learning equilibra lo presencial con lo virtual.

---

### Unidad III — El modelo TPACK

**1. ¿Qué significan las siglas TPACK?** *[Opción única]*

- **a) Tecnología, Pedagogía y Contenido ✅**
- b) Teoría Práctica Actualizada
- c) Técnicas Pedagógicas Administrativas
- d) Test de Prueba Académica
*Retroalimentación:* Technological Pedagogical Content Knowledge.

**2. En el modelo TPACK, el conocimiento disciplinar o del contenido (CK) se refiere a:** *[Opción única]*

- a) Saber usar Excel
- b) Saber cómo gestionar el aula
- **c) Saber QUÉ enseñar (la materia específica) ✅**
- d) Saber evaluar
*Retroalimentación:* El CK es el dominio de la materia que se va a impartir.

**3. ¿Qué intersecciones existen dentro del modelo TPACK? (Selecciona varias)** *[Selección múltiple]*

- **a) Conocimiento Pedagógico del Contenido (PCK) ✅**
- **b) Conocimiento Tecnológico del Contenido (TCK) ✅**
- c) Conocimiento Financiero (FCK)
- **d) Conocimiento Tecnológico Pedagógico (TPK) ✅**
*Retroalimentación:* PCK, TCK y TPK son las intersecciones clave del modelo.

**4. El modelo TPACK busca lograr: (Selecciona varias)** *[Selección múltiple]*

- **a) Una enseñanza efectiva mediada por tecnología ✅**
- b) Reemplazar al docente por computadoras
- **c) Integrar saberes fragmentados ✅**
- d) Usar tecnología solo por moda
*Retroalimentación:* Busca una integración profunda y con sentido pedagógico.

**5. Da un ejemplo de cómo integrarías el conocimiento tecnológico, pedagógico y de contenido en una clase tuya.** *[Abierta (revisión docente)]*

*Pregunta abierta: respuesta libre del estudiante, registrada para revisión docente (no se autocalifica).*
*Retroalimentación:* Respuesta registrada. Un buen ejemplo une una herramienta TIC con una estrategia activa y un tema curricular.

**6. ¿Cuál crees que es el mayor obstáculo para que los docentes alcancen el centro del modelo TPACK?** *[Abierta (revisión docente)]*

*Pregunta abierta: respuesta libre del estudiante, registrada para revisión docente (no se autocalifica).*
*Retroalimentación:* Respuesta registrada. La falta de formación técnica o pedagógica suele ser la barrera común.

**7. Observa el diagrama de Venn TPACK. ¿Dónde se encuentra la enseñanza efectiva con TIC?** *[Visual (basada en imagen)]*

- a) En el círculo de Contenido
- **b) En la intersección central de los 3 círculos ✅**
- c) Fuera de los círculos
- d) En el círculo de Tecnología
*Retroalimentación:* El punto óptimo (TPACK) está en la convergencia de los tres saberes.

**8. En el ejemplo de integración TPACK, ¿qué elemento representa el Conocimiento Tecnológico (TK)?** *[Visual (basada en imagen)]*

- **a) La simulación interactiva ✅**
- b) El aprendizaje por indagación
- c) Los conceptos de física
- d) El estudiante
*Retroalimentación:* La herramienta digital elegida (simulación) es el componente tecnológico.

---

### Unidad IV — Estrategias didácticas

**1. ¿Cuál es el rol del estudiante en las estrategias didácticas activas?** *[Opción única]*

- a) Receptor pasivo
- **b) Protagonista activo de su aprendizaje ✅**
- c) Espectador
- d) Evaluador exclusivo
*Retroalimentación:* Las metodologías activas sitúan al alumno en el centro.

**2. El Aprendizaje Basado en Casos (ABC) se enfoca principalmente en:** *[Opción única]*

- a) Desarrollar productos físicos
- **b) Analizar situaciones complejas de la vida real ✅**
- c) Memorizar fechas históricas
- d) Aprobar exámenes estandarizados
*Retroalimentación:* El ABC utiliza narrativas o situaciones reales para el análisis profundo.

**3. Competencias de orden superior que desarrollan estas estrategias: (Selecciona varias)** *[Selección múltiple]*

- **a) Pensamiento crítico ✅**
- b) Copia literal de textos
- **c) Resolución de problemas ✅**
- **d) Trabajo colaborativo ✅**
- e) Aislamiento social
*Retroalimentación:* Fomentan el pensamiento crítico, la resolución y la colaboración.

**4. Diferencias entre ABP (Problemas) y ABPr (Proyectos): (Selecciona varias)** *[Selección múltiple]*

- **a) El ABPr suele terminar en un producto final o entregable ✅**
- b) Son exactamente lo mismo
- **c) El ABP parte de una pregunta o escenario abierto ✅**
- d) El ABPr no requiere investigación
*Retroalimentación:* El ABPr busca un producto, mientras el ABP se centra en el proceso de resolver el escenario.

**5. Describe cómo aplicarías la inclusión y diversidad dentro de un Aprendizaje Basado en Proyectos.** *[Abierta (revisión docente)]*

*Pregunta abierta: respuesta libre del estudiante, registrada para revisión docente (no se autocalifica).*
*Retroalimentación:* Respuesta registrada. Asignar roles rotativos y permitir múltiples formas de representación es clave.

**6. Plantea una "pregunta detonante" o "problema inicial" para tu asignatura usando la metodología ABP.** *[Abierta (revisión docente)]*

*Pregunta abierta: respuesta libre del estudiante, registrada para revisión docente (no se autocalifica).*
*Retroalimentación:* Respuesta registrada. Las buenas preguntas ABP son abiertas, reales y complejas.

**7. En la infografía de roles, ¿qué actitudes se asocian al estudiante activo?** *[Visual (basada en imagen)]*

- a) Silencio absoluto
- **b) Investigador, colaborador y solucionador ✅**
- c) Competitividad agresiva
- d) Dependencia del docente
*Retroalimentación:* El estudiante asume roles de liderazgo en su propio aprendizaje.

**8. En el mapa conceptual, ¿hacia dónde convergen el ABPr, ABP y ABC?** *[Visual (basada en imagen)]*

- a) Al examen final
- b) Al aburrimiento
- **c) Al desarrollo de Competencias Superiores ✅**
- d) Al libro de texto
*Retroalimentación:* Todas estas estrategias apuntan al desarrollo de competencias críticas.

---

### Unidad V — Las TIC en el aula

**1. ¿Qué es el modelo "Flipped Classroom" (Aula Invertida)?** *[Opción única]*

- a) Dar clase de pie
- **b) Ver teoría en casa y hacer la práctica en clase ✅**
- c) Hacer exámenes sorpresa todos los días
- d) Usar tablets para jugar
*Retroalimentación:* Invierte el orden tradicional, aprovechando el tiempo de clase para aplicar el conocimiento.

**2. La Gamificación en el aula consiste en:** *[Opción única]*

- a) Jugar videojuegos todo el día
- **b) Aplicar mecánicas de juego en entornos no lúdicos (educación) ✅**
- c) Dar tiempo libre
- d) Eliminar las calificaciones
*Retroalimentación:* Usa elementos como puntos, niveles o insignias para motivar el aprendizaje.

**3. Selecciona herramientas TIC mencionadas para innovar en el aula (Selecciona varias):** *[Selección múltiple]*

- **a) MOOCs ✅**
- b) Máquina de escribir
- **c) Realidad Aumentada (RA) ✅**
- **d) Webinars ✅**
- **e) Wow Room ✅**
*Retroalimentación:* Las TIC modernas permiten interacciones inmersivas y masivas.

**4. Impacto positivo de las TIC en el proceso de enseñanza (Selecciona varias):** *[Selección múltiple]*

- **a) Reconfiguran el modelo tradicional ✅**
- **b) Promueven ambientes innovadores ✅**
- c) Reducen la motivación
- **d) Facilitan el acceso a la información ✅**
*Retroalimentación:* Cambian el paradigma, motivan y democratizan el saber.

**5. Explica cómo usarías la Realidad Aumentada (RA) para enseñar un concepto complejo de tu área.** *[Abierta (revisión docente)]*

*Pregunta abierta: respuesta libre del estudiante, registrada para revisión docente (no se autocalifica).*
*Retroalimentación:* Respuesta registrada. La RA permite visualizar modelos 3D interactivos, ideal para ciencias o anatomía.

**6. Escribe una reflexión final: ¿Cómo esta Hackatón Pedagógica transformó tu visión de la innovación didáctica?** *[Abierta (revisión docente)]*

*Pregunta abierta: respuesta libre del estudiante, registrada para revisión docente (no se autocalifica).*
*Retroalimentación:* Respuesta registrada. ¡Felicidades por llegar al final de la hackatón!

**7. En el collage de herramientas TIC, ¿qué representa la interacción síncrona a distancia?** *[Visual (basada en imagen)]*

- a) Gamificación
- **b) Webinars / Videoconferencias ✅**
- c) MOOC asíncrono
- d) Libro digital
*Retroalimentación:* Los webinars permiten la interacción en tiempo real desde cualquier lugar.

**8. En el diagrama de Aula Invertida, ¿qué se realiza "En Casa"?** *[Visual (basada en imagen)]*

- a) El trabajo colaborativo grupal
- b) Resolución de dudas complejas
- **c) La asimilación de teoría a través de videos/lecturas ✅**
- d) El examen final
*Retroalimentación:* En casa se consume el contenido teórico para liberar la clase presencial.

---

### 5.2 Checklists de completitud

Durante la fase de diseño de la solución (Fase 3), el sistema valida mediante listas de verificación que la propuesta del estudiante contenga, como mínimo, la identificación y justificación de la estrategia metodológica (ABPr, ABP o ABC), la modalidad de implementación (presencial, virtual o b-learning), y al menos una herramienta TIC pertinente y justificada frente al reto asignado.

### 5.3 Rúbrica de evaluación de la entrega final

La entrega final del recurso pedagógico se valora mediante la siguiente rúbrica integradora, que articula explícitamente los criterios de evaluación con las unidades correspondientes de la asignatura:

| Criterio | Insuficiente (0-2) | Aceptable (3) | Sobresaliente (4-5) | Unidad |
|---|---|---|---|---|
| Diagnóstico del problema | Superficial | Identifica el problema | Diagnóstico fundamentado en el concepto de didáctica | U1 |
| Integración de conocimientos | No evidente | Menciona TPACK sin aplicarlo | Aplica TPACK al caso concreto | U3 |
| Metodología (ABPr/ABP/ABC) | No coherente con el reto | Coherente pero genérica | Coherente, justificada y bien aplicada | U2+U4 |
| Uso de TIC | Decorativo | Pertinente | Pertinente y bien fundamentado | U5 |
| Síntesis final | Fragmentada | Conecta 2-3 unidades | Conecta las cinco unidades con claridad | I-V |
| Normas APA 7 | Incumplidas | Parcialmente aplicadas | Aplicadas correctamente en todo el documento | — |

### 5.4 Reflexión metacognitiva

Como cierre del proceso, la Fase 5 incorpora un quiz formativo, sin incidencia en la calificación, orientado a que el estudiante reflexione sobre las dificultades encontradas, los aprendizajes obtenidos y la transferencia de la experiencia a su práctica docente real.

## 6. Actividades innovadoras

Más allá de la hackatón como actividad marco, el desarrollo de la plataforma web incorpora un conjunto de actividades y elementos innovadores que enriquecen la experiencia de aprendizaje del estudiante:

1. Hackatón pedagógica virtual gamificada: la experiencia completa se estructura como un recorrido de fases progresivas con desbloqueo condicionado, similar a la lógica de un videojuego educativo, en lugar de una entrega única de documento.
2. Quizzes interactivos con retroalimentación inmediata: cada pregunta incorrecta del banco de preguntas devuelve al estudiante una explicación conceptual vinculada a la unidad correspondiente, favoreciendo la autorregulación del aprendizaje.
3. Selección de retos auténticos y contextualizados: el banco de desafíos (virtualización, inclusión, evaluación auténtica, manejo de emociones, motivación) responde a problemáticas reales y actuales de la práctica docente, evitando ejercicios abstractos o descontextualizados.
4. Checklists de autoevaluación progresiva: antes de habilitar la entrega final, el propio sistema orienta al estudiante a verificar la completitud de su propuesta, fomentando la autonomía y la autorregulación.
5. Trazabilidad de la propia integración de unidades: cada fase de la plataforma recuerda explícitamente al estudiante qué unidad del curso debe aplicar, reforzando el hilo conductor entre las cinco unidades y evitando que la hackatón se perciba como un ejercicio desconectado del resto de la asignatura.
6. Desarrollo de tecnología propia como acto de innovación didáctica: la construcción de una aplicación web original, asistida por inteligencia artificial mediante Antigravity, constituye en sí misma una actividad innovadora, al modelar ante los estudiantes (futuros docentes) un ejercicio práctico de creación tecnológica con fines pedagógicos.

## 7. Producto a entregar

El producto a entregar corresponde a la aplicación web funcional descrita en el presente documento, junto con el código fuente correspondiente y la evidencia de su despliegue. A continuación, se detallan los componentes y enlaces asociados a la entrega:

### 7.1 Componentes de la entrega

- Aplicación web funcional, con frontend en Angular CLI y backend en Node.js con Express, conectada a una base de datos MongoDB.
- Repositorio de código fuente en GitHub, con el historial de desarrollo del proyecto.
- Despliegue accesible del frontend (Vercel) y del backend (Render), o evidencia visual (capturas de pantalla) del funcionamiento de la aplicación en caso de no contar con despliegue público activo al momento de la entrega.
- El presente documento de presentación del recurso pedagógico, en formato Word, bajo norma APA 7.

### 7.2 Enlaces

- Despliegue de la aplicación: https://hackaton-pedagogica-virtual.vercel.app/

## Referencias

American Psychological Association. (2020). *Publication manual of the American Psychological Association* (7.ª ed.).

Díaz Barriga, Á. (2013). *Guía para la elaboración de una secuencia didáctica*. Universidad Nacional Autónoma de México.

Mishra, P., & Koehler, M. J. (2006). Technological pedagogical content knowledge: A framework for teacher knowledge. *Teachers College Record*, 108(6), 1017-1054.

Comenio, J. A. (1998). *Didáctica magna* (9.ª ed.). Porrúa.

Angular. (2026). *Documentación oficial de Angular*. https://angular.dev

OpenJS Foundation. (2026). *Express — Framework web para Node.js*. https://expressjs.com

MongoDB, Inc. (2026). *Documentación oficial de MongoDB*. https://www.mongodb.com/docs

*[Agregar aquí las referencias bibliográficas adicionales utilizadas para fundamentar el reto específico elegido, en orden alfabético y bajo norma APA 7.]*
