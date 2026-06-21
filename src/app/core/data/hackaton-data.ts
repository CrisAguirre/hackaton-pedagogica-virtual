export const HACKATON_DATA: any = {
  challenge: {
    id: 1,
    title: 'Virtualización de la enseñanza',
    description: 'Diseñar una secuencia didáctica para un curso presencial que debe migrar a modalidad virtual en una semana.'
  },
  phases: [
    { id: 0, title: 'Onboarding', status: 'unlocked', type: 'info' },
    { id: 1, title: 'Diagnóstico del reto (Quiz UI)', status: 'locked', type: 'quiz' },
    { id: 2, title: 'Fundamentación teórica (UI+UIII)', status: 'locked', type: 'quiz' },
    { id: 3, title: 'Diseño - Metodología y TIC', status: 'locked', type: 'checklist' },
    { id: 4, title: 'Entrega final', status: 'locked', type: 'upload' },
    { id: 5, title: 'Reflexión metacognitiva', status: 'locked', type: 'quiz' }
  ],
  questions_phase_1: [
    {
      id: 'q1', text: '¿Cuál es el primer paso metodológico antes de diseñar una solución didáctica para un reto de la hackatón?',
      options: ['Elegir la herramienta tecnológica', 'Comprender y delimitar la problemática educativa', 'Redactar la evaluación final', 'Buscar referencias bibliográficas al azar'],
      correctIndex: 1, feedback: 'La innovación didáctica parte de entender el problema real del contexto educativo antes de proponer soluciones.'
    },
    {
      id: 'q2', text: 'La didáctica puede entenderse como la disciplina que organiza la transmisión de saberes entre generaciones.',
      options: ['Verdadero', 'Falso'], correctIndex: 0, feedback: 'Así se define en la Unidad I: la didáctica es la capa que organiza esa transmisión.'
    }
  ],
  questions_phase_2: [
    {
      id: 'q1', text: 'El modelo TPACK integra tres tipos de conocimiento. ¿Cuáles son?',
      options: ['Científico, administrativo y financiero', 'Disciplinar (contenido), pedagógico y tecnológico', 'Curricular, evaluativo y normativo'],
      correctIndex: 1, feedback: 'TPACK = Technological, Pedagogical And Content Knowledge.'
    },
    {
      id: 'q2', text: '¿Por qué es relevante aplicar TPACK en las prácticas de aula de docentes en ejercicio?',
      options: ['Porque permite lograr una enseñanza efectiva mediada con tecnología', 'Porque elimina la necesidad de planificación pedagógica'],
      correctIndex: 0, feedback: 'TPACK busca una enseñanza efectiva que combine los tres saberes.'
    }
  ],
  checklists_phase_3: [
    { text: 'Se identifica si la estrategia es ABPr, ABP o ABC y se justifica la elección' },
    { text: 'Se indica si la solución es presencial, virtual o b-learning' },
    { text: 'Se elige al menos una herramienta TIC del repertorio visto (MOOC, webinar, Flipped Room, RA, gamificación, Wow Room)' }
  ],
  questions_phase_5: [
    {
      id: 'q1', text: '¿Qué unidad del curso (I-V) consideras que aportó más a tu propuesta, y por qué? (Para este demo, selecciona cualquiera)',
      options: ['Unidad I', 'Unidad II', 'Unidad III', 'Unidad V'],
      correctIndex: 3, feedback: 'Excelente reflexión. (Esta fase en producción sería abierta sin calificación estricta).'
    }
  ]
};
