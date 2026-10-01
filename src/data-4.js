/* Corchete · análisis guiado, paletas y árboles de decisión */

/* Paletas de etiquetas. c = tono de resaltador (1–10). */
CORCHETE.palettes = {
  fun: {
    name: "Funciones",
    items: [
      { id: "suj", ab: "Suj.", name: "Sujeto", c: 1 },
      { id: "nv", ab: "NV", name: "Núcleo verbal", c: 2 },
      { id: "od", ab: "OD", name: "Objeto directo", c: 3 },
      { id: "oi", ab: "OI", name: "Objeto indirecto", c: 4 },
      { id: "dat", ab: "Dat.", name: "Dativo no argumental", c: 5 },
      { id: "cpr", ab: "CPR", name: "Complemento de régimen", c: 6 },
      { id: "cag", ab: "C.Ag.", name: "Complemento agente", c: 7 },
      { id: "cc", ab: "C.Circ.", name: "Complemento circunstancial", c: 8 },
      { id: "adj", ab: "Adj.", name: "Adjunto circunstancial", c: 9 },
      { id: "pso", ab: "Pvo.S", name: "Predicativo subjetivo", c: 10 },
      { id: "pob", ab: "Pvo.O", name: "Predicativo objetivo", c: 11 },
      { id: "mod", ab: "Mod.O", name: "Modificador oracional", c: 12 }
    ]
  },
  prop: {
    name: "Proposiciones",
    items: [
      { id: "psus", ab: "Sust.", name: "Sustantiva", c: 3 },
      { id: "pesp", ab: "Rel.esp.", name: "Relativa especificativa", c: 1 },
      { id: "pexp", ab: "Rel.expl.", name: "Relativa explicativa", c: 11 },
      { id: "plib", ab: "Rel.libre", name: "Relativa libre", c: 6 },
      { id: "apro", ab: "Adv.propia", name: "Adverbial propia", c: 8 },
      { id: "aimp", ab: "Adv.impropia", name: "Adverbial impropia", c: 2 },
      { id: "coor", ab: "Coord.", name: "Coordinada", c: 9 }
    ]
  },
  se: {
    name: "Valores de se",
    items: [
      { id: "sust", ab: "Sustituto", name: "Se sustituto de le", c: 9 },
      { id: "refl", ab: "Reflexivo", name: "Se reflexivo", c: 1 },
      { id: "reci", ab: "Recíproco", name: "Se recíproco", c: 11 },
      { id: "erg", ab: "Intransit.", name: "Se intransitivizador (ergativo)", c: 3 },
      { id: "imp", ab: "Impersonal", name: "Se impersonal", c: 4 },
      { id: "pas", ab: "Pasivo", name: "Se pasivo", c: 7 },
      { id: "dia", ab: "Diacrítico", name: "Se diacrítico", c: 6 },
      { id: "inh", ab: "Inherente", name: "Se inherente", c: 2 },
      { id: "est", ab: "Estilístico", name: "Se estilístico", c: 10 }
    ]
  },
  vb: {
    name: "Construcciones verbales",
    items: [
      { id: "perif", ab: "Perífrasis", name: "Perífrasis verbal", c: 2 },
      { id: "sub", ab: "V + or. no flex.", name: "Verbo + oración no flexionada", c: 8 },
      { id: "fv", ab: "Frase verbal", name: "Frase verbal (compuesto o pasiva)", c: 1 },
      { id: "loc", ab: "Locución", name: "Locución verbal", c: 6 }
    ]
  }
};

/* Oraciones para analizar.
   parts: [texto, respuesta (id o lista de ids aceptados) o null si no se etiqueta, explicación] */
