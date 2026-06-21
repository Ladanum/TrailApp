const SESSIONS = [
  // WEEK 1 - Semana 1 (Jun 15-21)
  {
    index: 0,
    day: 'Sunday',
    date: '15/06',
    fullDate: '2026-06-15',
    type: 'GYM',
    cat: 'Strength',
    duration: 50,
    zone: null,
    alert: false,
    description: 'MF1.1 - Blocks A+B: Upper body focus with compound movements',
    detail: 'Blocks A and B training session (50 min). Focus on upper body strength development with controlled tempo and proper form.',
    info: {
      type: 'Entrenamiento de fuerza',
      focus: 'Tren superior',
      intensity: 'Alta',
      tempo: 'Controlado 3-1-2',
      restPeriod: '2-3 min entre series',
      purpose: 'Desarrollo de fuerza máxima',
      howToFeel: 'Intenso pero controlado. Deberías poder completar todas las reps con forma perfecta.',
      techniqueTips: [
        'Escápulas retraídas en pressing',
        'Núcleo enganchado durante todo',
        'Barra cercana al cuerpo en filas',
        'Rango completo de movimiento'
      ]
    },
    blocksVariants: {
      'con-equipamiento': {
        blocks: {
          A: [
            ['Bench Press', 4, '6-8'],
            ['Incline DB Press', 4, '8-10']
          ],
          B: [
            ['Bent Over Barbell Row', 4, '6-8'],
            ['Seal Rows', 4, '8-10']
          ]
        }
      },
      'peso-libre': {
        blocks: {
          A: [
            ['Push-ups (weighted)', 4, '8-12'],
            ['Dips', 4, '6-10']
          ],
          B: [
            ['Chin-ups', 4, '6-8'],
            ['Inverted Rows', 4, '8-10']
          ]
        }
      }
    }
  },
  {
    index: 1,
    day: 'Monday',
    date: '16/06',
    fullDate: '2026-06-16',
    type: 'Z2',
    cat: 'Endurance',
    duration: 60,
    zone: 'Z2',
    alert: false,
    description: 'Easy running Z2 - Base building aerobic session',
    detail: 'Moderate intensity steady-state running in Zone 2. Conversational pace on mixed terrain. Focus on aerobic base development and recovery mechanics.',
    info: {
      zona: 'Z2',
      intensity: 'Muy fácil a moderado',
      rhythm: 'Conversación fluida',
      terrain: 'Llano/Variado',
      focus: 'Base aeróbica/Recuperación activa',
      howToFeel: 'Deberías poder hablar en frases completas. Respiración controlada y cómoda.',
      techniqueTips: [
        'Respiración nasal preferida',
        'Postura erguida',
        'Cadencia natural 160-170 pasos/min',
        'Relajación en hombros y mandíbula',
        'Enfoque en ecosistema muscular'
      ]
    },
    terrain: 'Mixed (road/trail)',
    intensity: 'Easy aerobic',
    recoveryNote: 'Maintain steady breathing, focus on form'
  },
  {
    index: 2,
    day: 'Tuesday',
    date: '17/06',
    fullDate: '2026-06-17',
    type: 'GYM',
    cat: 'Strength',
    duration: 55,
    zone: null,
    alert: false,
    description: 'MF1.1 - Blocks C+D: Core and lower body strength',
    detail: 'Blocks C and D training session (55 min). Core stabilization and lower body compound movements with focus on hip and knee extension.',
    info: {
      type: 'Entrenamiento de fuerza',
      focus: 'Tren inferior',
      intensity: 'Alta',
      tempo: 'Controlado 2-1-3',
      restPeriod: '2-3 min entre series',
      purpose: 'Fuerza en cadena posterior y extensores',
      howToFeel: 'Intenso. Quemazón muscular es esperada. Forma perfecta en cada repetición.',
      techniqueTips: [
        'Rótula alineada con dedos en squats',
        'Profundidad máxima sin colapso lumbar',
        'Cadera primero en deadlifts',
        'Abdomen activado constantemente',
        'Pecho elevado en todos los movimientos'
      ]
    },
    blocksVariants: {
      'con-equipamiento': {
        blocks: {
          C: [
            ['Back Squats', 4, '6-8'],
            ['Leg Press', 4, '8-10']
          ],
          D: [
            ['Deadlifts', 3, '5-6'],
            ['Romanian Deadlifts', 3, '8-10']
          ]
        }
      },
      'peso-libre': {
        blocks: {
          C: [
            ['Pistol Squats', 3, '5-8'],
            ['Bulgarian Split Squats', 4, '8-10']
          ],
          D: [
            ['Single-leg Deadlifts', 3, '8-10'],
            ['Jump Squats', 3, '10-12']
          ]
        }
      }
    }
  },
  {
    index: 3,
    day: 'Wednesday',
    date: '18/06',
    fullDate: '2026-06-18',
    type: 'REC(E)',
    cat: 'Recovery',
    duration: 45,
    zone: null,
    alert: false,
    description: 'Recovery and mobility - Active restoration day',
    detail: 'Low intensity mobility and recovery session. Foam rolling, stretching, and movement quality work. Block E exercises focus on stabilization and mobility.',
    info: {
      type: 'Recuperación activa',
      focus: 'Movilidad/Regeneración/Restauración',
      duration: '45 min',
      purpose: 'Acelerar recuperación y mejorar rango de movimiento',
      howToFeel: 'Relajado. Sin dolor. Sensación de soltura creciente.',
      blockE: [
        'Foam Rolling (full body)',
        'Hip 90/90 Stretch',
        'Cat-Cow Flows',
        'Glute Bridge Holds',
        'Quadruped Rocking',
        "Child's Pose",
        'Spinal Twists',
        'Hamstring Stretches'
      ],
      instructions: [
        'Respiración profunda durante todo',
        'Sin forzar movimientos',
        'Mantén cada estiramiento 45-60 seg',
        'Foam roll lentamente',
        'Movimientos fluidos sin rebotes'
      ]
    },
    blocks: {
      E: [
        ['Foam Rolling (full body)', 1, '5 min'],
        ['Hip 90/90 Stretch', 3, '45 sec'],
        ['Cat-Cow Flows', 3, '12 reps'],
        ['Glute Bridge Holds', 3, '30 sec'],
        ['Quadruped Rocking', 3, '10 reps'],
        ['Child\'s Pose', 2, '60 sec']
      ]
    }
  },
  {
    index: 4,
    day: 'Thursday',
    date: '19/06',
    fullDate: '2026-06-19',
    type: 'TL',
    cat: 'Trail Running',
    duration: 75,
    zone: 'Z2',
    alert: false,
    description: 'Trail running Z2 - Technical terrain adaptation',
    detail: 'Technical trail running in Zone 2 with elevation. Focus on footwork, balance, and sustained effort on uneven terrain. Build confidence on technical sections.',
    info: {
      type: 'Tirada larga Z1-Z2',
      zona: 'Z2',
      terrain: 'Sendero técnico rocoso/raíces',
      elevation: '180m desnivel positivo',
      focus: 'Técnica/Balance/Confianza en terreno',
      estimatedPace: '5:30-6:00 min/km',
      howToFeel: 'Controlado. Capaz de mantener ritmo en técnico. Confortable en descensos.',
      techniqueTips: [
        'Postura hacia adelante en pendientes',
        'Zancada corta en técnico',
        'Ojos en siguiente paso, no al suelo',
        'Brazos relajados para balance',
        'Flexión de rodillas para amortiguación',
        'Control en bajadas - pequeños pasos'
      ]
    },
    elevationGain: 180,
    terrain: 'Rocky/rooted technical trail',
    techniqueFocus: 'Foot placement, balance, line selection'
  },
  {
    index: 5,
    day: 'Friday',
    date: '20/06',
    fullDate: '2026-06-20',
    type: 'Z2+S',
    cat: 'Endurance',
    duration: 70,
    zone: 'Z2+Surges',
    alert: false,
    description: 'Z2 with speed surges - Aerobic capacity development',
    detail: 'Extended Z2 base run with 6x2min surges at Z3/Z4 pace. Recovery intervals at easy Z1/Z2. Develops aerobic capacity while maintaining fat-oxidation base.',
    info: {
      zona: 'Z2+S',
      intensity: 'Aeróbico base + aceleraciones',
      rhythm: 'Z2 conversacional con explosiones',
      terrain: 'Llano/Parque/Ruta',
      focus: 'Capacidad aeróbica/Potencia',
      strides: '6×2min acelerones progresivos',
      stridesRecovery: '2 min caminando/Z1',
      stridesIntensity: '~85-90% esfuerzo máximo',
      stridesTotalTime: '~20 min totales (12 min esfuerzo + 8 min recuperación)',
      howToFeel: 'Base cómoda, aceleraciones controladas pero intensas. Recuperación a ritmo conversacional.',
      stridesInstructions: [
        'Primer acelerón 70% esfuerzo',
        'Progresión: 75%, 80%, 85%, 85%, 85%',
        'Zancada larga, relajada pero dinámica',
        'Brazos impulsores pero sin tensión',
        'Recuperación a ritmo Z2 completo',
        'Respiración profunda en recuperación'
      ]
    },
    terrain: 'Road/park',
    intensity: 'Z2 base with Z3/Z4 surges',
    recoveryNote: 'Active recovery between surges'
  },
  {
    index: 6,
    day: 'Saturday',
    date: '21/06',
    fullDate: '2026-06-21',
    type: 'TL+H',
    cat: 'Trail Running',
    duration: 90,
    zone: 'Z2',
    alert: false,
    description: 'Long trail run - Aerobic endurance and hill adaptation',
    detail: 'Extended trail running session with significant elevation gain. Develop aerobic endurance, mental toughness, and hill running efficiency. Maintain steady state on varied terrain.',
    info: {
      type: 'Tirada larga con subidas Z1-Z2',
      zona: 'Z2',
      terrain: 'Sendero mixto con subidas sostenidas',
      elevation: '350m desnivel positivo',
      focus: 'Resistencia/Técnica/Descensos/Mentalidad',
      climbs: '8×20s en rampas 8-12%',
      climbsIntensity: 'Fuerte, ~Z4 (85-90% esfuerzo)',
      climbsRecovery: 'Bajar caminando o Z1 suave',
      totalClimbTime: '~25 min totales (14 min subida + 11 min bajada/recuperación)',
      estimatedPace: '5:20-5:50 min/km (tirada base)',
      howToFeel: 'Base cómoda y sostenible. Subidas duras pero recuperables. Mentalidad fuerte en último tercio.',
      climbInstructions: [
        'Atacar subidas con intención',
        'Zancada más corta en pendiente fuerte',
        'Inclinarse hacia pendiente',
        'Mantener ritmo respiratorio fuerte pero controlado',
        'Recuperación completa antes de siguiente subida',
        'Bajadas técnicas - no descender demasiado rápido'
      ],
      totalDuration: '~140 min totales (90 min carrera + subidas integradas)'
    },
    elevationGain: 350,
    terrain: 'Mixed trail with sustained climbs',
    techniqueFocus: 'Hill climbing efficiency, descent control'
  },

  // WEEK 2 - Semana 2 (Jun 22-28)
  {
    index: 7,
    day: 'Sunday',
    date: '22/06',
    fullDate: '2026-06-22',
    type: 'GYM',
    cat: 'Strength',
    duration: 50,
    zone: null,
    alert: false,
    description: 'MF1.1 - Blocks A+B: Upper body focus with compound movements',
    detail: 'Blocks A and B training session (50 min). Focus on upper body strength development with controlled tempo and proper form.',
    info: {
      type: 'Entrenamiento de fuerza',
      focus: 'Tren superior',
      intensity: 'Alta',
      tempo: 'Controlado 3-1-2',
      restPeriod: '2-3 min entre series',
      purpose: 'Desarrollo de fuerza máxima',
      howToFeel: 'Intenso pero controlado. Deberías poder completar todas las reps con forma perfecta.',
      techniqueTips: [
        'Escápulas retraídas en pressing',
        'Núcleo enganchado durante todo',
        'Barra cercana al cuerpo en filas',
        'Rango completo de movimiento'
      ]
    },
    blocksVariants: {
      'con-equipamiento': {
        blocks: {
          A: [
            ['Bench Press', 4, '6-8'],
            ['Incline DB Press', 4, '8-10']
          ],
          B: [
            ['Bent Over Barbell Row', 4, '6-8'],
            ['Seal Rows', 4, '8-10']
          ]
        }
      },
      'peso-libre': {
        blocks: {
          A: [
            ['Push-ups (weighted)', 4, '8-12'],
            ['Dips', 4, '6-10']
          ],
          B: [
            ['Chin-ups', 4, '6-8'],
            ['Inverted Rows', 4, '8-10']
          ]
        }
      }
    }
  },
  {
    index: 8,
    day: 'Monday',
    date: '23/06',
    fullDate: '2026-06-23',
    type: 'Z2',
    cat: 'Endurance',
    duration: 60,
    zone: 'Z2',
    alert: false,
    description: 'Easy running Z2 - Base building aerobic session',
    detail: 'Moderate intensity steady-state running in Zone 2. Conversational pace on mixed terrain. Focus on aerobic base development and recovery mechanics.',
    info: {
      zona: 'Z2',
      intensity: 'Muy fácil a moderado',
      rhythm: 'Conversación fluida',
      terrain: 'Llano/Variado',
      focus: 'Base aeróbica/Recuperación activa',
      howToFeel: 'Deberías poder hablar en frases completas. Respiración controlada y cómoda.',
      techniqueTips: [
        'Respiración nasal preferida',
        'Postura erguida',
        'Cadencia natural 160-170 pasos/min',
        'Relajación en hombros y mandíbula',
        'Enfoque en ecosistema muscular'
      ]
    },
    terrain: 'Mixed (road/trail)',
    intensity: 'Easy aerobic',
    recoveryNote: 'Maintain steady breathing, focus on form'
  },
  {
    index: 9,
    day: 'Tuesday',
    date: '24/06',
    fullDate: '2026-06-24',
    type: 'GYM',
    cat: 'Strength',
    duration: 55,
    zone: null,
    alert: false,
    description: 'MF1.1 - Blocks C+D: Core and lower body strength',
    detail: 'Blocks C and D training session (55 min). Core stabilization and lower body compound movements with focus on hip and knee extension.',
    info: {
      type: 'Entrenamiento de fuerza',
      focus: 'Tren inferior',
      intensity: 'Alta',
      tempo: 'Controlado 2-1-3',
      restPeriod: '2-3 min entre series',
      purpose: 'Fuerza en cadena posterior y extensores',
      howToFeel: 'Intenso. Quemazón muscular es esperada. Forma perfecta en cada repetición.',
      techniqueTips: [
        'Rótula alineada con dedos en squats',
        'Profundidad máxima sin colapso lumbar',
        'Cadera primero en deadlifts',
        'Abdomen activado constantemente',
        'Pecho elevado en todos los movimientos'
      ]
    },
    blocksVariants: {
      'con-equipamiento': {
        blocks: {
          C: [
            ['Back Squats', 4, '6-8'],
            ['Leg Press', 4, '8-10']
          ],
          D: [
            ['Deadlifts', 3, '5-6'],
            ['Romanian Deadlifts', 3, '8-10']
          ]
        }
      },
      'peso-libre': {
        blocks: {
          C: [
            ['Pistol Squats', 3, '5-8'],
            ['Bulgarian Split Squats', 4, '8-10']
          ],
          D: [
            ['Single-leg Deadlifts', 3, '8-10'],
            ['Jump Squats', 3, '10-12']
          ]
        }
      }
    }
  },
  {
    index: 10,
    day: 'Wednesday',
    date: '25/06',
    fullDate: '2026-06-25',
    type: 'REC(E)',
    cat: 'Recovery',
    duration: 45,
    zone: null,
    alert: false,
    description: 'Recovery and mobility - Active restoration day',
    detail: 'Low intensity mobility and recovery session. Foam rolling, stretching, and movement quality work. Block E exercises focus on stabilization and mobility.',
    info: {
      type: 'Recuperación activa',
      focus: 'Movilidad/Regeneración/Restauración',
      duration: '45 min',
      purpose: 'Acelerar recuperación y mejorar rango de movimiento',
      howToFeel: 'Relajado. Sin dolor. Sensación de soltura creciente.',
      blockE: [
        'Foam Rolling (full body)',
        'Hip 90/90 Stretch',
        'Cat-Cow Flows',
        'Glute Bridge Holds',
        'Quadruped Rocking',
        "Child's Pose",
        'Spinal Twists',
        'Hamstring Stretches'
      ],
      instructions: [
        'Respiración profunda durante todo',
        'Sin forzar movimientos',
        'Mantén cada estiramiento 45-60 seg',
        'Foam roll lentamente',
        'Movimientos fluidos sin rebotes'
      ]
    },
    blocks: {
      E: [
        ['Foam Rolling (full body)', 1, '5 min'],
        ['Hip 90/90 Stretch', 3, '45 sec'],
        ['Cat-Cow Flows', 3, '12 reps'],
        ['Glute Bridge Holds', 3, '30 sec'],
        ['Quadruped Rocking', 3, '10 reps'],
        ['Child\'s Pose', 2, '60 sec']
      ]
    }
  },
  {
    index: 11,
    day: 'Thursday',
    date: '26/06',
    fullDate: '2026-06-26',
    type: 'TL',
    cat: 'Trail Running',
    duration: 75,
    zone: 'Z2',
    alert: false,
    description: 'Trail running Z2 - Technical terrain adaptation',
    detail: 'Technical trail running in Zone 2 with elevation. Focus on footwork, balance, and sustained effort on uneven terrain. Build confidence on technical sections.',
    info: {
      type: 'Tirada larga Z1-Z2',
      zona: 'Z2',
      terrain: 'Sendero técnico rocoso/raíces',
      elevation: '180m desnivel positivo',
      focus: 'Técnica/Balance/Confianza en terreno',
      estimatedPace: '5:30-6:00 min/km',
      howToFeel: 'Controlado. Capaz de mantener ritmo en técnico. Confortable en descensos.',
      techniqueTips: [
        'Postura hacia adelante en pendientes',
        'Zancada corta en técnico',
        'Ojos en siguiente paso, no al suelo',
        'Brazos relajados para balance',
        'Flexión de rodillas para amortiguación',
        'Control en bajadas - pequeños pasos'
      ]
    },
    elevationGain: 180,
    terrain: 'Rocky/rooted technical trail',
    techniqueFocus: 'Foot placement, balance, line selection'
  },
  {
    index: 12,
    day: 'Friday',
    date: '27/06',
    fullDate: '2026-06-27',
    type: 'Z2+S',
    cat: 'Endurance',
    duration: 70,
    zone: 'Z2+Surges',
    alert: false,
    description: 'Z2 with speed surges - Aerobic capacity development',
    detail: 'Extended Z2 base run with 6x2min surges at Z3/Z4 pace. Recovery intervals at easy Z1/Z2. Develops aerobic capacity while maintaining fat-oxidation base.',
    info: {
      zona: 'Z2+S',
      intensity: 'Aeróbico base + aceleraciones',
      rhythm: 'Z2 conversacional con explosiones',
      terrain: 'Llano/Parque/Ruta',
      focus: 'Capacidad aeróbica/Potencia',
      strides: '6×2min acelerones progresivos',
      stridesRecovery: '2 min caminando/Z1',
      stridesIntensity: '~85-90% esfuerzo máximo',
      stridesTotalTime: '~20 min totales (12 min esfuerzo + 8 min recuperación)',
      howToFeel: 'Base cómoda, aceleraciones controladas pero intensas. Recuperación a ritmo conversacional.',
      stridesInstructions: [
        'Primer acelerón 70% esfuerzo',
        'Progresión: 75%, 80%, 85%, 85%, 85%',
        'Zancada larga, relajada pero dinámica',
        'Brazos impulsores pero sin tensión',
        'Recuperación a ritmo Z2 completo',
        'Respiración profunda en recuperación'
      ]
    },
    terrain: 'Road/park',
    intensity: 'Z2 base with Z3/Z4 surges',
    recoveryNote: 'Active recovery between surges'
  },
  {
    index: 13,
    day: 'Saturday',
    date: '28/06',
    fullDate: '2026-06-28',
    type: 'TL+H',
    cat: 'Trail Running',
    duration: 90,
    zone: 'Z2',
    alert: false,
    description: 'Long trail run - Aerobic endurance and hill adaptation',
    detail: 'Extended trail running session with significant elevation gain. Develop aerobic endurance, mental toughness, and hill running efficiency. Maintain steady state on varied terrain.',
    info: {
      type: 'Tirada larga con subidas Z1-Z2',
      zona: 'Z2',
      terrain: 'Sendero mixto con subidas sostenidas',
      elevation: '350m desnivel positivo',
      focus: 'Resistencia/Técnica/Descensos/Mentalidad',
      climbs: '8×20s en rampas 8-12%',
      climbsIntensity: 'Fuerte, ~Z4 (85-90% esfuerzo)',
      climbsRecovery: 'Bajar caminando o Z1 suave',
      totalClimbTime: '~25 min totales (14 min subida + 11 min bajada/recuperación)',
      estimatedPace: '5:20-5:50 min/km (tirada base)',
      howToFeel: 'Base cómoda y sostenible. Subidas duras pero recuperables. Mentalidad fuerte en último tercio.',
      climbInstructions: [
        'Atacar subidas con intención',
        'Zancada más corta en pendiente fuerte',
        'Inclinarse hacia pendiente',
        'Mantener ritmo respiratorio fuerte pero controlado',
        'Recuperación completa antes de siguiente subida',
        'Bajadas técnicas - no descender demasiado rápido'
      ],
      totalDuration: '~140 min totales (90 min carrera + subidas integradas)'
    },
    elevationGain: 350,
    terrain: 'Mixed trail with sustained climbs',
    techniqueFocus: 'Hill climbing efficiency, descent control'
  },

  // WEEK 3 - Semana 3 (Jun 29 - Jul 5) - MF1.2 Phase
  {
    index: 14,
    day: 'Sunday',
    date: '29/06',
    fullDate: '2026-06-29',
    type: 'GYM',
    cat: 'Strength',
    duration: 60,
    zone: null,
    alert: false,
    description: 'MF1.2 - Blocks A+C+E: Upper body and stabilization',
    detail: 'Blocks A, C, and E training session (60 min). Upper body strength with core and mobility integration. Progressive overload focus.',
    info: {
      type: 'Entrenamiento de fuerza MF1.2',
      focus: 'Tren superior + Core',
      intensity: 'Alta-Moderada',
      tempo: 'Controlado 3-2-1',
      restPeriod: '90 seg - 2 min entre series',
      purpose: 'Acumulación de volumen con hipertrofia',
      howToFeel: 'Challenging pero controlado. Fuerte conexión mente-músculo.',
      techniqueTips: [
        'Control total en excéntrica',
        'Pausa en punto más difícil',
        'Núcleo activado constantemente',
        'Rango completo de movimiento',
        'Escápulas estables'
      ]
    },
    blocksVariants: {
      'con-equipamiento': {
        blocks: {
          A: [
            ['Incline Bench Press', 4, '6-8'],
            ['DB Floor Press', 4, '8-10']
          ],
          C: [
            ['Goblet Squats', 4, '10-12'],
            ['Leg Extensions', 3, '12-15']
          ],
          E: [
            ['Planks', 3, '45 sec'],
            ['Side Planks', 2, '30 sec each'],
            ['Dead Bugs', 3, '10 reps']
          ]
        }
      },
      'peso-libre': {
        blocks: {
          A: [
            ['Push-ups', 4, '12-15'],
            ['Diamond Push-ups', 3, '8-10']
          ],
          C: [
            ['Jump Squats', 4, '10-12'],
            ['Wall Sit', 3, '45 sec']
          ],
          E: [
            ['Plank Variations', 3, '45 sec'],
            ['Bird Dogs', 3, '10 reps each'],
            ['Mountain Climbers', 3, '20 reps']
          ]
        }
      }
    }
  },
  {
    index: 15,
    day: 'Monday',
    date: '30/06',
    fullDate: '2026-06-30',
    type: 'Z2',
    cat: 'Endurance',
    duration: 60,
    zone: 'Z2',
    alert: false,
    description: 'Easy running Z2 - Base building aerobic session',
    detail: 'Moderate intensity steady-state running in Zone 2. Conversational pace on mixed terrain. Focus on aerobic base development and recovery mechanics.',
    info: {
      zona: 'Z2',
      intensity: 'Muy fácil a moderado',
      rhythm: 'Conversación fluida',
      terrain: 'Llano/Variado',
      focus: 'Base aeróbica/Recuperación activa',
      howToFeel: 'Deberías poder hablar en frases completas. Respiración controlada y cómoda.',
      techniqueTips: [
        'Respiración nasal preferida',
        'Postura erguida',
        'Cadencia natural 160-170 pasos/min',
        'Relajación en hombros y mandíbula',
        'Enfoque en ecosistema muscular'
      ]
    },
    terrain: 'Mixed (road/trail)',
    intensity: 'Easy aerobic',
    recoveryNote: 'Maintain steady breathing, focus on form'
  },
  {
    index: 16,
    day: 'Tuesday',
    date: '01/07',
    fullDate: '2026-07-01',
    type: 'GYM',
    cat: 'Strength',
    duration: 60,
    zone: null,
    alert: false,
    description: 'MF1.2 - Blocks B+D: Back and posterior chain focus',
    detail: 'Blocks B and D training session (60 min). Back strength and posterior chain development with emphasis on pulling mechanics.',
    info: {
      type: 'Entrenamiento de fuerza MF1.2',
      focus: 'Espalda + Cadena posterior',
      intensity: 'Alta-Moderada',
      tempo: 'Explosivo en concéntrica 2-1-3',
      restPeriod: '90 seg - 2 min entre series',
      purpose: 'Fuerza de tracción y estabilidad dorsal',
      howToFeel: 'Intenso en espalda. Contracción clara del dorsal.',
      techniqueTips: [
        'Escápulas retraídas y bajadas',
        'Codos pegados al cuerpo',
        'Retracción escapular al final de movimiento',
        'Control en fase excéntrica',
        'Cadera neutral en deadlifts'
      ]
    },
    blocksVariants: {
      'con-equipamiento': {
        blocks: {
          B: [
            ['Weighted Pull-ups', 4, '6-8'],
            ['Lat Pulldowns', 4, '8-10']
          ],
          D: [
            ['Sumo Deadlifts', 3, '6-8'],
            ['Good Mornings', 3, '8-10']
          ]
        }
      },
      'peso-libre': {
        blocks: {
          B: [
            ['Pull-up Progressions', 4, '6-10'],
            ['Reverse Rows', 4, '8-12']
          ],
          D: [
            ['Single-leg Hip Thrusts', 3, '8-10'],
            ['Glute Bridges', 3, '12-15']
          ]
        }
      }
    }
  },
  {
    index: 17,
    day: 'Wednesday',
    date: '02/07',
    fullDate: '2026-07-02',
    type: 'REC(E)',
    cat: 'Recovery',
    duration: 45,
    zone: null,
    alert: false,
    description: 'Recovery and mobility - Active restoration day',
    detail: 'Low intensity mobility and recovery session. Foam rolling, stretching, and movement quality work. Block E exercises focus on stabilization and mobility.',
    info: {
      type: 'Recuperación activa',
      focus: 'Movilidad/Regeneración/Restauración',
      duration: '45 min',
      purpose: 'Acelerar recuperación y mejorar rango de movimiento',
      howToFeel: 'Relajado. Sin dolor. Sensación de soltura creciente.',
      blockE: [
        'Foam Rolling (lower body focus)',
        'Pigeon Pose',
        "World's Greatest Stretch",
        'Hip Circles',
        'Spinal Twists',
        'Downward Dog',
        'Hamstring Stretches',
        'Glute Stretches'
      ],
      instructions: [
        'Respiración profunda durante todo',
        'Sin forzar movimientos',
        'Mantén cada estiramiento 45-60 seg',
        'Foam roll lentamente',
        'Movimientos fluidos sin rebotes'
      ]
    },
    blocks: {
      E: [
        ['Foam Rolling (lower body)', 1, '5 min'],
        ['Pigeon Pose', 3, '60 sec'],
        ['World\'s Greatest Stretch', 3, '10 reps'],
        ['Hip Circles', 3, '10 each direction'],
        ['Spinal Twists', 3, '45 sec each'],
        ['Downward Dog', 2, '60 sec']
      ]
    }
  },
  {
    index: 18,
    day: 'Thursday',
    date: '03/07',
    fullDate: '2026-07-03',
    type: 'TL',
    cat: 'Trail Running',
    duration: 75,
    zone: 'Z2',
    alert: false,
    description: 'Trail running Z2 - Technical terrain adaptation',
    detail: 'Technical trail running in Zone 2 with elevation. Focus on footwork, balance, and sustained effort on uneven terrain. Build confidence on technical sections.',
    info: {
      type: 'Tirada larga Z1-Z2',
      zona: 'Z2',
      terrain: 'Sendero técnico rocoso/raíces',
      elevation: '200m desnivel positivo',
      focus: 'Técnica/Balance/Confianza en terreno',
      estimatedPace: '5:30-6:00 min/km',
      howToFeel: 'Controlado. Capaz de mantener ritmo en técnico. Confortable en descensos.',
      techniqueTips: [
        'Postura hacia adelante en pendientes',
        'Zancada corta en técnico',
        'Ojos en siguiente paso, no al suelo',
        'Brazos relajados para balance',
        'Flexión de rodillas para amortiguación',
        'Control en bajadas - pequeños pasos'
      ]
    },
    elevationGain: 200,
    terrain: 'Rocky/rooted technical trail',
    techniqueFocus: 'Foot placement, balance, line selection'
  },
  {
    index: 19,
    day: 'Friday',
    date: '04/07',
    fullDate: '2026-07-04',
    type: 'Z2+S',
    cat: 'Endurance',
    duration: 75,
    zone: 'Z2+Surges',
    alert: false,
    description: 'Z2 with speed surges - Aerobic capacity development',
    detail: 'Extended Z2 base run with 8x2min surges at Z3/Z4 pace. Recovery intervals at easy Z1/Z2. Develops aerobic capacity while maintaining fat-oxidation base.',
    info: {
      zona: 'Z2+S',
      intensity: 'Aeróbico base + aceleraciones',
      rhythm: 'Z2 conversacional con explosiones',
      terrain: 'Llano/Parque/Ruta',
      focus: 'Capacidad aeróbica/Potencia',
      strides: '8×2min acelerones progresivos',
      stridesRecovery: '2 min caminando/Z1',
      stridesIntensity: '~85-90% esfuerzo máximo',
      stridesTotalTime: '~24 min totales (16 min esfuerzo + 8 min recuperación)',
      howToFeel: 'Base cómoda, aceleraciones controladas pero intensas. Recuperación a ritmo conversacional.',
      stridesInstructions: [
        'Primer acelerón 70% esfuerzo',
        'Progresión: 75%, 80%, 85%, 87%, 88%, 89%, 90%, 90%',
        'Zancada larga, relajada pero dinámica',
        'Brazos impulsores pero sin tensión',
        'Recuperación a ritmo Z2 completo',
        'Respiración profunda en recuperación'
      ]
    },
    terrain: 'Road/park',
    intensity: 'Z2 base with Z3/Z4 surges',
    recoveryNote: 'Active recovery between surges'
  },
  {
    index: 20,
    day: 'Saturday',
    date: '05/07',
    fullDate: '2026-07-05',
    type: 'TL+H',
    cat: 'Trail Running',
    duration: 100,
    zone: 'Z2',
    alert: false,
    description: 'Long trail run - Aerobic endurance and hill adaptation',
    detail: 'Extended trail running session with significant elevation gain. Develop aerobic endurance, mental toughness, and hill running efficiency. Maintain steady state on varied terrain.',
    info: {
      type: 'Tirada larga con subidas Z1-Z2',
      zona: 'Z2',
      terrain: 'Sendero mixto con subidas sostenidas',
      elevation: '400m desnivel positivo',
      focus: 'Resistencia/Técnica/Descensos/Mentalidad',
      climbs: '8×20s en rampas 8-12%',
      climbsIntensity: 'Fuerte, ~Z4 (85-90% esfuerzo)',
      climbsRecovery: 'Bajar caminando o Z1 suave',
      totalClimbTime: '~25 min totales (14 min subida + 11 min bajada/recuperación)',
      estimatedPace: '5:20-5:50 min/km (tirada base)',
      howToFeel: 'Base cómoda y sostenible. Subidas duras pero recuperables. Mentalidad fuerte en último tercio.',
      climbInstructions: [
        'Atacar subidas con intención',
        'Zancada más corta en pendiente fuerte',
        'Inclinarse hacia pendiente',
        'Mantener ritmo respiratorio fuerte pero controlado',
        'Recuperación completa antes de siguiente subida',
        'Bajadas técnicas - no descender demasiado rápido'
      ],
      totalDuration: '~150 min totales (100 min carrera + subidas integradas)'
    },
    elevationGain: 400,
    terrain: 'Mixed trail with sustained climbs',
    techniqueFocus: 'Hill climbing efficiency, descent control'
  },

  // WEEK 4 - Semana 4 (Jul 6-12) - MF1.2 Phase continues
  {
    index: 21,
    day: 'Sunday',
    date: '06/07',
    fullDate: '2026-07-06',
    type: 'GYM',
    cat: 'Strength',
    duration: 60,
    zone: null,
    alert: false,
    description: 'MF1.2 - Blocks A+C+E: Upper body and stabilization',
    detail: 'Blocks A, C, and E training session (60 min). Upper body strength with core and mobility integration. Progressive overload focus.',
    info: {
      type: 'Entrenamiento de fuerza MF1.2',
      focus: 'Tren superior + Core',
      intensity: 'Alta-Moderada',
      tempo: 'Controlado 3-2-1',
      restPeriod: '90 seg - 2 min entre series',
      purpose: 'Acumulación de volumen con hipertrofia',
      howToFeel: 'Challenging pero controlado. Fuerte conexión mente-músculo.',
      techniqueTips: [
        'Control total en excéntrica',
        'Pausa en punto más difícil',
        'Núcleo activado constantemente',
        'Rango completo de movimiento',
        'Escápulas estables'
      ]
    },
    blocksVariants: {
      'con-equipamiento': {
        blocks: {
          A: [
            ['Incline Bench Press', 4, '6-8'],
            ['DB Floor Press', 4, '8-10']
          ],
          C: [
            ['Goblet Squats', 4, '10-12'],
            ['Leg Extensions', 3, '12-15']
          ],
          E: [
            ['Planks', 3, '45 sec'],
            ['Side Planks', 2, '30 sec each'],
            ['Dead Bugs', 3, '10 reps']
          ]
        }
      },
      'peso-libre': {
        blocks: {
          A: [
            ['Push-ups', 4, '12-15'],
            ['Diamond Push-ups', 3, '8-10']
          ],
          C: [
            ['Jump Squats', 4, '10-12'],
            ['Wall Sit', 3, '45 sec']
          ],
          E: [
            ['Plank Variations', 3, '45 sec'],
            ['Bird Dogs', 3, '10 reps each'],
            ['Mountain Climbers', 3, '20 reps']
          ]
        }
      }
    }
  },
  {
    index: 22,
    day: 'Monday',
    date: '07/07',
    fullDate: '2026-07-07',
    type: 'Z2',
    cat: 'Endurance',
    duration: 60,
    zone: 'Z2',
    alert: false,
    description: 'Easy running Z2 - Base building aerobic session',
    detail: 'Moderate intensity steady-state running in Zone 2. Conversational pace on mixed terrain. Focus on aerobic base development and recovery mechanics.',
    info: {
      zona: 'Z2',
      intensity: 'Muy fácil a moderado',
      rhythm: 'Conversación fluida',
      terrain: 'Llano/Variado',
      focus: 'Base aeróbica/Recuperación activa',
      howToFeel: 'Deberías poder hablar en frases completas. Respiración controlada y cómoda.',
      techniqueTips: [
        'Respiración nasal preferida',
        'Postura erguida',
        'Cadencia natural 160-170 pasos/min',
        'Relajación en hombros y mandíbula',
        'Enfoque en ecosistema muscular'
      ]
    },
    terrain: 'Mixed (road/trail)',
    intensity: 'Easy aerobic',
    recoveryNote: 'Maintain steady breathing, focus on form'
  },
  {
    index: 23,
    day: 'Tuesday',
    date: '08/07',
    fullDate: '2026-07-08',
    type: 'GYM',
    cat: 'Strength',
    duration: 60,
    zone: null,
    alert: false,
    description: 'MF1.2 - Blocks B+D: Back and posterior chain focus',
    detail: 'Blocks B and D training session (60 min). Back strength and posterior chain development with emphasis on pulling mechanics.',
    info: {
      type: 'Entrenamiento de fuerza MF1.2',
      focus: 'Espalda + Cadena posterior',
      intensity: 'Alta-Moderada',
      tempo: 'Explosivo en concéntrica 2-1-3',
      restPeriod: '90 seg - 2 min entre series',
      purpose: 'Fuerza de tracción y estabilidad dorsal',
      howToFeel: 'Intenso en espalda. Contracción clara del dorsal.',
      techniqueTips: [
        'Escápulas retraídas y bajadas',
        'Codos pegados al cuerpo',
        'Retracción escapular al final de movimiento',
        'Control en fase excéntrica',
        'Cadera neutral en deadlifts'
      ]
    },
    blocksVariants: {
      'con-equipamiento': {
        blocks: {
          B: [
            ['Weighted Pull-ups', 4, '6-8'],
            ['Lat Pulldowns', 4, '8-10']
          ],
          D: [
            ['Sumo Deadlifts', 3, '6-8'],
            ['Good Mornings', 3, '8-10']
          ]
        }
      },
      'peso-libre': {
        blocks: {
          B: [
            ['Pull-up Progressions', 4, '6-10'],
            ['Reverse Rows', 4, '8-12']
          ],
          D: [
            ['Single-leg Hip Thrusts', 3, '8-10'],
            ['Glute Bridges', 3, '12-15']
          ]
        }
      }
    }
  },
  {
    index: 24,
    day: 'Wednesday',
    date: '09/07',
    fullDate: '2026-07-09',
    type: 'REC(E)',
    cat: 'Recovery',
    duration: 45,
    zone: null,
    alert: false,
    description: 'Recovery and mobility - Active restoration day',
    detail: 'Low intensity mobility and recovery session. Foam rolling, stretching, and movement quality work. Block E exercises focus on stabilization and mobility.',
    info: {
      type: 'Recuperación activa',
      focus: 'Movilidad/Regeneración/Restauración',
      duration: '45 min',
      purpose: 'Acelerar recuperación y mejorar rango de movimiento',
      howToFeel: 'Relajado. Sin dolor. Sensación de soltura creciente.',
      blockE: [
        'Foam Rolling (upper body focus)',
        'Doorway Chest Stretch',
        'Thread the Needle',
        'Shoulder Dislocations',
        'Arm Circles',
        'Cobra Stretch',
        'Shoulder Stretches',
        'Tricep Stretches'
      ],
      instructions: [
        'Respiración profunda durante todo',
        'Sin forzar movimientos',
        'Mantén cada estiramiento 45-60 seg',
        'Foam roll lentamente',
        'Movimientos fluidos sin rebotes'
      ]
    },
    blocks: {
      E: [
        ['Foam Rolling (upper body)', 1, '5 min'],
        ['Doorway Chest Stretch', 3, '45 sec'],
        ['Thread the Needle', 3, '30 sec each'],
        ['Shoulder Dislocations', 3, '12 reps'],
        ['Arm Circles', 3, '10 each direction'],
        ['Cobra Stretch', 2, '45 sec']
      ]
    }
  },
  {
    index: 25,
    day: 'Thursday',
    date: '10/07',
    fullDate: '2026-07-10',
    type: 'TL',
    cat: 'Trail Running',
    duration: 75,
    zone: 'Z2',
    alert: false,
    description: 'Trail running Z2 - Technical terrain adaptation',
    detail: 'Technical trail running in Zone 2 with elevation. Focus on footwork, balance, and sustained effort on uneven terrain. Build confidence on technical sections.',
    info: {
      type: 'Tirada larga Z1-Z2',
      zona: 'Z2',
      terrain: 'Sendero técnico rocoso/raíces',
      elevation: '200m desnivel positivo',
      focus: 'Técnica/Balance/Confianza en terreno',
      estimatedPace: '5:30-6:00 min/km',
      howToFeel: 'Controlado. Capaz de mantener ritmo en técnico. Confortable en descensos.',
      techniqueTips: [
        'Postura hacia adelante en pendientes',
        'Zancada corta en técnico',
        'Ojos en siguiente paso, no al suelo',
        'Brazos relajados para balance',
        'Flexión de rodillas para amortiguación',
        'Control en bajadas - pequeños pasos'
      ]
    },
    elevationGain: 200,
    terrain: 'Rocky/rooted technical trail',
    techniqueFocus: 'Foot placement, balance, line selection'
  },
  {
    index: 26,
    day: 'Friday',
    date: '11/07',
    fullDate: '2026-07-11',
    type: 'Z2+S',
    cat: 'Endurance',
    duration: 75,
    zone: 'Z2+Surges',
    alert: false,
    description: 'Z2 with speed surges - Aerobic capacity development',
    detail: 'Extended Z2 base run with 8x2min surges at Z3/Z4 pace. Recovery intervals at easy Z1/Z2. Develops aerobic capacity while maintaining fat-oxidation base.',
    info: {
      zona: 'Z2+S',
      intensity: 'Aeróbico base + aceleraciones',
      rhythm: 'Z2 conversacional con explosiones',
      terrain: 'Llano/Parque/Ruta',
      focus: 'Capacidad aeróbica/Potencia',
      strides: '8×2min acelerones progresivos',
      stridesRecovery: '2 min caminando/Z1',
      stridesIntensity: '~85-90% esfuerzo máximo',
      stridesTotalTime: '~24 min totales (16 min esfuerzo + 8 min recuperación)',
      howToFeel: 'Base cómoda, aceleraciones controladas pero intensas. Recuperación a ritmo conversacional.',
      stridesInstructions: [
        'Primer acelerón 70% esfuerzo',
        'Progresión: 75%, 80%, 85%, 87%, 88%, 89%, 90%, 90%',
        'Zancada larga, relajada pero dinámica',
        'Brazos impulsores pero sin tensión',
        'Recuperación a ritmo Z2 completo',
        'Respiración profunda en recuperación'
      ]
    },
    terrain: 'Road/park',
    intensity: 'Z2 base with Z3/Z4 surges',
    recoveryNote: 'Active recovery between surges'
  },
  {
    index: 27,
    day: 'Saturday',
    date: '12/07',
    fullDate: '2026-07-12',
    type: 'TL+H',
    cat: 'Trail Running',
    duration: 100,
    zone: 'Z2',
    alert: false,
    description: 'Long trail run - Aerobic endurance and hill adaptation',
    detail: 'Extended trail running session with significant elevation gain. Develop aerobic endurance, mental toughness, and hill running efficiency. Maintain steady state on varied terrain.',
    info: {
      type: 'Tirada larga con subidas Z1-Z2',
      zona: 'Z2',
      terrain: 'Sendero mixto con subidas sostenidas',
      elevation: '400m desnivel positivo',
      focus: 'Resistencia/Técnica/Descensos/Mentalidad',
      climbs: '8×20s en rampas 8-12%',
      climbsIntensity: 'Fuerte, ~Z4 (85-90% esfuerzo)',
      climbsRecovery: 'Bajar caminando o Z1 suave',
      totalClimbTime: '~25 min totales (14 min subida + 11 min bajada/recuperación)',
      estimatedPace: '5:20-5:50 min/km (tirada base)',
      howToFeel: 'Base cómoda y sostenible. Subidas duras pero recuperables. Mentalidad fuerte en último tercio.',
      climbInstructions: [
        'Atacar subidas con intención',
        'Zancada más corta en pendiente fuerte',
        'Inclinarse hacia pendiente',
        'Mantener ritmo respiratorio fuerte pero controlado',
        'Recuperación completa antes de siguiente subida',
        'Bajadas técnicas - no descender demasiado rápido'
      ],
      totalDuration: '~150 min totales (100 min carrera + subidas integradas)'
    },
    elevationGain: 400,
    terrain: 'Mixed trail with sustained climbs',
    techniqueFocus: 'Hill climbing efficiency, descent control'
  },

  // WEEK 5 - Semana 5 (Jul 13-19) - MF1.3 Phase
  {
    index: 28,
    day: 'Sunday',
    date: '13/07',
    fullDate: '2026-07-13',
    type: 'GYM',
    cat: 'Strength',
    duration: 65,
    zone: null,
    alert: false,
    description: 'MF1.3 - Blocks A+C+E: Advanced upper body and core',
    detail: 'Blocks A, C, and E training session (65 min). Advanced upper body strength with compound focus and core stability work.',
    info: {
      type: 'Entrenamiento de fuerza MF1.3',
      focus: 'Tren superior avanzado + Core',
      intensity: 'Muy alta',
      tempo: 'Explosivo 2-0-3',
      restPeriod: '2-3 min entre series',
      purpose: 'Fuerza máxima y potencia',
      howToFeel: 'Muy desafiante. Peso pesado pero controlado. Explosividad con estabilidad.',
      techniqueTips: [
        'Movimiento explosivo en concéntrica',
        'Control en excéntrica',
        'Máxima activación muscular',
        'Rango completo de movimiento',
        'Nunca comprometer forma por peso'
      ]
    },
    blocksVariants: {
      'con-equipamiento': {
        blocks: {
          A: [
            ['Pin Press', 4, '5-7'],
            ['Board Press', 4, '6-8'],
            ['Cable Flyes', 3, '10-12']
          ],
          C: [
            ['Front Squats', 4, '6-8'],
            ['Hack Squats', 3, '8-10'],
            ['Leg Curls', 3, '10-12']
          ],
          E: [
            ['Ab Wheel Rollouts', 3, '8-12'],
            ['Hanging Leg Raises', 3, '10-12'],
            ['Pallof Press', 3, '10 each side']
          ]
        }
      },
      'peso-libre': {
        blocks: {
          A: [
            ['Pseudo Planche Push-ups', 4, '5-8'],
            ['Archer Push-ups', 3, '6-10'],
            ['Resistance Band Push-ups', 3, '12-15']
          ],
          C: [
            ['Pistol Squat Progressions', 4, '6-10'],
            ['Jump Lunges', 3, '10-12 each'],
            ['Cossack Squats', 3, '10 each']
          ],
          E: [
            ['Leg Raises', 3, '12-15'],
            ['Dragon Flags', 3, '5-8'],
            ['Spinal Rotations', 3, '10 each']
          ]
        }
      }
    }
  },
  {
    index: 29,
    day: 'Monday',
    date: '14/07',
    fullDate: '2026-07-14',
    type: 'Z2',
    cat: 'Endurance',
    duration: 60,
    zone: 'Z2',
    alert: false,
    description: 'Easy running Z2 - Base building aerobic session',
    detail: 'Moderate intensity steady-state running in Zone 2. Conversational pace on mixed terrain. Focus on aerobic base development and recovery mechanics.',
    info: {
      zona: 'Z2',
      intensity: 'Muy fácil a moderado',
      rhythm: 'Conversación fluida',
      terrain: 'Llano/Variado',
      focus: 'Base aeróbica/Recuperación activa',
      howToFeel: 'Deberías poder hablar en frases completas. Respiración controlada y cómoda.',
      techniqueTips: [
        'Respiración nasal preferida',
        'Postura erguida',
        'Cadencia natural 160-170 pasos/min',
        'Relajación en hombros y mandíbula',
        'Enfoque en ecosistema muscular'
      ]
    },
    terrain: 'Mixed (road/trail)',
    intensity: 'Easy aerobic',
    recoveryNote: 'Maintain steady breathing, focus on form'
  },
  {
    index: 30,
    day: 'Tuesday',
    date: '15/07',
    fullDate: '2026-07-15',
    type: 'GYM',
    cat: 'Strength',
    duration: 65,
    zone: null,
    alert: false,
    description: 'MF1.3 - Blocks B+C+D: Back focus with lower body integration',
    detail: 'Blocks B, C, and D training session (65 min). Advanced back strength with integrated lower body compound movements.',
    info: {
      type: 'Entrenamiento de fuerza MF1.3',
      focus: 'Espalda + Tren inferior',
      intensity: 'Muy alta',
      tempo: 'Explosivo 2-0-3',
      restPeriod: '2-3 min entre series',
      purpose: 'Fuerza máxima y potencia en tracción y extensión',
      howToFeel: 'Muy desafiante. Mucho peso. Movimientos explosivos pero controlados.',
      techniqueTips: [
        'Tracción explosiva desde caderas',
        'Escápulas hacia atrás y abajo',
        'Cadera neutral en toda la extensión',
        'Profundidad en squats',
        'Control en bajadas'
      ]
    },
    blocksVariants: {
      'con-equipamiento': {
        blocks: {
          B: [
            ['Weighted Chin-ups', 4, '5-7'],
            ['Seal Rows', 4, '6-8'],
            ['Face Pulls', 3, '12-15']
          ],
          C: [
            ['Back Squats', 4, '5-7'],
            ['Paused Squats', 3, '6-8']
          ],
          D: [
            ['Deadlifts', 3, '3-5'],
            ['Deficit Deadlifts', 3, '5-7']
          ]
        }
      },
      'peso-libre': {
        blocks: {
          B: [
            ['Weighted Pull-ups', 4, '5-8'],
            ['Explosive Pull-ups', 3, '5-7'],
            ['Resistance Band Rows', 3, '12-15']
          ],
          C: [
            ['Pistol Squat Progressions', 4, '6-8'],
            ['Jump Squats', 3, '8-10']
          ],
          D: [
            ['Single-leg Deadlifts', 3, '8-10'],
            ['Bulgarian Split Squats', 3, '8-10 each']
          ]
        }
      }
    }
  },
  {
    index: 31,
    day: 'Wednesday',
    date: '16/07',
    fullDate: '2026-07-16',
    type: 'REC(E)',
    cat: 'Recovery',
    duration: 50,
    zone: null,
    alert: false,
    description: 'Extended recovery and mobility - Active restoration day',
    detail: 'Extended mobility and recovery session focusing on movement quality. Comprehensive stretching and soft tissue work.',
    info: {
      type: 'Recuperación activa extendida',
      focus: 'Movilidad profunda/Regeneración/Restauración',
      duration: '50 min',
      purpose: 'Acelerar recuperación y mejorar rango de movimiento significativamente',
      howToFeel: 'Profundamente relajado. Mayor soltura. Sin tensiones.',
      blockE: [
        'Full Body Foam Rolling',
        'Couch Stretch',
        'Frog Stretch',
        'Lizard Pose',
        'Quad Stretches',
        'Hamstring Stretches',
        'Cross-body Shoulder Stretch',
        'Deep Hip Stretches'
      ],
      instructions: [
        'Respiración profunda durante todo',
        'Sin forzar movimientos',
        'Mantén cada estiramiento 60-90 seg',
        'Foam roll lentamente y profundamente',
        'Movimientos fluidos sin rebotes',
        'Enfoque en áreas tensas'
      ]
    },
    blocks: {
      E: [
        ['Full Body Foam Rolling', 1, '8 min'],
        ['Couch Stretch', 3, '90 sec each'],
        ['Frog Stretch', 3, '90 sec'],
        ['Lizard Pose', 3, '60 sec each'],
        ['Quad Stretches', 3, '45 sec each'],
        ['Hamstring Stretches', 3, '60 sec each'],
        ['Cross-body Shoulder Stretch', 2, '45 sec each']
      ]
    }
  },
  {
    index: 32,
    day: 'Thursday',
    date: '17/07',
    fullDate: '2026-07-17',
    type: 'TL',
    cat: 'Trail Running',
    duration: 80,
    zone: 'Z2',
    alert: false,
    description: 'Trail running Z2 - Technical terrain adaptation',
    detail: 'Technical trail running in Zone 2 with elevation. Focus on footwork, balance, and sustained effort on uneven terrain. Build confidence on technical sections.',
    info: {
      type: 'Tirada larga Z1-Z2',
      zona: 'Z2',
      terrain: 'Sendero técnico rocoso/raíces',
      elevation: '250m desnivel positivo',
      focus: 'Técnica/Balance/Confianza en terreno',
      estimatedPace: '5:30-6:00 min/km',
      howToFeel: 'Controlado. Capaz de mantener ritmo en técnico. Muy confortable en descensos.',
      techniqueTips: [
        'Postura hacia adelante en pendientes',
        'Zancada corta en técnico',
        'Ojos en siguiente paso, no al suelo',
        'Brazos relajados para balance',
        'Flexión de rodillas para amortiguación',
        'Control en bajadas - pequeños pasos'
      ]
    },
    elevationGain: 250,
    terrain: 'Rocky/rooted technical trail',
    techniqueFocus: 'Foot placement, balance, line selection'
  },
  {
    index: 33,
    day: 'Friday',
    date: '18/07',
    fullDate: '2026-07-18',
    type: 'Z2+S',
    cat: 'Endurance',
    duration: 80,
    zone: 'Z2+Surges',
    alert: false,
    description: 'Z2 with speed surges - Aerobic capacity development',
    detail: 'Extended Z2 base run with 10x2min surges at Z3/Z4 pace. Recovery intervals at easy Z1/Z2. Develops aerobic capacity while maintaining fat-oxidation base.',
    info: {
      zona: 'Z2+S',
      intensity: 'Aeróbico base + aceleraciones',
      rhythm: 'Z2 conversacional con explosiones',
      terrain: 'Llano/Parque/Ruta',
      focus: 'Capacidad aeróbica máxima/Potencia',
      strides: '10×2min acelerones progresivos',
      stridesRecovery: '2 min caminando/Z1',
      stridesIntensity: '~85-90% esfuerzo máximo',
      stridesTotalTime: '~28 min totales (20 min esfuerzo + 8 min recuperación)',
      howToFeel: 'Base cómoda, aceleraciones controladas pero intensas. Recuperación a ritmo conversacional.',
      stridesInstructions: [
        'Primer acelerón 70% esfuerzo',
        'Progresión: 75%, 80%, 85%, 87%, 88%, 89%, 90%, 90%, 90%, 90%',
        'Zancada larga, relajada pero dinámica',
        'Brazos impulsores pero sin tensión',
        'Recuperación a ritmo Z2 completo',
        'Respiración profunda en recuperación'
      ]
    },
    terrain: 'Road/park',
    intensity: 'Z2 base with Z3/Z4 surges',
    recoveryNote: 'Active recovery between surges'
  },
  {
    index: 34,
    day: 'Saturday',
    date: '19/07',
    fullDate: '2026-07-19',
    type: 'TL+H',
    cat: 'Trail Running',
    duration: 110,
    zone: 'Z2',
    alert: false,
    description: 'Long trail run - Peak aerobic endurance and hill adaptation',
    detail: 'Extended trail running session with significant elevation gain. Peak aerobic endurance work with mental toughness and hill running efficiency focus. Maintain steady state on varied terrain.',
    info: {
      type: 'Tirada larga con subidas Z1-Z2 - PICO',
      zona: 'Z2',
      terrain: 'Sendero mixto con subidas sostenidas',
      elevation: '450m desnivel positivo',
      focus: 'Resistencia pico/Técnica/Descensos/Mentalidad/Potencia',
      climbs: '8×20s en rampas 8-12%',
      climbsIntensity: 'Fuerte, ~Z4 (85-90% esfuerzo)',
      climbsRecovery: 'Bajar caminando o Z1 suave',
      totalClimbTime: '~25 min totales (14 min subida + 11 min bajada/recuperación)',
      estimatedPace: '5:20-5:50 min/km (tirada base)',
      howToFeel: 'Base cómoda pero desafiante en volumen. Subidas duras pero recuperables. Mentalidad muy fuerte requerida en último tercio.',
      climbInstructions: [
        'Atacar subidas con intención',
        'Zancada más corta en pendiente fuerte',
        'Inclinarse hacia pendiente',
        'Mantener ritmo respiratorio fuerte pero controlado',
        'Recuperación completa antes de siguiente subida',
        'Bajadas técnicas - no descender demasiado rápido',
        'Mantener foco mental en segundo 50%'
      ],
      totalDuration: '~160 min totales (110 min carrera + subidas integradas)'
    },
    elevationGain: 450,
    terrain: 'Mixed trail with sustained climbs',
    techniqueFocus: 'Hill climbing efficiency, descent control, pacing strategy'
  },

  // WEEK 6 - Semana 6 (Jul 20-26) - MF1.3 Phase continues
  {
    index: 35,
    day: 'Sunday',
    date: '20/07',
    fullDate: '2026-07-20',
    type: 'GYM',
    cat: 'Strength',
    duration: 65,
    zone: null,
    alert: false,
    description: 'MF1.3 - Blocks A+C+E: Advanced upper body and core',
    detail: 'Blocks A, C, and E training session (65 min). Advanced upper body strength with compound focus and core stability work.',
    info: {
      type: 'Entrenamiento de fuerza MF1.3',
      focus: 'Tren superior avanzado + Core',
      intensity: 'Muy alta',
      tempo: 'Explosivo 2-0-3',
      restPeriod: '2-3 min entre series',
      purpose: 'Fuerza máxima y potencia',
      howToFeel: 'Muy desafiante. Peso pesado pero controlado. Explosividad con estabilidad.',
      techniqueTips: [
        'Movimiento explosivo en concéntrica',
        'Control en excéntrica',
        'Máxima activación muscular',
        'Rango completo de movimiento',
        'Nunca comprometer forma por peso'
      ]
    },
    blocksVariants: {
      'con-equipamiento': {
        blocks: {
          A: [
            ['Pin Press', 4, '5-7'],
            ['Board Press', 4, '6-8'],
            ['Cable Flyes', 3, '10-12']
          ],
          C: [
            ['Front Squats', 4, '6-8'],
            ['Hack Squats', 3, '8-10'],
            ['Leg Curls', 3, '10-12']
          ],
          E: [
            ['Ab Wheel Rollouts', 3, '8-12'],
            ['Hanging Leg Raises', 3, '10-12'],
            ['Pallof Press', 3, '10 each side']
          ]
        }
      },
      'peso-libre': {
        blocks: {
          A: [
            ['Pseudo Planche Push-ups', 4, '5-8'],
            ['Archer Push-ups', 3, '6-10'],
            ['Resistance Band Push-ups', 3, '12-15']
          ],
          C: [
            ['Pistol Squat Progressions', 4, '6-10'],
            ['Jump Lunges', 3, '10-12 each'],
            ['Cossack Squats', 3, '10 each']
          ],
          E: [
            ['Leg Raises', 3, '12-15'],
            ['Dragon Flags', 3, '5-8'],
            ['Spinal Rotations', 3, '10 each']
          ]
        }
      }
    }
  },
  {
    index: 36,
    day: 'Monday',
    date: '21/07',
    fullDate: '2026-07-21',
    type: 'Z2',
    cat: 'Endurance',
    duration: 60,
    zone: 'Z2',
    alert: false,
    description: 'Easy running Z2 - Base building aerobic session',
    detail: 'Moderate intensity steady-state running in Zone 2. Conversational pace on mixed terrain. Focus on aerobic base development and recovery mechanics.',
    info: {
      zona: 'Z2',
      intensity: 'Muy fácil a moderado',
      rhythm: 'Conversación fluida',
      terrain: 'Llano/Variado',
      focus: 'Base aeróbica/Recuperación activa',
      howToFeel: 'Deberías poder hablar en frases completas. Respiración controlada y cómoda.',
      techniqueTips: [
        'Respiración nasal preferida',
        'Postura erguida',
        'Cadencia natural 160-170 pasos/min',
        'Relajación en hombros y mandíbula',
        'Enfoque en ecosistema muscular'
      ]
    },
    terrain: 'Mixed (road/trail)',
    intensity: 'Easy aerobic',
    recoveryNote: 'Maintain steady breathing, focus on form'
  },
  {
    index: 37,
    day: 'Tuesday',
    date: '22/07',
    fullDate: '2026-07-22',
    type: 'GYM',
    cat: 'Strength',
    duration: 65,
    zone: null,
    alert: false,
    description: 'MF1.3 - Blocks B+C+D: Back focus with lower body integration',
    detail: 'Blocks B, C, and D training session (65 min). Advanced back strength with integrated lower body compound movements.',
    info: {
      type: 'Entrenamiento de fuerza MF1.3',
      focus: 'Espalda + Tren inferior',
      intensity: 'Muy alta',
      tempo: 'Explosivo 2-0-3',
      restPeriod: '2-3 min entre series',
      purpose: 'Fuerza máxima y potencia en tracción y extensión',
      howToFeel: 'Muy desafiante. Mucho peso. Movimientos explosivos pero controlados.',
      techniqueTips: [
        'Tracción explosiva desde caderas',
        'Escápulas hacia atrás y abajo',
        'Cadera neutral en toda la extensión',
        'Profundidad en squats',
        'Control en bajadas'
      ]
    },
    blocksVariants: {
      'con-equipamiento': {
        blocks: {
          B: [
            ['Weighted Chin-ups', 4, '5-7'],
            ['Seal Rows', 4, '6-8'],
            ['Face Pulls', 3, '12-15']
          ],
          C: [
            ['Back Squats', 4, '5-7'],
            ['Paused Squats', 3, '6-8']
          ],
          D: [
            ['Deadlifts', 3, '3-5'],
            ['Deficit Deadlifts', 3, '5-7']
          ]
        }
      },
      'peso-libre': {
        blocks: {
          B: [
            ['Weighted Pull-ups', 4, '5-8'],
            ['Explosive Pull-ups', 3, '5-7'],
            ['Resistance Band Rows', 3, '12-15']
          ],
          C: [
            ['Pistol Squat Progressions', 4, '6-8'],
            ['Jump Squats', 3, '8-10']
          ],
          D: [
            ['Single-leg Deadlifts', 3, '8-10'],
            ['Bulgarian Split Squats', 3, '8-10 each']
          ]
        }
      }
    }
  },
  {
    index: 38,
    day: 'Wednesday',
    date: '23/07',
    fullDate: '2026-07-23',
    type: 'REC(E)',
    cat: 'Recovery',
    duration: 50,
    zone: null,
    alert: false,
    description: 'Extended recovery and mobility - Active restoration day',
    detail: 'Extended mobility and recovery session focusing on movement quality. Comprehensive stretching and soft tissue work.',
    info: {
      type: 'Recuperación activa extendida',
      focus: 'Movilidad profunda/Regeneración/Restauración',
      duration: '50 min',
      purpose: 'Acelerar recuperación y mejorar rango de movimiento significativamente',
      howToFeel: 'Profundamente relajado. Mayor soltura. Sin tensiones.',
      blockE: [
        'Full Body Foam Rolling',
        'Couch Stretch',
        'Frog Stretch',
        'Lizard Pose',
        'Quad Stretches',
        'Hamstring Stretches',
        'Cross-body Shoulder Stretch',
        'Deep Hip Stretches'
      ],
      instructions: [
        'Respiración profunda durante todo',
        'Sin forzar movimientos',
        'Mantén cada estiramiento 60-90 seg',
        'Foam roll lentamente y profundamente',
        'Movimientos fluidos sin rebotes',
        'Enfoque en áreas tensas'
      ]
    },
    blocks: {
      E: [
        ['Full Body Foam Rolling', 1, '8 min'],
        ['Couch Stretch', 3, '90 sec each'],
        ['Frog Stretch', 3, '90 sec'],
        ['Lizard Pose', 3, '60 sec each'],
        ['Quad Stretches', 3, '45 sec each'],
        ['Hamstring Stretches', 3, '60 sec each'],
        ['Cross-body Shoulder Stretch', 2, '45 sec each']
      ]
    }
  },
  {
    index: 39,
    day: 'Thursday',
    date: '24/07',
    fullDate: '2026-07-24',
    type: 'TL',
    cat: 'Trail Running',
    duration: 80,
    zone: 'Z2',
    alert: false,
    description: 'Trail running Z2 - Technical terrain adaptation',
    detail: 'Technical trail running in Zone 2 with elevation. Focus on footwork, balance, and sustained effort on uneven terrain. Build confidence on technical sections.',
    info: {
      type: 'Tirada larga Z1-Z2',
      zona: 'Z2',
      terrain: 'Sendero técnico rocoso/raíces',
      elevation: '250m desnivel positivo',
      focus: 'Técnica/Balance/Confianza en terreno',
      estimatedPace: '5:30-6:00 min/km',
      howToFeel: 'Controlado. Capaz de mantener ritmo en técnico. Muy confortable en descensos.',
      techniqueTips: [
        'Postura hacia adelante en pendientes',
        'Zancada corta en técnico',
        'Ojos en siguiente paso, no al suelo',
        'Brazos relajados para balance',
        'Flexión de rodillas para amortiguación',
        'Control en bajadas - pequeños pasos'
      ]
    },
    elevationGain: 250,
    terrain: 'Rocky/rooted technical trail',
    techniqueFocus: 'Foot placement, balance, line selection'
  },
  {
    index: 40,
    day: 'Friday',
    date: '25/07',
    fullDate: '2026-07-25',
    type: 'Z2+S',
    cat: 'Endurance',
    duration: 80,
    zone: 'Z2+Surges',
    alert: false,
    description: 'Z2 with speed surges - Aerobic capacity development',
    detail: 'Extended Z2 base run with 10x2min surges at Z3/Z4 pace. Recovery intervals at easy Z1/Z2. Develops aerobic capacity while maintaining fat-oxidation base.',
    info: {
      zona: 'Z2+S',
      intensity: 'Aeróbico base + aceleraciones',
      rhythm: 'Z2 conversacional con explosiones',
      terrain: 'Llano/Parque/Ruta',
      focus: 'Capacidad aeróbica máxima/Potencia',
      strides: '10×2min acelerones progresivos',
      stridesRecovery: '2 min caminando/Z1',
      stridesIntensity: '~85-90% esfuerzo máximo',
      stridesTotalTime: '~28 min totales (20 min esfuerzo + 8 min recuperación)',
      howToFeel: 'Base cómoda, aceleraciones controladas pero intensas. Recuperación a ritmo conversacional.',
      stridesInstructions: [
        'Primer acelerón 70% esfuerzo',
        'Progresión: 75%, 80%, 85%, 87%, 88%, 89%, 90%, 90%, 90%, 90%',
        'Zancada larga, relajada pero dinámica',
        'Brazos impulsores pero sin tensión',
        'Recuperación a ritmo Z2 completo',
        'Respiración profunda en recuperación'
      ]
    },
    terrain: 'Road/park',
    intensity: 'Z2 base with Z3/Z4 surges',
    recoveryNote: 'Active recovery between surges'
  },
  {
    index: 41,
    day: 'Saturday',
    date: '26/07',
    fullDate: '2026-07-26',
    type: 'TL+H',
    cat: 'Trail Running',
    duration: 110,
    zone: 'Z2',
    alert: false,
    description: 'Long trail run - Peak aerobic endurance and hill adaptation',
    detail: 'Extended trail running session with significant elevation gain. Peak aerobic endurance work with mental toughness and hill running efficiency focus. Maintain steady state on varied terrain.',
    info: {
      type: 'Tirada larga con subidas Z1-Z2 - PICO',
      zona: 'Z2',
      terrain: 'Sendero mixto con subidas sostenidas',
      elevation: '450m desnivel positivo',
      focus: 'Resistencia pico/Técnica/Descensos/Mentalidad/Potencia',
      climbs: '8×20s en rampas 8-12%',
      climbsIntensity: 'Fuerte, ~Z4 (85-90% esfuerzo)',
      climbsRecovery: 'Bajar caminando o Z1 suave',
      totalClimbTime: '~25 min totales (14 min subida + 11 min bajada/recuperación)',
      estimatedPace: '5:20-5:50 min/km (tirada base)',
      howToFeel: 'Base cómoda pero desafiante en volumen. Subidas duras pero recuperables. Mentalidad muy fuerte requerida en último tercio.',
      climbInstructions: [
        'Atacar subidas con intención',
        'Zancada más corta en pendiente fuerte',
        'Inclinarse hacia pendiente',
        'Mantener ritmo respiratorio fuerte pero controlado',
        'Recuperación completa antes de siguiente subida',
        'Bajadas técnicas - no descender demasiado rápido',
        'Mantener foco mental en segundo 50%'
      ],
      totalDuration: '~160 min totales (110 min carrera + subidas integradas)'
    },
    elevationGain: 450,
    terrain: 'Mixed trail with sustained climbs',
    techniqueFocus: 'Hill climbing efficiency, descent control, pacing strategy'
  },

  // WEEK 7 - Semana 7 (Jul 27 - Aug 2) - Deload/Consolidation
  {
    index: 42,
    day: 'Sunday',
    date: '27/07',
    fullDate: '2026-07-27',
    type: 'GYM',
    cat: 'Strength',
    duration: 50,
    zone: null,
    alert: false,
    description: 'MF1.1 Recovery - Blocks A+B: Light upper body focus',
    detail: 'Blocks A and B training session (50 min). Light recovery-focused upper body with focus on movement quality and form.',
    info: {
      type: 'Entrenamiento de fuerza - Deload',
      focus: 'Tren superior ligero',
      intensity: 'Baja-Moderada',
      tempo: 'Controlado 3-1-2',
      restPeriod: '90 seg entre series',
      purpose: 'Recuperación y consolidación de técnica',
      howToFeel: 'Ligero y fresco. Nunca fatigado. Enfoque en movimiento perfecto.',
      techniqueTips: [
        'Peso 60-70% habitual',
        'Movimiento perfecto en cada rep',
        'Recuperación completa entre series',
        'Disfruta del movimiento',
        'Conecta con el músculo'
      ]
    },
    blocksVariants: {
      'con-equipamiento': {
        blocks: {
          A: [
            ['Bench Press', 3, '8-10'],
            ['Incline DB Press', 3, '10-12']
          ],
          B: [
            ['Bent Over Barbell Row', 3, '8-10'],
            ['Seal Rows', 3, '10-12']
          ]
        }
      },
      'peso-libre': {
        blocks: {
          A: [
            ['Push-ups', 3, '12-15'],
            ['Dips', 3, '10-12']
          ],
          B: [
            ['Chin-ups', 3, '8-10'],
            ['Inverted Rows', 3, '12-15']
          ]
        }
      }
    }
  },
  {
    index: 43,
    day: 'Monday',
    date: '28/07',
    fullDate: '2026-07-28',
    type: 'Z1',
    cat: 'Endurance',
    duration: 45,
    zone: 'Z1',
    alert: false,
    description: 'Very easy Z1 - Active recovery run',
    detail: 'Very easy, conversational pace recovery run. Focus on movement and enjoyment. Minimal intensity.',
    info: {
      zona: 'Z1',
      intensity: 'Muy fácil',
      rhythm: 'Conversación normal sin esfuerzo',
      terrain: 'Plano preferido',
      focus: 'Recuperación/Observación/Técnica',
      howToFeel: 'Deberías poder cantar. Sin fatiga muscular. Ritmo cómodo y natural.',
      techniqueTips: [
        'Respiración nasal completamente',
        'Postura relajada',
        'Cadencia natural sin fuerza',
        'Disfruta del entorno',
        'Sin reloj mental de velocidad'
      ]
    },
    terrain: 'Flat road/park',
    intensity: 'Very easy recovery',
    recoveryNote: 'Focus on easy pace and recovery'
  },
  {
    index: 44,
    day: 'Tuesday',
    date: '29/07',
    fullDate: '2026-07-29',
    type: 'GYM',
    cat: 'Strength',
    duration: 50,
    zone: null,
    alert: false,
    description: 'MF1.1 Recovery - Blocks C+D: Light lower body focus',
    detail: 'Blocks C and D training session (50 min). Light recovery-focused lower body with focus on movement quality and form.',
    info: {
      type: 'Entrenamiento de fuerza - Deload',
      focus: 'Tren inferior ligero',
      intensity: 'Baja-Moderada',
      tempo: 'Controlado 2-1-3',
      restPeriod: '90 seg entre series',
      purpose: 'Recuperación y consolidación de técnica',
      howToFeel: 'Ligero y fresco. Nunca fatigado. Enfoque en movimiento perfecto.',
      techniqueTips: [
        'Peso 60-70% habitual',
        'Movimiento perfecto en cada rep',
        'Recuperación completa entre series',
        'Disfruta del movimiento',
        'Conecta con el músculo'
      ]
    },
    blocksVariants: {
      'con-equipamiento': {
        blocks: {
          C: [
            ['Back Squats', 3, '8-10'],
            ['Leg Press', 3, '10-12']
          ],
          D: [
            ['Deadlifts', 2, '6-8'],
            ['Romanian Deadlifts', 2, '10-12']
          ]
        }
      },
      'peso-libre': {
        blocks: {
          C: [
            ['Pistol Squats', 2, '6-8'],
            ['Bulgarian Split Squats', 3, '10-12']
          ],
          D: [
            ['Single-leg Deadlifts', 2, '10-12'],
            ['Jump Squats', 2, '10-12']
          ]
        }
      }
    }
  },
  {
    index: 45,
    day: 'Wednesday',
    date: '30/07',
    fullDate: '2026-07-30',
    type: 'DESC',
    cat: 'Rest',
    duration: 0,
    zone: null,
    alert: false,
    description: 'Complete rest day',
    detail: 'Full rest day. No structured activity. Focus on recovery, nutrition, and sleep.',
    info: {
      type: 'Descanso total',
      instructions: 'Reposo completo. Evaluación de cómo te sientes.',
      recovery: 'Dormir bien (8+ horas), comer bien, hidratarse adecuadamente',
      mentalRecovery: 'Reflexión: ¿cómo te has sentido esta semana? ¿Qué está funcionando?',
      howToFeel: 'Descansado, recuperado, listo para siguiente fase'
    }
  },
  {
    index: 46,
    day: 'Thursday',
    date: '31/07',
    fullDate: '2026-07-31',
    type: 'TL',
    cat: 'Trail Running',
    duration: 60,
    zone: 'Z2',
    alert: false,
    description: 'Easy trail running Z2 - Light recovery trail',
    detail: 'Easy trail running in Zone 2. Focus on enjoyment and movement quality on terrain.',
    info: {
      type: 'Tirada fácil Z1-Z2',
      zona: 'Z2',
      terrain: 'Sendero técnico pero fácil',
      elevation: '100m desnivel positivo mínimo',
      focus: 'Técnica ligera/Disfrute/Recuperación',
      estimatedPace: '6:00-6:30 min/km',
      howToFeel: 'Muy fácil. Capaz de hablar en frases completas. Disfrute del sendero.',
      techniqueTips: [
        'Zancada relajada',
        'Sin presión de velocidad',
        'Observa la técnica',
        'Disfruta del entorno',
        'Movimiento fluido'
      ]
    },
    elevationGain: 100,
    terrain: 'Easy technical trail',
    techniqueFocus: 'Movement quality, enjoyment'
  },
  {
    index: 47,
    day: 'Friday',
    date: '01/08',
    fullDate: '2026-08-01',
    type: 'Z1',
    cat: 'Endurance',
    duration: 40,
    zone: 'Z1',
    alert: false,
    description: 'Very easy Z1 - Active recovery run',
    detail: 'Very easy, conversational pace recovery run. Focus on movement and enjoyment. Minimal intensity.',
    info: {
      zona: 'Z1',
      intensity: 'Muy fácil',
      rhythm: 'Conversación normal sin esfuerzo',
      terrain: 'Plano preferido',
      focus: 'Recuperación/Observación/Técnica',
      howToFeel: 'Deberías poder cantar. Sin fatiga muscular. Ritmo cómodo y natural.',
      techniqueTips: [
        'Respiración nasal completamente',
        'Postura relajada',
        'Cadencia natural sin fuerza',
        'Disfruta del entorno',
        'Sin reloj mental de velocidad'
      ]
    },
    terrain: 'Flat road/park',
    intensity: 'Very easy recovery',
    recoveryNote: 'Focus on easy pace and recovery'
  },
  {
    index: 48,
    day: 'Saturday',
    date: '02/08',
    fullDate: '2026-08-02',
    type: 'TL',
    cat: 'Trail Running',
    duration: 75,
    zone: 'Z2',
    alert: false,
    description: 'Trail running Z2 - Consolidation session',
    detail: 'Moderate trail running in Zone 2 with elevation. Consolidation of techniques and base building.',
    info: {
      type: 'Tirada media Z1-Z2',
      zona: 'Z2',
      terrain: 'Sendero mixto',
      elevation: '180m desnivel positivo',
      focus: 'Consolidación técnica/Base/Disfrute',
      estimatedPace: '5:40-6:10 min/km',
      howToFeel: 'Cómodo. Capaz de mantener conversación. En control del terreno.',
      techniqueTips: [
        'Zancada eficiente',
        'Balance natural',
        'Adaptación al terreno',
        'Ritmo sostenible',
        'Confianza en movimientos'
      ]
    },
    elevationGain: 180,
    terrain: 'Mixed trail',
    techniqueFocus: 'Technical consolidation'
  },

  // WEEK 8 - Final Week (Aug 3-4)
  {
    index: 49,
    day: 'Sunday',
    date: '03/08',
    fullDate: '2026-08-03',
    type: 'GYM',
    cat: 'Strength',
    duration: 55,
    zone: null,
    alert: false,
    description: 'MF1.1 Recovery - Blocks A+B+C: Full upper and light lower',
    detail: 'Blocks A, B, and C training session (55 min). Light recovery-focused strength work.',
    info: {
      type: 'Entrenamiento de fuerza - Consolidación',
      focus: 'Tren superior e inferior ligero',
      intensity: 'Baja-Moderada',
      tempo: 'Controlado 3-1-2',
      restPeriod: '90 seg entre series',
      purpose: 'Consolidación y preparación para siguiente bloque',
      howToFeel: 'Ligero y fresco. Controlado. Conexión con movimiento.',
      techniqueTips: [
        'Peso 60-70% habitual',
        'Movimiento perfecto',
        'Recuperación completa entre series',
        'Disfruta del entrenamiento',
        'Evaluación de progreso'
      ]
    },
    blocksVariants: {
      'con-equipamiento': {
        blocks: {
          A: [
            ['Bench Press', 3, '8-10'],
            ['DB Press', 3, '10-12']
          ],
          B: [
            ['Pull-ups', 3, '8-10'],
            ['Rows', 3, '10-12']
          ],
          C: [
            ['Goblet Squats', 3, '10-12'],
            ['Leg Extensions', 2, '12-15']
          ]
        }
      },
      'peso-libre': {
        blocks: {
          A: [
            ['Push-ups', 3, '12-15'],
            ['Dips', 3, '10-12']
          ],
          B: [
            ['Chin-ups', 3, '8-10'],
            ['Inverted Rows', 3, '12-15']
          ],
          C: [
            ['Jump Squats', 3, '10-12'],
            ['Wall Sit', 2, '45 sec']
          ]
        }
      }
    }
  },
  {
    index: 50,
    day: 'Monday',
    date: '04/08',
    fullDate: '2026-08-04',
    type: 'Z1',
    cat: 'Endurance',
    duration: 45,
    zone: 'Z1',
    alert: false,
    description: 'Very easy Z1 - Final recovery run',
    detail: 'Very easy, conversational pace recovery run. Focus on movement and enjoyment. Minimal intensity. Final session of cycle.',
    info: {
      zona: 'Z1',
      intensity: 'Muy fácil',
      rhythm: 'Conversación normal sin esfuerzo',
      terrain: 'Plano preferido',
      focus: 'Recuperación/Observación/Cierre de ciclo',
      howToFeel: 'Deberías poder cantar. Sin fatiga muscular. Ritmo cómodo. Reflexión sobre progreso.',
      techniqueTips: [
        'Respiración nasal completamente',
        'Postura relajada',
        'Cadencia natural sin fuerza',
        'Reflexiona sobre el ciclo',
        'Celebra el progreso'
      ]
    },
    terrain: 'Flat road/park',
    intensity: 'Very easy recovery',
    recoveryNote: 'Final session - reflect on 8 weeks of training'
  }
];

export default SESSIONS;
