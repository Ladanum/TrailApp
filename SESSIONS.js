const SESSIONS = [
  // WEEK 1
  {
    index: 0,
    day: 'LUN',
    date: '15 Jun',
    fullDate: 'Lunes, 15 Jun 2026',
    type: 'RUN',
    cat: 'Z1',
    description: 'Rodaje suave llano',
    duration: 45,
    zone: 'Z1',
    alert: null,
    detail: 'Carrera suave en zona 1, ritmo conversacional en terreno llano para base aeróbica',
    blocks: null
  },
  {
    index: 1,
    day: 'MAR',
    date: '16 Jun',
    fullDate: 'Martes, 16 Jun 2026',
    type: 'GYM',
    cat: 'A+B',
    description: 'Bloque A + Bloque B',
    duration: 50,
    zone: 'GYM',
    alert: null,
    detail: 'Trabajo de tobillo (Bloque A) y core (Bloque B)',
    blocksVariants: [
      {
        name: 'con-equipamiento',
        blocks: [
          {
            id: 'A',
            name: 'Tobillo',
            exercises: [
              ['Elevación talón unipodal', '3', '15/pierna'],
              ['Balance unipodal', '3', '30s/pierna'],
              ['Monster walk', '3', '15 pasos/dir'],
              ['Dorsiflexión c/banda', '3', '15'],
              ['Tibialis raise', '3', '15'],
              ['Single-leg calf raise', '3', '8/pierna']
            ]
          },
          {
            id: 'B',
            name: 'Core',
            exercises: [
              ['Plancha frontal', '3', '45s'],
              ['Plancha lateral', '3', '30s/lado'],
              ['Dead bug', '3', '8/lado'],
              ['Bird dog', '3', '8/lado'],
              ['Hollow body', '3', '20s']
            ]
          }
        ]
      },
      {
        name: 'peso-libre',
        blocks: [
          {
            id: 'A',
            name: 'Tobillo',
            exercises: [
              ['Elevación talón unipodal', '3', '15/pierna'],
              ['Balance unipodal', '3', '30s/pierna'],
              ['Monster walk', '3', '15 pasos/dir'],
              ['Dorsiflexión sin banda', '3', '15'],
              ['Tibialis raise', '3', '15'],
              ['Single-leg calf raise', '3', '8/pierna']
            ]
          },
          {
            id: 'B',
            name: 'Core',
            exercises: [
              ['Plancha frontal', '3', '45s'],
              ['Plancha lateral', '3', '30s/lado'],
              ['Dead bug', '3', '8/lado'],
              ['Bird dog', '3', '8/lado'],
              ['Hollow body hold', '3', '20s']
            ]
          }
        ]
      }
    ]
  },
  {
    index: 2,
    day: 'MIÉ',
    date: '17 Jun',
    fullDate: 'Miércoles, 17 Jun 2026',
    type: 'RUN',
    cat: 'Z2',
    description: 'Rodaje aeróbico base llano',
    duration: 60,
    zone: 'Z2',
    alert: null,
    detail: 'Carrera base en zona 2, mantener ritmo aeróbico sostenible en terreno llano',
    blocks: null
  },
  {
    index: 3,
    day: 'JUE',
    date: '18 Jun',
    fullDate: 'Jueves, 18 Jun 2026',
    type: 'REC',
    cat: 'E',
    description: 'Bloque E movilidad',
    duration: 25,
    zone: 'REC',
    alert: null,
    detail: 'Sesión de recuperación y movilidad para mejorar rango de movimiento y flexibilidad',
    blocks: null
  },
  {
    index: 4,
    day: 'VIE',
    date: '19 Jun',
    fullDate: 'Viernes, 19 Jun 2026',
    type: 'RUN',
    cat: 'Z2',
    description: 'Rodaje base llano',
    duration: 55,
    zone: 'Z2',
    alert: null,
    detail: 'Carrera base en zona 2 para consolidar capacidad aeróbica',
    blocks: null
  },
  {
    index: 5,
    day: 'SÁB',
    date: '20 Jun',
    fullDate: 'Sábado, 20 Jun 2026',
    type: 'GYM',
    cat: 'C+D',
    description: 'Bloque C + Bloque D',
    duration: 55,
    zone: 'GYM',
    alert: null,
    detail: 'Trabajo de tren inferior (Bloque C) y cadena posterior (Bloque D)',
    blocksVariants: [
      {
        name: 'con-equipamiento',
        blocks: [
          {
            id: 'C',
            name: 'Tren Inferior',
            exercises: [
              ['Bulgarian split squat', '3', '8/pierna'],
              ['Step-up c/banco', '3', '10/pierna'],
              ['Glute bridge unipodal', '3', '10/pierna'],
              ['Sentadilla pistol asistida', '3', '5/pierna'],
              ['Sentadilla goblet', '3', '12'],
              ['Step-down c/banco', '3', '8/pierna']
            ]
          },
          {
            id: 'D',
            name: 'Cadena Posterior',
            exercises: [
              ['Nordic curl c/band', '3', '6'],
              ['Good morning c/barra', '3', '12'],
              ['Single-leg deadlift', '3', '10/pierna'],
              ['Glute bridge isométrico', '3', '30s/pierna'],
              ['Superman hold', '3', '25s']
            ]
          }
        ]
      },
      {
        name: 'peso-libre',
        blocks: [
          {
            id: 'C',
            name: 'Tren Inferior',
            exercises: [
              ['Bulgarian split squat', '3', '8/pierna'],
              ['Step-up', '3', '10/pierna'],
              ['Glute bridge unipodal', '3', '10/pierna'],
              ['Sentadilla pistol asistida', '3', '5/pierna'],
              ['Sentadilla goblet', '3', '12'],
              ['Step-down', '3', '8/pierna']
            ]
          },
          {
            id: 'D',
            name: 'Cadena Posterior',
            exercises: [
              ['Nordic curl', '3', '6'],
              ['Good morning', '3', '12'],
              ['Single-leg deadlift', '3', '10/pierna'],
              ['Glute bridge isométrico', '3', '30s/pierna'],
              ['Superman hold', '3', '25s']
            ]
          }
        ]
      }
    ]
  },
  {
    index: 6,
    day: 'DOM',
    date: '21 Jun',
    fullDate: 'Domingo, 21 Jun 2026',
    type: 'TL',
    cat: 'Z1',
    description: 'Trail suave',
    duration: 75,
    zone: 'Z1',
    alert: null,
    detail: 'Carrera en trail en zona 1, terreno técnico con ritmo controlado y enfoque en técnica',
    blocks: null
  },
  // WEEK 2
  {
    index: 7,
    day: 'LUN',
    date: '22 Jun',
    fullDate: 'Lunes, 22 Jun 2026',
    type: 'REC',
    cat: 'E',
    description: 'Bloque E movilidad',
    duration: 25,
    zone: 'REC',
    alert: null,
    detail: 'Sesión de movilidad: apertura cadera, flexores, isquiotibiales, tobillos y estiramiento',
    blocks: null
  },
  {
    index: 8,
    day: 'MAR',
    date: '23 Jun',
    fullDate: 'Martes, 23 Jun 2026',
    type: 'RUN',
    cat: 'Z2',
    description: 'Rodaje base',
    duration: 60,
    zone: 'Z2',
    alert: null,
    detail: 'Carrera base en zona 2, mantener consistencia aeróbica',
    blocks: null
  },
  {
    index: 9,
    day: 'MIÉ',
    date: '24 Jun',
    fullDate: 'Miércoles, 24 Jun 2026',
    type: 'GYM',
    cat: 'A+B',
    description: 'Bloque A + Bloque B',
    duration: 50,
    zone: 'GYM',
    alert: null,
    detail: 'Trabajo de tobillo (Bloque A) y core (Bloque B)',
    blocksVariants: [
      {
        name: 'con-equipamiento',
        blocks: [
          {
            id: 'A',
            name: 'Tobillo',
            exercises: [
              ['Elevación talón unipodal', '3', '15/pierna'],
              ['Balance unipodal', '3', '30s/pierna'],
              ['Monster walk', '3', '15 pasos/dir'],
              ['Dorsiflexión c/banda', '3', '15'],
              ['Tibialis raise', '3', '15'],
              ['Single-leg calf raise', '3', '8/pierna']
            ]
          },
          {
            id: 'B',
            name: 'Core',
            exercises: [
              ['Plancha frontal', '3', '45s'],
              ['Plancha lateral', '3', '30s/lado'],
              ['Dead bug', '3', '8/lado'],
              ['Bird dog', '3', '8/lado'],
              ['Hollow body', '3', '20s']
            ]
          }
        ]
      },
      {
        name: 'peso-libre',
        blocks: [
          {
            id: 'A',
            name: 'Tobillo',
            exercises: [
              ['Elevación talón unipodal', '3', '15/pierna'],
              ['Balance unipodal', '3', '30s/pierna'],
              ['Monster walk', '3', '15 pasos/dir'],
              ['Dorsiflexión sin banda', '3', '15'],
              ['Tibialis raise', '3', '15'],
              ['Single-leg calf raise', '3', '8/pierna']
            ]
          },
          {
            id: 'B',
            name: 'Core',
            exercises: [
              ['Plancha frontal', '3', '45s'],
              ['Plancha lateral', '3', '30s/lado'],
              ['Dead bug', '3', '8/lado'],
              ['Bird dog', '3', '8/lado'],
              ['Hollow body hold', '3', '20s']
            ]
          }
        ]
      }
    ]
  },
  {
    index: 10,
    day: 'JUE',
    date: '25 Jun',
    fullDate: 'Jueves, 25 Jun 2026',
    type: 'RUN',
    cat: 'Z1',
    description: 'Rodaje suave',
    duration: 55,
    zone: 'Z1',
    alert: null,
    detail: 'Carrera suave en zona 1 para recuperación activa',
    blocks: null
  },
  {
    index: 11,
    day: 'VIE',
    date: '26 Jun',
    fullDate: 'Viernes, 26 Jun 2026',
    type: 'GYM',
    cat: 'C+D',
    description: 'Bloque C + Bloque D',
    duration: 55,
    zone: 'GYM',
    alert: null,
    detail: 'Trabajo de tren inferior (Bloque C) y cadena posterior (Bloque D)',
    blocksVariants: [
      {
        name: 'con-equipamiento',
        blocks: [
          {
            id: 'C',
            name: 'Tren Inferior',
            exercises: [
              ['Bulgarian split squat', '3', '8/pierna'],
              ['Step-up c/banco', '3', '10/pierna'],
              ['Glute bridge unipodal', '3', '10/pierna'],
              ['Sentadilla pistol asistida', '3', '5/pierna'],
              ['Sentadilla goblet', '3', '12'],
              ['Step-down c/banco', '3', '8/pierna']
            ]
          },
          {
            id: 'D',
            name: 'Cadena Posterior',
            exercises: [
              ['Nordic curl c/band', '3', '6'],
              ['Good morning c/barra', '3', '12'],
              ['Single-leg deadlift', '3', '10/pierna'],
              ['Glute bridge isométrico', '3', '30s/pierna'],
              ['Superman hold', '3', '25s']
            ]
          }
        ]
      },
      {
        name: 'peso-libre',
        blocks: [
          {
            id: 'C',
            name: 'Tren Inferior',
            exercises: [
              ['Bulgarian split squat', '3', '8/pierna'],
              ['Step-up', '3', '10/pierna'],
              ['Glute bridge unipodal', '3', '10/pierna'],
              ['Sentadilla pistol asistida', '3', '5/pierna'],
              ['Sentadilla goblet', '3', '12'],
              ['Step-down', '3', '8/pierna']
            ]
          },
          {
            id: 'D',
            name: 'Cadena Posterior',
            exercises: [
              ['Nordic curl', '3', '6'],
              ['Good morning', '3', '12'],
              ['Single-leg deadlift', '3', '10/pierna'],
              ['Glute bridge isométrico', '3', '30s/pierna'],
              ['Superman hold', '3', '25s']
            ]
          }
        ]
      }
    ]
  },
  {
    index: 12,
    day: 'SÁB',
    date: '27 Jun',
    fullDate: 'Sábado, 27 Jun 2026',
    type: 'RUN',
    cat: 'Z2',
    description: 'Rodaje',
    duration: 70,
    zone: 'Z2',
    alert: null,
    detail: 'Carrera base en zona 2, sesión más larga para acumular volumen',
    blocks: null
  },
  {
    index: 13,
    day: 'DOM',
    date: '28 Jun',
    fullDate: 'Domingo, 28 Jun 2026',
    type: 'TL',
    cat: 'Z1',
    description: 'Trail',
    duration: 85,
    zone: 'Z1',
    alert: null,
    detail: 'Carrera en trail en zona 1, mayor duración para resistencia en terreno técnico',
    blocks: null
  },
  // WEEK 3
  {
    index: 14,
    day: 'LUN',
    date: '29 Jun',
    fullDate: 'Lunes, 29 Jun 2026',
    type: 'RUN',
    cat: 'Z1',
    description: 'Rodaje suave llano',
    duration: 45,
    zone: 'Z1',
    alert: null,
    detail: 'Carrera suave en zona 1 para recuperación',
    blocks: null
  },
  {
    index: 15,
    day: 'MAR',
    date: '30 Jun',
    fullDate: 'Martes, 30 Jun 2026',
    type: 'GYM',
    cat: 'A+B',
    description: 'Bloque A + Bloque B',
    duration: 50,
    zone: 'GYM',
    alert: null,
    detail: 'Trabajo de tobillo (Bloque A) y core (Bloque B)',
    blocksVariants: [
      {
        name: 'con-equipamiento',
        blocks: [
          {
            id: 'A',
            name: 'Tobillo',
            exercises: [
              ['Elevación talón unipodal', '3', '15/pierna'],
              ['Balance unipodal', '3', '30s/pierna'],
              ['Monster walk', '3', '15 pasos/dir'],
              ['Dorsiflexión c/banda', '3', '15'],
              ['Tibialis raise', '3', '15'],
              ['Single-leg calf raise', '3', '8/pierna']
            ]
          },
          {
            id: 'B',
            name: 'Core',
            exercises: [
              ['Plancha frontal', '3', '45s'],
              ['Plancha lateral', '3', '30s/lado'],
              ['Dead bug', '3', '8/lado'],
              ['Bird dog', '3', '8/lado'],
              ['Hollow body', '3', '20s']
            ]
          }
        ]
      },
      {
        name: 'peso-libre',
        blocks: [
          {
            id: 'A',
            name: 'Tobillo',
            exercises: [
              ['Elevación talón unipodal', '3', '15/pierna'],
              ['Balance unipodal', '3', '30s/pierna'],
              ['Monster walk', '3', '15 pasos/dir'],
              ['Dorsiflexión sin banda', '3', '15'],
              ['Tibialis raise', '3', '15'],
              ['Single-leg calf raise', '3', '8/pierna']
            ]
          },
          {
            id: 'B',
            name: 'Core',
            exercises: [
              ['Plancha frontal', '3', '45s'],
              ['Plancha lateral', '3', '30s/lado'],
              ['Dead bug', '3', '8/lado'],
              ['Bird dog', '3', '8/lado'],
              ['Hollow body hold', '3', '20s']
            ]
          }
        ]
      }
    ]
  },
  {
    index: 16,
    day: 'MIÉ',
    date: '1 Jul',
    fullDate: 'Miércoles, 1 Jul 2026',
    type: 'RUN',
    cat: 'Z2',
    description: 'Rodaje aeróbico base llano',
    duration: 60,
    zone: 'Z2',
    alert: null,
    detail: 'Carrera base en zona 2, mantener ritmo aeróbico sostenible',
    blocks: null
  },
  {
    index: 17,
    day: 'JUE',
    date: '2 Jul',
    fullDate: 'Jueves, 2 Jul 2026',
    type: 'REC',
    cat: 'E',
    description: 'Bloque E movilidad',
    duration: 25,
    zone: 'REC',
    alert: null,
    detail: 'Sesión de recuperación y movilidad',
    blocks: null
  },
  {
    index: 18,
    day: 'VIE',
    date: '3 Jul',
    fullDate: 'Viernes, 3 Jul 2026',
    type: 'RUN',
    cat: 'Z2',
    description: 'Rodaje base llano',
    duration: 55,
    zone: 'Z2',
    alert: null,
    detail: 'Carrera base en zona 2 para consolidar capacidad aeróbica',
    blocks: null
  },
  {
    index: 19,
    day: 'SÁB',
    date: '4 Jul',
    fullDate: 'Sábado, 4 Jul 2026',
    type: 'GYM',
    cat: 'C+D',
    description: 'Bloque C + Bloque D',
    duration: 55,
    zone: 'GYM',
    alert: null,
    detail: 'Trabajo de tren inferior (Bloque C) y cadena posterior (Bloque D)',
    blocksVariants: [
      {
        name: 'con-equipamiento',
        blocks: [
          {
            id: 'C',
            name: 'Tren Inferior',
            exercises: [
              ['Bulgarian split squat', '3', '8/pierna'],
              ['Step-up c/banco', '3', '10/pierna'],
              ['Glute bridge unipodal', '3', '10/pierna'],
              ['Sentadilla pistol asistida', '3', '5/pierna'],
              ['Sentadilla goblet', '3', '12'],
              ['Step-down c/banco', '3', '8/pierna']
            ]
          },
          {
            id: 'D',
            name: 'Cadena Posterior',
            exercises: [
              ['Nordic curl c/band', '3', '6'],
              ['Good morning c/barra', '3', '12'],
              ['Single-leg deadlift', '3', '10/pierna'],
              ['Glute bridge isométrico', '3', '30s/pierna'],
              ['Superman hold', '3', '25s']
            ]
          }
        ]
      },
      {
        name: 'peso-libre',
        blocks: [
          {
            id: 'C',
            name: 'Tren Inferior',
            exercises: [
              ['Bulgarian split squat', '3', '8/pierna'],
              ['Step-up', '3', '10/pierna'],
              ['Glute bridge unipodal', '3', '10/pierna'],
              ['Sentadilla pistol asistida', '3', '5/pierna'],
              ['Sentadilla goblet', '3', '12'],
              ['Step-down', '3', '8/pierna']
            ]
          },
          {
            id: 'D',
            name: 'Cadena Posterior',
            exercises: [
              ['Nordic curl', '3', '6'],
              ['Good morning', '3', '12'],
              ['Single-leg deadlift', '3', '10/pierna'],
              ['Glute bridge isométrico', '3', '30s/pierna'],
              ['Superman hold', '3', '25s']
            ]
          }
        ]
      }
    ]
  },
  {
    index: 20,
    day: 'DOM',
    date: '5 Jul',
    fullDate: 'Domingo, 5 Jul 2026',
    type: 'TL',
    cat: 'Z1',
    description: 'Trail suave',
    duration: 75,
    zone: 'Z1',
    alert: null,
    detail: 'Carrera en trail en zona 1, terreno técnico con ritmo controlado',
    blocks: null
  },
  // WEEK 4
  {
    index: 21,
    day: 'LUN',
    date: '6 Jul',
    fullDate: 'Lunes, 6 Jul 2026',
    type: 'REC',
    cat: 'E',
    description: 'Bloque E movilidad',
    duration: 25,
    zone: 'REC',
    alert: null,
    detail: 'Sesión de movilidad para recuperación',
    blocks: null
  },
  {
    index: 22,
    day: 'MAR',
    date: '7 Jul',
    fullDate: 'Martes, 7 Jul 2026',
    type: 'RUN',
    cat: 'Z2',
    description: 'Rodaje base',
    duration: 60,
    zone: 'Z2',
    alert: null,
    detail: 'Carrera base en zona 2',
    blocks: null
  },
  {
    index: 23,
    day: 'MIÉ',
    date: '8 Jul',
    fullDate: 'Miércoles, 8 Jul 2026',
    type: 'GYM',
    cat: 'A+B',
    description: 'Bloque A + Bloque B',
    duration: 50,
    zone: 'GYM',
    alert: null,
    detail: 'Trabajo de tobillo (Bloque A) y core (Bloque B)',
    blocksVariants: [
      {
        name: 'con-equipamiento',
        blocks: [
          {
            id: 'A',
            name: 'Tobillo',
            exercises: [
              ['Elevación talón unipodal', '3', '15/pierna'],
              ['Balance unipodal', '3', '30s/pierna'],
              ['Monster walk', '3', '15 pasos/dir'],
              ['Dorsiflexión c/banda', '3', '15'],
              ['Tibialis raise', '3', '15'],
              ['Single-leg calf raise', '3', '8/pierna']
            ]
          },
          {
            id: 'B',
            name: 'Core',
            exercises: [
              ['Plancha frontal', '3', '45s'],
              ['Plancha lateral', '3', '30s/lado'],
              ['Dead bug', '3', '8/lado'],
              ['Bird dog', '3', '8/lado'],
              ['Hollow body', '3', '20s']
            ]
          }
        ]
      },
      {
        name: 'peso-libre',
        blocks: [
          {
            id: 'A',
            name: 'Tobillo',
            exercises: [
              ['Elevación talón unipodal', '3', '15/pierna'],
              ['Balance unipodal', '3', '30s/pierna'],
              ['Monster walk', '3', '15 pasos/dir'],
              ['Dorsiflexión sin banda', '3', '15'],
              ['Tibialis raise', '3', '15'],
              ['Single-leg calf raise', '3', '8/pierna']
            ]
          },
          {
            id: 'B',
            name: 'Core',
            exercises: [
              ['Plancha frontal', '3', '45s'],
              ['Plancha lateral', '3', '30s/lado'],
              ['Dead bug', '3', '8/lado'],
              ['Bird dog', '3', '8/lado'],
              ['Hollow body hold', '3', '20s']
            ]
          }
        ]
      }
    ]
  },
  {
    index: 24,
    day: 'JUE',
    date: '9 Jul',
    fullDate: 'Jueves, 9 Jul 2026',
    type: 'RUN',
    cat: 'Z1',
    description: 'Rodaje suave',
    duration: 55,
    zone: 'Z1',
    alert: null,
    detail: 'Carrera suave en zona 1 para recuperación activa',
    blocks: null
  },
  {
    index: 25,
    day: 'VIE',
    date: '10 Jul',
    fullDate: 'Viernes, 10 Jul 2026',
    type: 'GYM',
    cat: 'C+D',
    description: 'Bloque C + Bloque D',
    duration: 55,
    zone: 'GYM',
    alert: null,
    detail: 'Trabajo de tren inferior (Bloque C) y cadena posterior (Bloque D)',
    blocksVariants: [
      {
        name: 'con-equipamiento',
        blocks: [
          {
            id: 'C',
            name: 'Tren Inferior',
            exercises: [
              ['Bulgarian split squat', '3', '8/pierna'],
              ['Step-up c/banco', '3', '10/pierna'],
              ['Glute bridge unipodal', '3', '10/pierna'],
              ['Sentadilla pistol asistida', '3', '5/pierna'],
              ['Sentadilla goblet', '3', '12'],
              ['Step-down c/banco', '3', '8/pierna']
            ]
          },
          {
            id: 'D',
            name: 'Cadena Posterior',
            exercises: [
              ['Nordic curl c/band', '3', '6'],
              ['Good morning c/barra', '3', '12'],
              ['Single-leg deadlift', '3', '10/pierna'],
              ['Glute bridge isométrico', '3', '30s/pierna'],
              ['Superman hold', '3', '25s']
            ]
          }
        ]
      },
      {
        name: 'peso-libre',
        blocks: [
          {
            id: 'C',
            name: 'Tren Inferior',
            exercises: [
              ['Bulgarian split squat', '3', '8/pierna'],
              ['Step-up', '3', '10/pierna'],
              ['Glute bridge unipodal', '3', '10/pierna'],
              ['Sentadilla pistol asistida', '3', '5/pierna'],
              ['Sentadilla goblet', '3', '12'],
              ['Step-down', '3', '8/pierna']
            ]
          },
          {
            id: 'D',
            name: 'Cadena Posterior',
            exercises: [
              ['Nordic curl', '3', '6'],
              ['Good morning', '3', '12'],
              ['Single-leg deadlift', '3', '10/pierna'],
              ['Glute bridge isométrico', '3', '30s/pierna'],
              ['Superman hold', '3', '25s']
            ]
          }
        ]
      }
    ]
  },
  {
    index: 26,
    day: 'SÁB',
    date: '11 Jul',
    fullDate: 'Sábado, 11 Jul 2026',
    type: 'RUN',
    cat: 'Z2',
    description: 'Rodaje',
    duration: 70,
    zone: 'Z2',
    alert: null,
    detail: 'Carrera base en zona 2, sesión más larga',
    blocks: null
  },
  {
    index: 27,
    day: 'DOM',
    date: '12 Jul',
    fullDate: 'Domingo, 12 Jul 2026',
    type: 'TL',
    cat: 'Z1',
    description: 'Trail',
    duration: 85,
    zone: 'Z1',
    alert: null,
    detail: 'Carrera en trail en zona 1, mayor duración',
    blocks: null
  },
  // WEEK 5
  {
    index: 28,
    day: 'LUN',
    date: '13 Jul',
    fullDate: 'Lunes, 13 Jul 2026',
    type: 'RUN',
    cat: 'Z1',
    description: 'Rodaje suave llano',
    duration: 45,
    zone: 'Z1',
    alert: null,
    detail: 'Carrera suave en zona 1',
    blocks: null
  },
  {
    index: 29,
    day: 'MAR',
    date: '14 Jul',
    fullDate: 'Martes, 14 Jul 2026',
    type: 'GYM',
    cat: 'A+B',
    description: 'Bloque A + Bloque B',
    duration: 50,
    zone: 'GYM',
    alert: null,
    detail: 'Trabajo de tobillo (Bloque A) y core (Bloque B)',
    blocksVariants: [
      {
        name: 'con-equipamiento',
        blocks: [
          {
            id: 'A',
            name: 'Tobillo',
            exercises: [
              ['Elevación talón unipodal', '3', '15/pierna'],
              ['Balance unipodal', '3', '30s/pierna'],
              ['Monster walk', '3', '15 pasos/dir'],
              ['Dorsiflexión c/banda', '3', '15'],
              ['Tibialis raise', '3', '15'],
              ['Single-leg calf raise', '3', '8/pierna']
            ]
          },
          {
            id: 'B',
            name: 'Core',
            exercises: [
              ['Plancha frontal', '3', '45s'],
              ['Plancha lateral', '3', '30s/lado'],
              ['Dead bug', '3', '8/lado'],
              ['Bird dog', '3', '8/lado'],
              ['Hollow body', '3', '20s']
            ]
          }
        ]
      },
      {
        name: 'peso-libre',
        blocks: [
          {
            id: 'A',
            name: 'Tobillo',
            exercises: [
              ['Elevación talón unipodal', '3', '15/pierna'],
              ['Balance unipodal', '3', '30s/pierna'],
              ['Monster walk', '3', '15 pasos/dir'],
              ['Dorsiflexión sin banda', '3', '15'],
              ['Tibialis raise', '3', '15'],
              ['Single-leg calf raise', '3', '8/pierna']
            ]
          },
          {
            id: 'B',
            name: 'Core',
            exercises: [
              ['Plancha frontal', '3', '45s'],
              ['Plancha lateral', '3', '30s/lado'],
              ['Dead bug', '3', '8/lado'],
              ['Bird dog', '3', '8/lado'],
              ['Hollow body hold', '3', '20s']
            ]
          }
        ]
      }
    ]
  },
  {
    index: 30,
    day: 'MIÉ',
    date: '15 Jul',
    fullDate: 'Miércoles, 15 Jul 2026',
    type: 'RUN',
    cat: 'Z2',
    description: 'Rodaje aeróbico base llano',
    duration: 60,
    zone: 'Z2',
    alert: null,
    detail: 'Carrera base en zona 2',
    blocks: null
  },
  {
    index: 31,
    day: 'JUE',
    date: '16 Jul',
    fullDate: 'Jueves, 16 Jul 2026',
    type: 'REC',
    cat: 'E',
    description: 'Bloque E movilidad',
    duration: 25,
    zone: 'REC',
    alert: null,
    detail: 'Sesión de recuperación y movilidad',
    blocks: null
  },
  {
    index: 32,
    day: 'VIE',
    date: '17 Jul',
    fullDate: 'Viernes, 17 Jul 2026',
    type: 'RUN',
    cat: 'Z2',
    description: 'Rodaje base llano',
    duration: 55,
    zone: 'Z2',
    alert: null,
    detail: 'Carrera base en zona 2',
    blocks: null
  },
  {
    index: 33,
    day: 'SÁB',
    date: '18 Jul',
    fullDate: 'Sábado, 18 Jul 2026',
    type: 'GYM',
    cat: 'C+D',
    description: 'Bloque C + Bloque D',
    duration: 55,
    zone: 'GYM',
    alert: null,
    detail: 'Trabajo de tren inferior (Bloque C) y cadena posterior (Bloque D)',
    blocksVariants: [
      {
        name: 'con-equipamiento',
        blocks: [
          {
            id: 'C',
            name: 'Tren Inferior',
            exercises: [
              ['Bulgarian split squat', '3', '8/pierna'],
              ['Step-up c/banco', '3', '10/pierna'],
              ['Glute bridge unipodal', '3', '10/pierna'],
              ['Sentadilla pistol asistida', '3', '5/pierna'],
              ['Sentadilla goblet', '3', '12'],
              ['Step-down c/banco', '3', '8/pierna']
            ]
          },
          {
            id: 'D',
            name: 'Cadena Posterior',
            exercises: [
              ['Nordic curl c/band', '3', '6'],
              ['Good morning c/barra', '3', '12'],
              ['Single-leg deadlift', '3', '10/pierna'],
              ['Glute bridge isométrico', '3', '30s/pierna'],
              ['Superman hold', '3', '25s']
            ]
          }
        ]
      },
      {
        name: 'peso-libre',
        blocks: [
          {
            id: 'C',
            name: 'Tren Inferior',
            exercises: [
              ['Bulgarian split squat', '3', '8/pierna'],
              ['Step-up', '3', '10/pierna'],
              ['Glute bridge unipodal', '3', '10/pierna'],
              ['Sentadilla pistol asistida', '3', '5/pierna'],
              ['Sentadilla goblet', '3', '12'],
              ['Step-down', '3', '8/pierna']
            ]
          },
          {
            id: 'D',
            name: 'Cadena Posterior',
            exercises: [
              ['Nordic curl', '3', '6'],
              ['Good morning', '3', '12'],
              ['Single-leg deadlift', '3', '10/pierna'],
              ['Glute bridge isométrico', '3', '30s/pierna'],
              ['Superman hold', '3', '25s']
            ]
          }
        ]
      }
    ]
  },
  {
    index: 34,
    day: 'DOM',
    date: '19 Jul',
    fullDate: 'Domingo, 19 Jul 2026',
    type: 'TL',
    cat: 'Z1',
    description: 'Trail suave',
    duration: 75,
    zone: 'Z1',
    alert: null,
    detail: 'Carrera en trail en zona 1',
    blocks: null
  },
  // WEEK 6
  {
    index: 35,
    day: 'LUN',
    date: '20 Jul',
    fullDate: 'Lunes, 20 Jul 2026',
    type: 'REC',
    cat: 'E',
    description: 'Bloque E movilidad',
    duration: 25,
    zone: 'REC',
    alert: null,
    detail: 'Sesión de movilidad',
    blocks: null
  },
  {
    index: 36,
    day: 'MAR',
    date: '21 Jul',
    fullDate: 'Martes, 21 Jul 2026',
    type: 'RUN',
    cat: 'Z2',
    description: 'Rodaje base',
    duration: 60,
    zone: 'Z2',
    alert: null,
    detail: 'Carrera base en zona 2',
    blocks: null
  },
  {
    index: 37,
    day: 'MIÉ',
    date: '22 Jul',
    fullDate: 'Miércoles, 22 Jul 2026',
    type: 'GYM',
    cat: 'A+B',
    description: 'Bloque A + Bloque B',
    duration: 50,
    zone: 'GYM',
    alert: null,
    detail: 'Trabajo de tobillo (Bloque A) y core (Bloque B)',
    blocksVariants: [
      {
        name: 'con-equipamiento',
        blocks: [
          {
            id: 'A',
            name: 'Tobillo',
            exercises: [
              ['Elevación talón unipodal', '3', '15/pierna'],
              ['Balance unipodal', '3', '30s/pierna'],
              ['Monster walk', '3', '15 pasos/dir'],
              ['Dorsiflexión c/banda', '3', '15'],
              ['Tibialis raise', '3', '15'],
              ['Single-leg calf raise', '3', '8/pierna']
            ]
          },
          {
            id: 'B',
            name: 'Core',
            exercises: [
              ['Plancha frontal', '3', '45s'],
              ['Plancha lateral', '3', '30s/lado'],
              ['Dead bug', '3', '8/lado'],
              ['Bird dog', '3', '8/lado'],
              ['Hollow body', '3', '20s']
            ]
          }
        ]
      },
      {
        name: 'peso-libre',
        blocks: [
          {
            id: 'A',
            name: 'Tobillo',
            exercises: [
              ['Elevación talón unipodal', '3', '15/pierna'],
              ['Balance unipodal', '3', '30s/pierna'],
              ['Monster walk', '3', '15 pasos/dir'],
              ['Dorsiflexión sin banda', '3', '15'],
              ['Tibialis raise', '3', '15'],
              ['Single-leg calf raise', '3', '8/pierna']
            ]
          },
          {
            id: 'B',
            name: 'Core',
            exercises: [
              ['Plancha frontal', '3', '45s'],
              ['Plancha lateral', '3', '30s/lado'],
              ['Dead bug', '3', '8/lado'],
              ['Bird dog', '3', '8/lado'],
              ['Hollow body hold', '3', '20s']
            ]
          }
        ]
      }
    ]
  },
  {
    index: 38,
    day: 'JUE',
    date: '23 Jul',
    fullDate: 'Jueves, 23 Jul 2026',
    type: 'RUN',
    cat: 'Z1',
    description: 'Rodaje suave',
    duration: 55,
    zone: 'Z1',
    alert: null,
    detail: 'Carrera suave en zona 1',
    blocks: null
  },
  {
    index: 39,
    day: 'VIE',
    date: '24 Jul',
    fullDate: 'Viernes, 24 Jul 2026',
    type: 'GYM',
    cat: 'C+D',
    description: 'Bloque C + Bloque D',
    duration: 55,
    zone: 'GYM',
    alert: null,
    detail: 'Trabajo de tren inferior (Bloque C) y cadena posterior (Bloque D)',
    blocksVariants: [
      {
        name: 'con-equipamiento',
        blocks: [
          {
            id: 'C',
            name: 'Tren Inferior',
            exercises: [
              ['Bulgarian split squat', '3', '8/pierna'],
              ['Step-up c/banco', '3', '10/pierna'],
              ['Glute bridge unipodal', '3', '10/pierna'],
              ['Sentadilla pistol asistida', '3', '5/pierna'],
              ['Sentadilla goblet', '3', '12'],
              ['Step-down c/banco', '3', '8/pierna']
            ]
          },
          {
            id: 'D',
            name: 'Cadena Posterior',
            exercises: [
              ['Nordic curl c/band', '3', '6'],
              ['Good morning c/barra', '3', '12'],
              ['Single-leg deadlift', '3', '10/pierna'],
              ['Glute bridge isométrico', '3', '30s/pierna'],
              ['Superman hold', '3', '25s']
            ]
          }
        ]
      },
      {
        name: 'peso-libre',
        blocks: [
          {
            id: 'C',
            name: 'Tren Inferior',
            exercises: [
              ['Bulgarian split squat', '3', '8/pierna'],
              ['Step-up', '3', '10/pierna'],
              ['Glute bridge unipodal', '3', '10/pierna'],
              ['Sentadilla pistol asistida', '3', '5/pierna'],
              ['Sentadilla goblet', '3', '12'],
              ['Step-down', '3', '8/pierna']
            ]
          },
          {
            id: 'D',
            name: 'Cadena Posterior',
            exercises: [
              ['Nordic curl', '3', '6'],
              ['Good morning', '3', '12'],
              ['Single-leg deadlift', '3', '10/pierna'],
              ['Glute bridge isométrico', '3', '30s/pierna'],
              ['Superman hold', '3', '25s']
            ]
          }
        ]
      }
    ]
  },
  {
    index: 40,
    day: 'SÁB',
    date: '25 Jul',
    fullDate: 'Sábado, 25 Jul 2026',
    type: 'RUN',
    cat: 'Z2',
    description: 'Rodaje',
    duration: 70,
    zone: 'Z2',
    alert: null,
    detail: 'Carrera base en zona 2',
    blocks: null
  },
  {
    index: 41,
    day: 'DOM',
    date: '26 Jul',
    fullDate: 'Domingo, 26 Jul 2026',
    type: 'TL',
    cat: 'Z1',
    description: 'Trail',
    duration: 85,
    zone: 'Z1',
    alert: null,
    detail: 'Carrera en trail en zona 1',
    blocks: null
  }
];