CORCHETE.analysis = [
  /* Funciones · Unidad 4 */
  { u: "u4", pal: "fun", src: "PPT 27/8 · Demonte", parts: [
    ["Los científicos", "suj", "Concuerda con el verbo en 3.ª plural."],
    ["consideran", "nv", ""],
    ["al grafeno", "od", "Se reemplaza por _lo_: _Lo consideran extraordinariamente resistente_."],
    ["extraordinariamente resistente", "pob", "Predicativo objetivo obligatorio: _considerar_ es epistémico y pide OD + predicativo."]
  ]},
  { u: "u4", pal: "fun", src: "PPT 27/8", parts: [
    ["El caballo", "suj", ""],
    ["avanzó", "nv", ""],
    ["fatigado", "pso", "Predicativo subjetivo no obligatorio: concuerda con _el caballo_ y se puede omitir."],
    ["durante toda la carrera", "adj", "Adjunto de tiempo: el verbo no lo pide."]
  ]},
  { u: "u4", pal: "fun", src: "PPT 27/8", parts: [
    ["El disertante", "suj", ""],
    ["abusó", "nv", ""],
    ["de la paciencia del público", "cpr", "_Abusar_ elige la preposición _de_; no se cambia por otra ni por un adverbio."]
  ]},
  { u: "u4", pal: "fun", src: "PPT 27/8", parts: [
    ["Los libros", "suj", "Sujeto paciente de la pasiva: concuerda con _fueron_."],
    ["fueron leídos", "nv", "Frase verbal pasiva: _ser_ + participio."],
    ["por Juan", "cag", "Complemento agente: corresponde al sujeto de la activa."]
  ]},
  { u: "u4", pal: "fun", src: "PPT 27/8", parts: [
    ["Mi abuela", "suj", ""],
    ["vive", "nv", ""],
    ["en Formosa", "cc", "Complemento circunstancial locativo: _vivir_ lo pide (*_Mi abuela vive_ en este sentido)."],
    ["desde 1980", "adj", "Adjunto de tiempo, omisible."]
  ]},
  { u: "u4", pal: "fun", src: "PPT 27/8, diap. 6", parts: [
    ["En la reunión de ayer", "adj", "Adjunto de lugar y tiempo."],
    ["los estudiantes", "suj", ""],
    ["explicaron", "nv", ""],
    ["extensamente", "adj", "Adjunto de modo: no lo selecciona _explicar_."],
    ["su propuesta", "od", "_La_ explicaron. Sin él la oración falla: *_Los estudiantes explicaron_."]
  ]},
  { u: "u4", pal: "fun", src: "Di Tullio, cap. VII", parts: [
    ["Juan", "suj", ""],
    ["le", "oi", "Clítico dativo que duplica al OI."],
    ["vendió", "nv", ""],
    ["el libro", "od", "_Se lo vendió_."],
    ["a María", "oi", "OI de un verbo ditransitivo de transferencia."]
  ]},
  { u: "u4", pal: "fun", src: "Di Tullio, cap. VII", parts: [
    ["María", "suj", ""],
    ["le", "dat", "Duplica al benefactivo."],
    ["tejió", "nv", ""],
    ["un chaleco", "od", ""],
    ["a su nieto", "dat", "Benefactivo: alterna con _para su nieto_. _Tejer_ no es ditransitivo."]
  ]},
  { u: "u4", pal: "fun", src: "Di Tullio, cap. VII", parts: [
    ["A María", "dat", "Dativo de interés, con un verbo inacusativo (_faltar_). Di Tullio lo considera una variante del OI."],
    ["le", "dat", ""],
    ["faltan", "nv", ""],
    ["dos materias", "suj", "Sujeto pospuesto: concuerda con _faltan_."]
  ]},
  { u: "u4", pal: "fun", src: "PPT 27/8, diap. 14", parts: [
    ["Los sindicalistas", "suj", ""],
    ["estaban", "nv", ""],
    ["molestos", "pso", "Predicativo subjetivo obligatorio: _estar_ es copulativo."]
  ]},
  { u: "u4", pal: "fun", src: "PPT 27/8", parts: [
    ["El jurado", "suj", ""],
    ["lo", "od", ""],
    ["declaró", "nv", ""],
    ["inocente", "pob", "Predicativo objetivo obligatorio: concuerda con _lo_; _declarar_ lo exige."]
  ]},
  { u: "u4", pal: "fun", src: "PPT 27/8, diap. 27", parts: [
    ["El carpintero", "suj", ""],
    ["lijó", "nv", ""],
    ["la madera", "od", ""],
    ["suave", "pob", "Predicativo resultativo: expresa el resultado de lijar."]
  ]},
  { u: "u4", pal: "fun", src: "PPT 27/8, diap. 13", parts: [
    ["La disputa por la herencia", "suj", ""],
    ["concluyó", "nv", ""],
    ["felizmente", "adj", "Sin pausa modifica al SV: dice cómo concluyó (las partes se pusieron de acuerdo)."]
  ]},
  { u: "u4", pal: "fun", src: "PPT 27/8, diap. 13", parts: [
    ["Felizmente,", "mod", "Con pausa valora toda la oración: no dice cómo terminó la disputa."],
    ["la disputa por la herencia", "suj", ""],
    ["concluyó", "nv", ""]
  ]},
  { u: "u4", pal: "fun", src: "PPT 27/8, diap. 58", parts: [
    ["Los niños", "suj", ""],
    ["festejarán", "nv", ""],
    ["mañana", "adj", "Adjunto de tiempo: se reemplaza por _entonces_."],
    ["su día", "od", ""],
    ["en el Paraíso de los Niños", "adj", "Adjunto de lugar: se reemplaza por _allí_."]
  ]},
  { u: "u4", pal: "fun", src: "PPT 27/8, diap. 7", parts: [
    ["La abuela", "suj", ""],
    ["trató", "nv", ""],
    ["afectuosamente", "cc", "Complemento de modo: en esta acepción, _tratar_ lo pide."],
    ["a los chicos", "od", "_Los_ trató."]
  ]},
  { u: "u4", pal: "fun", src: "PPT 27/8, diap. 32", parts: [
    ["Ana", "suj", ""],
    ["se puso", "nv", "Verbo pseudocopulativo de cambio de estado."],
    ["triste", "pso", "Predicativo subjetivo obligatorio: *_Ana se puso_."],
    ["al recibir la noticia", "adj", "Adjunto de tiempo (construcción de infinitivo)."]
  ]},
  { u: "u4", pal: "fun", src: "PPT 27/8, diap. 53", parts: [
    ["La inteligencia artificial", "suj", ""],
    ["sirve", "nv", ""],
    ["de traductor", "pso", "Predicativo obligatorio introducido por _de_ (alterna con _como_): denota rol."]
  ]},
  { u: "u4", pal: "fun", src: "PPT 27/8, diap. 33", parts: [
    ["La secretaria", "suj", ""],
    ["encontró", "nv", ""],
    ["el informe", "od", ""],
    ["confuso", "pob", "Con predicativo, _encontrar_ significa ‘juzgar’: sin él, significa ‘hallar’."]
  ]},
  { u: "u4", pal: "fun", src: "PPT 27/8, diap. 12", parts: [
    ["No prives", "nv", "Imperativo con sujeto tácito (vos)."],
    ["a tus hijos", "od", "_No los prives_."],
    ["de la herencia del abuelo", "cpr", "_Privar_ pide OD y CPR a la vez."]
  ]},
  { u: "u5", pal: "fun", src: "PPT 24/9", parts: [
    ["Juan", "suj", ""],
    ["tiene que presentar", "nv", "Perífrasis modal: un solo núcleo verbal."],
    ["un trabajo final", "od", "Lo selecciona _presentar_, el auxiliado."]
  ]},

  /* Construcciones verbales · Unidad 5 */
  { u: "u5", pal: "vb", src: "Di Tullio, cap. XIV", parts: [
    ["Juan", null, ""],
    ["suele cantar", "perif", "*_Juan lo suele_, *_¿Qué suele Juan?_: perífrasis habitual."],
    ["la Marsellesa.", null, ""]
  ]},
  { u: "u5", pal: "vb", src: "Di Tullio, cap. XIV", parts: [
    ["Juan", null, ""],
    ["quiere cantar", "sub", "_Juan lo quiere_, _¿Qué quiere Juan?_: el infinitivo es el OD de _quiere_."],
    ["la Marsellesa.", null, ""]
  ]},
  { u: "u5", pal: "vb", src: "PPT 24/9, diap. 9", parts: [
    ["El papa", null, ""],
    ["puede viajar", "perif", "*_El papa lo puede_: perífrasis modal."],
    ["a América.", null, ""]
  ]},
  { u: "u5", pal: "vb", src: "PPT 24/9, diap. 9", parts: [
    ["El papa", null, ""],
    ["desea viajar", "sub", "_El papa lo desea_ / _desea un viaje_ / _desea que viaje_."],
    ["a América.", null, ""]
  ]},
  { u: "u5", pal: "vb", src: "PPT 1/10, diap. 15", parts: [
    ["Todos", null, ""],
    ["habían pagado", "fv", "Tiempo compuesto: _haber_ + participio invariable."],
    ["sus entradas.", null, ""]
  ]},
  { u: "u5", pal: "vb", src: "PPT 1/10, diap. 15", parts: [
    ["Los griegos", null, ""],
    ["fueron conquistados", "fv", "Frase verbal pasiva: _ser_ + participio concordado."],
    ["por los romanos.", null, ""]
  ]},
  { u: "u5", pal: "vb", src: "PPT 1/10, diap. 16", parts: [
    ["Los chicos", null, ""],
    ["echan de menos", "loc", "Locución verbal: equivale a ‘extrañan’ y no admite cambios."],
    ["a sus amigos.", null, ""]
  ]},
  { u: "u5", pal: "vb", src: "PPT 24/9, diap. 4", parts: [
    ["Ya", null, ""],
    ["llevo escritas", "perif", "Perífrasis de participio: el participio concuerda con el OD."],
    ["varias páginas del informe.", null, ""]
  ]},
  { u: "u5", pal: "vb", src: "PPT 24/9, diap. 3", parts: [
    ["Se", null, ""],
    ["echó a llorar", "perif", "Perífrasis incoativa."],
    ["en plena función teatral.", null, ""]
  ]},
  { u: "u5", pal: "vb", src: "Di Tullio, cap. XIV", parts: [
    ["El gerente", null, ""],
    ["lamenta otorgar", "sub", "El clítico no puede subir: *_se lo lamenta otorgar_. No hay reestructuración."],
    ["el crédito.", null, ""]
  ]},
  { u: "u5", pal: "vb", src: "PPT 1/10, diap. 16", parts: [
    ["En la oficina le", null, ""],
    ["tomaron el pelo", "loc", "Locución verbal: ‘burlarse’."],
    ["al pasante.", null, ""]
  ]},

  /* Se · Unidad 6 */
  { u: "u6", pal: "se", src: "Di Tullio, cap. X", parts: [["Juan", null, ""], ["se", "sust", "Delante de _lo_ reemplaza a _le_: _le dio el libro_ → _se lo dio_."], ["lo dio.", null, ""]] },
  { u: "u6", pal: "se", src: "Di Tullio, cap. X", parts: [["Silvia", null, ""], ["se", "refl", "Reflexivo en función de OI: _se cepilló los dientes (a sí misma)_."], ["cepilló los dientes.", null, ""]] },
  { u: "u6", pal: "se", src: "Di Tullio, cap. X", parts: [["Juan y María", null, ""], ["se", "reci", "Admite _mutuamente_ / _el uno al otro_."], ["besaron.", null, ""]] },
  { u: "u6", pal: "se", src: "Di Tullio, cap. X", parts: [["La nieve", null, ""], ["se", "erg", "Forma anticausativa de _El calor derritió la nieve_."], ["derritió con el calor.", null, ""]] },
  { u: "u6", pal: "se", src: "Di Tullio, cap. X", parts: [["Aquí", null, ""], ["se", "imp", "Sin sujeto, agente humano indefinido (‘la gente’)."], ["trabaja demasiado.", null, ""]] },
  { u: "u6", pal: "se", src: "Di Tullio, cap. X", parts: [["", null, ""], ["Se", "pas", "_Departamentos_ es sujeto: el verbo concuerda en plural."], ["venden departamentos.", null, ""]] },
  { u: "u6", pal: "se", src: "Di Tullio, cap. X", parts: [["Juan", null, ""], ["se", "dia", "_Acordar algo_ ≠ _acordarse de algo_: cambian significado y régimen."], ["acordó de las condiciones.", null, ""]] },
  { u: "u6", pal: "se", src: "Di Tullio, cap. X", parts: [["No", null, ""], ["se", "inh", "_Percatar_ no existe sin _se_."], ["han percatado aún de sus derechos.", null, ""]] },
  { u: "u6", pal: "se", src: "Di Tullio, cap. X", parts: [["Juan", null, ""], ["se", "est", "Omisible, con OD determinado (_veinte cigarrillos_)."], ["fumó veinte cigarrillos.", null, ""]] },
  { u: "u6", pal: "se", src: "Di Tullio, cap. X", parts: [["", null, ""], ["Se", "pas", "La final supone un agente implícito."], ["cerró la puerta para que no entraran moscas.", null, ""]] },
  { u: "u6", pal: "se", src: "Di Tullio, cap. X", parts: [["La puerta", null, ""], ["se", "erg", "Proceso espontáneo: admite _sola_."], ["cerró sola.", null, ""]] },
  { u: "u6", pal: "se", src: "Di Tullio, cap. X", parts: [["Juan", null, ""], ["se", "erg", "Cambio de posición: no admite _a sí mismo_."], ["levantó temprano.", null, ""]] },
  { u: "u6", pal: "se", src: "Di Tullio, cap. X", parts: [["En este país no", null, ""], ["se", "imp", "El OD lleva _a_ y el verbo queda en singular."], ["persigue a los delincuentes.", null, ""]] },
  { u: "u6", pal: "se", src: "Di Tullio, cap. X", parts: [["Los empleados no", null, ""], ["se", "inh", "_Dignarse_ es inherentemente pronominal."], ["dignaron saludar al jefe.", null, ""]] },

  /* Proposiciones · Unidad 7 */
  { u: "u7", pal: "prop", src: "Ciapuscio y otros, cap. I", parts: [["La corte dictaminó", null, ""], ["que la ley de pesificación es anticonstitucional", "psus", "OD de _dictaminó_: _lo dictaminó_."]] },
  { u: "u7", pal: "prop", src: "Ciapuscio y otros, cap. I", parts: [["Los ahorristas", null, ""], ["que se habían reunido en tribunales", "pesp", "Sin pausa: restringe a los ahorristas que se reunieron."], ["festejaron el fallo.", null, ""]] },
  { u: "u7", pal: "prop", src: "Ciapuscio y otros, cap. II", parts: [["Los diputados,", null, ""], ["que votaron afirmativamente,", "pexp", "Entre comas: se refiere a todos los diputados."], ["se retiraron de inmediato.", null, ""]] },
  { u: "u7", pal: "prop", src: "Ciapuscio y otros, cap. II", parts: [["Los que no aprueben las materias", "plib", "Sin antecedente: funciona como SN sujeto."], ["no ingresarán a la universidad.", null, ""]] },
  { u: "u7", pal: "prop", src: "Ciapuscio y otros, cap. I", parts: [["La gobernadora se marchó", null, ""], ["cuando se hizo público el dictamen", "apro", "Temporal: se reemplaza por _entonces_."]] },
  { u: "u7", pal: "prop", src: "Ciapuscio y otros, cap. I", parts: [["El gobierno intenta tranquilizar los ánimos", null, ""], ["porque teme una turbulencia social", "aimp", "Causal: no se reemplaza por un adverbio."]] },
  { u: "u7", pal: "prop", src: "Ciapuscio y otros, cap. I", parts: [["Si la economía se mantiene calma,", "aimp", "Condicional: cosubordinación con la principal."], ["es posible", null, ""], ["que lleguemos a las elecciones de abril", "psus", "Sujeto de _es posible_: _eso es posible_."]] },
  { u: "u7", pal: "prop", src: "Ciapuscio y otros, cap. I", parts: [["Los investigadores seguían con la pesquisa", "coor", ""], ["y", null, ""], ["los familiares sugerían nuevas hipótesis", "coor", "Dos proposiciones coordinadas por _y_: oración compuesta."]] },
  { u: "u7", pal: "prop", src: "Ciapuscio y otros, cap. I", parts: [["Me preguntaron", null, ""], ["si había leído la nueva versión", "psus", "Interrogativa indirecta total: OD de _preguntaron_."]] },
  { u: "u7", pal: "prop", src: "Ciapuscio y otros, cap. IV", parts: [["Dejé el mensaje", null, ""], ["donde me lo pediste", ["apro", "plib"], "Adverbial propia locativa (= _allí_). Por su estructura también es una relativa libre."]] },
  { u: "u7", pal: "prop", src: "Ciapuscio y otros, cap. IV", parts: [["Aunque me lo pidan,", "aimp", "Concesiva: equivale a _Me lo podrán pedir, pero…_"], ["no lo voy a hacer.", null, ""]] },
  { u: "u7", pal: "prop", src: "Ciapuscio y otros, cap. II", parts: [["Donó al museo la pluma", null, ""], ["con la que solía escribir sus novelas", "pesp", "Restringe _la pluma_; _la que_ es término del SP (instrumento) dentro de la relativa."]] },
  { u: "u7", pal: "prop", src: "Ciapuscio y otros, cap. IV", parts: [["Si no me equivoco,", "aimp", "Condicional que modifica la modalidad: _digo que hoy es viernes_."], ["hoy es viernes.", null, ""]] }
];

