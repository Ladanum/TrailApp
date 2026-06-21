/**
 * MF1 Training Program: 6-Week Sessions (June 15 - August 4, 2026)
 * Includes type, category, description, and duration for each session
 */

export interface Session {
  index: number;
  day: string; // LUN, MAR, MIÉ, JUE, VIE, SÁB, DOM
  date: string; // DD mmm format (e.g., "15 Jun")
  fullDate: string; // Día, DD mmm YYYY format (e.g., "Lunes, 15 Jun 2026")
  type: string; // Z1, Z2, Z2+S, TL, TL+H, GYM, [GYM], REC, DESC
  cat: string; // zone, gym, trail, recovery, rest
  description: string; // one-line in Spanish
  duration: number | string; // minutes or "-" for DESC (rest)
}

export const SESSIONS: Session[] = [
  // WEEK 1 (June 15-21, 2026)
  {
    index: 0,
    day: "LUN",
    date: "15 Jun",
    fullDate: "Lunes, 15 Jun 2026",
    type: "Z1",
    cat: "zone",
    description: "Rodaje suave en llano — Primera salida en observación total del tobillo. Terreno liso.",
    duration: 45,
  },
  {
    index: 1,
    day: "MAR",
    date: "16 Jun",
    fullDate: "Martes, 16 Jun 2026",
    type: "GYM(A+B)",
    cat: "gym",
    description: "Fuerza: Bloque A (Tobillo) + Bloque B (Core). Estabilidad y movilidad.",
    duration: 50,
  },
  {
    index: 2,
    day: "MIÉ",
    date: "17 Jun",
    fullDate: "Miércoles, 17 Jun 2026",
    type: "Z2",
    cat: "zone",
    description: "Rodaje aeróbico base en llano. Ritmo cómodo, conversación fluida.",
    duration: 60,
  },
  {
    index: 3,
    day: "JUE",
    date: "18 Jun",
    fullDate: "Jueves, 18 Jun 2026",
    type: "REC(E)",
    cat: "recovery",
    description: "Recuperación activa: Bloque E (movilidad y estiramientos).",
    duration: 25,
  },
  {
    index: 4,
    day: "VIE",
    date: "19 Jun",
    fullDate: "Viernes, 19 Jun 2026",
    type: "Z2",
    cat: "zone",
    description: "Rodaje aeróbico base en llano. Terreno cómodo, control del ritmo.",
    duration: 55,
  },
  {
    index: 5,
    day: "SÁB",
    date: "20 Jun",
    fullDate: "Sábado, 20 Jun 2026",
    type: "GYM(C+D)",
    cat: "gym",
    description: "Fuerza: Bloque C (Tren inferior) + Bloque D (Estabilidad rotacional).",
    duration: 55,
  },
  {
    index: 6,
    day: "DOM",
    date: "21 Jun",
    fullDate: "Domingo, 21 Jun 2026",
    type: "TL",
    cat: "trail",
    description: "Trail suave con técnica. Primera salida larga del plan.",
    duration: 75,
  },

  // WEEK 2 (June 22-28, 2026)
  {
    index: 7,
    day: "LUN",
    date: "22 Jun",
    fullDate: "Lunes, 22 Jun 2026",
    type: "REC(E)",
    cat: "recovery",
    description: "Recuperación activa: Bloque E (movilidad y regeneración).",
    duration: 25,
  },
  {
    index: 8,
    day: "MAR",
    date: "23 Jun",
    fullDate: "Martes, 23 Jun 2026",
    type: "Z2",
    cat: "zone",
    description: "Rodaje aeróbico base. Ritmo conversacional en terreno mixto.",
    duration: 60,
  },
  {
    index: 9,
    day: "MIÉ",
    date: "24 Jun",
    fullDate: "Miércoles, 24 Jun 2026",
    type: "GYM(A+B)",
    cat: "gym",
    description: "Fuerza: Bloque A (Tobillo) + Bloque B (Core). Trabajo de estabilidad.",
    duration: 50,
  },
  {
    index: 10,
    day: "JUE",
    date: "25 Jun",
    fullDate: "Jueves, 25 Jun 2026",
    type: "Z1",
    cat: "zone",
    description: "Rodaje muy suave en recuperación. Enfoque en la técnica.",
    duration: 55,
  },
  {
    index: 11,
    day: "VIE",
    date: "26 Jun",
    fullDate: "Viernes, 26 Jun 2026",
    type: "GYM(C+D)",
    cat: "gym",
    description: "Fuerza: Bloque C (Tren inferior) + Bloque D (Estabilidad rotacional).",
    duration: 55,
  },
  {
    index: 12,
    day: "SÁB",
    date: "27 Jun",
    fullDate: "Sábado, 27 Jun 2026",
    type: "Z2",
    cat: "zone",
    description: "Rodaje aeróbico base en terreno variado. Resistencia general.",
    duration: 70,
  },
  {
    index: 13,
    day: "DOM",
    date: "28 Jun",
    fullDate: "Domingo, 28 Jun 2026",
    type: "TL",
    cat: "trail",
    description: "Trail progresivo con técnica en descensos. Salida larga.",
    duration: 85,
  },

  // WEEK 3 (June 29 - July 5, 2026)
  {
    index: 14,
    day: "LUN",
    date: "29 Jun",
    fullDate: "Lunes, 29 Jun 2026",
    type: "[GYM](A+C+E)",
    cat: "gym",
    description: "Fuerza: Bloques A (Tobillo) + C (Tren inferior) + E (Movilidad). Sesión completa.",
    duration: 55,
  },
  {
    index: 15,
    day: "MAR",
    date: "30 Jun",
    fullDate: "Martes, 30 Jun 2026",
    type: "Z2",
    cat: "zone",
    description: "Rodaje aeróbico base. Ritmo conversacional en llano.",
    duration: 65,
  },
  {
    index: 16,
    day: "MIÉ",
    date: "01 Jul",
    fullDate: "Miércoles, 01 Jul 2026",
    type: "Z1",
    cat: "zone",
    description: "Rodaje muy suave de recuperación. Enfoque en la fluidez.",
    duration: 50,
  },
  {
    index: 17,
    day: "JUE",
    date: "02 Jul",
    fullDate: "Jueves, 02 Jul 2026",
    type: "GYM(B+D)",
    cat: "gym",
    description: "Fuerza: Bloque B (Core) + Bloque D (Estabilidad rotacional).",
    duration: 50,
  },
  {
    index: 18,
    day: "VIE",
    date: "03 Jul",
    fullDate: "Viernes, 03 Jul 2026",
    type: "[GYM](A+C+E)",
    cat: "gym",
    description: "Fuerza: Bloques A (Tobillo) + C (Tren inferior) + E (Movilidad).",
    duration: 55,
  },
  {
    index: 19,
    day: "SÁB",
    date: "04 Jul",
    fullDate: "Sábado, 04 Jul 2026",
    type: "Z2",
    cat: "zone",
    description: "Rodaje aeróbico de larga duración. Base aeróbica consolidada.",
    duration: 70,
  },
  {
    index: 20,
    day: "DOM",
    date: "05 Jul",
    fullDate: "Domingo, 05 Jul 2026",
    type: "TL",
    cat: "trail",
    description: "Trail técnico largo. Trabajo de descensos y adaptación a terreno.",
    duration: 100,
  },

  // WEEK 4 (July 6-12, 2026)
  {
    index: 21,
    day: "LUN",
    date: "06 Jul",
    fullDate: "Lunes, 06 Jul 2026",
    type: "Z2",
    cat: "zone",
    description: "Rodaje aeróbico base. Ritmo conversacional en terreno variado.",
    duration: 70,
  },
  {
    index: 22,
    day: "MAR",
    date: "07 Jul",
    fullDate: "Martes, 07 Jul 2026",
    type: "Z1",
    cat: "zone",
    description: "Rodaje muy suave de recuperación activa. Regeneración.",
    duration: 55,
  },
  {
    index: 23,
    day: "MIÉ",
    date: "08 Jul",
    fullDate: "Miércoles, 08 Jul 2026",
    type: "Z2",
    cat: "zone",
    description: "Rodaje aeróbico base. Ritmo sostenible en llano.",
    duration: 70,
  },
  {
    index: 24,
    day: "JUE",
    date: "09 Jul",
    fullDate: "Jueves, 09 Jul 2026",
    type: "[GYM](B+D)",
    cat: "gym",
    description: "Fuerza: Bloque B (Core) + Bloque D (Estabilidad rotacional).",
    duration: 50,
  },
  {
    index: 25,
    day: "VIE",
    date: "10 Jul",
    fullDate: "Viernes, 10 Jul 2026",
    type: "Z2",
    cat: "zone",
    description: "Rodaje aeróbico base de larga duración. Resistencia.",
    duration: 75,
  },
  {
    index: 26,
    day: "SÁB",
    date: "11 Jul",
    fullDate: "Sábado, 11 Jul 2026",
    type: "Z2",
    cat: "zone",
    description: "Rodaje de resistencia en terreno variado. Consolidación aeróbica.",
    duration: 75,
  },
  {
    index: 27,
    day: "DOM",
    date: "12 Jul",
    fullDate: "Domingo, 12 Jul 2026",
    type: "TL",
    cat: "trail",
    description: "Trail de resistencia larga. Última salida antes de fase intensiva.",
    duration: 120,
  },

  // WEEK 5 (July 13-19, 2026)
  {
    index: 28,
    day: "LUN",
    date: "13 Jul",
    fullDate: "Lunes, 13 Jul 2026",
    type: "Z2+S",
    cat: "zone",
    description: "Rodaje Z2 + sprints cortos. Introducción a trabajo de velocidad.",
    duration: 78,
  },
  {
    index: 29,
    day: "MAR",
    date: "14 Jul",
    fullDate: "Martes, 14 Jul 2026",
    type: "Z2+S",
    cat: "zone",
    description: "Rodaje Z2 + sprints en descenso. Trabajo de técnica rápida.",
    duration: 83,
  },
  {
    index: 30,
    day: "MIÉ",
    date: "15 Jul",
    fullDate: "Miércoles, 15 Jul 2026",
    type: "[GYM](A+C+E)",
    cat: "gym",
    description: "Fuerza: Bloques A (Tobillo) + C (Tren inferior) + E (Movilidad).",
    duration: 60,
  },
  {
    index: 31,
    day: "JUE",
    date: "16 Jul",
    fullDate: "Jueves, 16 Jul 2026",
    type: "Z2",
    cat: "zone",
    description: "Rodaje aeróbico base en recuperación. Control del ritmo.",
    duration: 70,
  },
  {
    index: 32,
    day: "VIE",
    date: "17 Jul",
    fullDate: "Viernes, 17 Jul 2026",
    type: "Z1",
    cat: "zone",
    description: "Rodaje muy suave de recuperación. Enfoque total en regeneración.",
    duration: 55,
  },
  {
    index: 33,
    day: "SÁB",
    date: "18 Jul",
    fullDate: "Sábado, 18 Jul 2026",
    type: "[GYM](B+C+D)",
    cat: "gym",
    description: "Fuerza: Bloques B (Core) + C (Tren inferior) + D (Estabilidad).",
    duration: 60,
  },
  {
    index: 34,
    day: "DOM",
    date: "19 Jul",
    fullDate: "Domingo, 19 Jul 2026",
    type: "TL+H",
    cat: "trail",
    description: "Trail intenso con work de subidas y descensos técnicos.",
    duration: 165,
  },

  // WEEK 6 (July 20 - August 4, 2026)
  {
    index: 35,
    day: "LUN",
    date: "20 Jul",
    fullDate: "Lunes, 20 Jul 2026",
    type: "REC(E)",
    cat: "recovery",
    description: "Recuperación activa completa: Bloque E (movilidad y estiramientos).",
    duration: 25,
  },
  {
    index: 36,
    day: "MAR",
    date: "21 Jul",
    fullDate: "Martes, 21 Jul 2026",
    type: "Z1",
    cat: "zone",
    description: "Rodaje muy suave de regeneración total. Bajo estrés fisiológico.",
    duration: 50,
  },
  {
    index: 37,
    day: "MIÉ",
    date: "22 Jul",
    fullDate: "Miércoles, 22 Jul 2026",
    type: "Z2",
    cat: "zone",
    description: "Rodaje aeróbico base progresivo. Retorno al ritmo de entrenamiento.",
    duration: 65,
  },
  {
    index: 38,
    day: "JUE",
    date: "23 Jul",
    fullDate: "Jueves, 23 Jul 2026",
    type: "[GYM](A+B+E)",
    cat: "gym",
    description: "Fuerza: Bloques A (Tobillo) + B (Core) + E (Movilidad). Sesión equilibrada.",
    duration: 55,
  },
  {
    index: 39,
    day: "VIE",
    date: "24 Jul",
    fullDate: "Viernes, 24 Jul 2026",
    type: "Z1",
    cat: "zone",
    description: "Rodaje muy suave de enfoque técnico. Movimiento fluido.",
    duration: 50,
  },
  {
    index: 40,
    day: "SÁB",
    date: "25 Jul",
    fullDate: "Sábado, 25 Jul 2026",
    type: "Z2",
    cat: "zone",
    description: "Rodaje aeróbico base de resistencia. Consolidación aeróbica final.",
    duration: 65,
  },
  {
    index: 41,
    day: "DOM",
    date: "04 Aug",
    fullDate: "Domingo, 04 Aug 2026",
    type: "DESC",
    cat: "rest",
    description: "Descanso completo. Fin del macrociclo de preparación MF1.",
    duration: "-",
  },
];

