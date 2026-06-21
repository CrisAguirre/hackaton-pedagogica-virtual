export const HACKATON_DATA = {
  challenge: {
    id: 1,
    title: 'Virtualización de la enseñanza',
    description: 'Diseñar una secuencia didáctica para un curso presencial que debe migrar a modalidad virtual en una semana.'
  },
  phases: [
    { id: 0, title: 'Onboarding', status: 'unlocked', type: 'info' },
    { id: 1, title: 'Diagnóstico del reto (Quiz UI)', status: 'locked', type: 'quiz' },
    { id: 2, title: 'Fundamentación teórica', status: 'locked', type: 'quiz' },
    { id: 3, title: 'Diseño - Metodología', status: 'locked', type: 'checklist' },
    { id: 4, title: 'Entrega final', status: 'locked', type: 'upload' },
    { id: 5, title: 'Reflexión metacognitiva', status: 'locked', type: 'quiz' }
  ],
  questions_phase_1: [
    {
      id: 'q1',
      text: '¿Cuál es el primer paso metodológico antes de diseñar una solución didáctica para un reto de la hackatón?',
      options: [
        'Elegir la herramienta tecnológica',
        'Comprender y delimitar la problemática educativa',
        'Redactar la evaluación final',
        'Buscar referencias bibliográficas al azar'
      ],
      correctIndex: 1,
      feedback: 'La innovación didáctica parte de entender el problema real del contexto educativo antes de proponer soluciones.'
    },
    {
      id: 'q2',
      text: 'La didáctica puede entenderse como la disciplina que organiza la transmisión de saberes entre generaciones.',
      options: ['Verdadero', 'Falso'],
      correctIndex: 0,
      feedback: 'Así se define en la Unidad I: la didáctica es la capa que organiza esa transmisión.'
    },
    {
      id: 'q3',
      text: '¿Qué aporte se asocia principalmente a Juan Amos Comenio?',
      options: [
        'El modelo TPACK',
        'Los fundamentos clásicos de la didáctica como arte de enseñar todo a todos',
        'El aprendizaje basado en proyectos',
        'La gamificación educativa'
      ],
      correctIndex: 1,
      feedback: 'Comenio es una figura clave en los orígenes históricos de la didáctica.'
    }
  ]
};