/* Árboles de decisión. Cada nodo: q (pregunta), h (ayuda), opts [{l, go}] o r (resultado). */
CORCHETE.trees = [
  {
    id: "funcion",
    title: "¿Qué función cumple?",
    desc: "Para un constituyente del predicado: de OD a modificador oracional, en orden de pruebas.",
    u: "u4",
    start: "a",
    nodes: {
      a: { q: "¿Se puede reemplazar por _lo, la, los, las_?", h: "_Leí la novela → La leí._ Ojo: con _pesar, medir, costar_ la prueba falla.", opts: [{ l: "Sí", go: "od" }, { l: "No", go: "b" }] },
      b: { q: "¿Se puede reemplazar o duplicar con _le, les_ (o _se_ delante de _lo_)?", h: "_Le vendió el libro a María._", opts: [{ l: "Sí", go: "dat" }, { l: "No", go: "c" }] },
      dat: { q: "¿Qué tipo de verbo y de relación hay?", h: "El clítico dativo cumple varias funciones.", opts: [
        { l: "Verbo ditransitivo: dar, vender, decir, pedir", go: "r_oi" },
        { l: "Inacusativo como gustar, faltar, importar", go: "r_int" },
        { l: "Alterna con _para_ y es omisible", go: "r_ben" },
        { l: "Poseedor de una parte del cuerpo o algo personal", go: "r_pos" },
        { l: "Clítico emocional (_me_), siempre omisible", go: "r_eti" }
      ]},
      c: { q: "¿Empieza con preposición?", opts: [{ l: "Sí", go: "d" }, { l: "No", go: "f" }] },
      d: { q: "¿Es _por_ + quien hace la acción en una oración pasiva?", h: "_Los libros fueron leídos por Juan._", opts: [{ l: "Sí", go: "r_cag" }, { l: "No", go: "e" }] },
      e: { q: "¿La preposición es fija, elegida por el verbo, y no se puede cambiar ni reemplazar por un adverbio?", h: "_abusar de, insistir en, radicar en, confiar en_", opts: [{ l: "Sí", go: "r_cpr" }, { l: "No", go: "f" }] },
      f: { q: "¿Concuerda en género y número con el sujeto o el OD y dice algo de él?", h: "_Protestaban molestos._ _Lo declararon inocente._", opts: [{ l: "Sí, con el sujeto", go: "g" }, { l: "Sí, con el OD", go: "g2" }, { l: "No", go: "h" }] },
      g: { q: "Si lo quitás, ¿la oración falla o el verbo cambia de sentido?", h: "Copulativos y pseudocopulativos: _ser, estar, ponerse, volverse, quedarse, seguir_.", opts: [{ l: "Sí", go: "r_pso_ob" }, { l: "No", go: "r_pso_no" }] },
      g2: { q: "Si lo quitás, ¿la oración falla o el verbo cambia de sentido?", h: "_considerar, declarar, nombrar, volver, dejar_: _encontró el informe confuso_ / _encontró el informe_.", opts: [{ l: "Sí", go: "r_pob_ob" }, { l: "No", go: "r_pob_no" }] },
      h: { q: "¿Lo pide el verbo? (sin él la oración queda incompleta)", h: "_Vive en Formosa. Se portaron muy bien. Ana fue a la pieza._", opts: [{ l: "Sí", go: "r_cc" }, { l: "No", go: "i" }] },
      i: { q: "¿Afecta a toda la oración, va separado por pausa y valora lo dicho?", h: "_Felizmente, la disputa concluyó._", opts: [{ l: "Sí", go: "r_mod" }, { l: "No", go: "r_adj" }] },
      od: { r: "Objeto directo", x: "Confirmalo con la pasiva (pasa a sujeto) y la _a_ ante persona específica. Si es un complemento de medida (_pesa 90 kg_), es un OD periférico." },
      r_oi: { r: "Objeto indirecto", x: "Complemento de verbo ditransitivo, con _a_. Con OD pronominal aparece _se_: _Se lo vendió_." },
      r_int: { r: "Dativo de interés", x: "Con inacusativos como _gustar, faltar_. Di Tullio lo considera una variante del OI." },
      r_ben: { r: "Dativo benefactivo", x: "Alterna con _para_ y puede aparecer con casi cualquier verbo de acción: es un adjunto." },
      r_pos: { r: "Dativo posesivo", x: "Marca al poseedor: _Le afeitaron el bigote_." },
      r_eti: { r: "Dativo ético", x: "Participación emocional del hablante: _No te me duermas_." },
      r_cag: { r: "Complemento agente", x: "Corresponde al sujeto de la oración activa." },
      r_cpr: { r: "Complemento de régimen", x: "Argumento con preposición vacía, regida por el verbo." },
      r_pso_ob: { r: "Predicativo subjetivo obligatorio", x: "Con copulativos o pseudocopulativos. Con estos últimos no se reemplaza por _lo_." },
      r_pso_no: { r: "Predicativo subjetivo no obligatorio", x: "Predicado de estadio, omisible: _El caballo avanzó fatigado_." },
      r_pob_ob: { r: "Predicativo objetivo obligatorio", x: "Seleccionado por verbos epistémicos, declarativos, designativos o causativos." },
      r_pob_no: { r: "Predicativo objetivo no obligatorio", x: "Adjunto descriptivo o resultativo: _entregó el auto reparado_." },
      r_cc: { r: "Complemento circunstancial", x: "Circunstancial seleccionado: locativo, de origen, de destino o de modo." },
      r_mod: { r: "Modificador oracional", x: "No modifica al SV sino a toda la oración." },
      r_adj: { r: "Adjunto circunstancial", x: "Omisible, no seleccionado. Clasificalo por su significado: tiempo, lugar, modo, causa, fin…" }
    }
  },
  {
    id: "perifrasis",
    title: "¿Hay perífrasis?",
    desc: "Las pruebas de Di Tullio y de la cátedra, paso a paso.",
    u: "u5",
    start: "a",
    nodes: {
      a: { q: "¿Hay un verbo conjugado seguido de infinitivo, gerundio o participio?", opts: [{ l: "Sí", go: "b" }, { l: "No", go: "r_no" }] },
      b: { q: "¿Es _haber_ + participio invariable, o _ser_ + participio que concuerda con el sujeto?", h: "_Ha desaparecido. Fue reemplazado._", opts: [{ l: "Sí", go: "r_fv" }, { l: "No", go: "c" }] },
      c: { q: "¿Es una expresión fija que equivale a un verbo simple y no admite cambios?", h: "_echar de menos, meter la pata, tomar el pelo_", opts: [{ l: "Sí", go: "r_loc" }, { l: "No", go: "d" }] },
      d: { q: "Reemplazá la forma no personal por un SN, por _que_ + verbo conjugado o por _lo_. ¿Queda gramatical?", h: "_Juan lo desea_ ✓ · *_Juan lo suele_ ✗", opts: [{ l: "Sí", go: "r_sub" }, { l: "No", go: "e" }] },
      e: { q: "Preguntá con _qué_ + verbo conjugado. ¿Es gramatical?", h: "*_¿Qué suele Juan?_ · _¿Qué quiere Juan?_", opts: [{ l: "Sí", go: "r_sub" }, { l: "No", go: "f" }] },
      f: { q: "¿Funciona con un verbo impersonal y admite la pasiva?", h: "_Suele haber gente. Va a llover. La Marsellesa suele ser cantada._", opts: [{ l: "Sí", go: "r_perif" }, { l: "No / no estoy seguro", go: "g" }] },
      g: { q: "¿Es un verbo de movimiento (_ir, volver, seguir, andar_) que puede tener sentido pleno?", h: "_Juan va a Buenos Aires a saludarla._", opts: [{ l: "Sí", go: "r_mov" }, { l: "No", go: "r_perif" }] },
      r_no: { r: "No hay perífrasis", x: "Un solo verbo es el núcleo del predicado." },
      r_fv: { r: "Frase verbal", x: "Tiempo compuesto o pasiva con _ser_. La cátedra reserva este nombre para esos dos casos." },
      r_loc: { r: "Locución verbal", x: "Unidad léxica fija: no admite cambios sintagmáticos ni paradigmáticos." },
      r_sub: { r: "Verbo + oración no flexionada", x: "La forma no personal tiene carga nominal: es complemento del verbo conjugado. Cada verbo es núcleo de una oración distinta." },
      r_perif: { r: "Perífrasis verbal", x: "Un solo núcleo del predicado. Clasificala: temporal (_ir a_), aspectual (_comenzar a, estar por, volver a, soler, estar_ + ger.) o modal (_poder, deber, tener que, haber de_)." },
      r_mov: { r: "Probá con un clítico", x: "Si el clítico sube al verbo conjugado (_Juan la va a saludar_), es perífrasis. Si no (_va a Buenos Aires a saludarla_), es un verbo de movimiento pleno." }
    }
  },
  {
    id: "se",
    title: "¿Qué se es?",
    desc: "Las pruebas de Di Tullio ordenadas para descartar de a una.",
    u: "u6",
    start: "a",
    nodes: {
      a: { q: "¿El _se_ está delante de _lo, la, los, las_ y reemplaza a _le_?", h: "_Juan se lo dio (a María)._", opts: [{ l: "Sí", go: "r_sust" }, { l: "No", go: "b" }] },
      b: { q: "¿Existe el verbo sin _se_?", h: "_quejar_, _arrepentir_, _percatar_ no existen solos.", opts: [{ l: "No existe", go: "r_inh" }, { l: "Sí existe", go: "c" }] },
      c: { q: "Sin _se_, ¿el verbo cambia de significado o de régimen?", h: "_acordar algo / acordarse de algo_; _negar / negarse a_", opts: [{ l: "Sí", go: "r_dia" }, { l: "No", go: "d" }] },
      d: { q: "¿Admite _a sí mismo_?", h: "_Juan se considera un genio (a sí mismo)._", opts: [{ l: "Sí", go: "r_refl" }, { l: "No", go: "e" }] },
      e: { q: "Con sujeto plural, ¿admite _mutuamente_ o _el uno al otro_?", opts: [{ l: "Sí", go: "r_reci" }, { l: "No", go: "f" }] },
      f: { q: "¿Se puede quitar sin cambiar nada, y el OD está determinado?", h: "_Juan (se) fumó veinte cigarrillos._", opts: [{ l: "Sí", go: "r_est" }, { l: "No", go: "g" }] },
      g: { q: "¿Hay un sujeto con el que concuerda el verbo?", h: "_Se venden casas_ (sí) · _Se trabaja mucho_ (no)", opts: [{ l: "Sí", go: "h" }, { l: "No", go: "r_imp" }] },
      h: { q: "¿Admite _para que…_ o _deliberadamente_ (hay un agente implícito)?", h: "_Se hundió el barco para cobrar el seguro._", opts: [{ l: "Sí", go: "r_pas" }, { l: "No: ocurre solo", go: "r_erg" }] },
      r_sust: { r: "Se sustituto", x: "Variante de _le_ ante clítico acusativo. No forma construcción pronominal." },
      r_inh: { r: "Se inherente", x: "Forma parte del verbo y rechaza la transitividad." },
      r_dia: { r: "Se diacrítico", x: "Distingue dos verbos con distinto significado o régimen." },
      r_refl: { r: "Se reflexivo", x: "El sujeto es agente y afectado. Puede ser OD u OI." },
      r_reci: { r: "Se recíproco", x: "Cada uno actúa sobre el otro." },
      r_est: { r: "Se estilístico", x: "Omisible; exige una acción delimitada." },
      r_imp: { r: "Se impersonal", x: "Agente humano indefinido; verbo en 3.ª del singular. Si hay OD de persona, lleva _a_." },
      r_pas: { r: "Se pasivo", x: "El paciente es sujeto; solo con verbos transitivos." },
      r_erg: { r: "Se intransitivizador", x: "Ergativo o anticausativo: proceso espontáneo, admite _solo_. También los cambios de posición: _se levantó_." }
    }
  },
  {
    id: "proposicion",
    title: "¿Qué proposición es?",
    desc: "Coordinada, sustantiva, relativa o adverbial, según Ciapuscio y otros.",
    u: "u7",
    start: "a",
    nodes: {
      a: { q: "¿Está unida a otra del mismo nivel por _y, ni, o, pero, sino_?", opts: [{ l: "Sí", go: "r_coor" }, { l: "No", go: "b" }] },
      b: { q: "¿Se puede reemplazar por _eso_ o _lo_ (es sujeto, OD o término)?", h: "_Dictaminó que la ley es inconstitucional → Lo dictaminó._", opts: [{ l: "Sí", go: "r_sus" }, { l: "No", go: "c" }] },
      c: { q: "¿Empieza con un relativo (_que, quien, el cual, cuyo_) que tiene un antecedente delante?", opts: [{ l: "Sí", go: "d" }, { l: "No", go: "e" }] },
      d: { q: "¿Va entre comas?", opts: [{ l: "Sí", go: "r_exp" }, { l: "No", go: "r_esp" }] },
      e: { q: "¿Se puede reemplazar por _allí, entonces_ o _así_?", h: "_Llegó cuando no lo esperaba → Llegó entonces._", opts: [{ l: "Sí", go: "r_apro" }, { l: "No", go: "f" }] },
      f: { q: "¿Expresa causa, fin, condición o concesión (_porque, para que, si, aunque_)?", opts: [{ l: "Sí", go: "r_aimp" }, { l: "No", go: "g" }] },
      g: { q: "¿Empieza con un relativo sin antecedente (_los que, quien, lo que_)?", opts: [{ l: "Sí", go: "r_lib" }, { l: "No", go: "r_comp" }] },
      r_coor: { r: "Proposición coordinada", x: "La oración es compuesta." },
      r_sus: { r: "Proposición sustantiva", x: "Argumental. Puede ir con _que_, con _si_ (interrogativa total), con qu- (parcial) o en infinitivo." },
      r_exp: { r: "Relativa explicativa", x: "No restringe la referencia del antecedente." },
      r_esp: { r: "Relativa especificativa", x: "Restringe la referencia del antecedente." },
      r_apro: { r: "Adverbial propia", x: "Locativa, temporal o modal. Si la encabeza _donde, cuando_ o _como_, estructuralmente es una relativa libre." },
      r_aimp: { r: "Adverbial impropia", x: "Cosubordinación. Fijate si modifica al SV, al núcleo oracional o a la modalidad." },
      r_lib: { r: "Relativa libre", x: "Funciona como SN o SAdv." },
      r_comp: { r: "Revisá comparativas y consecutivas", x: "_tan… que, más… que_: forman un grupo aparte." }
    }
  }
];