// Helper function to get sessions by week
export const getSessionsByWeek = (weekNumber: 1 | 2 | 3 | 4 | 5 | 6): Session[] => {
  const startIndex = (weekNumber - 1) * 7;
  const endIndex = startIndex + 7;
  return SESSIONS.slice(startIndex, endIndex);
};

// Helper function to get session by date
export const getSessionByDate = (date: string): Session | undefined => {
  return SESSIONS.find((session) => session.date === date);
};

// Helper function to get sessions by type
export const getSessionsByType = (type: string): Session[] => {
  return SESSIONS.filter((session) => session.type === type);
};

// Helper function to get sessions by category
export const getSessionsByCategory = (category: string): Session[] => {
  return SESSIONS.filter((session) => session.cat === category);
};

// Statistics
export const getTrainingStatistics = () => {
  const stats = {
    totalSessions: SESSIONS.length,
    totalDuration: 0,
    sessionsByType: {} as Record<string, number>,
    sessionsByCategory: {} as Record<string, number>,
    averageDurationPerWeek: 0,
  };

  SESSIONS.forEach((session) => {
    if (typeof session.duration === "number") {
      stats.totalDuration += session.duration;
    }

    stats.sessionsByType[session.type] = (stats.sessionsByType[session.type] || 0) + 1;
    stats.sessionsByCategory[session.cat] = (stats.sessionsByCategory[session.cat] || 0) + 1;
  });

  stats.averageDurationPerWeek = Math.round(stats.totalDuration / 6);

  return stats;
};
